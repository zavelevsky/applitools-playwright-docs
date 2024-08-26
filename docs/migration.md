# Migrating to Applitools Eyes from Other Visual Testing Methods

This guide will help you transition from Playwright's built-in screenshot comparison or other visual testing tools to Applitools Eyes. We'll cover the key differences, migration strategies, and best practices to ensure a smooth transition.

## Table of Contents
1. [Understanding the Benefits of Migration](#understanding-the-benefits-of-migration)
2. [Migrating from Playwright's Built-in Screenshot Comparison](#migrating-from-playwrights-built-in-screenshot-comparison)
3. [Migrating from Other Visual Testing Tools](#migrating-from-other-visual-testing-tools)
4. [Adapting Your Test Structure](#adapting-your-test-structure)
5. [Handling Existing Baselines](#handling-existing-baselines)
6. [Updating CI/CD Pipelines](#updating-cicd-pipelines)
7. [Best Practices for Migration](#best-practices-for-migration)

## Understanding the Benefits of Migration

Before diving into the migration process, it's important to understand the advantages of using Applitools Eyes:

- AI-powered visual comparisons
- Automated maintenance with self-healing tests
- Cross-browser and cross-device testing with the Ultrafast Grid
- Advanced collaboration features
- Detailed reporting and analytics

## Migrating from Playwright's Built-in Screenshot Comparison

If you're currently using Playwright's `page.screenshot()` and manual comparison, here's how to migrate to Applitools Eyes:

### Before (Playwright screenshot):
```javascript
const { test, expect } = require('@playwright/test');

test('homepage visual comparison', async ({ page }) => {
  await page.goto('https://example.com');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot('homepage.png');
});
```

### After (Applitools Eyes):
```javascript
const { test } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright');

test('homepage visual comparison', async ({ page }) => {
  const eyes = new Eyes();
  
  try {
    await eyes.open(page, 'My App', 'Homepage Test');
    await page.goto('https://example.com');
    await eyes.check('Homepage', Target.window().fully());
    await eyes.close();
  } finally {
    await eyes.abort();
  }
});
```

Key differences:
- No need to manually manage screenshot files
- AI-powered comparison instead of pixel-by-pixel matching
- Automatic handling of dynamic content and minor rendering differences

## Migrating from Other Visual Testing Tools

If you're migrating from another visual testing tool, the process will be similar. Here are some general steps:

1. Install the Applitools Eyes SDK:
   ```bash
   npm install @applitools/eyes-playwright
   ```

2. Replace the existing visual testing tool's initialization with Applitools Eyes:
   ```javascript
   const { Eyes, Target } = require('@applitools/eyes-playwright');
   const eyes = new Eyes();
   ```

3. Replace screenshot capture and comparison commands with Applitools checks:
   ```javascript
   // Before (generic example)
   await someVisualTool.captureAndCompare('Homepage');

   // After (Applitools)
   await eyes.check('Homepage', Target.window().fully());
   ```

4. Update any custom logic for handling dynamic content or ignore regions:
   ```javascript
   await eyes.check('Dynamic Page', Target.window().fully()
     .ignoreRegions('#dynamic-content')
     .layout('#semi-dynamic-region')
   );
   ```

## Adapting Your Test Structure

When migrating to Applitools Eyes, you may need to adjust your test structure:

1. Wrap your tests with `eyes.open()` and `eyes.close()`:
   ```javascript
   test('visual test', async ({ page }) => {
     await eyes.open(page, 'My App', 'Test Name');
     // Your test steps here
     await eyes.close();
   });
   ```

2. Use `eyes.check()` for visual validations instead of assertions:
   ```javascript
   // Before
   expect(await page.screenshot()).toMatchSnapshot();

   // After
   await eyes.check('Check Name', Target.window().fully());
   ```

3. Implement proper error handling:
   ```javascript
   try {
     await eyes.open(page, 'My App', 'Test Name');
     // Test steps
     await eyes.close();
   } finally {
     await eyes.abort(); // Will end the test if an error occurred
   }
   ```

## Handling Existing Baselines

Migrating existing baselines:

1. For critical flows, consider running both old and new visual tests in parallel during the transition.

2. Use Applitools' baseline management features:
   ```javascript
   eyes.setBaselineBranchName('migration-baseline');
   eyes.setParentBranchName('master');
   ```

3. Gradually replace old baselines as you validate the new Applitools results.

## Updating CI/CD Pipelines

Adjust your CI/CD configuration:

1. Add the Applitools API key as an environment variable:
   ```yaml
   env:
     APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
   ```

2. Update test run commands:
   ```yaml
   - name: Run visual tests
     run: npx playwright test
     env:
       APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
   ```

3. Configure failure thresholds based on Applitools results:
   ```javascript
   const { VisualGridRunner, ClassicRunner, ConfigurationFactory } = require('@applitools/eyes-playwright');
   
   // Setup
   const config = ConfigurationFactory.getConfig();
   const runner = new VisualGridRunner({ testConcurrency: 5 });

   // After running tests
   const results = await runner.getAllTestResults(false);
   console.log(results.toString());
   
   if (results.getUnresolvedCount() > 0) {
     throw new Error(`${results.getUnresolvedCount()} visual differences found!`);
   }
   ```

## Best Practices for Migration

1. **Gradual Migration**: Start with a small subset of tests and gradually expand.

2. **Parallel Running**: Run both old and new visual tests simultaneously during the transition period.

3. **Review and Refine**: Regularly review test results and refine your visual testing strategy.

4. **Team Training**: Ensure your team is trained on Applitools Eyes concepts and best practices.

5. **Leverage Applitools Features**: Make use of Applitools' advanced features like the Ultrafast Grid and AI-powered matching.

6. **Update Documentation**: Keep your testing documentation up-to-date with the new Applitools workflow.

7. **Monitor Performance**: Keep an eye on test execution times and optimize as necessary.

By following this guide, you should be able to smoothly transition from your current visual testing method to Applitools Eyes, leveraging its advanced features to improve your visual testing process.