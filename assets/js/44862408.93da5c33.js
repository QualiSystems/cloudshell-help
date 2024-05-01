"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34276],{58264:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(17624),t=i(4552);const l={sidebar_position:1},r="Configuring Windows Network Load Balancing",o={id:"install-configure/ha-installation/install-win-network-load-balance/config-win-net-lb",title:"Configuring Windows Network Load Balancing",description:"This section describes how to configure Windows Network Load Balancing using the NLB Manager.",source:"@site/docs/install-configure/ha-installation/install-win-network-load-balance/config-win-net-lb.md",sourceDirName:"install-configure/ha-installation/install-win-network-load-balance",slug:"/install-configure/ha-installation/install-win-network-load-balance/config-win-net-lb",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-win-network-load-balance/config-win-net-lb",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/ha-installation/install-win-network-load-balance/config-win-net-lb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installing Windows Network Load Balancing",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-win-network-load-balance/"},next:{title:"Adding Another Host to the Network Load Balancing Cluster",permalink:"/cloudshell-help/next/install-configure/ha-installation/install-win-network-load-balance/add-another-host-to-net-lb"}},c={},a=[];function d(n){const e={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"configuring-windows-network-load-balancing",children:"Configuring Windows Network Load Balancing"}),"\n",(0,s.jsx)(e.p,{children:"This section describes how to configure Windows Network Load Balancing using the NLB Manager."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"To configure Windows Network Load Balancing:"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Start > Administrative Tools > Network Load Balancing Manager"})," or from the command prompt, type ",(0,s.jsx)(e.strong,{children:"NLBMgr"})," and then press ",(0,s.jsx)(e.strong,{children:"Enter"}),")."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(61924).c+"",width:"459",height:"315"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Right click ",(0,s.jsx)(e.strong,{children:"Network Load Balancing Clusters"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(39516).c+"",width:"253",height:"73"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select ",(0,s.jsx)(e.strong,{children:"New Cluster"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(44460).c+"",width:"339",height:"321"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Host"})," field, enter the details of the ARR servers and then click ",(0,s.jsx)(e.strong,{children:"Connect"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(72128).c+"",width:"407",height:"386"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select the client's network and click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Due to a limitation, the network card must use a static IP address and not DHCP. (see ",(0,s.jsx)(e.a,{href:"/cloudshell-help/next/install-configure/ha-installation/known-issues-and-limitations",children:"Known Issues and Limitations (High Availability)"}),")."]})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"New Cluster: Host Parameters"})," window, click ",(0,s.jsx)(e.strong,{children:"Add"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(20596).c+"",width:"377",height:"359"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"New Cluster: Cluster IP Addresses"})," window, click ",(0,s.jsx)(e.strong,{children:"Add"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(62440).c+"",width:"409",height:"378"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Cluster Parameters"}),' section, add the cluster "full Internet name" and click ',(0,s.jsx)(e.strong,{children:"Next"}),". This name is used in the DNS as the Virtual front name."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Port Rules"})," section, click ",(0,s.jsx)(e.strong,{children:"Edit"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Select the port range to use in the cluster. This is the port range that is redirected in the cluster to other hosts."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Usually http users use from: 80 to:80"}),"\n",(0,s.jsx)(e.li,{children:"Usually SSL users use from:443 to:443"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Under ",(0,s.jsx)(e.strong,{children:"Filtering mode"}),", select ",(0,s.jsx)(e.strong,{children:"Single host"})," and click ",(0,s.jsx)(e.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Finish"}),"."]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},39516:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_1_253x73-b83ae86f195613cd2ee708d96560ec3e.png"},44460:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_2_339x321-f697dcdbaef7de392d2d95e9920f888c.png"},72128:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_3_407x386-d71248ce614de2963ffb3ecfdbf4ab21.png"},61924:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_459x315-a37178a0bde7813d9512ef3333f94077.png"},20596:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_4_377x359-544ad91f7d4036d0440f3eeacee1b754.png"},62440:(n,e,i)=>{i.d(e,{c:()=>s});const s=i.p+"assets/images/Configuring-Windows-Network_5_409x378-701a8964b71cfb014d5e72c4e6810c1c.png"},4552:(n,e,i)=>{i.d(e,{I:()=>o,M:()=>r});var s=i(11504);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);