"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[36640],{24400:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=l(17624),i=l(4552);const t={sidebar_position:1},r="Backing Up CloudShell Databases",o={id:"install-configure/cloudshell-suite/backup-restore/backup-cs-db",title:"Backing Up CloudShell Databases",description:"This article explains how to back up your CloudShell databases.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/backup-restore/backup-cs-db.md",sourceDirName:"install-configure/cloudshell-suite/backup-restore",slug:"/install-configure/cloudshell-suite/backup-restore/backup-cs-db",permalink:"/cloudshell-help/install-configure/cloudshell-suite/backup-restore/backup-cs-db",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/backup-restore/backup-cs-db.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Back Up and Restore CloudShell",permalink:"/cloudshell-help/install-configure/cloudshell-suite/backup-restore"},next:{title:"Restoring CloudShell Databases",permalink:"/cloudshell-help/install-configure/cloudshell-suite/backup-restore/restore-cs-db"}},a={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"backing-up-cloudshell-databases",children:"Backing Up CloudShell Databases"}),"\n",(0,s.jsx)(n.p,{children:"This article explains how to back up your CloudShell databases."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"When you back up an active database you could have changes happening while you are taking the back up. This could lead to corruption in the backup or give you a backup that doesn\u2019t exactly match what you were expecting. We therefore recommend that you perform the backup while CloudShell is shut down."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To back up CloudShell's MongoDB databases:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Visit this official MongoDB docs article: ",(0,s.jsx)(n.a,{href:"https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/",children:"https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To backup CloudShell's SQL Server databases:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure all CloudShell users are logged off and are notified of the planned downtime."}),"\n",(0,s.jsxs)(n.li,{children:["Shut down CloudShell services on the appropriate relevant machines. Although not a hard requirement, it is recommended to shut down the Quali Server to get SQL in a non-running state.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Quali Server:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On the Quali Server machine, open the Windows Services console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click ",(0,s.jsx)(n.strong,{children:"Quali Server"})," and select ",(0,s.jsx)(n.strong,{children:"Stop"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"IIS Service:"}),"\n",(0,s.jsx)(n.p,{children:"If running IIS Express:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On the Quali Server machine, open the Windows Services console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click ",(0,s.jsx)(n.strong,{children:"CloudShell Portal IIS Express Monitor"})," and select ",(0,s.jsx)(n.strong,{children:"Stop"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If running a full version of IIS:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open the IIS Manager console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click the CloudShell Portal website and select ",(0,s.jsx)(n.strong,{children:"Stop"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Perform a backup of the three CloudShell databases:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In SQL Server Management Studio, connect to the relevant database server."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Databases"})," tree, right-click each Quali database, select ",(0,s.jsx)(n.strong,{children:"Tasks > Backup"}),".","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"By default, Quali databases include the Quali, QualiInsight, and QualiResults databases."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Back Up Database"})," dialog box, fill in the details. For additional information, see ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/create-a-full-database-backup-sql-server",children:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/create-a-full-database-backup-sql-server"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"OK"})," to create the selected backup.","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you are not sure which databases CloudShell currently uses, you can find the relevant information in the ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\connections.config"})," file. The ",(0,s.jsx)(n.code,{children:"Initial Catalog"}),"\xa0parameters contain each database's name."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Restart CloudShell services on the appropriate relevant machines.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Quali Server:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On the Quali Server machine, open the Windows Services console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click ",(0,s.jsx)(n.strong,{children:"Quali Server"})," and select ",(0,s.jsx)(n.strong,{children:"Start"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"IIS Service:"}),"\n",(0,s.jsx)(n.p,{children:"If running IIS Express:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On the Quali Server machine, open the Windows Services console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click ",(0,s.jsx)(n.strong,{children:"CloudShell Portal IIS Express Monitor"})," and select ",(0,s.jsx)(n.strong,{children:"Start"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If running a full version of IIS:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open the IIS Manager console."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click the CloudShell Portal website and select ",(0,s.jsx)(n.strong,{children:"Start"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>o,M:()=>r});var s=l(11504);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);