"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[10868],{34932:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var l=i(17624),s=i(4552);const t={},r="Configuring Portal Load Balancing",a={id:"install-configure/ha-installation/config-portal-load-balance/index",title:"Configuring Portal Load Balancing",description:"To be able to communicate in a load balancing environment, start by configuring all web servers. This section describes how to enable communication between IIS on the load balancing server and it should be configured on load balancing servers using Windows Server Manager.",source:"@site/docs/install-configure/ha-installation/config-portal-load-balance/index.md",sourceDirName:"install-configure/ha-installation/config-portal-load-balance",slug:"/install-configure/ha-installation/config-portal-load-balance/",permalink:"/cloudshell-help/next/install-configure/ha-installation/config-portal-load-balance/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/config-portal-load-balance/index.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with HTTPS Portal",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-win-network-load-balance/work-with-https-portal"},next:{title:"Adding Servers to the Main IIS Manager",permalink:"/cloudshell-help/next/install-configure/ha-installation/config-portal-load-balance/add-servers-to-main-iis"}},o={},c=[];function d(n){const e={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"configuring-portal-load-balancing",children:"Configuring Portal Load Balancing"}),"\n",(0,l.jsx)(e.p,{children:"To be able to communicate in a load balancing environment, start by configuring all web servers. This section describes how to enable communication between IIS on the load balancing server and it should be configured on load balancing servers using Windows Server Manager."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"To configure all web servers to communicate in a load balancing environment:"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Click ",(0,l.jsx)(e.strong,{children:"Start > Administrative Tools > Server Manager"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Click ",(0,l.jsx)(e.strong,{children:"Manage"})," and then select ",(0,l.jsx)(e.strong,{children:"Add Roles and Features"}),"."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:i(72580).c+"",width:"367",height:"167"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Before You Begin"})," tab, click ",(0,l.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Installation type"})," tab, select ",(0,l.jsx)(e.strong,{children:"Role-based or feature-based installation"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Server selection"})," tab, select the server."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Server Roles"})," tab, select the** Web Server (IIS)** option."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Add Roles and Features Wizard"}),", click ",(0,l.jsx)(e.strong,{children:"Add Features"}),"."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:i(89084).c+"",width:"351",height:"347"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Feature"})," tab click ",(0,l.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.strong,{children:"Web Server Role"})," tab click ",(0,l.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In ",(0,l.jsx)(e.strong,{children:"Role Services"}),", expand the ",(0,l.jsx)(e.strong,{children:"Application Development"})," section and select the ",(0,l.jsx)(e.strong,{children:"Management Tools"})," section."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:i(58892).c+"",width:"314",height:"108"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["In the window, click ",(0,l.jsx)(e.strong,{children:"Add Feature"}),", then click ",(0,l.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Click ",(0,l.jsx)(e.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Open IIS and under the IIS server configurations, select ",(0,l.jsx)(e.strong,{children:"Management Service"}),"."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:i(18592).c+"",width:"403",height:"161"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Stop the ",(0,l.jsx)(e.strong,{children:"Management Service"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Select the ",(0,l.jsx)(e.strong,{children:"Enable remote connection"})," option and click ",(0,l.jsx)(e.strong,{children:"Apply"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Start the ",(0,l.jsx)(e.strong,{children:"Management Service"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Repeat steps 1-16 for each Portal server."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},89084:(n,e,i)=>{i.d(e,{c:()=>l});const l=i.p+"assets/images/Configuring-Portal-load-balancing_1_351x347-3150612215da64201265819df72a0263.png"},58892:(n,e,i)=>{i.d(e,{c:()=>l});const l="data:image/png;base64,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"},18592:(n,e,i)=>{i.d(e,{c:()=>l});const l=i.p+"assets/images/Configuring-Portal-load-balancing_403x161-4c35e003fa88475754fe9af95e72cc0b.jpg"},72580:(n,e,i)=>{i.d(e,{c:()=>l});const l=i.p+"assets/images/Installing-Windows-Network_367x167-ea36f8b13a68c896cb546e2517d65327.png"},4552:(n,e,i)=>{i.d(e,{I:()=>a,M:()=>r});var l=i(11504);const s={},t=l.createContext(s);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);