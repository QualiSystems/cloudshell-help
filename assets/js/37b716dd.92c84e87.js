"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4872],{14640:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var r=s(17624),i=s(4552);const o={sidebar_position:6},l="Quali Server upgrade fails on Import Packages step",n={id:"troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",title:"Quali Server upgrade fails on Import Packages step",description:"Description",source:"@site/docs/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",permalink:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"},next:{title:"Quali Server Crash",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-crash"}},a={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quali-server-upgrade-fails-on-import-packages-step",children:"Quali Server upgrade fails on Import Packages step"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["When upgrading Quali Server, some of the existing installation's packages may not be compatible with the new CloudShell version. The Quali Server configuration typically removes these old packages and imports the new ones. However, in some cases, Quali Server configuration is unable to replace the old packages with the new versions. This causes the ",(0,r.jsx)(t.strong,{children:"Import Packages"})," step to fail, listing the packages that were not imported."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(92420).c+"",width:"377",height:"366"})}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Open the ",(0,r.jsx)(t.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages"})," folder."]}),"\n",(0,r.jsx)(t.li,{children:"Move the folder's contents to a backup folder"}),"\n",(0,r.jsx)(t.li,{children:"Rerun the Quali Server Configuration Wizard."}),"\n",(0,r.jsx)(t.li,{children:"Optionally delete the backup folder when the configuration ends successfully."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},92420:(e,t,s)=>{s.d(t,{c:()=>r});const r=s.p+"assets/images/PackageImportFailed-ea5c95d84b8c7f4d048a79f574732999.png"},4552:(e,t,s)=>{s.d(t,{I:()=>n,M:()=>l});var r=s(11504);const i={},o=r.createContext(i);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);