import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration for Applitools Eyes SDK documentation.
 *
 * @typedef {Object} SidebarItem
 * @property {string} type - The type of the sidebar item ('doc', 'category', etc.)
 * @property {string} id - The ID of the document (should match the filename without extension)
 * @property {string} [label] - Optional custom label for the sidebar item
 *
 * @typedef {Object} SidebarCategory
 * @property {string} type - Always 'category' for category items
 * @property {string} label - The label for the category
 * @property {(string|SidebarItem)[]} items - Array of items in the category
 *
 * Structure:
 * - Use string values for default items (e.g., 'introduction')
 * - Use object notation for items with custom labels:
 *   { type: 'doc', id: 'filename', label: 'Custom Label' }
 * - Use SidebarCategory objects for nested categories
 */
const sidebars: SidebarsConfig = {
  /** Main documentation sidebar */
  docs: [
    {
      type: 'doc',
      id: 'quick-start',
      label: 'Quick Start',
    },
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'integration-with-playwright',
      label: 'Integration with Playwright',
    },
    {
      type: 'doc',
      id: 'core-concepts',
      label: 'Core Concepts',
    },
    {
      type: 'doc',
      id: 'advanced-usage',
      label: 'Advanced Usage',
    },
    {
      type: 'doc',
      id: 'applitools-dashboard',
      label: 'Applitools Dashboard',
    },
    {
      type: 'doc',
      id: 'ci-cd-integration',
      label: 'CI/CD Integration',
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Guides and Best Practices',
      items: [
        {
          type: 'doc',
          id: 'guides/maintaining-tests',
          label: 'Maintaining Visual Tests Over Time',
        },
        {
          type: 'doc',
          id: 'guides/code-reviews',
          label: 'Conducting Code Reviews with Visual Test Results',
        },
      ],
    },
    {
      type: 'doc',
      id: 'examples-and-tutorials',
      label: 'Examples and Tutorials',
    },
  ],
  /** API reference sidebar */
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
