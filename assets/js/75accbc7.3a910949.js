"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13952],{68328:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(17624),o=i(4552);const r={sidebar_position:5},s="Updating Python Dependencies for Shells, Drivers and Scripts",l={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",title:"Updating Python Dependencies for Shells, Drivers and Scripts",description:"This article explains how to update your local PyPi Server repository. This is required when you upgrade a Shell, driver or script that has new/updated dependencies. It applies to both online and offline dependencies.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configuring CloudShell to Execute Python Commands in Offline Mode",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode"},next:{title:"Cleaning Up the Virtual Environments Folder",permalink:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder"}},d={},c=[{value:"Updating offline Python dependencies",id:"updating-offline-python-dependencies",level:2},{value:"Updating online Python dependencies",id:"updating-online-python-dependencies",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"}),"\n",(0,t.jsx)(n.p,{children:"This article explains how to update your local PyPi Server repository. This is required when you upgrade a Shell, driver or script that has new/updated dependencies. It applies to both online and offline dependencies."}),"\n",(0,t.jsx)(n.h2,{id:"updating-offline-python-dependencies",children:"Updating offline Python dependencies"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To update offline Python dependencies:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make a backup copy of the PyPi Server repository folder so you have the option to revert back if any errors occur."}),"\n",(0,t.jsxs)(n.li,{children:["Download the latest Python dependencies package zip file locally and extract the zip file to the local PyPi Server repository. See ",(0,t.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Restart any execution server that has a live instance of the relevant driver or script. This requires running the Execution Server's configuration wizard - see ",(0,t.jsx)(n.a,{href:"/install-configure/cloudshell-suite/configure-products/config-execution-server",children:"Configure the Execution Server"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-online-python-dependencies",children:"Updating online Python dependencies"}),"\n",(0,t.jsx)(n.p,{children:"In online mode, the PyPi Server process automatically downloads and extracts the appropriate dependencies file to the driver or script's virtual environment every time a new instance of the driver or script is created."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To update online Python dependencies:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If there is a live instance of the driver or script, restart the execution server to delete the instance, as explained above. The next time a command of the driver or script is executed, PyPi Server will download the Python dependencies."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>s});var t=i(11504);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);