# Integration with Playwright

This guide explains how to integrate Applitools Eyes seamlessly with your Playwright tests. We'll cover the setup process, basic usage, and best practices for combining visual testing with your existing Playwright automation.

## Setting Up Applitools Eyes in Your Playwright Project

### Installation

First, install the Applitools Eyes SDK for Playwright:

```bash
npm install @applitools/eyes-playwright
```

### Importing and Initializing

In your test file, import the necessary modules and initialize the Eyes object:

```javascript
import { test } from '@playwright/test';
import { Eyes, Target } from '@applitools/eyes-playwright';

test.describe('My First Visual Test Suite', () => {
  let eyes;

  test.beforeEach(async () => {
    eyes = new Eyes();
    // Set your API key here if not using environment variables
    // eyes.setApiKey('YOUR_API_KEY');
  });

  // Your test cases will go here

  test.afterEach(async () => {
    await eyes.close();
  });
});
```

## Basic Usage

Here's a basic example of how to add visual checks to your Playwright test:

```javascript
test('Homepage visual test', async ({ page }) => {
  await eyes.open(page, 'My Application', 'Homepage Test');

  await page.goto('https://my-application.com');

  await eyes.check('Full Page', Target.window().fully());

  await page.click('#login-button');

  await eyes.check('Login Form', Target.region('#login-form'));
});
```

## Advanced Integration Techniques

### Using Playwright's Page Object Model

You can integrate Applitools checks into your Page Object Model:

```javascript
class HomePage {
  constructor(page, eyes) {
    this.page = page;
    this.eyes = eyes;
  }

  async navigate() {
    await this.page.goto('https://my-application.com');
    await this.eyes.check('Home Page', Target.window().fully());
  }

  async clickLoginButton() {
    await this.page.click('#login-button');
    await this.eyes.check('Login Button Clicked', Target.window().fully());
  }
}

test('Using Page Object Model', async ({ page }) => {
  await eyes.open(page, 'My Application', 'POM Test');

  const homePage = new HomePage(page, eyes);
  await homePage.navigate();
  await homePage.clickLoginButton();
});
```

### Handling Dynamic Content

For pages with dynamic content, you can use ignore regions or match levels:

```javascript
await eyes.check(
  'Dynamic Page',
  Target.window().fully().ignoreRegion('#dynamic-content').layout()
);
```

## Best Practices

1. **Consistent Viewport Sizes**: Set consistent viewport sizes for your tests to ensure reproducibility.

   ```javascript
   await page.setViewportSize({ width: 1280, height: 720 });
   ```

2. **Meaningful Test Names**: Use descriptive names for your tests and check points to make debugging easier.

3. **Batching Related Tests**: Group related tests into batches for easier management.

   ```javascript
   eyes.setBatch({
     id: 'My batch name',
     name: 'My batch',
   });
   ```

4. **Error Handling**: Always use try-finally blocks to ensure Eyes is properly closed, even if an error occurs.

   ```javascript
   try {
     // Your test code here
   } finally {
     await eyes.abort();
   }
   ```

5. **Parallel Execution**: Leverage Playwright's parallel execution capabilities with Applitools' Visual Grid for faster test runs.

## Combining Functional and Visual Tests

You can combine functional assertions with visual checks in the same test:

```javascript
test('Login functionality and visuals', async ({ page }) => {
  await eyes.open(page, 'My Application', 'Login Test');

  await page.goto('https://my-application.com/login');
  await eyes.check('Login Page', Target.window().fully());

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#submit-button');

  // Functional assertion
  await expect(page.locator('.welcome-message')).toHaveText(
    'Welcome, testuser!'
  );

  // Visual check
  await eyes.check('After Login', Target.window().fully());
});
```

By following these integration techniques and best practices, you can create robust, efficient tests that combine Playwright's powerful automation capabilities with Applitools' advanced visual testing features.
