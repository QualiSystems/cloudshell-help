"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56560],{56803:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=e(74848),t=e(28453);const o={sidebar_position:2},r="Configuring ARR to Support SSL",l={id:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",title:"Configuring ARR to Support SSL",description:"To configure the ARR to support SSL:",source:"@site/versioned_docs/version-2024.1/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl.md",sourceDirName:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha",slug:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",permalink:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl.md",tags:[],version:"2024.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Before You Begin",permalink:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/before-you-begin"},next:{title:"Configuring ARR to Support SSL Offloading",permalink:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading"}},a={},c=[];function d(n){const i={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"configuring-arr-to-support-ssl",children:"Configuring ARR to Support SSL"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"To configure the ARR to support SSL:"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open the IIS Manager on the ARR machine."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Go to the Default Web Site configuration and open the ",(0,s.jsx)(i.strong,{children:"Bindings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.strong,{children:"Add Site Binding"})," window, add a new binding of type ",(0,s.jsx)(i.strong,{children:"http"}),", specify the ",(0,s.jsx)(i.strong,{children:"Host name"})," and select the relevant ",(0,s.jsx)(i.strong,{children:"SSL certificate"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:e(34033).A+"",width:"502",height:"304"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.strong,{children:"OK"})," and close the bindings menu."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Open the ",(0,s.jsx)(i.strong,{children:"Default Web Site"})," configuration and select ",(0,s.jsx)(i.strong,{children:"SSL Settings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Select the ",(0,s.jsx)(i.strong,{children:"Require SSL"})," checkbox and then select the required ",(0,s.jsx)(i.strong,{children:"Client certificates"})," setting."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:e(53729).A+"",width:"462",height:"237"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Repeat steps 1-6 on all ARR machines."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},53729:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/Configuring-ARR-to-support_1_462x237-9004b356c40bbeefc3282ef717353769.png"},34033:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/Configuring-ARR-to-support_502x304-f29f70e649b0d2ebe83e8a1ab11271be.png"},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>l});var s=e(96540);const t={},o=s.createContext(t);function r(n){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(o.Provider,{value:i},n.children)}}}]);