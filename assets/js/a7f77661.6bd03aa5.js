"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[58444],{76708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(17624),i=n(4552);const r={sidebar_position:4},c="Best Practice: Execution Server with HA Setup",o={id:"install-configure/ha-deployment/best-practice-es-with-ha",title:"Best Practice: Execution Server with HA Setup",description:"Tests and Commands, for example, resource commands and blueprint commands, run in the Execution Server and not in the App server.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-deployment/best-practice-es-with-ha.md",sourceDirName:"install-configure/ha-deployment",slug:"/install-configure/ha-deployment/best-practice-es-with-ha",permalink:"/cloudshell-help/install-configure/ha-deployment/best-practice-es-with-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-deployment/best-practice-es-with-ha.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"performance",permalink:"/cloudshell-help/install-configure/ha-deployment/cs-app-server-clusting/performance"},next:{title:"Appendix",permalink:"/cloudshell-help/install-configure/ha-deployment/appendix"}},a={},d=[];function A(e){const t={a:"a",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"best-practice-execution-server-with-ha-setup",children:"Best Practice: Execution Server with HA Setup"}),"\n",(0,s.jsx)(t.p,{children:"Tests and Commands, for example, resource commands and blueprint commands, run in the Execution Server and not in the App server."}),"\n",(0,s.jsxs)(t.p,{children:["These commands usually use TestShell API or Quali API to communicate with and use methods in Quali server (for example GetReservationDetails). To use the APIs, the Quali Server address or IP must be provided in advance, connect to the server and then run the code. Similarly, with python drivers, you should use the details coming from the context.connectivity object, as shown in ",(0,s.jsx)(t.a,{href:"/cloudshell-help/devguide/developing-shells/driver-deep-dive#using-the-cloudshell-api",children:"Using the CloudShell API"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In an HA scenario, you cannot predict in advance which App server is the one that is online during the command execution phase in the Execution Server, so therefore the virtual front address of the App server must be provided."}),"\n",(0,s.jsxs)(t.p,{children:["By using the ",(0,s.jsx)(t.strong,{children:"connectivityInfo"})," matrix in CloudShell Resource Manager drivers, there is no need to change all drivers to use the virtual front specific IP. An example of the matrix is depicted below:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(79336).c+"",width:"321",height:"130"})}),"\n",(0,s.jsx)(t.p,{children:"The best practice is to use the values in the matrix to operate and connect to the App server API\u2019s."}),"\n",(0,s.jsx)(t.p,{children:"When setting up HA, App server virtual front connectivity details are specified, for example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(67655).c+"",width:"454",height:"202"})}),"\n",(0,s.jsx)(t.p,{children:"This IP or address (DNS name) is also used in the \u2018connectivityInfo\u2019 matrix when running commands. For example, in the image below, a simple driver is running in a HA setup and is printing the matrix content:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(69480).c+"",width:"524",height:"127"})}),"\n",(0,s.jsx)(t.p,{children:"This IP address is the App server virtual front IP, as you can see in the Windows cluster manager:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(45484).c+"",width:"237",height:"171"})})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},79336:(e,t,n)=>{n.d(t,{c:()=>s});const s="data:image/png;base64,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"},67655:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Execution-server-with-HA-setup_1-4d3f301b33826c3efa8e6c864a6b3970.png"},69480:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/Execution-server-with-HA-setup_2_524x127-c57c72444baeea65de69b0a83df6e284.png"},45484:(e,t,n)=>{n.d(t,{c:()=>s});const s="data:image/png;base64,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"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var s=n(11504);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);