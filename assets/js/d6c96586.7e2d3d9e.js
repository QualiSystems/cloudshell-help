"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57800],{74576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(17624),s=i(4552);const t={sidebar_position:8},l="'Unexpected error' when installing Quali Server",o={id:"troubleshooting/installation/unexpected-error-when-installing-quali-server",title:"'Unexpected error' when installing Quali Server",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/installation/unexpected-error-when-installing-quali-server.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/unexpected-error-when-installing-quali-server",permalink:"/troubleshooting/installation/unexpected-error-when-installing-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/installation/unexpected-error-when-installing-quali-server.md",tags:[],version:"2023.3",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Load License",permalink:"/troubleshooting/installation/load-license"},next:{title:"Why Does CloudShell Upgrade Override CloudShell Settings",permalink:"/troubleshooting/installation/why-does-cloudshell-upgrade-override-cloudshell-settings"}},a={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"unexpected-error-when-installing-quali-server",children:"'Unexpected error' when installing Quali Server"}),"\n",(0,r.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,r.jsx)(n.p,{children:"In Quali Server configuration wizard:"}),"\n",(0,r.jsx)(n.admonition,{title:"\xa0",type:"danger",children:(0,r.jsxs)(n.p,{children:["Unexpected error.",(0,r.jsx)(n.br,{}),"\n","Check the log file for more details:",(0,r.jsx)(n.br,{}),"\n","Service 'Quali Server' status: 'Stopped', failed to set status: 'Running'"]})}),"\n",(0,r.jsx)(n.p,{children:'Windows Event Viewer>Application reports Erlang appcrash in "Crypto.dll":'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(23832).c+"",width:"626",height:"601"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"When installing Quali Server, RabbitMQ service crashes after start or fails to start during the RabbitMQ configuration step."}),"\n",(0,r.jsx)(n.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,r.jsx)(n.p,{children:"The Erlang version installed with Quali Server is incompatible with the machine's CPU."}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"To fix this issue, you need to install Erlang version 23.3 (or above) and reconfige RabbitMQ to work with the new version."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To resolve this issue:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download ",(0,r.jsx)(n.a,{href:"https://erlang.org/download/otp_win64_23.3.exe",children:"https://erlang.org/download/otp_win64_23.3.exe"})," and install."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add/update the following System Variable paths:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ERLANG_HOME"})," (Default before change: ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\erl10.3"})," \u2013 find matching path in new version)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ERLANG_SERVICE_MANAGER_PATH"})," (Default before change: ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\erl10.3\\erts-10.3\\bin"})," \u2013 find matching path in new version)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Restart the ",(0,r.jsx)(n.strong,{children:"Quali Server"})," service."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"install Quali Server."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},23832:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/CryptoCrash-10f6b0cc94801583d621be4322831bae.png"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var r=i(11504);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);