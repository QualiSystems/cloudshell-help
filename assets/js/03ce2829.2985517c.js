"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5497],{34803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),o=t(28453);const r={sidebar_position:1},s="Virtual Network Connectivity Prerequisites",a={id:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",title:"Virtual Network Connectivity Prerequisites",description:"The following configurations are required in order to enable connections using VLAN services.",source:"@site/versioned_docs/version-2024.1/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq.md",tags:[],version:"2024.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Virtual Network Connectivity",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/"},next:{title:"View Virtual Network Connectivity Requirements",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/view-virtual-net-connectivity-req"}},d={},c=[{value:"Set up virtual network services",id:"set-up-virtual-network-services",level:2},{value:"Define the deployed App families and models",id:"define-the-deployed-app-families-and-models",level:2},{value:"Related Topics",id:"related-topics",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"virtual-network-connectivity-prerequisites",children:"Virtual Network Connectivity Prerequisites"})}),"\n",(0,i.jsx)(n.p,{children:"The following configurations are required in order to enable connections using VLAN services."}),"\n",(0,i.jsx)(n.h2,{id:"set-up-virtual-network-services",children:"Set up virtual network services"}),"\n",(0,i.jsx)(n.p,{children:"For connectivity, Apps and deployed Apps require a VLAN or Subnet service, which knows how to resolve the virtual connections Apps use. VLAN services resolve L2 connections involving private cloud Apps and/or resources, such as vCenter, while Subnet services resolve connections between Apps on a public cloud, such as AWS EC2 and Azure. Therefore, before you start creating connectivity requirements involving Apps, make sure your virtual network services are properly set up. VLANs can also be used to connect physical resources."}),"\n",(0,i.jsxs)(n.p,{children:["For additional information, see ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"})," or ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"define-the-deployed-app-families-and-models",children:"Define the deployed App families and models"}),"\n",(0,i.jsxs)(n.p,{children:["Once deployed, Apps transform into resources that can have an IP address of the deployed virtual machine. Every deployed App resource inherits properties and behaviors from the data model of the Shell on which it is based. CloudShell provides the ",(0,i.jsx)(n.strong,{children:"Generic Deployed App"})," family and model, which you can use, but you can define your own families and models."]}),"\n",(0,i.jsxs)(n.p,{children:["For additional information, see ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",children:"Defining the Resource Data Model"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/intro/features/apps-overview",children:"Apps Overview"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);