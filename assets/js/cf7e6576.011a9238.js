"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20304],{16612:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=d(17624),i=d(4552);const t={sidebar_position:9},r="Sandbox Component Id",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id",title:"Sandbox Component Id",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-id.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Sandbox Components",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components"},next:{title:"Sandbox Component Commands",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-commands"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sandbox-component-id",children:"Sandbox Component Id"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets details and available actions for a particular component (resource, service, or App) in a specific sandbox."}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sandbox_identifier"})}),(0,s.jsxs)(n.td,{children:["The id of the sandbox (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"component_id"})}),(0,s.jsxs)(n.td,{children:["The id of the component (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",children:"sandbox components"})," and ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsxs)(n.p,{children:["Example header format for the ",(0,s.jsx)(n.code,{children:"sandbox component id"})," method:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sandbox component id"})," method returns details about a specific component of a particular sandbox, and the actions that can be performed on the component."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n   "id":"0daead01-8e57-4064-81d4-84911effa933",\n   "name":"MyApp",\n   "type":"Application",\n   "component_type":"Generic App Model",\n   "description":"",\n   "active_deployment_name":"",\n   "template_name":"",\n   "app_lifecycle":"undeployed""attributes":[\n      {\n         "type":"string",\n         "name":"user",\n         "value":""\n      }\n   ],\n   "connection_interfaces":[\n      {\n         "name":"RDP",\n         "url":""\n      }\n   ]"_links":{\n      "self":{\n         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933",\n         "method":"GET"\n      },\n      "commands":{\n         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/commands",\n         "method":"GET"\n      }\n   }\n}\n'})})]}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)(n.p,{children:["The response output properties of the ",(0,s.jsx)(n.code,{children:"sandbox component id"})," method are described in the following table."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Sub Property"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The ID of the component. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The name of the component. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:['The component ("resource", "application", or "service"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"component_type"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The resource model. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["A short description of the component. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"active_deployment_name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["(Available for App components) The name of the deployment path for the App. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"template_name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["(Available for App components) The name of the App template. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"app_lifecycle"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:['(Available for App components) The current state of the App ("undeployed"/"deployed"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"attributes"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The attributes of the resource model. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsxs)(n.td,{children:["The attribute type. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsxs)(n.td,{children:["The attribute name. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsxs)(n.td,{children:["The attribute value. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"connection_ interfaces"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The connection interfaces of the resource. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsxs)(n.td,{children:["The name of the connection interface. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"url"})}),(0,s.jsxs)(n.td,{children:["The URL of the connection interface of the component. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the component of a sandbox in the user's domain:"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"self"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get the component's details via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"commands"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get all the resource commands for the component via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,d)=>{d.d(n,{I:()=>o,M:()=>r});var s=d(11504);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);