"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[24304],{56784:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>t,contentTitle:()=>h,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>r});var s=i(17624),n=i(4552);const d={},h="Developing Shells",o={id:"devguide/developing-shells/index",title:"Developing Shells",description:"Developers can extend CloudShell\u2019s capabilities to provide additional functionality for Apps or physical devices by creating Shells. This includes better modeling for these components as well as custom commands that can be used in the sandbox to integrate the component in CloudShell. This area of the guide covers the end-to-end flow of creating new Shells and importing them into CloudShell.",source:"@site/versioned_docs/version-2023.3/devguide/developing-shells/index.md",sourceDirName:"devguide/developing-shells",slug:"/devguide/developing-shells/",permalink:"/cloudshell-help/devguide/developing-shells/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/developing-shells/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up the Development Environment",permalink:"/cloudshell-help/devguide/setting-up-dev-env"},next:{title:"Getting Started with Shell Development",permalink:"/cloudshell-help/devguide/developing-shells/getting-started"}},t={},r=[{value:"In this chapter",id:"in-this-chapter",level:2}];function c(e){const l={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"developing-shells",children:"Developing Shells"}),"\n",(0,s.jsx)(l.p,{children:"Developers can extend CloudShell\u2019s capabilities to provide additional functionality for Apps or physical devices by creating Shells. This includes better modeling for these components as well as custom commands that can be used in the sandbox to integrate the component in CloudShell. This area of the guide covers the end-to-end flow of creating new Shells and importing them into CloudShell."}),"\n",(0,s.jsx)(l.h2,{id:"in-this-chapter",children:"In this chapter"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/shell-drivers-overview",children:"Shell Drivers Overview"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/the-shell-project-guide",children:"The Shell Project Guide"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/modeling-shells-with-tosca",children:"Modeling Shells with TOSCA"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/managing-the-shell-data-mode",children:"Managing the Shell\u2019s Data Model"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/how-shells-get-info-from-cs",children:"How Shells Get Information from CloudShell"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/commands-visibility-and-usability",children:"Commands Visibility and Usability"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/driver-deep-dive",children:"Driver Deep Dive"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/auto-discovery-for-inventory-shells",children:"Auto-discovery for Inventory Shells"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/discover-inv-using-snmp",children:"Discovering Inventory using SNMP"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/debug-shell-driver-commands",children:"Debugging Shell Driver Commands"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/deploy-to-prod",children:"Deploying to Production"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/customize-shells",children:"Customizing Shells"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/override-old-shell-attributes",children:"Overriding Old/Deprecated Shell Attributes"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/common-driver-recipes",children:"Common Driver Recipes"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/tips-and-tricks-for-shells",children:"Tips and Tricks for Shells"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/share-shell-with-comminity",children:"Sharing a Shell with the Community"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"/cloudshell-help/devguide/developing-shells/first-gen-shells",children:"1st Gen Shells"})}),"\n"]})]})}function a(e={}){const{wrapper:l}={...(0,n.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,l,i)=>{i.d(l,{I:()=>o,M:()=>h});var s=i(11504);const n={},d=s.createContext(n);function h(e){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);