import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Applitools Eyes SDK for Playwright',
  tagline: 'Comprehensive documentation for visual testing with Playwright',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zavelevsky.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/applitools-playwright-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zavelevsky', // Usually your GitHub org/user name.
  projectName: 'applitools-playwright-docs', // Usually your repo name.

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Applitools Eyes SDK for Playwright',
      logo: {
        alt: 'Applitools Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'api/eyes-object',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/zavelevsky/applitools-playwright-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/applitools+playwright',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/applitools',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/applitools',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/applitools-playwright-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Applitools, Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
