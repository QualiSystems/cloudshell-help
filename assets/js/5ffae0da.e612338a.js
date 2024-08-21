"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60683],{7239:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=n(74848),d=n(28453);const o={sidebar_position:7},r="Sandbox Stop",t={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop",title:"Sandbox Stop",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandbox-stop.md",tags:[],version:"2023.3",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sandboxes",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes"},next:{title:"CloudShell Sandbox API Version 2 Reference Guide",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"sandbox-stop",children:"Sandbox Stop"})}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Ends a sandbox per specified sandbox ID. Returns a successful response when the sandbox is stopped."}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v1/sandboxes/{sandbox_identifier}/stop"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sandbox_identifier"})}),(0,i.jsxs)(s.td,{children:["The id of the sandbox (",(0,i.jsx)(s.code,{children:"string"}),"). Can be retrieved via ",(0,i.jsx)(s.a,{href:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/sandboxes",children:"sandboxes"}),", ",(0,i.jsx)(s.a,{href:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-1-reference-guide/blueprint-start",children:"blueprint start"})," and from the sandbox\xa0ID segment in the CloudShell Portal URL."]})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"POST"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsxs)(s.p,{children:["Example header format for the ",(0,i.jsx)(s.code,{children:"sandbox stop"})," method:"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsxs)(s.p,{children:["A successful response is displayed when the ",(0,i.jsx)(s.code,{children:"sandbox stop"})," method ends the sandbox:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n   "result":"success",\n   "_links":{\n      "all":{\n         "href":"/sandboxes",\n         "method":"GET"\n      }\n   }\n}\n'})})]})]})}function p(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>t});var i=n(96540);const d={},o=i.createContext(d);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);