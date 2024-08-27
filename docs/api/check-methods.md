# Check Methods

Check methods in Applitools Eyes SDK for Playwright are used to capture screenshots of your application and compare them against baseline images. This guide covers the available check methods, their parameters, and how to use them effectively.

## Basic Check Method

### `eyes.check(name, target)`

The primary method for performing visual validations.

- `name` (string): A descriptive name for the check.
- `target` (Target): Specifies what to check and how.

```javascript
await eyes.check('Homepage', Target.window().fully());
```

## Target Methods

The `Target` class provides various methods to specify what and how to check. Here are the main ones:

### `Target.window()`

Captures the entire browser window.

```javascript
await eyes.check('Full Window', Target.window());
```

### `Target.window().fully()`

Captures the entire page, including scrollable content.

```javascript
await eyes.check('Full Page', Target.window().fully());
```

### `Target.region(selector)`

Captures a specific region of the page.

- `selector` (string): CSS selector of the element to capture.

```javascript
await eyes.check('Login Form', Target.region('#login-form'));
```

### `Target.frame(frameSelector)`

Captures content within an iframe.

- `frameSelector` (string): CSS selector of the iframe.

```javascript
await eyes.check('Frame Content', Target.frame('#my-iframe').fully());
```

## Modifying Check Behavior

These methods can be chained to `Target` to modify check behavior:

### `.ignore(selector)`

Ignores one or more regions in the captured image.

- `selector` (string or string[]): CSS selector(s) of elements to ignore.

```javascript
await eyes.check('Page with Ads', Target.window().ignore('#ad-banner'));
```

### `.layout(selector)`

Uses layout matching for specific regions.

- `selector` (string or string[]): CSS selector(s) of elements to use layout matching.

```javascript
await eyes.check('Dynamic Content', Target.window().layout('#user-content'));
```

### `.strict(selector)`

Uses strict matching for specific regions.

- `selector` (string or string[]): CSS selector(s) of elements to use strict matching.

```javascript
await eyes.check('Logo Check', Target.window().strict('#logo'));
```

### `.content(selector)`

Uses content matching for specific regions.

- `selector` (string or string[]): CSS selector(s) of elements to use content matching.

```javascript
await eyes.check('Text Content', Target.window().content('#article-body'));
```

### `.floating(selector, maxUpOffset, maxDownOffset, maxLeftOffset, maxRightOffset)`

Defines a floating region for more flexible matching.

- `selector` (string): CSS selector of the element.
- `maxUpOffset`, `maxDownOffset`, `maxLeftOffset`, `maxRightOffset` (number): Maximum allowed offsets.

```javascript
await eyes.check(
  'Floating Button',
  Target.window().floating('#floating-btn', 10, 10, 5, 5)
);
```

### `.accessibility(selector)`

Performs accessibility checks on specified regions.

- `selector` (string or string[]): CSS selector(s) of elements to check for accessibility.

```javascript
await eyes.check(
  'Accessible Form',
  Target.window().accessibility('#signup-form')
);
```

## Advanced Check Options

### `.timeout(timeoutMilliseconds)`

Sets a timeout for the check operation.

- `timeoutMilliseconds` (number): Timeout in milliseconds.

```javascript
await eyes.check('Slow Loading Page', Target.window().fully().timeout(30000));
```

### `.sendDom(sendDom)`

Controls whether to send DOM snapshot to Applitools.

- `sendDom` (boolean): Whether to send DOM snapshot.

```javascript
await eyes.check('With DOM', Target.window().sendDom(true));
```

### `.useDom(useDom)`

Uses DOM structure for more accurate matching.

- `useDom` (boolean): Whether to use DOM structure.

```javascript
await eyes.check('Using DOM', Target.window().useDom(true));
```

### `.layoutBreakpoints(breakpoints)`

Captures screenshots at specified layout breakpoints.

- `breakpoints` (boolean or number[]): True for default breakpoints, or an array of custom breakpoints.

```javascript
await eyes.check('Responsive Layout', Target.window().layoutBreakpoints(true));
```

## Complete Example

Here's a comprehensive example demonstrating various check methods and options:

```javascript
const { Eyes, Target } = require('@applitools/eyes-playwright');

async function runVisualTests(page) {
  const eyes = new Eyes();

  try {
    await eyes.open(page, 'My Web App', 'Homepage Test');

    // Full page check
    await eyes.check('Full Page', Target.window().fully());

    // Check specific region
    await eyes.check('Header', Target.region('#header'));

    // Check with layout matching and ignore region
    await eyes.check(
      'Main Content',
      Target.window().layout('#content').ignore('#dynamic-ad')
    );

    // Check iframe content
    await eyes.check(
      'Embedded Video',
      Target.frame('#video-frame')
        .fully()
        .floating('#play-button', 5, 5, 10, 10)
    );

    // Check with accessibility and custom timeout
    await eyes.check(
      'Signup Form',
      Target.region('#signup-form').accessibility().timeout(10000)
    );

    // Check responsive layout
    await eyes.check(
      'Responsive Design',
      Target.window().fully().layoutBreakpoints([768, 1024, 1440])
    );

    await eyes.close();
  } finally {
    await eyes.abort();
  }
}
```

This example showcases various check methods and options, including full page checks, region checks, layout matching, iframe checks, accessibility checks, and responsive layout checks.

For more detailed information about specific check methods or advanced usage, please refer to the [Applitools Eyes SDK for Playwright Check API Reference](https://applitools.com/docs/api/eyes-sdk/index-playwright-check).
