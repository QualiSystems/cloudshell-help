"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85527],{40691:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=r(74848),i=r(28453);const o={},t="Adding and Configuring Resources",d={id:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index",title:"Adding and Configuring Resources",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/versioned_docs/version-2024.1/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources",slug:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/",permalink:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/index.md",tags:[],version:"2024.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining the Resource Structure",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure"},next:{title:"Adding and Configuring Resources in Resource Manager",permalink:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager"}},a={},l=[{value:"Adding and configuring resources in Resource Explorer",id:"adding-and-configuring-resources-in-resource-explorer",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"adding-and-configuring-resources",children:"Adding and Configuring Resources"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,s.jsx)(n.a,{href:"/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"In Resource Manager Client, you can manually add and configure resources. This includes setting up the resource's data model, structure including sub-resources, associating a driver that provides automation commands to be executed on the resource in CloudShell, and associating domains to the resource to allow the domain's users to access and use it."}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-configuring-resources-in-resource-explorer",children:"Adding and configuring resources in Resource Explorer"}),"\n",(0,s.jsxs)(n.p,{children:["Each resource in the ",(0,s.jsx)(n.strong,{children:"Resource Explorer"})," pane represents a resource, including the resource's model, address, internal resources such as ports, internal port mappings, and other settings."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To add or modify resources in Resource Explorer:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Define the relevant resource data model. For more details, see ",(0,s.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model",children:"Defining the Resource Data Model"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create the resources, associate the relevant attributes, and create the relevant resource connections. See ",(0,s.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager",children:"Adding and Configuring Resources in Resource Manager"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are populating your CloudShell inventory for the first time, we recommend to use the CloudShell Autodiscovery tool, which allows you to load multiple resources at the same time. For additional information, see the tool's ",(0,s.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-autodiscovery/blob/master/README.md",children:"readme"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Associate the required resource driver. See ",(0,s.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/associating-a-driver-with-a-resource",children:"Associating a Driver with a Resource"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Associate the resource to the required domains. See ",(0,s.jsx)(n.a,{href:"/admin/cloudshell-identity-management/cloudshell-domains/addingremoving-resources-from-a-domain",children:"Adding/Removing Resources from a Domain"})," ."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/portal/blueprints/creating-blueprints/import-package",children:"Import a Blueprint Package into CloudShell"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);