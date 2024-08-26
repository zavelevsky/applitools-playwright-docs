# Maintaining Visual Tests

Maintaining visual tests is crucial for ensuring their continued effectiveness and efficiency. This guide will help you keep your Applitools Eyes tests with Playwright up-to-date and manageable as your application evolves.

## Table of Contents
1. [Understanding the Need for Test Maintenance](#understanding-the-need-for-test-maintenance)
2. [Updating Baselines](#updating-baselines)
3. [Handling Intended Changes](#handling-intended-changes)
4. [Managing Test Debt](#managing-test-debt)
5. [Optimizing Test Performance](#optimizing-test-performance)
6. [Dealing with Flaky Tests](#dealing-with-flaky-tests)
7. [Version Control and CI/CD Considerations](#version-control-and-cicd-considerations)
8. [Best Practices](#best-practices)

## Understanding the Need for Test Maintenance

Visual tests need regular maintenance due to:
- Intentional UI changes
- New features or removed elements
- Changes in dynamic content
- Updates to testing infrastructure or dependencies

Regular maintenance ensures tests remain valuable and don't become a burden.

## Updating Baselines

When intentional UI changes occur:

1. Run your tests to identify affected checkpoints
2. Review changes in the Applitools dashboard
3. Accept new images as baselines for affected checkpoints

```javascript
// After making UI changes, run your tests
test('Updated homepage layout', async ({ page }) => {
  await eyes.open(page, 'MyApp', 'Homepage Test');
  await page.goto('/');
  await eyes.check('Full page', Target.window().fully());
  await eyes.close();
});

// Review results in the dashboard and accept new baselines
```

## Handling Intended Changes

For planned UI updates:

1. Use the `setMatchLevel` method to temporarily relax comparison criteria:

```javascript
test('Redesigned navbar', async ({ page }) => {
  await eyes.open(page, 'MyApp', 'Navbar Test');
  await page.goto('/');
  await eyes.check('Navbar', Target.region('#navbar').layout());
  await eyes.close();
});
```

2. Update test scripts to reflect new selectors or workflows

3. Consider using the `applitools.ignore` tag in your HTML to ignore specific elements during transition periods:

```html
<div class="applitools-ignore">
  <!-- New element that should be ignored temporarily -->
</div>
```

## Managing Test Debt

Regularly review and refactor your test suite:

1. Remove obsolete tests
2. Combine redundant checks
3. Update tests to reflect current best practices

```javascript
// Before: Multiple separate checks
await eyes.check('Header', Target.region('#header'));
await eyes.check('Footer', Target.region('#footer'));

// After: Combined check
await eyes.check('Header and Footer', Target.region('#header, #footer'));
```

## Optimizing Test Performance

As your test suite grows, optimize for speed:

1. Use batches to group related tests
2. Leverage the Ultrafast Grid for parallel execution
3. Minimize redundant checks and page loads

```javascript
const { ClassicRunner, BatchInfo } = require('@applitools/eyes-playwright');

const batch = new BatchInfo('My batch name');

test.describe('My test suite', () => {
  let eyes;
  let runner;

  test.beforeAll(async () => {
    runner = new ClassicRunner();
  });

  test.beforeEach(async ({ page }) => {
    eyes = new Eyes(runner);
    await eyes.setBatch(batch);
  });

  // Your test cases here

  test.afterAll(async () => {
    const results = await runner.getAllTestResults();
    console.log(results);
  });
});
```

## Dealing with Flaky Tests

To reduce flakiness:

1. Use strict selectors
2. Implement proper waits
3. Handle dynamic content appropriately

```javascript
// Use data-testid for more stable selectors
await eyes.check('User profile', Target.region('[data-testid="user-profile"]'));

// Wait for network idle before checking
await page.waitForLoadState('networkidle');
await eyes.check('After load', Target.window().fully());

// Ignore dynamic regions
await eyes.check('Dashboard', Target.window().fully().ignoreRegions('#live-updates'));
```

## Version Control and CI/CD Considerations

1. Store test scripts in version control alongside application code
2. Use branches for significant test updates
3. Implement code reviews for test changes
4. Automate baseline updates in your CI/CD pipeline

```yaml
# Example GitHub Actions workflow step
- name: Update Applitools baselines
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
  run: npx playwright test
  env:
    APPLITOOLS_UPDATE_BASELINE: 'true'
```

## Best Practices

1. **Regular Maintenance**: Schedule routine test reviews and updates

2. **Documentation**: Keep test documentation up-to-date, including the purpose of each visual check

3. **Modular Design**: Create reusable functions for common test steps

   ```javascript
   async function checkCommonElements(page, eyes) {
     await eyes.check('Header', Target.region('#header'));
     await eyes.check('Footer', Target.region('#footer'));
   }

   test('Homepage', async ({ page }) => {
     await eyes.open(page, 'MyApp', 'Homepage Test');
     await page.goto('/');
     await checkCommonElements(page, eyes);
     // Additional homepage-specific checks
     await eyes.close();
   });
   ```

4. **Consistent Naming**: Use clear, consistent naming conventions for tests and checkpoints

5. **Feedback Loop**: Establish a process for developers to easily update tests when making UI changes

6. **Periodic Full Comparisons**: Occasionally run full-page comparisons to catch unexpected changes

7. **Monitor Test Metrics**: Keep track of test run times, failure rates, and maintenance frequency to identify areas for improvement

By following these guidelines and best practices, you can maintain a robust and efficient visual testing suite that evolves alongside your application, providing continuous value to your development process.