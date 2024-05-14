"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[88408],{5784:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var i=s(17624),o=s(4552);const l={sidebar_position:9},r="CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)",n={id:"troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",title:"CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)",description:"Error Message",source:"@site/docs/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",permalink:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"L1 functionality isn\u2019t working (2022.1 and above)",permalink:"/cloudshell-help/next/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above"},next:{title:'Automation Suite Execution Remains in "Pending" State',permalink:"/cloudshell-help/next/troubleshooting/job-scheduling/automation-suite-execution-remains-in-pending-state"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cloudshell-rabbitmq-service-fails-to-start-erlexe-cannot-access-cryptodll-module",children:"CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)"}),"\n",(0,i.jsx)(t.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsxs)(t.p,{children:["Event Viewer shows that ",(0,i.jsx)(t.code,{children:"erl.exe"})," had an access violation on the ",(0,i.jsx)(t.code,{children:"crypto.dll"})," module:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(30628).c+"",width:"416",height:"213"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"The CloudShell RabbitMQ service fails to start when trying to start RabbitMQ service or CloudShell Server"}),"\n",(0,i.jsx)(t.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsx)(t.p,{children:"There is a known error in crypto.dll error that uses OpenSSL for processors that support Intel SHA\xa0extensions, affecting all Windows users."}),"\n",(0,i.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsxs)(t.p,{children:["Disable SHA extensions by setting the environment variable ",(0,i.jsx)(t.code,{children:"{{OPENSSL_ia32cap}}"})," to ",(0,i.jsx)(t.code,{children:"{{~0:~0x20000000}}"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For details, see GitHub issue 4115: ",(0,i.jsx)(t.a,{href:"https://github.com/erlang/otp/issues/4115",children:"https://github.com/erlang/otp/issues/4115"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},30628:(e,t,s)=>{s.d(t,{c:()=>i});const i=s.p+"assets/images/RabbitLogError-51ab8e421b116fd4d8f32eef75fc8166.png"},4552:(e,t,s)=>{s.d(t,{I:()=>n,M:()=>r});var i=s(11504);const o={},l=i.createContext(o);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);