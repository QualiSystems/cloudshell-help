"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64e3],{76924:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(17624),n=i(4552);const r={sidebar_position:9},o="Services Overview",l={id:"intro/features/services",title:"Services Overview",description:"This article introduces services, their function in CloudShell and outlines how to configure them.",source:"@site/docs/intro/features/services.md",sourceDirName:"intro/features",slug:"/intro/features/services",permalink:"/cloudshell-help/next/intro/features/services",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/features/services.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Resources Overview",permalink:"/cloudshell-help/next/intro/features/resources"},next:{title:"Shells Overview",permalink:"/cloudshell-help/next/intro/features/shells"}},a={},c=[{value:"What is a service?",id:"what-is-a-service",level:2},{value:"What does a service include?",id:"what-does-a-service-include",level:2},{value:"Service creation process",id:"service-creation-process",level:2}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"services-overview",children:"Services Overview"}),"\n",(0,t.jsx)(s.p,{children:"This article introduces services, their function in CloudShell and outlines how to configure them."}),"\n",(0,t.jsx)(s.h2,{id:"what-is-a-service",children:"What is a service?"}),"\n",(0,t.jsx)(s.p,{children:"A service is a CloudShell component that is used to model sandbox components that are not actual physical devices. It can be a public cloud-native service on AWS or Azure or a SaaS product you want to represent in the sandbox. Similar to resources, services have a data model and automation commands, but they are not managed as inventory items. This allows multiple instances of the same service to be used in a sandbox."}),"\n",(0,t.jsx)(s.h2,{id:"what-does-a-service-include",children:"What does a service include?"}),"\n",(0,t.jsx)(s.p,{children:"Services are based on a Shell template, which provides the service's data model and automation script."}),"\n",(0,t.jsx)(s.p,{children:"In addition, the service can include attributes, to be used by sandbox orchestration processes or to prompt the sandbox end user for inputs that will be used by the service's driver or script. The service's attributes can be published to prompt the sandbox end-user to provide information."}),"\n",(0,t.jsx)(s.p,{children:"If the Shell template provides it, the service may also include an address field to allow remote access to specific devices or web sites from within the sandbox. For example, to connect to an Amazon CDN service."}),"\n",(0,t.jsx)(s.h2,{id:"service-creation-process",children:"Service creation process"}),"\n",(0,t.jsx)(s.p,{children:"CloudShell provides standardized Shell templates for creating services."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Depending on your organization, the system administrator and service/blueprint designers may be the same employee."})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Using the Shellfoundry utility, the service developer creates a Shell from the appropriate Shell template. For additional information, see the CloudShell Dev Guide's ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/devguide/developing-shells/getting-started",children:"Getting Started with Shell Development"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The service developer modifies the Shell's settings, including default attribute values, which inputs to publish in the diagram, and attaches service categories to expose the service to specific domains."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The system administrator imports the Shell into CloudShell - as explained in ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-shells#importing-shells",children:"Importing Shells"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["For 1st Gen Shells, you can optionally attach the service categories after importing the Shell into CloudShell, via ",(0,t.jsx)(s.strong,{children:"Resource Manager Client"}),". For additional information, see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/configuring-services",children:"Configuring Services"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The blueprint designer adds the service to the blueprint diagram from the ",(0,t.jsx)(s.strong,{children:"Apps / Services"})," catalog and fills in any required attribute values - see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["End-users can now use the services in their sandboxes - see ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/services",children:"Services in Sandboxes"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>l,M:()=>o});var t=i(11504);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);