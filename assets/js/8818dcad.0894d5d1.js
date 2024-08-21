"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[37916],{37714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453);const o={sidebar_position:1},r="Running Automation Suites from Templates",a={id:"portal/job-scheduling/running-automation-suites/run-suites-from-template",title:"Running Automation Suites from Templates",description:"You can update test and blueprint inputs before running an execution of the template, and create more extensive modifications by running a custom version.",source:"@site/versioned_docs/version-2023.3/portal/job-scheduling/running-automation-suites/run-suites-from-template.md",sourceDirName:"portal/job-scheduling/running-automation-suites",slug:"/portal/job-scheduling/running-automation-suites/run-suites-from-template",permalink:"/2023.3/portal/job-scheduling/running-automation-suites/run-suites-from-template",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/job-scheduling/running-automation-suites/run-suites-from-template.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Running Automation Suites",permalink:"/2023.3/portal/job-scheduling/running-automation-suites/"},next:{title:"Running Custom Automation Suites",permalink:"/2023.3/portal/job-scheduling/running-automation-suites/run-custom-suites"}},u={},l=[{value:"Job settings that determine execution start time",id:"job-settings-that-determine-execution-start-time",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"running-automation-suites-from-templates",children:"Running Automation Suites from Templates"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You can update test and blueprint inputs before running an execution of the template, and create more extensive modifications by running a custom version."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To run an instance of an automation suite template:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Executions"})," page, in the automation suite's row, click ",(0,i.jsx)(t.strong,{children:"Run"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The automation suite is en-queued and its jobs are added to the ",(0,i.jsx)(t.strong,{children:"Pending"})," queue."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If the suite has test or blueprint input parameters, a pre-run page is displayed, allowing users to specify the input values. Multiline values are supported for test input string attributes, as explained in ",(0,i.jsx)(t.a,{href:"/2023.3/portal/job-scheduling/manage-automation-suites/add-suites#add-tests-to-a-job",children:"Add tests to a job"}),". Click the input's Customize link and change the value as appropriate."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(81625).A+"",width:"1271",height:"586"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When you are done editing the input parameters, at the bottom of the page, click ",(0,i.jsx)(t.strong,{children:"Run"}),", or alternatively click ",(0,i.jsx)(t.strong,{children:"Customize"})," to run a custom execution of the suite instead."]}),"\n",(0,i.jsxs)(t.p,{children:["The automation suite is en-queued and its jobs are added to the ",(0,i.jsx)(t.strong,{children:"Pending"}),"\xa0queue (in the ",(0,i.jsx)(t.strong,{children:"Queue"})," page)."]}),"\n",(0,i.jsxs)(t.p,{children:["A job remains in the ",(0,i.jsx)(t.strong,{children:"Pending"}),"\xa0queue while the system finds a time slot when the blueprint can be reserved for the estimated duration, and the requested execution servers for all of its tests are available."]}),"\n",(0,i.jsx)(t.p,{children:"When the job's blueprint is ready, it is moved automatically to the Scheduled queue. However, execution will not start before the suite's scheduled date and time."}),"\n",(0,i.jsxs)(t.p,{children:["For details about suite results and reports, see ",(0,i.jsx)(t.a,{href:"/2023.3/portal/job-scheduling/view-tests-job-suite-execution-results",children:"Viewing Test, Job and Suite Execution Results"})," and ",(0,i.jsx)(t.a,{href:"../../../portal/job-scheduling/view-execution-history-and-reports/",children:"Viewing Execution History and Test Reports"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"job-settings-that-determine-execution-start-time",children:"Job settings that determine execution start time"}),"\n",(0,i.jsx)(t.p,{children:"In addition to the requested Start time specified for the automation suite, job settings that influence the actual execution start time include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Resource availability in the requested blueprint for the job's estimated duration."}),"\n",(0,i.jsx)(t.li,{children:"Execution server availability"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Jobs can only run on enabled (active) execution servers. There must also be sufficient available licenses to run requested/en-queued jobs."}),"\n",(0,i.jsx)(t.p,{children:"The suite will only begin execution after:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The specified Start time has been reached."}),"\n",(0,i.jsx)(t.li,{children:"The selected blueprint has been reserved, and any setup commands have run."}),"\n",(0,i.jsx)(t.li,{children:"One of the selected execution servers becomes available."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},81625:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Automation-suites_1_New-630a8cff0fd8e84be05f9e36420a7a87.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);