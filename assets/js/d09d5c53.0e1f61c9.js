"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63476],{94132:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=i(17624),t=i(4552);const r={sidebar_position:2},l="Configuring a New Cluster",c={id:"install-configure/ha-installation/create-cluster-in-win-failover-manager/config-new-cluster",title:"Configuring a New Cluster",description:"To configure a new cluster:",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/create-cluster-in-win-failover-manager/config-new-cluster.md",sourceDirName:"install-configure/ha-installation/create-cluster-in-win-failover-manager",slug:"/install-configure/ha-installation/create-cluster-in-win-failover-manager/config-new-cluster",permalink:"/cloudshell-help/install-configure/ha-installation/create-cluster-in-win-failover-manager/config-new-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/create-cluster-in-win-failover-manager/config-new-cluster.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing the Failover Cluster Feature",permalink:"/cloudshell-help/install-configure/ha-installation/create-cluster-in-win-failover-manager/install-failover-cluster-feature"},next:{title:"Maintenance of the HA Plugin",permalink:"/cloudshell-help/install-configure/ha-installation/maintenance-of-ha-plugin/"}},a={},o=[];function h(n){const e={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"configuring-a-new-cluster",children:"Configuring a New Cluster"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"To configure a new cluster:"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Open ",(0,s.jsx)(e.strong,{children:"Windows Failover Cluster Manager"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the main page, click ",(0,s.jsx)(e.strong,{children:"Validate configuration"}),". This opens a wizard that helps testing the cluster configuration and generates a report."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the wizard, click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Enter the names of the cluster nodes and click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(56548).c+"",width:"493",height:"339"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select ",(0,s.jsx)(e.strong,{children:"Run all tests"})," and click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Next"})," to run the tests. This could take a few minutes."]}),"\n",(0,s.jsxs)(e.p,{children:["After the tests have run, inspect the resultant report and see if there are errors. Do not consider errors that relate only to the storage section as the CloudShell HA Plugin does not use shared storage. To help with the examination of the results, you can open the html version of the report by clicking ",(0,s.jsx)(e.strong,{children:"View report"})," ",(0,s.jsx)(e.img,{src:i(12672).c+"",width:"140",height:"21"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(24392).c+"",width:"511",height:"343"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select the ",(0,s.jsx)(e.strong,{children:"Create the cluster now using the validated nodes"})," check-box and click ",(0,s.jsx)(e.strong,{children:"Finish"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(56664).c+"",width:"273",height:"33"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Create cluster"})," wizard opens."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the first page of the wizard, click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Enter a cluster name. This name is published to the DNS. Click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Confirmation"})," page, click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Next"}),". The wizard concludes."]}),"\n",(0,s.jsx)(e.p,{children:"The cluster is now configured."}),"\n",(0,s.jsxs)(e.p,{children:["Cluster related information can be seen in the cluster tree in the left pane inside ",(0,s.jsx)(e.strong,{children:"Failover Cluster Manager"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(99320).c+"",width:"227",height:"137"})}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},12672:(n,e,i)=>{i.d(e,{c:()=>s});const s="data:image/png;base64,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"},24392:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-a-new-cluster_2_511x343-ff236b7ff5bc61d432cf453452971071.png"},56664:(n,e,i)=>{i.d(e,{c:()=>s});const s="data:image/png;base64,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"},99320:(n,e,i)=>{i.d(e,{c:()=>s});const s="data:image/png;base64,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"},56548:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-a-new-cluster_493x339-dfe5a221036314fcb3dd670e92b5a3a2.png"},4552:(n,e,i)=>{i.d(e,{I:()=>c,M:()=>l});var s=i(11504);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);