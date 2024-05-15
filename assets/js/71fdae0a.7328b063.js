"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[65792],{50352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(17624),i=n(4552);const o={sidebar_position:4},r="MSDTC Firewall Settings",a={id:"troubleshooting/installation/msdtc-firewall-settings",title:"MSDTC Firewall Settings",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/msdtc-firewall-settings.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/msdtc-firewall-settings",permalink:"/cloudshell-help/troubleshooting/installation/msdtc-firewall-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/msdtc-firewall-settings.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MSDTC Security Configuration",permalink:"/cloudshell-help/troubleshooting/installation/msdtc-security-configuration"},next:{title:"TestShell Database Permissions",permalink:"/cloudshell-help/troubleshooting/installation/testshell-database-permissions"}},l={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"msdtc-firewall-settings",children:"MSDTC Firewall Settings"}),"\n",(0,s.jsx)(t.h2,{id:"error-message",children:"Error Message"}),"\n",(0,s.jsxs)(t.admonition,{type:"danger-one-line",children:[(0,s.jsx)(t.p,{children:"Failed the MSDTC test"}),(0,s.jsx)(t.p,{children:"The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn't have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers:"}),(0,s.jsx)(t.p,{children:"xx.xx.xxx.xxx, xxxx\\qualisystems2008"})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"When installing CloudShell on some versions of Windows Server OS with East Asian languages, the above error may appear when running the Quali Server configuration wizard, and trying to connect to a database in the Database selection screen."}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.strong,{children:"Control Panel > System and Security > Windows Firewall > Allowed Programs"})," and select ",(0,s.jsx)(t.strong,{children:"Distributed Transactions Coordinator"})," to ensure that Distributive Transaction Coordinator is permitted to communicate through Microsoft Firewall."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(24940).c+"",width:"503",height:"457"})}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/cloudshell-help/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},24940:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Firewall-settings_1_503x457-b4b7ad8f7c202a0cb09b2a5a541a303c.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);