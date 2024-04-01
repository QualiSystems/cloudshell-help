"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[32288],{75068:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=o(17624),t=o(4552);const l={sidebar_position:5},r="Unable to Save New App",i={id:"troubleshooting/cloudshell-portal/unable-to-save-new-app",title:"Unable to Save New App",description:"Error Message",source:"@site/docs/troubleshooting/cloudshell-portal/unable-to-save-new-app.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/unable-to-save-new-app",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-save-new-app",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/cloudshell-portal/unable-to-save-new-app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram"},next:{title:"Unable to Share Resources",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-share-resources"}},a={},d=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function h(e){const n={admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"unable-to-save-new-app",children:"Unable to Save New App"}),"\n",(0,s.jsx)(n.h2,{id:"error-message",children:"Error Message"}),"\n",(0,s.jsx)(n.admonition,{title:"\xa0",type:"danger",children:(0,s.jsx)(n.p,{children:"HTTP 405 Error (Method Not Allowed)"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a new App in the ",(0,s.jsx)(n.strong,{children:"Manage"})," section of CloudShell Portal, the user cannot save the App. When the user clicks ",(0,s.jsx)(n.strong,{children:"Done"}),", the operating system returns an error, the process is halted and the app is not saved. Note that this is an operating system error message and not an error message in CloudShell."]}),"\n",(0,s.jsx)(n.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,s.jsx)(n.p,{children:"WebDAV is enabled under the IIS on the CloudShell Portal machine."}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"note",children:(0,s.jsx)(n.p,{children:"If you\u2019re working in High Availability mode, perform these steps on both CloudShell Portal nodes."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To resolve the issue described above, follow these steps:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On the CloudShell Portal machine, click ",(0,s.jsx)(n.strong,{children:"Start > Programs and Features > Turn Windows features on or off"})]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.strong,{children:"Internet Information Services > World Wide Web Services > Common HTTP Features"})," > ensure that ",(0,s.jsx)(n.strong,{children:"WebDav Publishing"})," is unchecked."]}),"\n",(0,s.jsxs)(n.li,{children:["Restart CloudShell Portal:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Launch the IIS Management console."}),"\n",(0,s.jsx)(n.li,{children:"Click the CloudShell website."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Restart"})," under the ",(0,s.jsx)(n.strong,{children:"Manage Website"})," section on the right.","\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Restarting the website will disconnect all logged in users."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>r});var s=o(11504);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);