"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[33521],{22053:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var l=i(74848),s=i(28453);const t={sidebar_position:3},r="Create the Linux Execution Server from a Script",o={id:"install-configure/linux-virtual-appliance/installation-procedure/create-es-from-script",title:"Create the Linux Execution Server from a Script",description:"Online installation process (CentOS)",source:"@site/versioned_docs/version-2024.1/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-script.md",sourceDirName:"install-configure/linux-virtual-appliance/installation-procedure",slug:"/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-script",permalink:"/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-script",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-script.md",tags:[],version:"2024.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create VM using the qcow2 Image File (KVM)",permalink:"/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-qcow2"},next:{title:"Create Execution Server On Any Linux VM Using Docker",permalink:"/install-configure/linux-virtual-appliance/installation-procedure/create-es-from-docker"}},a={},c=[{value:"Online installation process (CentOS)",id:"online-installation-process-centos",level:2},{value:"Offline installation (CentOS, RedHat, Ubuntu)",id:"offline-installation-centos-redhat-ubuntu",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"create-the-linux-execution-server-from-a-script",children:"Create the Linux Execution Server from a Script"})}),"\n",(0,l.jsx)(n.h2,{id:"online-installation-process-centos",children:"Online installation process (CentOS)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Quali Server"}),"\n",(0,l.jsx)(n.li,{children:"Execution server script that matches your Quali Server version"}),"\n",(0,l.jsx)(n.li,{children:"Existing Linux CentOS 7.x VM"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To create the Linux execution server in an online environment:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Make sure you have the Linux execution server installation script in a temporary location. For details, see ",(0,l.jsx)(n.a,{href:"/install-configure/linux-virtual-appliance/linux-es-va-overview/download-es-va-image",children:"Downloading the Linux Virtual Appliance Image"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a Linux VM with a CentOS version that matches the script's version."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Using a file transfer client like WinSCP, upload the script to the VM's root folder."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If the VM is in offline mode, extract the ",(0,l.jsx)(n.strong,{children:"Offline Package Repository"})," zip file to the local PyPi Server repository. For details, see ",(0,l.jsx)(n.a,{href:"/admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the following command to allow the script to be executable."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"chmod +x cloudshell_es_install_script.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execute the script with the right parameters."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"./cloudshell_es_install_script.sh <CloudShell IP> <CloudShell User> <CloudShell Password> <ES Server Name>\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Next, ",(0,l.jsx)(n.a,{href:"/install-configure/linux-virtual-appliance/post-installation/log-into-the-vm",children:"Log into the VM"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"offline-installation-centos-redhat-ubuntu",children:"Offline installation (CentOS, RedHat, Ubuntu)"}),"\n",(0,l.jsx)(n.p,{children:"The offline installation script supports CentOS, RedHat and Ubuntu."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Prerequisites:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download server: Machine with an internet connection for downloading the execution server's script package and dependencies"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execution server: Offline machine with access to Quali Server and one of the following operating systems:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"RHEL/CentOS\xa08.x"}),"\n",(0,l.jsx)(n.li,{children:"Ubuntu 22.04"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Python installed on the VM or in the base image"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Latest stable Mono 6.12 version installaed on the VM (",(0,l.jsx)(n.a,{href:"https://www.mono-project.com/download/stable/#download-lin",children:"Download Mono"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create the following folder structure on the execution server machine:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/os_pkgs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/python_pkgs"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"To create the Linux execution server:"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"CloudShell Download Center"}),", find the appropriate ",(0,l.jsx)(n.strong,{children:"CloudShell Execution Server Offline Installation Package"})," and copy its URL."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Execution server and Quali Server must have the same version."})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the package to the download server."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget <CloudShell Execution Server Offline Installation Package URL> -O ExecutionServer.tar\n"})}),"\n",(0,l.jsxs)(n.p,{children:["And copy the package to the execution server's ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall"})," folder."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Make sure the execution server has either Python 2.7.18 and Python 3.9.9 installed. If it is missing, run the appropriate commands to download the appropriate package:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Python 2:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget https://www.python.org/ftp/python/2.7.18/Python-2.7.18.tgz\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Python 3:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"wget https://www.python.org/ftp/python/3.9.9/Python-3.9.9.tgz\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["And copy the ",(0,l.jsx)(n.code,{children:".tgz"})," Python files to the execution server's ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall"})," folder."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the appropriate packages:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"For RedHat/CentOS:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"yumdownloader --resolve yum-utils make mono-complete-5.16.0.220 gcc python2-devel python3-devel openssl-devel zlib zlib-devel libffi-devel python2-pip python3-pip\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"For Ubuntu:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"apt install --download-only build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev zlib* python-pip mono-complete=6.12.* -y\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Note that the Ubuntu packages will be located at ",(0,l.jsx)(n.code,{children:"/var/cache/apt/archives"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["And copy the packages to the execution server's ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall/os_pkgs"})," folder."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the appropriate Python packages to the download server."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Python 2:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"pip2 download pip==19.2.3\npip2 download virtualenv==20.13.0\npip2 download wheel==0.37.1\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Python 3:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"pip3 download pip==21.2.4\npip3 download virtualenv==20.13.0\npip3 download wheel==0.37.1\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["And copy the package to the execution server's ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall/python_pkgs"})," folder."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["On the execution server, navigate to the ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall"})," folder and run:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"./cloudshell_es_installation -s <Cloudshell Server> -u <Username> -p <Password> -n <ES Name> -o <rhel or ubuntu>\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Omit ",(0,l.jsx)(n.code,{children:"-n <ES Name>"})," to use the machine's hostname as the execution server's display name in CloudShell Portal."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["When the installation completes, you can optionally cleanup the ",(0,l.jsx)(n.code,{children:"/tmp/ExecutionServerInstall"})," folder or the download server altogether."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var l=i(96540);const s={},t=l.createContext(s);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);