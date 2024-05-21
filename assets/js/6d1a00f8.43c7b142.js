"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56224],{28716:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var l=n(17624),s=n(4552);const t={sidebar_position:3},r="Modifying the Quali.vbs File",o={id:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",title:"Modifying the Quali.vbs File",description:"To modify the Quali.vbs file:",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file.md",sourceDirName:"install-configure/ha-installation/install-configure-cs-server/configure-the-app-server",slug:"/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/modify-the-quali-vbs-file.md",tags:[],version:"2023.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Locating the Cluster Name",permalink:"/install-configure/ha-installation/install-configure-cs-server/configure-the-app-server/locating-the-cluster-name"},next:{title:"Installing Quali Server",permalink:"/install-configure/ha-installation/install-configure-cs-server/installing-quali-server"}},a={},c=[];function h(e){const i={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"modifying-the-qualivbs-file",children:"Modifying the Quali.vbs File"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"To modify the Quali.vbs file:"})}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["Rename the extracted ",(0,l.jsx)(i.code,{children:"Quali.vbs"}),' file to: "Quali.vbs.old". Keep this file as a backup.']}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["Open the ",(0,l.jsx)(i.code,{children:"Quali.vbs"})," file in a text editor."]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Modify the following values:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Eventlog"})," \u2013 The values are ",(0,l.jsx)(i.code,{children:"$true"})," or ",(0,l.jsx)(i.code,{children:"$false"}),". If the value is ",(0,l.jsx)(i.code,{children:"$true"}),", all scripts write logs to the Windows event log while running - set to ",(0,l.jsx)(i.code,{children:"$true"})," by default. It\u2019s recommended to leave it with the default."]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"ScriptPath"})," \u2013 The folder which in you store all the PowerShell scripts that are in the downloaded HA Plugin zip file. For example:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-javascript",children:'Const EventLog = "$true"\nConst ScriptPath = "c:\\Quali\\QualiServer"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"Save the file."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>r});var l=n(11504);const s={},t=l.createContext(s);function r(e){const i=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:i},e.children)}}}]);