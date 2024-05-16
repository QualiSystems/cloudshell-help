"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75116],{15020:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(17624),a=i(4552);const s={sidebar_position:3},r="Glossary",l={id:"install-configure/ha-installation/appendix/glossary",title:"Glossary",description:"Terms used in this guide are described in the following table.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/appendix/glossary.md",sourceDirName:"install-configure/ha-installation/appendix",slug:"/install-configure/ha-installation/appendix/glossary",permalink:"/install-configure/ha-installation/appendix/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/appendix/glossary.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/install-configure/ha-installation/appendix/documentation"},next:{title:"CloudShell SDK Installation",permalink:"/install-configure/cloudshell-sdk/"}},o={},d=[];function c(e){const t={h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"glossary",children:"Glossary"}),"\n",(0,n.jsx)(t.p,{children:"Terms used in this guide are described in the following table."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Term"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Active-Active"}),(0,n.jsx)(t.td,{children:"All nodes in the cluster are active. A load balancing algorithm/policy determines the preferred node for a given session. This is a more scalable architecture. However, it is more complex to manage."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Active-Passive"}),(0,n.jsx)(t.td,{children:"A fully redundant instance of each node is present. The passive node is brought online when its associated primary node fails."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Active-Standby"}),(0,n.jsx)(t.td,{children:"One node in the cluster is active. The other node is inactive until failover is triggered (warm standby)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AlwaysOn Availability Groups"}),(0,n.jsx)(t.td,{children:"A high-availability and disaster-recovery solution that provides an enterprise-level alternative to MSSQL database mirroring."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ARR"}),(0,n.jsx)(t.td,{children:"Active Request Routing. This is an IIS server native load balancing solution."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ARR Server Farm"}),(0,n.jsx)(t.td,{children:"A logical group of application servers where HTTP requests are routed based on HTTP inspection rules and load balance algorithm."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Availability databases"}),(0,n.jsx)(t.td,{children:"A failover environment for a discrete set of user databases (an availability group) that fail over together."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Availability replica"}),(0,n.jsxs)(t.td,{children:["An instantiation of an availability group that is hosted by a specific instance of SQL Server and that maintains a local copy of each availability database that belongs to the availability group.",(0,n.jsx)("br",{}),"Two types of availability replicas exist: a single primary replica and one to four secondary replicas. The server instances that host the availability replicas for a given availability group must reside on different nodes of a single Windows Server Failover Clustering (WSFC) cluster."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"NLB"}),(0,n.jsx)(t.td,{children:"Network Load Balancing. Use the NLB Manager to create and manage NLB clusters from a single computer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SAN"}),(0,n.jsx)(t.td,{children:"Storage area network, dedicated network used to enhance storage devices. It is a high-speed network, providing a direct connection between servers and storage, including shared storage, clusters, and disaster-recovery devices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SPOF"}),(0,n.jsx)(t.td,{children:"Single Point of Failure."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Warm Upgrade"}),(0,n.jsx)(t.td,{children:"An administrator is able to upgrade one node of the cluster to a new version of CloudShell (Quali Server) while the other node is active, then fall back to the new node and upgrade the standby without any downtime for the end user."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Windows load balancing manager"}),(0,n.jsx)(t.td,{children:"Windows load balancing manager enables you to create and manage Network Load Balancing (NLB) clusters from a single computer. By centralizing NLB administration tasks, many common configuration errors are eliminated."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"WSFC"}),(0,n.jsx)(t.td,{children:"Windows Server Failover Clustering"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>r});var n=i(11504);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);