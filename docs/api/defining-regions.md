# Defining Regions with Selectors and Locators

When specifying regions in `eyes.check`, you can use CSS selectors, XPath expressions, or Playwright locators to define areas of the page This section covers the different approaches.

## Using CSS selectors

Specify the region using a CSS selector string.

```typescript
await eyes.check('Page Header', {
  region: '#header',
});

// Multiple regions
await eyes.check('Dynamic Areas', {
  ignoreRegions: ['.dynamic-banner', '#footer'],
});
```

## Using XPath selectors

Specify regions using XPath expressions:

```typescript
await eyes.check('Content Area', {
  region: '//div[@class="content"]',
});
```

## Using Playwright locators

Leverage Playwright's powerful locator methods to define regions.

```typescript
await eyes.check('Main Content', {
  region: page.locator('.main-content'),
});

// Using various locator methods
await eyes.check('Interactive Elements', {
  ignoreRegions: [
    page.locator('role=button'),
    page.locator('text=Login'),
    page.getByTestId('submit-button'),
  ],
});
```

## Coordinate-based regions

Specify the region using exact coordinates.

```typescript
await eyes.check('Specific Area', {
  region: {
    x: 100,
    y: 200,
    width: 300,
    height: 400,
  },
});
```

## Using multiple regions

You can specify multiple regions in arrays for options like `ignoreRegions`, `layoutRegions`, etc.

```typescript
await eyes.check('Interactive Elements', {
  ignoreRegions: [
    page.locator('.dynamic-banner'),
    '#footer',
    { x: 50, y: 100, width: 200, height: 150 },
  ],
});
```

## Floating regions

Floating regions allow for elements that may shift position between test runs.

```typescript
await eyes.check('Floating Elements', {
  floatingRegions: [
    {
      region: page.locator('.floating-button'),
      maxUpOffset: 10,
      maxDownOffset: 10,
      maxLeftOffset: 5,
      maxRightOffset: 5,
    },
  ],
});
```

## Accessibility regions

Define regions with specific accessibility levels to ensure compliance.

```typescript
await eyes.check('Accessible Content', {
  accessibilityRegions: [
    {
      region: page.locator('.main-heading'),
      type: 'RegularText',
    },
  ],
});
```

## Complete test example

```typescript
import { test } from '@applitools/eyes-playwright/fixture';

test('Full Visual Test', async ({ page, eyes }) => {
  await page.goto('https://example.com');

  // Perform initial visual check
  await eyes.check('Home Page', {
    fully: true,
    matchLevel: 'Strict',
  });

  // Interact with the page
  await page.click('#login-button');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');
  await page.click('#submit');

  // Perform visual check after interaction
  await eyes.check('Dashboard', {
    fully: true,
    matchLevel: 'Layout',
    ignoreRegions: [page.locator('.dynamic-banner')],
    floatingRegions: [
      {
        region: page.locator('.notification'),
        maxUpOffset: 15,
        maxDownOffset: 15,
        maxLeftOffset: 10,
        maxRightOffset: 10,
      },
    ],
  });
});
```
