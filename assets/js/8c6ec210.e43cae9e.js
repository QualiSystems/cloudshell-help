"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69548],{37308:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>P,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var f=i(17624),n=i(4552);const t={sidebar_position:4},r="Creating a Configuration Role for Quali Server",l={id:"install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server",title:"Creating a Configuration Role for Quali Server",description:"Preparing the nodes",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server",slug:"/install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server",permalink:"/cloudshell-help/install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/create-config-role-for-quali-server.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configure the Remaining Cluster Nodes",permalink:"/cloudshell-help/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-remaining-cluster-nodes"},next:{title:"Activating Quali Server Setup on All Nodes",permalink:"/cloudshell-help/install-configure/ha-installation/install-configure-cs-server/activate-quali-server-on-all-nodes"}},o={},a=[{value:"Preparing the nodes",id:"preparing-the-nodes",level:2},{value:"Creating a configuration role",id:"creating-a-configuration-role",level:2}];function s(A){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...A.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(e.h1,{id:"creating-a-configuration-role-for-quali-server",children:"Creating a Configuration Role for Quali Server"}),"\n",(0,f.jsx)(e.h2,{id:"preparing-the-nodes",children:"Preparing the nodes"}),"\n",(0,f.jsxs)(e.ol,{children:["\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsx)(e.p,{children:"Run the following on each Quali Server node:"}),"\n",(0,f.jsxs)(e.ul,{children:["\n",(0,f.jsx)(e.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\Functions.ps1"}),"\n",(0,f.jsx)(e.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServer.ps1"}),"\n",(0,f.jsx)(e.li,{children:"Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServerCommonFunctions.ps1"}),"\n"]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["To enable PowerShell commands, add ",(0,f.jsx)(e.strong,{children:"Dword Enable"})," in registry key:"]}),"\n",(0,f.jsx)(e.p,{children:(0,f.jsx)(e.strong,{children:"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows Script Host\\Settings"})}),"\n"]}),"\n"]}),"\n",(0,f.jsx)(e.h2,{id:"creating-a-configuration-role",children:"Creating a configuration role"}),"\n",(0,f.jsxs)(e.ol,{children:["\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Make sure the ",(0,f.jsx)(e.strong,{children:"Quali Server"})," service is stopped on all Quali Server nodes."]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Open ",(0,f.jsx)(e.strong,{children:"Windows Failover Cluster Manager"}),"."]}),"\n",(0,f.jsx)(e.p,{children:(0,f.jsx)(e.img,{src:i(10920).c+"",width:"161",height:"117"})}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Right-click ",(0,f.jsx)(e.strong,{children:"Roles"}),"."]}),"\n",(0,f.jsx)(e.p,{children:(0,f.jsx)(e.img,{src:i(89692).c+"",width:"217",height:"172"})}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Select ",(0,f.jsx)(e.strong,{children:"Configure Role"}),"."]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Click ",(0,f.jsx)(e.strong,{children:"Next"}),", select the ",(0,f.jsx)(e.strong,{children:"Generic Script"})," option, then click ",(0,f.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Enter the path to the ",(0,f.jsx)(e.code,{children:"Quali.vbs"})," file (for example: ",(0,f.jsx)(e.code,{children:"c:\\Quali\\QualiServer\\Quali.vbs"}),")."]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Enter a name for the role and click ",(0,f.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,f.jsxs)(e.li,{children:["\n",(0,f.jsxs)(e.p,{children:["Click ",(0,f.jsx)(e.strong,{children:"Next"})," to complete the wizard."]}),"\n",(0,f.jsx)(e.p,{children:"This creates a new role that starts to run. This role uses the PS1 files to operate Quali server and elasticsearch during cluster events."}),"\n",(0,f.jsx)(e.p,{children:(0,f.jsx)(e.img,{src:i(49820).c+"",width:"399",height:"68"})}),"\n",(0,f.jsx)(e.admonition,{type:"tip",children:(0,f.jsxs)(e.p,{children:["If the role fails to start with an \u201cincorrect function\u201d error, see ",(0,f.jsx)(e.a,{href:"/cloudshell-help/troubleshooting/installation/powershell-execution-policy-high-availability",children:"CloudShell Troubleshooting"}),"."]})}),"\n"]}),"\n"]})]})}function P(A={}){const{wrapper:e}={...(0,n.M)(),...A.components};return e?(0,f.jsx)(e,{...A,children:(0,f.jsx)(s,{...A})}):s(A)}},49820:(A,e,i)=>{i.d(e,{c:()=>f});const f="data:image/jpeg;base64,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"},10920:(A,e,i)=>{i.d(e,{c:()=>f});const f="data:image/jpeg;base64,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"},89692:(A,e,i)=>{i.d(e,{c:()=>f});const f=i.p+"assets/images/Creating-a-Configuration-Role_217x172-7f4c6e87a93c4fcf0b10e5a257a395de.png"},4552:(A,e,i)=>{i.d(e,{I:()=>l,M:()=>r});var f=i(11504);const n={},t=f.createContext(n);function r(A){const e=f.useContext(t);return f.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(n):A.components||n:r(A.components),f.createElement(t.Provider,{value:e},A.children)}}}]);