# **Advanced Usage**

In this section, we'll explore advanced features of the Applitools Eyes SDK for Playwright, enabling you to leverage its full potential in your visual testing workflow. These features help you handle complex scenarios, optimize performance, and enhance your test coverage.

## **Handling dynamic content effectively**

Dynamic content, such as animations, advertisements, frequently changing data, or user-specific information, can cause false positives in visual tests. These variations can make tests flaky and increase maintenance efforts if not handled properly. Applitools provides several mechanisms to effectively manage dynamic content, ensuring your tests remain stable and reliable.

### **Using the Dynamic match level**

The **Dynamic** match level is a powerful feature that allows Applitools to automatically detect and ignore content that changes dynamically between test runs, **as long as the pattern of the content remains the same**. This includes elements like dates, timestamps, email addresses, and more.

However, if the pattern changes—for instance, if an email address is replaced with a phone number—the difference will be detected because the content no longer follows the same pattern.

#### **Applying the Dynamic match level**

You can set the Dynamic match level globally or per test:

**Globally in `playwright.config.ts`:**

`// playwright.config.ts`  
`export default {`  
  `use: {`  
    `eyesTestSettings: {`  
      `matchLevel: 'Dynamic',`  
    `},`  
  `},`  
`};`

**Per test configuration:**

`test('Dynamic content test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Visual check with Dynamic match level`  
  `await eyes.check('Dynamic Content Page', {`  
    `matchLevel: 'Dynamic',`  
  `});`  
`});`

By using the dynamic match level, Applitools intelligently handles dynamic content without the need for manual intervention or complex test code adjustments.

### **Leveraging Layout match level for structural consistency**

The **Layout** match level focuses on the structure and layout of the page, ignoring content changes. This is ideal for pages where the content varies but the layout remains consistent. It's particularly useful for:

* **Different text and images**: When the textual content or images change frequently, but you want to ensure the overall layout remains the same.  
* **Variations in charts and graphs**: When data visualizations change due to dynamic data, but the structure should stay consistent.  
* **Different number of products or table rows**: When lists or tables have varying numbers of items.  
* **Localization testing**: Comparing a page in a new language against a baseline in another language to ensure the layout is consistent across locales.  
* **Cross-device comparisons**: Comparing baselines taken on one device with checkpoint images from another, ensuring consistent layout across devices.

#### **Setting match level to layout**

You can set the match level globally or per test:

**Globally in `playwright.config.ts`:**

`// playwright.config.ts`  
`export default {`  
  `use: {`  
    `eyesTestSettings: {`  
      `matchLevel: 'Layout',`  
    `},`  
  `},`  
`};`

**Per test configuration:**

`test('Dynamic content test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Visual check with Layout match level`  
  `await eyes.check('Dynamic Content Page', {`  
    `matchLevel: 'Layout',`  
  `});`  
`});`

By utilizing the layout match level, you can effectively manage dynamic content while ensuring that the structural integrity of your UI remains intact.

### **Ignoring dynamic regions using the dashboard**

While match levels like Dynamic and Layout help handle dynamic content globally or for specific regions, sometimes you may need more granular control. Applitools allows you to define ignore regions directly within the Applitools Dashboard. This method attaches ignore regions to DOM elements, providing the same effect as using locators in code, but without the need to maintain locators in your test scripts.

#### **Defining ignore regions in the dashboard**

1. **Run your test**: Execute your test so that it appears in the Applitools Dashboard.  
2. **Open the test result**: Navigate to the test result where you want to define an ignore region.  
3. **Select the ignore tool**: In the toolbar, select the "Ignore Region" tool.  
4. **Draw the ignore region**: Click and drag over the dynamic content area you want to ignore.  
5. **Attach to element**: Applitools will automatically attach the ignore region to the underlying DOM element, making it resilient to layout changes.

By managing ignore regions through the dashboard, you avoid hardcoding locators in your tests and reduce maintenance efforts, especially when the UI structure changes.

#### **Floating regions**

In cases where elements may change position or size between test runs but still need to be compared visually, **floating regions** provide a solution. Floating regions accommodate elements that can move within specified boundaries, ensuring that minor shifts don't cause false positives.

### **Ignoring dynamic regions using code**

Although less recommended, it is possible to set ignore regions programmatically.

#### **Using Ignore Regions with Locators**

You can define ignore regions using Playwright's powerful locators:

`test('Ignore dynamic content', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Define the locator for the dynamic content`  
  `const dynamicContent = page.locator('.dynamic-content');`

  `// Visual check with ignore region`  
  `await eyes.check('Homepage', {`  
    `fully: true,`  
    `matchLevel: 'Strict',`  
    `ignoreRegions: [dynamicContent],`  
  `});`  
`});`

## **Cross-browser testing with the Ultrafast Grid**

Ensuring your application looks and functions correctly across different browsers and devices is crucial for delivering a consistent user experience. The Applitools **Ultrafast Grid** allows you to run visual tests across multiple browsers and devices simultaneously, significantly speeding up cross-browser testing without adding complexity to your test code.

### **Configuring cross-browser tests**

Specify the browsers and devices you want to test in your configuration.

**In `playwright.config.ts`:**

`// playwright.config.ts`  
`export default {`  
  **`use: {`**  
    `eyesTestSettings: {`  
      `browsersInfo: [`  
        `{ name: 'chrome', width: 800, height: 600 },`  
        `{ name: 'firefox', width: 1024, height: 768 },`  
        `{ name: 'safari', width: 375, height: 667, deviceScaleFactor: 2, isMobile: true },`  
      `],`  
    `},`  
  `},`  
`};`

With this configuration, Applitools will render your application in the specified browsers and viewport sizes, capturing screenshots for visual comparison.

### **Running tests across multiple browsers and devices**

When you run your Playwright tests, Applitools Eyes works with the Ultrafast Grid to render your application across all specified environments in parallel:

`npx playwright test`

This approach ensures comprehensive coverage without slowing down your test suite or requiring additional infrastructure.

## **Responsive design testing**

Responsive design is essential in today's multi-device world. Applitools makes it easy to test your application's appearance across various screen sizes and orientations.

### **Testing across viewport sizes with the Ultrafast Grid**

You can define viewport sizes to test responsive layouts.

`test('Responsive design test', async ({ page, eyes }) => {`  
  `await page.setViewportSize({ width: 320, height: 568 }); // iPhone SE size`  
  `await page.goto('https://example.com');`

  `// Visual check for mobile view`  
  `await eyes.check('Homepage');`

  `// Change viewport size for tablet`  
  `await page.setViewportSize({ width: 768, height: 1024 }); // iPad size`

  `// Visual check for tablet view`  
  `await eyes.check('Homepage');`  
`});`

Alternatively, use the Ultrafast Grid to specify different viewport sizes.

**In `playwright.config.ts`:**

`eyesTestSettings: {`  
  `browsersInfo: [`  
    `{ name: 'chrome', width: 375, height: 667 }, // Mobile`  
    `{ name: 'chrome', width: 768, height: 1024 }, // Tablet`  
    `{ name: 'chrome', width: 1440, height: 900 }, // Desktop`  
  `],`  
`},`

## **Batching and grouping tests for efficient management**

Organizing your tests into batches helps you manage and analyze test results more effectively within the Applitools Dashboard.

### **Using batches**

Set batch names to group related tests together. This can represent a test run, a feature set, or any logical grouping that makes sense for your project.

**In `playwright.config.ts`:**

`// playwright.config.ts`  
`export default {`  
  `eyesWorkerSettings: {`  
    `batch: {`  
      `name: 'Feature XYZ Tests',`  
    `},`  
  `},`  
`};`

**Per test configuration:**

`test('Test with custom batch', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Visual check with custom batch`  
  `await eyes.check('Homepage', {`  
    `batch: { name: 'Checkout Flow Tests' },`  
  `});`  
`});`

## **Optimizing performance and resource usage**

**Efficient test execution ensures that your testing process is scalable and doesn't become a bottleneck in your development workflow.**

### **Optimizing test execution**

* **Reuse browser contexts: Configure Playwright to reuse browser contexts where possible to reduce overhead.**  
* **Parallel execution: Utilize Playwright's built-in support for parallel test execution to speed up your test suite.**

### **Managing Ultrafast Grid concurrency**

* **Adjust concurrency: Control the number of concurrent Ultrafast Grid renderings to balance speed and resource consumption based on your needs and account limits.**

**In `playwright.config.ts`:**

`eyesWorkerSettings: {`  
  `concurrency: 10, // Adjust based on your needs and account limits`  
`},`

* **Monitor usage**: Keep an eye on your Applitools Dashboard for test durations and resource utilization to optimize performance.

By fine-tuning these settings, you can achieve optimal test execution times without overloading your system or exceeding your account's resource limits.

## **Advanced features for comprehensive testing**

### **Component testing**

Testing individual UI components in isolation allows you to catch issues early in the development cycle. Applitools Eyes can capture visual snapshots of components rendered in isolation or within component libraries like Storybook.

`test('Component test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com/component');`

  `// Visual check of the component`  
  `const component = page.locator('#my-component');`  
  `await eyes.check('My Component', {`  
    `region: component,`  
  `});`  
`});`

By focusing on components, you can ensure that individual parts of your application render correctly across different states and environments.

### **Accessibility testing**

Ensuring your application is accessible to all users, including those with disabilities, is crucial for compliance and delivering an inclusive user experience. Applitools extends its Visual AI capabilities to help teams run automated accessibility tests to validate compliance with the **Web Content Accessibility Guidelines (WCAG)**.

#### **Automated accessibility validation with Visual AI**

Applitools uses AI-powered computer vision (Visual AI) to identify potential accessibility issues, specifically focusing on contrast violations:

* **Contrast analysis**: Applitools automatically measures the contrast ratios of text and images within your application.  
* **Flagging violations**: If the measured contrast ratio is less than the minimum defined by WCAG, a contrast accessibility failure is flagged for that element.  
* **Wide applicability**: This feature works for web applications, mobile web, and native mobile applications, ensuring accessibility across all platforms.

#### **Configurable compliance levels**

Applitools allows you to customize the accessibility standards according to your needs:

* **WCAG versions**: Toggle between **WCAG 2.0** or **WCAG 2.1** guidelines to align with the relevant standards for your project.  
* **Conformance levels**: Choose between **AA** or **AAA** compliance levels to assess how well your website or application meets the desired accessibility criteria.

#### **Easy integration into your workflow**

Incorporating accessibility testing into your existing Playwright tests is straightforward:

* **Simple line of code**: Enable automated accessibility checks with a simple line of code within your test scripts.  
* **No-code option**: Alternatively, configure Applitools to automatically scan your site or application without writing any code, making it accessible to team members without programming expertise.

**Example of enabling accessibility validation in your test:**

`test('Accessibility test with Applitools', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`  
    
  `// Enable accessibility validation`  
  `await eyes.check('Accessibility Test', {`  
    `accessibilitySettings: {`  
      `level: 'AA', // Choose 'AA' or 'AAA'`  
      `guidelinesVersion: 'WCAG_2_1', // Choose 'WCAG_2_0' or 'WCAG_2_1'`  
    `},`  
  `});`  
`});`

#### **Benefits of using Applitools for accessibility testing**

* **Comprehensive testing**: Combine visual and accessibility testing in a single platform, streamlining your quality assurance process.  
* **Regulatory compliance**: Proactively identify and address accessibility issues to comply with legal requirements and avoid potential lawsuits.  
* **Improved user experience**: Ensure that all users, including those with visual impairments or other disabilities, can use your application effectively.

By integrating accessibility testing into your visual tests with Applitools, you can efficiently validate your application's compliance with accessibility standards, providing an inclusive experience for all users.
