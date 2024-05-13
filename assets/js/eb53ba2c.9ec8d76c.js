"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28304],{7084:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var t=n(17624),l=n(4552);const s={},a="CloudShell Sandbox API",i={id:"api-guide/cs-sandbox-api/index",title:"CloudShell Sandbox API",description:"CloudShell Sandbox API allows developers to use CloudShell via software interfaces. The CloudShell Sandbox API is a RESTful API that can be used to provide sandboxes as a service for a Continuous Integration/DevOps process, or for integration of Quali's software with external software and processes.",source:"@site/docs/api-guide/cs-sandbox-api/index.md",sourceDirName:"api-guide/cs-sandbox-api",slug:"/api-guide/cs-sandbox-api/",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/index.md",tags:[],version:"current",lastUpdatedAt:171563037e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete license pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-license-pool"},next:{title:"Getting Started with CloudShell Sandbox API",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/get-started-with-cs-sandbox-api"}},d={},r=[{value:"CloudShell Sandbox API live documentation page",id:"cloudshell-sandbox-api-live-documentation-page",level:2}];function u(e){const o={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"cloudshell-sandbox-api",children:"CloudShell Sandbox API"}),"\n",(0,t.jsx)(o.p,{children:"CloudShell Sandbox API allows developers to use CloudShell via software interfaces. The CloudShell Sandbox API is a RESTful API that can be used to provide sandboxes as a service for a Continuous Integration/DevOps process, or for integration of Quali's software with external software and processes."}),"\n",(0,t.jsx)(o.p,{children:"CloudShell Sandbox\xa0API\xa0allows developers to quickly connect to Quali Server and get details about blueprints and sandboxes related to particular domains, and their contents."}),"\n",(0,t.jsx)(o.p,{children:"Developers can use the CloudShell Sandbox\xa0API\xa0to retrieve information and automate the deployment of CloudShell sandboxes and their components for testing and development purposes. Thus, developers can quickly analyze the required data in order to optimize development of sandboxes as services and continuous integration processes, and run, test, and validate their code as required. Continuous integration can be done automatically using Jenkins or via command line."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"CloudShell Sandbox\xa0API only works with public blueprints."})}),"\n",(0,t.jsxs)(o.p,{children:["For more information, see ",(0,t.jsx)(o.a,{href:"/cloudshell-help/next/devguide/available-cs-api/automate-cs-sandboxes-for-devops",children:"Automating CloudShell Sandboxes for DevOps"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"cloudshell-sandbox-api-live-documentation-page",children:"CloudShell Sandbox API live documentation page"}),"\n",(0,t.jsx)(o.p,{children:"The CloudShell Sandbox RESTful API live documentation page allows you to test and experiment with the APIs, providing information on its different methods and parameters."}),"\n",(0,t.jsx)(o.p,{children:"The CloudShell RESTful API live documentation has two page versions. Version 1 (CloudShell version 7.0 and up) includes methods to get basic information about blueprints and sandboxes, create a sandbox from a specific blueprint, and to tear it down. Version 2 (CloudShell version 8.0 and up) also includes information about sandbox components, and blueprint and resource commands."}),"\n",(0,t.jsx)(o.p,{children:"The API live documentation pages for both API versions are installed with CloudShell. To access them, browse to the relevant default addresses:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Login method (for both versions):\xa0",(0,t.jsx)(o.strong,{children:"http://[CloudShellPortalAddress]:82/api/explore/."})]}),"\n",(0,t.jsxs)(o.li,{children:["Blueprint and sandbox methods:\xa0",(0,t.jsx)(o.strong,{children:"http://[CloudShellPortalAddress]:82/api/v1/explore/"})," (for version 1) ",(0,t.jsx)("br",{})," and ",(0,t.jsx)(o.strong,{children:"http://[CloudShellPortalAddress]:82/api/v2/explore/ (for version 2)."})]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"If you are accessing the links from the machine on which CloudShell Portal is installed, or from the CloudShell SDK edition machine, you can use \u201clocalhost\u201d or \u201c127.0.0.1\u201d."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["The default port for the CloudShell Sandbox API on the CloudShell Portal machine is 82. You can customize this port number, as required, in the CloudShell Configuration wizard - CloudShell Sandbox API configuration page.",(0,t.jsx)(o.br,{}),"\n","The default port for the Quali Proxy is 8033 and is not configurable (this port provides access to the proxy via HTTP\xa0protocol and is used by CloudShell Portal)."]})}),"\n",(0,t.jsx)(o.p,{children:"To use the live documentation page, log in to the page with your credentials and the relevant domain name."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(55700).c+"",width:"1549",height:"531"})})]})}function c(e={}){const{wrapper:o}={...(0,l.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},55700:(e,o,n)=>{n.d(o,{c:()=>t});const t=n.p+"assets/images/SWAGGER-login2-e9fe9df5bba356f1e95a22e23af06a67.png"},4552:(e,o,n)=>{n.d(o,{I:()=>i,M:()=>a});var t=n(11504);const l={},s=t.createContext(l);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);