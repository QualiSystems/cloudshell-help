"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[50956],{30976:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),t=s(28453);const r={sidebar_position:10},o="Services Overview",a={id:"intro/features/services",title:"Services Overview",description:"This article introduces services, their function in CloudShell and outlines how to configure them.",source:"@site/versioned_docs/version-2023.3/intro/features/services.md",sourceDirName:"intro/features",slug:"/intro/features/services",permalink:"/2023.3/intro/features/services",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/services.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Resources Overview",permalink:"/2023.3/intro/features/resources"},next:{title:"Shells Overview",permalink:"/2023.3/intro/features/shells"}},l={},c=[{value:"What is a service?",id:"what-is-a-service",level:2},{value:"What does a service include?",id:"what-does-a-service-include",level:2},{value:"Service creation process",id:"service-creation-process",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"services-overview",children:"Services Overview"})}),"\n",(0,n.jsx)(i.p,{children:"This article introduces services, their function in CloudShell and outlines how to configure them."}),"\n",(0,n.jsx)(i.h2,{id:"what-is-a-service",children:"What is a service?"}),"\n",(0,n.jsx)(i.p,{children:"A service is a CloudShell component that is used to model sandbox components that are not actual physical devices. It can be a public cloud-native service on AWS or Azure or a SaaS product you want to represent in the sandbox. Similar to resources, services have a data model and automation commands, but they are not managed as inventory items. This allows multiple instances of the same service to be used in a sandbox."}),"\n",(0,n.jsx)(i.h2,{id:"what-does-a-service-include",children:"What does a service include?"}),"\n",(0,n.jsx)(i.p,{children:"Services are based on a Shell template, which provides the service's data model and automation script."}),"\n",(0,n.jsx)(i.p,{children:"In addition, the service can include attributes, to be used by sandbox orchestration processes or to prompt the sandbox end user for inputs that will be used by the service's driver or script. The service's attributes can be published to prompt the sandbox end-user to provide information."}),"\n",(0,n.jsx)(i.p,{children:"If the Shell template provides it, the service may also include an address field to allow remote access to specific devices or web sites from within the sandbox. For example, to connect to an Amazon CDN service."}),"\n",(0,n.jsx)(i.h2,{id:"service-creation-process",children:"Service creation process"}),"\n",(0,n.jsx)(i.p,{children:"CloudShell provides standardized Shell templates for creating services."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"Depending on your organization, the system administrator and service/blueprint designers may be the same employee."})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Using the Shellfoundry utility, the service developer creates a Shell from the appropriate Shell template. For additional information, see the CloudShell Dev Guide's ",(0,n.jsx)(i.a,{href:"/2023.3/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"The service developer modifies the Shell's settings, including default attribute values, which inputs to publish in the diagram, and attaches service categories to expose the service to specific domains."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["The system administrator imports the Shell into CloudShell - as explained in ",(0,n.jsx)(i.a,{href:"/2023.3/admin/cloudshell-manage-dashboard/managing-shells#importing-shells",children:"Importing Shells"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["For 1st Gen Shells, you can optionally attach the service categories after importing the Shell into CloudShell, via ",(0,n.jsx)(i.strong,{children:"Resource Manager Client"}),". For additional information, see ",(0,n.jsx)(i.a,{href:"/2023.3/admin/setting-up-cloudshell/inventory-operations/configuring-services",children:"Configuring Services"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["The blueprint designer adds the service to the blueprint diagram from the ",(0,n.jsx)(i.strong,{children:"Apps / Services"})," catalog and fills in any required attribute values - see ",(0,n.jsx)(i.a,{href:"/2023.3/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["End-users can now use the services in their sandboxes - see ",(0,n.jsx)(i.a,{href:"/2023.3/portal/sandboxes/sandbox-workspace/services",children:"Services in Sandboxes"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var n=s(96540);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);