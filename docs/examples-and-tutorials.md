# Examples and Tutorials

This guide provides a collection of practical examples and step-by-step tutorials to help you effectively use Applitools Eyes with Playwright. These examples cover various scenarios and use cases to enhance your understanding and implementation of visual testing.

## Table of Contents

1. [Basic Visual Test](#basic-visual-test)
2. [Testing a Login Flow](#testing-a-login-flow)
3. [Responsive Design Testing](#responsive-design-testing)
4. [Handling Dynamic Content](#handling-dynamic-content)
5. [Cross-Browser Testing with Ultrafast Grid](#cross-browser-testing-with-ultrafast-grid)
6. [Component Testing](#component-testing)
7. [Visual Test-Driven Development (TDD)](#visual-test-driven-development-tdd)
8. [Advanced Configuration and Customization](#advanced-configuration-and-customization)

## Basic Visual Test

Let's start with a basic example of how to perform a visual test using Applitools Eyes and Playwright.

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const eyes = new Eyes();

  try {
    await eyes.open(page, 'My App', 'Homepage Test');

    await page.goto('https://example.com');

    await eyes.check('Full Page', Target.window().fully());

    await eyes.close();
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This script:

1. Launches a browser and creates a new page
2. Initializes Applitools Eyes
3. Opens the Eyes test
4. Navigates to a website
5. Performs a full-page check
6. Closes the Eyes test

## Testing a Login Flow

This example demonstrates how to visually test a login flow:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const eyes = new Eyes();

  try {
    await eyes.open(page, 'My App', 'Login Flow Test');

    await page.goto('https://example.com/login');
    await eyes.check('Login Page', Target.window().fully());

    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');
    await eyes.check('Filled Login Form', Target.window().fully());

    await page.click('#login-button');
    await page.waitForNavigation();
    await eyes.check('After Login', Target.window().fully());

    await eyes.close();
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This script tests the visual appearance of:

1. The initial login page
2. The login form after filling in credentials
3. The page after successful login

## Responsive Design Testing

To test responsive design across different viewport sizes:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

const viewports = [
  { width: 1200, height: 800 },
  { width: 768, height: 1024 },
  { width: 375, height: 667 },
];

(async () => {
  const browser = await chromium.launch();
  const eyes = new Eyes();

  try {
    await eyes.open(browser, 'My App', 'Responsive Design Test');

    for (const viewport of viewports) {
      const page = await browser.newPage();
      await page.setViewportSize(viewport);
      await page.goto('https://example.com');
      await eyes.check(
        `Viewport ${viewport.width}x${viewport.height}`,
        Target.window().fully()
      );
      await page.close();
    }

    await eyes.close();
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This script tests the website's appearance across different viewport sizes, simulating various devices.

## Handling Dynamic Content

When dealing with dynamic content, you can use ignore regions or layout regions:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const eyes = new Eyes();

  try {
    await eyes.open(page, 'My App', 'Dynamic Content Test');

    await page.goto('https://example.com/dynamic');

    await eyes.check(
      'Dynamic Page',
      Target.window()
        .fully()
        .ignoreRegions('#changing-ad')
        .layout('#user-generated-content')
    );

    await eyes.close();
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This example ignores a changing ad and uses layout matching for user-generated content.

## Cross-Browser Testing with Ultrafast Grid

To perform cross-browser testing using Applitools Ultrafast Grid:

```javascript
const {
  Eyes,
  Target,
  VisualGridRunner,
  BrowserType,
  DeviceName,
} = require('@applitools/eyes-playwright');

(async () => {
  const runner = new VisualGridRunner({ testConcurrency: 5 });
  const eyes = new Eyes(runner);

  const configuration = eyes.getConfiguration();
  configuration.addBrowser({
    width: 1200,
    height: 800,
    name: BrowserType.CHROME,
  });
  configuration.addBrowser({
    width: 1200,
    height: 800,
    name: BrowserType.FIREFOX,
  });
  configuration.addBrowser({
    width: 1200,
    height: 800,
    name: BrowserType.SAFARI,
  });
  configuration.addBrowser({
    width: 1200,
    height: 800,
    name: BrowserType.EDGE_CHROMIUM,
  });
  configuration.addDevice(DeviceName.iPhone_X);
  eyes.setConfiguration(configuration);

  try {
    await eyes.open('My App', 'Cross-Browser Test');

    // Replace this with your actual test steps
    await eyes.check('Cross-Browser', Target.window().fully());

    await eyes.close();
  } finally {
    await eyes.abort();
    const results = await runner.getAllTestResults();
    console.log(results);
  }
})();
```

This script runs the visual test across multiple browsers and devices using the Ultrafast Grid.

## Component Testing

For testing individual components:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const eyes = new Eyes();

  try {
    await eyes.open(page, 'My App', 'Component Test');

    await page.goto('https://example.com');

    await eyes.check('Header', Target.region('#header'));
    await eyes.check('Navigation Menu', Target.region('#nav-menu'));
    await eyes.check('Footer', Target.region('#footer'));

    await eyes.close();
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This example demonstrates how to test individual components of a page.

## Visual Test-Driven Development (TDD)

Here's an example of how to implement visual TDD:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

describe('Button Component', () => {
  let browser, page, eyes;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    eyes = new Eyes();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should have correct appearance', async () => {
    await eyes.open(page, 'My App', 'Button Test');

    await page.setContent(`
      <button id="test-button" style="padding: 10px; background-color: blue; color: white;">
        Click me
      </button>
    `);

    await eyes.check('Default Button', Target.region('#test-button'));

    await page.hover('#test-button');
    await eyes.check('Hovered Button', Target.region('#test-button'));

    await eyes.close();
  });
});
```

This script demonstrates a visual TDD approach for a button component, checking its appearance in different states.

## Advanced Configuration and Customization

For advanced users, here's an example with custom configuration:

```javascript
const { chromium } = require('playwright');
const {
  Eyes,
  Target,
  ClassicRunner,
  Configuration,
  BatchInfo,
} = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const runner = new ClassicRunner();
  const eyes = new Eyes(runner);

  const configuration = new Configuration();
  configuration.setAppName('My App');
  configuration.setTestName('Advanced Config Test');
  configuration.setBatch(new BatchInfo('My Batch'));
  configuration.setForceFullPageScreenshot(true);
  configuration.setStitchMode('CSS');
  configuration.setMatchTimeout(0);
  eyes.setConfiguration(configuration);

  try {
    await eyes.open(page);

    await page.goto('https://example.com');

    await eyes.check(
      'Full Page',
      Target.window()
        .fully()
        .layoutBreakpoints(true)
        .useDom(true)
        .enablePatterns(true)
    );

    await eyes.close();
  } finally {
    await eyes.abort();
    const results = await runner.getAllTestResults();
    console.log(results);
    await browser.close();
  }
})();
```

This example demonstrates advanced configuration options and customization of the check method.

These examples and tutorials should provide a solid foundation for using Applitools Eyes with Playwright. Remember to adapt these examples to your specific use cases and requirements.
