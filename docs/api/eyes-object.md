# Eyes Object

The `Eyes` object is the main interface for the Applitools Eyes SDK. It provides methods for starting visual tests, taking screenshots, and comparing them against baselines.

## Importing the Eyes Object

```javascript
const { Eyes } = require('@applitools/eyes-playwright');
```

## Constructor

### `new Eyes(runner)`

Creates a new Eyes instance.

- `runner` (optional): An instance of `ClassicRunner` or `VisualGridRunner`. If not provided, a `ClassicRunner` will be created internally.

```javascript
const eyes = new Eyes();
// or
const runner = new VisualGridRunner();
const eyes = new Eyes(runner);
```

## Methods

### `open(page, appName, testName, viewportSize)`

Starts a test.

- `page`: The Playwright `Page` object to automate.
- `appName`: The name of the application under test.
- `testName`: The name of the test.
- `viewportSize` (optional): An object specifying the viewport width and height.

Returns: A promise that resolves to the `page` object.

```javascript
await eyes.open(page, 'My App', 'Homepage Test', { width: 1024, height: 768 });
```

### `check(name, target)`

Takes a screenshot and performs a checkpoint.

- `name`: A name for the checkpoint.
- `target`: The target of the check (e.g., `Target.window()`).

Returns: A promise that resolves when the check is complete.

```javascript
await eyes.check('Full Page', Target.window().fully());
```

### `close(throwEx)`

Closes the test and returns the results.

- `throwEx` (optional): If true, throws an exception for failed tests. Default is true.

Returns: A promise that resolves to the test results.

```javascript
const results = await eyes.close(false);
```

### `abort()`

Aborts the test.

Returns: A promise that resolves when the abort is complete.

```javascript
await eyes.abort();
```

### `setApiKey(apiKey)`

Sets the Applitools API key.

- `apiKey`: Your Applitools API key.

```javascript
eyes.setApiKey('YOUR_API_KEY');
```

### `setMatchLevel(matchLevel)`

Sets the match level for subsequent checks.

- `matchLevel`: The match level to use. Can be 'Strict', 'Exact', 'Content', or 'Layout'.

```javascript
eyes.setMatchLevel('Layout');
```

### `setBaselineEnvName(baselineEnvName)`

Sets the baseline environment name.

- `baselineEnvName`: The name of the baseline environment.

```javascript
eyes.setBaselineEnvName('Production');
```

### `setBatch(batch)`

Sets the batch for the test.

- `batch`: A `BatchInfo` object or a batch name string.

```javascript
eyes.setBatch(new BatchInfo('My Batch'));
```

### `addProperty(name, value)`

Adds a custom property to the test.

- `name`: The property name.
- `value`: The property value.

```javascript
eyes.addProperty('Environment', 'Staging');
```

## Properties

### `getIsOpen()`

Returns whether the Eyes instance is currently open.

```javascript
const isOpen = eyes.getIsOpen();
```

### `getApiKey()`

Gets the current API key.

```javascript
const apiKey = eyes.getApiKey();
```

## Example Usage

Here's a complete example demonstrating the usage of the Eyes object:

```javascript
const { chromium } = require('playwright');
const { Eyes, Target } = require('@applitools/eyes-playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const eyes = new Eyes();

  try {
    eyes.setApiKey('YOUR_API_KEY');
    await eyes.open(page, 'My App', 'Homepage Test', {
      width: 1024,
      height: 768,
    });

    await page.goto('https://example.com');

    await eyes.check('Full Page', Target.window().fully());

    await eyes.close();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await eyes.abort();
    await browser.close();
  }
})();
```

This example demonstrates opening a test, navigating to a page, performing a visual check, and closing the test.

For more detailed information about specific methods or advanced usage, please refer to other sections of this documentation or the [Applitools Eyes SDK for Playwright API Reference](https://applitools.com/docs/api/eyes-sdk/index-playwright).
