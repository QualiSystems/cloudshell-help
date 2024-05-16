"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[98476],{52624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=s(17624),i=s(4552);const r={sidebar_position:5},t="Large Amount of Memory Used on MSSQLSERVER",a={id:"troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver",title:"Large Amount of Memory Used on MSSQLSERVER",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver.md",sourceDirName:"troubleshooting/database-and-permissions",slug:"/troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver",permalink:"/cloudshell-help/troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Missing User Permissions to Run DBCC TRACEON",permalink:"/cloudshell-help/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon"},next:{title:"What is My QualiX Version?",permalink:"/cloudshell-help/troubleshooting/qualix/what-is-my-qualix-version"}},l={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const n={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"large-amount-of-memory-used-on-mssqlserver",children:"Large Amount of Memory Used on MSSQLSERVER"}),"\n",(0,o.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,o.jsx)(n.admonition,{type:"danger-one-line",children:(0,o.jsx)(n.p,{children:"MS SQL SERVER on the SQL database VM is utilizing a large amount of memory"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"The MS SQL Server memory (RAM) increases to an unexpectedly high level."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(9236).c+"",width:"518",height:"306"})}),"\n",(0,o.jsx)(n.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,o.jsx)(n.p,{children:"This is not a memory leak but a Microsoft MS SQL Server default setting. MS SQL Server consumes as much memory as Windows allows it to consume. This is a by-design behavior of an MS SQL Server instance and is not a CloudShell issue."}),"\n",(0,o.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.p,{children:"To resolve the issue described above, follow these steps:"}),"\n",(0,o.jsx)(n.p,{children:"You can configure the maximum RAM usage on an MS SQL Server Instance to limit its memory consumption to a reasonable level in the following two ways."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"It is recommended that you refer to the Microsoft website for the most up-to-date instructions."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Via the GUI Interface (MS SQL Server Management Studio)."}),"\n",(0,o.jsxs)(n.li,{children:["Via the Standard MS SQL Command Query via a MS SQL session fired up by a programming language or, directly in MS SQL Server Management Studio.","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Connect to your target MS SQL Server instance."}),"\n",(0,o.jsx)(n.li,{children:"Open a new query page, pointing to \u201cmaster\u201d(one of the System Databases)."}),"\n",(0,o.jsxs)(n.li,{children:["Type/Run the following commands, one at a time:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"sp_configure 'show advanced options', 1;"}),"\n",(0,o.jsx)(n.li,{children:"GO"}),"\n",(0,o.jsx)(n.li,{children:"RECONFIGURE;"}),"\n",(0,o.jsx)(n.li,{children:"GO"}),"\n",(0,o.jsx)(n.li,{children:"sp_configure 'max server memory', XXXX;\xa0\xa0"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"\u201cXXXX\u201d can be any number up to 17674, i.e. 17.674GB"})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsx)(n.li,{children:"GO"}),"\n",(0,o.jsx)(n.li,{children:"RECONFIGURE;"}),"\n",(0,o.jsx)(n.li,{children:"GO"}),"\n",(0,o.jsx)(n.li,{children:"sp_configure 'show advanced options', 0;"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Exit MS SQL Server Management Studio (you do not need to save anything)."}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9236:(e,n,s)=>{s.d(n,{c:()=>o});const o=s.p+"assets/images/Large-amount-of-memory-used_518x306-698f5cfe4fe70bf8bb55b49edc11aa84.png"},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>t});var o=s(11504);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);