"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52752],{54748:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=t(17624),n=t(4552);const r={sidebar_position:2},i="Restoring CloudShell Databases",o={id:"install-configure/cloudshell-suite/backup-restore/restore-cs-db",title:"Restoring CloudShell Databases",description:"This procedure explains how to restore CloudShell from existing database files.",source:"@site/docs/install-configure/cloudshell-suite/backup-restore/restore-cs-db.md",sourceDirName:"install-configure/cloudshell-suite/backup-restore",slug:"/install-configure/cloudshell-suite/backup-restore/restore-cs-db",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore/restore-cs-db",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/backup-restore/restore-cs-db.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backing Up CloudShell Databases",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore/backup-cs-db"},next:{title:"Backing Up Your Virtual Machines",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore/backup-vm"}},a={},c=[];function d(e){const s={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"restoring-cloudshell-databases",children:"Restoring CloudShell Databases"}),"\n",(0,l.jsx)(s.p,{children:"This procedure explains how to restore CloudShell from existing database files."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To restore CloudShell databases:"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"Copy the backup files that you created to the appropriate machine."}),"\n",(0,l.jsxs)(s.li,{children:["Shut down CloudShell services on this machines, as described in the ",(0,l.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore/backup-cs-db",children:"Backing Up CloudShell Databases"})," procedure."]}),"\n",(0,l.jsxs)(s.li,{children:["Restore the backup files into the existing databases.","\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"In SQL Server Management Studio, connect to the CloudShell database server."}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.strong,{children:"Databases"})," tree, right-click each Quali database, and select ",(0,l.jsx)(s.strong,{children:"Tasks >Restore>Database"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.strong,{children:"Restore Database"})," dialog box, fill in the details, pointing to the previously created backup. For more information, see ",(0,l.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/restore-a-database-backup-using-ssms",children:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/restore-a-database-backup-using-ssms"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["Restart CloudShell services:","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Quali Server:","\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Run the ",(0,l.jsx)(s.strong,{children:"Quali Server Configuration Wizard"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.strong,{children:"Administrative Tasks"})," page, ensure that the Search Service is up to date."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["IIS Service: Restart the service as described in ",(0,l.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/backup-restore/backup-cs-db",children:"Backing Up CloudShell Databases"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["You can now proceed to ",(0,l.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/upgrade-procedure/upgrade-staging",children:"Upgrade the Validation Environment"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>o,M:()=>i});var l=t(11504);const n={},r=l.createContext(n);function i(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);