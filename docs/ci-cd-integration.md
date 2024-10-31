# CI/CD Integration

Integrating Applitools Eyes into your Continuous Integration and Continuous Deployment (CI/CD) pipelines ensures that visual testing becomes an automated part of your development workflow. This section will guide you through setting up Applitools with popular CI/CD tools, automating visual tests on code changes, and managing baselines in a collaborative environment.

## Automating visual tests in CI/CD

Automating visual tests allows you to catch visual regressions early in the development process. By running tests on every code change, pull request, or deployment, you ensure that your application's UI remains consistent and high-quality.

### Prerequisites

- **Applitools API key**: Ensure your API key is accessible in your CI environment. You can set it as an environment variable named `APPLITOOLS_API_KEY`.
- **Configured project**: Your project should already be set up with Applitools Eyes and Playwright, as described in the Quick Start section.

## Setting up Applitools in CI environments

### Common steps

**Install dependencies**: Install project dependencies, including Playwright and Applitools Eyes SDK.

```bash
npm install
```

**Set the Applitools API key**: Ensure the `APPLITOOLS_API_KEY` environment variable is set in your CI environment.

**Run tests**: Execute your Playwright tests as part of your CI pipeline.

```bash
npx playwright test
```

## Integrating with popular CI/CD tools

### GitHub actions

Here's an example of setting up Applitools visual tests in a GitHub Actions workflow.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  visual-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run visual tests
        env:
          APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
        run: npx playwright test
```

#### Notes

- **Environment variables**: Store your `APPLITOOLS_API_KEY` in GitHub Secrets to keep it secure.
- **Parallel execution**: You can configure matrix strategies to run tests across different environments.

### Jenkins

To integrate Applitools visual tests in a Jenkins pipeline:

```groovy
// Jenkinsfile
pipeline {
    agent any

    environment {
        APPLITOOLS_API_KEY = credentials('APPLITOOLS_API_KEY') // Assuming you've stored the key in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Visual Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
```

#### Notes

- **Credentials management**: Use Jenkins' credentials management to store your API key securely.
- **Pipeline structure**: Adjust the stages according to your project's needs.

### GitLab CI/CD

Example configuration for GitLab CI/CD:

```yaml
# .gitlab-ci.yml
stages:
  - test

visual_test:
  stage: test
  image: node:16
  script:
    - npm install
    - npx playwright test
  variables:
    APPLITOOLS_API_KEY: $APPLITOOLS_API_KEY
```

#### Notes

- **Environment variables**: Set `APPLITOOLS_API_KEY` in GitLab's CI/CD settings under variables.
- **Docker images**: Ensure the Docker image used has all necessary dependencies.

### CircleCI

Example configuration for CircleCI:

```yaml
# .circleci/config.yml
version: 2.1

jobs:
  visual_test:
    docker:
      - image: cimg/node:16.13
    steps:
      - checkout
      - run: npm install
      - run:
          name: Run Visual Tests
          command: npx playwright test
          environment:
            APPLITOOLS_API_KEY: $APPLITOOLS_API_KEY

workflows:
  version: 2
  build_and_test:
    jobs:
      - visual_test
```

#### Notes

- **Environment variables**: Set `APPLITOOLS_API_KEY` in CircleCI's project settings under environment variables.

## Managing baselines in a CI/CD context

### Baseline branching

Applitools Eyes supports baseline branching to align with your Git branches. This ensures that changes in feature branches don't affect the main branch's baselines.

#### Configuring baseline branching

Set the `branchName` in your `eyesConfig`:

```typescript
// playwright.config.ts
use: {
  eyesConfig: {
    branchName: process.env.GIT_BRANCH || 'main',
    parentBranchName: 'main',
  },
};
```

#### Notes

- **Environment variables**: Use environment variables like `GIT_BRANCH` to dynamically set the branch name.
- **Parent branch**: `parentBranchName` helps Applitools understand the relationship between branches.

### Handling baseline updates

- **Accepting changes**: When intentional UI changes occur, accept them in the Applitools Dashboard to update the baseline for that branch.
- **Merging baselines**: When you merge your code, Applitools can automatically merge the baselines if the visual differences have been approved.

## Integrating visual tests into the development workflow

### Running visual tests on pull requests

Set up your CI pipeline to run visual tests on every pull request. This allows you to:

- **Catch visual regressions early**: Identify unintended UI changes before merging code.
- **Facilitate code reviews**: Provide visual diffs to reviewers for better understanding of UI changes.

### Reporting visual differences

You can integrate Applitools with tools like GitHub to report visual test results directly in pull requests.

#### Example: GitHub checks integration

- **Applitools GitHub integration**: Setup the Applitools Github integration to integrate test results into GitHub checks.
- **Configure notifications**: Set up notifications and permissions as needed.

### Collaborating with the team

- **Remarks and bugs**: Use the Applitools Dashboard to add comments on visual diffs.
- **Sharing results**: Share links to test results with team members for collaborative debugging.
