"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25024],{39592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(17624),t=r(4552);const i={sidebar_position:1},o="Upgrade Preparation",l={id:"install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep",title:"Upgrade Preparation",description:"This article describes the required steps to upgrade to the latest version of CloudShell.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep.md",sourceDirName:"install-configure/cloudshell-suite/upgrade-procedure",slug:"/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep",permalink:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/upgrade-procedure/upgrade-prep.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Upgrade Procedure",permalink:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/"},next:{title:"Upgrade the Validation Environment",permalink:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging"}},a={},d=[{value:"General upgrade notes",id:"general-upgrade-notes",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"upgrade-preparation",children:"Upgrade Preparation"}),"\n",(0,s.jsx)(n.p,{children:"This article describes the required steps to upgrade to the latest version of CloudShell."}),"\n",(0,s.jsx)(n.p,{children:"A new license is required when installing CloudShell, or upgrading to a major (8.0, 9.0, etc.) or minor (8.1, 8.2, etc.) version. Patches do not require a new license."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Starting with 2020.2, sandbox events data is stored on MongoDB. As such, upgrade from an earlier CloudShell version may take longer than usual while this data is being copied from SQL Server to MongoDB."})}),"\n",(0,s.jsx)(n.p,{children:"Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA."}),"\n",(0,s.jsxs)(n.p,{children:["If you need to upgrade from an earlier version, contact ",(0,s.jsx)(n.a,{href:"https://support.quali.com/hc/en-us",children:"Quali Support"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Patches must be installed on\xa0GA\xa0versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database."})}),"\n",(0,s.jsx)(n.h2,{id:"general-upgrade-notes",children:"General upgrade notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"If you're using Packaging API"}),", we recommend you upgrade your package editor version to the one included in this CloudShell release - ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/packaging-api/get-start-with-pkg-api",children:"Getting Started with Packaging API"}),". The old package editor (pre-2022.1) will work with the new CloudShell but on different flows might behave unexpectedly in existing blueprints containing Apps."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Starting with CloudShell 2020.2, ",(0,s.jsx)(n.strong,{children:"Sisense server cannot coexist with Quali Server"})," on the same machine and will need to be moved. For details, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/troubleshooting/insight/how-to-migrate-sisense-to-a-new-server",children:"How to Migrate Sisense to a New Server"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Changes made to CloudShell's out-of-the-box attributes will be overridden by the upgrade"})," (except for attribute rule associations which are not affected). These attributes serve the 1",(0,s.jsx)("sup",{children:"st"})," Gen shells that are provided out of the box with CloudShell, including the cloud provider shells, Custom Script, Ansible and Networking shells. To fix these issues, do the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For cloud provider shell attributes: We recommend using the 2",(0,s.jsx)("sup",{children:"nd"})," Gen shells instead. 2",(0,s.jsx)("sup",{children:"nd"})," Gen shells use their own namespaced attributes and settings and therefore are unaffected by upgrades. Note that 2",(0,s.jsx)("sup",{children:"nd"})," Gen versions of these shells are available for download from ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:['For the rest of the out-of-the-box attributes: Maintain custom minimal "DataModel only" shell packages that update just the default attributes and resource models as appropriate, and import into CloudShell Portal (as a blueprint package) after upgrade. This can be automated using the ',(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/quali-api",children:"Quali API"}),"'s Import Package method. The DataModel xml files are located at ",(0,s.jsx)(n.strong,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Whenever you run the Quali Server configuration wizard, the out-of-the-box packages are reimported. So to avoid having to import the custom packages every time you run the wizard, remove the out-of-the-box packages from the default location. Please do this every CloudShell upgrade."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before running the installer"}),", do the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure no other users are logged in/have open sessions with the machines that will be upgraded."}),"\n",(0,s.jsx)(n.li,{children:"Stop the service to avoid data change."}),"\n",(0,s.jsxs)(n.li,{children:["If Sandbox API was configured to run in secure mode, back up the files/folders added/updated in ",(0,s.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api",children:"Configuring Sandbox API to Work in HTTPS Mode"}),", if the Sandbox API was configured to run in secure mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"If Sandbox API was configured to run in secure mode"}),", after upgrading CloudShell to a new version or patch, make sure these files/folders were not overwritten/deleted:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\conf\\httpd.conf"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\win64\\ssl"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"If you're using the New Job Scheduling"}),", make sure to upgrade it as well. See ",(0,s.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",children:"Upgrade Considerations for New Job Scheduling"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var s=r(11504);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);