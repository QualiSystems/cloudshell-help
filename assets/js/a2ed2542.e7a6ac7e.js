"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56664],{62160:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var e=i(17624),t=i(4552);const r={sidebar_position:3},o="Configure Sisense SSO in CloudShell",l={id:"install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs",title:"Configure Sisense SSO in CloudShell",description:"SSO integration is a two-step process. First, you configure Sisense SSO in CloudShell and then you set up the Sisense SSO.",source:"@site/versioned_docs/version-2023.3/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs.md",sourceDirName:"install-configure/cs-insight-bi/insight-sso",slug:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs",permalink:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure Sisense to Work with SSO",permalink:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense"},next:{title:"Grant Insight Admin/Designer Privilege to CloudShell Users",permalink:"/install-configure/cs-insight-bi/insight-sso/grant-admin-privilege"}},c={},d=[];function h(n){const s={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"configure-sisense-sso-in-cloudshell",children:"Configure Sisense SSO in CloudShell"}),"\n",(0,e.jsx)(s.p,{children:"SSO integration is a two-step process. First, you configure Sisense SSO in CloudShell and then you set up the Sisense SSO."}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Prerequisites:"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsx)(s.li,{children:(0,e.jsx)(s.a,{href:"../install-insight/insight-configuration/grant-permissions",children:"Grant Data Security Permissions to ElastiCube Name"})}),"\n"]}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"To set up Sisense SSO in CloudShell:"})}),"\n",(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Log into CloudShell Portal as administrator."}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Manage>Integrations>Sisense Settings"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Do the following:"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["For legacy dashboards, set ",(0,e.jsx)(s.strong,{children:"Integration Type"})," to ",(0,e.jsx)(s.strong,{children:"Legacy"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"For new dashboards (dashboards provided for CloudShell 2021.2 and up), specify the following:"}),"\n",(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Set ",(0,e.jsx)(s.strong,{children:"Integration Type"})," = ",(0,e.jsx)(s.strong,{children:"New"})]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Specify the ",(0,e.jsx)(s.strong,{children:"BI\xa0Host Address"})," hostname or IP\xa0address in the format ",(0,e.jsx)(s.code,{children:"https://x.x.x.x:443"}),"."]}),"\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Test Connection"})," to verify connectivity to the BI host."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Sisense Admin credentials:"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["Sisense administrator ",(0,e.jsx)(s.strong,{children:"User Name"})," and ",(0,e.jsx)(s.strong,{children:"Password"})]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Admin token"}),": Click ",(0,e.jsx)(s.strong,{children:"Generate"})," (Click ",(0,e.jsx)(s.strong,{children:"Revoke"})," to prevent users from accessing Insight)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click ",(0,e.jsx)(s.strong,{children:"Submit"}),"."]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:s}={...(0,t.M)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(h,{...n})}):h(n)}},4552:(n,s,i)=>{i.d(s,{I:()=>l,M:()=>o});var e=i(11504);const t={},r=e.createContext(t);function o(n){const s=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),e.createElement(r.Provider,{value:s},n.children)}}}]);