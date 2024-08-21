"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[86125],{64715:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(74848),s=n(28453);const o={sidebar_position:3},a="Key Points And Limitations",r={id:"install-configure/cs-insight-bi/key-points-and-limitations",title:"Key Points And Limitations",description:"- Insight dashboards require the logged in user to have an email defined in their user profile.",source:"@site/versioned_docs/version-2023.3/install-configure/cs-insight-bi/key-points-and-limitations.md",sourceDirName:"install-configure/cs-insight-bi",slug:"/install-configure/cs-insight-bi/key-points-and-limitations",permalink:"/2023.3/install-configure/cs-insight-bi/key-points-and-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cs-insight-bi/key-points-and-limitations.md",tags:[],version:"2023.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sisense BI Components",permalink:"/2023.3/install-configure/cs-insight-bi/sisense-bi-components"},next:{title:"Installing CloudShell Insight BI",permalink:"/2023.3/category/installing-cloudshell-insight-bi"}},l={},d=[];function c(e){const i={a:"a",h1:"h1",header:"header",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"key-points-and-limitations",children:"Key Points And Limitations"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Insight dashboards require the logged in user to have an email defined in their user profile."}),"\n",(0,t.jsx)(i.li,{children:"Utilization is only saved for connectable resources. Chassis or blade utilization is calculated according to the ports usage."}),"\n",(0,t.jsx)(i.li,{children:"Utilization requires CloudShell inventory to have at least one connectable resource."}),"\n",(0,t.jsxs)(i.li,{children:["Resource utilization is updated once a day at 1:00 AM, according to the time zone of the CloudShell database server. At this time, resource utilization data is calculated and stored in the CloudShell database. The data is then streamed to Sisense based on the Sisense ",(0,t.jsx)(i.a,{href:"/2023.3/install-configure/cs-insight-bi/install-insight/synchronization",children:"Synchronization"})," configuration."]}),"\n",(0,t.jsx)(i.li,{children:"Insight dashboards display resource utilization data in a resolution of every few seconds."}),"\n",(0,t.jsx)(i.li,{children:"Blueprint usage is determined according to the duration of sandboxes for the blueprint."}),"\n",(0,t.jsx)(i.li,{children:"Where resources are shared in multiple sandboxes, the usage of such resources can be higher than 24 hours in a day."}),"\n",(0,t.jsx)(i.li,{children:"Utilization is only saved for resources that are stored in the inventory."}),"\n",(0,t.jsx)(i.li,{children:"The Virtualization, Automation Suites and Automation Test dashboards require Sisense customization permissions. For details, contact your Quali Account Manager."}),"\n",(0,t.jsx)(i.li,{children:"Automation suites executions are available only for TestShell executions (there is no support for custom execution servers)."}),"\n",(0,t.jsxs)(i.li,{children:["Data related to Sandbox Save and Restore is stored and can be displayed in customized ",(0,t.jsx)(i.strong,{children:"Insight"})," dashboards."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(96540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);