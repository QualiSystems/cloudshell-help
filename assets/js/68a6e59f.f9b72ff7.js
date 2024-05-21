"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8312],{17108:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var t=s(17624),i=s(4552);const n={sidebar_position:4},o="Quali Server upgrade fails in the Restart Service step",l={id:"troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",title:"Quali Server upgrade fails in the Restart Service step",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",permalink:"/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:'PyPi Server process errors: "error installing dependencies"',permalink:"/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies"},next:{title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",permalink:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"quali-server-upgrade-fails-in-the-restart-service-step",children:"Quali Server upgrade fails in the Restart Service step"}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"When upgrading Quali Server, the Quali Server service sometimes does not stop gracefully, which causes the Restart Service step to fail. By default, CloudShell provides the Quali Server stop process 30 seconds to complete. However, if the Quali Server does not stop within that period, the upgrade process will shut down."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(10528).c+"",width:"546",height:"526"})}),"\n",(0,t.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"To resolve this issue:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Stop the ",(0,t.jsx)(r.strong,{children:"Quali Server"})," service before upgrade."]}),"\n",(0,t.jsx)(r.p,{children:"Or"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"ServiceOnStopTimeSeconds"})," configuration key to increase the timeout period for the Quali Server stop process."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},10528:(e,r,s)=>{s.d(r,{c:()=>t});const t=s.p+"assets/images/181718-f4fe5c282325311fcbe9901fed4251f1.png"},4552:(e,r,s)=>{s.d(r,{I:()=>l,M:()=>o});var t=s(11504);const i={},n=t.createContext(i);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);