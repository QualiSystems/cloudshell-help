"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[14036],{49364:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(17624),n=s(4552);const t={sidebar_position:5},d="Fixed Server Roles",l={id:"install-configure/cloudshell-suite/appendix/fixed-server-roles",title:"Fixed Server Roles",description:"The following table describes fixed server roles. For more information, see the Microsoft Fixed Server\\-Level Roles article.",source:"@site/docs/install-configure/cloudshell-suite/appendix/fixed-server-roles.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/fixed-server-roles",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/fixed-server-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/appendix/fixed-server-roles.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Utilities and Layer 1 Drivers",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/utilities-and-l1-drivers"},next:{title:"Update the RabbitMQ Credentials on Quali Server",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds"}},o={},a=[];function c(e){const r={a:"a",admonition:"admonition",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"fixed-server-roles",children:"Fixed Server Roles"}),"\n",(0,i.jsxs)(r.p,{children:["The following table describes fixed server roles. For more information, see the Microsoft Fixed Server-Level Roles ",(0,i.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-2017#fixed-server-level-roles",children:"article"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"The roles may change depending on the SQL Server version."})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Role"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required for?"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"sysadmin"}),(0,i.jsx)(r.td,{children:"Members of the sysadmin fixed server role can perform any activity in the server, for example, set up and maintain the system or server."}),(0,i.jsx)(r.td,{children:"Required for High Availability (HA) and Quali Server"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"serveradmin"}),(0,i.jsx)(r.td,{children:"Members of the serveradmin fixed server role can change server-wide configuration options and shut down the server."}),(0,i.jsx)(r.td,{children:"Required for HA"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"securityadmin"}),(0,i.jsx)(r.td,{children:"Members of the securityadmin fixed server role manage logins and their properties. They can GRANT, DENY, and REVOKE server-level permissions. They can also GRANT, DENY, and REVOKE database-level permissions if they have access to a database. Additionally, they can reset passwords for SQL Server logins."}),(0,i.jsx)(r.td,{children:"Used only by DB admin"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"processadmin"}),(0,i.jsx)(r.td,{children:"Members of the\xa0processadmin\xa0fixed server role can end processes that are running in an instance of SQL Server."}),(0,i.jsx)(r.td,{children:"Might be required during installation"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"setupadmin"}),(0,i.jsx)(r.td,{children:"Members of the\xa0setupadmin\xa0fixed server role can add and remove linked servers by using Transact-SQL statements. (sysadmin membership is needed when using SQL Management Studio.)"}),(0,i.jsx)(r.td,{children:"Required for HA"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"bulkadmin"}),(0,i.jsx)(r.td,{children:"Members of the\xa0bulkadmin\xa0fixed server role can run the BULK INSERT statement."}),(0,i.jsx)(r.td,{children:"Required during normal operation"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"diskadmin"}),(0,i.jsx)(r.td,{children:"The\xa0diskadmin\xa0fixed server role is used for managing disk files."}),(0,i.jsx)(r.td,{children:"Not required from app perspective"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dbcreator"}),(0,i.jsx)(r.td,{children:"Members of the\xa0dbcreator\xa0fixed server role can create, alter, drop, and restore any database."}),(0,i.jsx)(r.td,{children:"Required during installation"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Public"}),(0,i.jsx)(r.td,{children:"Every SQL Server\xa0login belongs to the\xa0public\xa0server role. When a server principal has not been granted or denied specific permissions on a securable object, the user inherits the permissions granted to\xa0public\xa0on that object.\xa0Only assign public permissions on any object when you want the object to be available to all users. You cannot change membership in\xa0public."}),(0,i.jsx)(r.td,{children:"Required during normal operation"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,r,s)=>{s.d(r,{I:()=>l,M:()=>d});var i=s(11504);const n={},t=i.createContext(n);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);