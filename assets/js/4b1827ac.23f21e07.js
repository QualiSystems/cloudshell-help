"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13244],{80204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(17624),r=t(4552);const s={sidebar_position:1},o="What are Python Virtual Environments?",l={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments",title:"What are Python Virtual Environments?",description:"This article discusses virtual environments for shells and scripts. For virtual environments created for New Job Scheduling jobs, see Setting Up a Test Repository.",source:"@site/docs/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/what-are-python-virtual-environments.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setting Up Python Virtual Environments",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/"},next:{title:"PyPi Server - Managing Python Shell and Script Dependencies",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies"}},a={},d=[{value:"Related Topics",id:"related-topics",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"what-are-python-virtual-environments",children:"What are Python Virtual Environments?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["This article discusses virtual environments for shells and scripts. For virtual environments created for New Job Scheduling jobs, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo",children:"Setting Up a Test Repository"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"A virtual environment is a folder containing the dependencies required by a particular Python shell driver or script that is running in CloudShell. This enables running different drivers and scripts with different dependencies simultaneously."}),"\n",(0,i.jsxs)(n.p,{children:["Therefore, whenever a Python driver or script runs in an execution server for the first time, CloudShell creates a new virtual environment in the execution server for that driver or script, and installs, in the virtual environment, the dependencies specified in the driver or script's ",(0,i.jsx)(n.code,{children:"requirements.txt"})," file. This virtual environment is used in subsequent runs of the driver or script on that execution server, which enables the execution of different drivers and scripts with different dependencies simultaneously."]}),"\n",(0,i.jsx)(n.p,{children:"However, if a newer version of the shell or script runs, or the same script is run with a different Python version, CloudShell will create a new virtual environment for the updated driver or script, but will only delete the old virtual environment when the execution server is restarted. The installation path of the virtual environment is:\xa0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On Windows: ",(0,i.jsx)(n.code,{children:"%PROGRAMDATA%\\QualiSystems\\venv"})]}),"\n",(0,i.jsxs)(n.li,{children:["On Linux: ",(0,i.jsx)(n.code,{children:"/usr/share/QualiSystems/venv/"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Using the driver or script for the first time on the execution server may take some setup time to create the new virtual environment and install the dependencies. The next time the same Python driver script is used, any new dependencies uploaded to the Python Package Index (PyPI) repository for this driver or script will be installed. Any existing dependencies will be reused without any changes (and will not require additional setup time). For details on how and when the Execution Server updates the venv, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#setting-the-virtual-environment-validity-period",children:"Setting the Virtual Environment validity period"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder",children:"Cleaning Up the Virtual Environments Folder"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);