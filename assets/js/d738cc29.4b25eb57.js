"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57804],{71932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(17624),i=n(4552);const o={sidebar_position:3},r="Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)",l={id:"troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819",title:"Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)",description:"Error Message",source:"@site/docs/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819.md",sourceDirName:"troubleshooting/execution-servers",slug:"/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819",permalink:"/cloudshell-help/next/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup/Teardown scripts failed to run with exit code -1073741502",permalink:"/cloudshell-help/next/troubleshooting/execution-servers/setupteardown-scripts-failed-to-run-with-exit-code-1073741502"},next:{title:"Failed Windows venv build: Visual C++ Build Tools dependency",permalink:"/cloudshell-help/next/troubleshooting/execution-servers/venv-fails-to-build"}},d={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function a(e){const t={admonition:"admonition",br:"br",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"setupteardown-scripts-failed-with-exit-code---1073741819-c0000005-or-error-code-255",children:"Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)"}),"\n",(0,s.jsx)(t.h2,{id:"error-message",children:"Error Message"}),"\n",(0,s.jsx)(t.admonition,{title:"\xa0",type:"danger",children:(0,s.jsxs)(t.p,{children:["Faulting application name: python.exe, version: 0.0.0.0, time stamp: 0x5560ad83",(0,s.jsx)(t.br,{}),"\n","Faulting module name: python27.dll, version: 2.7.10150.1013, time stamp: 0x5560ad81",(0,s.jsx)(t.br,{}),"\n","Exception code: 0xc0000005",(0,s.jsx)(t.br,{}),"\n","Fault offset: 0x000f07c3"]})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"The execution of the sandbox's Setup/Teardown scripts failed. This is related to the Python version being used by the Setup/Teardown scripts (Python 2)."}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To resolve this issue:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Go to CloudShell Portal\u2019s ",(0,s.jsx)(t.strong,{children:"Manage>Scripts>Blueprint"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click the Setup script."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Change the ",(0,s.jsx)(t.strong,{children:"Type"})," to ",(0,s.jsx)(t.strong,{children:"Python 3"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Repeat steps 1-4 for the Teardown script."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Reserve the sandbox to verify."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);