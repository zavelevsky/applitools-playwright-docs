# **API Reference**

Welcome to the API reference for integrating Applitools Eyes with Playwright. This section provides detailed information on configuring Applitools Eyes within your Playwright tests and utilizing its powerful visual testing capabilities.

---

## **Overview**

Integrating Applitools Eyes with Playwright involves two main steps:

1. **Configuration**: Update your `playwright.config.ts` file to include Applitools Eyes settings under `eyesConfig`.  
2. **Writing Tests**: Import `test` from `@applitools/eyes-playwright` and use the `eyes` object within your tests to perform visual checkpoints using the `eyes.check` method.

   **Note:** Additionally, Applitools Eyes supports Playwright's native visual assertion methods. If you import `expect` from `@applitools/eyes-playwright`, your existing tests using `expect(page).toHaveScreenshot()` will work seamlessly with Applitools Eyes. However, it is recommended to use `eyes.check` for more advanced visual testing features.

This API reference is divided into the following sections:

* **Configuration Options**: A comprehensive list of all available configuration options for Applitools Eyes.  
* **Using `eyes.check` in Tests**: Detailed usage of the `eyes.check` method, including parameters and examples.  
* **Defining Regions with Selectors and Locators**: How to specify different types of regions when calling `eyes.check`.

---

## **Configuration Options**

To configure Applitools Eyes in your Playwright project, you need to update your `playwright.config.ts` file. The configuration options are set under the `eyesConfig` property within the `use` section.

### **Example Configuration**

`// playwright.config.ts`  
`import { defineConfig } from '@playwright/test';`  
`import { EyesFixture } from '@applitools/eyes-playwright';`

`export default defineConfig<EyesFixture>({`  
  `// Other Playwright configurations...`  
  `reporter: '@applitools/eyes-playwright/reporter',`  
  `use: {`  
    `eyesConfig: {`  
      `apiKey: 'YOUR_API_KEY',`  
      `appName: 'My App',`  
      `matchLevel: 'Strict',`  
      `// Runner type: 'ufg' for Ultrafast Grid, 'classic' for Classic runner`  
      `type: 'ufg',`  
      `batch: { name: 'Regression Tests' },`  
      `// Additional configuration options...`  
    `},`  
  `},`  
`});`

**Note**: All configuration options are optional. If an option is not specified, a default value is used. Default behaviors are provided in the option descriptions below.

### **Configuration Options List**

Below is a detailed list of all available configuration options for Applitools Eyes.

---

### **Common Configuration Options**

These options apply to both Ultrafast Grid (UFG) and Classic runners.

#### **Authentication and Server Configuration**

* **`apiKey`** (string):  
  Your Applitools API key. This key authenticates your account and is required for all interactions with the Applitools Eyes server.

  **Default**: Reads from the `APPLITOOLS_API_KEY` environment variable if not specified.

  `apiKey: 'YOUR_API_KEY',`

* **`serverUrl`** (string):  
  The URL of the Applitools Eyes server. Use this if you are connecting to a dedicated cloud instance or an on-premises server.

  **Default**: `'https://eyesapi.applitools.com'` (Applitools public cloud server)

  `serverUrl: 'https://eyesapi.applitools.com',`

* **`proxy`** (object):  
  Proxy settings if your network requires a proxy to access the Applitools Eyes server.

  **Default**: No proxy is used if unspecified.

  `proxy: {`  
    `url: 'http://proxy.example.com:8080',`  
    `username: 'proxyUser',`  
    `password: 'proxyPass',`  
  `},`

---

#### **Test and Application Identification**

* **`appName`** (string):  
  The name of your application under test. This name groups tests related to the same application in the Applitools Dashboard.

  **Default**: set to `'My App'`.

  `appName: 'My Application',`

* **`testName`** (string | function):  
  The name of the test case. Can be a string or a function that receives `testInfo` and returns a string.

  **Default**: The test title path (e.g., `'Suite > Test Name'`).

  `testName: 'Login Page Test',`  
  `// Or using a function:`  
  ``testName: (testInfo) => `Test: ${testInfo.title}`,``

* **`properties`** (array):  
  Custom key-value pairs associated with the test.

  `properties: [`  
    `{ name: 'Environment', value: 'Staging' },`  
    `{ name: 'Version', value: '1.0.0' },`  
  `],`

---

#### **Batch Configuration**

* **`batch`** (object):  
  Defines the batch to which the tests belong. Batches group related tests together in the Applitools Dashboard.

  **Default**: A new batch is created for each test run with a unique ID.

  * **`id`** (string):  
    Unique identifier for the batch. If not specified, a unique ID is generated.  
  * **`name`** (string):  
    Name of the batch.  
  * **`sequenceName`** (string):  
    Sequence name for batch ordering, tracking batch execution statistics over time.  
  * **`notifyOnCompletion`** (boolean):  
    If `true`, sends a notification when the batch completes.  
    **Note:** this feature requires an extra set-up step, as detailed [here](https://applitools.com/docs/features/batch-completion-notifications.html).  
    `batch: {`  
      `id: 'batch-id-123',`  
      `name: 'Regression Tests',`  
      `notifyOnCompletion: true,`  
    `},`

---

#### **Branching and Baseline Management**

* **`branchName`** (string):  
  The branch name in your version control system. Used for baseline branching in Applitools.

  **Default**: `'default'`.

  `branchName: 'feature/login-page',`

* **`parentBranchName`** (string):  
  The parent branch name, typically your main or master branch. Baseline not found in your branch will be taken from the parent branch

  **Default**: Not set.

  `parentBranchName: 'main',`

---

#### **Visual Comparison Settings**

* **`matchLevel`** (string):  
  The match level for visual comparisons. Determines how strictly images are compared.

  **Default**: `'Strict'`.

  Possible values:  
  * `'Strict'` (default): Detects any meaningful differences visible to the human eye.  
  * `'Layout'`: Ignores content changes but detects layout shifts.  
  * `'IgnoreColors'`: Ignores  style changes but detects content and layout changes.  
  * `'Dynamic'`: Automatically ignores dynamic content that follows a consistent pattern, such as dates, email addresses or custom patterns.

    `matchLevel: 'Strict',`

* **`ignoreDisplacements`** (boolean):  
  If `true`, ignores vertical shifts in content during visual comparisons. It is useful for reducing diff noise when the UI changes frequently.

  **Default**: `false`.

  `ignoreDisplacements: true,`

---

#### **Exception Handling Configuration**

* **`failTestsOnDiff`** (string | boolean):  
  Controls whether exceptions are thrown when visual differences are detected.

  **Default**: `'afterEach'`.

  Possible values:  
  * `'afterEach'` (default): Throws an exception after each test that has visual differences.  
  * `'afterAll'`: Throws an exception after all tests have run if any visual differences are detected (more performant).  
  * `false`: Does not throw exceptions for visual differences (best used with Applitools' Continuous Testing platform).

  `failTestsOnDiff: 'afterEach',`

* **`afterAll`** (function):  
  A callback function that receives the test results after all tests have run. Useful for custom reporting or processing.

  **Default**: No callback is executed.

  `afterAll: async (results) => {`  
    `for (const result of results) {`  
      ``console.log(`Test: ${result.testResults.name}, URL: ${result.testResults.url}`);``  
    `}`  
  `},`

---

### **Viewport Configuration**

* **`viewportSize`** (object):  
  The viewport size for the browser where the test is executing. It may affect the resources downloaded to the browser.

  **Default**: Playwright's default viewport size.

  **Note**: This affects the local browser during test execution. For the Ultrafast Grid, viewport sizes specified in `browsersInfo` determine the viewport sizes of the rendering browsers.

  `viewportSize: { width: 1280, height: 720 },`

---

### **Runner Configuration**

You can choose between two types of runners:

* **Ultrafast Grid (UFG)**: Allows you to perform cross-browser testing by rendering your application across multiple browsers and devices in the cloud.  
* **Classic Runner**: Runs visual tests on your local machine without cross-browser rendering.

#### **Selecting the Runner Type**

* **`type`** (string):  
  Specifies the runner type.  
  **Default**: `'ufg'`.  
  Possible values:  
  * `'ufg'`: Uses the Ultrafast Grid for cross-browser testing (requires UFG license).  
  * `'classic'`: Uses the Classic runner for local testing.

	`type: 'ufg',`

---

### **Ultrafast Grid (UFG) Configuration**

The following options are relevant when using the Ultrafast Grid runner (`type: 'ufg'`).  
**Note**: Using the Ultrafast Grid requires a license.

#### **Rendering and Browser Configuration**

* **`browsersInfo`** (array):  
  Specifies the browsers, devices, and viewport sizes for cross-browser testing with UFG. Learn more [here](https://applitools.com/docs/topics/overview/ufg-devices.html) about supported browsers and devices.

  **Default**: Runs in the same browser and viewport size as the local test.  
  Each entry can be:  
  * Desktop browser:  
    `{ name: 'chrome', width: 800, height: 600 },`  
    `{ name: 'firefox', width: 1024, height: 768 },`  
  * Mobile emulation:  
    `{`  
      `deviceName: 'iPhone X',`  
      `screenOrientation: 'portrait', // or 'landscape'`  
    `},`  
  * iOS device:  
    `{`  
      `deviceName: 'iPad (7th generation)',`  
      `iosVersion: 'latest',`  
      `screenOrientation: 'portrait',`  
    `},`

`browsersInfo: [`  
	  `{ name: 'chrome', width: 800, height: 600 },`  
	  `{ name: 'firefox', width: 1024, height: 768 },`  
  	  `{`  
    	    `deviceName: 'iPhone X',`  
    	    `screenOrientation: 'portrait',`  
	  `},`  
    `],`

* **`layoutBreakpoints`** (boolean | number\[\]):  
  Enables responsive design testing at specified breakpoints.

  **Default**: `false`.

  * If `true`, breakpoints are inferred from the application's CSS.  
  * If an array of numbers, specifies the widths at which to capture screenshots

  **Note**: This option is relevant only for UFG. It allows the SDK to fetch viewport-specific resources, which are subsequently used for rendering on the UFG. This is rarely needed, but when necessary, it's crucial for accurate rendering.

    `layoutBreakpoints: [320, 768, 1024],`

#### **Concurrency Configuration**

* **`testConcurrency`** (number):  
  The maximum number of visual tests to run concurrently in the Ultrafast Grid.

  **Default**: `5`.

  `testConcurrency: 10,`

* **`fetchConcurrency`** (number):  
  The maximum number of resources to fetch concurrently when rendering pages in the Ultrafast Grid.

  **Default**: `5`.

  `fetchConcurrency: 5,`

#### **Ultrafast Grid Options**

* **`visualGridOptions`** (object):  
  Additional options for the Ultrafast Grid rendering.

  **Default**: No additional options are set.  
  * **`chromeHeadless`** (boolean):  
    Set to `false` to use regular Chrome instead of Headless Chrome.

    **Default**: `true`.  
  * **`polyfillAdoptedStyleSheets`** (boolean):  
    Controls the polyfill for Adopted StyleSheets.

    **Default**: `false`.

  `visualGridOptions: {`  
      `chromeHeadless: false,`  
      `polyfillAdoptedStyleSheets: true,`  
    `},`

---

### **Classic Runner Configuration**

When using the Classic runner (`type: 'classic'`), you run visual tests locally without the cross-browser rendering capabilities of the Ultrafast Grid.

* **`viewportSize`** (object):  
  The viewport size for the tests.

  **Default**: Playwright's default viewport size.

  `viewportSize: { width: 1280, height: 720 },`

* **`stitchMode`** (string):  
  The stitch mode to use when capturing full-page screenshots.

  Possible values:  
  * `'Scroll'`: Uses scrolling to stitch screenshots.  
  * `'CSS'`: Uses CSS transforms to stitch screenshots.

  **Default**: `'CSS'`.

  `stitchMode: 'Scroll',`

* **`stitchOverlap`** (number):  
  The overlap in pixels between stitched parts. Only relevant for `stitchMode: 'Scroll'`

  **Default**: `50` pixels.

  `stitchOverlap: 50,`

---

#### **Advanced Configuration**

* **`displayName`** (string | function):  
  A custom name for the test display in the dashboard. Useful for adding context or dynamically generating test names.

  `displayName: 'Login Page Visual Test',`  
  `// Or using a function:`  
  ``displayName: (testInfo) => `Visual Test - ${testInfo.title}`,``

* **`baselineBranchName`** (string):  
  The name of the baseline branch to compare against. If specified, baselines in your branch will be ignored.

  `baselineBranchName: 'main',`

* **`ignoreGitMergeBase`** (boolean):  
  If `true`, Applitools ignores the git merge base when determining the baseline.

  `ignoreGitMergeBase: false,`

* **`ignoreCaret`** (boolean):  
  If `true`, ignores the blinking caret in text inputs during visual comparisons.

  `ignoreCaret: true,`

* **`enablePatterns`** (boolean):  
  Enables advanced pattern matching in visual comparisons. Used by the layout algorithm to perform deep pattern analysis for extremely dynamic pages.

  `enablePatterns: true,`  
* **`waitBeforeScreenshots`** (number):  
  Time in milliseconds to wait before capturing a screenshot.

  `waitBeforeScreenshots: 1000,`

* **`matchTimeout`** (number):  
  Timeout in milliseconds for visual match operations. The SDK will try to match again and again until no diffs are detected or until this timeout is reached. The default is 0, meaning no retries. Increasing this timeout increases stability when pages are slow to load. However, it will increase test time when there are differences.

  `matchTimeout: 2000,`

* **`saveNewTests`** (boolean):  
  If `false`, new tests are not automatically saved as baselines. When set to `false` (default), new tests must be manually reviewed and approved in the HTML report or in the Eyes dashboard.

  `saveNewTests: true,`

* **`hideCaret`** (boolean):  
  If `true`, hides the text input caret before capturing screenshots.

  `hideCaret: true,`

* **`hideScrollbars`** (boolean):  
  If `true`, hides scrollbars in screenshots.

  `hideScrollbars: true,`

* **`sendDom`** (boolean):  
  If `true`, sends the DOM snapshot along with the screenshot to Applitools.

  `sendDom: true,`

* **`scrollRootElement`** (string | object):  
  The selector or locator of the element that should be scrolled for capturing full-page screenshots.

  `scrollRootElement: '#main-content',`  
  `// Or using a Playwright locator:`  
  `scrollRootElement: page.locator('#main-content'),`

* **`logConfig`** (object | function | array):  
  Configures logging for Applitools Eyes.

  `logConfig: {`  
    `type: 'console',`  
    `level: 'info',`  
  `},`  
  `// Or using a function:`  
  `logConfig: (testInfo) => ({`  
    `type: 'file',`  
    `level: 'debug',`  
    ``filename: `logs/eyes-${testInfo.title}.log`,``  
  `}),`

---

### **Overriding Global Settings in Tests**

You can override global `eyesConfig` settings for individual tests or test suites using `test.use()`.

**Example**:

`import { test } from '@applitools/eyes-playwright';`

`test.use({`  
  `eyesConfig: {`  
    `matchLevel: 'Layout',`  
    `browsersInfo: [`  
      `{ name: 'chrome', width: 1200, height: 800 },`  
    `],`  
  `},`  
`});`

`test('Visual Test with Overridden Settings', async ({ page, eyes }) => {`  
  `// Test code...`  
`});`

---

## **Using `eyes.check` in Tests**

The `eyes` object provided by the Applitools Eyes Playwright integration allows you to perform visual checkpoints using the `eyes.check` method. This method captures screenshots and compares them against their corresponding baselines.

### **Importing `test` and Using `eyes`**

In your test files, import `test` from `@applitools/eyes-playwright` instead of `@playwright/test`.

`import { test } from '@applitools/eyes-playwright';`

`test('Visual Test', async ({ page, eyes }) => {`  
  `// Your test code...`  
`});`

To use Playwright's native `expect.toHaveScreenshot` methods with Applitools Eyes, import `expect` from `@applitools/eyes-playwright`:

`import { test, expect } from '@applitools/eyes-playwright';`

**Note**: Tests using Playwright's `expect(page).toHaveScreenshot()` will work seamlessly with Applitools Eyes when imported from `@applitools/eyes-playwright`. However, it is recommended to use `eyes.check` for advanced visual testing features.

### **Performing a Visual Checkpoint**

Use `eyes.check` within your tests to perform visual validations.

* You can use multiple `eyes.check` calls within a single test.  
* The SDK automatically aligns and compares the checkpoints with the appropriate baseline steps.  
* Newly added or removed checks are automatically identified and addressed.

`await eyes.check('Home Page', {`  
  `fully: true, // Capture full-page screenshot`  
`});`

`// Additional checks`  
`await eyes.check('Dashboard', {`  
  `matchLevel: 'Layout',`  
`});`

### **`eyes.check` Method**

#### **Syntax**

`await eyes.check(name?, options?);`

#### **Parameters**

* **`name`** (string, optional):  
  The name of the checkpoint. This name appears in the HTML report and in the Applitools Dashboard.  
* **`options`** (object, optional):  
  Configuration options for the visual checkpoint.

#### **Options for `eyes.check`**

* **`region`** (string | object):  
  Specifies a region of the page to capture.  
  * **Selector**:  
    `region: '#header',`  
  * **Playwright Locator**:  
    `region: page.locator('.content-section'),`  
  * **`Coordinates`**`:`  
    `{ x: 100, y: 200, height: 50, width: 150 },`

* **`frames`** (array):  
  Specifies frames to capture.

  `frames: ['#main-frame', { frame: page.frame('sub-frame') }],`

* **`matchLevel`** (string):  
  Overrides the match level for this checkpoint.  
  Possible values: `'Strict'`, `'Layout'`, `'IgnoreColors'`, `'Dynamic'`.

  `matchLevel: 'Layout',`

* **`ignoreRegions`** (array):  
  Regions to ignore during visual comparison.

  `ignoreRegions: [`  
    `page.locator('.dynamic-banner'),`  
    `{ x: 100, y: 200, width: 300, height: 50 },`  
  `],`

* **`layoutRegions`**, **`strictRegions`**, **`dynamicRegions`**, **`contentRegions`**, **`floatingRegions`**:  
  Regions with specific match levels or behaviors.

  `layoutRegions: [page.locator('.sidebar')],`  
  `floatingRegions: [`  
    `{`  
      `region: page.locator('.floating-button'),`  
      `maxUpOffset: 10,`  
      `maxDownOffset: 10,`  
      `maxLeftOffset: 5,`  
      `maxRightOffset: 5,`  
    `},`  
  `],`

* **`accessibilityRegions`** (array):  
  Regions with specific accessibility levels.

  `accessibilityRegions: [`  
    `{`  
      `region: page.locator('.important-text'),`  
      `type: 'LargeText',`  
    `},`  
  `],`

* **`fully`** (boolean):  
  If `true`, captures a full-page screenshot.

  `fully: true,`

* **`scrollRootElement`** (string | object):  
  Overrides the global `scrollRootElement` for this checkpoint.

  `scrollRootElement: '#content',`  
  `// Or using a locator:`  
  `scrollRootElement: page.locator('#content'),`

* **`hook`** (object):  
  JavaScript code to run before capturing the screenshot.

  `hook: {`  
    `beforeCaptureScreenshot: "document.querySelector('#ad-banner').style.display = 'none';",`  
  `},`

* **`waitBeforeCapture`** (number):  
  Time in milliseconds to wait before capturing the screenshot.

  `waitBeforeCapture: 500,`

* **`sendDom`** (boolean):  
  If `true`, sends the DOM snapshot along with the screenshot.

  `sendDom: true,`

* **`useDom`** (boolean):  
  If `true`, uses the DOM information to assist in visual comparisons.

  `useDom: true,`

* **`enablePatterns`** (boolean):  
  Enables pattern matching in visual comparisons for this checkpoint.

  `enablePatterns: true,`

* **`ignoreDisplacements`** (boolean):  
  If `true`, ignores vertical shifts in content during visual comparisons. It is useful for reducing diff noise when the UI changes frequently.

  `ignoreDisplacements: true,`

#### **Example Usage**

`test('Visual Test with Regions', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `await eyes.check('Main Page', {`  
    `fully: true,`  
    `matchLevel: 'Strict',`  
    `ignoreRegions: [page.locator('.dynamic-content')],`  
    `layoutRegions: [page.locator('.sidebar')],`  
    `floatingRegions: [`  
      `{`  
        `region: page.locator('.floating-ad'),`  
        `maxUpOffset: 10,`  
        `maxDownOffset: 10,`  
        `maxLeftOffset: 5,`  
        `maxRightOffset: 5,`  
      `},`  
    `],`  
    `accessibilityRegions: [`  
      `{`  
        `region: page.locator('.important-heading'),`  
        `type: 'BoldText',`  
      `},`  
    `],`  
    `hook: {`  
      `beforeCaptureScreenshot: "document.querySelector('.modal').style.display = 'none';",`  
    `},`  
    `waitBeforeCapture: 1000,`  
  `});`  
`});`

---

## **Defining Regions with Selectors and Locators**

When specifying regions in `eyes.check`, you can use CSS selectors, XPath expressions, or Playwright locators to define areas of the page.

### **Using CSS Selectors**

Specify the region using a CSS selector string.

`region: '#header',`  
`ignoreRegions: ['.dynamic-banner', '#footer'],`

### **Using XPath Selectors**

Specify the region using an XPath expression.

`region: '//div[@class="content"]',`

### **Using Playwright Locators**

Leverage Playwright's powerful locator methods to define regions.

`region: page.locator('.main-content'),`  
`ignoreRegions: [page.locator('.ad-banner')],`

### **Defining Regions with Coordinates**

Specify the region using exact coordinates.

`region: { x: 100, y: 200, width: 300, height: 400 },`

### **Using Multiple Regions**

You can specify multiple regions in arrays for options like `ignoreRegions`, `layoutRegions`, etc.

`ignoreRegions: [`  
  `page.locator('.dynamic-banner'),`  
  `'#footer',`  
  `{ x: 50, y: 100, width: 200, height: 150 },`  
`],`

### **Floating Regions**

Floating regions allow for elements that may shift position between test runs.

`floatingRegions: [`  
  `{`  
    `region: page.locator('.floating-button'),`  
    `maxUpOffset: 10,`  
    `maxDownOffset: 10,`  
    `maxLeftOffset: 5,`  
    `maxRightOffset: 5,`  
  `},`  
`],`

### **Accessibility Regions**

Define regions with specific accessibility levels to ensure compliance.

`accessibilityRegions: [`  
  `{`  
    `region: page.locator('.text-content'),`  
    `type: 'RegularText',`  
  `},`  
`],`

---

## **Complete Test Example**

`import { test } from '@applitools/eyes-playwright';`

`test('Full Visual Test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Perform initial visual check`  
  `await eyes.check('Home Page', {`  
    `fully: true,`  
    `matchLevel: 'Strict',`  
  `});`

  `// Interact with the page`  
  `await page.click('#login-button');`  
  `await page.fill('#username', 'testuser');`  
  `await page.fill('#password', 'password');`  
  `await page.click('#submit');`

  `// Perform visual check after interaction`  
  `await eyes.check('Dashboard', {`  
    `fully: true,`  
    `matchLevel: 'Layout',`  
    `ignoreRegions: [page.locator('.dynamic-banner')],`  
    `floatingRegions: [`  
      `{`  
        `region: page.locator('.notification'),`  
        `maxUpOffset: 15,`  
        `maxDownOffset: 15,`  
        `maxLeftOffset: 10,`  
        `maxRightOffset: 10,`  
      `},`  
    `],`  
  `});`  
`});`

---

By following this API reference, you can effectively configure Applitools Eyes within your Playwright project, including distinctions between Ultrafast Grid and Classic runner configurations. Utilize its powerful visual testing capabilities to ensure your application's UI remains consistent and of high quality.

