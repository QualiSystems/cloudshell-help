"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59408],{8247:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var n=r(17624),s=r(4552);const t={sidebar_position:4},a="Configure Quali Server to Work with the Availability Group Listener",l={id:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp",title:"Configure Quali Server to Work with the Availability Group Listener",description:"Associating Quali Server to an availability group listener allows Quali Server to access a database in a primary or secondary replica of an AlwaysOn availability group, so that when the primary Quali Server fails, the secondary switches online.",source:"@site/docs/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-quali-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/configure-quali-server-with-avl-grp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/set-up-alwayson-groups"},next:{title:"Displaying Cluster Health Information",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-quali-server/display-cluster-health-info"}},o={},c=[];function u(e){const i={admonition:"admonition",br:"br",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"configure-quali-server-to-work-with-the-availability-group-listener",children:"Configure Quali Server to Work with the Availability Group Listener"}),"\n",(0,n.jsx)(i.p,{children:"Associating Quali Server to an availability group listener allows Quali Server to access a database in a primary or secondary replica of an AlwaysOn availability group, so that when the primary Quali Server fails, the secondary switches online."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"To configure Quali Server to work with the availability group listener:"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Run the ",(0,n.jsx)(i.strong,{children:"Quali Server Configuration"})," again on the first node."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["In the ",(0,n.jsx)(i.strong,{children:"Database Selection"})," page, click ",(0,n.jsx)(i.strong,{children:"Advanced"})," and for each database, select the ",(0,n.jsx)(i.strong,{children:"Availability Group Listener"})," as the database hostname."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(42380).c+"",width:"450",height:"280"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["In SQL Server 2016 Standard Edition, for each database, specify that database's listener and port in the format \"",(0,n.jsx)(i.code,{children:"<hostname>,<port>"}),'". For example:',(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.img,{src:r(44104).c+"",width:"580",height:"322"})]})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Stop the ",(0,n.jsx)(i.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"To see the AlwaysOn listener properties:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Right click the listener and open the properties:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(38512).c+"",width:"291",height:"344"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(14383).c+"",width:"550",height:"258"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},44104:(e,i,r)=>{r.d(i,{c:()=>n});const n=r.p+"assets/images/AlwaysOn-Availability-Groups_7-b84b9fca8dd48876cb3db2f3b751084b.png"},38512:(e,i,r)=>{r.d(i,{c:()=>n});const n=r.p+"assets/images/Configuring-Quali-server-to_1-27864b2d57b9c1441e47b9423f908f6d.png"},14383:(e,i,r)=>{r.d(i,{c:()=>n});const n=r.p+"assets/images/Configuring-Quali-server-to_2-d354a6a19e4fe17cacca870235f773fb.png"},42380:(e,i,r)=>{r.d(i,{c:()=>n});const n=r.p+"assets/images/Configuring-Quali-server-to_450x280-ee5e31037071c949ceea3a0ff9e87045.png"},4552:(e,i,r)=>{r.d(i,{I:()=>l,M:()=>a});var n=r(11504);const s={},t=n.createContext(s);function a(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);