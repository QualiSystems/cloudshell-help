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
          includeCurrentVersion: true, //we want to show our next version work in progress
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QualiSystems/cloudshell-help/tree/main/',
          //showLastUpdateTime: false  // since we build everything on each update, the date will just show the same for all pages
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  scripts: [
    // One Trust Cookie policy
    {
      src: 'https://cdn.cookielaw.org/consent/47d0fdb5-1ced-4a6a-a893-847e68cce066/OtAutoBlock.js',
      type: "text/javascript",
    },
    {
      src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      charset: 'UTF-8',
      type: "text/javascript",
      "data-domain-script": "47d0fdb5-1ced-4a6a-a893-847e68cce066"
    },
    {  src: 'http://help.quali.com/one-trust.js',
      type: "text/javascript"
    }
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [          
          {
            to: 'https://help-archive.quali.com/help versions/All Versions Help/Content/Versions.htm',
            from: ['/help versions/All Versions Help/Content/Versions.htm', '/help%20versions/All%20Versions%20Help/Content/Versions.htm'],
          },          
        ],
        createRedirects(existingPath) {
          var versions = ["0.0", "2022.1", "2022.1.0.1858", "2022.2", "2022.2.0.1470", "2023.1", "2023.1.0.655", "2023.2", "2023.2.0.1763", "2023.3", "2023.3.0.979", "2024.1"];          
          
          if (existingPath.includes('/portal/inventory/inventory-dashboard')) {
            return versions.map(version => `/${version}/Portal/Inventory`);
          }
          else if (existingPath.includes('/portal/sandboxes/sandbox-workspace')) {
            return versions.flatMap(version => [`/${version}/Portal/EnvironmentWorkspace`, `/${version}/Portal/ReservationsTimeline`]);
          }
          else if (existingPath.includes('/portal/blueprints/blueprint-catalog')) {
            return versions.map(version => `/${version}/Portal/EnvironmentsCatalog`);
          }
          else if (existingPath.includes('portal/sandboxes/sandboxes-dashboard')) {
            return versions.flatMap(version => [`/${version}/Portal/ReservationsList`, `/${version}/Portal/ReservationsTimeline`]);
          }
          else if (existingPath.includes('/portal/job-scheduling/job-scheduling-dashboard')) {
            return versions.map(version => `/${version}/Portal/Scheduler`);
          }
          else if (existingPath.includes('/admin/cloudshell-manage-dashboard/manage-dashboard-overview.md')) {
            return versions.map(version => `/${version}/Portal/Manage`);
          }
          else if (existingPath.includes('/admin/cloudshell-manage-dashboard/manage-app-templates/index.md')) {
            return versions.map(version => `/${version}/Portal/ManageApps`);
          }
          else if (existingPath.includes('/portal/sandboxes/sandbox-workspace/apps')) {
            return versions.map(version => `/${version}/Portal/UsingApps`);
          }
          else if (existingPath.includes('/portal/sandboxes/saved-sandboxes')) {
            return versions.map(version => `/${version}/Portal/SaveSandbox`);
          }
          else if (existingPath.includes('/portal/sandboxes/sandbox-save-and-restore-overview')) {
            return versions.map(version => `/${version}/Portal/SaveSandboxOverview`);
          }
          else if (existingPath.includes('/intro.md')) {
            return versions.map(version => `/Online%20Help/${version}/Portal/Default.htm`);
          }
          else if (existingPath.includes('/help-versions-archive')) {
            return "/help%20versions/"
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
