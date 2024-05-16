"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[19596],{95364:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=n(17624),l=n(4552);const t={sidebar_position:10},s='Quali Server Configuration Wizard Fails in "Search Engine health check" Stage',o={id:"troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage",title:'Quali Server Configuration Wizard Fails in "Search Engine health check" Stage',description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage",permalink:"/cloudshell-help/troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/quali-server-configuration-wizard-fails-in-search-engine-health-check-stage.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Why Does CloudShell Upgrade Override CloudShell Settings",permalink:"/cloudshell-help/troubleshooting/installation/why-does-cloudshell-upgrade-override-cloudshell-settings"},next:{title:'"Error: A bulk write operation resulted in one or more errors"',permalink:"/cloudshell-help/troubleshooting/installation/error-a-bulk-write-operation-resulted-in-one-or-more-errors"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function h(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"quali-server-configuration-wizard-fails-in-search-engine-health-check-stage",children:'Quali Server Configuration Wizard Fails in "Search Engine health check" Stage'}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["During CloudShell upgrade, it\u2019s possible for old files to remain in the ",(0,r.jsx)(i.code,{children:"\\Quicksearch\\bin"})," folder, causing the process to fail because of a java error."]}),"\n",(0,r.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(i.p,{children:"To resolve the issue:"}),"\n",(0,r.jsx)(i.p,{children:"To resolve the issue:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Stop the ",(0,r.jsx)(i.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Create a backup of the Quicksearch folder."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Delete the folder ",(0,r.jsx)(i.code,{children:"~\\CloudShell\\Server\\QuickSearch"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Copy the QuickSearch folder from the installation package's ",(0,r.jsx)(i.code,{children:"CloudShell\\Data\\Server\\Qualisystems\\Quali\\Server"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Place the folder under the Quali Server installation folder (usually at ",(0,r.jsx)(i.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["For High Availability, enter the cluster name again in the new ",(0,r.jsx)(i.code,{children:"elasticsearch.yml"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Run the Quali Server configuration wizard again."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,l.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>s});var r=n(11504);const l={},t=r.createContext(l);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);