"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[88999],{3560:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=i(74848),n=i(28453);const o={sidebar_position:6},r="Stop suite execution",d={id:"api-guide/new-jss-rest-api/stop-suite-execution",title:"Stop suite execution",description:"Description",source:"@site/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/stop-suite-execution.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/stop-suite-execution",permalink:"/api-guide/new-jss-rest-api/stop-suite-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/stop-suite-execution.md",tags:[],version:"2024.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get suite execution",permalink:"/api-guide/new-jss-rest-api/get-suite-execution"},next:{title:"Stop job execution",permalink:"/api-guide/new-jss-rest-api/stop-job-execution"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"stop-suite-execution",children:"Stop suite execution"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Stop an active suite execution."}),"\n",(0,s.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteExecution/{id}/stop"})}),"\n",(0,s.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"POST"})}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(t.p,{children:"Example header format:"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Content-Type: application/json"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"space_name"}),(0,s.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:["Suite execution's ID - included in the suite's URL. (string)",(0,s.jsx)("br",{}),"For example:",(0,s.jsx)("br",{}),(0,s.jsxs)("code",{children:["ht",(0,s.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,s.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"200 OK\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);