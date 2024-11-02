# Configuration Options

This section describes all available configuration options for Applitools Eyes when using it with Playwright. The configuration is set in your `playwright.config.ts` file under the `eyesConfig` property.

## Common Configuration Options

These options apply to both Ultrafast Grid (UFG) and Classic runners. Runner-specific options are listed in the dedicated section.

### Authentication and Server Configuration

- **`apiKey`** (string):  
  Your Applitools API key. This key authenticates your account and is required for all interactions with the Applitools Eyes server.

  **Default**: Reads from the `APPLITOOLS_API_KEY` environment variable if not specified.

```typescript
apiKey: 'YOUR_API_KEY',
```

- **`serverUrl`** (string):  
  The URL of the Applitools Eyes server. Use this if you are connecting to a dedicated cloud instance or an on-premises server.

  **Default**: `'https://eyesapi.applitools.com'` (Applitools public cloud server)

```typescript
serverUrl: 'https://eyesapi.applitools.com',
```

- **`proxy`** (object):  
  Proxy settings if your network requires a proxy to access the Applitools Eyes server.

  **Default**: No proxy is used if unspecified.

```typescript
proxy: {
  url: 'http://proxy.example.com:8080',
  username: 'proxyUser',
  password: 'proxyPass',
},
```

### Test and Application Identification

- **`appName`** (string):  
  The name of your application under test. This name groups tests related to the same application in the Applitools Dashboard.

  **Default**: set to `'My App'`.

```typescript
appName: 'My Application',
```

- **`testName`** (string | function):  
  The name of the test case. Can be a string or a function that receives `testInfo` and returns a string.

  **Default**: The test title path (e.g., `'Suite > Test Name'`).

```typescript
testName: 'Login Page Test',
// Or using a function:
testName: (testInfo) => `Test: ${testInfo.title}`,
```

- **`properties`** (array):  
  Custom key-value pairs associated with the test.

```typescript
properties: [
  { name: 'Environment', value: 'Staging' },
  { name: 'Version', value: '1.0.0' },
],
```

### Batch Configuration

- **`batch`** (object):  
  Defines the batch to which the tests belong. Batches group related tests together in the Applitools Dashboard.

  **Default**: A new batch is created for each test run with a unique ID.

  - **`id`** (string):  
    Unique identifier for the batch. If not specified, a unique ID is generated.
  - **`name`** (string):  
    Name of the batch.
  - **`sequenceName`** (string):  
    Sequence name for batch ordering, tracking batch execution statistics over time.
  - **`notifyOnCompletion`** (boolean):  
    If `true`, sends a notification when the batch completes.  
    **Note:** this feature requires an extra set-up step, as detailed [here](https://applitools.com/docs/features/batch-completion-notifications.html).

```typescript
batch: {
  id: 'batch-id-123',
  name: 'Regression Tests',
  notifyOnCompletion: true,
},
```

### Branching and Baseline Management

- **`branchName`** (string):  
  The branch name in your version control system. Used for baseline branching in Applitools.

  **Default**: `'default'`.

```typescript
branchName: 'feature/login-page',
```

- **`parentBranchName`** (string):  
  The parent branch name, typically your main or master branch. Baseline not found in your branch will be taken from the parent branch

  **Default**: Not set.

```typescript
parentBranchName: 'main',
```

### Visual Comparison Settings

- **`matchLevel`** (string):  
  The match level for visual comparisons. Determines how strictly images are compared.

  **Default**: `'Strict'`.

  Possible values:

  - `'Strict'` (default): Detects any meaningful differences visible to the human eye.
  - `'Layout'`: Ignores content changes but detects layout shifts.
  - `'IgnoreColors'`: Ignores style changes but detects content and layout changes.
  - `'Dynamic'`: Automatically ignores dynamic content that follows a consistent pattern, such as dates, email addresses or custom patterns.

```typescript
matchLevel: 'Strict',
```

- **`ignoreDisplacements`** (boolean):  
  If `true`, ignores vertical shifts in content during visual comparisons. It is useful for reducing diff noise when the UI changes frequently.

  **Default**: `false`.

```typescript
ignoreDisplacements: true,
```

### Exception Handling Configuration

- **`failTestsOnDiff`** (string | boolean):  
  Controls whether exceptions are thrown when visual differences are detected.

  **Default**: `false`.

  Possible values:

  - `'afterEach'`: Throws an exception after each test that has visual differences.
  - `'afterAll'`: Throws an exception after all tests have run if any visual differences are detected (more performant).
  - `false` (default): Does not throw exceptions for visual differences (best used with Applitools' Continuous Testing platform).

```typescript
failTestsOnDiff: 'afterEach',
```

- **`afterAll`** (function):  
  A callback function that receives the test results after all tests have run. Useful for custom reporting or processing.

  **Default**: No callback is executed.

```typescript
afterAll: async (results) => {
  for (const result of results) {
    console.log(`Test: ${result.testResults.name}, URL: ${result.testResults.url}`);
  }
},
```

### Viewport Configuration

- **`viewportSize`** (object):  
  The viewport size for the browser where the test is executing. It may affect the resources downloaded to the browser.

  **Default**: Playwright's default viewport size.

  **Note**: This affects the local browser during test execution. For the Ultrafast Grid, viewport sizes specified in `browsersInfo` determine the viewport sizes of the rendering browsers.

  ```typescript
  `viewportSize: { width: 1280, height: 720 },`;
  ```
