"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[90848],{64064:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(17624),n=o(4552);const r={},i="Resource Data Modeling (for 1st Gen Shells)",a={id:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/index",title:"Resource Data Modeling (for 1st Gen Shells)",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/index.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells",slug:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/index.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inventory Operations",permalink:"/admin/setting-up-cloudshell/inventory-operations/"},next:{title:"Defining the Resource Data Model",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model"}},l={},d=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"resource-data-modeling-for-1st-gen-shells",children:"Resource Data Modeling (for 1st Gen Shells)"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,s.jsx)(t.a,{href:"/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Every resource in the resource repository inherits a collection of properties and behaviors from the data model on which it is based."}),"\n",(0,s.jsx)(t.p,{children:"For example, the resource data model describes which attributes and drivers to associate with each type of resource. Initial, default and runtime attribute values are determined by the parent family and model."}),"\n",(0,s.jsx)(t.p,{children:"Even if you choose to set up the resource data model and populate the resource repository automatically, it's important to understand the process in case you choose to customize the default settings and values. If you assign new attributes or modify the attribute values of a resource family or model, the updated properties will be applied to both new and existing resources."}),"\n",(0,s.jsx)(t.p,{children:"Defining the resource data model affects the whole system, including how resources are searched for, how abstract resources are created, how they're saved in the database and more."}),"\n",(0,s.jsx)(t.p,{children:"The resource data model and attributes should be standardized across the company therefore should get a proper design and review procedure prior to deployment."}),"\n",(0,s.jsx)(t.p,{children:"There are two ways to define the resource data model: importing or manually creating them. In practice, defining the data model usually requires a mix of both methods."}),"\n",(0,s.jsxs)(t.p,{children:["Importing data modeling populates Resource Manager with pre-defined resource families, models and structures. You can import updated definitions by launching the configuration wizard, or by importing xml configuration files via the Resource Families tree. For additional information, see ",(0,s.jsx)(t.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates",children:"Importing/Exporting Resource Family Updates"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You can use these configuration files to add new resource families, associated models, attributes and their complete structure, or to update existing family and model definitions for the current resource structure."}),"\n",(0,s.jsx)(t.p,{children:"Importing data modeling is a good starting point for setting up your resource data model, as it sets up common resource data models and configurations."}),"\n",(0,s.jsx)(t.p,{children:"However, it wasn't designed to cover every possible device brand and version. If you need additional resource data models, you can add them manually. You may want to customize the default properties for imported resource families and models. The available options are extensive."}),"\n",(0,s.jsx)(t.p,{children:"When you add a new resource family manually, in addition to defining its properties, you'll need to add associated models and structure manually. You can add new resource models to an existing resource family, or to one that you create."})]})}function c(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>i});var s=o(11504);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);