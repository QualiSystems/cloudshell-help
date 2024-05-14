"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[16220],{35724:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(17624),t=n(4552);const r={sidebar_position:2},o="New Job Scheduling API Login",d={id:"api-guide/new-jss-rest-api/jss-api-login",title:"New Job Scheduling API Login",description:"Description",source:"@site/docs/api-guide/new-jss-rest-api/jss-api-login.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/jss-api-login",permalink:"/cloudshell-help/next/api-guide/new-jss-rest-api/jss-api-login",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/new-jss-rest-api/jss-api-login.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"New Job Scheduling REST API Response Codes",permalink:"/cloudshell-help/next/api-guide/new-jss-rest-api/jss-rest-api-response-codes"},next:{title:"Revoke login",permalink:"/cloudshell-help/next/api-guide/new-jss-rest-api/revoke-login"}},l={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const s={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"new-job-scheduling-api-login",children:"New Job Scheduling API Login"}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["Both the new CloudShell Job Scheduling Portal and the API use token-based authentication. When a user logs in, an access token is generated for the user's session together with a refresh-token that can be used to create new access tokens in case the access token expires, providing you with maximum control over access to the system by 3",(0,i.jsx)("sup",{children:"rd"})," party applications and users."]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"The New Job Scheduling does not include the Global domain. This means two things:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"There is no central location for reviewing activity from all domains in the Job Scheduling Portal."}),"\n",(0,i.jsx)(s.li,{children:"Users associated only with the Global domain cannot access the Job Scheduling Portal or API."}),"\n"]})]}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{Job Scheduling API IP}:{port#}/api/Account/login"})}),"\n",(0,i.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"POST"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(s.p,{children:"Example header format:"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"username"}),(0,i.jsx)(s.td,{children:"CloudShell admin username. (string)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"password"}),(0,i.jsx)(s.td,{children:"CloudShell admin password. (string)"})]})]})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n  "username": "string",\n  "password": "string"\n}\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n  "accessToken": "oHk5r-5R-lYlB7ekIjdk6FVKHs7GXwIdZxU6s7M9Rdo",\n  "refreshToken": "rXd4YhgsW0GdoYuim6k-TeZPugPAOr5uN-kWjGMPNzo",\n  "tokenType": "Bearer",\n  "expiresIn": 18000\n}\n'})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accessToken"}),(0,i.jsx)(s.td,{children:"Token for authorizing REST API calls. (guid)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"refreshtoken"}),(0,i.jsx)(s.td,{children:"Token for refreshing expries accessToken. (guid)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tokenType"}),(0,i.jsx)(s.td,{children:"Token type. (string)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"expiresIn"}),(0,i.jsx)(s.td,{children:"Validity period in seconds. (Numeric)"})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>o});var i=n(11504);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);