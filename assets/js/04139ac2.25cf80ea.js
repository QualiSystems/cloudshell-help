"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4176],{46172:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(17624),s=o(4552);const t={sidebar_position:4},l="Configure Sandbox API to Work in HTTPS Mode",r={id:"install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api",title:"Configure Sandbox API to Work in HTTPS Mode",description:"The section describes how to set up CloudShell Sandbox API to run in secure mode (https).",source:"@site/docs/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api.md",sourceDirName:"install-configure/cloudshell-suite/secure-communication",slug:"/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/secure-communication/config-secured-sandbox-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configure PyPi Server to Work in Secure Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-pypi"},next:{title:"Configure Quali API to Work in HTTPS Mode",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/secure-communication/config-secured-quali-api"}},c={},d=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-sandbox-api-to-work-in-https-mode",children:"Configure Sandbox API to Work in HTTPS Mode"}),"\n",(0,i.jsx)(n.p,{children:"The section describes how to set up CloudShell Sandbox API to run in secure mode (https)."}),"\n",(0,i.jsx)(n.p,{children:"Before you begin make sure you have an SSL certificate installed on your CloudShell Portal IIS server."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To configure Sandbox API to run in HTTPS mode:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Make sure you have the ",(0,i.jsx)(n.code,{children:"server.key"})," and ",(0,i.jsx)(n.code,{children:"server.crt"})," Portal IIS certificate files or convert file/s you have to these two files (using the ",(0,i.jsx)(n.code,{children:"openssl"})," tool, for example)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\win64\\ssl"})," folder, and place the ",(0,i.jsx)(n.code,{children:"server.key"})," and ",(0,i.jsx)(n.code,{children:"server.crt"})," IIS certificate files in this folder (If the folder does not exist, create it)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\conf\\httpd.conf"})," file, uncomment the \u201cDefine UseSSL\u201d line:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(73052).c+"",width:"764",height:"212"})}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,i.jsx)(n.p,{children:"The instructions in this article are sufficient. Do not follow the instructions provided in the file."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\SandboxApiGateway\\customer.config"})," file, and add the following key :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add key="Frost.PortSSL" value="3443"/>'})}),"\n",(0,i.jsx)(n.p,{children:"Replace the default port number of \u201c3443\u201d as required."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To reset the CloudShell Sandbox API port number, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-cs-sndbx-api.htm",children:"Configure CloudShell Sandbox API"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure to keep a back up of these files as they may be overwritten/deleted when upgrading CloudShell to a new version or patch."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restart the ",(0,i.jsx)(n.strong,{children:"CloudShellSandboxAPIGateway"})," service."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},73052:(e,n,o)=>{o.d(n,{c:()=>i});const i=o.p+"assets/images/Snbx-api-httpd.conf-7515681b68317d94010a285dee7e6818.png"},4552:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>l});var i=o(11504);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);