"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84648],{1784:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(17624),n=s(4552);const i={sidebar_position:19},d="Get test execution report",o={id:"api-guide/new-jss-rest-api/get-test-execution-report",title:"Get test execution report",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-test-execution-report.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-test-execution-report",permalink:"/api-guide/new-jss-rest-api/get-test-execution-report",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-test-execution-report.md",tags:[],version:"2023.3",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Get Test Execution Services",permalink:"/api-guide/new-jss-rest-api/get-test-execution-services"},next:{title:"API Support for New Job Scheduling and Job Scheduling (1st Gen)",permalink:"/api-guide/new-jss-rest-api/api-support-for-jss-and-js"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"get-test-execution-report",children:"Get test execution report"}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets a specific test execution's report."}),"\n",(0,r.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"http://{Job Scheduling API IP}:[port#]/api/spaces/{space_name}/TestExecution/{id}/Report"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"space_name"}),(0,r.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,r.jsx)("br",{}),"For example:",(0,r.jsx)("br",{}),(0,r.jsxs)("code",{children:["ht",(0,r.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,r.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})," - included in ",(0,r.jsx)(t.a,{href:"./get-suite-execution",children:"Get suite execution"})]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET"})}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(t.p,{children:"Example header format:"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'{\n  "testResult": 1,\n  "name": "new_test (1).robot",\n  "path": "demo_tests1",\n  "startTime": "2020-10-28T20:05:07.472Z",\n  "endTime": "2020-10-28T20:05:37.653Z",\n  "testExecutionServerName": "My TES2",\n  "executedBy": "steven.g",\n  "report": "Test request data: {\\"domainName\\": \\"Test Lab\\", \\"test\\": \\"demo_tests1/new_test (1).robot\\", \\"reportsFullPath\\": \\"/home/jrobot/app/nfs/quali/archive/e1a812cd-192d-4617-8046-be5c5861d46c_steven.g\\", \\"reservationID\\": \\"e1a812cd192d46178046be5c5861d46c\\", \\"executionID\\": \\"9dc164b376004515ac94da4b933d1d7c\\", \\"testInactivityTimeoutInMinutes\\": 2, \\"username\\": \\"steven.g\\", \\"job\\": null, \\"parameters\\": \\"\\", \\"suite\\": null, \\"robot\\": null, \\"inputs\\": null}",\n  "errorCode": 0,\n  "errorMessage": ""\n}\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response summary"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"testResult"}),(0,r.jsxs)(t.td,{children:["Test result code. (numeric)",(0,r.jsx)("br",{}),"For details, see ",(0,r.jsx)(t.a,{href:"/jss/statuses-and-results",children:"Statuses and results"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"Test name. (string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"Test's folder path on the online test repository. (string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"startTime"}),(0,r.jsx)(t.td,{children:"Test execution's start time. (ISO 8601 Date/Time format)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"endTime"}),(0,r.jsx)(t.td,{children:"Test execution's completion time. (ISO 8601 Date/Time format)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"testExecutionServerName"}),(0,r.jsx)(t.td,{children:"Test Execution Service used to execute the test. (string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"executedBy"}),(0,r.jsx)(t.td,{children:"CloudShell user who executed the test. (string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"report"}),(0,r.jsx)(t.td,{children:"Test execution report. (json)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"errorCode"}),(0,r.jsxs)(t.td,{children:["Test execution's error code. (numeric)",(0,r.jsx)("br",{}),"For details, see ",(0,r.jsx)(t.a,{href:"/jss/statuses-and-results",children:"Statuses and results"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"errorMessage"}),(0,r.jsxs)(t.td,{children:["Test execution's error message. (string)",(0,r.jsx)("br",{}),"For details, see ",(0,r.jsx)(t.a,{href:"/jss/statuses-and-results",children:"Statuses and results"}),"."]})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>d});var r=s(11504);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);