"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8049],{94092:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(17624),r=s(4552);const i={sidebar_position:3},l="How to Track Event Threads Using Trace ID or Reservation ID",a={id:"install-configure/cloudshell-suite/central-logging/track-threads",title:"How to Track Event Threads Using Trace ID or Reservation ID",description:"This tracking capability is provided as part of Central Logging Configuration.",source:"@site/docs/install-configure/cloudshell-suite/central-logging/track-threads.md",sourceDirName:"install-configure/cloudshell-suite/central-logging",slug:"/install-configure/cloudshell-suite/central-logging/track-threads",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/central-logging/track-threads",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/central-logging/track-threads.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure Elastic Stack for Central Logging",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/central-logging/modify-cloudshell"},next:{title:"Back Up and Restore CloudShell",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore"}},o={},c=[{value:"Main thread IDs",id:"main-thread-ids",level:2},{value:"Log parameters",id:"log-parameters",level:2},{value:"Tracking an events thread",id:"tracking-an-events-thread",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-track-event-threads-using-trace-id-or-reservation-id",children:"How to Track Event Threads Using Trace ID or Reservation ID"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This tracking capability is provided as part of Central Logging Configuration."})}),"\n",(0,t.jsx)(n.p,{children:"CloudShell logs traditionally reside in different locations. As a result, the same CloudShell user flow (like a sandbox or resource execution) can be recorded in different logs, each addressing a different aspect of the user flow and complicating matters for the user reading the files. For example, if Job Scheduling Service executes a job suite, it will need a sandbox, so it calls sandbox service, which calls Quali Server, which in turn calls Execution Server. This entire thread, with requests and responses will have a common thread ID, which can be used to follow user flows through the system."}),"\n",(0,t.jsx)(n.h2,{id:"main-thread-ids",children:"Main thread IDs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"reservationid"})," for sandbox deployments"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"traceId"})," for the New Job Scheduling"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(57900).c+"",width:"1225",height:"227"})}),"\n",(0,t.jsx)(n.admonition,{title:"Limitation",type:"warning",children:(0,t.jsx)(n.p,{children:'Some logs are \u201cinternal\u201d. In other words, they don\u2019t originate from another service and therefore will either have a unique trace id, maybe even "null". This simply means that these logs are not part of a sequence of calls between different services.'})}),"\n",(0,t.jsx)(n.h2,{id:"log-parameters",children:"Log parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{ "timestamp": "2021-09-01T13:27:49.529566", "app": "JSS", "traceId": "f96f3dce7c59f549aba7d55b21b4daa7", "threadId": "10", "level": "DEBUG", "machineName": "job-scheduling-service-556cc88484-5gf4t", "category": "Quali.CloudShell.Job.Scheduling.Api.TestExecutionManagement.SandboxExecutionHandler", "message": "Attempting to update test result for test execution id: c3892e15-6b2f-473a-a60f-d2f033d17fbb" }\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Timestamp"}),": when the log was taken"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"App"}),": what component of our architecture took the log"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Traceid"}),": (applies to New Job Scheduling flows) UUID that is generated when a process calls another process. For example when JSS orders a new sandbox, it passes the request to sandbox service which passes the request to Quali Server. This request will share a traceid."]}),"\n",(0,t.jsx)(n.p,{children:"Trace ID allows you to follow an action that involved several components such as launching a job and creating a reservation it is useful to see how that request was handled in different components"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reservationid"}),": (Applies to sandbox lifecycle flows) UUID of the sandbox"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Threadid"}),": internal thread in the component. Useful for debugging. Represents the internal thread of the process where the logging occurred"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Level"}),": log level"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Machinename"}),": name of host or container that took the log"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Category"}),": log category. This is a developer tool used internally to describe what general area of code logged the message."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Message"}),": message of the log. For example:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(96216).c+"",width:"1649",height:"258"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tracking-an-events-thread",children:"Tracking an events thread"}),"\n",(0,t.jsx)(n.p,{children:"For illustration purposes, the following procedure assumes you're using Elastic Stack to get a log thread related to a trace id, but you can use your preferred log management tool."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To track an events thread:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In Elastic Stack, open the ",(0,t.jsx)(n.strong,{children:"Discover"})," or ",(0,t.jsx)(n.strong,{children:"Logs"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.strong,{children:"traceId"})," column to the table.","\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"More..."})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(88780).c+"",width:"1248",height:"774"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["To display log messages relating to a specific trace id, hover over the desired ",(0,t.jsx)(n.strong,{children:"traceId"}),' and click the "+" button.',"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"More..."})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(18444).c+"",width:"1596",height:"803"})})]}),"\n","Messages for that trace id are displayed.","\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"More..."})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(10524).c+"",width:"1561",height:"998"})})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},88780:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/TraceIdAdd-e3f1757ec21c22d2314ad72e207c8ae5.png"},18444:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/TraceIdShowLogMessages-c51addaec50bcb7c9ac6cb975ed313da.png"},96216:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/centalLoggingMessageFilter-a07b661027024bcdd8be34f53676a24a.png"},57900:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/centalLoggingTraceidFilter-e218254fa9ad20c440242db5c58d3ea7.png"},10524:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/traceIdShowLogMessages2-b772520ef4f93e87c521876c9cc41e0e.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>l});var t=s(11504);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);