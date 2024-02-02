"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3486],{3124:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=a(85893),o=a(11151);const t={sidebar_position:5},r="Sandbox Save and Restore Overview",d={id:"portal/sandboxes/sandbox-save-and-restore-overview",title:"Sandbox Save and Restore Overview",description:"This article introduces the Save and Restore paid add-on, which enables you to save an active sandbox and later restore the saved sandbox to work on.",source:"@site/docs/portal/sandboxes/sandbox-save-and-restore-overview.md",sourceDirName:"portal/sandboxes",slug:"/portal/sandboxes/sandbox-save-and-restore-overview",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-save-and-restore-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-save-and-restore-overview.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sandbox List View",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/sandbox-list-view"},next:{title:"Saved Sandboxes Dashboard",permalink:"/cloudshell-help/next/portal/sandboxes/saved-sandboxes/"}},i={},l=[{value:"What is a saved sandbox?",id:"what-is-a-saved-sandbox",level:2},{value:"Restore and delete saved sandboxes",id:"restore-and-delete-saved-sandboxes",level:2},{value:"Save and restore license",id:"save-and-restore-license",level:2},{value:"Recommended workflow",id:"recommended-workflow",level:2},{value:"Configuration and administration process",id:"configuration-and-administration-process",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sandbox-save-and-restore-overview",children:"Sandbox Save and Restore Overview"}),"\n",(0,s.jsxs)(n.p,{children:["This article introduces the ",(0,s.jsx)(n.strong,{children:"Save and Restore"})," paid add-on, which enables you to save an active sandbox and later restore the saved sandbox to work on."]}),"\n",(0,s.jsx)(n.p,{children:"This feature only supports sandboxes with virtual vCenter/OpenStack components, physical resources and CloudShell services. Persistent sandboxes and sandboxes that include Apps based on other cloud service providers are not yet supported."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Save and Restore"})," add-on is part of the Sandbox Lifecycle initiative, which will be expanded in the future to include additional flows and use cases."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-a-saved-sandbox",children:"What is a saved sandbox?"}),"\n",(0,s.jsx)(n.p,{children:"When saving an active sandbox, CloudShell creates a complete copy of the sandbox and its components. CloudShell services and resources are copied as is. If the sandbox contains deployed vCenter/OpenStack Apps, CloudShell creates (in the vCenter or OpenStack server), all the artifacts that will be required to restore the VMs. The saved sandbox is an independent copy of the original sandbox, and can be restored to multiple sandboxes. When deleting a saved sandbox, CloudShell deletes (from the vCenter or OpenStack server) all artifacts related to that saved sandbox and only then deletes the saved sandbox artifacts from CloudShell."}),"\n",(0,s.jsx)(n.p,{children:"For example, if you finished working on a sandbox, and would like to continue working on it later on, you can save the sandbox and return to it without losing any of your work."}),"\n",(0,s.jsx)(n.p,{children:"In addition, if you are working on a sandbox and would like to create a backup before committing a major change, you can save the sandbox, continue working and restore the backup when needed."}),"\n",(0,s.jsx)(n.h2,{id:"restore-and-delete-saved-sandboxes",children:"Restore and delete saved sandboxes"}),"\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.strong,{children:"My Saved Sandboxes"})," dashboard, you can view your saved sandboxes, and restore and delete a saved sandbox."]}),"\n",(0,s.jsx)(n.h2,{id:"save-and-restore-license",children:"Save and restore license"}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.strong,{children:"Save and Restore"})," is a CloudShell paid add-on, you are required to purchase a dedicated license (SaveRestore) to benefit from these capabilities. Please contact your account manager for details."]}),"\n",(0,s.jsx)(n.h2,{id:"recommended-workflow",children:"Recommended workflow"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Enable Save and Restore in a blueprint. See ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Prps.htm",children:"Define the Blueprint's Properties"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Blprnt-Ctlg.htm#Reserve",children:"Reserve a blueprint from the Catalog"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Sv.htm",children:"Save a Sandbox"})}),"\n",(0,s.jsxs)(n.li,{children:["Manage saved sandboxes in the ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Svd-Dshbrd.htm",children:"Saved Sandboxes Dashboard"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Rstr.htm",children:"Restore a Saved Sandbox"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Dlt.htm",children:"Delete a Saved Sandbox"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-and-administration-process",children:"Configuration and administration process"}),"\n",(0,s.jsx)(n.p,{children:"This feature does not require any specific configuration other than obtaining a license from your account manager."}),"\n",(0,s.jsx)(n.p,{children:"You can customize and manage certain aspects of the save and restore flow. For example, the admin can define the max saved sandboxes per user and configure certain aspects of the saving action in vCenter. The save and restore action logic is defined in orchestration scripts, similar to setup and teardown. These scripts can be customized according to your needs."}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Sv-Sndbx-Cnfg.htm#Setting",children:"Save Sandbox Configurations"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Sv-Sndbx-Cnfg.htm#Extendin",children:"Extending save and restore blueprint scripts"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var s=a(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);