"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[31972],{9068:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=s(17624),r=s(4552);const o={sidebar_position:12},d="Component Command Start",i={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start",title:"Component Command Start",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Component Command Name",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-name"},next:{title:"Sandbox Activity",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-activity"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"component-command-start",children:"Component Command Start"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Executes a particular command or connected command for a specific component (resource, service, or App) in a sandbox."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}/commands/{command_name}/start"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sandbox_identifier"})}),(0,t.jsxs)(n.td,{children:["The id of the sandbox (",(0,t.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"component_id"})}),(0,t.jsxs)(n.td,{children:["The id of the component (",(0,t.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-components",children:"sandbox components"})," and ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"command_name"})}),(0,t.jsxs)(n.td,{children:["The name of the command (",(0,t.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-component-commands",children:"sandbox component commands"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsxs)(n.p,{children:["Example header format for the ",(0,t.jsx)(n.code,{children:"component command start"})," method:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(n.p,{children:["The input parameters of the command in JSON\xa0format. The elements of the ",(0,t.jsx)(n.code,{children:"component command start"})," method include."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"command_tag"})}),(0,t.jsxs)(n.td,{children:["Tag defined for the connected command. Connected command tags are used to define categories of functionality.",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Possible values: ",(0,t.jsx)("br",{})," - power ",(0,t.jsx)("br",{}),' - remote_<command name>: For example, "remote_save_snapshot" for vCenter VM save snapshot.']}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"params"}),(0,t.jsxs)(n.td,{children:["Any input parameters required for running the command must be included in the request.(array) ",(0,t.jsx)("br",{}),' If you do not specify the input parameters, you will get the following error message: "No values were provided for the following mandatory inputs: {Parameter name}".']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"connected_ports_full_path"})}),(0,t.jsxs)(n.td,{children:["List of connected ports to use in this operation. (array) ",(0,t.jsx)("br",{})," Include the full path from the root resource to each port, separated by slashes. For example: Switch20/Blade5/PowerPort1. Leave blank to perform the connected operation on all of the specified resource\u2019s connected ports."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"printOutput"})}),(0,t.jsxs)(n.td,{children:["Whether or not the command output is displayed in the console or command line. ",(0,t.jsx)(n.code,{children:"(bool)"})]})]})]})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request example for regular commands"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n   "params":[\n      {\n         "name":"Version",\n         "value":"1.0.223.7"\n      }\n   ],\n   "printOutput":"true/false"\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request example for connected commands"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  "command_tag": "power",\n  "params": [\n    {\n      "name": "Version",\n      "value": "1.0.223.7"\n    }\n  ],\n  "connected_ports_full_path": [\n    "Switch20/Blade5/PowerPort1"\n  ],\n  "printOutput": true\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"component command start"})," method returns details about a specific execution of the sandbox component command. The response includes the command's execution ID\xa0and the actions that can be performed on the execution."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n   "executionId":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n   "supports_cancellation":true"_links":{\n      "self":{\n         "href":"/execution/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"GET"\n      },\n      "stop":{\n         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"DELETE"\n      }\n   }\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response summary"}),(0,t.jsxs)(n.p,{children:["The response output properties of the ",(0,t.jsx)(n.code,{children:"component command start"})," method are described in the following table."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Sub Property"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"executionId"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The ID\xa0of the execution. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"supports_cancellation"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["Whether or not stopping the execution before it is completed is supported. ",(0,t.jsx)(n.code,{children:"(bool)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:"The actions that can be performed on the execution:"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"self"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get a the execution's details via a ",(0,t.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stop"})}),(0,t.jsxs)(n.td,{children:["Provides a link to end the execution via a ",(0,t.jsx)(n.code,{children:"DELETE"})," request."]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>i,M:()=>d});var t=s(11504);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);