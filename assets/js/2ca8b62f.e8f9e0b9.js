"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[81040],{28464:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(17624),s=i(4552);const o={sidebar_position:9},l="Known Issues and Limitations (High Availability)",a={id:"install-configure/ha-installation/known-issues-and-limitations",title:"Known Issues and Limitations (High Availability)",description:"- CloudShell application warm upgrade is currently not supported.",source:"@site/docs/install-configure/ha-installation/known-issues-and-limitations.md",sourceDirName:"install-configure/ha-installation",slug:"/install-configure/ha-installation/known-issues-and-limitations",permalink:"/cloudshell-help/next/install-configure/ha-installation/known-issues-and-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/known-issues-and-limitations.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Upgrading to a New Version of CloudShell (with the latest HA Plugin)",permalink:"/cloudshell-help/next/install-configure/ha-installation/maintenance-of-ha-plugin/upgrade-cloudshell"},next:{title:"Appendix",permalink:"/cloudshell-help/next/category/appendix-2"}},r={},d=[];function c(n){const e={a:"a",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"known-issues-and-limitations-high-availability",children:"Known Issues and Limitations (High Availability)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"CloudShell application warm upgrade is currently not supported."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"The CloudShell BI solution is currently not supported in a high availability setup. It is possible to use CloudShell BI with CloudShell HA Plugin (version 6.3 EA and above)."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Where the NLB Manager is connected through a DHCP IP address, the network card must be connected to a static IP address."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"If the primary MongoDB node loses connection to both Quali Server and the other MongoDB nodes, there is a 10 second downtime. If the downtime period passes and the primary node is not back online, Mongo will elect a new primary."}),"\n",(0,t.jsxs)(e.p,{children:["The downtime period is configurable via the ",(0,t.jsx)(e.strong,{children:"settings.electionTimeoutMilli"})," replica set configuration field. For details, see Mongo docs: ",(0,t.jsx)(e.a,{href:"https://docs.mongodb.com/manual/reference/replica-configuration",children:"https://docs.mongodb.com/manual/reference/replica-configuration"})]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},4552:(n,e,i)=>{i.d(e,{I:()=>a,M:()=>l});var t=i(11504);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);