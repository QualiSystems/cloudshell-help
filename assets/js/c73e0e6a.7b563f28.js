"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8310],{86069:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(85893),d=s(11151);const r={sidebar_position:3},i="Bugs Fixed",l={id:"release-notes/bug-fixes",title:"Bugs Fixed",description:"The table below lists all the bugs reported by customers, that were resolved in version 2023.2. All releases may include additional resolved issues, which are not included in this list.",source:"@site/docs/release-notes/bug-fixes.md",sourceDirName:"release-notes",slug:"/release-notes/bug-fixes",permalink:"/cloudshell-help/next/release-notes/bug-fixes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/release-notes/bug-fixes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What's New in Version 2023.2",permalink:"/cloudshell-help/next/release-notes/whats-new"},next:{title:"Behavior Changes and Removed Capabilities",permalink:"/cloudshell-help/next/release-notes/behavior-change"}},o={},c=[];function a(e){const t={h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bugs-fixed",children:"Bugs Fixed"}),"\n",(0,n.jsx)(t.p,{children:"The table below lists all the bugs reported by customers, that were resolved in version 2023.2. All releases may include additional resolved issues, which are not included in this list."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Support Case #"}),(0,n.jsx)(t.th,{children:"Internal WI #"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Fixed in Version"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"55499"}),(0,n.jsx)(t.td,{children:"12371"}),(0,n.jsx)(t.td,{children:'Sandbox Setup failed and returned the following error: "General Execution. Failed to start execution: Server is unavailable"'}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"55312"}),(0,n.jsx)(t.td,{children:"12262"}),(0,n.jsx)(t.td,{children:"Resources in blueprint are not displayed if there are too many sub-resources"}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"54496"}),(0,n.jsx)(t.td,{children:"12239"}),(0,n.jsx)(t.td,{children:'Suite fails with "does not have sufficient permissions to be the sandbox owner".'}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"54315"}),(0,n.jsx)(t.td,{children:"12027"}),(0,n.jsx)(t.td,{children:"CloudShell installation granted elevated privileges to Authenticated Users. The elevated privileges are rolled back automatically by the installation process when they're no longer needed."}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"52848"}),(0,n.jsx)(t.td,{children:"10909"}),(0,n.jsx)(t.td,{children:"Naming convention for New Job Scheduling suite executions is different from the old Job Scheduling"}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"52321"}),(0,n.jsx)(t.td,{children:"9975"}),(0,n.jsx)(t.td,{children:"Cannot delete deployed app after cloud provider resource has been deleted"}),(0,n.jsx)(t.td,{children:"2023.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"53004"}),(0,n.jsx)(t.td,{children:"10403"}),(0,n.jsx)(t.td,{children:"Handled an infrequent error in Testshell, which would cause tools to fail unexpectedly, and in particular would cause session-based tools to exit unexpectedly."}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"50993"}),(0,n.jsx)(t.td,{children:"9357"}),(0,n.jsx)(t.td,{children:"Copying sandbox data to clipboard would fail if certain characters were present in the data. For example '/n'."}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"53222"}),(0,n.jsx)(t.td,{children:"10700"}),(0,n.jsx)(t.td,{children:"Could not delete blueprint with resources containing attribute changes"}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"52650"}),(0,n.jsx)(t.td,{children:"10238"}),(0,n.jsx)(t.td,{children:"Cable Physical connection did not displayed properly"}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"52767"}),(0,n.jsx)(t.td,{children:"10442"}),(0,n.jsx)(t.td,{children:"GetReservationDetails would not show attributes for Apps, if they were attributes for a logical resource and were still with the default value."}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"53180"}),(0,n.jsx)(t.td,{children:"10617"}),(0,n.jsx)(t.td,{children:"Provide API capability to modify permitted editors on blueprints (In rare cases, calling GetTopologyDetails would fail with an unreadable error message)"}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"53470"}),(0,n.jsx)(t.td,{children:"10829"}),(0,n.jsx)(t.td,{children:"(Old and New Job Scheduling) Blueprint reservations were delayed by 5 minutes and as a result could not schedule test runs (CloudShell erroneously identified some of the blueprint's resources as being reserved, causing the tests to fail on reservation conflicts)"}),(0,n.jsx)(t.td,{children:"2023.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"52803"}),(0,n.jsx)(t.td,{children:"10126"}),(0,n.jsx)(t.td,{children:"(New Job Scheduling) Job execution got Automatically Canceled because test was not found"}),(0,n.jsx)(t.td,{children:"2023.1"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const d={},r=n.createContext(d);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);