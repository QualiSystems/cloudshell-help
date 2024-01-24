// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CloudShell Help',
  tagline: 'CloudShell Online Help',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qualisystems.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cloudshell-help/',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QualiSystems/cloudshell-help', // Usually your GitHub org/user name.
  projectName: 'cloudshell-help', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    highlightResult: true
  }]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QualiSystems/cloudshell-help/tree/main/',

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Online Help',
        logo: {
          alt: 'CloudShell',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: 'https://github.com/QualiSystems/cloudshell-help',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            //dropdownItemsAfter: [{to: '/versions'}],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Quali Website',
                to: 'https://quali.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CloudShell Community',
                href: 'http://community.quali.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Quali\'s Blog',
                to: 'https://quali.com/blog',
              },
              {
                label: 'Quali Support',
                href: 'https://support.quali.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quali, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
