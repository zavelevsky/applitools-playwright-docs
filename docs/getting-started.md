# Getting Started

This guide will walk you through the process of setting up Applitools Eyes with your Playwright tests and running your first visual test.

## Prerequisites

- Node.js (version 14 or later)
- A Playwright project set up (if you don't have one, follow the [Playwright getting started guide](https://playwright.dev/docs/intro))
- An Applitools account (sign up at [applitools.com](https://applitools.com) if you don't have one)

## Step 1: Install Applitools Eyes SDK

In your Playwright project directory, run the following command to install the Applitools Eyes SDK:

```bash
npm install @applitools/eyes-playwright
```

## Step 2: Set up your Applitools API Key

Applitools uses an API key to identify your account. You can find your API key in the Applitools dashboard under your user menu.

Set your API key as an environment variable:

```bash
export APPLITOOLS_API_KEY='YOUR_API_KEY'
```

For Windows, use:

```cmd
set APPLITOOLS_API_KEY=YOUR_API_KEY
```

Alternatively, you can set the API key in your test code (we'll show this in the example below).

## Step 3: Update your Playwright Test

Now, let's modify a Playwright test to include visual testing. Here's an example:

```javascript
import { test } from '@playwright/test';
import { Eyes, Target } from '@applitools/eyes-playwright';

test('My first visual test', async ({ page }) => {
  // Initialize the Eyes SDK
  const eyes = new Eyes();

  try {
    // Start the test
    await eyes.open(page, 'My App', 'My first Playwright test');

    // Navigate to the page you want to test
    await page.goto('https://example.com');

    // Take a screenshot of the entire page
    await eyes.check('Home Page', Target.window().fully());

    // Click a button and take another screenshot
    await page.click('button');
    await eyes.check('After button click', Target.window().fully());

    // End the test
    await eyes.close();
  } finally {
    // If the test was aborted before eyes.close was called, end the test
    await eyes.abort();
  }
});
```

## Step 4: Run your Test

Run your Playwright test as usual:

```bash
npx playwright test
```

## Step 5: Review Results

After running the test, you can view the results in the Applitools dashboard. You'll see the screenshots captured during the test and any visual differences detected.

## Next Steps

Congratulations! You've run your first visual test with Applitools Eyes and Playwright. Here are some next steps to explore:

1. Learn about [different types of visual checks](./core-concepts.md#types-of-visual-checks)
2. Explore [advanced configuration options](./advanced-usage.md#configuration)
3. Set up [CI/CD integration](./ci-cd-integration.md)

Remember, this is just the beginning. Applitools Eyes offers many more features to help you create robust visual tests. Explore the rest of the documentation to learn more!
