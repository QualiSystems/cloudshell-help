"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59116],{88924:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=l(17624),i=l(4552);const s={},t="Upgrade Procedure",o={id:"install-configure/cloudshell-suite/upgrade-procedure/index",title:"Upgrade Procedure",description:"This article describes the required steps to upgrade to the latest version of CloudShell.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/upgrade-procedure/index.md",sourceDirName:"install-configure/cloudshell-suite/upgrade-procedure",slug:"/install-configure/cloudshell-suite/upgrade-procedure/",permalink:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/upgrade-procedure/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"High\xa0Availability",permalink:"/cloudshell-help/install-configure/cloudshell-suite/cloudshell-suite-overview/high-availability"},next:{title:"Upgrade Preparation",permalink:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep"}},a={},d=[{value:"General upgrade notes",id:"general-upgrade-notes",level:2},{value:"Related topics",id:"related-topics",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"upgrade-procedure",children:"Upgrade Procedure"}),"\n",(0,r.jsx)(n.p,{children:"This article describes the required steps to upgrade to the latest version of CloudShell."}),"\n",(0,r.jsx)(n.p,{children:"A new license is required when installing CloudShell, or upgrading to a major (8.0, 9.0, etc.) or minor (8.1, 8.2, etc.) version. Patches do not require a new license."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Starting with CloudShell 2020.2, sandbox events data is stored on MongoDB. As such, upgrade from an earlier CloudShell version may take longer than usual while this data is being copied from SQL Server to MongoDB."})}),"\n",(0,r.jsx)(n.p,{children:"Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA."}),"\n",(0,r.jsxs)(n.p,{children:["If you need to upgrade from an earlier version, contact ",(0,r.jsx)(n.a,{href:"https://support.quali.com/hc/en-us",children:"Quali Support"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Patches must be installed on\xa0GA\xa0versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database."})}),"\n",(0,r.jsx)(n.h2,{id:"general-upgrade-notes",children:"General upgrade notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If you're using Packaging API"}),", we recommend you upgrade your package editor version to the one included in this CloudShell release - ",(0,r.jsx)(n.a,{href:"/cloudshell-help/api-guide/packaging-api/get-start-with-pkg-api",children:"Getting Started with Packaging API"}),". The old package editor (pre-2022.1) will work with the new CloudShell but on different flows might behave unexpectedly in existing blueprints containing Apps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Starting with CloudShell 2020.2, ",(0,r.jsx)(n.strong,{children:"Sisense server cannot coexist with Quali Server"})," on the same machine and will need to be moved. For details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/troubleshooting/insight/how-to-migrate-sisense-to-a-new-server",children:"How to Migrate Sisense to a New Server"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Changes made to CloudShell's out-of-the-box attributes will be overridden by the upgrade"})," (except for attribute rule associations which are not affected). These attributes serve the 1",(0,r.jsx)("sup",{children:"st"})," Gen shells that are provided out of the box with CloudShell, including the cloud provider shells, Custom Script, Ansible and Networking shells. To fix these issues, do the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For cloud provider shell attributes: We recommend using the 2",(0,r.jsx)("sup",{children:"nd"})," Gen shells instead. 2",(0,r.jsx)("sup",{children:"nd"})," Gen shells use their own namespaced attributes and settings and therefore are unaffected by upgrades. Note that 2",(0,r.jsx)("sup",{children:"nd"})," Gen versions of these shells are available for download from ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['For the rest of the out-of-the-box attributes: Maintain custom minimal "DataModel only" shell packages that update just the default attributes and resource models as appropriate, and import into CloudShell Portal (as a blueprint package) after upgrade. This can be automated using the ',(0,r.jsx)(n.a,{href:"/cloudshell-help/api-guide/quali-api",children:"Quali API"}),"'s ",(0,r.jsx)(n.strong,{children:"Import Package"})," method. The DataModel xml files are located at C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages."]}),"\n",(0,r.jsx)(n.li,{children:"Whenever you run the Quali Server configuration wizard, the out-of-the-box packages are reimported. So to avoid having to import the custom packages every time you run the wizard, remove the out-of-the-box packages from the default location. Please do this every CloudShell upgrade."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Before running the installer"}),", do the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure no other users are logged in/have open sessions with the machines that will be upgraded."}),"\n",(0,r.jsx)(n.li,{children:"Stop the service to avoid data change."}),"\n",(0,r.jsxs)(n.li,{children:["If Sandbox API was configured to run in secure mode, back up the files/folders added/updated in ",(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api",children:"Configuring Sandbox API to Work in HTTPS Mode"}),", if the Sandbox API was configured to run in secure mode."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If Sandbox API was configured to run in secure mode"}),", after upgrading CloudShell to a new version or patch, make sure these files/folders were not overwritten/deleted:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\conf\\httpd.conf"}),"\n",(0,r.jsx)(n.li,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\win64\\ssl"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If you're using the New Job Scheduling"}),", make sure to upgrade it as well. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",children:"Upgrade Considerations for New Job Scheduling"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep",children:"Upgrade Preparation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",children:"Upgrade the Validation Environment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-production",children:"Upgrade the Production Environment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/migrate-python-dependencies",children:"Migrate Python Dependencies to PyPi Server"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>o,M:()=>t});var r=l(11504);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);