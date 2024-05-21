"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[21144],{71432:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(17624),i=n(4552);const o={sidebar_position:4},t="Missing User Permissions to Run DBCC TRACEON",a={id:"troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon",title:"Missing User Permissions to Run DBCC TRACEON",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon.md",sourceDirName:"troubleshooting/database-and-permissions",slug:"/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon",permalink:"/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Database User Permissions were not Correctly Configured",permalink:"/troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured"},next:{title:"Large Amount of Memory Used on MSSQLSERVER",permalink:"/troubleshooting/database-and-permissions/large-amount-of-memory-used-on-mssqlserver"}},l={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"missing-user-permissions-to-run-dbcc-traceon",children:"Missing User Permissions to Run DBCC TRACEON"}),"\n",(0,r.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,r.jsxs)(s.admonition,{type:"danger-one-line",children:[(0,r.jsx)(s.p,{children:"Saving resource family changes Error:"}),(0,r.jsx)(s.p,{children:"User 'NT AUTHORITY\\SYSTEM' does not have permission to run DBCC TRACEON."})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Quali Server cannot access the CloudShell databases. This usually occurs when attempting to install or run Quali Server before configuring database permissions."}),"\n",(0,r.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Quali Server installation or configuration was run prior to configuring database permissions, therefore, the server cannot write to the database (",(0,r.jsx)(s.code,{children:"NT AUTHORITY\\SYSTEM"}),")."]}),"\n",(0,r.jsx)(s.li,{children:"Database user permissions were not correctly defined."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Verify you have set the proper SQL database permissions. See ",(0,r.jsx)(s.a,{href:"/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"}),".\xa0"]}),"\n",(0,r.jsx)(s.li,{children:"Restart Quali Server and try again to access the database."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>t});var r=n(11504);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);