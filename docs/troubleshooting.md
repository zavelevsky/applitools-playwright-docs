# Troubleshooting

This guide addresses common issues you may encounter when using Applitools Eyes with Playwright and provides solutions to help you resolve them quickly.

## Table of Contents
1. [Common Setup Issues](#common-setup-issues)
2. [Authentication and API Key Problems](#authentication-and-api-key-problems)
3. [Test Execution Failures](#test-execution-failures)
4. [Visual Validation Issues](#visual-validation-issues)
5. [Performance and Timeout Problems](#performance-and-timeout-problems)
6. [Browser and Device Emulation Challenges](#browser-and-device-emulation-challenges)
7. [CI/CD Integration Issues](#cicd-integration-issues)
8. [Debugging Techniques](#debugging-techniques)

## Common Setup Issues

### Issue: Applitools Eyes SDK not found
**Solution:** Ensure you've installed the SDK correctly:
```bash
npm install @applitools/eyes-playwright
```

### Issue: Incompatible versions
**Solution:** Check compatibility between Applitools Eyes SDK and Playwright versions:
```javascript
const { Eyes, Target } = require('@applitools/eyes-playwright');
console.log(Eyes.getVersion()); // Log Applitools version
console.log(require('playwright').chromium.name()); // Log Playwright version
```

## Authentication and API Key Problems

### Issue: API key not recognized
**Solution:** Verify your API key is set correctly:
```javascript
const eyes = new Eyes();
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
// or
eyes.setApiKey('YOUR_API_KEY');
```

### Issue: API key not set in CI/CD environment
**Solution:** Ensure the API key is set as an environment variable in your CI/CD settings:
```yaml
# Example for GitHub Actions
env:
  APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
```

## Test Execution Failures

### Issue: Eyes.open() fails
**Solution:** Check if the browser context is initialized properly:
```javascript
const browser = await playwright.chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await eyes.open(page, 'App Name', 'Test Name', { width: 1024, height: 768 });
```

### Issue: Check failed unexpectedly
**Solution:** Implement error handling and logging:
```javascript
try {
  await eyes.check('Test Name', Target.window().fully());
} catch (error) {
  console.error('Check failed:', error);
  // Additional error handling or reporting
}
```

## Visual Validation Issues

### Issue: False positives in visual comparisons
**Solution:** Adjust match level or use layout matching:
```javascript
await eyes.check('Flexible Layout', Target.window().fully().layout());
```

### Issue: Dynamic content causing failures
**Solution:** Use ignore regions or match level settings:
```javascript
await eyes.check('Dynamic Content', Target.window().fully()
  .ignoreRegions('#dynamic-content')
  .layout('#semi-dynamic-region')
);
```

## Performance and Timeout Problems

### Issue: Tests taking too long
**Solution:** Use Applitools Ultrafast Grid and concurrent test execution:
```javascript
const { VisualGridRunner } = require('@applitools/eyes-playwright');
const runner = new VisualGridRunner({ testConcurrency: 5 });
const eyes = new Eyes(runner);
```

### Issue: Timeouts during visual checks
**Solution:** Increase timeout settings and ensure stable network conditions:
```javascript
eyes.setMatchTimeout(0);  // Disable timeout for match
await page.setDefaultTimeout(30000);  // Increase Playwright's timeout
```

## Browser and Device Emulation Challenges

### Issue: Inconsistent results across browsers
**Solution:** Use Applitools Ultrafast Grid for consistent cross-browser testing:
```javascript
const { BrowserType, ScreenOrientation, DeviceName } = require('@applitools/eyes-playwright');
const config = eyes.getConfiguration();
config.addBrowser({ width: 1200, height: 800, name: BrowserType.CHROME });
config.addBrowser({ width: 1200, height: 800, name: BrowserType.FIREFOX });
config.addDevice(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);
eyes.setConfiguration(config);
```

### Issue: Mobile emulation not working correctly
**Solution:** Ensure proper device emulation setup:
```javascript
const iPhone11 = playwright.devices['iPhone 11'];
const context = await browser.newContext({
  ...iPhone11,
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 3,
});
const page = await context.newPage();
```

## CI/CD Integration Issues

### Issue: Tests pass locally but fail in CI
**Solution:** Ensure consistent environments and use Applitools' baseline branch management:
```javascript
eyes.setBaselineBranchName('master');
eyes.setParentBranchName('develop');
```

### Issue: Can't see test results in CI logs
**Solution:** Implement proper logging and result reporting:
```javascript
const results = await eyes.getRunner().getAllTestResults(false);
console.log(results.toString());
```

## Debugging Techniques

### Using Applitools Debug Data
Enable and retrieve debug data for support:
```javascript
eyes.setSaveDebugData(true);
// After test execution
const results = await eyes.getRunner().getAllTestResults(false);
console.log('Debug data URL:', results.getAllResults()[0].getAppUrls().getSession());
```

### Leveraging Playwright's Tracing
Use Playwright's tracing for detailed execution analysis:
```javascript
const context = await browser.newContext();
await context.tracing.start({ screenshots: true, snapshots: true });
// ... run your test ...
await context.tracing.stop({ path: 'trace.zip' });
```

### Verbose Logging
Enable verbose logging for both Applitools and Playwright:
```javascript
const { ConsoleLogHandler } = require('@applitools/eyes-playwright');
eyes.setLogHandler(new ConsoleLogHandler(true));

// For Playwright
const browser = await playwright.chromium.launch({ logger: {
  isEnabled: (name, severity) => name === 'browser',
  log: (name, severity, message, args) => console.log(`${name} ${message}`)
}});
```

Remember, when troubleshooting, always check the Applitools dashboard for detailed test results and AI-assisted insights. If you encounter persistent issues, don't hesitate to reach out to Applitools support with your debug data and detailed reproduction steps.