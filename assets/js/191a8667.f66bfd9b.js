"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[40892],{76132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(17624),r=n(4552);const o={sidebar_position:1},s="Virtual Network Connectivity Prerequisites",l={id:"portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",title:"Virtual Network Connectivity Prerequisites",description:"The following configurations are required in order to enable connections using VLAN services.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq.md",sourceDirName:"portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network",slug:"/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/virtual-net-connectivity-prereq.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Virtual Network Connectivity",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/"},next:{title:"View Virtual Network Connectivity Requirements",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/add-connectivity/add-virtual-network/view-virtual-net-connectivity-req"}},a={},c=[{value:"Set up virtual network services",id:"set-up-virtual-network-services",level:2},{value:"Define the deployed App families and models",id:"define-the-deployed-app-families-and-models",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"virtual-network-connectivity-prerequisites",children:"Virtual Network Connectivity Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"The following configurations are required in order to enable connections using VLAN services."}),"\n",(0,i.jsx)(t.h2,{id:"set-up-virtual-network-services",children:"Set up virtual network services"}),"\n",(0,i.jsx)(t.p,{children:"For connectivity, Apps and deployed Apps require a VLAN or Subnet service, which knows how to resolve the virtual connections Apps use. VLAN services resolve L2 connections involving private cloud Apps and/or resources, such as vCenter, while Subnet services resolve connections between Apps on a public cloud, such as AWS EC2 and Azure. Therefore, before you start creating connectivity requirements involving Apps, make sure your virtual network services are properly set up. VLANs can also be used to connect physical resources."}),"\n",(0,i.jsxs)(t.p,{children:["For additional information, see ",(0,i.jsx)(t.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"})," or ",(0,i.jsx)(t.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"define-the-deployed-app-families-and-models",children:"Define the deployed App families and models"}),"\n",(0,i.jsxs)(t.p,{children:["Once deployed, Apps transform into resources that can have an IP address of the deployed virtual machine. Every deployed App resource inherits properties and behaviors from the data model of the Shell on which it is based. CloudShell provides the ",(0,i.jsx)(t.strong,{children:"Generic Deployed App"})," family and model, which you can use, but you can define your own families and models."]}),"\n",(0,i.jsxs)(t.p,{children:["For additional information, see ",(0,i.jsx)(t.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",children:"Defining the Resource Data Model"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/cloudshell-help/intro/features/apps-overview",children:"Apps Overview"})})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>s});var i=n(11504);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);