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
  
  // plugins: [
  //   [
  //     '@docusaurus/plugin-client-redirects',
  //     {
  //       redirects: [          
  //         {
  //           to: 'https://help-archive.quali.com/help versions/All Versions Help/Content/Versions.htm',
  //           from: ['/help versions/All Versions Help/Content/Versions.htm', '/help%20versions/All%20Versions%20Help/Content/Versions.htm'],
  //         },
  //         {
  //           to: 'https://help-archive.quali.com/Online Help/0.0/TestShell/Content/TSS/TSS.htm',
  //           from: ['/2022.1.0.1858/ST/', '/2022.2.0.1470/ST/', '/2023.1.0.655/ST/', '/2023.2.0.1763/ST/', '/2023.3.0.979/ST/', '/2024.1.0.2480/ST/', '/2024.1.0.2508/ST/', '/2024.1.0.2515/ST/'],
  //         },
  //         {
  //           to: 'https://help-archive.quali.com/Online Help/0.0/TestShell/Content/TSR/Tst-Run.htm',
  //           from: ['/2022.1.0.1858/RUN/', '/2022.2.0.1470/RUN/', '/2023.1.0.655/RUN/', '/2023.2.0.1763/RUN/', '/2023.3.0.979/RUN/', '/2024.1.0.2480/RUN/', '/2024.1.0.2508/RUN/', '/2024.1.0.2515/RUN/'],
  //         },
  //         {
  //           to: '/',
  //           from: [
  //             '/Online%20Help/2022.1.0.1858/Portal/',
  //             '/Online%20Help/2022.2.0.1470/Portal/',
  //             '/Online%20Help/2023.1.0.655/Portal/',
  //             '/Online%20Help/2023.2.0.1763/Portal/',
  //             '/Online%20Help/2023.3.0.979/Portal/',
  //             '/Online%20Help/2024.1.0.2480/Portal/',
  //             '/Online%20Help/2024.1.0.2508/Portal/',
  //             '/Online%20Help/2024.1.0.2515/Portal/',
  //             ],
  //         },
  //       ],
  //       createRedirects(existingPath) {
  //         var versions = ["0.0", "2022.1", "2022.1.0.1858", "2022.2", "2022.2.0.1470", "2023.1", "2023.1.0.655", "2023.2", "2023.2.0.1763", "2023.3", "2023.3.0.979", "2024.1", "2024.1.0.2480", "2024.1.0.2508", "2024.1.0.2515"];          

  //         if (existingPath.startsWith('/portal/inventory/inventory-dashboard')) {
  //           return versions.map(version => `/${version}/Portal/Inventory`);
  //         }
  //         else if (existingPath.startsWith('/portal/sandboxes/sandbox-workspace')) {
  //           return versions.flatMap(version => [`/${version}/Portal/EnvironmentWorkspace`, `/${version}/Portal/ReservationWorkspace`]);
  //         }
  //         else if (existingPath.startsWith('/portal/blueprints/blueprint-catalog')) {
  //           return versions.map(version => `/${version}/Portal/EnvironmentsCatalog`);
  //         }
  //         else if (existingPath.startsWith('/portal/sandboxes/sandboxes-dashboard')) {
  //           return versions.flatMap(version => [`/${version}/Portal/ReservationsList`, `/${version}/Portal/ReservationsTimeline`]);
  //         }
  //         else if (existingPath.startsWith('/portal/job-scheduling/job-scheduling-dashboard')) {
  //           return versions.map(version => `/${version}/Portal/Scheduler`);
  //         }
  //         else if (existingPath.startsWith('/admin/cloudshell-manage-dashboard/manage-dashboard-overview')) {
  //           return versions.map(version => `/${version}/Portal/Manage`);
  //         }
  //         else if (existingPath.startsWith('/admin/cloudshell-manage-dashboard/manage-app-templates')) {
  //           return versions.map(version => `/${version}/Portal/ManageApps`);
  //         }
  //         else if (existingPath.startsWith('/intro/features/apps-overview')) {
  //           return versions.map(version => `/${version}/Portal/UsingApps`);
  //         }
  //         else if (existingPath.startsWith('/portal/sandboxes/saved-sandboxes')) {
  //           return versions.map(version => `/${version}/Portal/SaveSandbox`);
  //         }
  //         else if (existingPath.startsWith('/portal/sandboxes/sandbox-save-and-restore-overview')) {
  //           return versions.map(version => `/${version}/Portal/SaveSandboxOverview`);
  //         }
  //         else if (existingPath.startsWith('/admin/setting-up-cloudshell/cloudshell-resource-management-client')) {
  //           return versions.map(version => `/${version}/RM`);
  //         }
  //         else if (existingPath.startsWith('/help-versions-archive')) {
  //           return "/help%20versions/"
  //         }
          
          
  //         return undefined; // Return a falsy value: no redirect created
  //       },
  //     },
  //   ],
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
  
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

export default config;
