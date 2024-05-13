"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1464],{24308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(17624),o=i(4552);const s={sidebar_position:3},r="Optimizing Execution Provisioning",a={id:"admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning",title:"Optimizing Execution Provisioning",description:"This article provides guidelines on how to optimize execution provisioning in CloudShell, taking into account the number of execution servers to include, command/job slots, types of executions to handle (commands, test jobs, Python/Authoring drivers), test runtimes and their load on the system.",source:"@site/docs/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning.md",sourceDirName:"admin/cloudshell-execution-server-configurations",slug:"/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting Up Execution Servers to Run Commands",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands"},next:{title:"Deleting Execution Servers",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/deleting-execution-servers"}},c={},l=[{value:"How CloudShell selects job/command slots for execution assignments",id:"how-cloudshell-selects-jobcommand-slots-for-execution-assignments",level:2},{value:"How to maximize execution capacity and performance",id:"how-to-maximize-execution-capacity-and-performance",level:2}];function u(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"optimizing-execution-provisioning",children:"Optimizing Execution Provisioning"}),"\n",(0,t.jsx)(n.p,{children:"This article provides guidelines on how to optimize execution provisioning in CloudShell, taking into account the number of execution servers to include, command/job slots, types of executions to handle (commands, test jobs, Python/Authoring drivers), test runtimes and their load on the system."}),"\n",(0,t.jsx)(n.h2,{id:"how-cloudshell-selects-jobcommand-slots-for-execution-assignments",children:"How CloudShell selects job/command slots for execution assignments"}),"\n",(0,t.jsx)(n.p,{children:"When a new job or command execution is needed, CloudShell finds an execution server with an available slot based on these several factors:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Number of available execution servers (only execution servers that are both Online and Included can be used)"}),"\n",(0,t.jsxs)(n.li,{children:["Maximum job/command slot capacity of each execution server (how many tests/commands it can run in parallel. These are defined when installing or configuring an execution server, as explained in ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/config-execution-server",children:"Configure the Execution Server"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Is the execution associated with a specific execution server or group of execution servers. For example, the resource is associated with a specific execution server via an ",(0,t.jsx)(n.strong,{children:"Execution Server Selector"})," attribute."]}),"\n",(0,t.jsx)(n.li,{children:"Number of job/command executions in the queue"}),"\n",(0,t.jsx)(n.li,{children:"Availability of resources (for jobs configured to run in a sandbox)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-maximize-execution-capacity-and-performance",children:"How to maximize execution capacity and performance"}),"\n",(0,t.jsx)(n.p,{children:"You can maximize available execution capacity by installing additional execution servers, increasing job/command capacities of the execution server, and adding more CPU/RAM to the execution servers."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Number of machines that can be allocated for execution provisioning"}),": Execution servers have no capacity limits and do not require a license, but it's more about what the execution server can handle. In most cases, you'll start with one execution server for the commands, and monitor the performance. Then, either add more power to the same machine or just add more execution servers for better redundancy (if one of the servers fails, it's always good to have others available). For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#distributed-provisioning",children:"Distributed provisioning"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, you can also ",(0,t.jsx)(n.strong,{children:"associate groups of resources and Apps to specific execution servers for improved performance"}),". This is extremely useful if you have geographically distributed sites in your organization and you want the infrastructure of each site to be handled by one or more execution servers that are physically located at or near that site. For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Types of automation to be run (Python-based or Authoring drivers)"}),": Execution servers are used for commands and orchestration, which are Python-based in most cases but also support Authoring drivers. The runtime for Authoring drivers takes more RAM/CPU than Python so limit the number of concurrent jobs to 5."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"App deployment requires additional command slots"}),": For details, see ",(0,t.jsx)(n.a,{href:"./setting-up-execution-servers-to-run-commands#configuring-execution-servers-to-deploy-vcenter-apps",children:"Configuring Execution Servers to Deploy vCenter Apps"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"To optimize run-time performance for individual tests"}),": Quali recommends setting each execution server's ",(0,t.jsx)(n.strong,{children:"Job slot capacity"})," to 1 (",(0,t.jsx)(n.strong,{children:"Command slot capacity"})," is set to 20 by default). A job slot capacity of 1 ensures that maximum resources are always available to the running instance. For example, if there is some software/hardware that is installed on this machine that is required for the tests, and you cannot use it concurrently."]}),"\n",(0,t.jsxs)(n.p,{children:["That said, the runtime for Job Scheduling suites is heavier (more RAM/CPU) than python, but the execution server can still run a few tests concurrently if they are all independent and run against some remote targets. For example, if there is some software/hardware that is installed on this machine that is required for the tests, and you cannot use it concurrently, then you will need to limit the job slots on this execution server to 1. ",(0,t.jsx)(n.em,{children:"This applies to the original Job Scheduling, the New Job Scheduling is specifically designed to handle high loads in the hundreds of concurrent executions."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Total number of job slots cannot exceed number of Runner licenses"}),": If you\u2019re running TestShell Studio tests using the original Job Scheduling, then each test that starts consumes a runner license. These tests are also executed on the execution server and use a job slot. As such, you need to make sure the total number of job slots you allocate in the different execution servers does not exceed the number of Runner licenses you have. If this limit is reached and another test is executed, it will fail and exclude the execution server until an available license is found."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Test execution time and load on the system"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How heavy are the tests to be executed (simple/complicated/short/long)?"}),"\n",(0,t.jsx)(n.li,{children:"If the time it takes to execute each test is less important than the time it takes to run a series of tests, you can set execution server capacity according to the number of cores or the number of RAM on each machine."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>r});var t=i(11504);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);