"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[92888],{53448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(17624),i=t(4552);const o={sidebar_position:3},r="Running and Stopping Suite Executions",l={id:"jss/jss-portal/job-scheduling-page/running-and-stopping-suites",title:"Running and Stopping Suite Executions",description:"Suite execution flow",source:"@site/versioned_docs/version-2023.3/jss/jss-portal/job-scheduling-page/running-and-stopping-suites.md",sourceDirName:"jss/jss-portal/job-scheduling-page",slug:"/jss/jss-portal/job-scheduling-page/running-and-stopping-suites",permalink:"/jss/jss-portal/job-scheduling-page/running-and-stopping-suites",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/jss/jss-portal/job-scheduling-page/running-and-stopping-suites.md",tags:[],version:"2023.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deleting Suites, Jobs or Tests",permalink:"/jss/jss-portal/job-scheduling-page/managing-suites/delete-suites"},next:{title:"Running Custom Suite Executions",permalink:"/jss/jss-portal/job-scheduling-page/run-custom-suite"}},a={},c=[{value:"Suite execution flow",id:"suite-execution-flow",level:2},{value:"Running a suite execution",id:"running-a-suite-execution",level:2},{value:"Stopping a suite execution",id:"stopping-a-suite-execution",level:2}];function u(e){const n={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"running-and-stopping-suite-executions",children:"Running and Stopping Suite Executions"}),"\n",(0,s.jsx)(n.h2,{id:"suite-execution-flow",children:"Suite execution flow"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(35100).c+"",width:"663",height:"395"})}),"\n",(0,s.jsx)(n.p,{children:"CloudShell does the following for every job in the suite (in parallel):"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.strong,{children:"SuiteExecutionSettings__ValidateJobDataBeforeRun"})," environment variable is set to \u201ctrue\u201d, validate that the blueprints data and tests data is correct (= blueprints/tests were not deleted/modified since last suite edition). If validation fails, automatically cancel the job."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Lease the next available (free) test slot from the pool of available test execution servers (only included test execution servers that belong to the suite\u2019s space and support the suite\u2019s test type)."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If the system cannot lease the slot, it will try ",(0,s.jsx)(n.strong,{children:"TesManagerSettings__MaxRetries"})," times for the ",(0,s.jsx)(n.strong,{children:"TesManagerSettings__RetriesTimeoutInMinutes"})," period. If the period ends and no slot is available, automatically cancel the job and free the slot on the Test execution service."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send a sandbox reservation request to the sandbox service."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Wait for the response until timeout (See Define sandbox creation retries). If sandbox creation fails or timeout was reached, automatically cancel the job"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mark the test execution server\u2019s slot as \u201cRunning\u201d."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send the test for execution to the test execution server. Once the test ends, send the next test in the job for execution on the same test execution server\u2019s slot, using the same sandbox already created. In the same way, execute the job\u2019s tests. If the job\u2019s duration is reached and there is still a test running, stop the test and automatically cancel the job."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once all tests have completed their execution, free the test execution slot and end the sandbox."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-a-suite-execution",children:"Running a suite execution"}),"\n",(0,s.jsx)(n.p,{children:"A suite is run by the Test execution service, and can be initiated in one of the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manual user action in the Portal"}),"\n",(0,s.jsx)(n.li,{children:"API call"}),"\n",(0,s.jsx)(n.li,{children:"Automatically by the system when suite is configured with CRON expression"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Tests are run sequentially in the order they were added to the job. However, the execution order of the tests may appear randomized if there is a lack of sufficient Test Execution Services."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To run a suite execution:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Job Scheduling"})," dashboard, click the suite\u2019s ",(0,s.jsx)(n.strong,{children:"Run"})," button."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(28448).c+"",width:"948",height:"425"})}),"\n",(0,s.jsx)(n.p,{children:"Once a suite's job starts running, the job's original settings will be used regardless of any interim modifications/deletions to the job or its tests."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"stopping-a-suite-execution",children:"Stopping a suite execution"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To stop a suite execution:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Job Scheduling"})," dashboard, view a suite\u2019s executions (either by expanding the suite execution or clicking its ",(0,s.jsx)(n.strong,{children:"View"})," button)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the execution\u2019s Stop button."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(45020).c+"",width:"1072",height:"432"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28448:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/JssRunSuite-99751d8728864ac486293a7c3e8779ea.png"},45020:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/JssStopSuite-31ebb0327027adcef6b8365140ef971e.png"},35100:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/JssTestExecutionFlow-d97e11abe340072e8fe605062a286a31.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(11504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);