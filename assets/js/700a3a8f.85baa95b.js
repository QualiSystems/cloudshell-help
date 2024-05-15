"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[76400],{8788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var d=s(17624),i=s(4552);const t={sidebar_position:15},r="Sandbox Extend",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend",title:"Sandbox Extend",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Sandbox Output",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-output"},next:{title:"Sandbox Stop",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"sandbox-extend",children:"Sandbox Extend"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Extends the duration of a particular sandbox by a specified timeframe."}),"\n",(0,d.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/extend"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sandbox_identifier"})}),(0,d.jsxs)(n.td,{children:["The id of the sandbox (",(0,d.jsx)(n.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,d.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"POST"})}),"\n",(0,d.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(n.p,{children:["Example header format for the ",(0,d.jsx)(n.code,{children:"sandbox extend"})," method:"]}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request body"}),(0,d.jsxs)(n.p,{children:["The scheduling parameter of the sandbox in JSON\xa0format. The elements of the ",(0,d.jsx)(n.code,{children:"sandbox extend"})," method include:"]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"extended_time"})}),(0,d.jsxs)(n.td,{children:["The additional duration required for the sandbox. Time must be specified in ISO 8601 format (for example PT23H). ",(0,d.jsx)(n.code,{children:"(string)"})," ",(0,d.jsx)("br",{}),' If you do not specify a value, the following error message will be displayed: "Parameter is not a valid extended time".']})]})})]})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Request example"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n   "extended_time":"PT2H5M"\n}\n'})})]}),"\n",(0,d.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sandbox extend"})," method returns details about the extended sandbox. The output includes details about the sandbox\xa0ID and the new time of the sandbox's duration:"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'{\n   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",\n   "name":"Test Blprnt2",\n   "start_time":"2017-01-01T10:30:00Z",\n   "end_time":"2017-01-01T12:35:00Z",\n   "remaining_time":"PT24H30M"\n}\n'})})]}),"\n",(0,d.jsxs)(s,{children:[(0,d.jsx)("summary",{children:"Response summary"}),(0,d.jsxs)(n.p,{children:["The response output properties of the ",(0,d.jsx)(n.code,{children:"sandbox extend"})," method are described in the following table."]}),(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Sub Property"}),(0,d.jsx)(n.th,{children:"Description/Comments"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The name of the sandbox. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"start_time"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The time when the sandbox started ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"end_time"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The time when the extended sandbox ends. ",(0,d.jsx)(n.code,{children:"(string)"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"remaining_time"})}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsxs)(n.td,{children:["The time left for the sandbox ",(0,d.jsx)(n.code,{children:"(string)"})]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>r});var d=s(11504);const i={},t=d.createContext(i);function r(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);