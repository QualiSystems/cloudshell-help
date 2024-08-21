"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[55934],{97904:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=o(74848),s=o(28453);const n={sidebar_position:1},r="Set the Timeout Period for CloudShell Portal",l={id:"install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout",title:"Set the Timeout Period for CloudShell Portal",description:"To set the timeout period for Portal sessions:",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout.md",sourceDirName:"install-configure/cloudshell-suite/configure-products/configure-portal",slug:"/install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/set-portal-timeout.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configure the Self-Service Portal",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/"},next:{title:"Best Practices for CloudShell Portal",permalink:"/2023.3/install-configure/cloudshell-suite/configure-products/configure-portal/best-practices"}},c={},u=[];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"set-the-timeout-period-for-cloudshell-portal",children:"Set the Timeout Period for CloudShell Portal"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"To set the timeout period for Portal sessions:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to the ",(0,i.jsx)(t.code,{children:"<Installation drive>\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\Web."})," config file."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Locate the ",(0,i.jsx)(t.strong,{children:"sessionState timeout"})," line:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'<system.web>\n     <sessionState timeout="120">\n</sessionState>\n'})}),"\n",(0,i.jsx)(t.p,{children:"The default timeout period is 120 minutes."}),"\n",(0,i.jsx)(t.p,{children:"An alert message is issued shortly before the timeout, so if you do modify the timeout interval, do not use a setting that is six minutes or less."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Set the suitable timeout period and save the file."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Restart the IIS, and clear the browser cache."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Modifications you make to the ",(0,i.jsx)(t.code,{children:"web.config"})," file are overwritten during an upgrade of the CloudShell application. We therefore recommend that you save a copy of the ",(0,i.jsx)(t.code,{children:"web.config"})," file as a backup."]})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var i=o(96540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);