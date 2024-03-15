"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56754],{93248:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var n=l(17624),t=l(4552);const a={sidebar_position:1},o="CloudShell API Overview",s={id:"api-guide/cs-api-overview",title:"CloudShell API Overview",description:"Quali's CloudShell APIs allow you to interact with and automate CloudShell for enhanced, customizable platform management, functionality, and usability.",source:"@site/docs/api-guide/cs-api-overview.md",sourceDirName:"api-guide",slug:"/api-guide/cs-api-overview",permalink:"/cloudshell-help/next/api-guide/cs-api-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-api-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell API Guide",permalink:"/cloudshell-help/next/category/cloudshell-api-guide"},next:{title:"CloudShell Administration REST API",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/"}},d={},r=[{value:"CloudShell Administration REST API",id:"cloudshell-administration-rest-api",level:2},{value:"Sandbox API",id:"sandbox-api",level:2},{value:"Automation API",id:"automation-api",level:2},{value:"Quali API",id:"quali-api",level:2},{value:"Packaging API",id:"packaging-api",level:2},{value:"New Job Scheduling API",id:"new-job-scheduling-api",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}];function h(e){const i={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cloudshell-api-overview",children:"CloudShell API Overview"}),"\n",(0,n.jsx)(i.p,{children:"Quali's CloudShell APIs allow you to interact with and automate CloudShell for enhanced, customizable platform management, functionality, and usability."}),"\n",(0,n.jsx)(i.p,{children:"CloudShell applications have multiple APIs, which enable you to get services from the Quali Server and to utilize CloudShell's capabilities for Shell automation, blueprint\xa0orchestration, sandbox deployment and test automation. Using Quali's CloudShell APIs, you can integrate between CloudShell and third-party applications in the DevOps ecosystem, such as a continuous integration solution like Jenkins (or any web application)."}),"\n",(0,n.jsx)(i.p,{children:"CloudShell APIs can be classified as outbound and inbound APIs. In other words, APIs that are used to serve CloudShell in a wider context (Sandbox API), like CI/CD processes, and APIs used to extend CloudShell automation and orchestration."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CloudShell Administration API"}),": Used for managing domains, identities and license pools"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Sandbox API"}),": Used for consuming and interacting with public blueprints and sandboxes"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Automation API"}),": Used for sandbox orchestration and administrative operations in CloudShell"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Quali API"}),": Used for managing automation suites and sandbox attachments, and importing and exporting blueprint packages"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Packaging API"}),": Used for modifying blueprint packages"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"New Job Scheduling API"}),": Used for managing New Job Scheduling servers and suite executions"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"For additional details about each API, see below."}),"\n",(0,n.jsx)(i.h2,{id:"cloudshell-administration-rest-api",children:"CloudShell Administration REST API"}),"\n",(0,n.jsxs)(i.p,{children:["A RESTFul API that allows your admins to perform CloudShell administration tasks remotely, without having to open Resource Manager Client. As such, this API allows you to perform all the tasks provided by Resource Manager Client. This includes managing domains, groups, users, license pools, and also share blueprints/resources among different domains. For details, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-ovrvw.htm",children:"CloudShell Administration REST API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"sandbox-api",children:"Sandbox API"}),"\n",(0,n.jsxs)(i.p,{children:["A RESTful API designed to facilitate the consumption of public blueprints for CI and DevOps activities. It enables you to automate the deployment of CloudShell sandboxes and interact with sandbox components, and integrates with CI platforms such as Jenkins or Jetbrains TeamCity. CloudShell Sandbox API comes with an API gateway, which enables to interact with CloudShell without direct access to the server. For details, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/CS-Snbx-API-Topic.htm",children:"CloudShell Sandbox API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"automation-api",children:"Automation API"}),"\n",(0,n.jsxs)(i.p,{children:["This API\xa0is an official Python package utilizing XMLRPC protocol to communicate with CloudShell. It's designed to automate CloudShell from Python scripts and drivers. The CloudShell Automation API is based on the XML RPC API. For details, see the ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pyth-API-Overvw.htm",children:"CloudShell Automation API"})," article, or check out our API guides. The Python package ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Python-API/",children:"API guide"})," includes additional information like return objects and is intended for experienced Python developers, while for beginners, we recommend to use the ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/TestShell-API/TestShell%20Python%20API.html",children:"TestShell API Python Reference Guide"}),", which features an easy to understand format and code examples."]}),"\n",(0,n.jsxs)(i.p,{children:["To learn how to implement this API in .NET or XML RPC, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/TS-API.htm",children:"TestShell API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"quali-api",children:"Quali API"}),"\n",(0,n.jsxs)(i.p,{children:["A RESTful API designed to control the scheduling and queuing of test automation suites. Quali API can be used in several protocols (C#, TCL). This API is also used for importing and exporting packages and Shells, getting sandbox attachments, and execution server details. For details, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Quali-API-Topic.htm",children:"Quali API"}),", or check out the appropriate Quali API reference guide:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20API%20Library.html",children:"Quali API Library Reference Guide"}),": is available by default in the TestShell Studio tools and can be added as a DLL\xa0asset to a project in CloudShell Authoring."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20cSharp%20API.html",title:"Quali API C# Reference Guide",children:"Quali API C# Reference Guide"}),": for .NET"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Quali-API/Quali%20REST%20API.html",title:"Quali API REST Reference Guide",children:"Quali API REST Reference Guide"}),": for APIs using the REST client"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The default port for Quali API in the Quali Server is 9000."}),"\n",(0,n.jsx)(i.h2,{id:"packaging-api",children:"Packaging API"}),"\n",(0,n.jsxs)(i.p,{children:["Designed to automate the creation and configuration of CloudShell blueprint packages. For details, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/Pckg-API/PackagingAPI.htm",children:"Packaging API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"new-job-scheduling-api",children:"New Job Scheduling API"}),"\n",(0,n.jsxs)(i.p,{children:["A RESTful API dedicated to CloudShell's New Job Scheduling tool. This API is used to automate the execution of test suites. For details, see ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-ovrvw.htm",children:"New Job Scheduling REST API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"implementation-examples",children:"Implementation Examples"}),"\n",(0,n.jsxs)(i.p,{children:["Code examples are available in the Dev Guide's ",(0,n.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/APIs/Available-CS-APIs.htm",children:"Available CloudShell APIs"})]})]})}function u(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,i,l)=>{l.d(i,{I:()=>s,M:()=>o});var n=l(11504);const t={},a=n.createContext(t);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);