"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28663],{8347:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=i(74848),t=i(28453);const o={sidebar_position:6},n="Quali Server upgrade fails on Import Packages step",a={id:"troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",title:"Quali Server upgrade fails on Import Packages step",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",permalink:"/2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step.md",tags:[],version:"2023.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CloudShell RabbitMQ Service Fails to Start during Quali Server Installation",permalink:"/2023.3/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"},next:{title:"Quali Server Crash",permalink:"/2023.3/troubleshooting/quali-server/quali-server-crash"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"quali-server-upgrade-fails-on-import-packages-step",children:"Quali Server upgrade fails on Import Packages step"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["When upgrading Quali Server, some of the existing installation's packages may not be compatible with the new CloudShell version. The Quali Server configuration typically removes these old packages and imports the new ones. However, in some cases, Quali Server configuration is unable to replace the old packages with the new versions. This causes the ",(0,s.jsx)(r.strong,{children:"Import Packages"})," step to fail, listing the packages that were not imported."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:i(89115).A+"",width:"377",height:"366"})}),"\n",(0,s.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Open the ",(0,s.jsx)(r.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Packages"})," folder."]}),"\n",(0,s.jsx)(r.li,{children:"Move the folder's contents to a backup folder"}),"\n",(0,s.jsx)(r.li,{children:"Rerun the Quali Server Configuration Wizard."}),"\n",(0,s.jsx)(r.li,{children:"Optionally delete the backup folder when the configuration ends successfully."}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},89115:(e,r,i)=>{i.d(r,{A:()=>s});const s=i.p+"assets/images/PackageImportFailed-ea5c95d84b8c7f4d048a79f574732999.png"},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);