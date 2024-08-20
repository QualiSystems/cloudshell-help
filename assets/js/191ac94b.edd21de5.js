"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25328],{38760:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(17624),n=s(4552);const r={sidebar_position:13},d="Start suite execution",o={id:"api-guide/new-jss-rest-api/start-suite-execution",title:"Start suite execution",description:"Description",source:"@site/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/start-suite-execution.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/start-suite-execution",permalink:"/api-guide/new-jss-rest-api/start-suite-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/start-suite-execution.md",tags:[],version:"2024.1",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Change suite owner",permalink:"/api-guide/new-jss-rest-api/change-suite-owner"},next:{title:"Start adhoc suite execution",permalink:"/api-guide/new-jss-rest-api/start-adhoc-suite-execution"}},c={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"start-suite-execution",children:"Start suite execution"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Runs a suite template (starts execution)."}),"\n",(0,i.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteTemplate/{id}/start"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"space_name"}),(0,i.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsxs)(t.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,i.jsx)("br",{}),"For example:",(0,i.jsx)("br",{}),(0,i.jsxs)("code",{children:["ht",(0,i.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,i.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"POST"})}),"\n",(0,i.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(t.p,{children:"Example header format:"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'{\n  "id": "a7f13fe5-ddee-4ec8-971f-a0e6784c8387"\n}\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Parameter"}),(0,i.jsx)("th",{children:"Description/Comments"})]}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"id"}),(0,i.jsx)("td",{children:"Suite execution id. (guid)"})]})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>d});var i=s(11504);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);