"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52238],{46652:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var l=s(17624),i=s(4552);const n={sidebar_position:2},a="TestShell API",r={id:"api-guide/shell-dev-blueprint-design-api/testshell-api",title:"TestShell API",description:"TestShell API allows you to automate CloudShell (in a similar manner as in CloudShell Automation API), and is especially useful for writing drivers or tests, and to get information about CloudShell resources and blueprints. Administrators can use this API to create scripts and automations that run administrative tasks, such as moving resources between domains or updating relationships between user groups.",source:"@site/docs/api-guide/shell-dev-blueprint-design-api/testshell-api.md",sourceDirName:"api-guide/shell-dev-blueprint-design-api",slug:"/api-guide/shell-dev-blueprint-design-api/testshell-api",permalink:"/cloudshell-help/next/api-guide/shell-dev-blueprint-design-api/testshell-api",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/shell-dev-blueprint-design-api/testshell-api.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Automation API",permalink:"/cloudshell-help/next/api-guide/shell-dev-blueprint-design-api/cs-automation-api"},next:{title:"Quali API",permalink:"/cloudshell-help/next/api-guide/quali-api"}},o={},h=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"testshell-api",children:"TestShell API"}),"\n",(0,l.jsxs)(t.p,{children:["TestShell API allows you to automate CloudShell (in a similar manner as in ",(0,l.jsx)(t.a,{href:"/cloudshell-help/next/api-guide/shell-dev-blueprint-design-api/cs-automation-api",children:"CloudShell Automation API"}),"), and is especially useful for writing drivers or tests, and to get information about CloudShell resources and blueprints. Administrators can use this API to create scripts and automations that run administrative tasks, such as moving resources between domains or updating relationships between user groups."]}),"\n",(0,l.jsx)(t.p,{children:"The\xa0TestShell API\xa0library is the main library of the lab management API. It supports most of the actions available in CloudShell Portal and in Resource Manager. The default port for TestShell API Library and TestShell C# API in the Quali Server is 8028. The default port for TestShell XML RPC API and TestShell TCL API\xa0in the Quali Server is 8029."}),"\n",(0,l.jsx)(t.p,{children:"The TestShell API provided implementations are available from the following links:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"TestShell API Library"}),": The TestShell API\xa0library is available by default in TestShell Authoring tools, and can be added as a DLL asset to a project in CloudShell Authoring, the driver builder."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["For the complete list of TestShell API Library functions, see ",(0,l.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20API%20Library.html",children:"TestShell API Library Reference Guide"}),"."]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"TestShell C# API"}),": It is possible to add the TestShell API library to a C# project and use its methods."]}),"\n",(0,l.jsxs)(t.p,{children:["For the complete list of TestShell API C# functions, see ",(0,l.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20cSharp%20API.html",children:"TestShell API C# Reference Guide"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"TestShell TCL API"}),":\xa0Each CloudShell version comes with a TCL client that supports all the TestShell API methods using TCL syntax. The TCL client can be found in ",(0,l.jsx)(t.code,{children:"%InstallationFolder%\\Integration\\TestShell API\\TestShell TCL API"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["For the complete list of TestShell API TCL functions, see ",(0,l.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20TCL%20API.html",title:"TestShell API TCL Reference Guide",children:"TestShell API TCL Reference Guide"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"TestShell XML RPC API"}),": Direct XML (Remote Procedure Call) RPC commands are also supported for TestShell API methods. When using XML RPC API, the data needs to be wrapped in a specific way and sent to the relevant port in the server. To test XML RPC API, Quali uses an internal tool that creates this wrap automatically, and so you only need to insert the parameters for the various methods."]}),"\n",(0,l.jsxs)(t.p,{children:["For the complete list of TestShell API XML\xa0RPC functions, see ",(0,l.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html",title:"TestShell API XML RPC Reference Guide",children:"TestShell API XML RPC Reference Guide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The TestShell API library is a DLL file that is loaded to the database. (You can view and edit the library file and version in the ",(0,l.jsx)(t.strong,{children:"Libraries"})," tab in the TestShell Studio while logged as an admin.)"]}),"\n",(0,l.jsx)(t.p,{children:"Since TestShell API is a lab management client, it requires login credentials, therefore the session should include user credentials and a domain. Following the login step, it is possible write an automated flow of actions."}),"\n",(0,l.jsx)(t.p,{children:"For example, you can create the following scenario:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Create a resource."}),"\n",(0,l.jsx)(t.li,{children:"Create sub-resources to the resource."}),"\n",(0,l.jsx)(t.li,{children:"Set the values of the resource\u2019s attributes."}),"\n",(0,l.jsx)(t.li,{children:"Update the physical connection of the resource/sub-resources to other connectable resources."}),"\n",(0,l.jsx)(t.li,{children:"Get resource details (as a data matrix or XML)."}),"\n",(0,l.jsx)(t.li,{children:"Reserve the resource."}),"\n",(0,l.jsx)(t.li,{children:"Add a route request and connect it."}),"\n",(0,l.jsx)(t.li,{children:"Get the route segments."}),"\n",(0,l.jsx)(t.li,{children:"End the sandbox."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Once the scenario is created, it can be run automatically."}),"\n",(0,l.jsx)(t.admonition,{title:"General notes about TestShell API:",type:"note",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Some actions that are possible in Resource Manager and in CloudShell Portal are not supported in TestShell API. For example, you cannot create and edit a blueprint using TestShell API. There are other solutions for that, such as creating and editing a sandbox and then saving it as a blueprint or importing a Quali package."}),"\n",(0,l.jsx)(t.li,{children:'Many operations have two versions, a \u201csingle\u201d version and a \u201cbulk\u201d version. For example, it is possible to create a single resource using the "CreateResource" method or to create many resources at once using the \u201cCreateResources\u201d operation. This is not always the fastest way performance-wise, but it is sometime easier to write and edit. The bulk operation usually gets a matrix as an input, and sometimes has special rules (such as the fact you cannot have the sub-resource creation line before the resource line).'}),"\n",(0,l.jsx)(t.li,{children:"Any function that requires a resource full path can also get the resource name without the folders it is located in."}),"\n"]})})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>a});var l=s(11504);const i={},n=l.createContext(i);function a(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);