"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[14696],{65628:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=d(17624),i=d(4552);const r={sidebar_position:7},t="Sandbox Identifier",c={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier",title:"Sandbox Identifier",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-identifier.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sandboxes",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes"},next:{title:"Sandbox Components",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sandbox-identifier",children:"Sandbox Identifier"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets details and available actions for a particular sandbox."}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sandbox_identifier"})}),(0,s.jsxs)(n.td,{children:["The id of the sandbox (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsxs)(n.p,{children:["Example header format for the ",(0,s.jsx)(n.code,{children:"sandbox identifier"})," method:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sandbox identifier"})," method returns details about a particular sandbox (as opposed to multiple ones). The output includes details about the sandbox\xa0ID and the actions that can be performed on the sandbox:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n   "name":"Test Blprnt 2",\n   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",\n   "blueprint id":"44ec66d1-4ac8-4e4b-a3e8-c733482ea176",\n   "description":"",\n   "start_time":"2017-01-01T10:30:00Z",\n   "end_time":"2017-01-01T12:00:00Z",\n   "state":"Ready",\n   "setup_stage":"Provisioning""type":"Sandbox",\n   "components":[\n      {\n         "id":"82159835-2d95-46a9-95ec-9251963d203d",\n         "name":"MyApp",\n         "type":"Application",\n         "component_type":"Generic App Model",\n         "app_lifecycle":"undeployed",\n         "_links":{\n            "self":{\n               "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components/82159835-2d95-46a9-95ec-9251963d203d",\n               "method":"GET"\n            }\n         }\n      }\n   ],\n   "parameters":[\n      {\n         "name":"Param1",\n         "value":""\n      },\n      {\n         "name":"Param2",\n         "value":""\n      }\n   ]"permitted_users":[\n      {\n         "john.s",\n         "emily.b",\n         "lucas.w"\n      }\n   ]"_links":{\n      "self":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2",\n         "method":"GET",\n      },\n      "components":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components",\n         "method":"GET"\n      },\n      "output":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/output",\n         "method":"GET"\n      },\n      "stop":{\n         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/stop",\n         "method":"POST",\n      },\n      "all":{\n         "href":"/sandboxes",\n         "method":"GET",\n      }"blueprint":{\n         "href":"/blueprints/44ec66d1-4ac8-4e4b-a3e8-c733482ea176",\n         "method":"GET"\n      }\n   }\n}\n'})})]}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)(n.p,{children:["The response output properties of the ",(0,s.jsx)(n.code,{children:"sandbox identifier"})," method are described in the following table."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Sub Property"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The name of the sandbox. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blueprint_id"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The ID\xa0of the blueprint on which the sandbox is based."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["A description of the sandbox ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"start_time"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The time when the sandbox started ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"end_time"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["the time when the sandbox ended or is expected to end ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"state"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"setup_stage"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["(If the sandbox includes orchestration scripts) The current setup stage of the sandbox. Possible values: Provisioning, Connectivity, Configuration, Ended, None. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:['The sandbox type ("Sandbox"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"components"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The resource model of the sandbox. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsxs)(n.td,{children:["The name of the component. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsxs)(n.td,{children:['The component ("resource", "application", or "service"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"component_type"})}),(0,s.jsxs)(n.td,{children:["The resource model. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"app_lifecycle"})}),(0,s.jsxs)(n.td,{children:['(Available for App components) The current state of the App ("undeployed"/"deployed"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the sandbox component (Get component details)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"parameters"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"Any published input parameters defined for the sandbox's blueprint and the blueprint's resources."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsxs)(n.td,{children:["The parameter name ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsxs)(n.td,{children:["The parameter value ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"permitted_users"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"Sandbox's permitted users list. Specify as a comma-separated list of the CloudShell user names."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the sandbox in the user's domain:"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"self"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get the details for the sandbox via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"components"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get all components in the sandbox via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"output"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get all messages printed to the Output console via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stop"})}),(0,s.jsxs)(n.td,{children:["Provides a link to stop the sandbox via a ",(0,s.jsx)(n.code,{children:"POST"})," request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"all"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get all available sandboxes according to the user's domain, via a ",(0,s.jsx)(n.code,{children:"GET"})," request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blueprint"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get the details of the sandbox's blueprint via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,n,d)=>{d.d(n,{I:()=>c,M:()=>t});var s=d(11504);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);