"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[29480],{26108:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(17624),i=r(4552);const s={sidebar_position:1},t="Large Amount of Memory Used on Quali Server",l={id:"troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",title:"Large Amount of Memory Used on Quali Server",description:"Error Message",source:"@site/docs/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",permalink:"/cloudshell-help/next/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Older 3rd-party Installations Causing CloudShell Installation to Fail",permalink:"/cloudshell-help/next/troubleshooting/installation/older-3rd-party-installations-causing-cloudshell-installation-to-fail"},next:{title:"Set the Timeout Period for L1 Drivers",permalink:"/cloudshell-help/next/troubleshooting/quali-server/set-the-timeout-period-for-l1-drivers"}},a={},u=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"large-amount-of-memory-used-on-quali-server",children:"Large Amount of Memory Used on Quali Server"}),"\n",(0,n.jsx)(o.h2,{id:"error-message",children:"Error Message"}),"\n",(0,n.jsx)(o.admonition,{type:"danger-one-line",children:(0,n.jsx)(o.p,{children:"Quali Server is utilizing a large amount of memory"})}),"\n",(0,n.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(o.p,{children:["Quali Server (RAM) in ",(0,n.jsx)(o.strong,{children:"Windows Task Manager"}),", increases to an unexpectedly high level."]}),"\n",(0,n.jsx)(o.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"This is a memory leak caused by open sessions of activities that were not closed or recycled after use."}),"\n",(0,n.jsx)(o.li,{children:"There are paging or swapping configurations (in Windows) on the Quali Server machine."}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsx)(o.p,{children:"Paging or swapping (in Windows) is a virtual memory management scheme, in which a computer stores/retrieves data from secondary storage (hard disk space as ROM) for use by its main memory (RAM). As a result, the entire virtual memory management scheme of the Quali Server machine, will rely on its RAM, 100% of the time."})}),"\n",(0,n.jsx)(o.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"To resolve the memory leak issue described above, follow this step:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Consult your Technical Account Manager or Quali Support."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"To resolve the paging or swapping configuration issue described above, follow this step:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Enlarge the paging size (in Windows) to approximately 2 times the size of available RAM on the Quali Server machine."}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsx)(o.p,{children:"It is recommended that you refer to the Microsoft website for the most up-to-date instructions"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm",children:"Minimum Requirements for CloudShell Servers and Clients"})})]})}function c(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,o,r)=>{r.d(o,{I:()=>l,M:()=>t});var n=r(11504);const i={},s=n.createContext(i);function t(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);