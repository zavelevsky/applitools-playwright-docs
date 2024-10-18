# **Core Concepts**

Understanding the core concepts of Applitools Eyes will help you make the most of its powerful visual testing capabilities in your Playwright tests. This section covers the fundamental principles and features that enable Applitools to provide reliable, efficient, and intelligent visual testing.

## **Applitools Visual AI and advanced match levels**

Traditional visual testing tools often rely on pixel-to-pixel comparisons, which can result in numerous false positives due to minor rendering differences. These can be caused by factors such as anti-aliasing, font smoothing, or subtle layout shifts, making tests brittle and time-consuming to maintain. Such methods struggle to scale and require constant adjustment of diff thresholds, which are difficult to configure and maintain reliably.

### **Advanced image comparison algorithms**

Applitools Visual AI overcomes these challenges by utilizing advanced image comparison algorithms that have been developed and refined over more than a decade. These algorithms simulate human vision, allowing Applitools Eyes to detect only meaningful visual differences that could impact the user experience. The key match levels provided by Applitools are:

* **Strict (Default)**: Detects any meaningful differences that are visible to the human eye. Ideal for static pages where any change is significant.  
* **Layout**: Ignores content changes but detects shifts in layout or structure. Useful for pages with dynamic content or responsive designs, and for localization testing where content varies but layout should remain consistent.  
* **Ignore Colors**: Ignores color differences but detects changes in content and layout. Helpful when color variations are expected or irrelevant, such as in applications with theming support.  
* **Content**: Ignores styling and layout differences but detects changes in text content. Suitable for applications where text content is critical, but style and layout may vary.  
* **Dynamic (New\!)**: Designed to handle dynamic content gracefully by automatically detecting and suppressing diffs due to dynamic data such as emails, dates, credit card numbers, etc.

These match levels can be applied to entire pages or mixed and matched on different regions of the page, giving you granular control over your visual comparisons.

### **Superiority over pixel-to-pixel matching**

By leveraging Visual AI and these advanced match levels, Applitools Eyes addresses the limitations of traditional pixel-to-pixel comparison:

* **Reduced false positives**: By ignoring insignificant differences that are invisible to the human eye, Visual AI minimizes unnecessary test failures caused by minor rendering variations.  
* **Enhanced test stability**: Tests are less brittle and more resilient to changes in rendering environments, making them stable across different browsers, devices, and operating systems.  
* **Improved scalability**: There's no need to configure diff thresholds or constantly adjust your tests to account for environmental differences, allowing your test suite to scale efficiently.  
* **Efficient maintenance**: Visual AI reduces the maintenance burden by eliminating flakiness, and when intentional changes occur, you can approve them once in the Applitools Dashboard, propagating the acceptance across all relevant tests and checkpoints.  
* **Contextual understanding**: Applitools Eyes understands the content and structure of your application's UI, focusing on perceptible changes that a human user would notice, rather than pixel-level differences.

By adopting Applitools Visual AI, you can trust that your visual tests are highlighting real issues that could affect your users, allowing you to focus on delivering a high-quality user experience without being bogged down by false positives or maintenance overhead.

## **Baseline images and management**

A core concept in Applitools Eyes is the use of baselines, which represent the expected visual appearance of your application at specific points in time.

### **Automatic baseline management**

When you run tests with Applitools Eyes, the SDK automatically detects the baseline signature based on factors such as the application name, test name, browser, operating system, viewport size, and branch. This ensures that the correct baseline is used for each specific test scenario.

The baseline management features include:

* **Baseline fallback behavior**: If an exact baseline match isn't found for a particular environment, Applitools can intelligently fall back to the most appropriate baseline, ensuring continuity in your testing.  
* **Alignment with checkpoint images**: Applitools automatically detects new or missing checkpoints, aligning them with the appropriate baselines and highlighting any discrepancies.

### **Baseline creation and updating**

* **First run (baseline creation)**:  
  * When you run a test for the first time, Applitools Eyes captures baseline images for each visual checkpoint.  
  * These baselines are stored securely in the Applitools cloud, eliminating the need to manage image files locally or within your code repository.  
* **Subsequent runs (visual comparison)**:  
  * In subsequent test runs, Applitools Eyes captures new screenshots and compares them to the existing baselines.  
  * If differences are detected, they are highlighted in the test results for review.  
* **Updating baselines**:  
  * If changes are intentional (e.g., a UI redesign), you can accept the new images in the Applitools Dashboard.  
  * Accepted images become the new baselines for future comparisons.  
  * Automated test maintenance allows you to accept changes once and propagate them across all relevant tests, devices, and browsers, saving time and effort.

By automatically managing baselines, Applitools Eyes simplifies the maintenance of your visual tests, ensuring accurate comparisons without the overhead of manual baseline management.

### **Preventing baseline collisions with test naming strategies**

To ensure that each test has its own unique baseline, Applitools Eyes uses a combination of the test name and application name. The SDK automatically includes context such as the full test path in Playwright, which helps prevent collisions when tests have the same name in different suites or contexts.

#### **Customizing test names**

You can customize test names to suit your organizational needs:

* Use the `useFullTestName` flag to control how test names are generated.  
* Specify custom names directly in your tests or configuration.

**Example:**

`// playwright.config.ts`  
`export default {`  
  `eyesTestSettings: {`  
    `useFullTestName: false, // Use only the test title as the test name`  
  `},`  
`};`

By carefully managing test names and leveraging the SDK's automatic baseline signature detection, you can maintain organized baselines and avoid unintended overlaps.

## **Match levels for tailored comparisons**

Match levels determine how strictly Applitools Eyes compares new screenshots to the baselines, allowing you to balance between catching important differences and ignoring insignificant changes.

### **Available match levels**

As previously mentioned, Applitools offers several match levels:

* **Strict (Default)**: Detects any meaningful differences that are visible to the human eye. Ideal for static pages where any change is significant.  
* **Layout**: Ignores content changes but detects shifts in layout or structure. Useful for testing highly dynamic pages and localization, where content varies but layout should remain consistent.  
* **Ignore Colors**: Ignores color differences but detects changes in content and layout. Helpful when color variations are expected or irrelevant, such as in applications with theming support.  
* **Content**: Ignores styling and layout differences but detects changes in text content. Suitable for applications where text content is critical, but style and layout may vary.  
* **Dynamic (New\!)**: Designed to handle dynamic content gracefully by automatically detecting and suppressing diffs due to dynamic data such as emails, dates, credit card numbers, etc.

These match levels can be applied to entire pages or mixed and matched on different regions of the page, giving you granular control over your visual comparisons.

### **Choosing the appropriate match level**

Selecting the right match level depends on the nature of your application and the specific page or component you're testing.

* **Dynamic content**: Use **Layout** or **Content** match levels to avoid false positives due to changing text or images.  
* **Brand consistency**: Use **Strict** match level to ensure that styling and branding elements remain consistent.  
* **Theming support**: Use **Ignore Colors** if your application supports different themes or color schemes.

### **Setting match levels**

You can set the match level globally in your configuration or override it per test or per checkpoint.

**Global setting example:**

`// playwright.config.ts`  
`export default {`  
  `eyesTestSettings: {`  
    `matchLevel: 'Dynamic',`  
  `},`  
`};`

**Per Test Example:**

`test('Dynamic content test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com/dynamic');`

  `// Visual check with specific match level`  
  `await eyes.check('Homepage', {`  
    `fully: true,`  
    `matchLevel: 'Dynamic',`  
  `});`  
`});`

By choosing the appropriate match level, you can effectively manage dynamic content and focus on the changes that matter most.

## **Exception handling**

### **Default behavior**

By default, Applitools Eyes does **not throw exceptions** when visual differences are detected. This allows your tests to continue running, and you can review any visual discrepancies in the Applitools Dashboard.

### **Configuring `failTestsOnDiff`**

If you prefer your tests to fail when visual differences are detected, you can configure the `failTestsOnDiff` setting.

**Available options:**

* `false` (Default): Tests do not fail on visual differences.  
* `'afterEach'`: Throws an exception after each test that has visual differences.  
* `'afterAll'`: Throws an exception after all tests have run if any visual differences are detected.

**Example:**

`// playwright.config.ts`  
`export default {`  
  `eyesTestSettings: {`  
    `failTestsOnDiff: 'afterEach',`  
  `},`  
`};`

### **Console output**

Regardless of the exception handling configuration, Applitools Eyes provides detailed console output for any visual differences detected during the tests. This ensures you are immediately aware of any issues.

**Example console output:**

`Visual differences detected in test 'My first visual test':`  
`- View the differences here: [Applitools Dashboard Link]`

By configuring exception handling according to your workflow, you can balance between continuous test execution and immediate failure on visual discrepancies.

## **Test and batch naming**

Proper naming of tests and batches helps you organize and manage your visual tests effectively.

### **Test naming**

By default, Applitools Eyes uses the full test path in Playwright as the test name. This includes any `describe` blocks and the test title.

**Example test name:**

`Login Tests > Successful Login`

#### **Customizing test names**

You can customize test names by setting the `testName` option in your test or by adjusting the `useFullTestName` flag in your configuration.

### **Batch naming**

A **batch** groups related tests together, making it easier to manage and review results in the Applitools Dashboard.

#### **Default batch naming**

* **In source control**: `${appName} - ${gitSha} - ${branch}`  
* **Outside source control**: `${appName}`

#### **Customizing batch names**

You can specify a custom batch name in your configuration or per test run.

**Configuration example:**

`// playwright.config.ts`  
`export default {`  
  `eyesWorkerSettings: {`  
    `batchName: 'Release 1.0 Tests',`  
  `},`  
`};`

By organizing tests into batches and using meaningful names, you can efficiently navigate and analyze your visual test results.

## **Branching and merging**

Applitools supports branching and merging to align with your development workflow, facilitating collaboration and maintaining consistency across your application.

### **Pull request workflow and baseline management**

When working with feature branches and pull requests, Applitools Eyes facilitates an effective workflow:

* **Branch-specific baselines**: Each branch can maintain its own set of baselines, allowing you to develop and test features in isolation without impacting the main baseline.  
* **Baseline continuity**: When you create a new branch, Applitools automatically creates a copy of the baseline from the parent branch. This ensures consistency and reduces the need to re-establish baselines.  
* **Automatic merging**: Upon merging a feature branch into the main branch, Applitools can automatically merge the baselines, integrating any accepted changes from the feature branch into the main baseline.  
* **Conflict resolution**: If there are conflicting changes in the baselines (e.g., the same element was modified differently in both branches), Applitools provides tools to resolve these conflicts, allowing you to choose which changes to keep.

#### **Handling a pull request with visual differences**

1. **Develop on a feature branch**:  
   * Create a new branch in your version control system.  
   * Applitools Eyes automatically uses this branch name to manage baselines.  
2. **Run your visual tests**:  
   * Any visual changes are compared against the baseline for the branch.  
   * Review and accept intentional changes in the Applitools Dashboard.  
3. **Create a pull request**:  
   * Applitools can integrate with your CI/CD pipeline to run tests on pull requests.  
   * Visual test results can be linked in the pull request for reviewers to assess.  
4. **Review and resolve conflicts**:  
   * If there are conflicts between the feature branch and the main branch baselines, use the Applitools Dashboard to resolve them.  
   * Decide whether to accept changes from the feature branch, main branch, or a combination.  
5. **Merge the pull request**:  
   * Baselines are merged according to your resolutions.  
   * The main branch baseline is updated to include the accepted changes.

By supporting branching and merging workflows, Applitools Eyes ensures that your visual tests align with your development processes, facilitating collaboration and maintaining consistency across your application.

## **Applitools configuration in Playwright**

Applitools Eyes integrates with Playwright's configuration system, allowing you to customize settings globally or per test.

### **Configuration settings**

* **Global Settings**: Use `eyesTestSettings` and `eyesWorkerSettings` in `playwright.config.ts` to apply settings across all tests.  
* **Per Test Settings**: Override settings within individual tests as needed.

### **`eyesTestSettings`**

Settings that apply to individual tests or checkpoints.

**Available options:**

* `matchLevel`  
* `failTestsOnDiff`  
* `useFullTestName`  
* Other visual comparison settings. \[Link to API\]

**Example:**

`// playwright.config.ts`  
`export default {`  
  `eyesTestSettings: {`  
    `matchLevel: 'Strict',`  
    `failTestsOnDiff: 'afterEach',`  
    `useFullTestName: true,`  
  `},`  
`};`

### **`eyesWorkerSettings`**

Settings that apply to the test runner or worker level.

**Available options:**

* `batchName`  
* `batchId`  
* `branchName`  
* Other global settings. \[Link to API \]

**Example:**

`// playwright.config.ts`  
`export default {`  
  `use: {`  
    `eyesWorkerSettings: {`  
      `batchName: 'My App - Feature XYZ',`  
      `branchName: 'feature/xyz',`  
    `},`  
  `},`  
`};`

### **Overriding settings per test**

You can override any setting within a test using the options parameter.

**Example:**

`test('Custom settings test', async ({ page, eyes }) => {`  
  `await page.goto('https://example.com');`

  `await eyes.check('Homepage', {`  
    `fully: true,`  
    `matchLevel: 'Strict',`  
    `ignoreRegions: [page.locator('.dynamic-content')],`  
  `});`  
`});`

### **Complete configuration example**

`// playwright.config.ts`  
`export default {`  
  `// Other Playwright configurations`  
  `use: {`  
    `eyesTestSettings: {`  
      `matchLevel: 'Strict',`  
      `failTestsOnDiff: 'afterEach',`  
    `},`  
    `eyesWorkerSettings: {`  
      `batchName: 'My App - Regression Suite',`  
    `},`  
  `},`  
`};`

By utilizing these configuration options, you can tailor Applitools Eyes to fit your testing needs and workflows.
