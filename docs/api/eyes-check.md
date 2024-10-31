# Using eyes.check in Tests

The `eyes` object provided by the Applitools Eyes Playwright integration allows you to perform visual checkpoints using the `eyes.check` method. This method captures screenshots and compares them against their corresponding baselines.

## Importing `test` and Using `eyes`

In your test files, import `test` from `@applitools/eyes-playwright` instead of `@playwright/test`.

```typescript
import { test } from '@applitools/eyes-playwright';

test('Visual Test', async ({ page, eyes }) => {
  // Your test code...
});
```

To use Playwright's native `expect.toHaveScreenshot` methods with Applitools Eyes, import `expect` from `@applitools/eyes-playwright`:

```typescript
import { test, expect } from '@applitools/eyes-playwright';
```

**Note**: Tests using Playwright's `expect(page).toHaveScreenshot()` will work seamlessly with Applitools Eyes when imported from `@applitools/eyes-playwright`. However, it is recommended to use `eyes.check` for advanced visual testing features.

## Performing Visual Checkpoints

Use `eyes.check` within your tests to perform visual validations.

- You can use multiple `eyes.check` calls within a single test.
- The SDK automatically aligns and compares the checkpoints with the appropriate baseline steps.
- Newly added or removed checks are automatically identified and addressed.

```typescript
test('Multiple checkpoints', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  // Check the home page
  await eyes.check('Home Page', {
    fully: true,
  });

  // Navigate and check another page
  await page.click('.dashboard-link');
  await eyes.check('Dashboard', {
    matchLevel: 'Layout',
  });
});
```

## eyes.check Method

### Syntax

```typescript
await eyes.check(name?, options?);
```

### Parameters

- **`name`** (string, optional):  
  The name of the checkpoint. This name appears in the HTML report and in the Applitools Dashboard.
- **`options`** (object, optional):  
  Configuration options for the visual checkpoint.

### Options for `eyes.check`

- **`region`** (string | object):  
  Specifies a region of the page to capture.

  - **Selector**:  
    `region: '#header',`
  - **Playwright Locator**:  
    `region: page.locator('.content-section'),`
  - **`Coordinates`**`:`  
    `{ x: 100, y: 200, height: 50, width: 150 },`

- **`frames`** (array):  
  Specifies frames to capture.

  `frames: ['#main-frame', { frame: page.frame('sub-frame') }],`

- **`matchLevel`** (string):  
  Overrides the match level for this checkpoint.  
  Possible values: `'Strict'`, `'Layout'`, `'IgnoreColors'`, `'Dynamic'`.

  `matchLevel: 'Layout',`

- **`ignoreRegions`** (array):  
  Regions to ignore during visual comparison.

```typescript
ignoreRegions: [
  page.locator('.dynamic-banner'),
  { x: 100, y: 200, width: 300, height: 50 },
],
```

- **`layoutRegions`**, **`strictRegions`**, **`dynamicRegions`**, **`contentRegions`**, **`floatingRegions`**:  
  Regions with specific match levels or behaviors.

```typescript
layoutRegions: [page.locator('.sidebar')],
floatingRegions: [
  {
    region: page.locator('.floating-button'),
    maxUpOffset: 10,
    maxDownOffset: 10,
    maxLeftOffset: 5,
    maxRightOffset: 5,
  },
],
```

- **`accessibilityRegions`** (array):  
  Regions with specific accessibility levels.

```typescript
  accessibilityRegions: [
    {
      region: page.locator('.important-text'),
      type: 'LargeText',
    },
  ],
```

- **`fully`** (boolean):  
  If `true`, captures a full-page screenshot.

  `fully: true,`

- **`scrollRootElement`** (string | object):  
  Overrides the global `scrollRootElement` for this checkpoint.

```typescript
  scrollRootElement: '#content',
  // Or using a locator:
  scrollRootElement: page.locator('#content'),
```

- **`hooks`** (object):  
  JavaScript code to run before capturing the screenshot.

```typescript
  hooks: {
    beforeCaptureScreenshot: "document.querySelector('#ad-banner').style.display = 'none';",
  },
```

- **`waitBeforeCapture`** (number):  
  Time in milliseconds to wait before capturing the screenshot.

  `waitBeforeCapture: 500,`

- **`sendDom`** (boolean):  
  If `true`, sends the DOM snapshot along with the screenshot.

  `sendDom: true,`

- **`useDom`** (boolean):  
  If `true`, uses the DOM information to assist in visual comparisons.

  `useDom: true,`

- **`enablePatterns`** (boolean):  
  Enables pattern matching in visual comparisons for this checkpoint.

  `enablePatterns: true,`

- **`ignoreDisplacements`** (boolean):  
  If `true`, ignores vertical shifts in content during visual comparisons. It is useful for reducing diff noise when the UI changes frequently.

  `ignoreDisplacements: true,`

- **`ignoreCaret`** (boolean):  
  If `true`, ignores the blinking caret in text inputs during visual comparisons.

  `ignoreCaret: true,`

- **`layoutBreakpoints`** (boolean | number\[\]):  
  Enables responsive design testing at specified breakpoints.

  - If `true`, breakpoints are inferred from the application's CSS.
  - If an array of numbers, specifies the widths at which to capture screenshots

  **Note**: This option is relevant only for UFG. It allows the SDK to fetch viewport-specific resources, which are subsequently used for rendering on the UFG. This is rarely needed, but when necessary, it's crucial for accurate rendering.

```typescript
layoutBreakpoints: [320, 768, 1024],
```

- **`visualGridOptions`** (object):  
  Additional options for the Ultrafast Grid rendering.

  - **`chromeHeadless`** (boolean):  
    Set to `false` to use regular Chrome instead of Headless Chrome.

  - **`polyfillAdoptedStyleSheets`** (boolean):  
    Controls the polyfill for Adopted StyleSheets.

```typescript
visualGridOptions: {
  chromeHeadless: false,
  polyfillAdoptedStyleSheets: true,
},
```

### Example Usage

```typescript
test('Visual Test with Regions', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  await eyes.check('Main Page', {
    fully: true,
    matchLevel: 'Strict',
    ignoreRegions: [page.locator('.dynamic-content')],
    layoutRegions: [page.locator('.sidebar')],
    floatingRegions: [
      {
        region: page.locator('.floating-ad'),
        maxUpOffset: 10,
        maxDownOffset: 10,
        maxLeftOffset: 5,
        maxRightOffset: 5,
      },
    ],
    accessibilityRegions: [
      {
        region: page.locator('.important-heading'),
        type: 'BoldText',
      },
    ],
    hooks: {
      beforeCaptureScreenshot:
        "document.querySelector('.modal').style.display = 'none';",
    },
    waitBeforeCapture: 1000,
  });
});
```
