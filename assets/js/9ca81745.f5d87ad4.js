"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25056],{14676:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(17624),i=t(4552);const r={sidebar_position:3},l="Statuses and results",d={id:"jss/statuses-and-results",title:"Statuses and results",description:"Below are the possible statuses and descriptions for suite, job and test executions.",source:"@site/versioned_docs/version-2023.3/jss/statuses-and-results.md",sourceDirName:"jss",slug:"/jss/statuses-and-results",permalink:"/cloudshell-help/jss/statuses-and-results",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/jss/statuses-and-results.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Test Repositories Dashboard",permalink:"/cloudshell-help/jss/jss-portal/job-scheduling-servers/test-repositories"},next:{title:"New Job Scheduling Service Logs",permalink:"/cloudshell-help/jss/new-jss-logs"}},o={},c=[{value:"Suite statuses",id:"suite-statuses",level:2},{value:"Job statuses",id:"job-statuses",level:2},{value:"Test results",id:"test-results",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"statuses-and-results",children:"Statuses and results"}),"\n",(0,n.jsx)(s.p,{children:"Below are the possible statuses and descriptions for suite, job and test executions."}),"\n",(0,n.jsx)(s.p,{children:"Note that every API method responds with the standard HTTP error codes (200, 300, 400\u2026) but also includes a response body for errors. Within the error body, it is possible to find the list of errors in a human-readable manner together with an internal application error code that can help Quali when debugging an issue. For example, trying to stop an already finished suite will result in a 400 HTTP error code with the following JSON response body:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n   "errors":[\n      {\n         "message":"Suite execution already completed",\n         "name":"SuiteExecutionCompleted",\n         "code":1006\n      }\n   ]\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["In the above response, ",(0,n.jsx)(s.strong,{children:"1006"})," is the internal application error code for the specific use case and the ",(0,n.jsx)(s.strong,{children:"message"})," is the human-readable error description"]}),"\n",(0,n.jsx)(s.h2,{id:"suite-statuses",children:"Suite statuses"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"API Status"}),(0,n.jsx)(s.th,{children:"Status"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Not started"}),(0,n.jsx)(s.td,{children:"Triggered. None of the suite\u2019s jobs have started running, waiting for either slot or sandbox."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Running"}),(0,n.jsx)(s.td,{children:"At least one job started running."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Succeeded"}),(0,n.jsx)(s.td,{children:"All tests in all jobs have executed with test result either COMPLETED or PASSED."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Failed"}),(0,n.jsx)(s.td,{children:"All tests in all jobs have executed with at least 1 test with test result FAILED."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Terminated"}),(0,n.jsx)(s.td,{children:"At least one test has test result TERMINATED."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"Automatically Cancelled"}),(0,n.jsx)(s.td,{children:"Option 1 - sandbox error (active with error, didn't find a sandbox in the retries). Option 2 - no test slot found"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Manually Cancelled"}),(0,n.jsx)(s.td,{children:"Suite execution was cancelled manually."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"job-statuses",children:"Job statuses"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"API Status"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"0"}),(0,n.jsx)("td",{children:"Not Started"}),(0,n.jsx)("td",{children:"Triggered. Job has not started running, waiting for either slot or sandbox."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"1"}),(0,n.jsx)("td",{children:"Running"}),(0,n.jsx)("td",{children:"Test execution is in progress (test has not failed/terminated)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"2"}),(0,n.jsx)("td",{children:"Succeeded"}),(0,n.jsx)("td",{children:"All tests have been executed with COMPLETED or PASSED result."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"3"}),(0,n.jsx)("td",{children:"Failed"}),(0,n.jsx)("td",{children:"All tests have been executed. At least 1 test with result FAILED."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"4"}),(0,n.jsx)("td",{children:"Terminated"}),(0,n.jsx)("td",{children:"At least 1 test with result TERMINATED."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"5"}),(0,n.jsx)("td",{children:"Automatically Cancelled"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Job was automatically cancelled."}),(0,n.jsx)(s.p,{children:"Possible reasons are:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Validation of job test data failed"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Max retry count limit exceeded when trying to find an available slot"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Max retry time limit exceeded when trying to find an available slot"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Teardown started while tests are running"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Job details:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Job's blueprint was deleted or modified in the online repository"}),"\n",(0,n.jsx)(s.li,{children:"CloudShell detected that the job's test(s) was deleted or modified"}),"\n",(0,n.jsx)(s.li,{children:"Job duration was reached while some of the job\u2019s tests did not execute"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Sandbox errors:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Sandbox creation took too long (configurable value ~35 minutes)"}),"\n",(0,n.jsx)(s.li,{children:"Sandbox cannot be used (has errors or failed to be created)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Connection errors:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Test Execution Service was unable to load blueprint details due to Quali Server connection failure"}),"\n",(0,n.jsx)(s.li,{children:"Job Scheduling Service was unable to send tests to Test Execution Service for execution"}),"\n",(0,n.jsx)(s.li,{children:"Job Scheduling Service was unable to publish the sandbox request to RabbitMQ"}),"\n"]}),"\n"]}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"6"}),(0,n.jsx)("td",{children:"Manually Cancelled"}),(0,n.jsx)("td",{children:"The job was cancelled manually while in progress (Not Started, Running)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"10"}),(0,n.jsx)("td",{children:"Waiting for Job Slot"}),(0,n.jsx)("td",{children:"Job is waiting for a suitable test execution server slot to become available."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"11"}),(0,n.jsx)("td",{children:"Waiting for Sandbox"}),(0,n.jsx)("td",{children:"Job is waiting for sandbox to become Active."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"test-results",children:"Test results"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"API Result"}),(0,n.jsx)("th",{children:"Result"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"0"}),(0,n.jsx)("td",{children:"Completed"}),(0,n.jsx)("td",{children:"Test finished execution."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"1"}),(0,n.jsx)("td",{children:"Passed"}),(0,n.jsx)("td",{children:"Test completed successfully."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"2"}),(0,n.jsxs)("td",{children:["Failed",(0,n.jsx)("span",{style:{color:"red"},children:(0,n.jsx)("sup",{children:"*"})})]}),(0,n.jsx)("td",{children:"An error during the test\u2019s execution caused it to fail."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"3"}),(0,n.jsxs)("td",{children:["Terminated",(0,n.jsx)("span",{style:{color:"red"},children:(0,n.jsx)("sup",{children:"*"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Possible reasons are:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Test execution was stopped by the user or job status is \u201cAutomatically Cancelled\u201d"}),"\n",(0,n.jsx)(s.li,{children:"The Test execution service failed to start the test:"}),"\n",(0,n.jsx)(s.li,{children:"API request failed"}),"\n",(0,n.jsx)(s.li,{children:"Test execution service failed to clone/pull repository (failed to create workspace)"}),"\n",(0,n.jsx)(s.li,{children:"Test execution service failed to create virtual environment"}),"\n",(0,n.jsx)(s.li,{children:"Requirements file is missing"}),"\n",(0,n.jsx)(s.li,{children:"Test execution failed/aborted on the Test execution service"}),"\n",(0,n.jsx)(s.li,{children:"Test execution service, which had a running job, was deleted from the Job Scheduling portal"}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"4"}),(0,n.jsxs)("td",{children:["FailedToStart",(0,n.jsx)("span",{style:{color:"red"},children:(0,n.jsx)("sup",{children:"*"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Job triggered. Test failed to execute."}),(0,n.jsx)(s.p,{children:"Possible reasons:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Test execution service failed to clone/pull the repository (= failed to create workspace)"}),"\n",(0,n.jsx)(s.li,{children:"Test execution service ES failed to created virtual environment"}),"\n",(0,n.jsx)(s.li,{children:"Test's requirements file is missing"}),"\n"]})]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("span",{style:{color:"red"},children:"*"})," Test execution failure does not stop the job from running its other tests."]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>d,M:()=>l});var n=t(11504);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);