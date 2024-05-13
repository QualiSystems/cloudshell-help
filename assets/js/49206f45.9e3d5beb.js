"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46148],{83204:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=t(17624),i=t(4552);const n={sidebar_position:4},l="Quali Server upgrade fails in the Restart Service step",o={id:"troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",title:"Quali Server upgrade fails in the Restart Service step",description:"Description",source:"@site/docs/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:'PyPi Server process errors: "error installing dependencies"',permalink:"/cloudshell-help/next/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies"},next:{title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",permalink:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"quali-server-upgrade-fails-in-the-restart-service-step",children:"Quali Server upgrade fails in the Restart Service step"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"When upgrading Quali Server, the Quali Server service sometimes does not stop gracefully, which causes the Restart Service step to fail. By default, CloudShell provides the Quali Server stop process 30 seconds to complete. However, if the Quali Server does not stop within that period, the upgrade process will shut down."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(10528).c+"",width:"546",height:"526"})}),"\n",(0,s.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"To resolve this issue:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Stop the ",(0,s.jsx)(r.strong,{children:"Quali Server"})," service before upgrade."]}),"\n",(0,s.jsx)(r.p,{children:"Or"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Use the ",(0,s.jsx)(r.code,{children:"ServiceOnStopTimeSeconds"})," configuration key to increase the timeout period for the Quali Server stop process."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},10528:(e,r,t)=>{t.d(r,{c:()=>s});const s=t.p+"assets/images/181718-f4fe5c282325311fcbe9901fed4251f1.png"},4552:(e,r,t)=>{t.d(r,{I:()=>o,M:()=>l});var s=t(11504);const i={},n=s.createContext(i);function l(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);