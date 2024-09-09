"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84016],{60196:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(74848),l=i(28453);const o={},a="High Availability Deployment Overview",s={id:"install-configure/ha-deployment/overview/index",title:"High Availability Deployment Overview",description:"CloudShell High Availability is available for Premium accounts only.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-deployment/overview/index.md",sourceDirName:"install-configure/ha-deployment/overview",slug:"/install-configure/ha-deployment/overview/",permalink:"/2023.3/install-configure/ha-deployment/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-deployment/overview/index.md",tags:[],version:"2023.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"High Availability Deployment",permalink:"/2023.3/install-configure/ha-deployment/"},next:{title:"Guiding Principles",permalink:"/2023.3/install-configure/ha-deployment/overview/guiding-principles"}},r={},d=[{value:"Use Cases",id:"use-cases",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"high-availability-deployment-overview",children:"High Availability Deployment Overview"})}),"\n",(0,t.jsx)(n.p,{children:"CloudShell High Availability is available for Premium accounts only."}),"\n",(0,t.jsxs)(n.p,{children:["This document presents the recommended architecture for implementing CloudShell in a High Availability (HA) environment and should be read in conjunction with the ",(0,t.jsx)(n.a,{href:"/2023.3/install-configure/ha-installation/",children:"High Availability Installation and Configuration"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A failover cluster is a group of independent servers (nodes) that work together to increase the availability and scalability of clustered nodes. The clustered nodes are connected by physical cables and by software. If a disaster occurs and the active cluster node goes down, the clustering solution changes the active node automatically to the standby server and Quali server starts on the new active node."}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsx)(n.p,{children:"This document covers the following use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Planned downtime: scheduled by administrator. Used for maintenance purpose. The primary system is manually switched to the standby mode."}),"\n",(0,t.jsx)(n.li,{children:"Unplanned downtime: failure of one of the component in the system, automated failover."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const l={},o=t.createContext(l);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);