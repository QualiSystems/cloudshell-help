"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[94768],{23516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(17624),l=t(4552);const s={sidebar_position:1},i="Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)",a={id:"install-configure/qualix/post-installation-config/configure-remote-access",title:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)",description:'This section explains how to enable end-users to create "full access" connections to their devices and VMs from resources, services and Apps in CloudShell sandboxes. To achieve this, you need to associate the QualiX machine with the remote access terminals you want to make available in CloudShell Portal. Note that Apache Guacamole uses two services, which are activated by default when installing QualiX Server - qualix-tomcat and qualix-guacd.',source:"@site/docs/install-configure/qualix/post-installation-config/configure-remote-access.md",sourceDirName:"install-configure/qualix/post-installation-config",slug:"/install-configure/qualix/post-installation-config/configure-remote-access",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/configure-remote-access",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/post-installation-config/configure-remote-access.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Post Installation Configuration",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/"},next:{title:"Configure VM Web Console Access to vCenter App VMs (QualiX)",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/configure-vm-web-console"}},r={},c=[{value:"Related Topics",id:"related-topics",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-remote-access-to-sandbox-components-using-ssh-rdp-telnet-vnc-qualix",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"\n",(0,o.jsxs)(n.p,{children:['This section explains how to enable end-users to create "full access" connections to their devices and VMs from resources, services and Apps in CloudShell sandboxes. To achieve this, you need to associate the QualiX machine with the remote access terminals you want to make available in CloudShell Portal. Note that Apache Guacamole uses two services, which are activated by default when installing QualiX Server - ',(0,o.jsx)(n.strong,{children:"qualix-tomcat"})," and ",(0,o.jsx)(n.strong,{children:"qualix-guacd"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To set up connections to vCenter App VMs using vCenter Console protocol, see ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm",children:"Configure VM Web Console Access to vCenter App VMs (QualiX)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In order to connect to a device or VM from CloudShell Portal, the resource of the element must include the User and Password attributes. To connect using a service, the service must include an Address. For details about adding such attributes, see ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Wrk-Rsc-Mng.htm",children:"Prepare and Reserve Blueprint"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["This article explains how to set up remote access connections to vCenter App VMs using QualiX' vCenter Console Proxy service and requires the ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm?Highlight=Configure%20Remote%20Access%20to%20Sandbox%20Components%20Using%20SSH,%20RDP,%20Telnet,%20VNC%20(QualiX)#Prerequi",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"})," listed below. For other VMs or resources, see ",(0,o.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm?Highlight=Configure%20Remote%20Access%20to%20Sandbox%20Components%20Using%20SSH,%20RDP,%20Telnet,%20VNC%20(QualiX)#",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To enable remote connection from CloudShell Portal:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In Quali server, open the following file in a text editor:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"C:\\ProgramData\\QualiSystems\\Settings\\Global\\ServerUniversalSettings.xml"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under the ",(0,o.jsx)(n.code,{children:'<ConfigurationSection name="LinkApplications">'})," tag, replace the lines of the relevant remote access terminals (Telnet, SSH, RDP, VNC) with the lines in this code sample:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<key name="Telnet" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;telnet{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=telnet&amp;port=23&amp;username={User}&amp;password={Password}" icon-key="Telnet" />\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<key name="SSH" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<key name="VNC" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;vnc{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=vnc&amp;port=5900&amp;username={User}&amp;password={Password}" icon-key="VNC" />\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"qtoken"})," & ",(0,o.jsx)(n.code,{children:"qid"})," keys are automatically filled out by the server and are related to CloudShell security enhancements. You do not need to configure anything related to these keys."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<CloudShell Portal Host>"})," with the CloudShell Portal hostname or DNS name, and ",(0,o.jsx)(n.code,{children:"<CloudShell Portal Port>"})," with the CloudShell Portal port."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"For remote connections to devices from CloudShell, the Portal server value (for example, Portal's IP) specified here must be the same one used to log into CloudShell. Using a different value, like the hostname, will prompt the sandbox end user to log into CloudShell again to access the device."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<VM IP>"})," with the IP of the QualiX Server or Docker swarm host machine (if deploying QualiX over Docker)."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To find the IP of the VM, at the system prompt, run the ",(0,o.jsx)(n.code,{children:"ifconfig"})," command. If you are using vSphere, VMware Tools also provides the machine's IP address (located in the vSphere Summary tab)."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For SSH connections: To enable file transfer to and from SSH terminals, add the ",(0,o.jsx)(n.code,{children:"enable-sftp=true"})," property to the SSH line. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<key name="SSH" pattern="http://localhost:80/Qx/connect?qualix=192.168.1.17&enable-sftp=true&qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Restart the ",(0,o.jsx)(n.strong,{children:"Quali Server"})," service to apply the changes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/enable-https/",children:"Enable HTTPS Connection Between QualiX and CloudShell Portal"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/config-jks-cert",children:"Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/post-installation-config/customize-remote-access",children:"Customize Remote Access Terminals"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/training-portal/setting-up-using-docker",children:"Setting up Training Portal Using Docker (Over the Shoulder)"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var o=t(11504);const l={},s=o.createContext(l);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);