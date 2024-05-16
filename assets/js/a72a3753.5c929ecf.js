"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13644],{90620:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var d=s(17624),t=s(4552);const i={sidebar_position:8},r="Sandbox Components",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",title:"Sandbox Components",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Sandbox Identifier",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier"},next:{title:"Sandbox Component Id",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"sandbox-components",children:"Sandbox Components"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Gets details about the components (resources, services, and Apps) of a particular sandbox."}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sandbox_identifier"})}),(0,d.jsxs)(n.td,{children:["The id of the sandbox (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"sandbox components"})," method:"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sandbox components"})," method returns details about all the components of a particular sandbox and the actions that can be performed on each component."]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'[\n   {\n      "id":"0daead01-8e57-4064-81d4-84911effa933",\n      "name":"MyApp",\n      "type":"Application",\n      "component_type":"Generic App Model",\n      "description":"",\n      "active_deployment_name":"",\n      "template_name":"",\n      "app_lifecycle":"undeployed""attributes":[\n         {\n            "type":"string",\n            "name":"user",\n            "value":""\n         }\n      ],\n      "connection_interfaces":[\n         {\n            "name":"SSH",\n            "url":""\n         }\n      ]"_links":{\n         "self":{\n            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933",\n            "method":"GET"\n         }\n      }\n   }{\n      "id":"0daead01-8e57-4064-81d4-84911effa911",\n      "name":"MySwitch",\n      "type":"Resource",\n      "component_type":"Generic Switch Model",\n      "description":"",\n      "attributes":[\n         {\n            "type":"string",\n            "name":"vendor",\n            "value":""\n         }\n      ],\n      "connection_interfaces":[\n         {\n            "name":"Telnet",\n            "url":""\n         }\n      ]"_links":{\n         "self":{\n            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa911",\n            "method":"GET"\n         }\n      }\n   }\n]\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"sandbox components"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The ID of the component. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The name of the component. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:['The component ("resource", "application", or "service"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"component_type"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The resource model. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["A short description of the component. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"active_deployment_name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["(Available for App components) The name of the deployment path for the App. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"template_name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["(Available for App components) The name of the App template. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"app_lifecycle"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:['(Available for App components) The current state of the App ("undeployed"/"deployed"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"attributes"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The attributes of the resource model. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:["The attribute type. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The attribute name. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"value"})}),(0,d.jsxs)(n.td,{children:["The attribute value. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_interfaces"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The connection interfaces of the resource. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The name of the connection interface. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"url"})}),(0,d.jsxs)(n.td,{children:["The URL of the connection interface. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"The actions that can be performed on the component of a sandbox in the user's domain:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"self"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get the component's details via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>r});var d=s(11504);const t={},i=d.createContext(t);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);