"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[67882],{3472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(17624),s=i(4552);const r={sidebar_position:2},d="Get Administration API token",a={id:"api-guide/cs-admin-rest-api/get-admin-api-token",title:"Get Administration API token",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-admin-api-token.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-admin-api-token",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-admin-api-token",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-admin-api-token.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Administration REST API Response Codes",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/cs-admin-rest-api-response-code"},next:{title:"Get all domains",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains"}},o={},l=[{value:"Description",id:"description",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-administration-api-token",children:"Get Administration API token"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Gets an authentication token for Administration API."}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:"PUT"}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"URL"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"http://{Admin API IP}:{port#}/Api/Auth/Login\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Username"}),(0,t.jsx)(n.td,{children:"(string) CloudShell username."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Password"}),(0,t.jsx)(n.td,{children:"(string) CloudShell user password."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Domain"}),(0,t.jsx)(n.td,{children:"(string) CloudShell domain."})]})]})]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "Username":"admin",\n    "Password":"admin",\n    "Domain":"Global"\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'"UJvRg9mn6EywpLYMpRPiQg2"\n'})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"200\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>d});var t=i(11504);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);