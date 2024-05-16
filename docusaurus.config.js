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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 80,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          admonitions: {
            keywords: ['danger-one-line', 'warning-one-line' , 'info-one-line', 'tip-one-line', 'note-one-line'],
            extendDefaults: true,
          },
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          includeCurrentVersion: true, //show the Next verions when working locally, this will be changed to false as part of the deployment process
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QualiSystems/cloudshell-help/tree/main/',
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // redirects: [          
        //   {
        //     to: '/portal/blueprints/blueprint-catalog',
        //     from: ['/Portal/EnvironmentsCatalog'],
        //   },          
        // ],
        createRedirects(existingPath) {
          versions = ["0.0", "2022.1", "2022.2", "2023.1", "2023.2", "2023.3", "2024.1"];
          
          if (existingPath.includes('/portal/inventory/inventory-dashboard')) {
            return versions.map(version => `/${version}/Portal/Inventory`);
          }
          else if (existingPath.includes('/portal/sandboxes/sandbox-workspace')) {
            return versions.map(version => `/${version}/Portal/ReservationWorkspace`);
          }
          else if (existingPath.includes('/portal/blueprints/blueprint-catalog')) {
            return versions.map(version => `/${version}/Portal/EnvironmentsCatalog`);
          }
          else if (existingPath.includes('portal/sandboxes/sandboxes-dashboard')) {
            return versions.flatMap(version => [`/${version}/Portal/ReservationsList`, `/${version}/Portal/ReservationsTimeline`]);            
          }


          return undefined; // Return a falsy value: no redirect created
        },
      },
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
            className: 'header-github-link',
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
        additionalLanguages: ['bash', 'powershell'],
      },
    }),
};

export default config;
