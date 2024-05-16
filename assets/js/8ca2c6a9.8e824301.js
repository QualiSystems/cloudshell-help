"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52932],{74052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var d=s(17624),i=s(4552);const r={sidebar_position:19},t="Sandbox Command Start",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start",title:"Sandbox Command Start",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Sandbox Command Name",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-name"},next:{title:"Execution Id",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"sandbox-command-start",children:"Sandbox Command Start"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Executes a particular command for a specific sandbox."}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/commands/{command_name}/start"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sandbox_identifier"})}),(0,d.jsxs)(n.td,{children:["The id of the sandbox (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"command_name"})}),(0,d.jsxs)(n.td,{children:["The name of the command (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands",children:"sandbox  commands"}),"."]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"POST"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"sandbox command start"})," method:"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request body"}),(0,d.jsxs)(n.p,{children:["The input parameters of the command in JSON\xa0format. The elements of the ",(0,d.jsx)(n.code,{children:"sandbox command start"})," method include."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"params"})}),(0,d.jsxs)(n.td,{children:['Any input parameters required for running the command must be included in the request. If you do not specify the input parameters, you will get the following error message: "No values were provided for the following mandatory inputs: {Parameter name}". ',(0,d.jsx)(n.code,{children:"(Array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"printOutput"})}),(0,d.jsxs)(n.td,{children:["Whether or not the command output is displayed in the console or command line. ",(0,d.jsx)(n.code,{children:"(bool)"})]})]})]})]})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request example"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n   "params":[\n      {\n         "name":"string",\n         "value":"string"\n      }\n   ]\n}\n'})})]}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sandbox command start"})," method returns details about a specific execution of the sandbox command. The response includes the command's execution ID\xa0and the actions that can be performed on the execution."]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n   "executionId":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n   "supports_cancellation":true"_links":{\n      "self":{\n         "href":"/execution/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"GET"\n      },\n      "stop":{\n         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"DELETE"\n      }\n   }\n}\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"sandbox command start"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"executionId"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The ID\xa0of the execution. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"supports_cancellation"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["Whether or not stopping the execution before it is completed is supported. ",(0,d.jsx)(n.code,{children:"(bool)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"The actions that can be performed on the execution:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"self"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get the execution's details via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"stop"})}),(0,d.jsxs)(n.td,{children:["Provides a link to end the execution via a ",(0,d.jsx)(n.code,{children:"DELETE"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var d=s(11504);const i={},r=d.createContext(i);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);