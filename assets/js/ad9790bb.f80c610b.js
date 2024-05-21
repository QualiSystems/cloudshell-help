"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[18667],{8496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var l=n(17624),i=n(4552);const t={sidebar_position:11},r="Shells Overview",a={id:"intro/features/shells",title:"Shells Overview",description:"A shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check.",source:"@site/versioned_docs/version-2023.3/intro/features/shells.md",sourceDirName:"intro/features",slug:"/intro/features/shells",permalink:"/intro/features/shells",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/shells.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Services Overview",permalink:"/intro/features/services"},next:{title:"Static VMs Overview",permalink:"/intro/features/static-vms"}},o={},d=[{value:"Our shells",id:"our-shells",level:2},{value:"How to use shells in CloudShell",id:"how-to-use-shells-in-cloudshell",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"shells-overview",children:"Shells Overview"}),"\n",(0,l.jsx)(s.p,{children:"A shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check."}),"\n",(0,l.jsxs)(s.p,{children:["Shells can be downloaded from ",(0,l.jsx)(s.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"})," page and have different levels - Certified, Preview & Community grade. Each shell is based on a standard, which defines the shell's data model and functions. For more information, visit the ",(0,l.jsx)(s.a,{href:"/devguide/",children:"The CloudShell DevGuide"})," or ask a question in our Community ",(0,l.jsx)(s.a,{href:"https://community.quali.com/",children:"Forum"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"our-shells",children:"Our shells"}),"\n",(0,l.jsxs)(s.p,{children:["CloudShell shells can be thought of as either 1st Generation shells (1",(0,l.jsx)("sup",{children:"st"})," Gen) or 2",(0,l.jsx)("sup",{children:"nd"})," Generation shells (2nd Gen). Both types of shells can coexist inside the same CloudShell sandbox, but they differ in their structure and in the way that they are managed."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.strong,{children:["1",(0,l.jsx)("sup",{children:"st"})," Gen Shells"]})," are imported as CloudShell packages that contain the data model and driver for the intended sandbox element. 1",(0,l.jsx)("sup",{children:"st"})," Gen shells allow extensive control of the family and model, and therefore are not standardized. While they allow maximal flexibility, when using them, some shell management capabilities may not be available. 1st Gen Shells use the blueprint packaging mechanism - see ",(0,l.jsx)(s.a,{href:"/portal/blueprints/creating-blueprints/import-package",children:"Import a Blueprint Package into CloudShell"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.strong,{children:["2",(0,l.jsx)("sup",{children:"nd"})," Gen Shells"]})," are imported through CloudShell Portal\u2019s Shells management page. 2",(0,l.jsx)("sup",{children:"nd"})," Gen shells are based on standardized models and attributes, which streamlines the creation, maintenance and sharing of shells. Unlike 1st Gen shells, which can be modified from Resource Manager Client, 2nd Gen shells cannot be altered, ensuring their integrity. For details, see ",(0,l.jsx)(s.a,{href:"/admin/cloudshell-manage-dashboard/managing-shells",children:"Managing Shells"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.admonition,{type:"tip-one-line",children:(0,l.jsxs)(s.p,{children:["Both 1st and 2nd shells can coexist with each other in the same CloudShell sandbox. However, it is strongly recommended to migrate any 1",(0,l.jsx)("sup",{children:"st"})," Gen shells to 2",(0,l.jsx)("sup",{children:"nd"})," Gen. ",(0,l.jsx)(s.em,{children:(0,l.jsx)(s.strong,{children:"Today all shells released by Quali are 2nd Gen"})}),"."]})}),"\n",(0,l.jsx)(s.h2,{id:"how-to-use-shells-in-cloudshell",children:"How to use shells in CloudShell"}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"Depending on your organization, the system administrator and domain administrator may be the same employee."})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["The system administrator imports the shell into CloudShell, as explained in ",(0,l.jsx)(s.a,{href:"/admin/cloudshell-manage-dashboard/managing-shells#importing-shells",children:"Importing Shells"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In the ",(0,l.jsx)(s.strong,{children:"Inventory"})," dashboard, the domain administrator creates a resource based on the shell. For additional information, see ",(0,l.jsx)(s.a,{href:"/portal/inventory/managing-resources/adding-inventory-resources/",children:"Adding Inventory Resources"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"The resource is available for the domain\u2019s users."}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"This step does not apply to shells that create services. If the shell creates services, the service is created in CloudShell when you import the shell and is available in the domains defined in the shell's service category."})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Blueprint designers add the resource to the blueprint, and if needed, configure connectivity to other elements in the blueprint. For additional information, see ",(0,l.jsx)(s.a,{href:"/portal/blueprints/creating-blueprints/add-connectivity/",children:"Add Connectivity"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities",children:"Cloud Provider Shells - Features and Capabilities Per Release"})}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>r});var l=n(11504);const i={},t=l.createContext(i);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);