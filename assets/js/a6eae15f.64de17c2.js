"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[36466],{48508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var d=s(17624),t=s(4552);const r={sidebar_position:5},i="Blueprint Start Persistent",c={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent",title:"Blueprint Start Persistent",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Blueprint Start",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start"},next:{title:"Sandboxes",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"blueprint-start-persistent",children:"Blueprint Start Persistent"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Creates a new persistent sandbox from a specific public persistent blueprint associated with the user's domain. Returns details about the persistent sandbox such as ID and the actions that can be performed on the sandbox. (After the sandbox is created, you can view it in the Sandboxes dashboard in CloudShell Portal.)"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["You cannot reserve blueprints if there are conflicts with the reservation timeslot. For additional information see ",(0,d.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/creating-sandboxes",children:"Creating Sandboxes"}),"."]}),"\n",(0,d.jsx)(n.li,{children:"This method does not support regular sandboxes. As such, attempting to start a regular blueprint will end in error."}),"\n"]})}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/blueprints/{blueprint_identifier}/start-persistent"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"blueprint_identifier"})}),(0,d.jsxs)(n.td,{children:["The name or id of the blueprint (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints",children:"blueprints"}),"."]})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"POST"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"blueprint start"})," method:"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request body"}),(0,d.jsxs)(n.p,{children:["The scheduling and input parameters of the sandbox in JSON\xa0format. The elements of the ",(0,d.jsx)(n.code,{children:"blueprint start"})," method include:"]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The name of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})," ",(0,d.jsx)("br",{}),' If you do not specify a name, you will get the following error message: "Reservation name must be specified in request body".']})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"params"})}),(0,d.jsxs)(n.td,{children:["Any published input parameters defined for the blueprint and its abstract resources. Input parameters that have no default must be included in the request. Abstract resource input parameters must be associated to global inputs (specify the global inputs in the request). ",(0,d.jsx)(n.code,{children:"(Array)"})," ",(0,d.jsx)("br",{}),' If you do not specify the input parameters, you will get the following error message: "Blueprint has invalid inputs".']})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"permitted_users"})}),(0,d.jsx)(n.td,{children:"Users permitted to use the sandbox. Permitted users must have access to the logged-in domain."})]})]})]})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request example"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n  "name": "Persistent sandbox name",\n  "params": [\n  ],\n  "permitted_users": [\n     "steven",\n     "julia"\n  ]\n}\n'})})]}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"blueprint start"})," method returns details about the new sandbox. The output includes details about the sandbox\xa0ID and the actions that can be performed on the sandbox:"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n  "name": "Persistent sandbox name",\n  "id": "8d653d03-9e12-47ce-9d30-19cae1a239c3",\n  "blueprint_id": "b4852f4b-d2bd-4dbc-b03a-f943941a9053",\n  "description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",\n  "start_time": "2021-08-02T09:22:00Z",\n  "end_time": null,\n  "state": "BeforeSetup",\n  "type": "Sandbox",\n  "components": [\n    {\n      "id": "6644dc07-1cc1-4b28-9879-0c704f106c2b",\n      "name": "cloudshell-latest",\n      "type": "Application",\n      "component_type": "Generic App Model",\n      "app_lifecycle": "Undeployed",\n      "_links": {\n        "self": {\n          "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components/6644dc07-1cc1-4b28-9879-0c704f106c2b",\n          "method": "GET"\n        }\n      }\n    },\n    {\n      "id": "92259d2a-3928-46ec-9da8-65eccc19b7f8",\n      "name": "dbs-latest-cloudshell",\n      "type": "Application",\n      "component_type": "Generic App Model",\n      "app_lifecycle": "Undeployed",\n      "_links": {\n        "self": {\n          "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components/92259d2a-3928-46ec-9da8-65eccc19b7f8",\n          "method": "GET"\n        }\n      }\n    }\n  ],\n  "parameters": [],\n  "setup_stage": "None",\n  "permitted_users": [\n    "admin",\n    "julia",\n    "steven"\n  ],\n  "_links": {\n    "self": {\n      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3",\n      "method": "GET"\n    },\n    "components": {\n      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components",\n      "method": "GET"\n    },\n    "output": {\n      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/output",\n      "method": "GET"\n    },\n    "stop": {\n      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/stop",\n      "method": "POST"\n    },\n    "all": {\n      "href": "/sandboxes",\n      "method": "GET"\n    },\n    "blueprint": {\n      "href": "/blueprints/b4852f4b-d2bd-4dbc-b03a-f943941a9053",\n      "method": "GET"\n    }\n  }\n}\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"blueprint start"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The name of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"state"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The current state of the sandbox. Possible values: Pending, BeforeSetup, Setup, Ready, Teardown, Error, Ended. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:['The sandbox type ("Sandbox"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"components"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The resource model of the sandbox. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsxs)(n.td,{children:["Component's unique ID. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The name of the component. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsx)(n.td,{children:"A short description of the resource."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:['The component ("resource", "application", or "service"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"component_type"})}),(0,d.jsxs)(n.td,{children:["The resource model. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"attributes"})}),(0,d.jsxs)(n.td,{children:["The attributes of the resource model. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:["The attribute type. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The attribute name. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"value"})}),(0,d.jsxs)(n.td,{children:["The attribute value. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_ interfaces"})}),(0,d.jsxs)(n.td,{children:["The connection interfaces of the resource. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The name of the connection interface. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"url"})}),(0,d.jsxs)(n.td,{children:["The URL of the connection interface of the resource. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"app_lifecycle"})}),(0,d.jsxs)(n.td,{children:['(Available for App components) The current state of the App ("undeployed"/"deployed"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"The actions that can be performed on the sandbox component (Get component details)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"The actions that can be performed on the sandbox in the user's domain:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"self"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get the details for the sandbox via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"components"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get all components in the sandbox via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"stop"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get stop the sandbox via a ",(0,d.jsx)(n.code,{children:"POST"})," request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"all"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get all available sandboxes according to the user's domain via a ",(0,d.jsx)(n.code,{children:"GET"})," request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"parameters"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"Published inputs and additional info."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"permitted_users"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"Users permitted to use the sandbox, including the owner."})]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>i});var d=s(11504);const t={},r=d.createContext(t);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);