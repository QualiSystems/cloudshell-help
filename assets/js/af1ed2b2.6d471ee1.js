"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20178],{11281:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var i=t(74848),r=t(28453);const o={sidebar_position:9},l="CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)",n={id:"troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",title:"CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",permalink:"/2023.3/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe.md",tags:[],version:"2023.3",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"L1 functionality isn\u2019t working (2022.1 and above)",permalink:"/2023.3/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above"},next:{title:'Automation Suite Execution Remains in "Pending" State',permalink:"/2023.3/troubleshooting/job-scheduling/automation-suite-execution-remains-in-pending-state"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"cloudshell-rabbitmq-service-fails-to-start-erlexe-cannot-access-cryptodll-module",children:"CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)"})}),"\n",(0,i.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsxs)(s.p,{children:["Event Viewer shows that ",(0,i.jsx)(s.code,{children:"erl.exe"})," had an access violation on the ",(0,i.jsx)(s.code,{children:"crypto.dll"})," module:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(23219).A+"",width:"416",height:"213"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"The CloudShell RabbitMQ service fails to start when trying to start RabbitMQ service or CloudShell Server"}),"\n",(0,i.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsx)(s.p,{children:"There is a known error in crypto.dll error that uses OpenSSL for processors that support Intel SHA\xa0extensions, affecting all Windows users."}),"\n",(0,i.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsxs)(s.p,{children:["Disable SHA extensions by setting the environment variable ",(0,i.jsx)(s.code,{children:"{{OPENSSL_ia32cap}}"})," to ",(0,i.jsx)(s.code,{children:"{{~0:~0x20000000}}"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["For details, see GitHub issue 4115: ",(0,i.jsx)(s.a,{href:"https://github.com/erlang/otp/issues/4115",children:"https://github.com/erlang/otp/issues/4115"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},23219:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/RabbitLogError-51ab8e421b116fd4d8f32eef75fc8166.png"},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>n});var i=t(96540);const r={},o=i.createContext(r);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);