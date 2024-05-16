"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85820],{30060:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(17624),s=t(4552);const o={sidebar_position:6},n="Quali Server upgrade fails on Import Packages step",a={id:"troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",title:"Quali Server upgrade fails on Import Packages step",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",permalink:"/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",permalink:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"},next:{title:"Quali Server Crash",permalink:"/troubleshooting/quali-server/quali-server-crash"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"quali-server-upgrade-fails-on-import-packages-step",children:"Quali Server upgrade fails on Import Packages step"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["When upgrading Quali Server, some of the existing installation's packages may not be compatible with the new CloudShell version. The Quali Server configuration typically removes these old packages and imports the new ones. However, in some cases, Quali Server configuration is unable to replace the old packages with the new versions. This causes the ",(0,r.jsx)(i.strong,{children:"Import Packages"})," step to fail, listing the packages that were not imported."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:t(92420).c+"",width:"377",height:"366"})}),"\n",(0,r.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Open the ",(0,r.jsx)(i.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages"})," folder."]}),"\n",(0,r.jsx)(i.li,{children:"Move the folder's contents to a backup folder"}),"\n",(0,r.jsx)(i.li,{children:"Rerun the Quali Server Configuration Wizard."}),"\n",(0,r.jsx)(i.li,{children:"Optionally delete the backup folder when the configuration ends successfully."}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},92420:(e,i,t)=>{t.d(i,{c:()=>r});const r=t.p+"assets/images/PackageImportFailed-ea5c95d84b8c7f4d048a79f574732999.png"},4552:(e,i,t)=>{t.d(i,{I:()=>a,M:()=>n});var r=t(11504);const s={},o=r.createContext(s);function n(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);