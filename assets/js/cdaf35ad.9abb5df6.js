"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8288],{65599:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=e(74848),s=e(28453);const r={sidebar_position:3},o="Configuring ARR to Support SSL Offloading",a={id:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading",title:"Configuring ARR to Support SSL Offloading",description:"To configure ARR to support SSL offloading:",source:"@site/versioned_docs/version-2024.1/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading.md",sourceDirName:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha",slug:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading",permalink:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring ARR to Support SSL",permalink:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl"},next:{title:"How to Create a Cluster in Windows Failover Manager",permalink:"/install-configure/ha-installation/create-cluster-in-win-failover-manager/"}},l={},c=[{value:"Recommendations",id:"recommendations",level:2}];function d(n){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"configuring-arr-to-support-ssl-offloading",children:"Configuring ARR to Support SSL Offloading"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"To configure ARR to support SSL offloading:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"On the ARR machine, open the IIS manager."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Open the ARR server farm and double-click ",(0,t.jsx)(i.strong,{children:"Routing Rules"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:e(47900).A+"",width:"454",height:"172"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Make sure the ",(0,t.jsx)(i.strong,{children:"Enable SSL offloading"})," check box is selected."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:e(48241).A+"",width:"513",height:"183"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Repeat steps 1-3 with all the ARR machines."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.strong,{children:"Centralized SSL Certificate"})," to share the same customer certificate between all ARR machines. For more information, see ",(0,t.jsx)(i.a,{href:"http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-centralized-ssl-certificate-support-ssl-scalability-and-manageability",children:"IIS 8.0 Centralized SSL Certificate Support: SSL Scalability and Manageability"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.strong,{children:"IIS Shared Configuration"})," to share the IIS configuration between the servers. For more information, see ",(0,t.jsx)(i.a,{href:"http://www.iis.net/learn/manage/managing-your-configuration-settings/shared-configuration_264",children:"Shared Configuration with IIS 7"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.strong,{children:"URL rewrite"})," to redirect users from http to https. For more information, see ",(0,t.jsx)(i.a,{href:"http://www.iis.net/downloads/microsoft/url-rewrite",children:"URL Rewrite"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Basic ARR configuration information, see ",(0,t.jsx)(i.a,{href:"http://www.iis.net/learn/extensions/configuring-application-request-routing-arr/define-and-configure-an-application-request-routing-server-farm",children:"Define and Configure an Application Request Routing Server Farm"}),"."]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},47900:(n,i,e)=>{e.d(i,{A:()=>t});const t=e.p+"assets/images/Configuring-ARR-to-support_1_1_454x172-f45062ec72b02216c74d9dc4c38b2089.png"},48241:(n,i,e)=>{e.d(i,{A:()=>t});const t=e.p+"assets/images/Configuring-ARR-to-support_1_2_513x183-032d91365dae4dc26faab945d840736c.png"},28453:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>a});var t=e(96540);const s={},r=t.createContext(s);function o(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);