"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73640],{73645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const l={sidebar_position:2},r="Known CloudShell Installation Issues",a={id:"install-configure/cloudshell-suite/appendix/known-cs-install-issues",title:"Known CloudShell Installation Issues",description:"| Application | Description |",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/appendix/known-cs-install-issues.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/known-cs-install-issues",permalink:"/install-configure/cloudshell-suite/appendix/known-cs-install-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/appendix/known-cs-install-issues.md",tags:[],version:"2024.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Database Trimming",permalink:"/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming"},next:{title:"Known Upgrade Issues",permalink:"/install-configure/cloudshell-suite/appendix/known-upgrade-issues"}},o={},d=[];function c(e){const t={a:"a",h1:"h1",header:"header",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"known-cloudshell-installation-issues",children:"Known CloudShell Installation Issues"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Application"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All"}),(0,i.jsxs)(t.td,{children:['There are two known issues for installing CloudShell on a "clean\u201d PC with no existing components:',(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Setup may require a reboot. Make sure to log back in as the same user that started the installation."}),(0,i.jsx)("li",{children:"If setup does not restart automatically, you have to restart it manually."})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All"}),(0,i.jsx)(t.td,{children:"A new installation should run between 10-30 minutes. The installation itself takes less than 10 minutes. Initial configuration should not take more than 20 minutes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All"}),(0,i.jsx)(t.td,{children:"Installing CloudShell prerequisites requires administration privileges on the installation machine."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All"}),(0,i.jsx)(t.td,{children:"There is a filename length limitation in CloudShell that forces the user to locate the installation files on a non-deep location (for example, c:\\temp) before executing the installer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All"}),(0,i.jsx)(t.td,{children:"When installing CloudShell on a virtual machine, external anti-virus applications running on the hypervisor may impact installation performance. Therefore, if performance issues occur, it is recommended to add CloudShell configuration files to the anti-virus white list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Quali Server"}),(0,i.jsxs)(t.td,{children:["The Erlang version supplied with CloudShell may be incompatible with certain Windows operating systems (Erlang known issue). Therefore, If you get a RabbitMQ installation error during Quali Server installation or configuration, please update the Erlang version, as explained in ",(0,i.jsx)(t.a,{href:"/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",children:"CloudShell RabbitMQ Service Fails to Start during Quali Server Installation"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sisense"}),(0,i.jsx)(t.td,{children:"Starting with CloudShell 2020.2, Sisense server cannot be installed on the Quali Server machine. Quali Server uses a dedicated RabbitMQ installation, resulting in a coexistence clash with the Sisense server's RabbitMQ."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);