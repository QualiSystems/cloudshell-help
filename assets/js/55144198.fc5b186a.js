"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[22572],{52412:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(17624),r=i(4552);const s={sidebar_position:2},a="Set the Same Certificate on all Quali Server Nodes",l={id:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate",title:"Set the Same Certificate on all Quali Server Nodes",description:"In High Availability environments, all Quali Servers must use the same certificate to communicate with the same execution servers. Therefore, you must copy the certificate file from the first Quali Server cluster node (active Quali server node) and paste it in the same path on the other Quali Server cluster node(s) (the backup nodes).",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure Quali Server on the First Cluster Node",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/config-quali-server-on-first-node"},next:{title:"Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups"}},o={},c=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-the-same-certificate-on-all-quali-server-nodes",children:"Set the Same Certificate on all Quali Server Nodes"}),"\n",(0,t.jsx)(n.p,{children:"In High Availability environments, all Quali Servers must use the same certificate to communicate with the same execution servers. Therefore, you must copy the certificate file from the first Quali Server cluster node (active Quali server node) and paste it in the same path on the other Quali Server cluster node(s) (the backup nodes)."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If you have already performed these steps, skip to the next topic."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To set the same certificate on all nodes:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Schedule a maintenance window for your CloudShell (HA) services."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The steps that follow can be performed while Quali server is active. There is no need to shutdown the cluster during this maintenance window. Note that a failover will be required during this process, and service may be interrupted."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the active Quali Server node, copy the certificate from: ",(0,t.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\certificate"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Paste the copied certificate on all Quali Server cluster nodes in the following location: ",(0,t.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify the change by simulating a failover in the cluster:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open CloudShell Portal\u2019s ",(0,t.jsx)(n.strong,{children:"Manage"})," dashboard, in the ",(0,t.jsx)(n.strong,{children:"Servers"})," page, ensure that each execution server\u2019s ",(0,t.jsx)(n.strong,{children:"Connection"})," status is ",(0,t.jsx)(n.strong,{children:"Online"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Initiate a failover, by moving the Quali Server role from the active node to another, see ",(0,t.jsx)(n.a,{href:"/install-configure/ha-installation/maintenance-of-ha-plugin/move-wsfc-role-between-nodes",children:"Moving a WSFC Role between Nodes"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In CloudShell Portal\u2019s ",(0,t.jsx)(n.strong,{children:"Manage"})," dashboard, in the Servers page, ensure that each execution server\u2019s ",(0,t.jsx)(n.strong,{children:"Status"})," remains ",(0,t.jsx)(n.strong,{children:"Included"})," and ",(0,t.jsx)(n.strong,{children:"Connection"})," remains ",(0,t.jsx)(n.strong,{children:"Online"}),". For additional information, see ",(0,t.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page",children:"Execution Servers - Executions Page"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat step 4 for each Quali Server node in the cluster."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service on the node you are currently interacting with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop the ",(0,t.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>a});var t=i(11504);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);