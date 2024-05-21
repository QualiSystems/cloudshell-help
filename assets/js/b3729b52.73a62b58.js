"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[42462],{87964:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=l(17624),o=l(4552);const s={},t="Central Logging Configuration",r={id:"install-configure/cloudshell-suite/central-logging/index",title:"Central Logging Configuration",description:"In 2021.2 GA, these capabilities are supported for the Quali Server, CloudShell Execution Server and New Job Scheduling services. CloudShell Portal, Resource Manager Client and individual drivers that appear in ProgramData\\\\QualiSystems\\\\Logs do not publish logs in the new JSON format.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/index.md",sourceDirName:"install-configure/cloudshell-suite/central-logging",slug:"/install-configure/cloudshell-suite/central-logging/",permalink:"/install-configure/cloudshell-suite/central-logging/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/central-logging/index.md",tags:[],version:"2023.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Associating Tests to Different Domains",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/associate-tests-to-domains"},next:{title:"Configure log4net Appenders for Central Logging",permalink:"/install-configure/cloudshell-suite/central-logging/config-log4net"}},a={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"central-logging-configuration",children:"Central Logging Configuration"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"In 2021.2 GA, these capabilities are supported for the Quali Server, CloudShell Execution Server and New Job Scheduling services. CloudShell Portal, Resource Manager Client and individual drivers that appear in ProgramData\\QualiSystems\\Logs do not publish logs in the new JSON format."})}),"\n",(0,i.jsxs)(n.p,{children:["Starting with CloudShell 2021.2 GA, it is possible to integrate CloudShell with 3",(0,i.jsx)("sup",{children:"rd"})," party log management tools (such as Elastic Stack) in order to view CloudShell log data in from a central location. In this mode, log files in JSON format are added in addition to the standard CloudShell log files and sent to the configured log management server, allowing you to easily search and filter their data."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Log file locations"}),(0,i.jsx)(n.p,{children:"JSON log files:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["~",(0,i.jsx)(n.code,{children:"\\QualiSystems\\CloudShell\\Server\\JsonLogs"})]}),"\n",(0,i.jsxs)(n.li,{children:["~",(0,i.jsx)(n.code,{children:"\\QualiSystems\\TestShell\\ExecutionServer\\JsonLogs"})]}),"\n"]}),(0,i.jsx)(n.p,{children:"Standard log files:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["~",(0,i.jsx)(n.code,{children:"\\QualiSystems\\CloudShell\\Server\\Logs"})]}),"\n",(0,i.jsxs)(n.li,{children:["~",(0,i.jsx)(n.code,{children:"\\QualiSystems\\TestShell\\ExecutionServer\\Logs"})]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, Central Logging allows you to (",(0,i.jsx)("span",{style:{color:"red"},children:(0,i.jsx)(n.strong,{children:"1"})}),") see all logging details pertaining to a specific flow (across different CloudShell components) or CloudShell server/microservice in one place, (",(0,i.jsx)("span",{style:{color:"red"},children:(0,i.jsx)(n.strong,{children:"2"})}),") search for logs and log data, and (",(0,i.jsx)("span",{style:{color:"red"},children:(0,i.jsx)(n.strong,{children:"3"})}),") see details pertaining to specific log entries and system messages:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:l(41984).c+"",width:"1195",height:"875"})}),"\n",(0,i.jsx)(n.p,{children:"Central Logging configuration is a two step process:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/install-configure/cloudshell-suite/central-logging/config-log4net",children:"Configure log4net Appenders for Central Logging"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/install-configure/cloudshell-suite/central-logging/modify-cloudshell",children:"Configure Elastic Stack for Central Logging"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/install-configure/cloudshell-suite/central-logging/track-threads",children:"How to Track Event Threads Using Trace ID or Reservation ID"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},41984:(e,n,l)=>{l.d(n,{c:()=>i});const i=l.p+"assets/images/CentralLoggingStack-41cb58be694b171fb29b92a1214f3b5f.png"},4552:(e,n,l)=>{l.d(n,{I:()=>r,M:()=>t});var i=l(11504);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);