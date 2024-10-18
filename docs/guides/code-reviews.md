# Conducting Code Reviews with Visual Test Results

Incorporating visual test results into your code review process can significantly enhance the quality and reliability of your application's user interface. This guide explains how to effectively use Applitools Eyes visual test results during code reviews, boosting confidence in UI changes and streamlining collaboration between developers and reviewers.

---

## The benefits of visual test results in code reviews

- **Increased confidence**: Visual tests confirm that UI changes are intentional and that no unexpected regressions have occurred.
- **Early detection**: Catch visual defects before they reach production, reducing the cost and effort of fixing issues later.
- **Improved communication**: Visual diffs provide clear, tangible evidence of changes, facilitating better discussions between team members.
- **Efficient reviews**: Quickly assess the impact of code changes on the UI without manually running the application.

---

## Integrating visual tests into the code review workflow

### 1. Developer's role

#### Running visual tests before requesting code review

- **Review test results**: Use the Applitools Dashboard to examine any visual differences detected.

#### Approving expected diffs

- **Intentional changes**: If the visual differences align with the intended UI updates, approve them in the Applitools Dashboard.
  - **Add remarks**: Provide context or explanations for the changes in the dashboard remarks.
- **Unintentional changes**: If unexpected differences are found, fix the code or update the tests to prevent unintended changes.

#### Updating baselines

- **After approval**: Once changes are approved, the baselines are updated to reflect the new UI state.
- **Branch management**: Ensure that baselines are correctly managed for feature branches to prevent conflicts.

### 2. Automated CI pipeline

#### Running visual tests in CI

- **Consistency**: The CI environment replicates tests to ensure consistency across different machines.
- **Integration with Applitools**: Visual tests run as part of the CI process, and results are sent to the Applitools Dashboard.

#### Providing test results in the PR

- **Status checks**: Configure your CI system to report the status of visual tests in the PR.
- **Links to dashboard**: Include direct links to the relevant test results in the Applitools Dashboard for easy access.

### 3. Reviewer's role

#### Accessing visual test results

- **Dashboard links**: Use the provided links in the PR to access the visual test results.
- **Reviewing diffs**: Examine the visual differences between the baseline and the new screenshots.

#### Validating approved changes

- **Agreement**: Ensure that the approved changes align with the expected UI updates and design specifications.
- **Feedback**: If discrepancies are found, communicate with the developer for clarification or request changes.

#### Assessing unapproved diffs

- **Unresolved differences**: If any visual differences are not yet approved, discuss with the developer to determine if they are intentional.
- **Rejection**: If necessary, reject unintended changes in the dashboard to prompt further action.

### 4. Merging and baseline updates

#### Merging the PR

- **Approval**: Once the code and visual changes are reviewed and approved, merge the PR into the main branch.
- **CI integration**: The CI pipeline runs again to ensure all tests pass in the main branch environment.

#### Baseline merging

- **Automatic baseline updates**: Applitools Eyes automatically merges baselines from feature branches into the main branch upon merging the PR.
- **Consistency across branches**: This ensures that future tests run against the updated baselines, maintaining consistency.

## Best practices for effective code reviews with visual tests

### Communicate clearly

- **Remarks and issues**: Use the Applitools Dashboard to add annotations on visual diffs for better understanding.
- **Provide context**: Explain the purpose of UI changes in the PR description.

### Establish review guidelines

- **Define expectations**: Set criteria for acceptable visual changes.
- **Consistency with design**: Ensure changes align with design guidelines and branding.

### Use collaboration tools

- **Integrations**: Utilize integrations with tools like Slack or Jira to streamline communication.
- **Shared access**: Ensure all team members have access to the Applitools Dashboard.

### Automate where possible

- **CI/CD pipelines**: Automate visual tests to run on every PR and provide immediate feedback.
- **Notifications**: Set up alerts for test failures or unresolved differences.
