"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[45752],{73148:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(17624),t=s(4552);const o={sidebar_position:21},d="Execution Stop",r={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop",title:"Execution Stop",description:"Description",source:"@site/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Execution Id",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-id"},next:{title:"Owner Sandboxes",permalink:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"execution-stop",children:"Execution Stop"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Ends an execution of a component or sandbox command, per specified execution ID. Returns a successful response when the execution is stopped."}),"\n",(0,i.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/executions/{execution_id}"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description/Comments"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"execution_id"})}),(0,i.jsxs)(n.td,{children:["The id of the command's execution (",(0,i.jsx)(n.code,{children:"string"}),"). Can be retrieved via the ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/component-command-start",children:"component command start"})," and the ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-command-start",children:"sandbox command start"})," methods."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DELETE"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsxs)(n.p,{children:["Example header format for the ",(0,i.jsx)(n.code,{children:"execution stop"})," method:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsxs)(n.p,{children:["A successful response is displayed when the ",(0,i.jsx)(n.code,{children:"execution stop"})," method ends the execution:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n"result": "success",\n}\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>d});var i=s(11504);const t={},o=i.createContext(t);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);