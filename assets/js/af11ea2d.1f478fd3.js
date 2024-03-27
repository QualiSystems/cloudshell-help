"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87468],{71536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(17624),r=t(4552);const s={sidebar_position:6},o="Cleaning Up the Virtual Environments Folder",l={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder",title:"Cleaning Up the Virtual Environments Folder",description:"CloudShell creates a new virtual environment in the installation path on the Execution Server whenever:",source:"@site/docs/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/cleaning-up-the-virtual-environments-folder.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Updating Python Dependencies for Shells, Drivers and Scripts",permalink:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells,-drivers-and-scripts"},next:{title:"Supported Cloud Providers in CloudShell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/"}},d={},a=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cleaning-up-the-virtual-environments-folder",children:"Cleaning Up the Virtual Environments Folder"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell creates a new virtual environment in the installation path on the Execution Server whenever:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A new or updated shell or script is being run in CloudShell"}),"\n",(0,i.jsxs)(n.li,{children:["(Applies to resource and orchestration scripts only) The same script is being run with a different Python version - defined in the ",(0,i.jsx)(n.strong,{children:"Manage - Scripts"})," page"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This takes up disk space as virtual environments of the older driver and script versions are retained. You can remove these older virtual environments to free up disk space."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"The installation paths are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On Windows: ",(0,i.jsx)(n.code,{children:"%PROGRAMDATA%\\QualiSystems\\venv"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On Linux: ",(0,i.jsx)(n.code,{children:"/usr/share/QualiSystems/venv/"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To remove unneeded virtual environments:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart the Execution Server."}),"\n",(0,i.jsx)(n.p,{children:"CloudShell will automatically clean up the unneeded virtual environments that were associated with previous driver and script versions."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);