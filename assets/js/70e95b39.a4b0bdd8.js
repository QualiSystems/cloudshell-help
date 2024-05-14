"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[81132],{98500:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=s(17624),r=s(4552);const i={sidebar_position:17},t="Sandbox Commands",c={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands",title:"Sandbox Commands",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Sandbox Stop",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop"},next:{title:"Sandbox Command Name",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-name"}},o={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"sandbox-commands",children:"Sandbox Commands"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Gets details for all the blueprint commands in the sandbox."}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/commands"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sandbox_identifier"})}),(0,d.jsxs)(n.td,{children:["The id of the sandbox (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,d.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"sandbox commands"})," method:"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sandbox commands"})," method returns details about the blueprint commands in a particular sandbox and the actions that can be performed on each command."]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'[\n   {\n      "name":"my_command",\n      "description":"",\n      "params":[\n         {\n            "name":"param1",\n            "description":"",\n            "type":"numeric""possible values":[\n               \n            ],\n            "default value":"""mandatory":false\n         }\n      ]"executions":[\n         {\n            "id":"0daead01-8e57-4064-81d4-84911effa911",\n            "status":"Pending",\n            "supports_Cancelation":"false",\n            "_links":{\n               \n            }\n         }\n      ],\n      "_links":{\n         "self":{\n            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/commands/my-command",\n            "method":"GET"\n         },\n         "start":{\n            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/commands/my-command/start",\n            "method":"POST"\n         }\n      }\n   }\n[\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"sandbox commands"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The name of the command. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["A short description of the command. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"params"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The parameters needed for the command execution. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsxs)(n.td,{children:["The parameter name. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsxs)(n.td,{children:["The parameter description. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:['The parameter type ("string", "numeric", or "lookup"). ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"possible values"})}),(0,d.jsxs)(n.td,{children:["All the possible values for this parameter. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"default value"})}),(0,d.jsxs)(n.td,{children:["The default value of the parameter. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mandatory"})}),(0,d.jsxs)(n.td,{children:["Whether or not the parameter is mandatory for the command execution. ",(0,d.jsx)(n.code,{children:"(bool)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"executions"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The execution history for this command. ",(0,d.jsx)(n.code,{children:"(array)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsxs)(n.td,{children:["The ID\xa0of the execution. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"status"})}),(0,d.jsxs)(n.td,{children:['The current status of the command execution ("pending", "running", "stopping", "canceled", ',(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"supports_cancellation"})}),(0,d.jsxs)(n.td,{children:["Whether or not stopping the execution before it is completed is supported. ",(0,d.jsx)(n.code,{children:"(bool)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"The actions that can be performed on the execution (Get execution details, Delete execution)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_links"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"The actions that can be performed on a sandbox's blueprint command in the user's domain:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"self"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get a command's details via a ",(0,d.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"start"})}),(0,d.jsxs)(n.td,{children:["Provides a link to get start a command's execution via a ",(0,d.jsx)(n.code,{children:"POST"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var d=s(11504);const r={},i=d.createContext(r);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);