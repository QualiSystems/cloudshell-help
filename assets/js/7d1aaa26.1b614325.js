"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[72440],{12812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(17624),s=i(4552);const r={},l="Configure the Linux Execution Server",o={id:"install-configure/linux-virtual-appliance/post-installation/configure/index",title:"Configure the Linux Execution Server",description:"The steps described in this section need to be applied only once. The only mandatory values that are required for the configuration of the Execution Server (ES) are:",source:"@site/docs/install-configure/linux-virtual-appliance/post-installation/configure/index.md",sourceDirName:"install-configure/linux-virtual-appliance/post-installation/configure",slug:"/install-configure/linux-virtual-appliance/post-installation/configure/",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/linux-virtual-appliance/post-installation/configure/index.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Log into the VM",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/log-into-the-vm"},next:{title:"Example: How to Run the Configuration File",permalink:"/cloudshell-help/next/install-configure/linux-virtual-appliance/post-installation/configure/example-run-config-file"}},a={},c=[{value:"Useful commands",id:"useful-commands",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-the-linux-execution-server",children:"Configure the Linux Execution Server"}),"\n",(0,t.jsx)(n.p,{children:"The steps described in this section need to be applied only once. The only mandatory values that are required for the configuration of the Execution Server (ES) are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TeamMachine"}),"\n",(0,t.jsx)(n.li,{children:"Username"}),"\n",(0,t.jsx)(n.li,{children:"Password"}),"\n",(0,t.jsx)(n.li,{children:"Execution Server Name"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["For Ansible configuration management, the ",(0,t.jsx)(n.code,{children:"/ansible"})," flag needs to be enabled. See ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Exmpl-Run-Cnfg.htm",children:"Example: How to Run the Configuration File"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"However, you can optionally use other configuration parameters that are provided. You can use their default values or modify them. You may use as many of the configuration parameters as needed."}),"\n",(0,t.jsxs)(n.p,{children:["To display the usage of the ",(0,t.jsx)(n.code,{children:"QsExecutionServerConsoleConfig.exe"})," file, in command-prompt, navigate to the ",(0,t.jsx)(n.code,{children:"/root/ExecutionServer"})," folder (or ",(0,t.jsx)(n.code,{children:"opt/ExecutionServer"})," for Linux machines on Azure or AWS) and enter it at the command prompt, as depicted in the following image:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(28752).c+"",width:"565",height:"379"})}),"\n",(0,t.jsx)(n.p,{children:"Each of these parameters has a short form as well. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"mono QsExecutionServerConsoleConfig.exe /s:192.168.1.66 /u:admin /p:admin /esn:my-exec\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To install the Linux Execution Server in an offline environment, make sure the ",(0,t.jsx)(n.code,{children:"OfflinePackageRepository"})," zip file is extracted to the local PyPi Server repository. For details, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2",children:"Add the out-of-the-box dependencies package to the local PyPi Server repository"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Quali Server must be running when configuring the Execution Server."}),"\n",(0,t.jsx)(n.li,{children:"For TeamMachine, specify the Quali Server's private IP or DNS name."}),"\n",(0,t.jsxs)(n.li,{children:["Python drivers and scripts run on the Python installation that is provided by CloudShell at: ",(0,t.jsx)(n.code,{children:"/usr/local/bin/python"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: ",(0,t.jsx)(n.code,{children:'"admin1234!"'})]}),"\n",(0,t.jsx)(n.li,{children:"Suite execution is not available for Linux Execution Servers."}),"\n",(0,t.jsxs)(n.li,{children:["The CloudShell admin's credentials are specified in plain text. You can remove the credentials to enhance security. For details, see ",(0,t.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/prod-bst-prctc.htm#Executio",children:"Execution Servers"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To change the command slot capacity:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the Linux Execution's installation script at ",(0,t.jsx)(n.code,{children:"/etc/systemd/system/es.service"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Change the command slot capacity. For example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"ES_NUMBER_OF_SLOTS=10\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reload and restart the service."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo systemctl restart es\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To verify the service status:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo systemctl status es.service\n"})}),"\n",(0,t.jsx)(n.p,{children:'And make sure it is "active (running)":'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(22488).c+"",width:"1387",height:"439"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To restart the service:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo systemctl restart es\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To view installation logs and other useful information:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo cat /var/log/messages\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To view these logs in real time:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"sudo tail -f /var/log/messages\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To verify the installed version of the Execution Server:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cd opt/ExecutionServer\nsudo monodis --assembly QsExecutionServer.exe | grep Version\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28752:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Configuring-the-Execution_565x379-ec6e5673deccf65f009d6aac6cccde5a.png"},22488:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/active-status-54bf942d2ef7fead8365bac879678a2c.png"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var t=i(11504);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);