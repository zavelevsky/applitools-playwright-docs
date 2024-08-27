# Selectors and Locators

Selectors and locators are essential for specifying which elements or regions of your web application to visually test. This guide covers how to use selectors and locators effectively with Applitools Eyes for Playwright.

## Table of Contents

1. [Types of Selectors](#types-of-selectors)
2. [Using Selectors with Applitools Eyes](#using-selectors-with-applitools-eyes)
3. [Playwright Locators](#playwright-locators)
4. [Best Practices](#best-practices)
5. [Advanced Techniques](#advanced-techniques)

## Types of Selectors

Applitools Eyes for Playwright supports various types of selectors:

### CSS Selectors

The most common and versatile selector type.

```javascript
await eyes.check('Header', Target.region('#header'));
```

### XPath

Useful for complex selections where CSS selectors are insufficient.

```javascript
await eyes.check('Third List Item', Target.region('//ul/li[3]'));
```

### Element Handles

You can pass Playwright element handles directly.

```javascript
const element = await page.$('.my-element');
await eyes.check('My Element', Target.region(element));
```

## Using Selectors with Applitools Eyes

Selectors can be used with various Applitools Eyes methods:

### With `Target.region()`

Specify a region to check.

```javascript
await eyes.check('Login Form', Target.region('#login-form'));
```

### With `ignore()`

Ignore specific elements during the check.

```javascript
await eyes.check(
  'Page',
  Target.window().ignore('.ad-banner, .dynamic-content')
);
```

### With `layout()`

Use layout matching for specific elements.

```javascript
await eyes.check('Article', Target.window().layout('article p'));
```

### With `strict()`

Use strict matching for specific elements.

```javascript
await eyes.check('Logo', Target.window().strict('#company-logo'));
```

### With `floating()`

Define floating regions.

```javascript
await eyes.check(
  'Floating Button',
  Target.window().floating('#fab', 10, 10, 5, 5)
);
```

## Playwright Locators

Playwright provides powerful locator functions that can be used with Applitools Eyes:

### Basic Locators

```javascript
const loginButton = page.locator('button:has-text("Log in")');
await eyes.check('Login Button', Target.region(loginButton));
```

### Combining Locators

```javascript
const submitInForm = page.locator('form').locator('button[type="submit"]');
await eyes.check('Submit Button in Form', Target.region(submitInForm));
```

### Using `nth`

```javascript
const secondListItem = page.locator('ul > li').nth(1);
await eyes.check('Second List Item', Target.region(secondListItem));
```

## Best Practices

1. **Use Specific Selectors**: Prefer IDs or unique classes over generic selectors.

   ```javascript
   // Good
   Target.region('#login-form');

   // Avoid
   Target.region('form');
   ```

2. **Handle Dynamic Content**: Use `layout()` or `ignore()` for areas with dynamic content.

   ```javascript
   await eyes.check(
     'Dashboard',
     Target.window().layout('#user-specific-content').ignore('#current-time')
   );
   ```

3. **Combine Selector Types**: Use the most appropriate selector type for each situation.

   ```javascript
   await eyes.check(
     'Complex Page',
     Target.window()
       .region('#main-content')
       .ignore(page.locator('text=Advertisement'))
       .floating('//button[contains(@class, "floating")]', 5, 5, 10, 10)
   );
   ```

4. **Use Data Attributes**: Add `data-test-id` attributes to elements for stable selectors.

   ```javascript
   await eyes.check(
     'User Profile',
     Target.region('[data-test-id="user-profile"]')
   );
   ```

## Advanced Techniques

### Chaining Locators

```javascript
const nestedElement = page
  .locator('#parent-container')
  .locator('.child-class')
  .locator('button');

await eyes.check('Nested Button', Target.region(nestedElement));
```

### Using Regular Expressions

```javascript
const dynamicElement = page.locator('div:has-text(/User: .*/i)');
await eyes.check('User Info', Target.region(dynamicElement));
```

### Waiting for Elements

```javascript
const asyncContent = page.locator('#async-loaded-content');
await asyncContent.waitFor();
await eyes.check('Async Content', Target.region(asyncContent));
```

### Custom Selector Functions

You can create custom selector functions for complex scenarios:

```javascript
async function getElementByTextContent(page, text) {
  return page.evaluate((text) => {
    return Array.from(document.querySelectorAll('*')).find(
      (element) => element.textContent.trim() === text
    );
  }, text);
}

const customElement = await getElementByTextContent(page, 'Specific Text');
await eyes.check('Custom Selected Element', Target.region(customElement));
```

By mastering selectors and locators, you can create precise and reliable visual tests with Applitools Eyes and Playwright. Remember to choose the most appropriate selector method for each situation and always strive for stability and readability in your test code.
