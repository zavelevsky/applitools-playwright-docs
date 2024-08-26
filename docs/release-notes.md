# Release Notes

This document provides a summary of changes, improvements, and bug fixes for each release of the Applitools Eyes SDK for Playwright.

## Table of Contents

- [Version 1.x](#version-1x)
  - [1.2.0 (Latest)](#120-latest)
  - [1.1.0](#110)
  - [1.0.0](#100)

## Version 1.x

### 1.2.0 (Latest)

_Release Date: August 15, 2024_

#### New Features

- Added support for Playwright v1.38.0
- Introduced new `eyesCheck` command for easier integration with Playwright's test runner

#### Improvements

- Enhanced performance of the Ultrafast Grid, reducing test execution time by up to 20%
- Improved error messages for better debugging experience

#### Bug Fixes

- Fixed an issue where tests would occasionally fail on pages with complex animations
- Resolved a rare race condition in the `eyes.close()` method

#### Breaking Changes

- Deprecated `eyes.setForceFullPageScreenshot()` method. Use `eyes.setForceFullPageScreenshot(true)` instead

### 1.1.0

_Release Date: May 1, 2024_

#### New Features

- Added support for visual testing of Shadow DOM elements
- Introduced new `eyes.setLayoutBreakpoints()` method for responsive design testing

#### Improvements

- Optimized memory usage for large batch executions
- Enhanced cross-browser consistency in the Ultrafast Grid

#### Bug Fixes

- Fixed an issue where `ignoreRegions` were not applied correctly in some scenarios
- Resolved a compatibility issue with Playwright v1.35.0

### 1.0.0

_Release Date: January 10, 2024_

#### New Features

- Initial release of Applitools Eyes SDK for Playwright
- Full support for Playwright's sync and async APIs
- Integration with Applitools Ultrafast Grid for cross-browser testing
- AI-powered visual comparisons with automatic maintenance

#### Key Capabilities

- Easy-to-use API for adding visual checkpoints to Playwright tests
- Support for full page screenshots, regional checks, and iframe testing
- Advanced features like ignore regions, layout regions, and strict regions
- Seamless integration with Applitools dashboard for result analysis and collaboration

---

For more detailed information about each release, please visit our [GitHub releases page](https://github.com/applitools/eyes-playwright/releases).

To upgrade to the latest version, run:

```
npm install @applitools/eyes-playwright@latest
```

If you encounter any issues or have questions about a specific release, please [contact our support team](https://support.applitools.com/) or [open an issue on GitHub](https://github.com/applitools/eyes-playwright/issues).
