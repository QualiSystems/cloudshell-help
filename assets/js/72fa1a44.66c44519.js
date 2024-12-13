"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51117],{17801:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=e(74848),t=e(28453);const o={sidebar_position:2},r="Configure Sisense to Work with SSO",l={id:"install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",title:"Configure Sisense to Work with SSO",description:"Use the instructions in the following procedure to configure Insight to work with SSO. This requires configuring SSO on Sisense, the BI analytics tool used by Insight. You can do this via CloudShell's Insight tab or directly through the Sisense application.",source:"@site/versioned_docs/version-2024.1/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense.md",sourceDirName:"install-configure/cs-insight-bi/insight-sso",slug:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",permalink:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense.md",tags:[],version:"2024.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SSO to Insight Workflow",permalink:"/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow"},next:{title:"Configure Sisense SSO in CloudShell",permalink:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs"}},c={},h=[];function d(i){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configure-sisense-to-work-with-sso",children:"Configure Sisense to Work with SSO"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the instructions in the following procedure to configure Insight to work with SSO. This requires configuring SSO on Sisense, the BI analytics tool used by Insight. You can do this via CloudShell's ",(0,s.jsx)(n.strong,{children:"Insight"})," tab or directly through the Sisense application."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/install-configure/cs-insight-bi/install-insight/insight-configuration/grant-permissions",children:"Grant Data Security Permissions to ElastiCube Name"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https",children:"Configure HTTPS Connection Between CloudShell Portal and Sisense"})," (mandatory if the CloudShell Portal is configured to use HTTPS)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure Sisense to work with SSO:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Insight"})," tab, click ",(0,s.jsx)(n.strong,{children:"Admin"})," and select ",(0,s.jsx)(n.strong,{children:"Single Sign On"})," from the left menu."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enable the ",(0,s.jsx)(n.strong,{children:"Single Sign On Configuration"})," check box."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the SSO method to use: ",(0,s.jsx)(n.strong,{children:"JWT"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Remote Login URL"})," field, add the following URL:"]}),"\n",(0,s.jsx)(n.p,{children:"http://[CloudShell Portal Address]:[CloudShell Portal Port]/Account/SisenseLogin"}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[CloudShell Portal Address] is the IP address or hostname that users enter in order to browse to CloudShell Portal."}),"\n",(0,s.jsx)(n.li,{children:"[CloudShell Portal Port] is the port to use (required if default port 80 is not used)."}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(44104).A+"",width:"942",height:"403"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copy the Shared Secret string."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go\xa0to ",(0,s.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file, and add the following key:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'<add key="BiSSOSecret" value="shared-secret-value"/>'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file and restart the ",(0,s.jsx)(n.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n"]})]})}function a(i={}){const{wrapper:n}={...(0,t.R)(),...i.components};return n?(0,s.jsx)(n,{...i,children:(0,s.jsx)(d,{...i})}):d(i)}},44104:(i,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/Configure-Sisense-to-Work_2-50a9daa485630c8a728cc085d4b8c139.png"},28453:(i,n,e)=>{e.d(n,{R:()=>r,x:()=>l});var s=e(96540);const t={},o=s.createContext(t);function r(i){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function l(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:r(i.components),s.createElement(o.Provider,{value:n},i.children)}}}]);