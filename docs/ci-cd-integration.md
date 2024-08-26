# CI/CD Integration for Applitools Eyes SDK with Playwright

This guide covers how to integrate Applitools Eyes visual testing with your CI/CD pipeline when using Playwright. We'll provide examples for popular CI/CD platforms and best practices for efficient integration.

## Table of Contents

1. [General Setup](#general-setup)
2. [GitHub Actions](#github-actions)
3. [Jenkins](#jenkins)
4. [GitLab CI](#gitlab-ci)
5. [Azure DevOps](#azure-devops)
6. [CircleCI](#circleci)
7. [Best Practices](#best-practices)

## General Setup

Regardless of the CI/CD platform you're using, there are some common steps:

1. Ensure Node.js is installed in your CI environment
2. Install Playwright and Applitools Eyes SDK
3. Set up your Applitools API key as an environment variable
4. Run your Playwright tests with Applitools Eyes

Here's a general script that you can adapt for your CI/CD platform:

```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install

# Run tests
APPLITOOLS_API_KEY=$YOUR_API_KEY npx playwright test
```

## GitHub Actions

Create a `.github/workflows/visual-tests.yml` file in your repository:

```yaml
name: Visual Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm ci
      - name: Install Playwright
        run: npx playwright install
      - name: Run visual tests
        run: npx playwright test
        env:
          APPLITOOLS_API_KEY: ${{ secrets.APPLITOOLS_API_KEY }}
```

Make sure to add your Applitools API key as a secret in your GitHub repository settings.

## Jenkins

Add the following stage to your Jenkinsfile:

```groovy
pipeline {
    agent any
    stages {
        stage('Visual Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14') {
                    sh 'npm ci'
                    sh 'npx playwright install'
                    withCredentials([string(credentialsId: 'APPLITOOLS_API_KEY', variable: 'APPLITOOLS_API_KEY')]) {
                        sh 'npx playwright test'
                    }
                }
            }
        }
    }
}
```

Ensure you've added your Applitools API key as a credential in Jenkins.

## GitLab CI

Add the following to your `.gitlab-ci.yml` file:

```yaml
visual_tests:
  image: mcr.microsoft.com/playwright:v1.21.0-focal
  stage: test
  script:
    - npm ci
    - npx playwright install
    - npx playwright test
  variables:
    APPLITOOLS_API_KEY: $APPLITOOLS_API_KEY
```

Add your Applitools API key as a variable in your GitLab CI/CD settings.

## Azure DevOps

Add the following task to your Azure Pipelines YAML file:

```yaml
- task: NodeTool@0
  inputs:
    versionSpec: '14.x'
  displayName: 'Install Node.js'

- script: |
    npm ci
    npx playwright install
  displayName: 'Install dependencies'

- script: |
    npx playwright test
  displayName: 'Run visual tests'
  env:
    APPLITOOLS_API_KEY: $(APPLITOOLS_API_KEY)
```

Add your Applitools API key as a pipeline variable in Azure DevOps.

## CircleCI

Add the following to your `.circleci/config.yml` file:

```yaml
version: 2.1
jobs:
  visual_tests:
    docker:
      - image: mcr.microsoft.com/playwright:v1.21.0-focal
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: |
            npm ci
            npx playwright install
      - run:
          name: Run visual tests
          command: npx playwright test
          environment:
            APPLITOOLS_API_KEY: ${APPLITOOLS_API_KEY}

workflows:
  version: 2
  test:
    jobs:
      - visual_tests
```

Add your Applitools API key as an environment variable in CircleCI project settings.

## Best Practices

1. **Use Caching**: Cache your `node_modules` to speed up builds.

2. **Parallel Execution**: Leverage your CI/CD platform's parallel execution capabilities along with Applitools' Visual Grid for faster test runs.

3. **Selective Testing**: Run visual tests only when necessary, e.g., on pull requests or specific branches.

4. **Fail Fast**: Configure your tests to fail fast if critical visual issues are detected.

5. **Artifacts**: Save test results and logs as artifacts for easy debugging.

6. **Notifications**: Set up notifications for test failures, particularly for visual differences.

7. **Baseline Management**: Implement a strategy for managing baselines, possibly updating them automatically for certain types of changes.

8. **Environment Variables**: Use environment variables for configuration to keep sensitive data out of your code repository.

Example of implementing some of these best practices:

```javascript
import { Eyes, BatchInfo, Configuration } from '@applitools/eyes-playwright';

const eyes = new Eyes();

const configuration = new Configuration();
configuration.setBatch(
  new BatchInfo(process.env.CI_COMMIT_REF_NAME || 'Local')
);
configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
configuration.setSaveNewTests(false);
configuration.setExitcode(true);

eyes.setConfiguration(configuration);

// In your test
test('Visual test', async ({ page }) => {
  await eyes.open(page, 'My App', 'Test name', { width: 1024, height: 768 });
  await page.goto('https://example.com');
  await eyes.check('Page', Target.window().fully());
  await eyes.close(false);
});

// After all tests
afterAll(async () => {
  const results = await eyes.getRunner().getAllTestResults(false);
  console.log(results.toString());
});
```

By following these guidelines and examples, you can efficiently integrate Applitools Eyes visual testing into your CI/CD pipeline, ensuring that visual regressions are caught early in your development process.
