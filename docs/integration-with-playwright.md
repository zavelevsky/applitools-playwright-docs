# **Integration with Playwright**

In this section, we'll explore how to seamlessly integrate Applitools Eyes into your Playwright tests. You'll learn how to use the SDK within your tests, customize configurations, and work with Page Object Models (POMs) to enhance your visual testing strategy.

## **Using the SDK with Playwright tests**

### **Importing Applitools modules**

To access Applitools features, import `test` and `expect` from `@applitools/eyes-playwright` in your test files:

`import { test, expect } from '@applitools/eyes-playwright';`

This replaces the default Playwright `test` and `expect` functions with Applitools-enhanced versions that support visual testing.

#### **Accessing the `eyes` object**

The extended `test` object provides access to the `eyes` object within your test, enabling direct use of Applitools methods:

`test('Visual test using eyes.check()', async ({ page, eyes }) => {`

  `await page.goto('https://example.com');`

  ``// Visual checkpoint of the full page using the `Strict` match level``

  `await eyes.check('Homepage', {`

    `fully: true,`

    `matchLevel: 'Strict',`

  `});`

`});`

### **Visual checkpoints**

#### **Using `eyes.check()`**

The `eyes.check()` method allows you to capture visual checkpoints with more explicit control. You can specify parameters such as the checkpoint name, match level, and regions to ignore.

**Example:**

`test('Visual test using eyes.check()', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `// Visual checkpoint with custom settings`  
  `await eyes.check('Homepage', {`  
    `// Capture the full page`  
    `fully: true,`  
    `// Set match level`  
    `matchLevel: 'Strict',`  
    `// Ignore dynamic content`  
    `ignoreRegions: [page.locator('.dynamic-content')],`  
  `});`  
`});`

### **Best practices**

* **Descriptive checkpoint names**: Provide meaningful names to your `eyes.check()` calls for easy identification in the Applitools Dashboard.  
* **Use contextual settings**: Adjust settings like `matchLevel` and `ignoreRegions` based on the specific content being tested.  
* **Use textual assertions only when necessary**: Use `eyes.check()` to assert appearance and every functionality that has a visual aspect, thus reducing your test code by 80%. Leave only those textual assertions needed to validate certain dynamic aspects that require programmatic evaluation.  
* **Encapsulate Visual Checks**: Keep visual checkpoints within relevant page object methods or custom fixtures for better organization.

## **Advanced configuration**

You can pass various options both capture methods in order to customize the behavior:

* **`fully`**: Capture the full page when set to `true`.  
* **`region`**: Define a specific region or element to capture.  
* **`matchLevel`**: Set the match level, which determines the way by which Eyes compares the checkpoint image with the baseline image. ‘Strict’ is the recommended value.  
* **`ignoreRegions`**: Specify regions to ignore during comparison.  
* **`floatingRegions`**: Define floating regions for containers of elements that may move.  
* **`IgnoreDisplacements`**: suppresses differences caused by elements shifting positions.

**Example: Capturing a specific element**

`test('Element visual test using eyes.check()', async ({ page, eyes }) => {`

  `await page.goto('https://example.com');`

  `const navbar = page.locator('.navbar');`

  `// Visual checkpoint of a specific element`

  `await eyes.check('Navbar', {`

    `region: navbar,`

    `matchLevel: 'Layout',`

  `});`

`});`

### **Overriding default behaviors**

You can adjust global settings in your `playwright.config.ts` file using `eyesTestSettings` and `eyesWorkerSettings`:

`// playwright.config.ts`  
`export default {`  
  `eyesTestSettings: {`  
    `matchLevel: 'Strict',`  
    `ignoreDisplacements: true,`  
  `},`  
  `eyesWorkerSettings: {`  
    `batch: {`  
      `name: 'My Test Batch',`  
    `},`  
    `failTestsOnDiff: 'afterEach', // Options: 'afterEach', 'afterAll', false`  
  `},`  
`};`

#### **Examples of global settings**

* `matchLevel`: Default match level for all tests.  
* `ignoreDisplacements`: Ignores minor shifts in element positions.  
* `batch`: Sets the batch name for grouping tests.  
* `failTestsOnDiff`: Controls when to throw exceptions on visual differences.

## **Working with Page Object Models (POMs)**

Integrating `eyes` within your Page Object Models helps maintain clean and organized test code.

**Example:**

`// page-objects/LoginPage.js`  
`class LoginPage {`  
  `constructor(eyes, page) {`  
    `this.eyes = eyes;`  
    `this.page = page;`  
    `this.usernameInput = page.locator('#username');`  
    `this.passwordInput = page.locator('#password');`  
    `this.loginButton = page.locator('#login');`  
  `}`

  `async navigate() {`  
    `await this.page.goto('https://example.com/login');`  
  `}`

  `async login(username, password) {`  
    `await this.usernameInput.fill(username);`  
    `await this.passwordInput.fill(password);`  
    `await this.loginButton.click();`  
  `}`

  `async verifyLoginPage() {`  
    `await this.eyes.check('Login Page', {`  
      `fully: true,`  
    `});`  
  `}`  
`}`

`module.exports = { LoginPage };`

Usage in the test:

**`// tests/login.test.js`**  
`import { test } from '@applitools/eyes-playwright';`  
`const { LoginPage } = require('../page-objects/LoginPage');`

`test('Login page visual test using eyes.check()', async ({ page, eyes }) => {`  
  `const loginPage = new LoginPage(eyes, page);`  
  `await loginPage.navigate();`

  `// Visual checkpoint within the page object`  
  `await loginPage.verifyLoginPage();`  
`});`