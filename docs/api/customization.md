# Customization

This guide covers various ways to customize and extend the functionality of Applitools Eyes when used with Playwright. These customization options allow you to adapt the visual testing process to your specific needs and integrate it seamlessly with your existing testing framework.

## Table of Contents
1. [Custom Properties](#custom-properties)
2. [Hooks](#hooks)
3. [Custom Browser Commands](#custom-browser-commands)
4. [Customizing Match Settings](#customizing-match-settings)
5. [Extending the Eyes Class](#extending-the-eyes-class)
6. [Custom Logging](#custom-logging)
7. [Advanced Configuration](#advanced-configuration)

## Custom Properties

Custom properties allow you to add metadata to your tests, which can be useful for filtering and organizing test results.

```javascript
const eyes = new Eyes();
eyes.addProperty('Environment', 'Staging');
eyes.addProperty('Version', '2.0.1');

await eyes.open(page, 'My App', 'Homepage Test');
```

You can also add properties to individual checks:

```javascript
await eyes.check('Login Form', Target.region('#login-form'), {
  properties: [{ name: 'Component', value: 'LoginForm' }]
});
```

## Hooks

Hooks allow you to execute custom code at specific points during the test execution.

### `beforeEachValidation`

This hook is called before each validation (check) is performed.

```javascript
eyes.setBeforeEachValidation((page, target, driver) => {
  // Custom logic before each validation
  console.log(`Validating: ${target.getName()}`);
});
```

### `beforeAppend`

This hook is called before each screenshot is appended to the test.

```javascript
eyes.setBeforeAppend(async (imageBuffer, driver, eyes) => {
  // Modify the screenshot if needed
  // Return the modified imageBuffer
  return imageBuffer;
});
```

## Custom Browser Commands

You can extend Playwright's browser capabilities and use them with Applitools Eyes.

```javascript
const { chromium } = require('playwright');
const { Eyes } = require('@applitools/eyes-playwright');

// Extend Playwright's Page class
class CustomPage {
  constructor(page) {
    this.page = page;
  }

  async navigateAndWait(url, selector) {
    await this.page.goto(url);
    await this.page.waitForSelector(selector);
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const customPage = new CustomPage(page);

  const eyes = new Eyes();
  await eyes.open(customPage, 'My App', 'Custom Command Test');

  await customPage.navigateAndWait('https://example.com', '#content');
  await eyes.check('After Custom Navigation', Target.window().fully());

  await eyes.close();
  await browser.close();
})();
```

## Customizing Match Settings

You can customize how Applitools compares images by modifying match settings.

```javascript
const { Eyes, MatchLevel } = require('@applitools/eyes-playwright');

const eyes = new Eyes();

// Set global match level
eyes.setMatchLevel(MatchLevel.Layout);

// Set match level for a specific check
await eyes.check('Flexible Content', Target.window().fully().matchLevel(MatchLevel.Content));

// Customize ignore regions
await eyes.check('Main Content', Target.window().fully()
  .ignore({ selector: '.ad-banner' })
  .ignore({ element: await page.$('.dynamic-content') })
);

// Set floating regions
await eyes.check('Floating Button', Target.window().fully()
  .floating({ selector: '#fab', maxUpOffset: 5, maxDownOffset: 5, maxLeftOffset: 10, maxRightOffset: 10 })
);
```

## Extending the Eyes Class

You can extend the Eyes class to add custom functionality:

```javascript
const { Eyes } = require('@applitools/eyes-playwright');

class CustomEyes extends Eyes {
  constructor() {
    super();
    this.customProperty = 'Custom Value';
  }

  async customCheck(name, target) {
    console.log(`Performing custom check: ${name}`);
    // Perform some custom logic
    await super.check(name, target);
  }
}

const eyes = new CustomEyes();
await eyes.customCheck('Custom Check', Target.window().fully());
```

## Custom Logging

You can implement custom logging to integrate Applitools logs with your existing logging system:

```javascript
const { Eyes, ConsoleLogHandler } = require('@applitools/eyes-playwright');

class CustomLogHandler extends ConsoleLogHandler {
  onMessage(verbose, logString) {
    // Implement your custom logging logic
    console.log(`[Applitools] ${logString}`);
  }
}

const eyes = new Eyes();
eyes.setLogHandler(new CustomLogHandler(true));
```

## Advanced Configuration

For advanced customization, you can use the Configuration class:

```javascript
const { Eyes, Configuration, BatchInfo } = require('@applitools/eyes-playwright');

const configuration = new Configuration();
configuration.setAppName('My App');
configuration.setTestName('Advanced Config Test');
configuration.setBatch(new BatchInfo('Customization Batch'));
configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
configuration.setForceFullPageScreenshot(true);
configuration.setStitchMode('CSS');
configuration.setHideScrollbars(true);
configuration.setWaitBeforeScreenshots(1000);

const eyes = new Eyes();
eyes.setConfiguration(configuration);

// Use the customized Eyes instance in your tests
await eyes.open(page);
await eyes.check('Fully Customized Check', Target.window().fully());
await eyes.close();
```

By leveraging these customization options, you can tailor Applitools Eyes to fit seamlessly into your testing workflow and meet your specific visual testing requirements.