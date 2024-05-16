"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[81224],{53252:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(17624),n=t(4552);const l={sidebar_position:3},r="Known Upgrade Issues",d={id:"install-configure/cloudshell-suite/appendix/known-upgrade-issues",title:"Known Upgrade Issues",description:"| Application | Description |",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/known-upgrade-issues.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/known-upgrade-issues",permalink:"/cloudshell-help/install-configure/cloudshell-suite/appendix/known-upgrade-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/known-upgrade-issues.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Known CloudShell Installation Issues",permalink:"/cloudshell-help/install-configure/cloudshell-suite/appendix/known-cs-install-issues"},next:{title:"Utilities and Layer 1 Drivers",permalink:"/cloudshell-help/install-configure/cloudshell-suite/appendix/utilities-and-l1-drivers"}},o={},a=[];function c(e){const s={a:"a",code:"code",h1:"h1",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"known-upgrade-issues",children:"Known Upgrade Issues"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Application"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"All"}),(0,i.jsx)(s.td,{children:"Although the CloudShell installer should leave all of your current configurations intact, it does overwrite your existing applications. This may inadvertently affect some of your current settings. It is therefore imperative to back up your databases before upgrading."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"TestShell API"}),(0,i.jsxs)(s.td,{children:["Updating drivers using TestShell API assets:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"After upgrading to CloudShell, you need to manually update the TestShell API asset in Authoring, and then recompile any drivers using the API methods."}),(0,i.jsx)("li",{children:"Drivers using the API to update values in the Quali Server only require updating of the asset."})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Check in all libraries prior to upgrading"}),(0,i.jsx)(s.td,{children:"Verify that all the libraries are checked in. Checked out libraries are indicated by a different color icon. The parent folder also indicates if the folder contains a checked-out library."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"All"}),(0,i.jsxs)(s.td,{children:["Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA.",(0,i.jsx)("br",{}),"If you need to upgrade from an earlier version, contact ",(0,i.jsx)(s.a,{href:"https://support.quali.com/hc/en-us",children:"Quali Support"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Note:"})," Patches must be installed on\xa0GA\xa0versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"All"}),(0,i.jsx)(s.td,{children:"Real-time virus protection may affect performance."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"All"}),(0,i.jsxs)(s.td,{children:["CloudShell upgrade overrides custom configuration files, including ",(0,i.jsx)(s.code,{children:"customer.config"}),", ",(0,i.jsx)(s.code,{children:"webconfig.xml"}),", ",(0,i.jsx)(s.code,{children:"Quali.vbs"}),", ",(0,i.jsx)(s.code,{children:"WebPortal.vbs"}),", ",(0,i.jsx)(s.code,{children:"httpd.conf"})," and ",(0,i.jsx)(s.code,{children:"LanguagePortal.Override.xml"}),". Therefore, copies of the latest files need to be saved and applied after upgrade."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Insight"}),(0,i.jsxs)(s.td,{children:["When upgrading Insight to a version that includes new dashboards and widgets, these new areas will be empty initially and populate with data over time. For example, when upgrading to Insight 2021.2, the following widgets will be affected:",(0,i.jsx)("br",{}),"New ",(0,i.jsx)(s.strong,{children:"Users"})," dashboard widgets:",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Logged in users"})}),"New ",(0,i.jsx)(s.strong,{children:"Sandboxes"})," dashboard widgets:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Denied sandboxes"}),(0,i.jsx)("li",{children:"Activated sandboxes with setup failed"})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>d,M:()=>r});var i=t(11504);const n={},l=i.createContext(n);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);