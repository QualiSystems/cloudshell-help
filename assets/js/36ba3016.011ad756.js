"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85820],{30060:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var t=i(17624),r=i(4552);const o={sidebar_position:6},l="Quali Server upgrade fails on Import Packages step",n={id:"troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",title:"Quali Server upgrade fails on Import Packages step",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",permalink:"/cloudshell-help/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",permalink:"/cloudshell-help/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"},next:{title:"Quali Server Crash",permalink:"/cloudshell-help/troubleshooting/quali-server/quali-server-crash"}},a={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"quali-server-upgrade-fails-on-import-packages-step",children:"Quali Server upgrade fails on Import Packages step"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["When upgrading Quali Server, some of the existing installation's packages may not be compatible with the new CloudShell version. The Quali Server configuration typically removes these old packages and imports the new ones. However, in some cases, Quali Server configuration is unable to replace the old packages with the new versions. This causes the ",(0,t.jsx)(s.strong,{children:"Import Packages"})," step to fail, listing the packages that were not imported."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(92420).c+"",width:"377",height:"366"})}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Open the ",(0,t.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages"})," folder."]}),"\n",(0,t.jsx)(s.li,{children:"Move the folder's contents to a backup folder"}),"\n",(0,t.jsx)(s.li,{children:"Rerun the Quali Server Configuration Wizard."}),"\n",(0,t.jsx)(s.li,{children:"Optionally delete the backup folder when the configuration ends successfully."}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},92420:(e,s,i)=>{i.d(s,{c:()=>t});const t=i.p+"assets/images/PackageImportFailed-ea5c95d84b8c7f4d048a79f574732999.png"},4552:(e,s,i)=>{i.d(s,{I:()=>n,M:()=>l});var t=i(11504);const r={},o=t.createContext(r);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);