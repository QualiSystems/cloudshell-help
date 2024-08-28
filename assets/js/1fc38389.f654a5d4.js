"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[50598],{29584:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=n(74848),r=n(28453);const t={sidebar_position:5},l="Database Prerequisites",a={id:"install-configure/cs-system-requirements/database-prereq",title:"Database Prerequisites",description:"CloudShell applications can work with MS SQL database.",source:"@site/versioned_docs/version-2024.1/install-configure/cs-system-requirements/database-prereq.md",sourceDirName:"install-configure/cs-system-requirements",slug:"/install-configure/cs-system-requirements/database-prereq",permalink:"/install-configure/cs-system-requirements/database-prereq",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cs-system-requirements/database-prereq.md",tags:[],version:"2024.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3rd Party Software",permalink:"/install-configure/cs-system-requirements/third-party-software"},next:{title:"Supported Browsers",permalink:"/install-configure/cs-system-requirements/supported-browsers"}},d={},o=[{value:"MongoDB database permissions and installation requirements",id:"mongodb-database-permissions-and-installation-requirements",level:2},{value:"SQL database user permissions",id:"sql-database-user-permissions",level:2},{value:"Installation requirements for SQL databases",id:"installation-requirements-for-sql-databases",level:2},{value:"Database",id:"database",level:3},{value:"Quali Server",id:"quali-server",level:3},{value:"CloudShell applications",id:"cloudshell-applications",level:3},{value:"Additional requirements",id:"additional-requirements",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"database-prerequisites",children:"Database Prerequisites"})}),"\n",(0,i.jsx)(s.p,{children:"CloudShell applications can work with MS SQL database."}),"\n",(0,i.jsx)(s.h2,{id:"mongodb-database-permissions-and-installation-requirements",children:"MongoDB database permissions and installation requirements"}),"\n",(0,i.jsxs)(s.p,{children:["CloudShell uses MongoDB's official software and hardware requirements, as detailed in ",(0,i.jsx)(s.a,{href:"https://docs.mongodb.com/manual/administration/production-notes/",children:"https://docs.mongodb.com/manual/administration/production-notes/"}),". For your convenience, we've listed the minimum hardware requirements below.\xa0In case of a discrepancy, please use MongoDB's recommendations."]}),"\n",(0,i.jsxs)(s.p,{children:["Minimum supported versions of MongoDB are detailed in ",(0,i.jsx)(s.a,{href:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",children:"Select the Database Type"}),"."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Minimum Hardware Requirements"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CPU"}),(0,i.jsx)(s.td,{children:"2 dual cores or 1 physical multi-core CPU"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RAM"}),(0,i.jsx)(s.td,{children:"4 GB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hard Drive"}),(0,i.jsx)(s.td,{children:"40 GB"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"sql-database-user-permissions",children:"SQL database user permissions"}),"\n",(0,i.jsx)(s.p,{children:"For initial CloudShell installation, provide Windows users and the NT AUTHORITY\\SYSTEM user with the following SQL server roles:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"bulkadmin"}),"\n",(0,i.jsx)(s.li,{children:"dbcreator"}),"\n",(0,i.jsx)(s.li,{children:"public"}),"\n",(0,i.jsx)(s.li,{children:"sysadmin - for the NT AUTHORITY\\SYSTEM user only"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"When running CloudShell after installation, make sure your Windows users and the NT AUTHORITY\\SYSTEM user have the following SQL server roles:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"bulkadmin"}),"\n",(0,i.jsx)(s.li,{children:"dbowner"}),"\n",(0,i.jsx)(s.li,{children:"public"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:'In addition, also provide a specific permission to "Connect to SQL" that is granted manually in the "Securables" section of the user\'s login properties.'}),"\n",(0,i.jsxs)(s.p,{children:["For a detailed list of SQL server roles, see the ",(0,i.jsx)(s.a,{href:"/install-configure/cloudshell-suite/appendix/fixed-server-roles",children:"Fixed Server Roles"})," appendix."]}),"\n",(0,i.jsx)(s.h2,{id:"installation-requirements-for-sql-databases",children:"Installation requirements for SQL databases"}),"\n",(0,i.jsx)(s.p,{children:"The required components must be installed in the following order:"}),"\n",(0,i.jsx)(s.h3,{id:"database",children:"Database"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Supported Standard editions:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"SQL Server 2012"}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2014"}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2016"}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2019"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Supported Express editions:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"SQL Server 2016 SP1"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"**Hardware requirements for SQL Server: **"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\xa0"}),(0,i.jsx)(s.th,{children:"POC environment"}),(0,i.jsx)(s.th,{children:"Team Tier"}),(0,i.jsx)(s.th,{children:"Premium Tier"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CPU"}),(0,i.jsx)(s.td,{children:"4 logical cores"}),(0,i.jsx)(s.td,{children:"8 logical cores"}),(0,i.jsx)(s.td,{children:"16 logical cores"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Memory"}),(0,i.jsx)(s.td,{children:"8 GB"}),(0,i.jsx)(s.td,{children:"16 GB"}),(0,i.jsx)(s.td,{children:"32 GB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Storage (hard disk)"}),(0,i.jsx)(s.td,{children:"20 GB"}),(0,i.jsx)(s.td,{children:"40 GB (SSD)"}),(0,i.jsx)(s.td,{children:"100 GB (SSD)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Network card"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"1/10 GB, according to network load"}),(0,i.jsx)(s.td,{children:"1/10 GB, according to network load"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Installation instructions:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"For production environments, use SQL Server in an AlwaysOn availability group configuration."}),"\n",(0,i.jsxs)(s.li,{children:["SQL Express edition should only be used for POCs. For details, see this Microsoft docs article ",(0,i.jsx)(s.a,{href:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads",children:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Where there is an existing SQL server installed on the organization\u2019s network, it is recommended that this is used."}),"\n",(0,i.jsxs)(s.li,{children:["When selecting the ",(0,i.jsx)(s.strong,{children:"Standalone"})," option in the CloudShell installer, if the CloudShell installer cannot find Microsoft SQL Server or Microsoft SQL Server Express on the destination environment, Microsoft SQL Server Express is installed automatically as part of the installation procedure."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"There is a limitation of the maximum database size, per database - 10 GB for SQL Server 2016 SP1."}),"\n",(0,i.jsx)(s.li,{children:"SQL Server 2012 Enterprise, SQL Server 2014 Enterprise and SQL Server 2016 Standard Edition are supported for High Availability (HA) solutions."}),"\n"]})}),"\n",(0,i.jsx)(s.h3,{id:"quali-server",children:"Quali Server"}),"\n",(0,i.jsx)(s.p,{children:"Installation instruction:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The Quali Server can be located anywhere on the organization\u2019s network."}),"\n",(0,i.jsx)(s.li,{children:"For a standalone installation, the Quali Server is installed on the same machine as the clients and the database."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"cloudshell-applications",children:"CloudShell applications"}),"\n",(0,i.jsx)(s.p,{children:"Installation instructions:"}),"\n",(0,i.jsx)(s.p,{children:"Quali Server, SQL server or SQL Express, and the CloudShell applications can be installed on the same machine, or on separate machines in the same network."}),"\n",(0,i.jsx)(s.h2,{id:"additional-requirements",children:"Additional requirements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Distributed Transaction Coordinator"})," service must be running on the database server with specific configurations, as detailed in the Troubleshooting Guide:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/troubleshooting/installation/msdtc-security-configuration",children:"MSDTC Security Configuration"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/troubleshooting/installation/msdtc-firewall-settings",children:"MSDTC Firewall Settings"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/",children:"Best Practices for CloudShell Production Environment"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(96540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);