"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13688],{44780:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(17624),r=n(4552);const l={sidebar_position:5},t="CloudShell RabbitMq Service Fails to Start during Quali Server Installation",a={id:"troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",title:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation",description:"Error Message",source:"@site/docs/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",permalink:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quali Server upgrade fails in the Restart Service step",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step"},next:{title:"Quali Server upgrade fails on Import Packages step",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step"}},o={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",children:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation"}),"\n",(0,i.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsx)(s.admonition,{title:"Any of the following:",type:"danger",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"A critical internal process failed to restart twice in 10 minutes. CloudShell has terminate."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Cannot start Quali Server service on local computer.",(0,i.jsx)(s.br,{}),"\n","Error 1067: Process was killed in the middle."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"FATAL SandboxServiceServerPlugin - Embedded Sandbox Services has failed to startup successfully, please check logs for more details."}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Quali Server installation/configuration ends unexpectedly. RabbitMQ installation error."}),"\n",(0,i.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsx)(s.p,{children:"There are two known causes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Insufficient memory allocated to MS SQL Server. MS SQL Server consumes as much memory as Windows allows it to consume. This is a by-design behavior of an MS SQL Server instance and is not a CloudShell issue."}),"\n",(0,i.jsx)(s.li,{children:"Erlang version supplied with CloudShell is incompatible with the Quali Server's Windows operating system."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Check the Erlang version in ",(0,i.jsx)(s.code,{children:"C:\\Program Files"}),":"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(41764).c+"",width:"708",height:"400"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Install Erlang version 23.3 (or above) for Windows. For example:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/erlang/otp/releases/download/OTP-23.3/otp_win64_23.3.exe",children:"https://github.com/erlang/otp/releases/download/OTP-23.3/otp_win64_23.3.exe"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Configure the System Environment variables:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"Start"}),' menu, type "system variables" and select ',(0,i.jsx)(s.strong,{children:"Edit the system environment variables"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(69316).c+"",width:"651",height:"430"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.strong,{children:"System Properties"})," dialog box, select ",(0,i.jsx)(s.strong,{children:"Advanced"})," and click ",(0,i.jsx)(s.strong,{children:"Environment Variables"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(59412).c+"",width:"412",height:"468"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Edit the variable ",(0,i.jsx)(s.strong,{children:"ERLANG_HOME"})," path and set the new Erlang folder location. For example:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(53900).c+"",width:"700",height:"743"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add new system variable ",(0,i.jsx)(s.strong,{children:"ERLANG_SERVICE_MANAGER_PATH"})," and set the Erlang ",(0,i.jsx)(s.code,{children:"\\bin"})," folder as the value. For example:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(91276).c+"",width:"853",height:"593"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Configure the Sandbox Service."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Navigate to ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\SandboxService\\temp"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Edit the ",(0,i.jsx)(s.code,{children:"service_configuration.yml"})," file using your preferred text editor and locate the json block."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(63792).c+"",width:"976",height:"661"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Replace the ",(0,i.jsx)(s.strong,{children:"json"})," block with the block below:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'json:  \n    class: jsonformatter.JsonFormatter\n    mix_extra: true\n    mix_extra_position: \'tail\'\n    format: {\n        "timestamp": "%(asctime)s.%(msecs)d",\n        "app": "SBS",\n        "traceId": "traceId",\n        "thread": "thread",\n        "level": "levelname",\n        "machinename": "machineName",\n        "name": "name",\n        "message": "message",\n        "module": "module",\n        "lineno": "lineno",\n    }\n    datefmt: \'%Y-%m-%dT%H:%M:%S\'\n    default_msec_format: \'%s.%03d\'\n'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Copy the file and replace the one in the folder above (",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\SandboxService"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"Run the Quali Server configuration wizard."}),"\n",(0,i.jsx)(s.p,{children:"Restart the machine."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69316:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/RabbitMQFail2-68ea9b5f486dbc01b4a4b75a4bf1cf6e.png"},59412:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/RabbitMQFail3-78e8ca6b0ff9a244669042b091c43040.png"},53900:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/RabbitMQFail4-7cef7b1b9e68fb967ad547530f11a22c.png"},91276:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/RabbitMQFail5-67f7066f8dc04b192026c8d569d571ba.png"},63792:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/RabbitMQFail6-99e97d05ef317f832300e78ca76d6566.png"},41764:(e,s,n)=>{n.d(s,{c:()=>i});const i=n.p+"assets/images/rabbitMQFail-2d7f488162a84cb0407a79df609b85a9.png"},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>t});var i=n(11504);const r={},l=i.createContext(r);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);