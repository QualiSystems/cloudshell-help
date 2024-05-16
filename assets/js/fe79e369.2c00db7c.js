"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[7588],{4628:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var l=i(17624),s=i(4552);const t={sidebar_position:3},r="Configure the Linux Execution Server for Ansible",o={id:"install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible",title:"Configure the Linux Execution Server for Ansible",description:"To run Ansible configuration management on this Execution Server, several additional configurations are needed.",source:"@site/versioned_docs/version-2023.3/install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible.md",sourceDirName:"install-configure/linux-virtual-appliance/post-installation",slug:"/install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible",permalink:"/cloudshell-help/install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Example: How to Run the Configuration File",permalink:"/cloudshell-help/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file"},next:{title:"Start the Linux Execution Server",permalink:"/cloudshell-help/install-configure/linux-virtual-appliance/post-installation/start-the-es"}},a={},c=[];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"configure-the-linux-execution-server-for-ansible",children:"Configure the Linux Execution Server for Ansible"}),"\n",(0,l.jsx)(e.p,{children:"To run Ansible configuration management on this Execution Server, several additional configurations are needed."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Prerequisites:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Execution Server has the ",(0,l.jsx)(e.code,{children:"/ansible"})," flag enabled. For details, see ",(0,l.jsx)(e.a,{href:"/cloudshell-help/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file",children:"Example: How to Run the Configuration File"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"To configure the Execution Server to run Ansible:"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Install Ansible as globally available command line utility."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"python3 -m pip install ansible\n"})}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"To install in an offline environment:"})}),(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Download the offline dependencies from ",(0,l.jsx)(e.a,{href:"https://help.quali.com/help%20versions/attachments/PY39-linux-ansible-reqs-2.14.0.zip",children:"here"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Place them in the Quali Server offline repository:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Config\\Pypi Server Repository"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Run the following command:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"python3 -m pip install ansible --index-url=http://<QUALI_SERVER_IP>:8036/simple --trusted-host <QUALI_SERVER_IP>\n"})}),"\n",(0,l.jsx)(e.p,{children:"Replace <QUALI_SERVER_IP> with the IP of the machine containing the offline packages."}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"index-url"})," tells pip to download from local repo rather than public pypi, and ",(0,l.jsx)(e.strong,{children:"trusted-host"})," says you can trust this local server"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Verify install by running:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"ansible --version\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:i(21256).c+"",width:"1084",height:"216"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Install ",(0,l.jsx)(e.strong,{children:"pywinrm"})," into same python environment as global Ansible. This library is required by Ansible to connect to Windows Apps."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"python3 -m pip install pywinrm\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Install the ",(0,l.jsx)(e.strong,{children:"CentOS sshpass"})," module to allow password authentication to Apps."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"yum install sshpass\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},21256:(n,e,i)=>{i.d(e,{c:()=>l});const l=i.p+"assets/images/ansible-status-11c734bf88c52f74c05654d7959f8bff.png"},4552:(n,e,i)=>{i.d(e,{I:()=>o,M:()=>r});var l=i(11504);const s={},t=l.createContext(s);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);