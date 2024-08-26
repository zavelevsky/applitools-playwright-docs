# Choosing What to Visually Test

Effective visual testing requires a strategic approach to selecting what elements and scenarios to test. This guide will help you make informed decisions about what to include in your Applitools Eyes tests with Playwright.

## Table of Contents

1. [Understanding Visual Testing Scope](#understanding-visual-testing-scope)
2. [Key Areas to Focus On](#key-areas-to-focus-on)
3. [Balancing Coverage and Efficiency](#balancing-coverage-and-efficiency)
4. [Strategies for Different Types of Applications](#strategies-for-different-types-of-applications)
5. [When to Use Full Page vs. Element-Level Checks](#when-to-use-full-page-vs-element-level-checks)
6. [Handling Dynamic Content](#handling-dynamic-content)
7. [Best Practices](#best-practices)

## Understanding Visual Testing Scope

Visual testing with Applitools Eyes can cover various aspects of your application:

- Layout and positioning of elements
- Text content and formatting
- Images and graphics
- Color schemes and styling
- Responsive design across different viewport sizes
- Cross-browser consistency

Consider which of these aspects are most critical for your application when planning your tests.

## Key Areas to Focus On

1. **Critical User Flows**: Test the visual aspects of key user journeys.

   ```javascript
   test('User Registration Flow', async ({ page }) => {
     await eyes.open(page, 'MyApp', 'User Registration');
     await page.goto('/register');
     await eyes.check('Registration Form', Target.window().fully());
     // Fill in the form
     await page.fill('#email', 'user@example.com');
     await page.fill('#password', 'password123');
     await page.click('#submit');
     await eyes.check('Registration Confirmation', Target.window().fully());
   });
   ```

2. **Brand-Sensitive Elements**: Ensure logo, color schemes, and typography are consistent.

3. **Navigation Elements**: Check menus, breadcrumbs, and footers.

4. **Forms and Interactive Elements**: Verify the appearance of inputs, buttons, and validation messages.

5. **Data Visualizations**: If your app includes charts or graphs, these are critical to test visually.

6. **Responsive Breakpoints**: Test how your layout responds at different screen sizes.

   ```javascript
   const viewports = [
     { width: 1200, height: 800 },
     { width: 768, height: 1024 },
     { width: 375, height: 667 },
   ];

   for (const viewport of viewports) {
     test(`Homepage at ${viewport.width}x${viewport.height}`, async ({
       page,
     }) => {
       await page.setViewportSize(viewport);
       await eyes.open(
         page,
         'MyApp',
         `Homepage - ${viewport.width}x${viewport.height}`
       );
       await page.goto('/');
       await eyes.check('Full Page', Target.window().fully());
     });
   }
   ```

## Balancing Coverage and Efficiency

While comprehensive coverage is ideal, it's important to balance thoroughness with efficiency:

- Start with critical pages and components
- Use a risk-based approach, focusing on areas prone to visual regression
- Consider the frequency of changes in different parts of your application

## Strategies for Different Types of Applications

### Content-Heavy Websites

- Focus on layout consistency across different content lengths
- Check text wrapping and image placement

### E-commerce Sites

- Prioritize product listings, cart, and checkout processes
- Verify price displays and promotional elements

### Web Applications

- Test dashboard layouts and data presentations
- Verify modal dialogs and notification appearances

### Responsive Web Design

- Test at standard breakpoints and challenging in-between sizes
- Check both landscape and portrait orientations on mobile views

## When to Use Full Page vs. Element-Level Checks

- **Full Page Checks**: Use for overall layout verification and responsive design tests.

  ```javascript
  await eyes.check('Homepage', Target.window().fully());
  ```

- **Element-Level Checks**: Use for specific components or areas that change frequently.

  ```javascript
  await eyes.check('Navigation Menu', Target.region('#nav-menu'));
  ```

## Handling Dynamic Content

For areas with dynamic content:

1. Use layout matching instead of exact matching

   ```javascript
   await eyes.check('Dynamic Content Area', Target.region('#content').layout());
   ```

2. Ignore specific dynamic regions

   ```javascript
   await eyes.check(
     'Page with Ads',
     Target.window().fully().ignoreRegions('#ad-banner')
   );
   ```

3. Use strict matching for critical, stable elements within dynamic pages

## Best Practices

1. **Start Small**: Begin with a few key tests and expand coverage gradually.

2. **Combine Functional and Visual Tests**: Where possible, add visual checks to existing functional tests.

3. **Use Descriptive Names**: Give your visual tests clear, descriptive names for easy management.

4. **Regular Review**: Periodically review your visual testing strategy and adjust based on new features or identified gaps.

5. **Collaborate with Designers**: Involve your design team in deciding what visual aspects are most critical to test.

6. **Consider Performance**: Be mindful of the impact on test execution time when adding visual checks.

7. **Leverage AI Features**: Use Applitools' AI capabilities to ignore minor, inconsequential differences.

   ```javascript
   await eyes.check('AI-Assisted Check', Target.window().fully().useDom(true));
   ```

By thoughtfully choosing what to test visually, you can create a robust visual testing strategy that catches important issues without becoming unmanageable or overly time-consuming.
