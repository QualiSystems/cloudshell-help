"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59368],{52664:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=o(17624),t=o(4552);const i={sidebar_position:5},r="Configure the MongoDB Database Connection",a={id:"install-configure/cloudshell-suite/configure-products/config-mongodb-connection",title:"Configure the MongoDB Database Connection",description:"Configure access to a MongoDB database",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/config-mongodb-connection.md",sourceDirName:"install-configure/cloudshell-suite/configure-products",slug:"/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",permalink:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/config-mongodb-connection.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configure the SQL Server Database Connection",permalink:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/config-sql-connection"},next:{title:"Changing the Running User on the Quali Server Service",permalink:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/change-service-user"}},c={},l=[{value:"Configure access to a MongoDB database",id:"configure-access-to-a-mongodb-database",level:2},{value:"Creating a dbOwner user on the MongoDB databases",id:"creating-a-dbowner-user-on-the-mongodb-databases",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-the-mongodb-database-connection",children:"Configure the MongoDB Database Connection"}),"\n",(0,s.jsx)(n.h2,{id:"configure-access-to-a-mongodb-database",children:"Configure access to a MongoDB database"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure access to a MongoDB database:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Additional Services"})," window, set the MongoDB connection strings."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(67428).c+"",width:"536",height:"523"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you selected to use your organization\u2019s Mongo DB (",(0,s.jsx)(n.strong,{children:"Mongo DB Server or cluster"})," option in the CloudShell Setup wizard) and require authentication, before you continue, perform the steps in ",(0,s.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/config-mongodb-connection#creating-a-dbowner-user-on-the-mongodb-databases",children:"Creating a dbOwner user on the MongoDB databases"})," below."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify the locations for the three MongoDB databases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reservations Database"}),"\n",(0,s.jsx)(n.li,{children:"Events Database"}),"\n",(0,s.jsxs)(n.li,{children:["Sandbox Service Database","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In a Kubernetes deployment, the Sandbox Service database is not created even though it was configured in the Quali Server configuration wizard."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use the default connection strings provided by the Quali Server configuration wizard if you installed MongoDB on the Quali Server machine. If you\u2019re using your organization\u2019s Mongo DB, use the following syntax:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"host1[:port1][,...hostN[:portN]"})," allows specifying multiple DBs for cluster configurations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[defaultauthdb]"})," is required if the Mongo DB uses authentication"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Instance example - connection string for Quali db (with authentication):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"mongodb://QualiAdmin:QualiAdminPassword@localhost:27017/Quali?authSource=admin\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cluster example - connection string for QualiLog db (containing a replica set with 3 nodes):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"mongodb://192.142.15.7:27017, 192.142.15.12:27017, 192.142.15.31:27017/QualiLog?replicaSet=rsTest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["CloudShell supports these MongoDB connection formats \u2013 ",(0,s.jsx)(n.strong,{children:"Standard Connection String Format"})," and ",(0,s.jsx)(n.strong,{children:"DNS Seedlist Connection Format"}),". For details, see this official MongoDB docs article: ",(0,s.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/",children:"https://docs.mongodb.com/manual/reference/connection-string/"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If prompted, click ",(0,s.jsx)(n.strong,{children:"Next"})," to perform a database upgrade."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(18172).c+"",width:"536",height:"523"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-dbowner-user-on-the-mongodb-databases",children:"Creating a dbOwner user on the MongoDB databases"}),"\n",(0,s.jsx)(n.p,{children:"When using an external Mongo DB that requires authentication, you must create a user with \u201cdbOwner\u201d rights on the Mongo DB databases. Note that you don\u2019t need to create the databases beforehand as Quali will do that for you."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To create the dbOwner user on the Mongo DB databases:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Connect to the Mongo DB server and open a Mongo shell instance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the following (use admin):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'db.createUser(\n  {\n    user: "QualiAdmin",\n    pwd: "QualiAdminPassword",\n    roles: [\n      { role: "dbOwner", db: "Quali" },\n      { role: "dbOwner", db: "QualiLog" },\n      { role: "dbOwner", db: "QualiSandboxService" },\n      { role: "dbOwner", db: "JobScheduling" },\n      { role: "dbOwner", db: "Scheduler" },\n      { role: "dbOwner", db: "IdentityService" },\n    ]\n  }\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"For additional information, see these official MongoDB docs articles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/",children:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.mongodb.com/manual/tutorial/create-users/",children:"https://docs.mongodb.com/manual/tutorial/create-users/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/complete-install/install-cloudshell/select-database-type/best-practices-for-mongodb",children:"Best Practices for MongoDB"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},67428:(e,n,o)=>{o.d(n,{c:()=>s});const s=o.p+"assets/images/ConfiguringMongoDBConnectionStrings-fc65235df8c80ccd2ae30688dc4560a7.png"},18172:(e,n,o)=>{o.d(n,{c:()=>s});const s=o.p+"assets/images/DatabaseUpgrade-5153c12532f9fa87322100717e1b489c.png"},4552:(e,n,o)=>{o.d(n,{I:()=>a,M:()=>r});var s=o(11504);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);