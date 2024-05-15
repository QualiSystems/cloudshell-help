"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57512],{84116:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(17624),s=i(4552);const r={sidebar_position:2},o="Setup/Teardown scripts failed to run with exit code -1073741502",l={id:"troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502",title:"Setup/Teardown scripts failed to run with exit code -1073741502",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502.md",sourceDirName:"troubleshooting/execution-servers",slug:"/troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502",permalink:"/cloudshell-help/troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Network Issues between Quali Server and the Execution Servers",permalink:"/cloudshell-help/troubleshooting/execution-servers/network-issues-between-quali-server-and-the-execution-servers"},next:{title:"Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)",permalink:"/cloudshell-help/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819"}},c={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setupteardown-scripts-failed-to-run-with-exit-code--1073741502",children:"Setup/Teardown scripts failed to run with exit code -1073741502"}),"\n",(0,n.jsx)(t.h2,{id:"error-message",children:"Error Message"}),"\n",(0,n.jsx)(t.admonition,{type:"danger-one-line",children:(0,n.jsx)(t.p,{children:"Script runner exited with exit code: -1073741502"})}),"\n",(0,n.jsx)(t.p,{children:"The application failed to initialize properly. Indicates that the application has been launched on a Desktop to which current user has no access rights. Another possible cause is that either gdi32.dll or user32.dll has failed to initialize."}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The sandbox's Setup/Teardown scripts failed to run. Either ",(0,n.jsx)(t.code,{children:"gdi32.dll"})," or ",(0,n.jsx)(t.code,{children:"user32.dll"})," failed to initialize on the CloudShell Execution Server machine possibly due to exhausting Windows Non-Interactive desktop memory heap."]}),"\n",(0,n.jsx)(t.p,{children:"This may happen on high throughput installations running a high number of scripts simultaneously on CloudShell Execution Server machines."}),"\n",(0,n.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To resolve this issue:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Exclude the CloudShell Execution Server. For details, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-servers-page#includingexcluding-execution-servers",children:"Including/excluding execution servers"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Wait for any running processes on the CloudShell Execution Server to complete."}),"\n",(0,n.jsx)(t.p,{children:"When excluding a CloudShell Execution Server, the server follows through with the execution of any currently running processes."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Increase the machine's defined Non-interactive desktop heap size number. This is explained in the Resolution section of this troubleshooting article: ",(0,n.jsx)(t.a,{href:"https://knowledgebase.progress.com/articles/Article/18726",children:"https://knowledgebase.progress.com/articles/Article/18726"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Restart its CloudShell Execution Server machine."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Include the CloudShell Execution Server."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>o});var n=i(11504);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);