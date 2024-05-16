"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[94964],{40692:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var n=i(17624),l=i(4552);const t={sidebar_position:4},d="New Job Scheduling Service Logs",r={id:"jss/new-jss-logs",title:"New Job Scheduling Service Logs",description:"This article provides logging details for the New Job Scheduling services.",source:"@site/versioned_docs/version-2023.3/jss/new-jss-logs.md",sourceDirName:"jss",slug:"/jss/new-jss-logs",permalink:"/cloudshell-help/jss/new-jss-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/jss/new-jss-logs.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Statuses and results",permalink:"/cloudshell-help/jss/statuses-and-results"},next:{title:"Job Scheduling Data",permalink:"/cloudshell-help/jss/job-scheduling-data"}},c={},o=[{value:"Job Scheduling Service",id:"job-scheduling-service",level:2},{value:"Test Execution Service",id:"test-execution-service",level:2},{value:"Test Discovery Service",id:"test-discovery-service",level:2},{value:"Sandbox Service",id:"sandbox-service",level:2},{value:"Identity Service",id:"identity-service",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"new-job-scheduling-service-logs",children:"New Job Scheduling Service Logs"}),"\n",(0,n.jsx)(s.p,{children:"This article provides logging details for the New Job Scheduling services."}),"\n",(0,n.jsxs)(s.p,{children:["Supported log levels are TRACE, DEBUG, INFO, WARN, ERROR. Please note that TRACE captures everything. To change the log level for specific services, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/change-log-level",children:"Change Log Levels for New Job Scheduling Services"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"job-scheduling-service",children:"Job Scheduling Service"}),"\n",(0,n.jsx)(s.p,{children:"Suite execution events are logged in Job Scheduling Service logs, in DEBUG log level. These include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Suite was triggered"}),"\n",(0,n.jsx)(s.li,{children:"Looking for available slot in TES"}),"\n",(0,n.jsx)(s.li,{children:"Requesting a sandbox"}),"\n",(0,n.jsx)(s.li,{children:"Receiving a sandbox"}),"\n",(0,n.jsx)(s.li,{children:"Test started"}),"\n",(0,n.jsx)(s.li,{children:"Test ended"}),"\n",(0,n.jsx)(s.li,{children:"Suite ended"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To get the full picture, search for the sandbox ID in the Quali Server and Execution Server logs."}),"\n",(0,n.jsx)(s.p,{children:"Each suite execution, job, test, sandbox and sandbox request has a unique ID. For example:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'[2021-01-18 11:01:16.9069] [4] [INFO] [229a41efd8ef] [] [Quali.CloudShell.Job.Scheduling.Api.ConsumptionService.RabbitMqConsumptionServiceSandboxConsumer] -- Begin processing {"result": true, "``sandbox_id``": "1ae1e266-1512-412c-bd82-031d3bd7fa45", "retries": 0, "errors": [], "error_code": 0, "``request_id``": "0f045b2f-a15f-4a81-9a11-e1af3c2faee4" [2021-01-18 11:01:47.2871] [9] [INFO] [229a41efd8ef] []'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"[Quali.CloudShell.Job.Scheduling.Api.TestExecutionManagement.SandboxExecutionHandler] --"})," ",(0,n.jsx)(s.code,{children:"Test execution id``: 9e9801db-9703-46dc-a687-ba898cf23e87 ended with result Passed"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"[2021-01-18 11:01:47.3168] [9] [INFO] [229a41efd8ef] [] [Quali.CloudShell.Job.Scheduling.Api.TestExecutionManagement.SandboxExecutionHandler] --"})," ",(0,n.jsx)(s.code,{children:"Job execution id``: 0f045b2f-a15f-4a81-9a11-e1af3c2faee4 ended successfully, with result Succeeded"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Next test was triggered. test execution id: 9e9801db-9703-46dc-a687-ba898cf23e87, in job execution id: 0f045b2f-a15f-4a81-9a11-e1af3c2faee4, in"})," ",(0,n.jsx)(s.code,{children:"suite execution id``: 99a10ee3-1529-4b4d-b8ba-09f0f79cb7b0"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Log location"}),(0,n.jsx)(s.th,{children:"Default logging level"}),(0,n.jsx)(s.th,{children:"Maximum file size"}),(0,n.jsx)(s.th,{children:"Maximum number of files"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["Console",(0,n.jsx)("br",{}),"Logs directory under ",(0,n.jsx)(s.code,{children:"/JobSchedulingService"})," (at least 2 files per day: one containing all the logs and the second one only errors)"]}),(0,n.jsxs)(s.td,{children:["All logs: DEBUG",(0,n.jsx)("br",{}),"Errors log: WARN"]}),(0,n.jsxs)(s.td,{children:["All logs: 50 MB",(0,n.jsx)("br",{}),"Error log: 10 MB"]}),(0,n.jsxs)(s.td,{children:["All logs: 50",(0,n.jsx)("br",{}),"Error log: 10"]})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"test-execution-service",children:"Test Execution Service"}),"\n",(0,n.jsx)(s.p,{children:"Job/test execution logs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Log location"}),(0,n.jsx)(s.th,{children:"Default logging level"}),(0,n.jsx)(s.th,{children:"Maximum file size"}),(0,n.jsx)(s.th,{children:"Maximum number of files"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Console"}),(0,n.jsx)(s.td,{children:"WARN"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"test-discovery-service",children:"Test Discovery Service"}),"\n",(0,n.jsx)(s.p,{children:"Test repository connection logs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Log location"}),(0,n.jsx)(s.th,{children:"Default logging level"}),(0,n.jsx)(s.th,{children:"Maximum file size"}),(0,n.jsx)(s.th,{children:"Maximum number of files"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Console"}),(0,n.jsx)(s.td,{children:"WARN"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"sandbox-service",children:"Sandbox Service"}),"\n",(0,n.jsx)(s.p,{children:"Sandbox creation and management logs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Log location"}),(0,n.jsx)(s.th,{children:"Default logging level"}),(0,n.jsx)(s.th,{children:"Maximum file size"}),(0,n.jsx)(s.th,{children:"Maximum number of files"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"./sandbox_service_logs"})}),(0,n.jsx)(s.td,{children:"WARN"}),(0,n.jsx)(s.td,{children:"10 MB"}),(0,n.jsx)(s.td,{children:"5"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"identity-service",children:"Identity Service"}),"\n",(0,n.jsx)(s.p,{children:"General Identity Service logs - related to user activity in the New Job Scheduling"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Log location"}),(0,n.jsx)(s.th,{children:"Default logging level"}),(0,n.jsx)(s.th,{children:"Maximum file size"}),(0,n.jsx)(s.th,{children:"Maximum number of files"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Logs are saved only to the console (docker logs)"}),(0,n.jsx)(s.td,{children:"WARN"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]})})]})]})}function a(e={}){const{wrapper:s}={...(0,l.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>r,M:()=>d});var n=i(11504);const l={},t=n.createContext(l);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);