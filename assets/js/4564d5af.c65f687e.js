"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70696],{90352:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var n=o(17624),s=o(4552);const t={sidebar_position:7},i="Unable to Add Resources",r={id:"troubleshooting/cloudshell-portal/unable-to-add-resources",title:"Unable to Add Resources",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/unable-to-add-resources.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/unable-to-add-resources",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/unable-to-add-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/unable-to-add-resources.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Unable to Share Resources",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/unable-to-share-resources"},next:{title:"Unable to Locate a Resource",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/unable-to-locate-a-resource"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const l={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"unable-to-add-resources",children:"Unable to Add Resources"}),"\n",(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(l.p,{children:"The user is unable to perform one or both of the following:\xa0"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Add resources to blueprints."}),"\n",(0,n.jsxs)(l.li,{children:["Add a new script via the ",(0,n.jsx)(l.strong,{children:"Manage"})," dashboard."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsx)(l.p,{children:"CloudShell is installed in a High Availability configuration."}),"\n",(0,n.jsx)(l.p,{children:"WebDAV is enabled under the IIS on the CloudShell Portal machine."}),"\n",(0,n.jsx)(l.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(l.admonition,{title:"Important",type:"note",children:(0,n.jsx)(l.p,{children:"If you\u2019re working in High Availability mode, perform these steps on both CloudShell Portal nodes."})}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["On the CloudShell Portal machine, click ",(0,n.jsx)(l.strong,{children:"Start > Programs and Features > Turn Windows features on or off"})]}),"\n",(0,n.jsxs)(l.li,{children:["Under ",(0,n.jsx)(l.strong,{children:"Internet Information Services > World Wide Web Services > Common HTTP Features"})," > ensure that ",(0,n.jsx)(l.strong,{children:"WebDav Publishing"})," is unchecked."]}),"\n",(0,n.jsxs)(l.li,{children:["Restart CloudShell Portal:","\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"Launch the IIS Management console."}),"\n",(0,n.jsx)(l.li,{children:"Click the CloudShell website."}),"\n",(0,n.jsxs)(l.li,{children:["Click ",(0,n.jsx)(l.strong,{children:"Restart"})," under the ",(0,n.jsx)(l.strong,{children:"Manage Website"})," section on the right.","\n",(0,n.jsx)(l.admonition,{type:"note",children:(0,n.jsx)(l.p,{children:"Restarting the website will disconnect all logged in users."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/configure-portal/",children:"Configure the Self-Service Portal"})})]})}function u(e={}){const{wrapper:l}={...(0,s.M)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4552:(e,l,o)=>{o.d(l,{I:()=>r,M:()=>i});var n=o(11504);const s={},t=n.createContext(s);function i(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);