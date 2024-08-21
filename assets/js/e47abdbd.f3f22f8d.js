"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[80296],{63152:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(74848),s=n(28453);const l={sidebar_position:1},r='ElastiCube Table Build Error: "key already exists in the collection"',o={id:"troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection",title:'ElastiCube Table Build Error: "key already exists in the collection"',description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection.md",sourceDirName:"troubleshooting/insight",slug:"/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection",permalink:"/2023.3/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/insight/elasticube-table-build-error-key-already-exists-in-the-collection.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auto Load Fails",permalink:"/2023.3/troubleshooting/resource-manager/auto-load-fails"},next:{title:'Insight dashboard error: "redirected you too many times."',permalink:"/2023.3/troubleshooting/insight/insight-dashboard-error-redirected-you-too-many-times"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"elasticube-table-build-error-key-already-exists-in-the-collection",children:'ElastiCube Table Build Error: "key already exists in the collection"'})}),"\n",(0,t.jsx)(i.h2,{id:"error-message",children:"Error Message"}),"\n",(0,t.jsx)(i.admonition,{type:"danger-one-line",children:(0,t.jsxs)(i.p,{children:["Connection Failed",(0,t.jsx)(i.br,{}),"\n","The key ",(0,t.jsx)(i.code,{children:"__<keyName>__"})," already exists in the collection."]})}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"While building ElastiCube, one or more tables fail with the above error."}),"\n",(0,t.jsx)(i.p,{children:"For example:"}),"\n",(0,t.jsxs)(i.p,{children:[".",(0,t.jsx)(i.img,{src:n(4198).A+"",width:"256",height:"110"})]}),"\n",(0,t.jsx)(i.p,{children:"Clicking Continue results in a failed build of the Quali Insight database."}),"\n",(0,t.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(i.p,{children:"To resolve the issue:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/2023.3/install-configure/cs-insight-bi/install-insight/insight-configuration/build-elasticube",children:"Build the Insight ElastiCube"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If rebuilding ElastiCube doesn't fix the issue, manually reload each failed table."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Open the Sisense ElastiCube Manager application in the BI server."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Open the QS_ElastiCube (or your custom elastic cube, if you have one)."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Click ElastiCube and then click Change Connectivity Settings."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Make sure the correct QualiInsight database is selected."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Scroll down until you find the bad table, hover over it and click the Change source provider button on the right."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Connect to Server dialog box, select the database and then select the bad table."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Change Source Provider Wizard, select the Database type."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Connect to SQL Server dialog box, click Select Database and choose the database and click\xa0OK."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Change table with Tables/Views dialog box, select the bad table and click Change."}),"\n",(0,t.jsx)(i.p,{children:'If you see multiple instances of the table, select the one that has Scheme Name "dbo".'}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Repeat steps a-j to reload all the bad tables."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Rebuild ElastiCube as explained in ",(0,t.jsx)(i.a,{href:"/2023.3/install-configure/cs-insight-bi/install-insight/insight-configuration/build-elasticube",children:"Build the Insight ElastiCube"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/2023.3/install-configure/cs-system-requirements/min-requirements-for-cs",children:"Minimum Requirements for CloudShell Servers and Clients"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4198:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/ElasticubeTableBuildError_256x110-9e605b5a654d5b4fce7265412235426e.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(96540);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);