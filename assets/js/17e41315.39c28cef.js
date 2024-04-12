"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60292],{84473:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=s(17624),i=s(4552);const d={sidebar_position:20},r="Execution Id",c={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id",title:"Execution Id",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Sandbox Command Start",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start"},next:{title:"Execution Stop",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"execution-id",children:"Execution Id"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Gets details about a specific execution of a sandbox or component command, per specified execution ID."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/executions/{execution_id}"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"execution_id"})}),(0,t.jsxs)(n.td,{children:["The id of the command's execution (",(0,t.jsx)(n.code,{children:"string"}),"). Can be retrieved via the ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start",children:"component command start"})," and the ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start",children:"sandbox command start"})," methods."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsxs)(n.p,{children:["Example header format for the ",(0,t.jsx)(n.code,{children:"execution id"})," method:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"execution id"})," method returns details about a specific execution of a sandbox or component command and the actions that can be performed on the execution."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n   "id":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n   "supports_cancellation":"true",\n   "started":"""ended":"",\n   "status":"",\n   "output":"",\n   "_links":{\n      "self":{\n         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"GET"\n      },\n      "stop":{\n         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",\n         "method":"DELETE"\n      }\n   }\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response summary"}),(0,t.jsxs)(n.p,{children:["The response output properties of the ",(0,t.jsx)(n.code,{children:"execution id"})," method are described in the following table."]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Sub Property"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The ID\xa0of the execution. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"supports_cancellation"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["Whether or not stopping the execution before it is completed is supported. ",(0,t.jsx)(n.code,{children:"(bool)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"started"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The date and time at which the execution started. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ended"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["The date and time at which the execution ended. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"status"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:['The current status of the command execution - "pending", "running", "stopping", "canceled". ',(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"output"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsxs)(n.td,{children:["(If the command returns an output message) The command's output. ",(0,t.jsx)(n.code,{children:"(string)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:"The actions that can be performed on the execution:"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"self"})}),(0,t.jsxs)(n.td,{children:["Provides a link to get the execution's details via a ",(0,t.jsx)(n.code,{children:"GET"}),"\xa0request."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xa0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stop"})}),(0,t.jsxs)(n.td,{children:["(If the execution supports cancellation and is still running) Provides a link to end the execution via a ",(0,t.jsx)(n.code,{children:"DELETE"})," request."]})]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>r});var t=s(11504);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);