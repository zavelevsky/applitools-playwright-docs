# Applitools Dashboard Guide for Playwright Users

The Applitools dashboard is a powerful web-based interface for managing and analyzing your visual tests. This guide will walk you through the key features of the dashboard and how to use them effectively with your Playwright tests.

## Table of Contents

1. [Accessing the Dashboard](#accessing-the-dashboard)
2. [Dashboard Overview](#dashboard-overview)
3. [Test Results](#test-results)
4. [Analyzing Visual Differences](#analyzing-visual-differences)
5. [Managing Baselines](#managing-baselines)
6. [Batch Management](#batch-management)
7. [Team Collaboration](#team-collaboration)
8. [Integrations](#integrations)
9. [Insights and Analytics](#insights-and-analytics)
10. [Best Practices](#best-practices)

## Accessing the Dashboard

1. Go to [eyes.applitools.com](https://eyes.applitools.com)
2. Log in with your Applitools account credentials

## Dashboard Overview

The dashboard provides several key sections:

- **Recent Tests**: Shows your most recent test runs
- **Test Results**: Detailed view of all your test results
- **Batches**: Grouped test runs
- **Insights**: Analytics and trends of your visual testing
- **Admin**: Account and team management settings

## Test Results

When you run your Playwright tests with Applitools Eyes, the results will appear in the dashboard. Each test result includes:

- Test name
- Application name
- Browser and viewport size
- Pass/Fail status
- Execution time
- Number of steps (checkpoints)

Click on a test to see detailed results for each checkpoint.

## Analyzing Visual Differences

When a test fails due to visual differences:

1. Click on the failed test
2. You'll see a side-by-side comparison of the baseline and current images
3. Differences are highlighted in pink
4. Use the toolbar to:
   - Zoom in/out
   - Toggle difference highlighting
   - Switch between various comparison modes (Slider, Side by Side, etc.)

Example of how this relates to your Playwright test:

```javascript
test('Homepage layout', async ({ page }) => {
  await eyes.open(page, 'My App', 'Homepage Test');
  await page.goto('https://myapp.com');
  await eyes.check('Full page', Target.window().fully());
  // If this check fails, you'll see the differences in the dashboard
  await eyes.close();
});
```

## Managing Baselines

Baselines are the expected images that your tests are compared against. To manage baselines:

1. Go to the test results page
2. Click on a checkpoint
3. If you want to update the baseline, click "Accept" on the current image

Remember, updating a baseline will affect future test runs.

## Batch Management

Batches group related tests together. In your Playwright tests, you can create batches like this:

```javascript
const eyes = new Eyes();
eyes.setBatch({
  id: 'My batch id', // optional
  name: 'My batch name',
  sequenceName: 'My sequence name', // optional
});
```

In the dashboard:

1. Go to the "Batches" tab
2. Click on a batch to see all tests in that batch
3. Use batch statuses (Passed, Failed, Unresolved) for quick overview

## Team Collaboration

The dashboard facilitates team collaboration:

1. Invite team members (Admin section)
2. Assign unresolved differences to team members
3. Add comments to specific test results
4. Use the activity log to track changes

## Integrations

Applitools dashboard integrates with various tools:

- **Bug Tracking**: Automatically create issues in JIRA, GitHub, etc.
- **CI/CD**: View test results directly from your CI/CD pipeline
- **Slack**: Get notifications about test results

To set up integrations, go to the Admin section in the dashboard.

## Insights and Analytics

The Insights tab provides valuable analytics:

- Test coverage over time
- Common failure patterns
- Test execution times
- Browser and device coverage

Use these insights to improve your testing strategy and identify areas needing more attention.

## Best Practices

1. **Consistent Naming**: Use clear, consistent names for tests and batches in your Playwright code:

   ```javascript
   await eyes.open(page, 'MyApp', `Homepage - ${browserName}`);
   ```

2. **Regular Baseline Updates**: Review and update baselines regularly, especially after intended UI changes.

3. **Use Batch Info**: Group related tests into batches for easier management:

   ```javascript
   eyes.setBatch({ name: 'Sprint 34 - Homepage Redesign' });
   ```

4. **Leverage Insights**: Regularly review the Insights tab to optimize your testing strategy.

5. **Collaborative Review**: Encourage team members to review and discuss visual differences together.

By effectively using the Applitools dashboard, you can streamline your visual testing process, quickly identify and resolve issues, and maintain high-quality user interfaces across your application.
