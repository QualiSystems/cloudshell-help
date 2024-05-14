"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[97752],{69820:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=r(17624),o=r(4552);const t={sidebar_position:3},i="Database User Permissions were not Correctly Configured",a={id:"troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured",title:"Database User Permissions were not Correctly Configured",description:"Error Message",source:"@site/docs/troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured.md",sourceDirName:"troubleshooting/database-and-permissions",slug:"/troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured",permalink:"/cloudshell-help/next/troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/database-and-permissions/database-user-permissions-were-not-correctly-configured.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database cannot be identified",permalink:"/cloudshell-help/next/troubleshooting/database-and-permissions/database-cannot-be-identified"},next:{title:"Missing User Permissions to Run DBCC TRACEON",permalink:"/cloudshell-help/next/troubleshooting/database-and-permissions/missing-user-permissions-to-run-dbcc-traceon"}},l={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"database-user-permissions-were-not-correctly-configured",children:"Database User Permissions were not Correctly Configured"}),"\n",(0,n.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,n.jsx)(s.admonition,{type:"danger-one-line",children:(0,n.jsx)(s.p,{children:"Please check your database configuration on the server side"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"When opening CloudShell portal or attempting to perform an action, such as reserving a Sandbox, the above error message is displayed."}),"\n",(0,n.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Quali Server installation or configuration was run prior to configuring database permissions, therefore, the server cannot write to the database."}),"\n",(0,n.jsx)(s.li,{children:"Database user permissions were not correctly defined."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Verify you have set the proper SQL database permissions. See ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Restart Quali Server and try again to access the database."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>a,M:()=>i});var n=r(11504);const o={},t=n.createContext(o);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);