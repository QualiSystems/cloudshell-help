"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[21763],{74181:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=s(74848),r=s(28453);const d={sidebar_position:1},t="Login",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",title:"Login",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell Sandbox API Version 2 Reference Guide",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/"},next:{title:"Blueprints",permalink:"/2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"login",children:"Login"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Logs the user in to CloudShell, authenticates the user\u2019s credentials and domain, and returns an authorization token to be used with all subsequent requests. Requests that contain this token return information relevant for the specified domain, per the user's permissions."}),"\n",(0,i.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/login"})}),"\n",(0,i.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PUT"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsxs)(n.p,{children:["Example header format for the ",(0,i.jsx)(n.code,{children:"login"})," method:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(n.p,{children:["The user credentials (in JSON\xa0format). The parameters of the ",(0,i.jsx)(n.code,{children:"login"})," method include:"]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"username"})}),(0,i.jsxs)(n.td,{children:["The user's name. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsxs)(n.td,{children:["The user's password. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"domain"})}),(0,i.jsxs)(n.td,{children:["The user's domain. ",(0,i.jsx)(n.code,{children:"(string)"})]})]})]})]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsxs)(n.p,{children:["Example request input for the ",(0,i.jsx)(n.code,{children:"login"})," method in JSON format:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n   "username":"admin",\n   "password":"admin",\n   "domain":"Global"\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsxs)(n.p,{children:["The following is a sample authorization token returned by the ",(0,i.jsx)(n.code,{children:"login"})," method:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"a0IAmINiGUmVsoJS9IeG1A=="'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"login"})," method returns an authorization token that must be added to the header of each API method."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);