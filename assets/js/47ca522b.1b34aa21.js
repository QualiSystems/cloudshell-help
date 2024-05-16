"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8420],{83180:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(17624),o=i(4552);const r={sidebar_position:2},t='Insight dashboard error: "redirected you too many times."',l={id:"troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times",title:'Insight dashboard error: "redirected you too many times."',description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times.md",sourceDirName:"troubleshooting/insight",slug:"/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times",permalink:"/cloudshell-help/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:'ElastiCube Table Build Error: "key already exists in the collection"',permalink:"/cloudshell-help/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection"},next:{title:"Low Disk Space Due to Unusually Large ResourceUtilizationLog Table",permalink:"/cloudshell-help/troubleshooting/insight/low-disk-space-due-to-unusually-large-resourceutilizationlog-table"}},d={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"insight-dashboard-error-redirected-you-too-many-times",children:'Insight dashboard error: "redirected you too many times."'}),"\n",(0,n.jsx)(s.h2,{id:"error-message",children:"Error Message"}),"\n",(0,n.jsx)(s.admonition,{type:"danger-one-line",children:(0,n.jsx)(s.p,{children:"192.168.85.24 redirected you too many times."})}),"\n",(0,n.jsx)(s.p,{children:'where "192.168.85.24" is the Quali Server\'s IP address'}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Due to an internet browser limitation, iframes are not displayed in internet browsers over HTTP."}),"\n",(0,n.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(s.p,{children:["Since ",(0,n.jsx)(s.strong,{children:"Insight"})," dashboards are based on iframes, you will need to configure CloudShell Portal and Sisense to work over HTTPS to allow the dashboards to display in these browsers. The steps below apply to Sisense version 8.2 and up. For additional information, see this official ",(0,n.jsx)(s.a,{href:"https://support.sisense.com/kb/en/article/breaking-changes-with-google-chrome-80-samesitenone-secure-cookie-settings-updated-march-12-2020",children:"Sisense knowledgebase article"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"To resolve the issue:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Perform the steps in ",(0,n.jsx)(s.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/secure-communication/config-secured-portal",children:"Configuring CloudShell Portal to Work in HTTPS Mode"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Open Sisense Configuration Manager (URL: ",(0,n.jsx)(s.code,{children:"<sisense hostname/IP>:3030"}),") select the following 2 checkboxes:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Enable SSL"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Force secure cookies attribute"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(87884).c+"",width:"985",height:"453"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Upload the SSL certificate."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Set the port number."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Confirm services restart if prompted."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Open the Sisense web app and click ",(0,n.jsx)(s.strong,{children:"Admin>Security Settings"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Change ",(0,n.jsx)(s.strong,{children:"Support Cross Site Cookies for Embedding"})," to ",(0,n.jsx)(s.strong,{children:"None"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(28572).c+"",width:"990",height:"823"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.strong,{children:"Close"})," in the confirmation message."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In Chrome, go to ",(0,n.jsx)(s.strong,{children:"Settings>Privacy and security>Cookies and other site data"})," and select ",(0,n.jsx)(s.strong,{children:"Allow all cookies"})," or at least ",(0,n.jsx)(s.strong,{children:"Block third-party cookies in Incognito"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(38660).c+"",width:"996",height:"555"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/cloudshell-help/install-configure/cs-insight-bi/install-insight/insight-configuration/configure-https",children:"Configure HTTPS Connection Between CloudShell Portal and Sisense"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},38660:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/ChromeSettings-5eec573956318377da5eb766a22de168.png"},28572:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/CrossSiteCookiesForEmbedding-2bad64b234ed3d452d32c8fb73d3300c.png"},87884:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/SisenseSSL-dc88714a841ecf6c7e96c3c93ac30a4a.png"},4552:(e,s,i)=>{i.d(s,{I:()=>l,M:()=>t});var n=i(11504);const o={},r=n.createContext(o);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);