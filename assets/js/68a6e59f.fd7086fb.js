"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[2779],{45895:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=s(74848),t=s(28453);const n={sidebar_position:4},o="Quali Server upgrade fails in the Restart Service step",l={id:"troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",title:"Quali Server upgrade fails in the Restart Service step",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",permalink:"/2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step.md",tags:[],version:"2023.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:'PyPi Server process errors: "error installing dependencies"',permalink:"/2023.3/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies"},next:{title:"CloudShell RabbitMQ Service Fails to Start during Quali Server Installation",permalink:"/2023.3/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation"}},a={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"quali-server-upgrade-fails-in-the-restart-service-step",children:"Quali Server upgrade fails in the Restart Service step"})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"When upgrading Quali Server, the Quali Server service sometimes does not stop gracefully, which causes the Restart Service step to fail. By default, CloudShell provides the Quali Server stop process 30 seconds to complete. However, if the Quali Server does not stop within that period, the upgrade process will shut down."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(25153).A+"",width:"546",height:"526"})}),"\n",(0,i.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To resolve this issue:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Stop the ",(0,i.jsx)(r.strong,{children:"Quali Server"})," service before upgrade."]}),"\n",(0,i.jsx)(r.p,{children:"Or"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Use the ",(0,i.jsx)(r.code,{children:"ServiceOnStopTimeSeconds"})," configuration key to increase the timeout period for the Quali Server stop process."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25153:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/181718-f4fe5c282325311fcbe9901fed4251f1.png"},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var i=s(96540);const t={},n=i.createContext(t);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);