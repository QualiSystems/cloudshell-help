"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4264],{10036:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(17624),i=t(4552);const o={sidebar_position:1},r="Job Scheduling Terminology",l={id:"jss/job-scheduling-terminology",title:"Job Scheduling Terminology",description:"- Discovery Server (sometimes called Discovery Service or DS) is a server that discovers the tests. It is associated with a single test repository. It checks the repository for changes every x time, and re-imports the tests if any changes are detected.",source:"@site/docs/jss/job-scheduling-terminology.md",sourceDirName:"jss",slug:"/jss/job-scheduling-terminology",permalink:"/cloudshell-help/next/jss/job-scheduling-terminology",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/jss/job-scheduling-terminology.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"New Job Scheduling",permalink:"/cloudshell-help/next/jss/"},next:{title:"Job Scheduling Portal",permalink:"/cloudshell-help/next/jss/jss-portal/"}},a={},c=[];function d(e){const s={h1:"h1",li:"li",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"job-scheduling-terminology",children:"Job Scheduling Terminology"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Discovery Server"})," (sometimes called Discovery Service or DS) is a server that discovers the tests. It is associated with a single test repository. It checks the repository for changes every x time, and re-imports the tests if any changes are detected."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Job"})," is a collection of tests. The job\u2019s duration is calculated in the following way: sum (job\u2019s tests duration) + buffer. Every job is associated with a single blueprint that is launched as part of the job\u2019s execution, and all tests in a job share the same sandbox for execution."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Job duration"})," \u2013 This value is calculated as the sum of all the test duration values a job contains, plus an additional buffer value that is configured."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Suite"})," is a collection of jobs. This is an execution unit. Job or test cannot be executed outside the suite context."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Suite execution"})," is a single execution of a particular suite. By default, the system retains suite executions only from the last month."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"TES Slot"})," \u2013 Each TES has a predefined number of slots that indicates how many tests it can run in parallel (the default is 1). Each TES slot can be in one of the following states","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Free"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Leased"})," - in this state the slot is considered busy. The job execution has started, the system waits for the sandbox."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Running"})," - in this state the slot is considered busy. Test is running on the slot."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Test"})," is an individual unit of work defined by the user that is executed on a designated sandbox. Tests are associated with a test type and a single job and return test status results such as \u201cPASSED\u201d, \u201cFAILED\u201d, etc. Multiple tests in the same job are run sequentially (in their defined order) on the job\u2019s sandbox. Tests have defined durations."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Test execution server"})," (sometimes called Test Execution Service or TES) is a server that runs the tests. You define in the configuration how many TES servers your deployment needs. Each TES is associated with one or more spaces in CloudShell, and is configured to run a specific type of test, such as Robot, Selenium, etc. By design, only one test type (of your choosing) can be used across all your suites in CloudShell."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>r});var n=t(11504);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);