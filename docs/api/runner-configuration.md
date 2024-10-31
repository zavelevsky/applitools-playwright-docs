# Runner Configuration

You can choose between two types of runners:

- **Ultrafast Grid (UFG)**: Allows you to perform cross-browser testing by rendering your application across multiple browsers and devices in the cloud.
- **Classic Runner**: Runs visual tests on your local machine without cross-browser rendering.

## Selecting the Runner Type

- **`type`** (string):  
  Specifies the runner type.  
  **Default**: `'ufg'`.  
  Possible values:
  - `'ufg'`: Uses the Ultrafast Grid for cross-browser testing (requires UFG license).
  - `'classic'`: Uses the Classic runner for local testing.

```typescript
type: 'ufg',
```

## Ultrafast Grid (UFG) Configuration

The following options are relevant when using the Ultrafast Grid runner (`type: 'ufg'`).  
**Note**: Using the Ultrafast Grid requires a license.

### Rendering and Browser Configuration

- **`browsersInfo`** (array):  
  Specifies the browsers, devices, and viewport sizes for cross-browser testing with UFG. Learn more [here](https://applitools.com/docs/topics/overview/ufg-devices.html) about supported browsers and devices.

  **Default**: Runs in the same browser and viewport size as the local test.  
  Each entry can be:

  - Desktop browser:

```typescript
browsersInfo: [
  { name: 'chrome', width: 800, height: 600 },
  { name: 'firefox', width: 1024, height: 768 },
],
```

- Mobile emulation:

```typescript
browsersInfo: [
  {
    deviceName: 'iPhone X',
    screenOrientation: 'portrait', // or 'landscape'
  },
],
```

- iOS device:

```typescript
browsersInfo: [
  {
    deviceName: 'iPad (7th generation)',
    iosVersion: 'latest',
    screenOrientation: 'portrait',
  },
],
```

#### Example:

```typescript
browsersInfo: [
  { name: 'chrome', width: 800, height: 600 },
  { name: 'firefox', width: 1024, height: 768 },
  {
    deviceName: 'iPhone X',
    screenOrientation: 'portrait',
  },
  {
    deviceName: 'iPad (7th generation)',
    iosVersion: 'latest',
    screenOrientation: 'portrait',
  },
],
```

- **`layoutBreakpoints`** (boolean | number\[\]):  
  Enables responsive design testing at specified breakpoints.

  **Default**: `false`.

  - If `true`, breakpoints are inferred from the application's CSS.
  - If an array of numbers, specifies the widths at which to capture screenshots

  **Note**: This option is relevant only for UFG. It allows the SDK to fetch viewport-specific resources, which are subsequently used for rendering on the UFG. This is rarely needed, but when necessary, it's crucial for accurate rendering.

```typescript
layoutBreakpoints: [320, 768, 1024],
```

### Concurrency Configuration

- **`testConcurrency`** (number):  
  The maximum number of visual tests to run concurrently in the Ultrafast Grid.

  **Default**: `5`.

```typescript
testConcurrency: 10,
```

- **`fetchConcurrency`** (number):  
  The maximum number of resources to fetch concurrently when rendering pages in the Ultrafast Grid.

  **Default**: `5`.

```typescript
fetchConcurrency: 5,
```

### Ultrafast Grid Options

- **`visualGridOptions`** (object):  
  Additional options for the Ultrafast Grid rendering.

  **Default**: No additional options are set.

  - **`chromeHeadless`** (boolean):  
    Set to `false` to use regular Chrome instead of Headless Chrome.

    **Default**: `true`.

  - **`polyfillAdoptedStyleSheets`** (boolean):  
    Controls the polyfill for Adopted StyleSheets.

    **Default**: `false`.

```typescript
visualGridOptions: {
  chromeHeadless: false,
  polyfillAdoptedStyleSheets: true,
},
```

## Classic Runner Configuration

When using the Classic runner (`type: 'classic'`), you run visual tests locally without the cross-browser rendering capabilities of the Ultrafast Grid.

- **`viewportSize`** (object):  
  The viewport size for the tests.

  **Default**: Playwright's default viewport size.

```typescript
viewportSize: { width: 1280, height: 720 },
```

- **`stitchMode`** (string):  
  The stitch mode to use when capturing full-page screenshots.

  Possible values:

  - `'Scroll'`: Uses scrolling to stitch screenshots.
  - `'CSS'`: Uses CSS transforms to stitch screenshots.

  **Default**: `'CSS'`.

```typescript
stitchMode: 'Scroll',
```

- **`stitchOverlap`** (number):  
  The overlap in pixels between stitched parts. Only relevant for `stitchMode: 'Scroll'`

  **Default**: `50` pixels.

```typescript
stitchOverlap: 50,
```
