"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46718],{64232:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=o(74848),n=o(28453);const r={sidebar_position:10},i="VM is not Powered on at the Start of a Reservation",l={id:"troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation",title:"VM is not Powered on at the Start of a Reservation",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation",permalink:"/2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Empty Resource/App Catalogs",permalink:"/2023.3/troubleshooting/cloudshell-portal/empty-resourceapp-catalogs"},next:{title:"VM is not Powered off at the End of a Reservation",permalink:"/2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"vm-is-not-powered-on-at-the-start-of-a-reservation",children:"VM is not Powered on at the Start of a Reservation"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"When starting the sandbox, the setup orchestration doesn't automatically power on the VM."}),"\n",(0,s.jsx)(t.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Your VM is a static VM."}),"\n",(0,s.jsx)(t.p,{children:"You can load a VM that exists in a vCenter Server (i.e. a static VM) into CloudShell, allowing CloudShell users to interact with it. Static VMs behave differently from Apps, whose VMs are deployed and powered on by CloudShell. Static VMs are always online because they are commonly used as shared resources and therefore CloudShell's default setup script does not deploy and power them on automatically when the sandbox is reserved. However, if the static VM is powered off, you will need to manually power it on in the sandbox."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Your sandbox's blueprint is not configured to deploy App VMs."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To power on a static VM:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the sandbox, hover over the static VM and select ",(0,s.jsx)(t.strong,{children:"Commands"})," from the context menu."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Commands"})," pane, click ",(0,s.jsx)(t.strong,{children:"Deploy"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To configure your blueprint to deploy App VMs:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Configure your ",(0,s.jsx)(t.strong,{children:"Setup"})," script to deploy Apps, see ",(0,s.jsx)(t.a,{href:"/2023.3/portal/blueprints/creating-blueprints/configure-orchestration#use-scripts-to-set-up-and-tear-down-blueprints",children:"Use scripts to set up and tear down blueprints"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/2023.3/intro/features/static-vms",children:"Static VMs Overview"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var s=o(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);