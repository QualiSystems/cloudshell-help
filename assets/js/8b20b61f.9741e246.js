"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[64374],{66180:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(17624),i=n(4552);const o={sidebar_position:7},t="Quali Server Crash",l={id:"troubleshooting/quali-server/quali-server-crash",title:"Quali Server Crash",description:"Error Message",source:"@site/docs/troubleshooting/quali-server/quali-server-crash.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/quali-server-crash",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-crash",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/quali-server-crash.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Quali Server upgrade fails on Import Packages step",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-upgrade-fails-on-import-packages-step"},next:{title:"L1 functionality isn\u2019t working (2022.1 and above)",permalink:"/cloudshell-help/next/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function u(e){const r={admonition:"admonition",br:"br",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"quali-server-crash",children:"Quali Server Crash"}),"\n",(0,s.jsx)(r.h2,{id:"error-message",children:"Error Message"}),"\n",(0,s.jsx)(r.p,{children:"In CloudShell Portal:"}),"\n",(0,s.jsx)(r.admonition,{type:"danger-one-line",children:(0,s.jsx)(r.p,{children:"Service not available"})}),"\n",(0,s.jsx)(r.p,{children:"In Windows Event Viewer>Application (for crashes related to a MongoDB error):"}),"\n",(0,s.jsx)(r.admonition,{type:"danger-one-line",children:(0,s.jsxs)(r.p,{children:["Application: QsTeamServer.exe",(0,s.jsx)(r.br,{}),"\n","Framework Version: v4.0.30319",(0,s.jsx)(r.br,{}),"\n","Description: The process was terminated due to an unhandled exception.",(0,s.jsx)(r.br,{}),"\n","Exception Info: System.TimeoutExceptionat MongoDB.Driver.Core.Clusters.Cluster.ThrowTimeoutException(MongoDB.Driver.Core.Clusters.ServerSelectors.IServerSelector, MongoDB.Driver.Core.Clusters.ClusterDescription)",(0,s.jsx)(r.br,{}),"\n","at MongoDB.Driver.Core.Clusters.Cluster+WaitForDescriptionChangedHelper.HandleCompletedTask(System.Threading.Tasks.Task"]})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:'Quali Server stops working, resulting in unresponsive CloudShell applications or a "Service not available" indication message when attempting to log into CloudShell.'}),"\n",(0,s.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,s.jsx)(r.p,{children:"A Quali Server crash may be caused by:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"A bad connection"}),"\n",(0,s.jsx)(r.li,{children:"Database error - disconnect/timeout on MongoDB or a database failure in MSSQL"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Check Quali Server connectivity."}),"\n",(0,s.jsxs)(r.li,{children:["Restart ",(0,s.jsx)(r.strong,{children:"Quali Server"})," service."]}),"\n",(0,s.jsx)(r.li,{children:"Check database connectivity and functionality for Quali Server databases Mongo/MSSQL."}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>t});var s=n(11504);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);