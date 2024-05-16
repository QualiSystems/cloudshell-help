"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[15704],{71648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var l=n(17624),r=n(4552);const i={sidebar_position:2},s="Create a Blueprint",a={id:"portal/blueprints/creating-blueprints/create-blueprint",title:"Create a Blueprint",description:"You can create an empty blueprint or base it on a blueprint template. It is recommended to use templates as they provide environment automation. For instance, the out-of-the-box CloudShell Sandbox Template template deploys Apps and connections on Setup, and deletes the Apps from their cloud providers on Teardown - see CloudShell Sandbox Template for details.",source:"@site/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/create-blueprint.md",sourceDirName:"portal/blueprints/creating-blueprints",slug:"/portal/blueprints/creating-blueprints/create-blueprint",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/create-blueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/blueprints/creating-blueprints/create-blueprint.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Blueprint Development Best Practices",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/blueprint-dev-best-practices"},next:{title:"Name your Blueprint",permalink:"/cloudshell-help/portal/blueprints/creating-blueprints/name-your-blueprint"}},o={},p=[{value:"Creating an empty blueprint",id:"creating-an-empty-blueprint",level:2},{value:"Creating a blueprint from a template",id:"creating-a-blueprint-from-a-template",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"create-a-blueprint",children:"Create a Blueprint"}),"\n",(0,l.jsxs)(t.p,{children:["You can create an empty blueprint or base it on a blueprint template. It is recommended to use templates as they provide environment automation. For instance, the out-of-the-box ",(0,l.jsx)(t.strong,{children:"CloudShell Sandbox Template"})," template deploys Apps and connections on Setup, and deletes the Apps from their cloud providers on Teardown - see ",(0,l.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#cloudshell-sandbox-template",children:"CloudShell Sandbox Template"})," for details."]}),"\n",(0,l.jsx)(t.p,{children:"Each blueprint has an owner which by default is the user who created the blueprint, but it can be changed by the owner or by an admin."}),"\n",(0,l.jsx)(t.h2,{id:"creating-an-empty-blueprint",children:"Creating an empty blueprint"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"To create an empty blueprint:"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["In the top left section of the ",(0,l.jsx)(t.strong,{children:"Blueprint Catalog"}),", click ",(0,l.jsx)(t.strong,{children:"+ Create Blueprint"}),".\xa0"]}),"\n",(0,l.jsxs)(t.p,{children:["By default, a new blueprint that is based on the out-of-the-box ",(0,l.jsx)(t.strong,{children:"CloudShell Sandbox Template"})," template is created."]}),"\n",(0,l.jsxs)(t.p,{children:["However, by disabling the ",(0,l.jsx)(t.code,{children:"OnlyAllowNewEnvironmentsFromTemplates"})," configuration key, admins can choose to allow sandbox creators to select the blueprint template to use, if multiple templates are available, as illustrated in the next step."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["(Occurs if there are multiple templates in CloudShell) From the drop-down list, select ",(0,l.jsx)(t.strong,{children:"Create Empty Blueprint"}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(83572).c+"",width:"307",height:"290"})}),"\n",(0,l.jsx)(t.p,{children:"A new blueprint is created and a blank diagram workspace is displayed.\xa0"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"creating-a-blueprint-from-a-template",children:"Creating a blueprint from a template"}),"\n",(0,l.jsxs)(t.p,{children:["Blueprints that are created from a template inherit the template's settings, including resources, services, Apps, orchestration and connections. By default, users can create blueprints from templates only. As an admin you can enable your users to create blank blueprints by changing the configuration key value. See ",(0,l.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#allowing-users-to-create-new-empty-blueprints",children:"Allowing users to create new empty blueprints"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["For step-by-step instructions on how to create a blueprint template, see ",(0,l.jsx)(t.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/blueprint-templates#creating-a-new-blueprint-template",children:"Creating a new blueprint template"}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"To create a new blueprint from a template:"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["In the top left section of the Blueprint Catalog, click the ",(0,l.jsx)(t.strong,{children:"+ Create Blueprint"}),"\xa0button."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"From the Select from templates menu, select a blueprint template."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"This menu is only displayed if you have two or more blueprint templates in the system."})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(83572).c+"",width:"307",height:"290"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If the template has inputs, the Create Template window is displayed, prompting you to configure the input settings and click Create to create a new blueprint based on this template."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Optionally, to create an empty blueprint from scratch, select the\xa0",(0,l.jsx)(t.strong,{children:"+ Create New Blueprint"}),"\xa0menu option."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Rename the new blueprint and perform any required changes to it."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../creating-blueprints/",children:"Creating Blueprints"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},83572:(e,t,n)=>{n.d(t,{c:()=>l});const l=n.p+"assets/images/CreateNewBlueprint-55e60a14f04e04a9ee1afa8610c817fd.png"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var l=n(11504);const r={},i=l.createContext(r);function s(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);