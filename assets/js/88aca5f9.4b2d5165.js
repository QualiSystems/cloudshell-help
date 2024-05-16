"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[28220],{52156:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var i=o(17624),r=o(4552);const t={sidebar_position:4},l="Configuring CloudShell to Execute Python Commands in Offline Mode",s={id:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",title:"Configuring CloudShell to Execute Python Commands in Offline Mode",description:"When a Python driver or script runs in CloudShell, the Execution Server gets the Python packages from the local PyPi Server repository or downloads them from the online public PyPi repository (if they're missing from the local PyPi) and places them in the driver or script's virtual environment on the execution server.",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md",sourceDirName:"admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments",slug:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using a Proxy to Download Python Packages from Public PyPi",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi"},next:{title:"Updating Python Dependencies for Shells, Drivers and Scripts",permalink:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts"}},d={},a=[{value:"Add the out-of-the-box dependencies package to the local PyPi Server repository",id:"add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",level:2},{value:"Add Shell and script packages to the local PyPi Server repository",id:"add-shell-and-script-packages-to-the-local-pypi-server-repository",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuring-cloudshell-to-execute-python-commands-in-offline-mode",children:"Configuring CloudShell to Execute Python Commands in Offline Mode"}),"\n",(0,i.jsx)(n.p,{children:"When a Python driver or script runs in CloudShell, the Execution Server gets the Python packages from the local PyPi Server repository or downloads them from the online public PyPi repository (if they're missing from the local PyPi) and places them in the driver or script's virtual environment on the execution server."}),"\n",(0,i.jsxs)(n.p,{children:["PyPi Server is installed on the Quali Server machine and requires an internet connection, so if Quali Server and/or the execution servers work offline (i.e. do not have an internet connection), or the packages are missing from public PyPi, you will need to copy the required Python packages, including the out-of-the-box ones, to the local PyPi Server repository on the Quali Server computer. When a driver or script runs, the ",(0,i.jsx)(n.strong,{children:"PyPi Server"})," process running on the Quali Server computer will copy the required dependencies from this folder to the driver or script's virtual environment on the appropriate execution server. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies#loading-packages-to-your-pypi-server-repository",children:"Loading packages to your PyPi Server repository"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<PythonOfflineRepositoryPath>"})," configuration key that defines the local offline package folder has been deprecated in CloudShell 8.3. Therefore, when upgrading to CloudShell 8.3 and above, you will need to configure PyPi Server as the mechanism for serving Python dependencies to your Python drivers and scripts. For details, see this ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/upgrade-procedure/migrate-python-dependencies",children:"Migrate Python Dependencies to PyPi Server"}),". To learn more about PyPi Server, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"In this article (perform the procedures that are relevant for you):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#add-shell-and-script-packages-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"})," (required)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#add-shell-and-script-packages-to-the-local-pypi-server-repository",children:"Add Shell and script packages to the local PyPi Server repository"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This procedure applies to CloudShell deployments in which the Quali Server and/or the execution servers are offline and must be done when installing or upgrading CloudShell."})}),"\n",(0,i.jsxs)(n.p,{children:["Some native CloudShell operations require running Python code that uses certain Python packages. These include out-of-the-box CloudShell orchestration, App deployments on private cloud providers and configuration management operations. These dependencies are included in the ",(0,i.jsx)(n.code,{children:"OfflinePackageRepository.zip"})," package CloudShell provides with every CloudShell release."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add out-of-the-box dependencies to the local PyPi Server repository:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the extract the ",(0,i.jsx)(n.code,{children:"OfflinePackageRepository.zip"})," ",(0,i.jsx)(n.strong,{children:"Offline Package"})," zip file from ",(0,i.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247",children:"CloudShell Download Center"})," and extract it to the local PyPi Server repository (by default: ",(0,i.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Pypi Server Repository"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-shell-and-script-packages-to-the-local-pypi-server-repository",children:"Add Shell and script packages to the local PyPi Server repository"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This procedure applies to CloudShell deployments that are either offline or require the use of Python packages that are not in the public PyPi repository."})}),"\n",(0,i.jsx)(n.p,{children:"Shells and scripts running in CloudShell may also rely on packages in the public PyPi Python repository. Therefore, each time you add a Shell or script to CloudShell, to enable your offline execution servers to run this Shell or script, make sure to download its dependent packages and place them in the local PyPi Server repository as well."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add Python packages to the local PyPi Server repository (do this for each shell or script you add into CloudShell):"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"From an online computer, do one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Connect to the Internet and download each dependency specified in the ",(0,i.jsx)(n.code,{children:"requirements.txt"})," file with the following command:\xa0"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For Python 2 shells or scripts, use a Python 2.7.10 (and up) interpreter and for Python 3, use a 3.x interpreter. The Python version is defined in the shell's ",(0,i.jsx)(n.code,{children:"drivermetadata.xml"}),"'s ",(0,i.jsx)(n.code,{children:"PythonVersion"})," property and when editing the script in CloudShell Portal's ",(0,i.jsx)(n.strong,{children:"Manage>Assets"})," page."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pip download -r requirements.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Shell or script's requirements are downloaded as zip files."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"}),", locate the Shell and click the Shell's ",(0,i.jsx)(n.strong,{children:"Download"})," link. In the page that is displayed, from the ",(0,i.jsx)(n.strong,{children:"Downloads"})," area, extract the dependencies package zip file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Place these zip files in the local PyPi Server repository."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies",children:"PyPi Server - Managing Python Shell and Script Dependencies"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/updating-python-dependencies-for-shells-drivers-and-scripts",children:"Updating Python Dependencies for Shells, Drivers and Scripts"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>l});var i=o(11504);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);