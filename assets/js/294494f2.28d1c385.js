"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69016],{90200:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var d=n(17624),i=n(4552);const o={sidebar_position:16},t="Sandbox Stop",r={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop",title:"Sandbox Stop",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-stop.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Sandbox Extend",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-extend"},next:{title:"Sandbox Commands",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-commands"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"sandbox-stop",children:"Sandbox Stop"}),"\n",(0,d.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,d.jsx)(s.p,{children:"Ends a sandbox per specified sandbox ID. Returns a successful response when the sandbox is stopped."}),"\n",(0,d.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/stop"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Description/Comments"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"sandbox_identifier"})}),(0,d.jsxs)(s.td,{children:["The id of the sandbox (",(0,d.jsx)(s.code,{children:"string"}),"). Can be retrieved via ",(0,d.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,d.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"POST"})}),"\n",(0,d.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Headers"}),(0,d.jsxs)(s.p,{children:["Example header format for the ",(0,d.jsx)(s.code,{children:"sandbox stop"})," method:"]}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,d.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Response example"}),(0,d.jsxs)(s.p,{children:["A successful response is displayed when the ",(0,d.jsx)(s.code,{children:"sandbox stop"})," method ends the sandbox:"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:'{\n   "result":"success",\n   "_links":{\n      "all":{\n         "href":"/sandboxes",\n         "method":"GET"\n      }\n   }\n}\n'})})]})]})}function p(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>r,M:()=>t});var d=n(11504);const i={},o=d.createContext(i);function t(e){const s=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(o.Provider,{value:s},e.children)}}}]);