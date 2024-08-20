"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84240],{17720:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(17624),i=s(4552);const l={sidebar_position:2},o="The Create Blueprint Link is Missing From the Blueprint Catalog",r={id:"troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog",title:"The Create Blueprint Link is Missing From the Blueprint Catalog",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog",permalink:"/2023.3/troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Unable to login to CloudShell Portal",permalink:"/2023.3/troubleshooting/cloudshell-portal/unable-to-login-to-cloudshell-portal"},next:{title:"Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram",permalink:"/2023.3/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-create-blueprint-link-is-missing-from-the-blueprint-catalog",children:"The Create Blueprint Link is Missing From the Blueprint Catalog"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"+ Create Blueprint"})," link is missing from the Blueprint Catalog, preventing users from creating blueprints."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(86472).c+"",width:"445",height:"214"})}),"\n",(0,t.jsx)(n.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The domain's Topologies folder has been removed from Resource Manager Client."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"OnlyAllowNewEnvironmentsFromTemplates"})," key is enabled on the server but there are no templates in the domain."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To set a new Topologies folder to the domain:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In Resource Manager Client, open Resource Explorer."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a new folder."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(25704).c+"",width:"348",height:"248"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Domains"})," explorer, double-click the domain and switch to the ",(0,t.jsx)(n.strong,{children:"Properties"})," page."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Change"})," button to the right of the ",(0,t.jsx)(n.strong,{children:"Topologies Folder"})," field and select the new folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To fix the missing templates issue:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config"})," file and make sure the ",(0,t.jsx)(n.code,{children:"OnlyAllowNewEnvironmentsFromTemplates"})," key is included and set to ",(0,t.jsx)(n.strong,{children:"True"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In CloudShell Portal, go to the ",(0,t.jsx)(n.strong,{children:"Manage>Blueprint Templates"})," page and make sure at least one template is associated with the domain."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},86472:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/CreateBlueprintLink-0434c63f223ea113733de55c37920655.png"},25704:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/RMNewFolder-a1a6fe900828914051ffb3e834020c4d.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var t=s(11504);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);