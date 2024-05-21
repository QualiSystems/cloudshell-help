"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[44740],{71768:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=i(17624),s=i(4552);const t={sidebar_position:3},r="Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)",l={id:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups",title:"Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)",description:"Make sure to perform the steps in the Configure Quali Server on the First Cluster Node topic in order to work with the Availability group listener step after configuring the AlwaysOn availability group.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Set the Same Certificate on all Quali Server Nodes",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-the-same-certificate"},next:{title:"Configure Quali Server to Work with the Availability Group Listener",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp"}},a={},o=[];function c(A){const e={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"set-up-alwayson-availability-groups-only-for-alwayson-users",children:"Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)"}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["Make sure to perform the steps in the ",(0,n.jsx)(e.a,{href:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/config-quali-server-on-first-node",children:"Configure Quali Server on the First Cluster Node"})," topic in order to work with the Availability group listener step after configuring the ",(0,n.jsx)(e.strong,{children:"AlwaysOn availability group"}),"."]})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"To cluster the database:"})}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Ensure that you create a full back up for all clustered CloudShell databases. For more information, see (",(0,n.jsx)(e.a,{href:"https://msdn.microsoft.com/en-us/library/ms187510.aspx",children:"https://msdn.microsoft.com/en-us/library/ms187510.aspx"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Make sure to open port 5022 on all cluster machines firewalls"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Open the SQL server in which you created the CloudShell DBs, expand ",(0,n.jsx)(e.strong,{children:"AlwaysOn High Availability"})," and right-click ",(0,n.jsx)(e.strong,{children:"Availability Groups"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Click ",(0,n.jsx)(e.strong,{children:"New Availability Group Wizard"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(15152).c+"",width:"396",height:"123"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Specify a group name."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(78820).c+"",width:"234",height:"98"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Associate the availability groups to the CloudShell databases (Quali Database, Results Database, Insight Database)."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["For ",(0,n.jsx)(e.strong,{children:"SQL Server Enterprise Edition"}),", associate all three databases to the availability group."]}),"\n",(0,n.jsxs)(e.li,{children:["For ",(0,n.jsx)(e.strong,{children:"SQL Server 2016 Standard Edition"}),", create two additional ",(0,n.jsx)(e.strong,{children:"AlwaysOn"})," availability groups by repeating steps 4-5 (3 groups in total), and associate each database to a different group."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Make sure that status in the ",(0,n.jsx)(e.strong,{children:"Status"})," column of every database is ",(0,n.jsx)(e.strong,{children:"Meets prerequisites"}),". If not, click the database status, follow the error message and resolve the issue."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(68895).c+"",width:"383",height:"138"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Click ",(0,n.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Under the ",(0,n.jsx)(e.strong,{children:"Replicas"})," tab, click ",(0,n.jsx)(e.strong,{children:"Add Replicas"})," and connect to all of the environment SQL nodes using SQL or windows authentication."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(94572).c+"",width:"543",height:"271"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Select the ",(0,n.jsx)(e.strong,{children:"Automatic Failover"})," checkbox for each of the servers and for each of the servers, select ",(0,n.jsx)(e.strong,{children:"Read-intent only"})," from the ",(0,n.jsx)(e.strong,{children:"Readable Secondary"})," dropdown list."]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"SQL Server 2016 Standard Edition does not support this feature."})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Click the ",(0,n.jsx)(e.strong,{children:"Listener"})," tab, insert the values for ",(0,n.jsx)(e.strong,{children:"Listener DNS Name, Port"})," (1433 for MSSQL default) and select ",(0,n.jsx)(e.strong,{children:"Network Mode"}),". If you selected ",(0,n.jsx)(e.strong,{children:"DHCP"}),", then select ",(0,n.jsx)(e.strong,{children:"subnet"}),". If you selected ",(0,n.jsx)(e.strong,{children:"Static IP"}),", then specify an available IP in the subnet."]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["In ",(0,n.jsx)(e.strong,{children:"SQL Server 2016 Standard Edition"}),", set a different port number for each availability group's listener (3 in total)."]})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(90240).c+"",width:"521",height:"188"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Click ",(0,n.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Select ",(0,n.jsx)(e.strong,{children:"Full"}),". Specify the database backup file location on the server and click ",(0,n.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Wait for the validation step to finish."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"If an error occurs during this process, click on the error, resolve the problem and run the validation step again."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["When all steps are free of errors, click ",(0,n.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Click ",(0,n.jsx)(e.strong,{children:"Finished"}),". The wizard is finalized and the clustering Role dependencies are created."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(50156).c+"",width:"324",height:"50"})}),"\n",(0,n.jsx)(e.p,{children:"Now, the availability group is set up, and you can see all relevant data for it under the availability group name you specified in early step:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(88436).c+"",width:"285",height:"227"})}),"\n"]}),"\n"]})]})}function g(A={}){const{wrapper:e}={...(0,s.M)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(c,{...A})}):c(A)}},78820:(A,e,i)=>{i.d(e,{c:()=>n});const n="data:image/png;base64,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"},68895:(A,e,i)=>{i.d(e,{c:()=>n});const n=i.p+"assets/images/Setting-up-an-AlwaysOn-availability_2_383x138-0f4ddfed8554923cb481dc8fecb6c6ef.png"},15152:(A,e,i)=>{i.d(e,{c:()=>n});const n=i.p+"assets/images/Setting-up-an-AlwaysOn-availability_396x123-9038bf332a75f39ba7b8c7771ea73ccb.png"},94572:(A,e,i)=>{i.d(e,{c:()=>n});const n=i.p+"assets/images/Setting-up-an-AlwaysOn-availability_3_543x271-b57c7824f8d69dd52cd7cec976320cef.png"},90240:(A,e,i)=>{i.d(e,{c:()=>n});const n="data:image/png;base64,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"},50156:(A,e,i)=>{i.d(e,{c:()=>n});const n="data:image/png;base64,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"},88436:(A,e,i)=>{i.d(e,{c:()=>n});const n=i.p+"assets/images/Setting-up-an-AlwaysOn-availability_6_285x227-522491f9ee3d76d11a5e02df695ac59d.png"},4552:(A,e,i)=>{i.d(e,{I:()=>l,M:()=>r});var n=i(11504);const s={},t=n.createContext(s);function r(A){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:r(A.components),n.createElement(t.Provider,{value:e},A.children)}}}]);