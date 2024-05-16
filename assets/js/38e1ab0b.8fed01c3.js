"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[16520],{43708:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(17624),t=s(4552);const i={sidebar_position:2},o="Execution Servers - Servers Page",c={id:"admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page",title:"Execution Servers - Servers Page",description:"In the Servers page, you can view and manage the execution servers in CloudShell.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page.md",sourceDirName:"admin/cloudshell-manage-dashboard/managing-execution-servers",slug:"/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Execution Servers - Overview Page",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-overview-page"},next:{title:"Execution Servers - Executions Page",permalink:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page"}},l={},d=[{value:"Including/excluding execution servers",id:"includingexcluding-execution-servers",level:2},{value:"Viewing the current execution activity of an execution server",id:"viewing-the-current-execution-activity-of-an-execution-server",level:2},{value:"Setting attribute values",id:"setting-attribute-values",level:2},{value:"Deleting an execution server",id:"deleting-an-execution-server",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"execution-servers---servers-page",children:"Execution Servers - Servers Page"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Servers"})," page, you can view and manage the execution servers in CloudShell."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(15616).c+"",width:"1105",height:"534"})}),"\n",(0,r.jsxs)(n.p,{children:["The information available for each execution server in the ",(0,r.jsx)(n.strong,{children:"Servers"})," page includes:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Server"}),(0,r.jsx)(n.td,{children:"Name and description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Type"}),(0,r.jsxs)(n.td,{children:["(Relevant if you are using ",(0,r.jsx)(n.strong,{children:"Job Scheduling"})," and a custom-developed execution server)",(0,r.jsx)("br",{}),'Indicates if the Execution Server is a CloudShell Execution Server (Windows or Linux-based) or a custom-developed Execution Server. For example, "TestShell" indicates standard CloudShell execution servers that run commands and TestShell tests.']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Status"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Included"})," or ",(0,r.jsx)(n.strong,{children:"Excluded"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Connection"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Online"})," or ",(0,r.jsx)(n.strong,{children:"Offline"}),(0,r.jsx)("br",{}),"If you are experiencing network-related issues between Quali Server and the Execution Server, for example, the Execution Server's connection status changes frequently from online to offline, please contact Quali Support at: ",(0,r.jsx)(n.a,{href:"https://support.quali.com/",children:"support.quali.com"}),". Quali Support can assist you in testing your network and in adjusting your configuration to help solve these issues."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activity"}),(0,r.jsxs)(n.td,{children:["Indicates if the execution server is doing anything at the moment. For example, ",(0,r.jsx)(n.strong,{children:"Idle"})," (no tests/commands are running) or ",(0,r.jsx)(n.strong,{children:"3 Running"})," (3 executions are currently running)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Job Slots"}),(0,r.jsx)(n.td,{children:"Displays the permitted number of concurrent jobs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command Slots"}),(0,r.jsx)(n.td,{children:"Displays the permitted number of concurrent commands"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Host Name"}),(0,r.jsx)(n.td,{children:"Displays the host name of the machine on which the execution server is installed. Hover over the host name to see the machine's operating system."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"includingexcluding-execution-servers",children:"Including/excluding execution servers"}),"\n",(0,r.jsx)(n.p,{children:"Execution servers need to be excluded in certain situations. For example, when doing maintenance work on a particular machine and you don't want anybody to use it."}),"\n",(0,r.jsx)(n.p,{children:"In addition, the execution server may exclude itself in the event of a runtime error."}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"note",children:(0,r.jsx)(n.p,{children:"Excluding an execution server basically means that we're excluding it from new assignments, so when you exclude an execution server, it will complete any running jobs/commands but new ones will be handled by an available execution server."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To change the status of the execution server:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Execution Servers"})," page, click ",(0,r.jsx)(n.strong,{children:"Servers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Servers"})," view of the page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the execution server's menu button ",(0,r.jsx)(n.img,{src:s(55240).c+"",width:"34",height:"33"})," and select the appropriate option.",(0,r.jsx)(n.img,{src:s(55884).c+"",width:"1079",height:"242"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"viewing-the-current-execution-activity-of-an-execution-server",children:"Viewing the current execution activity of an execution server"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To view the execution activity of an execution server:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Execution Servers"})," page, click ",(0,r.jsx)(n.strong,{children:"Servers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Servers"})," view of the page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the execution server's menu button ",(0,r.jsx)(n.img,{src:s(55240).c+"",width:"34",height:"33"})," and select ",(0,r.jsx)(n.strong,{children:"View Executions"}),". Alternatively, click ",(0,r.jsx)(n.strong,{children:"Executions"})," from the left menu."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-attribute-values",children:"Setting attribute values"}),"\n",(0,r.jsx)(n.p,{children:"In order to improve performance and stability in CloudShell deployments that include multiple geographically distributed sites, it is recommended to configure the deployment process of resource and App commands to run on execution servers that are physically closest to those elements. This is also used to restrict CloudShell's blueprint commands to run on a dedicated execution server or group of execution servers."}),"\n",(0,r.jsxs)(n.p,{children:["This is done by associating an attribute that has the ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," rule to the resource or App. And setting the same attribute value on that resource or App and on the execution server or execution servers that will deploy the element's commands. For blueprint commands, the attribute needs to be created, and linked to blueprint command executions using the ",(0,r.jsx)(n.code,{children:"EnvironmentCommandsESRestrictions"}),' configuration key. For additional information, see the "Controlling execution server selection" sections in ',(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To set an attribute value on an execution server:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Execution Servers"})," page, click ",(0,r.jsx)(n.strong,{children:"Servers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Servers"})," page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the name of the execution server or click the execution server's menu button ",(0,r.jsx)(n.img,{src:s(55240).c+"",width:"34",height:"33"})," and select ",(0,r.jsx)(n.strong,{children:"Attributes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Attributes"})," dialog box is displayed, showing the ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," attributes in CloudShell."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(58824).c+"",width:"542",height:"275"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the check box of the appropriate attribute and specify the value that is set on the resource's attribute. For example, the domain name."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deleting-an-execution-server",children:"Deleting an execution server"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To delete an execution server from CloudShell:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Execution Servers"})," page, click ",(0,r.jsx)(n.strong,{children:"Servers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Servers"})," view of the page is displayed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the execution server's menu button ",(0,r.jsx)(n.img,{src:s(55240).c+"",width:"34",height:"33"})," and select ",(0,r.jsx)(n.strong,{children:"Delete"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-overview-page",children:"Execution Servers - Overview Page"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page",children:"Execution Servers - Executions Page"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-commands-queue-page",children:"Execution Servers - Commands Queue Page"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},55884:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/ExecutionServersIncludeExclude-07dc8c1db820c662c44f6c21c22e0457.png"},58824:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/ExecutionServersServersAttributes-a099e1151498b8761aff46d726dd98d4.png"},55240:(e,n,s)=>{s.d(n,{c:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAIAAAAzse47AAABMUlEQVR42u3WzUrDQBAH8J2dTeLHURFafQRvggelFPtQIujRmxcv6guI4MWjT6BCT95EbQSNpBSREhUxGzs7Jq0PEAIDIhn2/mNm/gMLvWHqkhdnP5VYOecgfIo1WTnjl4miCBEBQJaJ41jUmBT0+31po2b+HcP5Y1WkE1TJjFZhvp3KCBAYtUJQugRVhTl7MLtd30e117JrDUIh5uTObF0GU8iHHdteJE/LMOePZv/aC1DtrGYrC2SEGMfFg/H+oVwKqjBhorsDnTex3qTGLEvt5vjWbF4EM0YdddL2EvlCQzu9N9tXgY98sGFbTbHdPH/AzbAY2vKcm58WG1pK6msEeY6NZm98oSJMfZ5/9zwrVM3UTDR4NS4TNZgZwiTz03ckK/STzg0igt7bSLSVSf0Al5jMxPZ7SvwAAAAASUVORK5CYII="},15616:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/ExecutionServersServersPage-d502f043a7c407ed72cd86fc30701ae9.png"},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var r=s(11504);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);