"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[89600],{76760:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(17624),l=i(4552);const s={sidebar_position:1},o="How QualiX Works",r={id:"install-configure/qualix/qualix-overview/how-qualix-works",title:"How QualiX Works",description:"This articles illustrates the sequence of events that take place when a user opens a remote access link. For details on QualiX architecture and ports, see the Related Topics section at the bottom.",source:"@site/docs/install-configure/qualix/qualix-overview/how-qualix-works.md",sourceDirName:"install-configure/qualix/qualix-overview",slug:"/install-configure/qualix/qualix-overview/how-qualix-works",permalink:"/cloudshell-help/next/install-configure/qualix/qualix-overview/how-qualix-works",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/qualix-overview/how-qualix-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"QualiX Overview",permalink:"/cloudshell-help/next/install-configure/qualix/qualix-overview/"},next:{title:"Requirements (QualiX)",permalink:"/cloudshell-help/next/install-configure/qualix/qualix-overview/qualix-requirements"}},a={},c=[{value:"Related Topics",id:"related-topics",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-qualix-works",children:"How QualiX Works"}),"\n",(0,t.jsxs)(n.p,{children:["This articles illustrates the sequence of events that take place when a user opens a remote access link. For details on QualiX architecture and ports, see the ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/How-QualiX-works.htm?Highlight=How%20QualiX%20Works#Related",children:"Related Topics"})," section at the bottom."]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When using a QualiX server that is installed on AWS, a pem file is used for authentication instead of the reservation owner's CloudShell credentials."}),"\n",(0,t.jsx)(n.li,{children:"Communication between CloudShell Portal and QualiX is always over HTTPS."}),"\n",(0,t.jsx)(n.li,{children:"QualiX only displays connection links that are available for the selected resource or App. Connections that require an attribute that is missing from the component are not displayed."}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(95916).c+"",width:"760",height:"386"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In CloudShell Portal, the user clicks a resource or App in the sandbox."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Actions"})," context menu is displayed, listing the component's remote connection links. These may include remote connection links RDP, SSH, Telnet and VNC and any others defined in the file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The user selects a remote connection link."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["CloudShell Portal gets the access credentials of the reservation owner from Quali Server and any other relevant parameters from the ",(0,t.jsx)(n.code,{children:"ServerUniversalSettings.xml"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A new browser tab is opened"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Quali Server authenticates against QualiX and creates a session."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["QualiX redirects the user to the correct page with a different URL. For example: ",(0,t.jsx)(n.code,{children:"http://192.168.70.30/remote/#/client/c3NocXVhbGkAYwBxdWFsaS1hdXRo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-compnts.htm",children:"CloudShell Component Architecture"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-VNET-Ovrv.htm",children:"Microsoft Azure Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Ovrv.htm",children:"AWS Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/cs-reqd-ports.htm",children:"CloudShell Port Requirements"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},95916:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/QualixFlowDiagram_760x386-a768ac6aad74e13de565c2e167540f29.png"},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>o});var t=i(11504);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);