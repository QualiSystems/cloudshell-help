"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[22144],{52840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var p=n(17624),i=n(4552);const s={sidebar_position:2},o="Add an App to the Blueprint",r={id:"portal/blueprints/creating-blueprints/apps/add-app-to-blueprint",title:"Add an App to the Blueprint",description:"This article explains how to add an App to your blueprint.",source:"@site/docs/portal/blueprints/creating-blueprints/apps/add-app-to-blueprint.md",sourceDirName:"portal/blueprints/creating-blueprints/apps",slug:"/portal/blueprints/creating-blueprints/apps/add-app-to-blueprint",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/apps/add-app-to-blueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/blueprints/creating-blueprints/apps/add-app-to-blueprint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"View the Apps Catalog in the Blueprint",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/apps/view-apps-catalog"},next:{title:"Edit an App's Details in the Blueprint",permalink:"/cloudshell-help/next/portal/blueprints/creating-blueprints/apps/edit-app-in-blueprint"}},l={},a=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h1,{id:"add-an-app-to-the-blueprint",children:"Add an App to the Blueprint"}),"\n",(0,p.jsx)(t.p,{children:"This article explains how to add an App to your blueprint."}),"\n",(0,p.jsx)(t.admonition,{type:"tip",children:(0,p.jsx)(t.p,{children:'You can also add deployed Apps (Apps deployed in another sandbox) to your sandbox as shared resources, cutting App deployment time. For example, you could have a "master" sandbox containing a pool of deployed Apps, which can be added to other sandboxes as resources or to blueprints as abstract resources. Note that such Apps can be deleted only from the master blueprint, but you can still power them on/off in the secondary sandboxes.'})}),"\n",(0,p.jsx)(t.admonition,{type:"note",children:(0,p.jsxs)(t.p,{children:["To enable the deployment of Apps based on a public cloud like AWS EC2 or Azure, make sure the blueprint is configured to run a setup script that can prepare connectivity in the sandbox, like CloudShell's out-of-the-box Default Sandbox Setup script, and add at least one public cloud App to the blueprint to initiate the script's connectivity process for the cloud provider during the Setup phase of the sandbox. For additional information, see ",(0,p.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm",children:"Configure Blueprint Orchestration"}),"."]})}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:"To add an App to the diagram:"})}),"\n",(0,p.jsxs)(t.ol,{children:["\n",(0,p.jsxs)(t.li,{children:["\n",(0,p.jsxs)(t.p,{children:["In the blueprint or sandbox workspace, click ",(0,p.jsx)(t.strong,{children:"App / Service"}),"."]}),"\n"]}),"\n",(0,p.jsxs)(t.li,{children:["\n",(0,p.jsxs)(t.p,{children:["In the ",(0,p.jsx)(t.strong,{children:"Add App / Service"})," pane, click the \u2018",(0,p.jsx)(t.strong,{children:"+"}),"\u2019 icon of the App or drag it from the pane into the diagram."]}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:n(70660).c+"",width:"383",height:"232"})}),"\n"]}),"\n",(0,p.jsxs)(t.li,{children:["\n",(0,p.jsxs)(t.p,{children:["If the App has multiple deployment options in this domain, the ",(0,p.jsx)(t.strong,{children:"Select Deployment Path"})," window is displayed, prompting you to select the deployment option to use. For example:"]}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:n(70700).c+"",width:"652",height:"283"})}),"\n",(0,p.jsx)(t.p,{children:"The App is added to the diagram."}),"\n"]}),"\n"]}),"\n",(0,p.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,p.jsxs)(t.ul,{children:["\n",(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Blprnt-Use-Apps.htm",children:"Apps in Blueprints"})}),"\n",(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Use-Apps.htm#top",children:"Apps in Sandboxes"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}},70700:(e,t,n)=>{n.d(t,{c:()=>p});const p=n.p+"assets/images/AppSelectDeploymentPath-0c3f43bafd6bda1a305864f222874baa.png"},70660:(e,t,n)=>{n.d(t,{c:()=>p});const p=n.p+"assets/images/Working-with-Apps_3-e5516484e9b9bbf0009cf71714869be5.png"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var p=n(11504);const i={},s=p.createContext(i);function o(e){const t=p.useContext(s);return p.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),p.createElement(s.Provider,{value:t},e.children)}}}]);