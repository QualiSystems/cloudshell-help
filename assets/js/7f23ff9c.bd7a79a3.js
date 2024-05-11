"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[18796],{5724:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=e(17624),s=e(4552);const o={sidebar_position:2},r="Configuring ARR to Support SSL",l={id:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",title:"Configuring ARR to Support SSL",description:"To configure the ARR to support SSL:",source:"@site/docs/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl.md",sourceDirName:"install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha",slug:"/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",permalink:"/cloudshell-help/next/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Before You Begin",permalink:"/cloudshell-help/next/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/before-you-begin"},next:{title:"Configuring ARR to Support SSL Offloading",permalink:"/cloudshell-help/next/install-configure/ha-installation/config-arr-and-iis-to-ssl-in-ha/config-arr-to-ssl-offloading"}},a={},c=[];function h(n){const i={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"configuring-arr-to-support-ssl",children:"Configuring ARR to Support SSL"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"To configure the ARR to support SSL:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Open the IIS Manager on the ARR machine."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Go to the Default Web Site configuration and open the ",(0,t.jsx)(i.strong,{children:"Bindings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.strong,{children:"Add Site Binding"})," window, add a new binding of type ",(0,t.jsx)(i.strong,{children:"http"}),", specify the ",(0,t.jsx)(i.strong,{children:"Host name"})," and select the relevant ",(0,t.jsx)(i.strong,{children:"SSL certificate"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:e(92900).c+"",width:"502",height:"304"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"OK"})," and close the bindings menu."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Open the ",(0,t.jsx)(i.strong,{children:"Default Web Site"})," configuration and select ",(0,t.jsx)(i.strong,{children:"SSL Settings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select the ",(0,t.jsx)(i.strong,{children:"Require SSL"})," checkbox and then select the required ",(0,t.jsx)(i.strong,{children:"Client certificates"})," setting."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:e(79664).c+"",width:"462",height:"237"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Repeat steps 1-6 on all ARR machines."}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:i}={...(0,s.M)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},79664:(n,i,e)=>{e.d(i,{c:()=>t});const t=e.p+"assets/images/Configuring-ARR-to-support_1_462x237-9004b356c40bbeefc3282ef717353769.png"},92900:(n,i,e)=>{e.d(i,{c:()=>t});const t=e.p+"assets/images/Configuring-ARR-to-support_502x304-f29f70e649b0d2ebe83e8a1ab11271be.png"},4552:(n,i,e)=>{e.d(i,{I:()=>l,M:()=>r});var t=e(11504);const s={},o=t.createContext(s);function r(n){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:i},n.children)}}}]);