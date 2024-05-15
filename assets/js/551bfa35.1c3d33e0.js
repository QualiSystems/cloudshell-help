"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[62916],{1848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(17624),n=r(4552);const o={sidebar_position:2},a="Abstract Resources Overview",i={id:"intro/features/abstract-resources",title:"Abstract Resources Overview",description:"This article introduces abstract resources, their function in CloudShell and outlines how to configure them.",source:"@site/versioned_docs/version-2023.3/intro/features/abstract-resources.md",sourceDirName:"intro/features",slug:"/intro/features/abstract-resources",permalink:"/cloudshell-help/intro/features/abstract-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/abstract-resources.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Features and Benefits",permalink:"/cloudshell-help/intro/features/features-and-benefits"},next:{title:"Apps Overview",permalink:"/cloudshell-help/intro/features/apps-overview"}},c={},l=[{value:"What is an abstract resource?",id:"what-is-an-abstract-resource",level:2},{value:"What does an abstract resource include?",id:"what-does-an-abstract-resource-include",level:2},{value:"Related Topics",id:"related-topics",level:2}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"abstract-resources-overview",children:"Abstract Resources Overview"}),"\n",(0,s.jsx)(t.p,{children:"This article introduces abstract resources, their function in CloudShell and outlines how to configure them."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-an-abstract-resource",children:"What is an abstract resource?"}),"\n",(0,s.jsx)(t.p,{children:"An abstract resource is a component that allows CloudShell to add (to the sandbox) resources based on a set of requirements, such as resource model and/or specific attribute values. When reserving a blueprint that has an abstract resource, CloudShell will find resources that meet the resource requirements and are available for the time slot of the sandbox, and add them to the sandbox. You cannot add abstract resources directly to a sandbox, only to the blueprint. Blueprints can contain a mixture of abstract and specific resources."}),"\n",(0,s.jsx)(t.p,{children:"An abstract resource is represented on the diagram as a resource with a dotted circle around it. For example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(47928).c+"",width:"280",height:"109"})}),"\n",(0,s.jsx)(t.h2,{id:"what-does-an-abstract-resource-include",children:"What does an abstract resource include?"}),"\n",(0,s.jsx)(t.p,{children:"An abstract resource must include the family of the resource, and can optionally include the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Requirements:"})}),"\n",(0,s.jsx)(t.p,{children:"Requirements are the resource settings you need the desired resource to have. CloudShell will only select resources that fully match this criteria. You must select the resource family but you can include any combination of the rest of the requirements in your abstract resource."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"As you add or update your requirements, CloudShell updates the number of matching inventory resources in the top right corner of the abstract resource dialog box."})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Family (mandatory)"}),"\n",(0,s.jsx)(t.li,{children:"Quantity: number of resources to select"}),"\n",(0,s.jsx)(t.li,{children:"Sharing policy"}),"\n",(0,s.jsx)(t.li,{children:"Model: model or models within the selected family"}),"\n",(0,s.jsx)(t.li,{children:"Attribute values"}),"\n",(0,s.jsx)(t.li,{children:"Sub-resources: sub-resource settings, such as blades, ports, attribute values on each sub-resource"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Additional info:"})}),"\n",(0,s.jsx)(t.p,{children:"Additional info is information you can add to the abstract resource for automation processes and to make available for the sandbox end-user. For example, you may want to save the resource firmware version, which needs to be upgraded as part of the sandbox provisioning process. Another example could be referencing the image file location of the resource."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Attribute values"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Domains:"})}),"\n",(0,s.jsx)(t.p,{children:"The domains in which this abstract resource can be used. By default, the current domain is selected and cannot be removed from the abstract resource."}),"\n",(0,s.jsxs)(t.p,{children:["For additional information about Requirements, Additional info and Domains, see ",(0,s.jsx)(t.a,{href:"/cloudshell-help/portal/inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings",children:"Abstract Resource Settings"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/abstract-resources",children:"Add Abstract Resources"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},47928:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/Abstract-Resource-1-1dd03f42c15bdc200c17a299d325452f.png"},4552:(e,t,r)=>{r.d(t,{I:()=>i,M:()=>a});var s=r(11504);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);