"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[75712],{35916:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(17624),s=r(4552);const i={sidebar_position:6},o="Prepare and Reserve Blueprint",l={id:"install-configure/qualix/prepare-and-reserve-blueprint",title:"Prepare and Reserve Blueprint",description:"This section guides you on how to configure resources and services that enable remote connection to the devices and machines they represent, and how to connect to those devices from within CloudShell.",source:"@site/docs/install-configure/qualix/prepare-and-reserve-blueprint.md",sourceDirName:"install-configure/qualix",slug:"/install-configure/qualix/prepare-and-reserve-blueprint",permalink:"/cloudshell-help/next/install-configure/qualix/prepare-and-reserve-blueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/prepare-and-reserve-blueprint.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"QualiX Configuration for Version 5.0 and up",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/qualix-config-for-5-and-up"},next:{title:"Training Portal (Over the Shoulder)",permalink:"/cloudshell-help/next/install-configure/qualix/training-portal/"}},c={},d=[];function a(e){const n={admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"prepare-and-reserve-blueprint",children:"Prepare and Reserve Blueprint"}),"\n",(0,t.jsx)(n.p,{children:"This section guides you on how to configure resources and services that enable remote connection to the devices and machines they represent, and how to connect to those devices from within CloudShell."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The resource configuration steps must be performed for each resource for which you want to enable remote connection from CloudShell Portal."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To prepare and then reserve an blueprint:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"}),", open the ",(0,t.jsx)(n.strong,{children:"Attributes"})," page and make sure the following attributes are configured:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Attribute"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Attribute Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Rules"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"Configuration, Setting"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Password"}),(0,t.jsx)(n.td,{children:"Password"}),(0,t.jsx)(n.td,{children:"Configuration, Setting"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Resource Families"}),' pane, add these attributes to the families or models of the physical and virtual devices, and services to which end-users will connect. For example, the "bridge" family.']}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Remote connections are enabled for services that have the ",(0,t.jsx)(n.strong,{children:"Address"})," field."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.strong,{children:"Resource Explorer"}),', create a resource that uses a model from the "bridge" family.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Double-click the resource, in the ",(0,t.jsx)(n.strong,{children:"Parameters"})," section, click the ",(0,t.jsx)(n.strong,{children:"Address"})," field and insert the IP with which you want to do a session (RDP, Telnet, SSH, and VNC)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Configuration"})," button in the top right corner of the page. Insert into the new attributes the User Name and the Password for your session."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Log in to ",(0,t.jsx)(n.strong,{children:"CloudShell Portal"})," and click ",(0,t.jsx)(n.strong,{children:"Create Blueprint"}),". Add the new resource."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reserve the new blueprint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the blueprint's diagram, hover over the resource. In the ",(0,t.jsx)(n.strong,{children:"Actions"})," menu, the options you configured are displayed: Telnet, SSH, RDP, and VNC. Each option redirects you to the IP address you specified in the resource."]}),"\n",(0,t.jsx)(n.p,{children:"For example, all four remote access terminals:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(45800).c+"",width:"349",height:"396"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},45800:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/Remote-access-options-f9088ec5dbd562a04220b84642d8aa0d.png"},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var t=r(11504);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);