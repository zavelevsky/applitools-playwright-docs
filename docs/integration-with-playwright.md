# Integration with Playwright

In this section, we'll explore how to seamlessly integrate Applitools Eyes into your Playwright tests. You'll learn how to use the SDK within your tests, customize configurations, and work with Page Object Models (POMs) to enhance your visual testing strategy.

## Using the SDK with Playwright tests

### Importing Applitools modules

To access Applitools features, import `test` from `@applitools/eyes-playwright` in your test files:

```typescript
import { test } from '@applitools/eyes-playwright';
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
import { EyesFixture } from '@applitools/eyes-playwright;
export default defineConfig<EyesFixture> ({
  use: {
    eyesConfig: {
      appName: 'My App',
      failTestsOnDiff: 'afterEach', // Options: 'afterEach', 'afterAll', false
    },
  },
});
```

#### Examples of global settings

- `apiKey`: Default Applitools API key for all tests.
- `appName`: Default application name to use.
- `batch`: Sets the BatchInfo for grouping tests.
- `failTestsOnDiff`: Controls when to throw exceptions on visual differences.

## Enhanced HTML report

### Setup and run the report

When integrating Applitools Eyes into your Playwright tests, Playwright's HTML report is enhanced with visual test results. Go to `playwright.config.ts` file and add the following settings:

```typescript
// playwright.config.ts
reporter: '@applitools/eyes-playwright/reporter',
```

_Note: The CLI setup may have already made this change for you._

After running your tests, you can view the test results in the enhanced HTML report. To open the report, run:

```bash
npx playwright show-report
```

This custom report will display the visual test outcomes and can serve as a lightweight alternative to the Applitools Dashboard, easily shareable and always available and up to date with the latest batch resolution.

![report main page](/img/report-main-page.png)

### Review visual test results

The enhanced report offers several helpful options to view and address visual test results, accepting intentional changes, rejecting detecting issues, and eventually saving the checkpoints as the expected baseline.

![report diffs](/img/report-visual-diff.png)

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
import { test } from '@applitools/eyes-playwright';
const { LoginPage } = require('../page-objects/LoginPage');

test('Login page visual test using eyes.check()', async ({ page, eyes }) => {
  const loginPage = new LoginPage(eyes, page);
  await loginPage.navigate();

  // Visual checkpoint within the page object
  await loginPage.verifyLoginPage();
});
```
