"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85528],{70985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(74848),a=n(28453);const s={sidebar_position:1},r="Database Trimming",o={id:"install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming",title:"Database Trimming",description:"This article provides best practices for trimming the CloudShell databases. It is important to periodically trim the databases to minimize load and optimize performance. CloudShell uses several SQL and MongoDB databases for data storage and retrieval.",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming.md",sourceDirName:"install-configure/cloudshell-suite/appendix/best-practices-cs-prod",slug:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming",permalink:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming.md",tags:[],version:"2024.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Best Practices for CloudShell Production Environment",permalink:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/"},next:{title:"Known CloudShell Installation Issues",permalink:"/install-configure/cloudshell-suite/appendix/known-cs-install-issues"}},l={},d=[{value:"Defragment Quali / Insight DBs",id:"defragment-quali--insight-dbs",level:2},{value:"Trim Insight DB of old data",id:"trim-insight-db-of-old-data",level:2},{value:"Reduce retention period for Mongo DB data",id:"reduce-retention-period-for-mongo-db-data",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"database-trimming",children:"Database Trimming"})}),"\n",(0,i.jsx)(t.p,{children:"This article provides best practices for trimming the CloudShell databases. It is important to periodically trim the databases to minimize load and optimize performance. CloudShell uses several SQL and MongoDB databases for data storage and retrieval."}),"\n",(0,i.jsx)(t.p,{children:"The databases that may cause issues from time to time are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Quali DB"}),": SQL database that stores sandbox deployment and lifecycle management data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Insight DB"}),": SQL database that stores Insight data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MongoDB"}),": MongoDB database that stores sandbox Activity Feed and Output events"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Tips for handing the SQL Server databases:",type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Keep a backup copy of the production database before defragmenting/trimming."}),"\n",(0,i.jsxs)(t.li,{children:["As a best practice, we recommend doing the following:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To allow CloudShell to work uninterrupted while you trim/defragment the database, run the procedure on a separate SQL Server. To do so, back up the database, restore it on another SQL Server and run the script on the restored database. When the operation completes, restore the updated database in the production SQL Server."}),"\n",(0,i.jsxs)(t.li,{children:["If you continue working with CloudShell while the database is being trimmed/defragmented, you may lose the new data when restoring back the database. To avoid losing new data, set a ",(0,i.jsx)(t.a,{href:"/admin/cloudshell-manage-dashboard/maintenance-window",children:"Maintenance Window"})," for the duration of the operation. To get an idea of the time it will take, please perform the defragmentation/trimming procedure on a copy of the database. The operation may take several hours, depending on the size of the database."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"defragment-quali--insight-dbs",children:"Defragment Quali / Insight DBs"}),"\n",(0,i.jsx)(t.p,{children:"We recommend defragmenting the Quali DB on a weekly/monthly schedule or when the fragmentation reaches a certain fragmentation threshold, such as 30%."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To check the fragmentation level of a database:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the script below, set the following parameters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"[Quali]"}),": Replace with the name of the database (leave the square brackets)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DDIPS.avg_fragmentation_in_percent"}),": Set the fragmentation threshold percentage (default is 0)"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"USE [Quali]\n\n\tSELECT S.name as 'Schema',\n\tT.name as 'Table',\n\tI.name as 'Index',\n\tDDIPS.avg_fragmentation_in_percent,\n\tDDIPS.page_count\n\tFROM sys.dm_db_index_physical_stats (DB_ID(), NULL, NULL, NULL, NULL) AS DDIPS\n\tINNER JOIN sys.tables T on T.object_id = DDIPS.object_id\n\tINNER JOIN sys.schemas S on T.schema_id = S.schema_id\n\tINNER JOIN sys.indexes I ON I.object_id = DDIPS.object_id\n\tAND DDIPS.index_id = I.index_id\n\tWHERE DDIPS.database_id = DB_ID()\n\tand I.name is not null\n\tAND DDIPS.avg_fragmentation_in_percent > 0\n\tORDER BY DDIPS.avg_fragmentation_in_percent desc\n\t\t\t\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To rebuild a database:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the script below, replace ",(0,i.jsx)(t.strong,{children:"[Quali]"})," with the name of the database (leave the square brackets) and run the script."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"USE [Quali]\n\tGO\n\n\tDECLARE @TableName VARCHAR(255)\n\tDECLARE @sql NVARCHAR(500)\n\tDECLARE @fillfactor INT\n\tSET @fillfactor = 80\n\tDECLARE TableCursor CURSOR FOR\n        SELECT OBJECT_SCHEMA_NAME([object_id])+'.'+name AS TableName\n\tFROM sys.tables\n\tOPEN TableCursor\n\tFETCH NEXT FROM TableCursor INTO @TableName\n\tWHILE @@FETCH_STATUS = 0\n        BEGIN\n        SET @sql = 'ALTER INDEX ALL ON ' + @TableName + ' REBUILD WITH (FILLFACTOR = ' + CONVERT(VARCHAR(3),@fillfactor) + ')'\n\tEXEC (@sql)\n\tFETCH NEXT FROM TableCursor INTO @TableName\n\tEND\n\tCLOSE TableCursor\n\tDEALLOCATE TableCursor\n\tGO\n\t\t\t\t\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"trim-insight-db-of-old-data",children:"Trim Insight DB of old data"}),"\n",(0,i.jsx)(t.p,{children:"This database doesn't have a retention policy, which may cause unnecessary load in highly active CloudShell deployments over a long enough period. As such, we recommend trimming this database for unneeded data every 1-2 years."}),"\n",(0,i.jsxs)(t.p,{children:["For example, this particular ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(10183).A+"",children:"script"})," clears data that is older than 12 months from the specified Insight DB."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To avoid loss of data, make sure the trimming process is completed before the Insight DB's nightly sync with CloudShell. For details, see ",(0,i.jsx)(t.a,{href:"/install-configure/cs-insight-bi/install-insight/synchronization",children:"Synchronization"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To trim the database using the above script:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open the script in an text editor and set the following parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_NAME"}),": Enter the name of the relevant database. There are 3 places within the script."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"@months_keep"}),": Set the data retention period, in months (older data will be purged). Default is 12."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Save and run the script."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To follow the progress of the script, you can run the following and see the row count go down on relevant tables:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"SELECT o.NAME,\n\t        i.rowcnt \n\t        FROM sysindexes AS i\n\t        INNER JOIN sysobjects AS o ON i.id = o.id \n\t        WHERE i.indid < 2  AND OBJECTPROPERTY(o.id, 'IsMSShipped') = 0\n\t        ORDER BY i.rowcnt desc\n    --ORDER BY o.name\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To follow the progress of the DB trimming operation (which runs at the end of the script), run the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:"SELECT \n\t\t\tpercent_complete, \n\t\t\tstart_time, \n\t\t\tstatus, \n\t\t\tcommand, \n\t\t\testimated_completion_time, \n\t\t\tcpu_time, \n\t\t\ttotal_elapsed_time\n\t\t\tFROM \n\t\t\tsys.dm_exec_requests\n\t\t\tWHERE\n\tcommand = 'DbccFilesCompact'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reduce-retention-period-for-mongo-db-data",children:"Reduce retention period for Mongo DB data"}),"\n",(0,i.jsxs)(t.p,{children:["By default, MongoDB keeps sandbox Activity Feed/Output event data for 49+ years. Depending on your CloudShell deployment, you may need to reduce the retention period. For details, see ",(0,i.jsx)(t.a,{href:"/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#limiting-the-time-to-keep-sandbox-activity-feedoutput-data",children:"Limiting the time to keep sandbox Activity Feed/Output data"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},10183:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/delete_old_insight_data-ff9aaf4e48b62a057dba3a2d3319d530.zip"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);