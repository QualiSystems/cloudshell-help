"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[29036],{16980:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=d(17624),r=d(4552);const i={sidebar_position:11},t="Component Command Name",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name",title:"Component Command Name",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Sandbox Component Commands",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-commands"},next:{title:"Component Command Start",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"component-command-name",children:"Component Command Name"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets details about a particular command for a specific component (resource, service, or App) in a sandbox."}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}/commands/{command_name}"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sandbox_identifier"})}),(0,s.jsxs)(n.td,{children:["The id of the sandbox (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,s.jsx)(n.a,{href:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"component_id"})}),(0,s.jsxs)(n.td,{children:["The id of the component (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",children:"sandbox components"})," and ",(0,s.jsx)(n.a,{href:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"command_name"})}),(0,s.jsxs)(n.td,{children:["The name of the command (",(0,s.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,s.jsx)(n.a,{href:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-commands",children:"sandbox component commands"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsxs)(n.p,{children:["Example header format for the ",(0,s.jsx)(n.code,{children:"component command name"})," method:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"component command name"})," method returns details about a specific component command in a particular sandbox and the actions that can be performed on the command."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n   "name":"my_command",\n   "description":"",\n   "params":[\n      {\n         "name":"param1",\n         "description":"",\n         "type":"numeric""possible values":[\n            \n         ],\n         "default value":"""mandatory":false\n      }\n   ]"executions":[\n      {\n         "id":"0daead01-8e57-4064-81d4-84911effa911",\n         "status":"Pending",\n         "supports_Cancelation":"false",\n         "_links":{\n            "self":{\n               "href":"/executions/0daead01-8e57-4064-81d4-84911effa911",\n               "method":"GET"\n            }"stop":{\n               "href":"/executions/0daead01-8e57-4064-81d4-84911effa911",\n               "method":"DELETE"\n            }\n         }\n      }\n   ],\n   "_links":{\n      "self":{\n         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/commands/my-command",\n         "method":"GET"\n      },\n      "start":{\n         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/commands/my-command/start",\n         "method":"POST"\n      }\n   }\n}\n'})})]}),"\n",(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)(n.p,{children:["The response output properties of the ",(0,s.jsx)(n.code,{children:"component command name"})," method are described in the following table."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Sub Property"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The name of the command. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["A short description of the command. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"params"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The parameters needed for the command execution. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsxs)(n.td,{children:["The parameter name. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsxs)(n.td,{children:["The parameter description. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsxs)(n.td,{children:['The parameter type ("string", "numeric", or "lookup"). ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"possible values"})}),(0,s.jsxs)(n.td,{children:["All the possible values for this parameter. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"default value"})}),(0,s.jsxs)(n.td,{children:["The default value of the parameter. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mandatory"})}),(0,s.jsxs)(n.td,{children:["Whether or not the parameter is mandatory for the command execution. ",(0,s.jsx)(n.code,{children:"(bool)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"executions"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsxs)(n.td,{children:["The execution history for this command. ",(0,s.jsx)(n.code,{children:"(array)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsxs)(n.td,{children:["The ID\xa0of the execution. ",(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"status"})}),(0,s.jsxs)(n.td,{children:['The current status of the command execution ("pending", "running", "stopping", "canceled", ',(0,s.jsx)(n.code,{children:"(string)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"supports_cancellation"})}),(0,s.jsxs)(n.td,{children:["Whether or not stopping the execution before it is completed is supported. ",(0,s.jsx)(n.code,{children:"(bool)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the execution (Get execution details, Delete execution)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_links"})}),(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:"The actions that can be performed on the sandbox's component command in the user's domain:"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"self"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get the command's details via a ",(0,s.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\xa0"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"start"})}),(0,s.jsxs)(n.td,{children:["Provides a link to get start the command's execution via a ",(0,s.jsx)(n.code,{children:"POST"})," request."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"command_tag"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'(For connected commands only) Tag defined for the command. Options are "power" or "remote_(remote command name)"'})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,n,d)=>{d.d(n,{I:()=>o,M:()=>t});var s=d(11504);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);