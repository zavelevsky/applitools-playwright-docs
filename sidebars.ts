import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    'getting-started',
    'core-concepts',
    'integration-with-playwright',
    'advanced-usage',
    'ci-cd-integration',
    'applitools-dashboard',
    {
      type: 'category',
      label: 'Guides and Best Practices',
      items: [
        'guides/choosing-what-to-test',
        'guides/maintaining-tests',
        'guides/handling-failures',
        'guides/scaling-visual-testing',
        'guides/code-reviews',
        'guides/root-cause-analysis',
      ],
    },
    'troubleshooting',
    'migration',
    'examples-and-tutorials',
    'community-and-resources',
    'release-notes',
  ],
  api: [
    'api/eyes-object',
    'api/configuration',
    'api/check-methods',
    'api/selectors-and-locators',
    'api/customization',
    'api/advanced-features',
  ],
};

export default sidebars;
