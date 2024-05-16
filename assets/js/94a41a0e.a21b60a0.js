"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[48216],{10672:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=l(17624),s=l(4552);const r={sidebar_position:1},t="Upgrading the CloudShell HA Plugin",o={id:"install-configure/ha-installation/maintenance-of-ha-plugin/upgrada-cs-ha-plugin",title:"Upgrading the CloudShell HA Plugin",description:"This section describes the required steps to upgrade the Quali server clustering environment to a new version of CloudShell.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/maintenance-of-ha-plugin/upgrada-cs-ha-plugin.md",sourceDirName:"install-configure/ha-installation/maintenance-of-ha-plugin",slug:"/install-configure/ha-installation/maintenance-of-ha-plugin/upgrada-cs-ha-plugin",permalink:"/cloudshell-help/install-configure/ha-installation/maintenance-of-ha-plugin/upgrada-cs-ha-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/maintenance-of-ha-plugin/upgrada-cs-ha-plugin.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Maintenance of the HA Plugin",permalink:"/cloudshell-help/install-configure/ha-installation/maintenance-of-ha-plugin/"},next:{title:"Moving a WSFC Role between Nodes",permalink:"/cloudshell-help/install-configure/ha-installation/maintenance-of-ha-plugin/move-wsfc-role-between-nodes"}},a={},c=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"upgrading-the-cloudshell-ha-plugin",children:"Upgrading the CloudShell HA Plugin"}),"\n",(0,i.jsx)(n.p,{children:"This section describes the required steps to upgrade the Quali server clustering environment to a new version of CloudShell."}),"\n",(0,i.jsxs)(n.p,{children:["Repeat the following procedure for each ",(0,i.jsx)(n.strong,{children:"Quali Server"})," node in the Quali server clustering environment."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Do not perform this procedure in parallel. Upgrade each node separately."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To upgrade CloudShell:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Windows Failover Cluster Manager, right-click the ",(0,i.jsx)(n.strong,{children:"Quali Server"})," role and select ",(0,i.jsx)(n.strong,{children:"Stop Role"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:l(41640).c+"",width:"354",height:"128"})}),"\n",(0,i.jsx)(n.p,{children:"When the role stops, a Java process starts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"Task Manager"}),", close all ",(0,i.jsx)(n.strong,{children:"java.exe"})," processes (do this in all of the nodes in the cluster)."]}),"\n",(0,i.jsxs)(n.p,{children:["If several Java processes are running, close the ",(0,i.jsx)(n.strong,{children:"java.exe"})," process that is running from the Quali server folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On each node, remove the ",(0,i.jsx)(n.code,{children:"FtsReplicasShards"})," key from the Server installation directory (usually at ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Override the Quali HA folder with the new package:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the latest official ",(0,i.jsx)(n.strong,{children:"CloudShell High Availability Solution Pack"})," zip package from ",(0,i.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"CloudShell Download Center"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Extract the package and replace the current CloudShell High Availability folder with the extracted folder."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Perform the following steps for each node (do not perform this procedure in parallel, upgrade each node separately):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the new version of CloudShell."}),"\n",(0,i.jsxs)(n.li,{children:["Run the server ",(0,i.jsx)(n.strong,{children:"Quali Server Configuration"})," wizard."]}),"\n",(0,i.jsxs)(n.li,{children:["Stop the ",(0,i.jsx)(n.strong,{children:"Quali Server"})," service and change it to ",(0,i.jsx)(n.strong,{children:"Manual"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Start the ",(0,i.jsx)(n.strong,{children:"Quali Server"})," service, ensuring that the service starts successfully."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Windows Failover Cluster Manager, right-click the ",(0,i.jsx)(n.strong,{children:"Quali Server"})," node and in the context menu click ",(0,i.jsx)(n.strong,{children:"Start Role"})," to start the Cluster Quali Server Role."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Move the role between all nodes \u2013 see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/ha-installation/maintenance-of-ha-plugin/move-wsfc-role-between-nodes",children:"Moving a WSFC Role between Nodes"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},41640:(e,n,l)=>{l.d(n,{c:()=>i});const i=l.p+"assets/images/Upgrading-CloudShell-from_354x128-32858b6836f0e563020a7dee14d448b8.png"},4552:(e,n,l)=>{l.d(n,{I:()=>o,M:()=>t});var i=l(11504);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);