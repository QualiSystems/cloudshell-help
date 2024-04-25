"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41740],{47220:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(17624),i=s(4552);const o={},t="Adding and Configuring Resources",l={id:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index",title:"Adding and Configuring Resources",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/docs/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources",slug:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining the Resource Structure",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure"},next:{title:"Adding and Configuring Resources in Resource Manager",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager"}},d={},a=[{value:"Adding and configuring resources in Resource Explorer",id:"adding-and-configuring-resources-in-resource-explorer",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"adding-and-configuring-resources",children:"Adding and Configuring Resources"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,r.jsx)(n.a,{href:"../../../intro/features/shells.md",children:"Shells Overview"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"In Resource Manager Client, you can manually add and configure resources. This includes setting up the resource's data model, structure including sub-resources, associating a driver that provides automation commands to be executed on the resource in CloudShell, and associating domains to the resource to allow the domain's users to access and use it."}),"\n",(0,r.jsx)(n.h2,{id:"adding-and-configuring-resources-in-resource-explorer",children:"Adding and configuring resources in Resource Explorer"}),"\n",(0,r.jsxs)(n.p,{children:["Each resource in the ",(0,r.jsx)(n.strong,{children:"Resource Explorer"})," pane represents a resource, including the resource's model, address, internal resources such as ports, internal port mappings, and other settings."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To add or modify resources in Resource Explorer:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Define the relevant resource data model. For more details, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",children:"Defining the Resource Data Model"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the resources, associate the relevant attributes, and create the relevant resource connections. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager",children:"Adding and Configuring Resources in Resource Manager"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are populating your CloudShell inventory for the first time, we recommend to use the CloudShell Autodiscovery tool, which allows you to load multiple resources at the same time. For additional information, see the tool's ",(0,r.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-autodiscovery/blob/master/README.md",children:"readme"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Associate the required resource driver. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/associating-a-driver-with-a-resource",children:"Associating a Driver with a Resource"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Associate the resource to the required domains. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain",children:"Adding/Removing Resources from a Domain"})," ."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/import-package",children:"Import a Blueprint Package into CloudShell"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>t});var r=s(11504);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);