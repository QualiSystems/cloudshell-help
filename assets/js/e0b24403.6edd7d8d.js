"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1959],{75110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),l=t(28453);const o={},i="Select the Database Type",r={id:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index",title:"Select the Database Type",description:"CloudShell uses two databases for storing data:",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md",sourceDirName:"install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type",slug:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",permalink:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/index.md",tags:[],version:"2024.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Select the CloudShell Components to Install",permalink:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-components"},next:{title:"Best Practices for MongoDB",permalink:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb"}},a={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"select-the-database-type",children:"Select the Database Type"})}),"\n",(0,s.jsx)(n.p,{children:"CloudShell uses two databases for storing data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQL Server is used like before for storing CloudShell data such as resource, user and blueprint data."}),"\n",(0,s.jsx)(n.li,{children:"MongoDB is used to store data related to the New Job Scheduling , including information related to suites, jobs, tests, reports as well as permitted user identity information. Starting with CloudShell 2020.2, sandbox events data is stored on MongoDB. MongoDB data will be included in Insight in future versions."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",children:"New Job Scheduling Architecture"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Database Type"})," window, select the database types to use with CloudShell."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(15014).A+"",width:"529",height:"460"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the SQL Server to use."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Microsoft SQL Server"})," to install CloudShell's databases on an existing SQL Server."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"To use AWS RDS with CloudShell, contact your Customer Success Representative."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Microsoft SQL Express"})," if you already have SQL Server 2019 Express. If a database server is not installed or is not available from a remote machine, select the ",(0,s.jsx)(n.strong,{children:"Install Microsoft SQL Server 2019 Express"})," checkbox to allow CloudShell to install SQL Server 2019 Express for you."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"For high load systems, we recommend using an SQL Server that is hosted on a separate machine (not Quali Server)."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the MongoDB to use (create on-the-fly on the Quali Server or use an external MongoDB instance/cluster). CloudShell officially supports Mongo 4.2 and above (Community and Enterprise editions)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If your system administrator has a centralized MongoDB instance or cluster that can be utilized for CloudShell, select the ",(0,s.jsx)(n.strong,{children:"Mongo DB Server or cluster"})," option (Supported for MongoDB 4.2 and above)."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you want to use a higher version of MongoDB, make sure to first upgrade to the relevant MongoDB version, as explained in ",(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/how-to-upgrade-4.2-6",children:"How to Upgrade MongoDB From 4.2 to 6.0"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If there is no external MongoDB, select ",(0,s.jsx)(n.strong,{children:"Local MongoDB instance"})," to enable CloudShell installer to use an existing instance of MongoDB. If you don't have an existing MongoDB instance or cluster, select ",(0,s.jsx)(n.strong,{children:"Install MongoDB Server 6.0.4"})," to install and configure a local MongoDB Server 6.0.4 instance (Community edition)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For high load systems, we recommend using a cluster/instance that is hosted on a separate machine (not Quali Server). For additional information, see ",(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb",children:"Best Practices for MongoDB"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"})," and proceed to ",(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/set-the-mongodb-connection-string",children:"Set the MongoDB Connection Strings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/configure-products/config-sql-connection",children:"Configure the SQL Server Database Connection"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",children:"Configure the MongoDB Database Connection"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15014:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Select-an-installation-option_3_1-f4c6725a6e10698381654927d40b7f5e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);