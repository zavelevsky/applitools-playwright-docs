# Integration with Playwright

In this section, we'll explore how to seamlessly integrate Applitools Eyes into your Playwright tests. You'll learn how to use the SDK within your tests, customize configurations, and work with Page Object Models (POMs) to enhance your visual testing strategy.

## Using the SDK with Playwright tests

### Importing Applitools modules

To access Applitools features, import `test` from `@applitools/eyes-playwright/fixture` in your test files:

```typescript
import { test } from '@applitools/eyes-playwright/fixture';
```

This replaces the default Playwright `test` function with Applitools-enhanced version that supports visual testing.

#### Accessing the `eyes` object

The extended `test` object provides access to the `eyes` object within your test, enabling direct use of Applitools methods:

```typescript
test('Visual test using eyes.check()', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  // Visual checkpoint of the full page using the `Strict` match level
  await eyes.check('Homepage', {
    fully: true,
    matchLevel: 'Strict',
  });
});
```

### Visual checkpoints

#### Using `eyes.check()`

The `eyes.check()` method allows you to capture visual checkpoints with more explicit control. You can specify parameters such as the checkpoint name, match level, and regions to ignore.

**Example:**

```typescript
test('Visual test using eyes.check()', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  // Visual checkpoint with custom settings
  await eyes.check('Homepage', {
    // Capture the full page
    fully: true,
    // Set match level
    matchLevel: 'Strict',
    // Ignore dynamic content
    ignoreRegions: [page.locator('.dynamic-content')],
  });
});
```

### Best practices

- **Descriptive checkpoint names**: Provide meaningful names to your `eyes.check()` calls for easy identification in the Applitools Dashboard.
- **Use contextual settings**: Adjust settings like `matchLevel` and `ignoreRegions` based on the specific content being tested.
- **Use textual assertions only when necessary**: Use `eyes.check()` to assert appearance and every functionality that has a visual aspect, thus reducing your test code by 80%. Leave only those textual assertions needed to validate certain dynamic aspects that require programmatic evaluation.
- **Encapsulate Visual Checks**: Keep visual checkpoints within relevant page object methods or custom fixtures for better organization.

## Enhanced HTML report

When integrating Applitools Eyes into your Playwright tests, you gain access to an enhanced HTML report that provides detailed visual test results. This report extends Playwright's default HTML report with Applitools' visual testing insights, making it a powerful tool for reviewing and sharing test outcomes.

### Setup and run the report

To enable the enhanced HTML report, update your `playwright.config.ts` file with the following settings:

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { EyesFixture } from '@applitools/eyes-playwright/fixture';

export default defineConfig<EyesFixture>({
  // Other Playwright configurations...
  reporter: '@applitools/eyes-playwright/reporter',
  // Additional configurations...
});
```

_Note: If you used the Applitools CLI setup tool, this change may have already been made for you._

After running your tests, you can view the test results in the enhanced HTML report. To open the report, run:

```bash
npx playwright show-report
```

### Benefits of the enhanced report

- **Accept diffs and update baselines**: One of the significant advantages of the enhanced report is the ability to accept differences and update baselines directly from the report. If intentional changes were made to the UI, you can approve these changes with a single click, updating the baseline images for future test runs.
- **Lightweight and shareable**: The enhanced Applitools HTML report is lightweight and can be easily shared. You can commit it to source control or send it as an email attachment without worrying about large file sizes.
- **Standalone viewing**: You don't need to be logged in to Applitools Eyes or even have an Applitools account to view the test results, checkpoint images, and diffs. This makes it convenient for team members or stakeholders who don't have access to Applitools.
- **Security and permissions**: Only approved users can view baseline images and update baselines. This is crucial for enterprise customers or teams dealing with sensitive user data or intellectual property included in baseline images.
- **Always up-to-date**: The report remains up to date with the latest batch resolution, ensuring that you always have the most current information at your fingertips.

![report main page](/img/report-main-page.png)

### Reviewing visual test results

The enhanced report offers several helpful features to view and address visual test results:

- **Filters for efficient review at scale**: Additional filters like "Eyes" and "Unresolved" help you focus on visual tests that require your attention. The "Unresolved" filter lists tests with visual differences needing review, allowing you to efficiently manage and resolve them. Accepting all diffs in a test moves it to "Passed", while rejecting any diffs keeps it under "Failed".
- **Visual diffs**: Easily identify differences between the baseline and the current test run with side-by-side comparisons and highlighted changes.
- **Accepting or rejecting changes**: If intentional changes were made, you can accept them directly in the report. If unexpected differences are found, you can reject them to flag the test for further investigation.

#### Accepting or rejecting changes

- **Accept**: Accepting changes means you **accept and save the new checkpoint as the baseline image**. This updates the baseline image for future test runs.
- **Reject**: Rejecting changes indicates that the differences are unintended and need to be addressed. This changes the test status to "Failed".

![report diffs](/img/report-visual-diff.png)

#### Viewing the report without logging in

You can view test results, checkpoint images, and diffs without being logged in to Applitools Eyes or even having an Applitools account.

_Note: For security reasons, baseline images are not displayed when not logged in, and accepting or rejecting changes requires authentication._

![report logged out](/img/report-logged-out.png)

#### Logging in to Applitools Eyes

When you attempt to accept or reject changes without being logged in, the report will prompt you to log in. This ensures that only authorized users can modify baselines.

**Why do I need to login to Eyes?** Baseline images and the ability to modify them are protected to prevent unauthorized changes, maintaining the integrity of your visual tests. This is particularly important for teams that handle sensitive user data or proprietary information included in baseline images.

![report logging in](/img/report-logging-in.png)

### Sharing the report

Since the enhanced HTML report is lightweight and self-contained, you can easily share it with others:

- **Commit to source control**: Add the report to your version control system to keep a history of test runs and results.
- **Share the file**: Send the report file directly to team members or stakeholders who need to review the test results.

**No dependencies**: Recipients of the report don't need any special software or access to Applitools Eyes to view the report. They can open it in any modern web browser.

#### Using the report in continuous integration (CI)

In a CI environment, you can save the report as an artifact so that team members can download and review it. This is particularly useful for automated testing pipelines.

For more information on setting up CI with Playwright and managing test artifacts, refer to the [Playwright CI guide](https://playwright.dev/docs/ci-intro).

## Advanced configuration

You can pass various options both capture methods in order to customize the behavior:

- **`fully`**: Capture the full page when set to `true`.
- **`region`**: Define a specific region or element to capture.
- **`matchLevel`**: Set the match level, which determines the way by which Eyes compares the checkpoint image with the baseline image. 'Strict' is the recommended value.
- **`ignoreRegions`**: Specify regions to ignore during comparison.
- **`floatingRegions`**: Define floating regions for containers of elements that may move.
- **`IgnoreDisplacements`**: suppresses differences caused by elements shifting positions.

**Example: Capturing a specific element**

```typescript
test('Element visual test using eyes.check()', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  const navbar = page.locator('.navbar');

  // Visual checkpoint of a specific element
  await eyes.check('Navbar', {
    region: navbar,
    matchLevel: 'Layout',
  });
});
```

### Overriding default behaviors

You can adjust global settings in your `playwright.config.ts` file using `eyesConfig`:

```typescript
// playwright.config.ts
import { EyesFixture } from '@applitools/eyes-playwright/fixture';
export default defineConfig<EyesFixture>({
  use: {
    eyesConfig: {
      appName: 'My App',
      failTestsOnDiff: 'afterEach', // Options: 'afterEach', 'afterAll', false
    },
  },
});
```

#### Examples of global settings

- `appName`: Default application name to use.
- `batch`: Sets the BatchInfo for grouping tests.
- `failTestsOnDiff`: Controls when to throw exceptions on visual differences.

## Working with Page Object Models (POMs)

Integrating `eyes` within your Page Object Models helps maintain clean and organized test code.

**Example:**

```typescript
// page-objects/LoginPage.js
class LoginPage {
  constructor(eyes, page) {
    this.eyes = eyes;
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginPage() {
    await this.eyes.check('Login Page', {
      fully: true,
    });
  }
}

module.exports = { LoginPage };
```

Usage in the test:

```typescript
// tests/login.test.js
import { test } from '@applitools/eyes-playwright/fixture';
const { LoginPage } = require('../page-objects/LoginPage');

test('Login page visual test using eyes.check()', async ({ page, eyes }) => {
  const loginPage = new LoginPage(eyes, page);
  await loginPage.navigate();

  // Visual checkpoint within the page object
  await loginPage.verifyLoginPage();
});
```
