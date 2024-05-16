"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41312],{34340:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(17624),s=n(4552);const i={sidebar_position:4},o="Modeling Public Cloud Services in CloudShell",r={id:"portal/overview/end-to-end-wf/model-public-cloud",title:"Modeling Public Cloud Services in CloudShell",description:"In some scenarios, you may want to model a public cloud service or a SaaS product in the sandbox. For example:",source:"@site/versioned_docs/version-2023.3/portal/overview/end-to-end-wf/model-public-cloud.md",sourceDirName:"portal/overview/end-to-end-wf",slug:"/portal/overview/end-to-end-wf/model-public-cloud",permalink:"/cloudshell-help/portal/overview/end-to-end-wf/model-public-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/overview/end-to-end-wf/model-public-cloud.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Consuming Sandboxes as Part of Continuous Integration Workflows",permalink:"/cloudshell-help/portal/overview/end-to-end-wf/consume-sandbox"},next:{title:"Blueprints",permalink:"/cloudshell-help/portal/blueprints/"}},a={},d=[];function c(e){const l={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"modeling-public-cloud-services-in-cloudshell",children:"Modeling Public Cloud Services in CloudShell"}),"\n",(0,t.jsx)(l.p,{children:"In some scenarios, you may want to model a public cloud service or a SaaS product in the sandbox. For example:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"Modeling an AWS caching service as an element in a sandbox"}),"\n",(0,t.jsx)(l.li,{children:"Modeling a Salesforce service to allow retrieving Salesforce information in sandbox orchestration. In this scenario, the Salesforce service doesn\u2019t have to be an element in any sandbox."}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["This is done by creating a CloudShell service shell that contains all the relevant attributes, automation and logic required to access and use the cloud service. For this purpose, we\u2019ve created the ",(0,t.jsx)(l.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Cloud%20Service%20Shell%20Standard.md",children:"Cloud Service Shell Standard"}),", which provides the framework for implementing support for cloud services."]}),"\n",(0,t.jsx)(l.p,{children:"To create a cloud service:"}),"\n",(0,t.jsxs)(l.ol,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Create a service shell using the ",(0,t.jsx)(l.code,{children:"gen2/cloud-service"})," shell template. See ",(0,t.jsx)(l.a,{href:"https://qualisystems.github.io/devguide/reference/2023.2.0/shellfoundry-intro.html#creating-a-shell-from-a-template",children:"Creating a Shell from a template"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Add the relevant automation and attributes. See ",(0,t.jsx)(l.a,{href:"https://qualisystems.github.io/devguide/shells/2023.2.0/customizing-shells.html",children:"Customizing Shells"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Package and install the shell on CloudShell. See ",(0,t.jsx)(l.a,{href:"https://qualisystems.github.io/devguide/reference/2023.2.0/shellfoundry-intro.html#packaging-and-importing-a-shell-into-cloudshell",children:"Packaging and importing a Shell into CloudShell"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Expose the shell to the relevant domains. See ",(0,t.jsx)(l.a,{href:"https://qualisystems.github.io/devguide/shells/2023.2.0/customizing-shells.html#associating-categories-to-a-service-shell",children:"Associating categories to a service shell"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Optionally, set up orchestration scripts, which will use the shell\u2019s commands, and add them to the relevant blueprints. See ",(0,t.jsx)(l.a,{href:"https://qualisystems.github.io/devguide/orchestration/2023.2.0/getting-started.html",children:"Getting Started with Orchestration Scripts"}),"."]}),"\n",(0,t.jsx)(l.admonition,{type:"note",children:(0,t.jsxs)(l.p,{children:["It is also possible to create an admin-only service that is hidden from regular users in the sandbox. For this purpose, we created the ",(0,t.jsx)(l.code,{children:"gen2/admin-only-custom-service"})," shell template."]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,s.M)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,l,n)=>{n.d(l,{I:()=>r,M:()=>o});var t=n(11504);const s={},i=t.createContext(s);function o(e){const l=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:l},e.children)}}}]);