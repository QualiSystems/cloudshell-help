"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52952],{61464:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(17624),s=t(4552);const o={},i="Select the Database Type",a={id:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index",title:"Select the Database Type",description:"CloudShell uses two databases for storing data:",source:"@site/docs/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md",sourceDirName:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type",slug:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Select an Installation Option",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-installation-option"},next:{title:"Best Practices for MongoDB",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb"}},r={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const l={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"select-the-database-type",children:"Select the Database Type"}),"\n",(0,n.jsx)(l.p,{children:"CloudShell uses two databases for storing data:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"SQL Server is used like before for storing CloudShell data such as resource, user and blueprint data."}),"\n",(0,n.jsx)(l.li,{children:"MongoDB is used to store data related to the New Job Scheduling , including information related to suites, jobs, tests, reports as well as permitted user identity information. Starting with CloudShell 2020.2, sandbox events data is stored on MongoDB. MongoDB data will be included in Insight in future versions."}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["For more information, see ",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",children:"New Job Scheduling Architecture"}),"."]}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["In the ",(0,n.jsx)(l.strong,{children:"Database Type"})," window, select the database types to use with CloudShell."]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:t(19564).c+"",width:"529",height:"460"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"Select the SQL Server to use."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Microsoft SQL Server"})," to install CloudShell's databases on an existing SQL Server."]}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsx)(l.p,{children:"To use AWS RDS with CloudShell, contact your Customer Success Representative."})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Microsoft SQL Express"})," if you already have SQL Server 2019 Express. If a database server is not installed or is not available from a remote machine, select the ",(0,n.jsx)(l.strong,{children:"Install Microsoft SQL Server 2019 Express"})," checkbox to allow CloudShell to install SQL Server 2019 Express for you."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsx)(l.p,{children:"For high load systems, we recommend using an SQL Server that is hosted on a separate machine (not Quali Server)."})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"Select the MongoDB to use (create on-the-fly on the Quali Server or use an external MongoDB instance/cluster). CloudShell officially supports Mongo 4.2 and above (Community and Enterprise editions)."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["If your system administrator has a centralized MongoDB instance or cluster that can be utilized for CloudShell, select the ",(0,n.jsx)(l.strong,{children:"Mongo DB Server or cluster"})," option (Supported for MongoDB 4.2 and above)."]}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsxs)(l.p,{children:["If you want to use a higher version of MongoDB, make sure to first upgrade to the relevant MongoDB version, as explained in ",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6",children:"How to Upgrade MongoDB From 4.2 to 6.0"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["If there is no external MongoDB, select ",(0,n.jsx)(l.strong,{children:"Local MongoDB instance"})," to enable CloudShell installer to use an existing instance of MongoDB. If you don't have an existing MongoDB instance or cluster, select ",(0,n.jsx)(l.strong,{children:"Install MongoDB Server 6.0.4"})," to install and configure a local MongoDB Server 6.0.4 instance (Community edition)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsxs)(l.p,{children:["For high load systems, we recommend using a cluster/instance that is hosted on a separate machine (not Quali Server). For additional information, see ",(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb",children:"Best Practices for MongoDB"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["Click ",(0,n.jsx)(l.strong,{children:"Next"})," and proceed to ",(0,n.jsx)(l.a,{href:"https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-addt-srvcs.htm",children:"Set the MongoDB Connection Strings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/config-sql-connection",children:"Configure the SQL Server Database Connection"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",children:"Configure the MongoDB Database Connection"})}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,s.M)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19564:(e,l,t)=>{t.d(l,{c:()=>n});const n=t.p+"assets/images/Select-an-installation-option_3_1-f4c6725a6e10698381654927d40b7f5e.png"},4552:(e,l,t)=>{t.d(l,{I:()=>a,M:()=>i});var n=t(11504);const s={},o=n.createContext(s);function i(e){const l=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:l},e.children)}}}]);