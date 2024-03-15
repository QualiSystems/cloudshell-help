"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[47944],{61492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=i(17624),t=i(4552);const r={sidebar_position:1},l="Example: How to Run the Configuration File",s={id:"install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file",title:"Example: How to Run the Configuration File",description:"In the /root/ExecutionServer folder (or opt/ExecutionServer for Linux machines on Azure or AWS), run the appropriate command:",source:"@site/docs/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file.md",sourceDirName:"install-configure/linux-virtual-appliance/post-installation/configure",slug:"/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configure the Linux Execution Server",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure/"},next:{title:"Configure the Linux Execution Server for Ansible",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure-linux-es-for-ansible"}},a={},c=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"example-how-to-run-the-configuration-file",children:"Example: How to Run the Configuration File"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"/root/ExecutionServer"})," folder (or ",(0,o.jsx)(n.code,{children:"opt/ExecutionServer"})," for Linux machines on Azure or AWS), run the appropriate command:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To use this Execution Server for general operations:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"mono QsExecutionServerConsoleConfig.exe /s:ServerAddress /u:User /p:Pass /esn:ESName\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"mono QsExecutionServerConsoleConfig.exe /s:192.168.30.56 /u:admin /p:admin /esn:ESName\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To use this Execution Server for Ansible configuration management operations, you need to set the /ansible flag, which tells CloudShell to use this Execution Server to run Ansible playbooks."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"mono QsExecutionServerConsoleConfig.exe /s:ServerAddress /u:admin /p:admin /esn:ExecutionServerName /ansible\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And perform the steps in the ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv-for-ansible.htm",children:"Configure the Linux Execution Server for Ansible"})," article that follows."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"If you have several Execution Servers that support Ansible but want to use a specific Execution Server for certain operations, use the Execution Server Selector attribute to associate the Execution Server to the appropriate cloud providers, or associate it to the Ansible shell to designate it globally for Ansible operations."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["First, set the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute with a value on the Execution Server."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"mono QsExecutionServerConsoleConfig.exe /s:192.168.35.41 /u:admin /p:admin /esn:ExecutionServerName /ansible /a:\"{'Execution Server Selector':'London'}\"\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You might need to attach the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," rule to the Execution Server Selector attribute. As explained in ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Assct-Rsrc-to-ES.htm#Creating",children:"Associating Resources to Specific Execution Servers"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Then, set the same ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," value specified in the ",(0,o.jsx)(n.strong,{children:"Execution Server Selector"})," attribute in the cloud provider resource and/or on ",(0,o.jsx)(n.strong,{children:"Resource Manager Client > Configuration Services > Ansible Configuration"})," service model. By default, CloudShell will use the Execution Server defined in the cloud provider resource. If it is not available, CloudShell will use the Execution Server defined in the ",(0,o.jsx)(n.strong,{children:"Ansible Configuration"})," model. Execution Servers specified on the deployed App shell/resource are not used for configuration management."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To run Ansible on App-deployed Windows VMs, WinRM must be enabled on those VMs. For additional information, see ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-Ansible-ES-Sprt.htm",children:"Configure Execution Server for Ansible"}),"."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>l});var o=i(11504);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);