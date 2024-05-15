"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6716],{76956:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(17624),s=t(4552);const r={sidebar_position:11},i="VM is not Powered off at the End of a Reservation",l={id:"troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation",title:"VM is not Powered off at the End of a Reservation",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation.md",sourceDirName:"troubleshooting/cloudshell-portal",slug:"/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/cloudshell-portal/vm-is-not-powered-off-at-the-end-of-a-reservation.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"VM is not Powered on at the Start of a Reservation",permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/vm-is-not-powered-on-at-the-start-of-a-reservation"},next:{title:'vCenter Resource Discovery Error: "Discovery failed for resource"',permalink:"/cloudshell-help/troubleshooting/cloudshell-portal/vcenter-resource-discovery-error-discovery-failed-for-resource"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"vm-is-not-powered-off-at-the-end-of-a-reservation",children:"VM is not Powered off at the End of a Reservation"}),"\n",(0,n.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(o.p,{children:"The VM is not automatically powered off by CloudShell at the end of the sandbox."}),"\n",(0,n.jsx)(o.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Your VM is a static VM."}),"\n",(0,n.jsx)(o.p,{children:"You can load a VM that exists in a vCenter Server (i.e. a static VM) into CloudShell, allowing CloudShell users to interact with it. Static VMs behave differently from Apps, whose VMs are deployed and torn down by CloudShell. Static VMs are always online because they are commonly used as shared resources and therefore CloudShell's default teardown script does not tear them down automatically when the sandbox ends."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Your blueprint's teardown operation is not configured correctly."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Your sandbox's teardown operation was not executed correctly. For example, teardown execution was stopped prematurely or didn't start due to a bad network connection, power outage or an issue with the execution server responsible for running the teardown operation."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"To power off a static VM:"})}),"\n",(0,n.jsx)(o.p,{children:"If the VM does not need to be online at all times, use an App whose VM lifecycles are managed by CloudShell, or modify the teardown script to power off the Static VM."}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["To support this modification, the generic vCenter Static VM shell includes the ",(0,n.jsx)(o.strong,{children:"Auto Power Off"})," attribute. This attribute is not used in this shell so you will need to implement it. See ",(0,n.jsx)(o.a,{href:"/cloudshell-help/devguide/develop-orch-scripts/cs-oob-orch/",children:"CloudShell's OOB Orchestration"}),"."]})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"To ensure that blueprint teardown operations are configured correctly, in the blueprint's Properties, verify the following:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"The correct teardown script is associated with the blueprint."}),"\n",(0,n.jsx)(o.p,{children:"If the blueprint is using a custom teardown script, make sure it is configured to power off the App's VMs."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.strong,{children:"Estimated teardown duration"})," property is not set to 0 minutes."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"To troubleshoot teardown execution issues:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Check the sandbox's ",(0,n.jsx)(o.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/system-messages/activity-feed-pane",children:"Activity Feed Pane"})," for teardown execution issues and fix accordingly."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/cloudshell-help/intro/features/static-vms",children:"Static VMs Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,o,t)=>{t.d(o,{I:()=>l,M:()=>i});var n=t(11504);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);