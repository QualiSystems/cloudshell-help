"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57283],{23484:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=n(17624),r=n(4552);const l={sidebar_position:6},t="Update the RabbitMQ Credentials on Quali Server",a={id:"install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds",title:"Update the RabbitMQ Credentials on Quali Server",description:"This article explains how to change the RabbitMQ user's credentials and register the new credentials with Quali Server. If you are using the New Job Scheduling, perform the steps in Update the RabbitMQ Credentials in Kubernetes Environment instead.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds",permalink:"/cloudshell-help/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/appendix/upgrade-rabbitmq-creds.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Fixed Server Roles",permalink:"/cloudshell-help/install-configure/cloudshell-suite/appendix/fixed-server-roles"},next:{title:"Quali Certified Libraries",permalink:"/cloudshell-help/install-configure/cloudshell-suite/quali-certified-libraries"}},d={},o=[];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"update-the-rabbitmq-credentials-on-quali-server",children:"Update the RabbitMQ Credentials on Quali Server"}),"\n",(0,i.jsxs)(s.p,{children:["This article explains how to change the RabbitMQ user's credentials and register the new credentials with Quali Server. ",(0,i.jsxs)(s.em,{children:["If you are using the New Job Scheduling, perform the steps in ",(0,i.jsx)(s.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/update-k8s-env",children:"Update the RabbitMQ Credentials in Kubernetes Environment"})," instead."]})]}),"\n",(0,i.jsx)(s.p,{children:"CloudShell configures a default user on RabbitMQ with user/password: quali/qualipassword. However, for security purposes, we strongly recommend changing this default user or at least its password."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"To update the default RabbitMQ user's password:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Change the user's password in RabbitMQ. For details, see this official RabbitMQ help article: ",(0,i.jsx)(s.a,{href:"https://www.rabbitmq.com/access-control.html",children:"https://www.rabbitmq.com/access-control.html"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Set the new password in the Quali Server configuration wizard's ",(0,i.jsx)(s.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/admin-config-settings#administrative-tasks",children:"Administrative tasks"})," screen or in the ",(0,i.jsx)(s.code,{children:"Customer.yaml"})," file:","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Open the ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\SandboxService\\Customer.yaml"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Set the new password in the ",(0,i.jsx)(s.strong,{children:"rabbit"})," section:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"rabbit:\n  general:\n    default_password: <new-password>\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Set the new password in the ",(0,i.jsx)(s.strong,{children:"Rabbit Service"}),":","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Open the ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\SandboxService\\RabbitMQ\\rabbitmq_server\\etc\\RabbitMQ\\RabbitMQ.conf"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Set the new password:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"default_pass = <new-password>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Set the new password on the Quali Server.","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["On the Quali Server machine, open the ",(0,i.jsx)(s.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Add the following key:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'<add key="RabbitPassword" value="<new-password>"/>'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Save the file and restart the ",(0,i.jsx)(s.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>t});var i=n(11504);const r={},l=i.createContext(r);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);