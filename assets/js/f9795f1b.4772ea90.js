"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64814],{14364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=t(17624),r=t(4552);const s={sidebar_position:4},l="Blueprint Approval Policy",o={id:"intro/features/blueprint-approval-policy",title:"Blueprint Approval Policy",description:"Blueprint designers can configure certain blueprints to require approval before reservation. This is especially beneficial for high-cost or sensitive environments, as it adds an extra layer of control over their usage. If an end-user attempts to launch such a blueprint, an email notification is sent to the approval members, giving them the option to Accept or Reject the request.",source:"@site/versioned_docs/version-2023.3/intro/features/blueprint-approval-policy.md",sourceDirName:"intro/features",slug:"/intro/features/blueprint-approval-policy",permalink:"/cloudshell-help/intro/features/blueprint-approval-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/blueprint-approval-policy.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Apps Overview",permalink:"/cloudshell-help/intro/features/apps-overview"},next:{title:"Configuration Management Overview",permalink:"/cloudshell-help/intro/features/Configuration-Management"}},a={},p=[{value:"High-level flow",id:"high-level-flow",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"blueprint-approval-policy",children:"Blueprint Approval Policy"}),"\n",(0,i.jsx)(n.p,{children:"Blueprint designers can configure certain blueprints to require approval before reservation. This is especially beneficial for high-cost or sensitive environments, as it adds an extra layer of control over their usage. If an end-user attempts to launch such a blueprint, an email notification is sent to the approval members, giving them the option to Accept or Reject the request."}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"End-users cannot change the duration of approved sandboxes. However, admins can extend the duration."}),"\n",(0,i.jsxs)(n.li,{children:['Note that regular users can save a copy of the blueprint and bypass the request approval configuration. To prevent such occurrences, we strongly suggest using "External Extended" roles for end users. For details, see ',(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations#enabling-extended-permissions-for-external-users",children:"Enabling extended permissions for external users"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You can remove Blueprint Approval content from CloudShell Portal using the ",(0,i.jsx)(n.code,{children:"EnableApprovals"})," admin configuration key."]}),"\n",(0,i.jsx)(n.li,{children:"Approval blueprints can be used in the original and New Job Scheduling. However, they will be reserved as regular blueprints."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"high-level-flow",children:"High-level flow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Blueprint designer configures the blueprint as an approval blueprint and specifies its approval team (",(0,i.jsx)(n.strong,{children:"Blueprint > Properties"}),")."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4004).c+"",width:"381",height:"295"})}),"\n",(0,i.jsxs)(n.p,{children:["Blueprint's ",(0,i.jsx)(n.strong,{children:"Reserve"})," button is replaced with a ",(0,i.jsx)(n.strong,{children:"Request"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(23360).c+"",width:"467",height:"316"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"End-user submits an approval request."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A notification email is sent to the approval team, prompting them to either accept or reject the request."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(67196).c+"",width:"453",height:"351"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A member of the blueprint's approval team approves the request, optionally providing a comment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"End-user receives a notification email informing them their request was approved."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["End-user opens the ",(0,i.jsx)(n.strong,{children:"Sandboxes > Approval Requests"})," page and reserves the blueprint."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(62439).c+"",width:"1087",height:"418"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/blueprint-catalog",children:"Blueprint Catalog"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/blueprint-properties",children:"Define the Blueprint's Properties"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},67196:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ApproveReject-d691aa911071de5c8959e1bec082a3f8.png"},23360:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/RequestApprovalButton_467x316-b96d7ccfbe7ca2567d657a39d812b33e.png"},4004:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/RequiresApproval-e6198fd9193d8eff88c55f5773c37d90.png"},62439:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ReserveApprovalBlueprint-119ddb6c366622a362df3400a5dd1c66.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var i=t(11504);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);