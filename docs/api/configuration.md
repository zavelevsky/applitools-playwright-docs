# Configuration

The Configuration object in Applitools Eyes SDK for Playwright allows you to customize various aspects of your visual tests. This guide covers the available configuration options and how to use them.

## Importing the Configuration Object

```javascript
const { Configuration } = require('@applitools/eyes-playwright');
```

## Creating a Configuration Object

```javascript
const config = new Configuration();
```

## Configuration Methods

### Setting Basic Properties

#### `setApiKey(apiKey)`

Sets the Applitools API key.

```javascript
config.setApiKey('YOUR_API_KEY');
```

#### `setAppName(appName)`

Sets the name of the application under test.

```javascript
config.setAppName('My Web App');
```

#### `setTestName(testName)`

Sets the name of the test.

```javascript
config.setTestName('Homepage Test');
```

#### `setBatch(batch)`

Sets the batch for organizing test results.

```javascript
const { BatchInfo } = require('@applitools/eyes-playwright');
config.setBatch(new BatchInfo('My Batch'));
```

### Configuring Match Settings

#### `setMatchLevel(matchLevel)`

Sets the match level for visual comparisons.

```javascript
config.setMatchLevel('Layout');
```

Possible values: `'Strict'`, `'Content'`, `'Layout'`, `'Exact'`

#### `setIgnoreCaret(ignoreCaret)`

Sets whether to ignore the blinking caret when comparing images.

```javascript
config.setIgnoreCaret(true);
```

#### `setIgnoreDisplacements(ignoreDisplacements)`

Sets whether to ignore displacements when comparing images.

```javascript
config.setIgnoreDisplacements(true);
```

### Configuring Browser and Devices

#### `addBrowser(browserInfo)`

Adds a browser configuration for the Ultrafast Grid.

```javascript
config.addBrowser({ width: 1200, height: 800, name: 'chrome' });
```

#### `addDeviceEmulation(deviceName, screenOrientation)`

Adds a device emulation configuration for the Ultrafast Grid.

```javascript
const {
  DeviceName,
  ScreenOrientation,
} = require('@applitools/eyes-playwright');
config.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
```

### Advanced Configuration

#### `setViewportSize(viewportSize)`

Sets the viewport size for the browser.

```javascript
config.setViewportSize({ width: 1024, height: 768 });
```

#### `setBaselineEnvName(baselineEnvName)`

Sets the baseline environment name.

```javascript
config.setBaselineEnvName('Production');
```

#### `setBranchName(branchName)`

Sets the branch name for the test.

```javascript
config.setBranchName('feature/new-header');
```

#### `setParentBranchName(parentBranchName)`

Sets the parent branch name.

```javascript
config.setParentBranchName('develop');
```

#### `setSaveNewTests(saveNewTests)`

Sets whether new tests should be saved to the baseline.

```javascript
config.setSaveNewTests(false);
```

#### `setStitchMode(stitchMode)`

Sets the stitch mode for full page screenshots.

```javascript
config.setStitchMode('CSS');
```

Possible values: `'CSS'`, `'Scroll'`

#### `setHideScrollbars(hideScrollbars)`

Sets whether to hide scrollbars during visual testing.

```javascript
config.setHideScrollbars(true);
```

#### `setWaitBeforeScreenshots(waitBeforeScreenshots)`

Sets the wait time before taking a screenshot.

```javascript
config.setWaitBeforeScreenshots(500); // Wait 500ms
```

## Using the Configuration Object

After setting up your configuration, you can apply it to an `Eyes` instance:

```javascript
const { Eyes, Configuration } = require('@applitools/eyes-playwright');

const config = new Configuration();
config.setApiKey('YOUR_API_KEY');
config.setAppName('My Web App');
config.setTestName('Homepage Test');
config.setMatchLevel('Layout');

const eyes = new Eyes();
eyes.setConfiguration(config);
```

## Complete Example

Here's a comprehensive example demonstrating various configuration options:

```javascript
const {
  Eyes,
  Configuration,
  BatchInfo,
  DeviceName,
  ScreenOrientation,
} = require('@applitools/eyes-playwright');

async function setupEyes() {
  const config = new Configuration();

  config.setApiKey('YOUR_API_KEY');
  config.setAppName('My Web App');
  config.setTestName('Cross-Browser Homepage Test');

  config.setBatch(new BatchInfo('Sprint 22 Tests'));

  config.setMatchLevel('Layout');
  config.setIgnoreCaret(true);

  config.addBrowser({ width: 1200, height: 800, name: 'chrome' });
  config.addBrowser({ width: 1200, height: 800, name: 'firefox' });
  config.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

  config.setBaselineEnvName('Production');
  config.setBranchName('feature/new-homepage');
  config.setParentBranchName('develop');

  config.setStitchMode('CSS');
  config.setHideScrollbars(true);
  config.setWaitBeforeScreenshots(200);

  const eyes = new Eyes();
  eyes.setConfiguration(config);

  return eyes;
}

// Usage
(async () => {
  const eyes = await setupEyes();
  // ... use eyes in your test
})();
```

This example sets up a configuration for cross-browser testing, including mobile device emulation, with various advanced options.

For more detailed information about specific configuration options or advanced usage, please refer to the [Applitools Eyes SDK for Playwright Configuration API Reference](https://applitools.com/docs/api/eyes-sdk/index-playwright-configuration).
