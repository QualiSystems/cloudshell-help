"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[9790],{46572:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var l=n(17624),r=n(4552);const o={sidebar_position:3},a="Working with the ARR Cluster Virtual Front",i={id:"install-configure/ha-installation/install-win-network-load-balance/work-with-arr-cluster",title:"Working with the ARR Cluster Virtual Front",description:"After configuring the ARR load balancing cluster, you can use the cluster IP or name (for example, 192.162.63.110 or CloudShellPortal-LB) to browse the portal.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-win-network-load-balance/work-with-arr-cluster.md",sourceDirName:"install-configure/ha-installation/install-win-network-load-balance",slug:"/install-configure/ha-installation/install-win-network-load-balance/work-with-arr-cluster",permalink:"/cloudshell-help/install-configure/ha-installation/install-win-network-load-balance/work-with-arr-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-win-network-load-balance/work-with-arr-cluster.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adding Another Host to the Network Load Balancing Cluster",permalink:"/cloudshell-help/install-configure/ha-installation/install-win-network-load-balance/add-another-host-to-net-lb"},next:{title:"Monitoring the Cluster Environment",permalink:"/cloudshell-help/install-configure/ha-installation/install-win-network-load-balance/monitor-cluster-env"}},s={},h=[];function d(t){const e={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"working-with-the-arr-cluster-virtual-front",children:"Working with the ARR Cluster Virtual Front"}),"\n",(0,l.jsx)(e.p,{children:"After configuring the ARR load balancing cluster, you can use the cluster IP or name (for example, 192.162.63.110 or CloudShellPortal-LB) to browse the portal."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"To configure the portal virtual front with Quali Server:"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Connect to the Quali database using Microsoft SQL Server Management Studio. (if you are using SQL AlwaysOn \u2013 connect to the AlwaysOn Listener)."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Copy the SQL statements below and paste them after changing these parameters:"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"SQL statement"}),(0,l.jsx)(e.th,{children:"Parameter details"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<<Quali Database>>"})}),(0,l.jsx)(e.td,{children:"Select the Quali Database your system uses"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<<CloudShell Portal\xa0 Ip or Name>>"})}),(0,l.jsx)(e.td,{children:"Select the CloudShell Portal Virtual front IP or DNS name"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"<<CloudShell Portal Port>>"})}),(0,l.jsx)(e.td,{children:"Select the CloudShell Portal Virtual front port"})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Run the following SQL statement. This SQL statement ensures that Quali server is aware of the portal cluster and does not use the portal cluster nodes for communication (for example, links that are in emails sent from Quali server should redirect you to the CloudShell Portal cluster and not to one of the individual nodes)."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"USE <<Quali Database>>\nGO\n\nIF (select count(*) from PortalInfo) > 0\nBEGIN\n\n/*Choose your CloudShell Portal Virtual front Ip or name*/\nDECLARE @ip NVARCHAR(15) = <<CloudShell Portal  Ip or Name>>\n\n/*Choose your CloudShell Portal Virtual front portal port*/\nDECLARE @port INT = <<CloudShell Portal Port>>\n\nUPDATE [dbo].[PortalInfo]\n   SET [MachineName] = @ip\n      ,[Port] = @port\n/*If http is in use, change the http to https*/\n      ,[PortalUri] = 'http://' + @ip + ':' + CONVERT(varchar(10),@port) + '/'\n      ,[ModificationDate] = GETDATE()\nWHERE Id = (select max(Id) from [dbo].[PortalInfo])\nEND\nELSE\n PRINT 'No registered CloudShell Portal in the system, please register the Portal and run this statement again...'\nGO\n"})}),"\n",(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsx)(e.p,{children:"You do not need to restart the server."})}),"\n"]}),"\n"]})]})}function c(t={}){const{wrapper:e}={...(0,r.M)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(d,{...t})}):d(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>i,M:()=>a});var l=n(11504);const r={},o=l.createContext(r);function a(t){const e=l.useContext(o);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),l.createElement(o.Provider,{value:e},t.children)}}}]);