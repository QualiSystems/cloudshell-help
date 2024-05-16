"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59404],{44880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var s=t(17624),i=t(4552);const l={sidebar_position:2},c="Configure Elastic Stack for Central Logging",a={id:"install-configure/cloudshell-suite/central-logging/modify-cloudshell",title:"Configure Elastic Stack for Central Logging",description:"After you configure the log4net appenders, install and configure Elastic Stack to pull data from FileBeat.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/modify-cloudshell.md",sourceDirName:"install-configure/cloudshell-suite/central-logging",slug:"/install-configure/cloudshell-suite/central-logging/modify-cloudshell",permalink:"/cloudshell-help/install-configure/cloudshell-suite/central-logging/modify-cloudshell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/modify-cloudshell.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure log4net Appenders for Central Logging",permalink:"/cloudshell-help/install-configure/cloudshell-suite/central-logging/config-log4net"},next:{title:"How to Track Event Threads Using Trace ID or Reservation ID",permalink:"/cloudshell-help/install-configure/cloudshell-suite/central-logging/track-threads"}},o={},r=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-elastic-stack-for-central-logging",children:"Configure Elastic Stack for Central Logging"}),"\n",(0,s.jsx)(n.p,{children:"After you configure the log4net appenders, install and configure Elastic Stack to pull data from FileBeat."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure Elastic Stack:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Elastic Stack version 7.14, as explained in this official Elastic doc: ",(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elastic-stack-get-started",children:"https://www.elastic.co/guide/en/elastic-stack-get-started."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If Elasticsearch is installed outside the New Job Scheduling Kubernetes cluster, ensure connectivity between Elasticsearch and the cluster."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install FileBeat version 7.14 as explained in this official Elastic doc: ",(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/beats/filebeat/current/running-on-kubernetes.html",children:"https://www.elastic.co/guide/en/beats/filebeat/current/running-on-kubernetes.html"}),". FileBeat allows the transmission of logs from the Kubernetes-based New Job Scheduling services to Elastic Stack."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,s.jsxs)(n.p,{children:["Make sure to specify your Elastisearch host and username/password in the ",(0,s.jsx)(n.code,{children:"filebeat-kubernetes.yaml"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Elastic application, go to ",(0,s.jsx)(n.strong,{children:"Manage>Index Management"})," and make sure some log data has been collected."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(38768).c+"",width:"1272",height:"554"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Define an index pattern."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Scroll down to Kibana, click ",(0,s.jsx)(n.strong,{children:"Index Patterns"})," and then click ",(0,s.jsx)(n.strong,{children:"Create index pattern"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(360).c+"",width:"1276",height:"540"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Index pattern name"})," field, specify ",(0,s.jsx)(n.strong,{children:"filebeat-*"})," and click ",(0,s.jsx)(n.strong,{children:"Next step"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(80540).c+"",width:"1268",height:"653"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"@timestamp"})," from the ",(0,s.jsx)(n.strong,{children:"Time field"})," dropdown list and click ",(0,s.jsx)(n.strong,{children:"Create index pattern"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(14704).c+"",width:"1272",height:"646"})}),"\n",(0,s.jsxs)(n.p,{children:["This concludes the Elastic Stack integration with CloudShell. At this point, CloudShell log data should be properly displayed in Elastic Stack. For details about consuming log data, see this official Elastic doc: ",(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/kibana/current/discover.html",children:"https://www.elastic.co/guide/en/kibana/current/discover.html."})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80540:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CentalLoggingCreateIndexPattern-3a71b9ce012806ff5216c656e8fedee7.png"},14704:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CentalLoggingCreateIndexPattern2-b3e921d0a0fa4a60f533bd1d933c6e63.png"},38768:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CentalLoggingViewData-562adea90d47a4df9da24b5b0cafbefd.png"},360:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/CentralLoggingIndexPatterns-292f0fee7ec910ba7afa894c89351645.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>c});var s=t(11504);const i={},l=s.createContext(i);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);