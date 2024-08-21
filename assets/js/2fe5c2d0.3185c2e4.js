"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[37670],{57298:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(74848),t=i(28453);const o={sidebar_position:8},r="Configure HTTPS Connection Between CloudShell Portal and Sisense",l={id:"install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https",title:"Configure HTTPS Connection Between CloudShell Portal and Sisense",description:"Due to an internet browser limitation, iframes are not displayed in internet browsers over HTTP.",source:"@site/versioned_docs/version-2024.1/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https.md",sourceDirName:"install-configure/cs-insight-bi/install-insight/insight-configuration",slug:"/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https",permalink:"/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https.md",tags:[],version:"2024.1",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Grant Data Security Permissions to ElastiCube Name",permalink:"/install-configure/cs-insight-bi/install-insight/insight-configuration/grant-permissions"},next:{title:"Rebrand Insight (White Labeling)",permalink:"/install-configure/cs-insight-bi/install-insight/rebrand"}},c={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configure-https-connection-between-cloudshell-portal-and-sisense",children:"Configure HTTPS Connection Between CloudShell Portal and Sisense"})}),"\n",(0,s.jsx)(n.p,{children:"Due to an internet browser limitation, iframes are not displayed in internet browsers over HTTP."}),"\n",(0,s.jsxs)(n.p,{children:["Since Insight dashboards are based on iframes, you will need to configure CloudShell Portal and Sisense to work over HTTPS to allow the dashboards to display in these browsers. The steps below apply to Sisense version 8.2 and up. For additional information, see this official ",(0,s.jsx)(n.a,{href:"https://support.sisense.com/kb/en/article/breaking-changes-with-google-chrome-80-samesitenone-secure-cookie-settings-updated-march-12-2020",children:"Sisense knowledgebase article"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To resolve the issue:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Perform the steps in ",(0,s.jsx)(n.a,{href:"/install-configure/cloudshell-suite/secure-communication/config-secured-portal",children:"Configuring CloudShell Portal to Work in HTTPS Mode"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open Sisense Configuration Manager (URL: ",(0,s.jsx)(n.code,{children:"<sisense hostname/IP>:3030"}),") select the following 2 checkboxes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enable SSL"}),"\n",(0,s.jsx)(n.li,{children:"Force secure cookies attribute"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7516).A+"",width:"985",height:"453"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Upload the SSL certificate."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the port number."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Save."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm services restart if prompted."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the Sisense web app and click Admin>Security Settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change Support Cross Site Cookies for Embedding to None."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(502).A+"",width:"990",height:"823"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Close in the confirmation message."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Save."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In Chrome, go to Settings>Privacy and security>Cookies and other site data and select Allow all cookies or at least Block third-party cookies in Incognito."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(11177).A+"",width:"996",height:"555"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11177:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ChromeSettings-5eec573956318377da5eb766a22de168.png"},502:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/CrossSiteCookiesForEmbedding-2bad64b234ed3d452d32c8fb73d3300c.png"},7516:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/SisenseSSL-dc88714a841ecf6c7e96c3c93ac30a4a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);