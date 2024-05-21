"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75248],{36028:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(17624),t=s(4552);const r={sidebar_position:4},o="Execution Servers - Commands Queue Page",a={id:"admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page",title:"Execution Servers - Commands Queue Page",description:"The Commands Queue page lists the command executions that are currently in the queue. In addition, it displays the reason why each command is in the queue. This applies to all types of commands in CloudShell, including resource/App/service commands coming from the shell's driver and orchestration commands. For details on developing such commands, see Driver Deep Dive and Script Deep Dive.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page.md",sourceDirName:"admin/cloudshell-manage-dashboard/managing-execution-servers",slug:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page",permalink:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Execution Servers - Executions Page",permalink:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page"},next:{title:"Maintenance Window",permalink:"/admin/cloudshell-manage-dashboard/maintenance-window"}},d={},c=[{value:"Statuses",id:"statuses",level:2},{value:"If no compatible execution server exists:",id:"if-no-compatible-execution-server-exists",level:3},{value:"If compatible execution servers exist:",id:"if-compatible-execution-servers-exist",level:3},{value:"Related Topics",id:"related-topics",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"execution-servers---commands-queue-page",children:"Execution Servers - Commands Queue Page"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Commands Queue"})," page lists the command executions that are currently in the queue. In addition, it displays the reason why each command is in the queue. This applies to all types of commands in CloudShell, including resource/App/service commands coming from the shell's driver and orchestration commands. For details on developing such commands, see ",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/driver-deep-dive",children:"Driver Deep Dive"})," and ",(0,i.jsx)(n.a,{href:"/devguide/develop-orch-scripts/script-deep-dive",children:"Script Deep Dive"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(29392).c+"",width:"1123",height:"567"})}),"\n",(0,i.jsxs)(n.p,{children:["The information available for each command execution in the ",(0,i.jsx)(n.strong,{children:"Commands Queue"})," page includes:"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Property"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Command Name"}),(0,i.jsx)("td",{children:"Name of the command in CloudShell"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Type"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.strong,{children:"Blueprint"})," or ",(0,i.jsx)(n.strong,{children:"Resource"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Sandbox Name"}),(0,i.jsx)("td",{children:"Link to the sandbox"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Resource Name"}),(0,i.jsx)("td",{children:"Name of the CloudShell resource. This field is empty for blueprint commands."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Enqueue Time"}),(0,i.jsx)("td",{children:"Time when the command execution entered the queue, set to the time zone defined in CloudShell Portal."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Status"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Reason why the command is in the queue."}),(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"If additional information is available, an exclamation mark (!) is displayed next to the command's status. Hover over the exclamation mark to see a table of matching execution servers. Each row in the table displays an execution server's name and the status, or reason why the command is not running on it. The statuses are explained in the Statuses section below."})})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"statuses",children:"Statuses"}),"\n",(0,i.jsx)(n.h3,{id:"if-no-compatible-execution-server-exists",children:"If no compatible execution server exists:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Status"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"New, Waiting to be processed"'}),(0,i.jsx)("td",{children:"The command has not been processed by CloudShell. CloudShell typically processes new commands within a few seconds, so the command should be processed shortly."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"Pending, Concurrent commands not enabled"'}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"A command is already running on the resource but the command's shell does not support running multiple commands at the same time, or, if it's a blueprint command, a command is already running on the sandbox but CloudShell is configured to not support multiple blueprint commands at the same time."}),(0,i.jsx)(n.p,{children:"To fix this issue, do one of the following:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wait for the current command to complete. The enqueued command will run as soon as a command slot is available on the execution server."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop the currently running command that is preventing the enqueued command to run."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable concurrent commands for the resource or blueprints, as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["For resources based on 1st Gen Shells, in ",(0,i.jsx)(n.strong,{children:"Resource Manager Client"}),", open the Shell's model and in the ",(0,i.jsx)(n.strong,{children:"Parameters"})," area, select ",(0,i.jsx)(n.strong,{children:"Supports Concurrent Commands"}),". For 2nd Gen Shells, you need to add support concurrent commands in the\xa0",(0,i.jsx)(n.code,{children:"shell-definition.yaml"}),"\xa0file, as explained in ",(0,i.jsx)(n.a,{href:"/devguide/developing-shells/driver-deep-dive#drivers-and-concurrency",children:"Drivers and concurrency"}),". To enable concurrent blueprint script commands, set the ",(0,i.jsx)(n.code,{children:"AllowConcurrentTopologyScriptCommands"})," configuration key to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"No installed execution servers"'}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["CloudShell cannot find any registered execution servers. In this case, while the command was in the queue, all your execution servers were deleted, possibly through the ",(0,i.jsx)(n.strong,{children:"Execution Servers - Executions"})," page."]}),(0,i.jsxs)(n.p,{children:["To fix this issue, install the execution server(s) using the ",(0,i.jsx)(n.strong,{children:"TestShell Execution Server Configuration Wizard"}),"."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"No execution servers matching attribute requirements (!)"'}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["The command's resource or App is defined to select an execution server by ",(0,i.jsx)(n.strong,{children:"Execution Server Selector"})," attributes but no execution server matches the criteria."]}),(0,i.jsxs)(n.p,{children:['To link the element to an execution server, see the appropriate "Controlling execution server selection" section in ',(0,i.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"Execution server with existing driver instance doesn\'t match attribute requirements (!)"'}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"When a resource command is executed, an instance of the shell's driver is created on the execution server that is running the command."}),(0,i.jsx)(n.p,{children:"This is a very specific scenario in which the instance on the execution server is still alive, but the user links the resource's Shell to a different execution server and attempts to run another command on that resource. However, the new command will enter the queue since multiple instances of the same driver cannot co-exist, and the original instance is associated to a different execution server."}),(0,i.jsx)(n.p,{children:"To fix the issue, do one of the following:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wait for the idle timeout of the original driver instance to pass, which will terminate the instance and enable the new command to run."}),"\n",(0,i.jsxs)(n.li,{children:["Terminate the original driver instance in the ",(0,i.jsx)(n.strong,{children:"Execution Servers - Executions"})," page."]}),"\n",(0,i.jsx)(n.li,{children:"Add the missing attribute value to the execution server hosting the driver instance."}),"\n"]})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"if-compatible-execution-servers-exist",children:"If compatible execution servers exist:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Status"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"Pending, Waiting to be processed"'}),(0,i.jsx)("td",{children:"CloudShell typically processes enqueued commands within a few seconds, so the command will either be processed shortly or executed on a compatible execution server, as soon as one is available."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:'"No Available Execution Server (!)"'}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"CloudShell has execution servers that can run the command, but none are available at the moment. To see why the execution servers are unavailable, hover over the more info icon."}),(0,i.jsx)(n.p,{children:"Possible reasons are that the execution servers are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Excluded"}),"\n",(0,i.jsx)(n.li,{children:"Offline"}),"\n",(0,i.jsx)(n.li,{children:"Set to have a zero command slots capacity"}),"\n",(0,i.jsx)(n.li,{children:"All command slots are being used."}),"\n"]})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-overview-page",children:"Execution Servers - Overview Page"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page",children:"Execution Servers - Servers Page"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page",children:"Execution Servers - Executions Page"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},29392:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ExecutionServersCommandsQueue-46c8b8d1058f9aa43df05c5ecdace0e6.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);