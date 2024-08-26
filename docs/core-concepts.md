# Core Concepts

This guide introduces the fundamental concepts and terminology used in visual testing with Applitools Eyes. Understanding these concepts will help you effectively implement and manage your visual tests.

## Visual AI

At the heart of Applitools Eyes is its Visual AI engine. This advanced technology mimics the human eye and brain to detect visual differences that matter while ignoring those that don't (like rendering differences between browsers).

Key points:

- Uses machine learning algorithms to analyze images
- Distinguishes between actual bugs and acceptable variations
- Improves over time, learning from user feedback

## Baseline Images

A baseline image serves as the expected visual state of your application. When you run a visual test for the first time, Applitools saves the captured screenshots as the baseline.

Key points:

- Represents the "correct" version of your UI
- Used for comparison in subsequent test runs
- Can be updated when intentional changes are made to the UI

## Visual Checkpoints

A visual checkpoint is a point in your test where you capture a screenshot and compare it to the baseline. In your Playwright tests, you create checkpoints using the `eyes.check()` method.

Key points:

- Can capture full page, specific element, or region
- Allows you to validate the UI at critical points in user flows
- Can include multiple checkpoints in a single test

## Test Results and Visual Diffs

After running a test, Applitools compares the new screenshots with the baseline images. If differences are detected, it generates a visual diff highlighting the changes.

Key points:

- Shows exact locations and nature of visual changes
- Allows you to easily identify unintended changes
- Provides tools for accepting or rejecting changes

## Applitools Eyes Test Manager

The Test Manager is a web-based interface where you can view and manage your test results.

Key points:

- Displays all test results, including visual diffs
- Allows you to update baselines, assign tasks, and manage test batches
- Provides analytics and insights about your visual testing process

## Viewport and Browser Configuration

Applitools allows you to test your application across different viewports and browsers.

Key points:

- Can configure tests to run on multiple browser/viewport combinations
- Helps ensure consistent appearance across different devices and screen sizes
- Uses the Ultrafast Grid for efficient cross-browser testing

## Match Levels

Match levels determine how strict the visual comparison should be.

Key points:

- Strict: Pixel-perfect matching
- Content: Ignores color differences
- Layout: Ensures elements are in the correct position relative to each other
- Exact: Most stringent, flags even the smallest differences

## Regions and Ignore Regions

You can specify particular regions of the page for focused testing or to be ignored during comparison.

Key points:

- Allows you to focus on critical areas of your UI
- Useful for dynamic content that may change between test runs
- Helps reduce false positives in your tests

## Batches

A batch is a collection of visual tests that are logically grouped together.

Key points:

- Helps organize related tests (e.g., all tests for a specific feature)
- Allows for easier management and analysis of test results
- Can be used to parallelize test execution for faster results

Understanding these core concepts will provide you with a solid foundation for implementing effective visual testing with Applitools Eyes and Playwright. As you progress through the documentation, you'll see how these concepts are applied in practice.
