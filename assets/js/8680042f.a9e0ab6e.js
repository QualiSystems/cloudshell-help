"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[79600],{21624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(17624),t=s(4552);const o={sidebar_position:2},l="Configure Sisense to Work with SSO",r={id:"install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",title:"Configure Sisense to Work with SSO",description:"Use the instructions in the following procedure to configure Insight to work with SSO. This requires configuring SSO on Sisense, the BI analytics tool used by Insight. You can do this via CloudShell's Insight tab or directly through the Sisense application.",source:"@site/docs/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense.md",sourceDirName:"install-configure/cs-insight-bi/insight-sso",slug:"/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cs-insight-bi/insight-sso/configure-sso-in-sisense.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SSO to Insight Workflow",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/sso-to-insight-workflow"},next:{title:"Configure Sisense SSO in CloudShell",permalink:"/cloudshell-help/next/install-configure/cs-insight-bi/insight-sso/configure-sso-in-cs"}},h={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-sisense-to-work-with-sso",children:"Configure Sisense to Work with SSO"}),"\n",(0,i.jsxs)(n.p,{children:["Use the instructions in the following procedure to configure Insight to work with SSO. This requires configuring SSO on Sisense, the BI analytics tool used by Insight. You can do this via CloudShell's ",(0,i.jsx)(n.strong,{children:"Insight"})," tab or directly through the Sisense application."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/Grnt-dtsec-prms.htm",children:"Grant Data Security Permissions to ElastiCube Name"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/sis-https.htm",children:"Configure HTTPS Connection Between CloudShell Portal and Sisense"})," (mandatory if the CloudShell Portal is configured to use HTTS)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To configure Sisense to work with SSO:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Insight"})," tab, click ",(0,i.jsx)(n.strong,{children:"Admin"})," and select ",(0,i.jsx)(n.strong,{children:"Single Sign On"})," from the left menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enable the ",(0,i.jsx)(n.strong,{children:"Single Sign On Configuration"})," check box."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the SSO method to use: ",(0,i.jsx)(n.strong,{children:"JWT"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Remote Login URL"})," field, add the following URL:"]}),"\n",(0,i.jsx)(n.p,{children:"http://[CloudShell Portal Address]:[CloudShell Portal Port]/Account/SisenseLogin"}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[CloudShell Portal Address] is the IP address or hostname that users enter in order to browse to CloudShell Portal."}),"\n",(0,i.jsx)(n.li,{children:"[CloudShell Portal Port] is the port to use (required if default port 80 is not used)."}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(42196).c+"",width:"942",height:"403"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy the Shared Secret string."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go\xa0to ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Portal\\customer.config"})," file, and add the following key:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'<add key="BiSSOSecret" value="shared-secret-value"/>'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Save the file and restart the ",(0,i.jsx)(n.strong,{children:"CloudShell Portal IIS"})," service."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42196:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Configure-Sisense-to-Work_2-50a9daa485630c8a728cc085d4b8c139.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>l});var i=s(11504);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);