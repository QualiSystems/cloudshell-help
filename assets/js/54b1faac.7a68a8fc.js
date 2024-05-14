"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3700],{38068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var l=n(17624),i=n(4552);const s={sidebar_position:2},r="Known CloudShell Installation Issues",a={id:"install-configure/cloudshell-suite/appendix/known-cs-install-issues",title:"Known CloudShell Installation Issues",description:"| Application | Description |",source:"@site/docs/install-configure/cloudshell-suite/appendix/known-cs-install-issues.md",sourceDirName:"install-configure/cloudshell-suite/appendix",slug:"/install-configure/cloudshell-suite/appendix/known-cs-install-issues",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/known-cs-install-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/appendix/known-cs-install-issues.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Database Trimming",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/best-practices-cs-prod/db-trimming"},next:{title:"Known Upgrade Issues",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/appendix/known-upgrade-issues"}},o={},d=[];function c(e){const t={a:"a",h1:"h1",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"known-cloudshell-installation-issues",children:"Known CloudShell Installation Issues"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Application"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"All"}),(0,l.jsxs)(t.td,{children:["There are two known issues for installing CloudShell on a \u201cclean\u201d PC with no existing components:",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Setup may require a reboot. Make sure to log back in as the same user that started the installation."}),(0,l.jsx)("li",{children:"If setup does not restart automatically, you have to restart it manually."})]})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"All"}),(0,l.jsx)(t.td,{children:"A new installation should run between 10-30 minutes. The installation itself takes less than 10 minutes. Initial configuration should not take more than 20 minutes."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"All"}),(0,l.jsx)(t.td,{children:"Installing CloudShell prerequisites requires administration privileges on the installation machine."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"All"}),(0,l.jsx)(t.td,{children:"There is a filename length limitation in CloudShell that forces the user to locate the installation files on a non-deep location (for example, c:\\temp) before executing the installer."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"All"}),(0,l.jsx)(t.td,{children:"When installing CloudShell on a virtual machine, external anti-virus applications running on the hypervisor may impact installation performance. Therefore, if performance issues occur, it is recommended to add CloudShell configuration files to the anti-virus white list."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Quali Server"}),(0,l.jsxs)(t.td,{children:["The Erlang version supplied with CloudSell may be incompatible with certain Windows operating systems (Erlang known issue). Therefore, If you get a RabbitMQ installation error during Quali Server installation or configuration, please update the Erlang version, as explained in ",(0,l.jsx)(t.a,{href:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-during-quali-server-installation",children:"CloudShell RabbitMq Service Fails to Start during Quali Server Installation"}),"."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Sisense"}),(0,l.jsx)(t.td,{children:"Starting with CloudShell 2020.2, Sisense server cannot be installed on the Quali Server machine. Quali Server uses a dedicated RabbitMQ installation, resulting in a coexistence clash with the Sisense server's RabbitMQ."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var l=n(11504);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);