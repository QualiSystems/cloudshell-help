"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[66532],{55148:(t,A,e)=>{e.r(A),e.d(A,{assets:()=>v,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>f,toc:()=>i});var r=e(17624),a=e(4552);const n={sidebar_position:5},l="Activating Quali Server Setup on All Nodes",f={id:"install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes",title:"Activating Quali Server Setup on All Nodes",description:"Use Windows Failover Cluster Manager to move between all nodes.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server",slug:"/install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes",permalink:"/install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creating a Configuration Role for Quali Server",permalink:"/install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server"},next:{title:"Configuring CloudShell Components to the Quali Server Role Address",permalink:"/install-configure/ha-installation/install-configure-cs-server/config-cs-components-to-quali-server-role"}},v={},i=[];function o(t){const A={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.M)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.h1,{id:"activating-quali-server-setup-on-all-nodes",children:"Activating Quali Server Setup on All Nodes"}),"\n",(0,r.jsx)(A.p,{children:"Use Windows Failover Cluster Manager to move between all nodes."}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.strong,{children:"To activate Quali server setup in all nodes:"})}),"\n",(0,r.jsxs)(A.ol,{children:["\n",(0,r.jsxs)(A.li,{children:["\n",(0,r.jsx)(A.p,{children:"Open Windows Failover Cluster Manager."}),"\n"]}),"\n",(0,r.jsxs)(A.li,{children:["\n",(0,r.jsxs)(A.p,{children:["Right-click ",(0,r.jsx)(A.strong,{children:"Move"})," and select ",(0,r.jsx)(A.strong,{children:"Select Node"}),"."]}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:e(14228).c+"",width:"375",height:"97"})}),"\n"]}),"\n",(0,r.jsxs)(A.li,{children:["\n",(0,r.jsx)(A.p,{children:"Browse to the required node and move the role to it."}),"\n"]}),"\n",(0,r.jsxs)(A.li,{children:["\n",(0,r.jsx)(A.p,{children:"Repeat steps 2 and 3 for all the nodes in the cluster."}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:e(28180).c+"",width:"375",height:"189"})}),"\n"]}),"\n"]})]})}function s(t={}){const{wrapper:A}={...(0,a.M)(),...t.components};return A?(0,r.jsx)(A,{...t,children:(0,r.jsx)(o,{...t})}):o(t)}},14228:(t,A,e)=>{e.d(A,{c:()=>r});const r="data:image/jpeg;base64,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"},28180:(t,A,e)=>{e.d(A,{c:()=>r});const r=e.p+"assets/images/Activating-Quali-server-setup_1_375x189-55ed2e24a85ea4cbc170e2a3e70622d6.jpg"},4552:(t,A,e)=>{e.d(A,{I:()=>f,M:()=>l});var r=e(11504);const a={},n=r.createContext(a);function l(t){const A=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(A):{...A,...t}}),[A,t])}function f(t){let A;return A=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:l(t.components),r.createElement(n.Provider,{value:A},t.children)}}}]);