"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[77584],{3588:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(17624),s=n(4552);const o={sidebar_position:3},t='PyPi Server process errors: "error installing dependencies"',l={id:"troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies",title:'PyPi Server process errors: "error installing dependencies"',description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies.md",sourceDirName:"troubleshooting/quali-server",slug:"/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies",permalink:"/cloudshell-help/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/quali-server/pypi-server-process-errors-error-installing-dependencies.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Set the Timeout Period for L1 Drivers",permalink:"/cloudshell-help/troubleshooting/quali-server/set-the-timeout-period-for-l1-drivers"},next:{title:"Quali Server upgrade fails in the Restart Service step",permalink:"/cloudshell-help/troubleshooting/quali-server/quali-server-upgrade-fails-in-the-restart-service-step"}},a={},c=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"pypi-server-process-errors-error-installing-dependencies",children:'PyPi Server process errors: "error installing dependencies"'}),"\n",(0,i.jsx)(r.h2,{id:"error-message",children:"Error Message"}),"\n",(0,i.jsx)(r.admonition,{type:"danger-one-line",children:(0,i.jsx)(r.p,{children:"Error: General Execution. Failed to start execution: Unexpected error \u2013 Failed to setup the Python environment, error installing dependencies. The PyPi server process might be down or inaccessible. See the documentation and logs for more details."})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"When attempting to run a Python command that requires an external package, CloudShell serves the package to the Execution Server as follows:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"The Execution Server downloads the package from the local PyPi Server repository on the Quali Server machine."}),"\n",(0,i.jsx)(r.p,{children:"or"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"If the package is missing from the local PyPi Server repository, Quali Server downloads it from the public PyPi repository and then serves it to the Execution Server."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"If CloudShell cannot access this package or is forced to use an incompatible version of it, the above error message is displayed."}),"\n",(0,i.jsx)(r.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"There is a firewall blocking port 443 over HTTPS (SSL port used by Quali Server/Execution Server to access the public Python repository)."}),"\n",(0,i.jsx)(r.li,{children:"The local PyPi Server failed to run or stopped running."}),"\n",(0,i.jsx)(r.li,{children:"There's an incompatible version of one or more of the shell or script's dependencies in the local PyPi repository and this is forcing the Execution Server to use that package."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(r.p,{children:"Before performing any of the following steps, please review the log files at the following location on the relevant execution server machine:"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"C:\\ProgramFiles(x86)\\QualiSystems\\TestShell\\ExecutionServer\\Logs\\QsPythonDriverHost\\InstallRequirements\\_XXXX.log"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To determine if there is a firewall blocking port 443:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"If the Python command you are trying to run requires access to a package from the public Python repository, verify that port 443 over HTTPS is open on the Quali Server and all execution server machines."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To investigate why the local PyPi Server failed to run:"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Check if the local PyPi Server is available by browsing to the Quali Server\u2019s local PyPi Server (both from the Quali Server itself, and from the Execution Server machine): ",(0,i.jsx)(r.code,{children:"http://<Quali-Server-IP-or-hostname>:8036"})]}),"\n",(0,i.jsx)(r.p,{children:'A "Welcome to pypiserver" page is displayed.'}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"If the page is not displayed, restart your local PyPi Server from CloudShell Monitor on the Quali Server machine."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["If you do not have online access, make sure all required packages are installed on your local PyPi Server. See ",(0,i.jsx)(r.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies#loading-packages-to-your-pypi-server-repository",children:"Loading packages to your PyPi Server repository"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["If you have a package on the local PyPI Server, but it is not the correct version according to the requirements of the Python shell or script, you will need to load the specific version as well, see ",(0,i.jsx)(r.a,{href:"/cloudshell-help/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies#special-considerations",children:"Special considerations"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"To fix an incompatible dependency issue:"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"In the sandbox workspace, open the Activity Feed and locate the command's error message."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Find the relevant Execution Server and open the latest ",(0,i.jsx)(r.strong,{children:"InstallRequirements"})," log on the Execution Server machine's ",(0,i.jsx)(r.strong,{children:"QaPythonDriverHost"})," folder (usually at ",(0,i.jsx)(r.code,{children:"C:\\Program Files (x86)\\QualiSystems\\TestShell\\ExecutionServer\\Logs\\QsPythonDriverHost"}),"):"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(91836).c+"",width:"1044",height:"210"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Look for a missing dependency error that looks something like this:"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"No matching distribution found for pynacl>=1.0.1 (from paramiko<2.7,>=2.6->cloudshell-cli>=4.0.1->-r C:\\Windows\\TEMP\\tmpD2BB.tmp (line 1))"})}),"\n",(0,i.jsxs)(r.p,{children:["This error tells us that ",(0,i.jsx)(r.strong,{children:"pynacl"})," is missing, but it was required by ",(0,i.jsx)(r.strong,{children:"paramiko"}),", which in turn was required by ",(0,i.jsx)(r.strong,{children:"cloudshell cli package"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Don\u2019t resolve dependencies one by one. Instead, go to the root and re-download all those dependencies. If there are duplicates in offline pypi already you can just skip copying them over."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"You can also force CloudShell to build a new virtual environment for the shell or script's execution. You can do this in two ways:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Updating the shell or script and rerunning the command. This forces CloudShell to build a new virtual environment on the Execution Server, downloading the required dependencies in the process."}),"\n",(0,i.jsx)(r.li,{children:"Restarting the Execution Server. A restart deletes all old virtual environments."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},91836:(e,r,n)=>{n.d(r,{c:()=>i});const i=n.p+"assets/images/InstallRequirementsFolder-cde44ab8e8b7dca59ddf914f875ac5a7.png"},4552:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>t});var i=n(11504);const s={},o=i.createContext(s);function t(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);