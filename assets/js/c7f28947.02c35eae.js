"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[45008],{25444:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var t=n(17624),o=n(4552);const l={sidebar_position:1},r="PowerShell Execution Policy (High Availability)",s={id:"troubleshooting/installation/powershell-execution-policy-high-availability",title:"PowerShell Execution Policy (High Availability)",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/powershell-execution-policy-high-availability.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/powershell-execution-policy-high-availability",permalink:"/cloudshell-help/troubleshooting/installation/powershell-execution-policy-high-availability",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/powershell-execution-policy-high-availability.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Migrate Sisense to a New Server",permalink:"/cloudshell-help/troubleshooting/insight/how-to-migrate-sisense-to-a-new-server"},next:{title:"Manual IIS Installation Error",permalink:"/cloudshell-help/troubleshooting/installation/manual-iis-installation-error"}},c={},h=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function a(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"powershell-execution-policy-high-availability",children:"PowerShell Execution Policy (High Availability)"}),"\n",(0,t.jsx)(i.h2,{id:"error-message",children:"Error Message"}),"\n",(0,t.jsx)(i.admonition,{type:"danger-one-line",children:(0,t.jsx)(i.p,{children:"Incorrect function"})}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"The\xa0Quali High Availability\xa0(HA) solution\xa0uses PowerShell code to manage the cluster."}),"\n",(0,t.jsx)(i.p,{children:"The error message occurs in an HA deployment where PowerShell scripts are used to manage the cluster."}),"\n",(0,t.jsxs)(i.p,{children:["If, after starting the\xa0Quali Server role from the ",(0,t.jsx)(i.strong,{children:"Windows Failover Cluster Manager"}),", the role fails with an \u2018incorrect function\u2019 error, run the steps below."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["This error can be found both in the ",(0,t.jsx)(i.strong,{children:"Windows Failover Cluster Manager"})," and in the Windows Event Viewer."]})}),"\n",(0,t.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Follow these steps to ensure that the execution policy is unrestricted on the machine where the code is executed:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Open ",(0,t.jsx)(i.strong,{children:"PowerShell"})," as Administrator."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Run the following command: ",(0,t.jsx)(i.code,{children:"Get-ExecutionPolicy"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The command should return the result: ",(0,t.jsx)(i.strong,{children:"Unrestricted"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If this result is not received, run the following command: ",(0,t.jsx)(i.code,{children:"Set-ExecutionPolicy Unrestricted"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the registry, make sure that the following key value is unrestricted:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\PowerShell\\1\\ShellIds\\Microsoft.PowerShell"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(81256).c+"",width:"907",height:"237"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Restart the ",(0,t.jsx)(i.strong,{children:"Quali Server"})," role."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you're still not getting the ",(0,t.jsx)(i.strong,{children:"Unrestricted"})," result, run:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},81256:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/PowerShell-Execution-Policy1-053145778f1ad2865a834c6f0360a856.png"},4552:(e,i,n)=>{n.d(i,{I:()=>s,M:()=>r});var t=n(11504);const o={},l=t.createContext(o);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);