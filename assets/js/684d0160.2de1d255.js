"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[46316],{91656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(17624),s=t(4552);const r={sidebar_position:3},o="MSDTC Security Configuration",l={id:"troubleshooting/installation/msdtc-security-configuration",title:"MSDTC Security Configuration",description:"Error Message",source:"@site/docs/troubleshooting/installation/msdtc-security-configuration.md",sourceDirName:"troubleshooting/installation",slug:"/troubleshooting/installation/msdtc-security-configuration",permalink:"/cloudshell-help/next/troubleshooting/installation/msdtc-security-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/installation/msdtc-security-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manual IIS Installation Error",permalink:"/cloudshell-help/next/troubleshooting/installation/manual-iis-installation-error"},next:{title:"MSDTC Firewall Settings",permalink:"/cloudshell-help/next/troubleshooting/installation/msdtc-firewall-settings"}},c={},a=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"msdtc-security-configuration",children:"MSDTC Security Configuration"}),"\n",(0,i.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsxs)(n.admonition,{type:"danger-one-line",children:[(0,i.jsx)(n.p,{children:"Failed the MSDTC test"}),(0,i.jsx)(n.p,{children:"The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn't have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers:"}),(0,i.jsx)(n.p,{children:"xx.xx.xxx.xxx, xxxx\\qualisystems2016"}),(0,i.jsx)(n.p,{children:"You should also check Windows Event viewer for more details."})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["When running the Quali Server configuration wizard, and trying to connect to a database in the ",(0,i.jsx)(n.strong,{children:"Database selection"})," screen, an error message is displayed if there is a security configuration issue."]}),"\n",(0,i.jsx)(n.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsx)(n.p,{children:"Possible reasons for incorrect MSDTC configuration include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MSDTC is not installed."}),"\n",(0,i.jsx)(n.li,{children:"MSDTC is not configured to start automatically in Windows Services."}),"\n",(0,i.jsx)(n.li,{children:"Security configurations of MSDTC are not correctly defined."}),"\n",(0,i.jsx)(n.li,{children:"You did not specify the DB machine's NetBIOS computer name when connecting to the DB."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To run the CloudShell Suite applications, configure MSDTC Security settings on the Quali Server machine and the SQL database machine (or machines in a High Availability deployment)."}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Before performing the below steps, try specifying the DB machine's NetBIOS computer name in the Quali Server Configuration wizard's ",(0,i.jsx)(n.strong,{children:"Database Connection"}),' window, so for example, instead of using "',(0,i.jsx)(n.code,{children:"dbmachine\\dbinstance"}),'", use "',(0,i.jsx)(n.code,{children:"dbmachine.<NetBIOS-computer-name>\\dbinstance"}),'". For details, see ',(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-db-conn-sql.htm",children:"Configure the SQL Server Database Connection"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure that proper ",(0,i.jsx)(n.strong,{children:"Security Settings"})," in ",(0,i.jsx)(n.strong,{children:"Local DTC"})," properties have been selected:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Control Panel > Administrative Tools > Component Services"})," or select ",(0,i.jsx)(n.strong,{children:"Start > Run"}),", type ",(0,i.jsx)(n.strong,{children:"dcomcnfg.exe"})," and press ",(0,i.jsx)(n.strong,{children:"Enter"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the left navigation tree, drill down to ",(0,i.jsx)(n.strong,{children:"Component Services > Computers > My Computer > Distributed Transaction Coordinator > Local DTC"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right click ",(0,i.jsx)(n.strong,{children:"Local DTC"})," and select ",(0,i.jsx)(n.strong,{children:"Properties"})," from the context menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Security"})," tab, select the following checkboxes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Network DTC Access"}),"\n",(0,i.jsx)(n.li,{children:"Allow Remote Client"}),"\n",(0,i.jsx)(n.li,{children:"Allow Remote Administration"}),"\n",(0,i.jsx)(n.li,{children:"Allow Inbound"}),"\n",(0,i.jsx)(n.li,{children:"Allow Outbound"}),"\n",(0,i.jsx)(n.li,{children:"Enable SNA LU 6.2 Transactions"}),"\n",(0,i.jsx)(n.li,{children:"No Authentication Required"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(27612).c+"",width:"462",height:"505"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Apply the changes and click OK. The service restarts. However, you may have to restart the computer(s)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For all operating systems, define the ",(0,i.jsx)(n.strong,{children:"Distributed Transaction Coordinator"})," service to startup automatically:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Start > Run"}),", type ",(0,i.jsx)(n.strong,{children:"services.msc"})," and press ",(0,i.jsx)(n.strong,{children:"Enter"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Services"})," window, right-click ",(0,i.jsx)(n.strong,{children:"Distributed Transaction Coordinator"}),", and select ",(0,i.jsx)(n.strong,{children:"Properties"})," from the context menu."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Startup type"})," dropdown list, select ",(0,i.jsx)(n.strong,{children:"Automatic"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to close the ",(0,i.jsx)(n.strong,{children:"Properties"})," window."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},27612:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Known-upgrade-issues-95267ffe597a60e0b3f79c11d81e557a.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);