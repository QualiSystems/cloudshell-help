"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[26712],{13972:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=i(17624),r=i(4552);const s={sidebar_position:2},a="Architecture (High Availability)",l={id:"install-configure/ha-deployment/overview/architecture-ha",title:"Architecture (High Availability)",description:"This architecture describes a Quali-certified automatic failover solution for all core components of the application, without a Single Point of Failure (SPOF). Alternative solutions are described in each respective article.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-deployment/overview/architecture-ha.md",sourceDirName:"install-configure/ha-deployment/overview",slug:"/install-configure/ha-deployment/overview/architecture-ha",permalink:"/cloudshell-help/install-configure/ha-deployment/overview/architecture-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-deployment/overview/architecture-ha.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Guiding Principles",permalink:"/cloudshell-help/install-configure/ha-deployment/overview/guiding-principles"},next:{title:"Deployment Types (High Availability)",permalink:"/cloudshell-help/install-configure/ha-deployment/deployment-types-ha"}},c={},o=[];function d(e){const t={h1:"h1",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture-high-availability",children:"Architecture (High Availability)"}),"\n",(0,n.jsx)(t.p,{children:"This architecture describes a Quali-certified automatic failover solution for all core components of the application, without a Single Point of Failure (SPOF). Alternative solutions are described in each respective article."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Solution"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Quali App Server"}),(0,n.jsxs)(t.td,{children:["Quali Server service - Windows Server Clustering (active/passive)",(0,n.jsx)("br",{}),"QuickSearch - Windows Server Clustering (active/active)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"License server"}),(0,n.jsx)(t.td,{children:"Windows Server Clustering (active/standby)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Database Servers (SQL Server, MongoDB)"}),(0,n.jsx)(t.td,{children:"Windows Server Clustering (active/standby)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Web Server"}),(0,n.jsxs)(t.td,{children:["Basic, performance setup: Windows ARR load balancing (active/active)",(0,n.jsx)("br",{}),"Advanced setup: Windows ARR load balancing (active/active)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Execution Server"}),(0,n.jsx)(t.td,{children:"Natively supported by CloudShell (active/active)"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The following diagram depicts the main components of the CloudShell application for an advanced set up, as deployed in an end-to-end HA Plugin within which Web server, license server, execution server and Application server may be co-hosted on each node of the application cluster. Each component may fail over independently without impacting the integrity and user experience of the end user."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5592).c+"",width:"3677",height:"1870"})})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5592:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/Architecture-ffa1f38237e6e4648988dad1e083015f.png"},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>a});var n=i(11504);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);