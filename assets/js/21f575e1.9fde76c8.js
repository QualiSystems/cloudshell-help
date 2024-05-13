"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75232],{85768:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=n(17624),t=n(4552);const s={sidebar_position:3},r="Modifying the Quali.vbs File",o={id:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",title:"Modifying the Quali.vbs File",description:"To modify the Quali.vbs file:",source:"@site/docs/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Locating the Cluster Name",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/locating-the-cluster-name"},next:{title:"Installing Quali Server",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-configure-cs-server/installing-quali-server"}},a={},c=[];function h(e){const i={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"modifying-the-qualivbs-file",children:"Modifying the Quali.vbs File"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"To modify the Quali.vbs file:"})}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["Rename the extracted ",(0,l.jsx)(i.code,{children:"Quali.vbs"}),' file to: "Quali.vbs.old". Keep this file as a backup.']}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["Open the ",(0,l.jsx)(i.code,{children:"Quali.vbs"})," file in a text editor."]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Modify the following values:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Eventlog"})," \u2013 The values are ",(0,l.jsx)(i.code,{children:"$true"})," or ",(0,l.jsx)(i.code,{children:"$false"}),". If the value is ",(0,l.jsx)(i.code,{children:"$true"}),", all scripts write logs to the Windows event log while running - set to ",(0,l.jsx)(i.code,{children:"$true"})," by default. It\u2019s recommended to leave it with the default."]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ScriptPath"})," \u2013 The folder which in you store all the PowerShell scripts that are in the downloaded HA Plugin zip file. For example:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-javascript",children:'Const EventLog = "$true"\nConst ScriptPath = "c:\\Quali\\QualiServer"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Save the file."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>r});var l=n(11504);const t={},s=l.createContext(t);function r(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);