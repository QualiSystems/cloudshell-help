"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[30012],{37828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=i(17624),r=i(4552);const s={sidebar_position:8},t="L1 functionality isn\u2019t working (2022.1 and above)",o={id:"troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above",title:"L1 functionality isn\u2019t working (2022.1 and above)",description:"Description",source:"@site/docs/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above",permalink:"/cloudshell-help/next/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/troubleshooting/quali-server/l1-functionality-isn\u2019t-working-2022.1-and-above.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Quali Server Crash",permalink:"/cloudshell-help/next/troubleshooting/quali-server/quali-server-crash"},next:{title:"CloudShell RabbitMQ Service Fails to Start (erl.exe cannot access crypto.dll module)",permalink:"/cloudshell-help/next/troubleshooting/quali-server/cloudshell-rabbitmq-service-fails-to-start-erl-exe"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"l1-functionality-isnt-working-20221-and-above",children:"L1 functionality isn\u2019t working (2022.1 and above)"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"If you upgraded to CloudShell 2022.1 and above and your L1 isn\u2019t working, please follow these steps."}),"\n",(0,l.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To resolve this issue:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If you're using CloudShell 2022.1, create a symlink by doing the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'mklink /D "C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\python\\2.7.10" "C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\python\\2"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Make a backup of L1 driver folder ",(0,l.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Drivers\\%driver_name%"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open the L1 driver's folder."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete these folders:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Include"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Lib"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Scripts"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Tcl"})," located under ",(0,l.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Drivers\\%driver_name%"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open Windows Task Manager and end all running ",(0,l.jsx)(n.strong,{children:"python2"})," processes from the L1 driver folder"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Re-install the L1 driver by executing ",(0,l.jsx)(n.code,{children:"install_driver.bat"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Auto-load the new L1 resource in Resource Manager Client."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Make sure it works as expected. You can do this by clicking the ",(0,l.jsx)(n.strong,{children:"Sync from"})," button in the L1 resource's ",(0,l.jsx)(n.strong,{children:"Configuration"})," tab in Resource Manager Client - see ",(0,l.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-L1-Swch.htm#Switch-s",children:"Sync between the L1 switch and CloudShell"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>t});var l=i(11504);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);