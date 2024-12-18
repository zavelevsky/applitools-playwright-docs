# API Overview

Welcome to the API reference for integrating Applitools Eyes with Playwright. This section provides detailed information on configuring Applitools Eyes within your Playwright tests and utilizing its powerful visual testing capabilities.

## Overview

Integrating Applitools Eyes with Playwright involves two main steps:

1. **Configuration**: Update your `playwright.config.ts` file to include Applitools Eyes settings under `eyesConfig`.
2. **Writing tests**: Import `test` from `@applitools/eyes-playwright/fixture` and use the `eyes` object within your tests to perform visual checkpoints using the `eyes.check` method.

   **Note:** Additionally, Applitools Eyes supports Playwright's native visual assertion methods. If you import `expect` from `@applitools/eyes-playwright/fixture`, your existing tests using `expect(page).toHaveScreenshot()` will work seamlessly with Applitools Eyes. However, it is recommended to use `eyes.check` for more advanced visual testing features.

## API sections

The API reference is divided into the following sections:

- **Configuration options**: A comprehensive list of all available configuration options for Applitools Eyes.
- **Using `eyes.check` in tests**: Detailed usage of the `eyes.check` method, including parameters and examples.
- **Defining regions with selectors and locators**: How to specify different types of regions when calling `eyes.check`.

## Basic example

To configure Applitools Eyes in your Playwright project, you need to update your `playwright.config.ts` file. The configuration options are set under the `eyesConfig` property within the `use` section.

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { EyesFixture } from '@applitools/eyes-playwright/fixture';

export default defineConfig<EyesFixture>({
  // Other Playwright configurations...
  reporter: '@applitools/eyes-playwright/reporter',
  use: {
    eyesConfig: {
      appName: 'My App',
      matchLevel: 'Strict',
      // Runner type: 'ufg' for Ultrafast Grid, 'classic' for Classic runner
      type: 'ufg',
      batch: { name: 'Regression Tests' },
      // Additional configuration options...
    },
  },
});
```

**Note**: All configuration options are optional. If an option is not specified, a default value is used. Default behaviors are provided in the option descriptions in the next sections.

## Overriding settings in tests

You can override global `eyesConfig` settings for individual tests or test suites using `test.use()`.

**Example**:

```typescript
import { test } from '@applitools/eyes-playwright/fixture';

test.use({
  eyesConfig: {
    // Override settings for specific tests
    matchTimeout: 5000,
    ignoreCaret: false,
    logConfig: {
      level: 'debug',
    },
  },
});

test('Visual test with overridden settings', async ({ page, eyes }) => {
  // Test code...
});
```
