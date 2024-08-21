"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[96725],{22842:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=i(74848),t=i(28453);const r={sidebar_position:3},l="Known Upgrade Issues",d={id:"install-configure/cloudshell-suite/appendix/known-upgrade-issues",title:"Known Upgrade Issues",description:"| Application | Description |",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/known-upgrade-issues.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/known-upgrade-issues",permalink:"/2023.3/install-configure/cloudshell-suite/appendix/known-upgrade-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/known-upgrade-issues.md",tags:[],version:"2023.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Known CloudShell Installation Issues",permalink:"/2023.3/install-configure/cloudshell-suite/appendix/known-cs-install-issues"},next:{title:"Utilities and Layer 1 Drivers",permalink:"/2023.3/install-configure/cloudshell-suite/appendix/utilities-and-l1-drivers"}},o={},a=[];function c(e){const s={a:"a",code:"code",h1:"h1",header:"header",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"known-upgrade-issues",children:"Known Upgrade Issues"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Application"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"All"}),(0,n.jsx)(s.td,{children:"Although the CloudShell installer should leave all of your current configurations intact, it does overwrite your existing applications. This may inadvertently affect some of your current settings. It is therefore imperative to back up your databases before upgrading."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TestShell API"}),(0,n.jsxs)(s.td,{children:["Updating drivers using TestShell API assets:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"After upgrading to CloudShell, you need to manually update the TestShell API asset in Authoring, and then recompile any drivers using the API methods."}),(0,n.jsx)("li",{children:"Drivers using the API to update values in the Quali Server only require updating of the asset."})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Check in all libraries prior to upgrading"}),(0,n.jsx)(s.td,{children:"Verify that all the libraries are checked in. Checked out libraries are indicated by a different color icon. The parent folder also indicates if the folder contains a checked-out library."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"All"}),(0,n.jsxs)(s.td,{children:["Upgrading to any newer CloudShell version is supported from any GA or patch version starting with 6.x GA.",(0,n.jsx)("br",{}),"If you need to upgrade from an earlier version, contact ",(0,n.jsx)(s.a,{href:"https://support.quali.com/hc/en-us",children:"Quali Support"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," Patches must be installed on\xa0GA\xa0versions only. Installing a patch on a non-GA version will result in unexpected behavior which may corrupt the database."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"All"}),(0,n.jsx)(s.td,{children:"Real-time virus protection may affect performance."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"All"}),(0,n.jsxs)(s.td,{children:["CloudShell upgrade overrides custom configuration files, including ",(0,n.jsx)(s.code,{children:"customer.config"}),", ",(0,n.jsx)(s.code,{children:"webconfig.xml"}),", ",(0,n.jsx)(s.code,{children:"Quali.vbs"}),", ",(0,n.jsx)(s.code,{children:"WebPortal.vbs"}),", ",(0,n.jsx)(s.code,{children:"httpd.conf"})," and ",(0,n.jsx)(s.code,{children:"LanguagePortal.Override.xml"}),". Therefore, copies of the latest files need to be saved and applied after upgrade."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Insight"}),(0,n.jsxs)(s.td,{children:["When upgrading Insight to a version that includes new dashboards and widgets, these new areas will be empty initially and populate with data over time. For example, when upgrading to Insight 2021.2, the following widgets will be affected:",(0,n.jsx)("br",{}),"New ",(0,n.jsx)(s.strong,{children:"Users"})," dashboard widgets:",(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"Logged in users"})}),"New ",(0,n.jsx)(s.strong,{children:"Sandboxes"})," dashboard widgets:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Denied sandboxes"}),(0,n.jsx)("li",{children:"Activated sandboxes with setup failed"})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>d});var n=i(96540);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);