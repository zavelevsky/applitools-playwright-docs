# Visual Testing in Code Reviews

Integrating visual testing results into your code review process can significantly enhance the quality and reliability of your UI changes. This guide will show you how to effectively use Applitools Eyes with Playwright in your code review workflow.

## Table of Contents

1. [Understanding the Importance of Visual Testing in Code Reviews](#understanding-the-importance-of-visual-testing-in-code-reviews)
2. [Setting Up Visual Testing for Code Reviews](#setting-up-visual-testing-for-code-reviews)
3. [Integrating Applitools Results in Pull Requests](#integrating-applitools-results-in-pull-requests)
4. [Analyzing Visual Differences During Code Review](#analyzing-visual-differences-during-code-review)
5. [Handling Visual Changes in the Review Process](#handling-visual-changes-in-the-review-process)
6. [Automating the Review Process](#automating-the-review-process)
7. [Best Practices for Visual Testing in Code Reviews](#best-practices-for-visual-testing-in-code-reviews)

## Understanding the Importance of Visual Testing in Code Reviews

Visual testing in code reviews helps:

- Catch unintended visual regressions early
- Ensure UI changes meet design specifications
- Improve collaboration between developers and designers
- Reduce the likelihood of visual bugs reaching production

## Setting Up Visual Testing for Code Reviews

1. Ensure Applitools Eyes tests are part of your CI/CD pipeline:

```yaml
# Example GitHub Actions workflow
name: Visual Tests
on: [pull_request]
jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14.x'
      - run: npm ci
      - name: Run visual tests
        run: npx playwright test
        env:
          APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
          APPLITOOLS_BATCH_ID: ${{ github.sha }}
```

2. Configure Applitools to use the pull request information:

```javascript
import { BatchInfo } from '@applitools/eyes-playwright';

const batchInfo = new BatchInfo(`PR #${process.env.GITHUB_PR_NUMBER}`);
batchInfo.setNotifyOnCompletion(true);
eyes.setBatch(batchInfo);
```

## Integrating Applitools Results in Pull Requests

1. Use the Applitools GitHub integration to automatically add test results to your pull requests.

2. Add a status check in your repository settings to require passing visual tests before merging.

3. Include links to Applitools test results in your PR description:

```javascript
const testResults = await eyes.getRunner().getAllTestResults(false);
console.log(
  `Visual test results: ${testResults
    .getAllResults()[0]
    .getAppUrls()
    .getBatch()}`
);
```

## Analyzing Visual Differences During Code Review

1. Review the Applitools dashboard for any failed tests.

2. Use the comparison tools in the Applitools dashboard to understand changes:

   - Slide the comparison bar to see before/after
   - Use the side-by-side view for detailed comparison
   - Check the "Diff" view to highlight changes

3. Consider the context of the changes:

```javascript
// Adding context to your visual tests
await eyes.check(
  'Homepage after new feature addition',
  Target.window().fully().withName('Homepage').layoutBreakpoints(true)
);
```

## Handling Visual Changes in the Review Process

1. For intended changes:

   - Approve the changes in the Applitools dashboard
   - Update the baseline if necessary

2. For unintended changes:

   - Comment on the PR with screenshots and descriptions of the issues
   - Request changes and provide guidance for fixes

3. For ambiguous changes:
   - Consult with designers or product owners
   - Use Applitools' collaboration features to discuss changes

## Automating the Review Process

1. Set up automated comments on PRs for visual changes:

```javascript
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function commentOnPR(body) {
  await octokit.issues.createComment({
    owner: process.env.GITHUB_REPOSITORY_OWNER,
    repo: process.env.GITHUB_REPOSITORY_NAME,
    issue_number: process.env.GITHUB_PR_NUMBER,
    body: body,
  });
}

// After running tests
const testResults = await eyes.getRunner().getAllTestResults(false);
if (testResults.getUnresolvedCount() > 0) {
  await commentOnPR(
    `Visual changes detected. Please review: ${testResults
      .getAllResults()[0]
      .getAppUrls()
      .getBatch()}`
  );
}
```

2. Implement auto-approval for minor changes:

```javascript
if (
  testResults.getUnresolvedCount() > 0 &&
  testResults.getTotalDiffs() < MINOR_DIFF_THRESHOLD
) {
  // Auto-approve minor changes
  await eyes.getRunner().approveAllTests();
}
```

## Best Practices for Visual Testing in Code Reviews

1. **Consistent Environments**: Ensure CI environments match development environments closely.

2. **Granular Tests**: Write specific visual tests for areas likely to change:

```javascript
test('New feature button', async ({ page }) => {
  await page.goto('/new-feature');
  await eyes.check('New Feature Button', Target.region('#new-feature-btn'));
});
```

3. **Clear Test Naming**: Use descriptive names for tests and checkpoints to aid review:

```javascript
await eyes.check(
  'User profile page - logged in state',
  Target.window().fully()
);
```

4. **Review Thresholds**: Set appropriate thresholds for auto-approval vs. manual review.

5. **Document Decisions**: Comment on PRs with reasoning for approving or rejecting visual changes.

6. **Cross-functional Reviews**: Involve designers in the review process for significant UI changes.

7. **Continuous Learning**: Regularly review and refine your visual testing strategy based on caught issues and missed problems.

8. **Performance Consideration**: Balance comprehensive testing with CI performance:

```javascript
// Example of running visual tests only on changed components
const changedFiles = getChangedFiles(); // Implement this based on your VCS
if (changedFiles.includes('src/components/Header.js')) {
  await eyes.check('Header', Target.region('#header'));
}
```

By incorporating these practices into your code review process, you can leverage Applitools Eyes and Playwright to catch visual regressions early, ensure UI consistency, and streamline your development workflow.
