"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30528],{38836:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=n(17624),r=n(4552);const t={sidebar_position:4},l="Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram",i={id:"troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram",title:"Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram",description:"Description",source:"@site/docs/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/cloudshell-portal/unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The Create Blueprint Link is Missing From the Blueprint Catalog",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/the-create-blueprint-link-is-missing-from-the-blueprint-catalog"},next:{title:"Unable to Save New App",permalink:"/cloudshell-help/next/troubleshooting/cloudshell-portal/unable-to-save-new-app"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const s={em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"unable-to-add-apps-resources-or-services-to-a-blueprint-or-sandbox-diagram",children:"Unable to Add Apps, Resources or Services to a Blueprint or Sandbox Diagram"}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(s.p,{children:"When adding a CloudShell component to the diagram, nothing happens. In other words, the component is not added, and no indication or error is displayed on the screen."}),"\n",(0,o.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Resource is already included in the blueprint but outside of the canvas view."}),"\n",(0,o.jsxs)(s.li,{children:["The CloudShell Portal's IIS\xa0site has the following filtering rules disabled: PUT and DELETE. ",(0,o.jsx)(s.em,{children:"Note that in Windows Server 2016, the relevant verbs are GET, POST\xa0and PUT"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"To see if the resource is already in the blueprint:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["In the blueprint canvas, switch to ",(0,o.jsx)(s.strong,{children:"List"})," view and check if the resource is included."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"To configure the request filtering:"})}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"On the CloudShell Portal machine, open IIS Manager."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Click the CloudShell Portal IIS\xa0site and select ",(0,o.jsx)(s.strong,{children:"Request Filtering"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(89996).c+"",width:"1114",height:"478"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Click ",(0,o.jsx)(s.strong,{children:"HTTP Verbs"})," and make sure the PUT and DELETE verbs are enabled."]}),"\n",(0,o.jsx)(s.p,{children:"In Windows Server 2016, make sure GET, POST and PUT verbs are enabled."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},89996:(e,s,n)=>{n.d(s,{c:()=>o});const o=n.p+"assets/images/Request-Filtering-5592a95a0dd128339dbcfcfc30e9b2a7.png"},4552:(e,s,n)=>{n.d(s,{I:()=>i,M:()=>l});var o=n(11504);const r={},t=o.createContext(r);function l(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);