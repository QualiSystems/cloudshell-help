"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[83516],{89384:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=s(17624),i=s(4552);const o={sidebar_position:7},r="Stop job execution",d={id:"api-guide/new-jss-rest-api/stop-job-execution",title:"Stop job execution",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/stop-job-execution.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/stop-job-execution",permalink:"/api-guide/new-jss-rest-api/stop-job-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/stop-job-execution.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Stop suite execution",permalink:"/api-guide/new-jss-rest-api/stop-suite-execution"},next:{title:"Get suite templates",permalink:"/api-guide/new-jss-rest-api/get-suite-templates"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"stop-job-execution",children:"Stop job execution"}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Stops a specific job's execution."}),"\n",(0,n.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteExecution/{id}/JobExecution/{job_execution_id}/stop"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"space_name"}),(0,n.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsxs)(t.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,n.jsx)("br",{}),"For example:",(0,n.jsx)("br",{}),(0,n.jsxs)("code",{children:["ht",(0,n.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,n.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"job_execution_id"}),(0,n.jsxs)(t.td,{children:["Job's id - included in the ",(0,n.jsx)(t.strong,{children:"jobs"})," section of the ",(0,n.jsx)(t.a,{href:"./get-suite-execution",children:"Get suite execution"}),"'s response. For example:",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:'..."jobs": [{"id": "205aac56-5826-4b5e-a96a-5887b0940b40",...'})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST"})}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(t.p,{children:"Example header format:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{\n  "errors": [\n    {\n      "message": "\'843b572e-e768-47d7-8333-48b2c6f23d8b\': Execution already completed",\n      "name": "ExecutionCompleted",\n      "code": 1007\n    }\n  ]\n}\n'})})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Response summary"}),(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Description/Comments"})]}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"name"}),(0,n.jsx)("td",{children:"ExecutionCompleted (string)"})]})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>d,M:()=>r});var n=s(11504);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);