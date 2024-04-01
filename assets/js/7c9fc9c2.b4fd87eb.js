"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[35016],{444:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(17624),i=n(4552);const r={sidebar_position:1},o="Access to Database Denied",a={id:"troubleshooting/database-and-permissions/access-to-database-denied",title:"Access to Database Denied",description:"Error Messages",source:"@site/docs/troubleshooting/database-and-permissions/access-to-database-denied.md",sourceDirName:"troubleshooting/database-and-permissions",slug:"/troubleshooting/database-and-permissions/access-to-database-denied",permalink:"/cloudshell-help/next/troubleshooting/database-and-permissions/access-to-database-denied",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/database-and-permissions/access-to-database-denied.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Useful Tools and Utilities",permalink:"/cloudshell-help/next/troubleshooting/troubleshooting-overview/useful-tools-and-utilities"},next:{title:"Database cannot be identified",permalink:"/cloudshell-help/next/troubleshooting/database-and-permissions/database-cannot-be-identified"}},l={},d=[{value:"Error Messages",id:"error-messages",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"access-to-database-denied",children:"Access to Database Denied"}),"\n",(0,t.jsx)(s.h2,{id:"error-messages",children:"Error Messages"}),"\n",(0,t.jsx)(s.p,{children:"When access to the database is denied, one of the following error messages is displayed."}),"\n",(0,t.jsx)(s.admonition,{title:"\xa0",type:"danger",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"could not execute batch command.[SQL: SQL not available]"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"check_cells_configuration ended with status Failed with error: HTTP Error 500: The server encountered an error processing the request. Please see the server logs for more details."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"close_scenario ended with status Failed with error: HTTP Error 500: The server encountered an error processing the request. Please see the server logs for more detail"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Quali Server cannot access the CloudShell database. For example when performing an upgrade to the SQL server, during installation, when restarting the database, and when configuring Quali Server."}),"\n",(0,t.jsx)(s.p,{children:"All the error messages described in this article stem from the same possible cause."}),"\n",(0,t.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,t.jsx)(s.p,{children:"Database user permissions were not correctly defined."}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"To resolve the issues described above, follow these steps:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Verify you have set the proper SQL database permissions. See ",(0,t.jsx)(s.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/db-prereqs.htm",children:"Database Prerequisites"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Restart ",(0,t.jsx)(s.strong,{children:"Quali Server"})," and try again to access the database."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>o});var t=n(11504);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);