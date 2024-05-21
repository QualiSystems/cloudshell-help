"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[54820],{23608:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=o(17624),n=o(4552);const s={sidebar_position:1},t="Large Amount of Memory Used on Quali Server",l={id:"troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",title:"Large Amount of Memory Used on Quali Server",description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",permalink:"/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/large-amount-of-memory-used-on-quali-server.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Older 3rd-party Installations Causing CloudShell Installation to Fail",permalink:"/troubleshooting/installation/older-3rd-party-installations-causing-cloudshell-installation-to-fail"},next:{title:"Set the Timeout Period for L1 Drivers",permalink:"/troubleshooting/quali-server/set-the-timeout-period-for-l1-drivers"}},a={},u=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"large-amount-of-memory-used-on-quali-server",children:"Large Amount of Memory Used on Quali Server"}),"\n",(0,i.jsx)(r.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsx)(r.admonition,{type:"danger-one-line",children:(0,i.jsx)(r.p,{children:"Quali Server is utilizing a large amount of memory"})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["Quali Server (RAM) in ",(0,i.jsx)(r.strong,{children:"Windows Task Manager"}),", increases to an unexpectedly high level."]}),"\n",(0,i.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"This is a memory leak caused by open sessions of activities that were not closed or recycled after use."}),"\n",(0,i.jsx)(r.li,{children:"There are paging or swapping configurations (in Windows) on the Quali Server machine."}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"Paging or swapping (in Windows) is a virtual memory management scheme, in which a computer stores/retrieves data from secondary storage (hard disk space as ROM) for use by its main memory (RAM). As a result, the entire virtual memory management scheme of the Quali Server machine, will rely on its RAM, 100% of the time."})}),"\n",(0,i.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To resolve the memory leak issue described above, follow this step:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Consult your Technical Account Manager or Quali Support."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To resolve the paging or swapping configuration issue described above, follow this step:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Enlarge the paging size (in Windows) to approximately 2 times the size of available RAM on the Quali Server machine."}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"It is recommended that you refer to the Microsoft website for the most up-to-date instructions"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/install-configure/cs-system-requirements/min-requirements-for-cs",children:"Minimum Requirements for CloudShell Servers and Clients"})})]})}function c(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,r,o)=>{o.d(r,{I:()=>l,M:()=>t});var i=o(11504);const n={},s=i.createContext(n);function t(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);