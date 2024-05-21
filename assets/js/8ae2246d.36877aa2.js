"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[97484],{46288:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=n(17624),r=n(4552);const d={sidebar_position:1},t="Login",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",title:"Login",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/login.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell Sandbox API Version 2 Reference Guide",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/"},next:{title:"Blueprints",permalink:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/blueprints"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"login",children:"Login"}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Logs the user in to CloudShell, authenticates the user\u2019s credentials and domain, and returns an authorization token to be used with all subsequent requests. Requests that contain this token return information relevant for the specified domain, per the user's permissions."}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/login"})}),"\n",(0,i.jsx)(s.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"PUT"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsxs)(s.p,{children:["Example header format for the ",(0,i.jsx)(s.code,{children:"login"})," method:"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(s.p,{children:["The user credentials (in JSON\xa0format). The parameters of the ",(0,i.jsx)(s.code,{children:"login"})," method include:"]}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"username"})}),(0,i.jsxs)(s.td,{children:["The user's name. ",(0,i.jsx)(s.code,{children:"(string)"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"password"})}),(0,i.jsxs)(s.td,{children:["The user's password. ",(0,i.jsx)(s.code,{children:"(string)"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"domain"})}),(0,i.jsxs)(s.td,{children:["The user's domain. ",(0,i.jsx)(s.code,{children:"(string)"})]})]})]})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsxs)(s.p,{children:["Example request input for the ",(0,i.jsx)(s.code,{children:"login"})," method in JSON format:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n   "username":"admin",\n   "password":"admin",\n   "domain":"Global"\n}\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Response exaple"}),(0,i.jsxs)(s.p,{children:["The following is a sample authorization token returned by the ",(0,i.jsx)(s.code,{children:"login"})," method:"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'"a0IAmINiGUmVsoJS9IeG1A=="'})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"login"})," method returns an authorization token that must be added to the header of each API method."]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>t});var i=n(11504);const r={},d=i.createContext(r);function t(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);