# Advanced Configuration Options

- **`displayName`** (string | function):  
  A custom name for the test display in the dashboard. Useful for adding context or dynamically generating test names.

```typescript
displayName: 'Login Page Visual Test',
// Or using a function:
displayName: (testInfo) => `Visual Test - ${testInfo.title}`,
```

- **`baselineBranchName`** (string):  
  The name of the baseline branch to compare against. If specified, baselines in your branch will be ignored.

```typescript
baselineBranchName: 'main',
```

- **`ignoreGitMergeBase`** (boolean):  
  If `true`, Applitools ignores the git merge base when determining the baseline.

```typescript
ignoreGitMergeBase: false,
```

- **`ignoreCaret`** (boolean):  
  If `true`, ignores the blinking caret in text inputs during visual comparisons.

```typescript
ignoreCaret: true,
```

- **`enablePatterns`** (boolean):  
  Enables advanced pattern matching in visual comparisons. Used by the layout algorithm to perform deep pattern analysis for extremely dynamic pages.

```typescript
enablePatterns: true,
```

- **`waitBeforeScreenshots`** (number):  
  Time in milliseconds to wait before capturing a screenshot.

```typescript
waitBeforeScreenshots: 1000,
```

- **`matchTimeout`** (number):  
  Timeout in milliseconds for visual match operations. The SDK will try to match again and again until no diffs are detected or until this timeout is reached. The default is 0, meaning no retries. Increasing this timeout increases stability when pages are slow to load. However, it will increase test time when there are differences.

```typescript
matchTimeout: 2000,
```

- **`saveNewTests`** (boolean):  
  If `false`, new tests are not automatically saved as baselines. When set to `false` (default), new tests must be manually reviewed and approved in the HTML report or in the Eyes dashboard.

```typescript
saveNewTests: true,
```

- **`hideCaret`** (boolean):  
  If `true`, hides the text input caret before capturing screenshots.

```typescript
hideCaret: true,
```

- **`hideScrollbars`** (boolean):  
  If `true`, hides scrollbars in screenshots.

```typescript
hideScrollbars: true,
```

- **`sendDom`** (boolean):  
  If `true`, sends the DOM snapshot along with the screenshot to Applitools.

```typescript
sendDom: true,
```

- **`scrollRootElement`** (string | object):  
  The selector or locator of the element that should be scrolled for capturing full-page screenshots.

```typescript
scrollRootElement: '#main-content',
// Or using a Playwright locator:
scrollRootElement: page.locator('#main-content'),
```

- **`logConfig`** (object | function | array):  
  Configures logging for Applitools Eyes.

```typescript
// Object configuration
logConfig: {
  type: 'console',
  level: 'info',
},

// Function configuration
logConfig: (testInfo) => ({
  type: 'file',
  level: 'debug',
  filename: `logs/eyes-${testInfo.title}.log`,
}),
```
