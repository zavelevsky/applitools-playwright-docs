# Advanced Features

This guide covers advanced features and techniques available in Applitools Eyes for Playwright. These features are designed for complex testing scenarios and can significantly enhance your visual testing capabilities.

## Table of Contents

1. [Visual Grid](#visual-grid)
2. [Accessibility Testing](#accessibility-testing)
3. [Visual Locators](#visual-locators)
4. [Coded Regions](#coded-regions)
5. [Custom Viewport Sizes](#custom-viewport-sizes)
6. [Multi-Page Tests](#multi-page-tests)
7. [Handling Dynamic Content](#handling-dynamic-content)
8. [Advanced Match Settings](#advanced-match-settings)
9. [Test Results API](#test-results-api)

## Visual Grid

The Visual Grid allows you to run cross-browser and cross-device tests in parallel, significantly reducing test execution time.

```javascript
const {
  VisualGridRunner,
  BrowserType,
  DeviceName,
  ScreenOrientation,
  Configuration,
  Eyes,
} = require('@applitools/eyes-playwright');

// Create a runner with concurrency of 5
const runner = new VisualGridRunner({ testConcurrency: 5 });

// Create a shared configuration for all tests
const config = new Configuration();
config.addBrowser({ width: 1200, height: 800, name: BrowserType.CHROME });
config.addBrowser({ width: 1200, height: 800, name: BrowserType.FIREFOX });
config.addBrowser({ width: 1200, height: 800, name: BrowserType.SAFARI });
config.addBrowser({
  width: 1200,
  height: 800,
  name: BrowserType.EDGE_CHROMIUM,
});
config.addDevice(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
config.addDevice(DeviceName.Pixel_2, ScreenOrientation.LANDSCAPE);

// Create an Eyes instance and set the configuration
const eyes = new Eyes(runner);
eyes.setConfiguration(config);

// Your test code here

// Get all test results
const allTestResults = await runner.getAllTestResults();
console.log(allTestResults);
```

## Accessibility Testing

Applitools Eyes can perform accessibility checks as part of your visual tests.

```javascript
const {
  Eyes,
  Target,
  AccessibilityRegionType,
} = require('@applitools/eyes-playwright');

const eyes = new Eyes();

await eyes.open(page, 'My App', 'Accessibility Test');

await eyes.check(
  'Accessible Page',
  Target.window()
    .accessibility('[data-testid="main-content"]') // Check entire region
    .accessibilityRegion('#login-form', AccessibilityRegionType.RegularText)
);

await eyes.close();
```

## Visual Locators

Visual locators allow you to find elements based on their visual appearance rather than DOM structure.

```javascript
const eyes = new Eyes();

await eyes.open(page, 'My App', 'Visual Locator Test');

// Define the visual locator
const loginButtonLocator = await eyes.getLocator({ id: 'Login Button' });

// Use the locator in a check
await eyes.check(
  'Login Page',
  Target.window().ignoreRegions(loginButtonLocator)
);

// Use the locator with Playwright
const loginButton = await loginButtonLocator.locate(page);
await loginButton.click();

await eyes.close();
```

## Coded Regions

Coded regions allow you to programmatically define regions for checks based on page content or structure.

```javascript
const { Eyes, Target, Region } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

await eyes.open(page, 'My App', 'Coded Regions Test');

await eyes.check(
  'Dynamic Page',
  Target.window()
    .ignoreRegions(async () => {
      const dynamicElement = await page.$('.dynamic-content');
      return new Region(await dynamicElement.boundingBox());
    })
    .layoutRegions(async () => {
      const layoutElements = await page.$$('.layout-section');
      return Promise.all(
        layoutElements.map(async (elem) => new Region(await elem.boundingBox()))
      );
    })
);

await eyes.close();
```

## Custom Viewport Sizes

You can specify custom viewport sizes for your tests, which is useful for testing responsive designs.

```javascript
const { Eyes, Target } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

const viewportSizes = [
  { width: 1200, height: 800 },
  { width: 768, height: 1024 },
  { width: 375, height: 667 },
];

for (const size of viewportSizes) {
  await page.setViewportSize(size);
  await eyes.open(page, 'My App', `Viewport Test ${size.width}x${size.height}`);
  await eyes.check(
    `Viewport ${size.width}x${size.height}`,
    Target.window().fully()
  );
  await eyes.close();
}
```

## Multi-Page Tests

You can perform visual testing across multiple pages in a single test.

```javascript
const eyes = new Eyes();

await eyes.open(page, 'My App', 'Multi-Page Test');

await page.goto('https://example.com/page1');
await eyes.check('Page 1', Target.window().fully());

await page.goto('https://example.com/page2');
await eyes.check('Page 2', Target.window().fully());

await page.goto('https://example.com/page3');
await eyes.check('Page 3', Target.window().fully());

await eyes.close();
```

## Handling Dynamic Content

For pages with dynamic content, you can use various strategies to ensure consistent checks.

```javascript
const { Eyes, Target } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

await eyes.open(page, 'My App', 'Dynamic Content Test');

// Ignore dynamic regions
await eyes.check(
  'Dynamic Page',
  Target.window().ignore('.dynamic-content').layout('.user-generated-content')
);

// Use a custom script to stabilize dynamic content
await eyes.check(
  'Stabilized Page',
  Target.window().scriptHooks({
    beforeCaptureScreenshot:
      "document.querySelector('.timestamp').textContent = 'TIMESTAMP';",
  })
);

await eyes.close();
```

## Advanced Match Settings

You can fine-tune how Applitools compares images using advanced match settings.

```javascript
const { Eyes, Target, MatchLevel } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

await eyes.open(page, 'My App', 'Advanced Match Settings Test');

await eyes.check(
  'Complex Page',
  Target.window()
    .strict('#header')
    .layout('#main-content')
    .content('.article')
    .floating('#floating-button', 10, 10, 5, 5)
    .ignoreDisplacements()
    .matchLevel(MatchLevel.Layout)
);

await eyes.close();
```

## Test Results API

You can programmatically access and analyze test results using the Test Results API.

```javascript
const { Eyes, TestResults } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

await eyes.open(page, 'My App', 'Test Results API Test');

// Perform checks...

const testResults = await eyes.close(false);

if (testResults.getStatus() !== TestResults.PASSED) {
  console.log('Test failed');
  console.log(`Mismatches: ${testResults.getMismatches()}`);
  console.log(`URL: ${testResults.getUrl()}`);
}

// Access specific step results
const stepResults = testResults.getStepsInfo();
for (const step of stepResults) {
  console.log(`Step: ${step.getName()}`);
  console.log(`Is Different: ${step.getIsDifferent()}`);
}
```

These advanced features provide powerful tools for creating sophisticated visual testing scenarios with Applitools Eyes and Playwright. By leveraging these capabilities, you can create more comprehensive and efficient visual testing suites that can handle complex application behaviors and structures.
