"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[12696],{53092:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=o(17624),l=o(4552);const s={sidebar_position:4},t="Configure MongoDB in HA Mode (Cluster)",a={id:"install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode",title:"Configure MongoDB in HA Mode (Cluster)",description:"Using MongoDB in high availability mode requires the use of MongoDB replica sets. A replica set is a group of mongod processes that manage the same data set, providing redundancy and high availability. For additional information, see the official MongoDB documentation//docs.mongodb.com/manual/replication/.",source:"@site/docs/install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode.md",sourceDirName:"install-configure/ha-installation/installation-procedure",slug:"/install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode",permalink:"/cloudshell-help/next/install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/installation-procedure/configure-mongodb-in-ha-mode.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring the SQL Database Server Cluster (AlwaysOn)",permalink:"/cloudshell-help/next/install-configure/ha-installation/installation-procedure/configure-sql-db-server-cluster"},next:{title:"Installing and Configuring Quali Server",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server"}},r={},c=[{value:"Related Topics:",id:"related-topics",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"configure-mongodb-in-ha-mode-cluster",children:"Configure MongoDB in HA Mode (Cluster)"}),"\n",(0,i.jsxs)(e.p,{children:["Using MongoDB in high availability mode requires the use of MongoDB replica sets. A replica set is a group of mongod processes that manage the same data set, providing redundancy and high availability. For additional information, see the official MongoDB documentation: ",(0,i.jsx)(e.a,{href:"https://docs.mongodb.com/manual/replication/",children:"https://docs.mongodb.com/manual/replication/"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"To configure the MongoDB cluster:"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Install MongoDB on all the nodes in your cluster."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Stop the MongoDB Server Service (if running)."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Run Command Prompt as administrator, navigate to the MongoDB Server's ",(0,i.jsx)(e.code,{children:"\\bin"})," directory (usually at ",(0,i.jsx)(e.code,{children:"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\\"}),") and run this command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'mongod --dbpath "C:\\Program Files\\MongoDB\\Server\\4.2\\data" --logpath "C:\\Program Files\\MongoDB\\Server\\4.2\\log\\mongod.log" --port 27017 --replSet rsTest -\u2013bind_ip 0.0.0.0\n'})}),"\n",(0,i.jsx)(e.p,{children:"or for multiple nodes:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'mongod --dbpath "C:\\Program Files\\MongoDB\\Server\\4.2\\data" --logpath "C:\\Program Files\\MongoDB\\Server\\4.2\\log\\mongod.log" --port 27017 --replSet rsTest -\u2013bind_ip localhost, <IP1>, <IP2>, <IP3>\u2026\n'})}),"\n",(0,i.jsx)(e.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"You can change all variables in the command and also run the command through a config file."}),"\n",(0,i.jsxs)(e.li,{children:["Make sure you set ",(0,i.jsx)(e.strong,{children:"--bind_ip"})," to 0.0.0.0 or include the IPs of the machines that need to access the MongoDB, including the other machines in the cluster. For details, see this MongoDB docs article: ",(0,i.jsx)(e.a,{href:"https://docs.mongodb.com/manual/core/security-mongodb-configuration/",children:"https://docs.mongodb.com/manual/core/security-mongodb-configuration/"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Repeat steps 2 and 3 for each node in the cluster."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"In one of the nodes, connect to the Mongo shell from a different Command-Prompt and run the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'rs.initiate( {\n   _id : "rsTest",\n   members: [\n      { _id: 0, host: "<1st_node_ip>:27017" },\n      { _id: 1, host: "<2nd_node_ip>:27017" },\n      { _id: 2, host: "<3rd_node_ip>:27017" }\n   ]\n})\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"note-one-line",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"})," Host addresses must be either all IPs or all hostnames."]})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"To verify the state of the replica set and set configurations, run:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"rs.status()\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"On each secondary node, connect to the mongo shell from a different Command-Prompt and run the following command:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"On MongoDB 4.2:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"rs.slaveOk()\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"On MondoDB 4.4 and up:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"rs.secondaryOk()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Later on in the High Availability installation process, you will also need to install a MongoDB cluster as part of the Quali Server installation and specify the cluster's connection strings. This is all explained in ",(0,i.jsx)(e.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/",children:"Select the Database Type"})," and ",(0,i.jsx)(e.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",children:"Configure the MongoDB Database Connection"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"related-topics",children:"Related Topics:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb",children:"Best Practices for MongoDB"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/cloudshell-help/next/install-configure/ha-installation/known-issues-and-limitations",children:"Known Issues and Limitations (High Availability)"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},4552:(n,e,o)=>{o.d(e,{I:()=>a,M:()=>t});var i=o(11504);const l={},s=i.createContext(l);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);