"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[78592],{56276:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(17624),t=n(4552);const i={sidebar_position:5},r="TestShell Database Permissions",a={id:"troubleshooting/installation/testshell-database-permissions",title:"TestShell Database Permissions",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/testshell-database-permissions.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/testshell-database-permissions",permalink:"/troubleshooting/installation/testshell-database-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/testshell-database-permissions.md",tags:[],version:"2023.3",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MSDTC Firewall Settings",permalink:"/troubleshooting/installation/msdtc-firewall-settings"},next:{title:"The Requested page cannot be accessed",permalink:"/troubleshooting/installation/the-requested-page-cannot-be-accessed"}},l={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"testshell-database-permissions",children:"TestShell Database Permissions"}),"\n",(0,o.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,o.jsxs)(s.admonition,{type:"danger-one-line",children:[(0,o.jsx)(s.p,{children:"Windows Service Logon Info"}),(0,o.jsx)(s.p,{children:"The service is unable to logon to the Database. The user \u201cLocalSystem\u201d does not have permission to connect to \u201cTestShell\u201d database."})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(41965).c+"",width:"350",height:"309"})}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(s.p,{children:"The above error may appear when creating a new database or using an existing database on a remote database server."}),"\n",(0,o.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,o.jsx)(s.p,{children:"Local user does not have permission to open a remote database."}),"\n",(0,o.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"To grant CloudShell users permissions for a database on a remote machine:"})}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.strong,{children:"User"})," field of the ",(0,o.jsx)(s.strong,{children:"Windows Service Logon Info"})," dialog box, enter the Local System user or Domain User name."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Specify the full path, for example:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"<Domain>\\<Username>"})}),"\n",(0,o.jsx)(s.p,{children:"-or-"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"<Local User on RemoteMachine>\\<Username>"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"In the Password field, enter the user\u2019s password."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Confirm the user password and click OK to proceed."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},41965:(e,s,n)=>{n.d(s,{c:()=>o});const o=n.p+"assets/images/Windows-Service-Logon-Info-b5564ae58001e77921017e76d5ffb0b3.png"},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>r});var o=n(11504);const t={},i=o.createContext(t);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);