"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[2152],{70396:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var o=s(17624),t=s(4552);const n={sidebar_position:4},l="Failed Windows venv build: Visual C++ Build Tools dependency",r={id:"troubleshooting/execution-servers/venv-fails-to-build",title:"Failed Windows venv build: Visual C++ Build Tools dependency",description:"Description",source:"@site/docs/troubleshooting/execution-servers/venv-fails-to-build.md",sourceDirName:"troubleshooting/execution-servers",slug:"/troubleshooting/execution-servers/venv-fails-to-build",permalink:"/cloudshell-help/next/troubleshooting/execution-servers/venv-fails-to-build",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/execution-servers/venv-fails-to-build.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup/Teardown scripts failed with exit code - 1073741819 (C0000005 or error code 255)",permalink:"/cloudshell-help/next/troubleshooting/execution-servers/setupteardown-scripts-failed-with-exit-code-1073741819"},next:{title:'Shell update error: "Failed to update shell"',permalink:"/cloudshell-help/next/troubleshooting/shells/shell-update-error"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"failed-windows-venv-build-visual-c-build-tools-dependency",children:"Failed Windows venv build: Visual C++ Build Tools dependency"}),"\n",(0,o.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(i.p,{children:["When running a shell command in a sandbox, CloudShell is unable to create the virtual environment for the shell's package dependencies on the execution server. The following line is included in the ",(0,o.jsx)(i.code,{children:"InstallRequirements.txt"})," log on the execution server:"]}),"\n",(0,o.jsx)(i.admonition,{type:"danger-one-line",children:(0,o.jsxs)(i.p,{children:['distutils.errors.DistutilsPlatformError: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": ',(0,o.jsx)(i.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"})]})}),"\n",(0,o.jsx)(i.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,o.jsx)(i.p,{children:"The appropriate Microsoft Visual C++ version is missing from the execution server."}),"\n",(0,o.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"To fix this issue:"})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Install Microsoft Visual C++ Build Tools 14 on the execution server machine."}),"\n",(0,o.jsxs)(i.li,{children:["Restart the ",(0,o.jsx)(i.strong,{children:"TestShell Execution Server"})," service."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,i,s)=>{s.d(i,{I:()=>r,M:()=>l});var o=s(11504);const t={},n=o.createContext(t);function l(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);