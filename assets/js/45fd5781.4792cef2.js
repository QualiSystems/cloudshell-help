"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46065],{82222:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=t(74848),r=t(28453);const i={sidebar_position:4},o="Defining the Resource Structure",l={id:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure",title:"Defining the Resource Structure",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/versioned_docs/version-2024.1/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells",slug:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-structure.md",tags:[],version:"2024.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Importing/Exporting Resource Family Updates",permalink:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/importingexporting-resource-family-updates"},next:{title:"Adding and Configuring Resources",permalink:"/admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/"}},c={},a=[];function d(e){const s={a:"a",admonition:"admonition",br:"br",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"defining-the-resource-structure",children:"Defining the Resource Structure"})}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,n.jsx)(s.a,{href:"/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,n.jsx)(s.p,{children:"If the device you are modeling has sub-resources, such as ports or jacks, you can associate the resource model of the device with the models of its sub-resources. This enables you to add sub-resources that are based on the associated models to the resource you are creating."}),"\n",(0,n.jsx)(s.p,{children:"The resource structure is created automatically for any imported resource definitions."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"AutoLoad"})," process enables you to quickly create or update the internal resource structure of a resource to that of the physical device, For more information, see ",(0,n.jsx)(s.a,{href:"/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities",children:"Inventory Drivers and Utilities"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"To define the resource model structure"}),":"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click the Admin tab's ",(0,n.jsx)(s.strong,{children:"Resource Structure"})," icon to open ",(0,n.jsx)(s.strong,{children:"Resource Structure"}),".",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:t(93702).A+"",width:"575",height:"143"})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Resource Structure"})," consists of two panes."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(99666).A+"",width:"495",height:"304"})}),"\n",(0,n.jsx)(s.p,{children:"The left pane displays the current data model hierarchy."}),"\n",(0,n.jsx)(s.p,{children:"The right pane available models for the selected resource family."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Choose the relevant family from the left panel and mark the model you would like to build."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Select any models that you wish to add to the resource structure and click ",(0,n.jsx)(s.strong,{children:"Add"}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Example structure:",type:"important",children:(0,n.jsxs)(s.p,{children:["OnPath Switch 3912 (Part of L1 Switch Family)",(0,n.jsx)(s.br,{}),"\n","S-Blade\xa0(Part of L1 switch blade family)",(0,n.jsx)(s.br,{}),"\n","Port S-Blade (Part of L1 switch port family)"]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},93702:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/DefineReStruct-ab502e4d0c3a77d26ef9df7e3fee982e.png"},99666:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/DefineReStruct_1-0c4db8b5422d76ee3275f61b5002bcc6.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var n=t(96540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);