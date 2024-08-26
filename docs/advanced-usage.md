# Advanced Usage of Applitools Eyes SDK with Playwright

This guide covers advanced features and techniques for using Applitools Eyes with Playwright. These topics will help you create more sophisticated visual tests, handle complex scenarios, and optimize your testing process.

## Table of Contents

1. [Configuration Options](#configuration-options)
2. [Advanced Check Methods](#advanced-check-methods)
3. [Handling Dynamic Content](#handling-dynamic-content)
4. [Working with Iframes](#working-with-iframes)
5. [Custom Viewport Sizes and Devices](#custom-viewport-sizes-and-devices)
6. [Using the Ultrafast Grid](#using-the-ultrafast-grid)
7. [Visual Locators](#visual-locators)
8. [Accessibility Testing](#accessibility-testing)
9. [Handling Popups and New Windows](#handling-popups-and-new-windows)
10. [Advanced Error Handling](#advanced-error-handling)

## Configuration Options

You can customize Applitools Eyes behavior using various configuration options:

```javascript
import { Configuration } from '@applitools/eyes-playwright';

const config = new Configuration();
config.setApiKey('YOUR_API_KEY');
config.setBatch({ name: 'Playwright Advanced Tests' });
config.setMatchLevel('Layout');
config.setStitchMode('CSS');

const eyes = new Eyes(config);
```

## Advanced Check Methods

Applitools offers several advanced check methods for specific scenarios:

```javascript
// Check a specific region
await eyes.check('Login Form', Target.region('#login-form'));

// Check multiple regions
await eyes.check(
  'Critical Elements',
  Target.regions([
    { type: 'css', selector: '#header' },
    { type: 'css', selector: '#footer' },
  ])
);

// Strict region
await eyes.check('Exact Header', Target.region('#header').strict());

// Floating region
await eyes.check(
  'Floating Button',
  Target.region('#floating-button').floating()
);
```

## Handling Dynamic Content

For pages with dynamic content, you can use various strategies:

```javascript
// Ignore specific regions
await eyes.check(
  'Dynamic Page',
  Target.window().ignoreRegions('#dynamic-ad', '.timestamp')
);

// Use layout match level for specific regions
await eyes.check(
  'Semi-Dynamic Page',
  Target.window().layout('#user-greeting').strict('#static-content')
);

// Ignore colors
await eyes.check('Color Insensitive', Target.window().ignoreColors());
```

## Working with Iframes

You can check content within iframes:

```javascript
await eyes.check(
  'Iframe Content',
  Target.frame('frame-name').region('#content-in-iframe')
);
```

## Custom Viewport Sizes and Devices

Test your application on various devices and viewport sizes:

```javascript
import { devices } from '@playwright/test';

// Use Playwright's predefined devices
await page.emulate(devices['iPhone 11']);
await eyes.check('iPhone 11 View', Target.window().fully());

// Custom viewport size
await page.setViewportSize({ width: 1280, height: 720 });
await eyes.check('Custom Viewport', Target.window().fully());
```

## Using the Ultrafast Grid

Leverage Applitools Ultrafast Grid for cross-browser testing:

```javascript
import {
  Configuration,
  BrowserType,
  ScreenOrientation,
  DeviceName,
} from '@applitools/eyes-playwright';

const config = new Configuration();
config.addBrowser(800, 600, BrowserType.CHROME);
config.addBrowser(700, 500, BrowserType.FIREFOX);
config.addDevice(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

const eyes = new Eyes(config);

// Your test code here
```

## Visual Locators

Use AI-powered visual locators to find elements:

```javascript
const locator = await eyes.getLocator({ name: 'Submit Button' });
await page.click(locator);
```

## Accessibility Testing

Combine visual testing with accessibility checks:

```javascript
await eyes.check(
  'Accessibility Check',
  Target.window()
    .fully()
    .accessibilityValidation({ level: 'AA', guidelinesVersion: 'WCAG_2_0' })
);
```

## Handling Popups and New Windows

Test scenarios involving popups or new windows:

```javascript
test('Popup Test', async ({ page }) => {
  await eyes.open(page, 'My App', 'Popup Test');

  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#open-popup'),
  ]);

  await eyes.check('Main Page', Target.window().fully());

  await popup.waitForLoadState();
  await eyes.check('Popup Content', Target.window().fully(), { page: popup });
});
```

## Advanced Error Handling

Implement sophisticated error handling and reporting:

```javascript
try {
  // Your test code here
} catch (error) {
  console.error('Test error:', error);
  throw error;
} finally {
  const results = await eyes.getRunner().getAllTestResults();
  console.log(results.toString());

  if (results.getUnresolvedCount() > 0) {
    throw new Error('Visual differences found');
  }
}
```

These advanced techniques will help you create more robust and comprehensive visual tests with Applitools Eyes and Playwright. Remember to consult the Applitools API documentation for the most up-to-date information on available methods and options.
