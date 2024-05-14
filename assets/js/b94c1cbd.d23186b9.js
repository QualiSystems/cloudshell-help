"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64376],{32372:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var n=i(17624),a=i(4552);const t={},s="Available CloudShell APIs",o={id:"devguide/available-cs-api/index",title:"Available CloudShell APIs",description:"In this article, we\u2019ll discuss the different CloudShell APIs.",source:"@site/docs/devguide/available-cs-api/index.md",sourceDirName:"devguide/available-cs-api",slug:"/devguide/available-cs-api/",permalink:"/cloudshell-help/next/devguide/available-cs-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/devguide/available-cs-api/index.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L3 Network Connectivity",permalink:"/cloudshell-help/next/devguide/develop-custom-cloud-provider-shells/l3-network-connectivity"},next:{title:"Automating CloudShell Sandboxes for DevOps",permalink:"/cloudshell-help/next/devguide/available-cs-api/automate-cs-sandboxes-for-devops"}},d={},r=[{value:"CloudShell Sandbox API",id:"cloudshell-sandbox-api",level:2},{value:"Examples",id:"examples",level:3},{value:"CloudShell Automation API",id:"cloudshell-automation-api",level:2},{value:"Examples",id:"examples-1",level:3},{value:"TestShell API",id:"testshell-api",level:2},{value:"Quali API",id:"quali-api",level:2},{value:"Packaging API",id:"packaging-api",level:2}];function h(e){const l={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"available-cloudshell-apis",children:"Available CloudShell APIs"}),"\n",(0,n.jsx)(l.p,{children:"In this article, we\u2019ll discuss the different CloudShell APIs."}),"\n",(0,n.jsxs)(l.p,{children:["CloudShell applications have multiple APIs, which enable you to get services from the Quali Server and to utilize CloudShell\u2019s capabilities for Shell automation, blueprint\xa0orchestration, sandbox deployment and test automation. CloudShell APIs can be classified as outbound and inbound APIs. In other words, APIs that are used to serve CloudShell in a wider context (our RESTful Sandbox API), like CI/CD processes, and APIs used to extend CloudShell automation and orchestration. For additional information, visit the\xa0",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/api-guide/cs-api-overview",children:"CloudShell API Guide"}),"."]}),"\n",(0,n.jsx)(l.h2,{id:"cloudshell-sandbox-api",children:"CloudShell Sandbox API"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"CloudShell Sandbox API"}),"\xa0is a RESTful API that allows you to use CloudShell sandboxes as part of your CI/CD process. For example, you can start, extend and stop sandboxes, run sandbox orchestration and automation commands, and get information about your sandboxes and execution activity. For additional information, see ",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/",children:"CloudShell Sandbox API"}),"."]}),"\n",(0,n.jsx)(l.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(l.p,{children:["For implementation examples, visit our\xa0",(0,n.jsx)(l.a,{href:"https://github.com/QualiSystems/Sandbox-TeamCIty-Plugin/blob/master/README.md",children:"TeamCity"}),"\xa0or\xa0",(0,n.jsx)(l.a,{href:"https://plugins.jenkins.io/cloudshell-sandbox",children:"Jenkins"}),"\xa0plugin documentation, which leverages CloudShell Sandbox API to automate the consumption of sandboxes as part of the devops cycle."]}),"\n",(0,n.jsx)(l.h2,{id:"cloudshell-automation-api",children:"CloudShell Automation API"}),"\n",(0,n.jsxs)(l.p,{children:["CloudShell Automation API\xa0is a Python open source package you can use to develop CloudShell orchestration and automation capabilities. Using the CloudShell Automation API, you can design orchestration scripts that communicate and run operations on CloudShell, from administrative operations like adding users, to sandbox-level operations like provisioning resources, resolving connectivity and running health check on the sandbox\u2019s elements. For additional information, see ",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/api-guide/shell-dev-blueprint-design-api/cs-automation-api",children:"CloudShell Automation API"})," and ",(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/Python-API",children:"CloudShell Automation API Reference Guide"}),"."]}),"\n",(0,n.jsx)(l.p,{children:"Note that since CloudShell Automation API can perform sandbox and CloudShell-level operations, it mostly applies to orchestration scripts and is not recommended to be used in shells. Having said that, there are two methods in the API that apply directly to shells:\xa0WriteMessageToReservationOutput\xa0allows the driver to print messages in real time to the output console, and\xa0SetResourceLiveStatus\xa0allows the driver to indicate the resource\u2019s state with an icon. For example, online and offline."}),"\n",(0,n.jsx)(l.h3,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsxs)(l.p,{children:["See ",(0,n.jsx)(l.a,{href:"./available-cs-api/useful-cs-api-examples/",children:"Useful CloudShell Automation API Code Examples"}),"."]}),"\n",(0,n.jsx)(l.h2,{id:"testshell-api",children:"TestShell API"}),"\n",(0,n.jsxs)(l.p,{children:["The\xa0",(0,n.jsx)(l.strong,{children:"TestShell API"}),"\xa0allows designing orchestration and automation using C#, TCL API and XML RPC. It is intended for performing a wide variety of operations within CloudShell; from administrative tasks, such as managing inventory or users, to sandbox operations, such as executing commands and controlling both resource and sandbox live statuses. It is especially useful for writing tests, and obtaining information about resources, blueprints and sandboxes. TestShell API and CloudShell Automation API provide the same capabilities and functionality."]}),"\n",(0,n.jsx)(l.p,{children:"For additional information, see the appropriate TestShell API Reference Guide:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/testshell-api/TestShell%20API%20Library.html",children:"TestShell API Library Reference Guide"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/testshell-api/TestShell%20cSharp%20API.html",children:"TestShell API C# Reference Guide"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/testshell-api/TestShell%20TCL%20API.html",children:"TestShell API TCL Reference Guide"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/testshell-api/TestShell%20XML%20RPC%20API.html",children:"TestShell API XML RPC Reference Guide"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"quali-api",children:"Quali API"}),"\n",(0,n.jsx)(l.p,{children:"Quali API allows you to automate the scheduling and queuing of test automation suites. It can be used in C# and TCL, and is also used for getting sandbox attachments and execution server details."}),"\n",(0,n.jsx)(l.p,{children:"For additional information, see the appropriate Quali API Reference Guide:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/quali-api/Quali%20API%20Library.html",children:"Quali API Library Reference Guide"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/quali-api/Quali%20cSharp%20API.html",children:"Quali API C# Reference Guide"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"pathname:///api-docs/2023.3/quali-api/Quali%20REST%20API.html",children:"Quali API REST Reference Guide"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"packaging-api",children:"Packaging API"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"CloudShell Packaging API"}),"\xa0allows you to automate the creation configuration of CloudShell blueprint packages, which can be used for backup purposes and for sharing blueprints between different CloudShell deployments. For additional information and implementation examples, see the\xa0",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/api-guide/packaging-api/",children:"Packaging API"}),"."]})]})}function u(e={}){const{wrapper:l}={...(0,a.M)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,l,i)=>{i.d(l,{I:()=>o,M:()=>s});var n=i(11504);const a={},t=n.createContext(a);function s(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);