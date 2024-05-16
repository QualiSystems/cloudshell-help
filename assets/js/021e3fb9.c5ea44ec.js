"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3060],{19632:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(17624),t=s(4552);const r={sidebar_position:5},o="Map the Insight Dashboards to the Overview Dashboard",c={id:"install-configure/cs-insight-bi/install-insight/insight-configuration/map-dashboards",title:"Map the Insight Dashboards to the Overview Dashboard",description:"This procedure links the different out-of-the-box Insight dashboards to the Overview dashboard, enabling their Go to Overview link.",source:"@site/versioned_docs/version-2023.3/install-configure/cs-insight-bi/install-insight/insight-configuration/map-dashboards.md",sourceDirName:"install-configure/cs-insight-bi/install-insight/insight-configuration",slug:"/install-configure/cs-insight-bi/install-insight/insight-configuration/map-dashboards",permalink:"/install-configure/cs-insight-bi/install-insight/insight-configuration/map-dashboards",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cs-insight-bi/install-insight/insight-configuration/map-dashboards.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Import the Insight Dashboards",permalink:"/install-configure/cs-insight-bi/install-insight/insight-configuration/import-dashboards"},next:{title:"Grant Data Security Permissions to ElastiCube Name",permalink:"/install-configure/cs-insight-bi/install-insight/insight-configuration/grant-permissions"}},a={},d=[];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"map-the-insight-dashboards-to-the-overview-dashboard",children:"Map the Insight Dashboards to the Overview Dashboard"}),"\n",(0,i.jsxs)(e.p,{children:["This procedure links the different out-of-the-box Insight dashboards to the ",(0,i.jsx)(e.strong,{children:"Overview"})," dashboard, enabling their ",(0,i.jsx)(e.strong,{children:"Go to Overview"})," link."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(4584).c+"",width:"640",height:"360"})}),"\n",(0,i.jsx)(e.admonition,{type:"important",children:(0,i.jsx)(e.p,{children:"The mapping is done by running a dedicated script that is provided with the CloudShell Insight BI package. However, you can only run this script once. As such, if you need to relink the dashboards, after changing the Sisense App's http protocol or port for example, you will need to completely remove the dashboards, add them again and then rerun the script."})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"To map the CloudShell Insight BI dashboards to the Overview dashboard:"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Open the CloudShell Insight BI package you previously downloaded."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(67840).c+"",width:"783",height:"309"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Open the ",(0,i.jsx)(e.code,{children:"/Attachments"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Unzip the ",(0,i.jsx)(e.code,{children:"Quali_setup_links.zip"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["In the unzipped folder, edit the ",(0,i.jsx)(e.code,{children:"dashboards_links.cfg.json"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Specify the Sisense App server's URL (including http protocol, hostname and port), and a log folder. If the log folder is missing, create it."}),"\n",(0,i.jsx)(e.p,{children:"For example:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(60728).c+"",width:"551",height:"81"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Open command-prompt from the ",(0,i.jsx)(e.code,{children:"/Attachments"})," folder and run the ",(0,i.jsx)(e.code,{children:"Quali_setup_links.exe"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"In the command-prompt that opens, specify the Sisense admin username and password, when prompted."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(85140).c+"",width:"804",height:"250"})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Password must be typed, not pasted."})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Press ",(0,i.jsx)(e.strong,{children:"[Enter]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Close the command-prompt when the process finishes."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(97880).c+"",width:"1047",height:"812"})}),"\n"]}),"\n"]})]})}function l(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},67840:(n,e,s)=>{s.d(e,{c:()=>i});const i=s.p+"assets/images/CloudShellInsightBIPackage-029cf4c0fe837f4070c715d194258288.png"},4584:(n,e,s)=>{s.d(e,{c:()=>i});const i=s.p+"assets/images/Insight-2021.2-Go-to-Overview-link-7af7dd3b13412859e5d5e65a210eb869.gif"},85140:(n,e,s)=>{s.d(e,{c:()=>i});const i=s.p+"assets/images/Quali_setup_links-cli-7d17af9c788d05aacbf5dc1fe36123ce.png"},60728:(n,e,s)=>{s.d(e,{c:()=>i});const i="data:image/png;base64,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"},97880:(n,e,s)=>{s.d(e,{c:()=>i});const i=s.p+"assets/images/quali_setup_links_cli_end-a2b84da6368d0fe92351b0dca54fa11a.png"},4552:(n,e,s)=>{s.d(e,{I:()=>c,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);