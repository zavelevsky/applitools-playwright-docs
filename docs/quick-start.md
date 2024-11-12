# Quick Start

## Installation

### Install the SDK

In your project directory, install the Applitools Eyes SDK for Playwright:

```bash
npm install -D @applitools/eyes-playwright
```

### Run the interactive CLI setup

To configure your project for Applitools Eyes, run the setup tool:

```bash
npx eyes-setup
```

The CLI will:

- Configure your project for Applitools Eyes.
- Attempt to modify imports where possible.
- Add configuration settings to your `playwright.config.ts` file.
- Add a demo test to help you get started.

_Note: In cases where imports cannot be modified automatically (e.g., when importing the `test` object from another npm package), you may need to adjust them manually. More details are provided in the [Integration with Playwright](./integration-with-playwright.md) section._

### Set your Applitools API key

When prompted by the CLI, enter your Applitools API key. If you don't have one, you can sign up for a free account and obtain your API key from the Applitools Dashboard.

Alternatively, you can set the API key as an environment variable:

```bash
export APPLITOOLS_API_KEY='your_api_key_here'
```

It's advisable to set your API key as an environment variable `APPLITOOLS_API_KEY` instead of hardcoding it in your configuration file. This approach keeps your API key secure since configuration files are often checked into version control systems.

_Note: Detailed instructions on acquiring your API key are provided in the [Applitools Dashboard](./applitools-dashboard.md) section._

## Setting up your first visual test

### Import Applitools test

In your test files, ensure you're using the Applitools version of `test`:

```typescript
import { test } from '@applitools/eyes-playwright/fixture';
```

_Note: The CLI setup may have already made this change for you._

### Add a visual checkpoint

Use `eyes.check()` in your test to add a visual checkpoint:

```typescript
test('My first visual test', async ({ page, eyes }) => {
  await page.goto('https://example.com');
  // Visual check
  await eyes.check('Homepage', {
    fully: true,
    matchLevel: 'Dynamic',
  });
});
```

This command captures a screenshot of the page and compares it against a baseline image. If no baseline exists yet, the captured screenshot becomes the baseline for future comparisons.

_Note: If you have existing tests using `toHaveScreenshot`, they will run with Applitools Eyes as the equivalent of `eyes.check()`. Simply import `except` from `'@applitools/eyes-playwright/fixture'`. However, we recommend using the `eyes.check()` API for enhanced capabilities and better integration with Applitools features._

## Running your test

Execute your test using the Playwright test runner:

```bash
npx playwright test
```

### First run: baseline creation

On the first run, Applitools captures baseline images for each visual checkpoint. These baselines serve as the reference for future test runs.

### Subsequent runs: visual comparison

On subsequent runs, Applitools compares new screenshots to the baselines to detect visual differences. Any discrepancies are reported in the test results.

## Viewing results

### In Playwright

After running your tests, you can view the test results in Playwright's HTML report. To open the report, run:

```bash
npx playwright show-report
```

This custom report will display the visual test outcomes and can serve as a lightweight alternative to the Applitools Dashboard, easily shareable and always available and up to date with the latest batch resolution.

![report](/img/report-visual-diff.png)

### In Applitools dashboard

For detailed visual test results:

1. After your test run, the terminal output will include a link to the test results in the Applitools Dashboard.
![terminal](/img/console-results.png)
2. Click the link to navigate directly to your test results.
3. Review any visual differences detected.
4. Accept changes and click the Save button to update baselines, or reject changes to flag issues.
![dashboard](/img/accept-changes.png)
