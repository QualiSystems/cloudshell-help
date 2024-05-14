"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4313],{88092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>r});var i=n(17624),o=n(4552);const s={},a="Running Automation Suites",u={id:"portal/job-scheduling/running-automation-suites/index",title:"Running Automation Suites",description:"There are three types of automation suites that can be run: automation suite templates that can be run multiple times, customized versions of an automation suite template, and an ad hoc automation suite which you define on the fly and run once.",source:"@site/docs/portal/job-scheduling/running-automation-suites/index.md",sourceDirName:"portal/job-scheduling/running-automation-suites",slug:"/portal/job-scheduling/running-automation-suites/",permalink:"/cloudshell-help/next/portal/job-scheduling/running-automation-suites/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/job-scheduling/running-automation-suites/index.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deleting Automation Suites, Jobs or Tests",permalink:"/cloudshell-help/next/portal/job-scheduling/manage-automation-suites/delete-suites-jobs-tests"},next:{title:"Running Automation Suites from Templates",permalink:"/cloudshell-help/next/portal/job-scheduling/running-automation-suites/run-suites-from-template"}},l={},r=[{value:"Related Topics",id:"related-topics",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"running-automation-suites",children:"Running Automation Suites"}),"\n",(0,i.jsx)(t.p,{children:"There are three types of automation suites that can be run: automation suite templates that can be run multiple times, customized versions of an automation suite template, and an ad hoc automation suite which you define on the fly and run once."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Ad hoc automation suites are available for all user types while automation suite templates are only accessible to admins and to non-admin users that have permission to access those templates."})}),"\n",(0,i.jsx)(t.p,{children:"These are explained in detail in the following articles:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/running-automation-suites/run-suites-from-template",children:"Running Automation Suites from Templates"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/running-automation-suites/run-custom-suites",children:"Running Custom Automation Suites"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/running-automation-suites/run-adhoc-suites",children:"Running AdHoc Automation Suites"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note that the defined execution time of the suite is not necessarily the time at which the suite is executed. First, the suite enters the queue and waits for a matching execution server to become available and the requested sandbox (if defined) to become active."}),"\n",(0,i.jsx)(t.p,{children:"In addition to the requested start time specified for the automation suite, there are three job settings that influence the actual execution start time:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Resource availability in the job's requested blueprint"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Execution server availability"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Job duration"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The next en-queued job will not run if the current job's duration has not completed, even if its tests have completed their execution. The admin can use the ",(0,i.jsx)(t.code,{children:"QacAllowedTimeFrameDurationInMinutes"})," key to search for available job slots to run the following jobs."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/cloudshell-help/next/portal/job-scheduling/extend-and-stop-automation-suites/extend-suite-jobs",children:"Extending and Stopping Automation Suite Jobs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../portal/job-scheduling/view-execution-history-and-reports/",children:"Viewing Execution History and Test Reports"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>u,M:()=>a});var i=n(11504);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);