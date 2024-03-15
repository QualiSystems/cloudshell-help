"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30440],{74800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=s(17624),r=s(4552);const d={sidebar_position:4},i="Blueprint Start",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",title:"Blueprint Start",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Blueprint Identifier",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-identifier"},next:{title:"Blueprint Start Persistent",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start-persistent"}},l={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"blueprint-start",children:"Blueprint Start"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Creates a new sandbox from a specific public blueprint associated with the user's domain. Returns details about the sandbox such as ID and the actions that can be performed on the sandbox. (After the sandbox is created, you can view it in the Sandboxes dashboard in CloudShell Portal.)"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You cannot reserve blueprints if there are conflicts with the reservation timeslot. For additional information see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm",children:"Creating Sandboxes"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"This method does not support persistent sandboxes. As such, starting a persistent sandbox will deploy a regular sandbox."}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/blueprints/{blueprint_identifier}/start"})}),"\n",(0,t.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsxs)(n.p,{children:["Example header format for the ",(0,t.jsx)(n.code,{children:"blueprint start"})," method:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(n.p,{children:["The scheduling and input parameters of the sandbox in JSON\xa0format. The elements of the ",(0,t.jsx)(n.code,{children:"blueprint start"})," method include:"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsxs)(n.td,{children:["The name of the sandbox. ",(0,t.jsx)(n.code,{children:"(string)"})," ",(0,t.jsx)("br",{}),' If you do not specify a name, you will get the following error message: "Reservation name and duration must be specified in request body".']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"duration"})}),(0,t.jsxs)(n.td,{children:["The duration for this sandbox. Time must be specified in ISO 8601 format (for example PT23H). ",(0,t.jsx)(n.code,{children:"(string)"})," ",(0,t.jsx)("br",{})," If you do not specify the duration, you will get the following error message: \"Duration format must be a valid 'ISO 8601' (e.g 'PT23H' or 'PT4H2M')\"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"params"})}),(0,t.jsxs)(n.td,{children:["Any published input parameters defined for the blueprint and its abstract resources. Input parameters that have no default must be included in the request. Abstract resource input parameters must be associated to global inputs (specify the global inputs in the request). ",(0,t.jsx)(n.code,{children:"(Array)"})," ",(0,t.jsx)("br",{}),' If you do not specify the input parameters, you will get the following error message: "Blueprint has invalid inputs".']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"permitted_users"})}),(0,t.jsx)(n.td,{children:"Users permitted to use the sandbox. Permitted users must have access to the logged-in domain."})]})]})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n   "name":"testbp-sndbx",\n   "duration":"PT2H5M",\n   "params":[\n      {\n         "name":"global1",\n         "value":"value1"\n      },\n      {\n         "name":"abstract resource 1.attribute4",\n         "value":"some value"\n      },\n      {\n         "name":"abstract resource 1/sub resource.attribute4",\n         "value":"some value"\n      }\n   ],\n   "permitted_users":[\n      "john.s",\n      "emily.b",\n      "lucas.w"\n   ]\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"blueprint start"})," method returns details about the new sandbox. The output includes details about the sandbox\xa0ID and the actions that can be performed on the sandbox:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n   "name":"Test Blprnt2",\n   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",\n   "state":"Ready",\n   "type":"Sandbox",\n   "components":[\n      {\n         "id":"82159835-2d95-46a9-95ec-9251963d203d",\n         "name":"MyApp",\n         "type":"Application",\n         "component_type":"Generic App Model",\n         "app_lifecycle":"undeployed",\n         "_links":{\n            "self":{\n               "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components/82159835-2d95-46a9-95ec-9251963d203d",\n               "method":"GET"\n            }\n         }\n      }\n   ],\n   "_links":{\n      "self":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2",\n         "method":"GET",\n      },\n      "components":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components",\n         "method":"GET"\n      },\n      "stop":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/stop",\n         "method":"POST",\n      },\n      "all":{\n         "href":"/sandboxes",\n         "method":"GET",\n      }\n   }\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response summary"}),(0,t.jsxs)(n.p,{children:["The response output properties of the ",(0,t.jsx)(n.code,{children:"blueprint start"})," method are described in the following table."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Sub Property"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The name of the sandbox. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"state"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:['The sandbox type ("Sandbox"). ',(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"components"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The resource model of the sandbox. ",(0,t.jsx)(n.code,{children:"(array)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsxs)(n.td,{children:["The name of the component. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsxs)(n.td,{children:['The component ("resource", "application", or "service"). ',(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"component_type"})}),(0,t.jsxs)(n.td,{children:["The resource model. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app_lifecycle"})}),(0,t.jsxs)(n.td,{children:['(Available for App components) The current state of the App ("undeployed"/"deployed"). ',(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"The actions that can be performed on the sandbox component (Get component details)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:"The actions that can be performed on the sandbox in the user's domain:"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"self"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get the details for the sandbox via a ",(0,t.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"components"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get all components in the sandbox via a ",(0,t.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stop"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get stop the sandbox via a ",(0,t.jsx)(n.code,{children:"POST"})," request."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"all"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get all available sandboxes according to the user's domain via a ",(0,t.jsx)(n.code,{children:"GET"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var t=s(11504);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);