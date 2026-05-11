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
  url: 'https://help.quali.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QualiSystems', // Usually your GitHub org/user name.
  projectName: 'cloudshell-help', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  future: {
    v4: true,
    experimental_faster: true,
  },

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
          lastVersion: 'current', 
          versions: {
            current: {
              label: 'Latest',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QualiSystems/cloudshell-help/tree/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/2023.3/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  // scripts: [
  //   // One Trust Cookie policy
  //   {
  //     src: 'https://cdn.cookielaw.org/consent/47d0fdb5-1ced-4a6a-a893-847e68cce066/OtAutoBlock.js',
  //     type: "text/javascript",
  //   },
  //   {
  //     src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
  //     charset: 'UTF-8',
  //     type: "text/javascript",
  //     "data-domain-script": "47d0fdb5-1ced-4a6a-a893-847e68cce066"
  //   },
  //   {  src: 'http://help.quali.com/one-trust.js',
  //     type: "text/javascript"
  //   }
  // ],

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
