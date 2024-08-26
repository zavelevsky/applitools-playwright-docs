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
    /** @type {string} Default item using filename as ID and title */
    'introduction',
    'getting-started',
    'core-concepts',
    'integration-with-playwright',
    /** @type {SidebarItem} Item with custom label */
    {
      type: 'doc',
      id: 'advanced-usage',
      label: 'Advanced Usage',
    },
    {
      type: 'doc',
      id: 'ci-cd-integration',
      label: 'CI/CD Integration',
    },
    {
      type: 'doc',
      id: 'applitools-dashboard',
      label: 'Applitools Dashboard',
    },
    /** @type {SidebarCategory} Nested category with mixed item types */
    {
      type: 'category',
      collapsed: false,
      label: 'Guides and Best Practices',
      items: [
        {
          type: 'doc',
          id: 'guides/choosing-what-to-test',
          label: 'Choosing What to Visually Test', // Custom label
        },
        'guides/maintaining-tests',
        'guides/handling-failures',
        'guides/scaling-visual-testing',
        {
          type: 'doc',
          id: 'guides/code-reviews',
          label: 'Visual Testing in Code Reviews', // Custom label
        },
        'guides/root-cause-analysis',
      ],
    },
    'troubleshooting',
    {
      type: 'doc',
      id: 'migration',
      label: 'Migrating to Applitools Eyes',
    },
    'examples-and-tutorials',
    'community-and-resources',
    'release-notes',
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
