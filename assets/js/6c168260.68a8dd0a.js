"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41144],{97212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=n(17624),i=n(4552);const r={sidebar_position:8},s='Error Connecting Remotely to a Device: "guacamole refused to connect"',c={id:"troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect",title:'Error Connecting Remotely to a Device: "guacamole refused to connect"',description:"Error Message",source:"@site/versioned_docs/version-2023.3/troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect.md",sourceDirName:"troubleshooting/qualix",slug:"/troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect",permalink:"/cloudshell-help/troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"QualiX: Incorrect Name for Resource Browser Title",permalink:"/cloudshell-help/troubleshooting/qualix/qualix-incorrect-name-for-resource-browser-title"},next:{title:"Cannot Connect via SSH to Ubuntu 22.04 Machines With Private Key",permalink:"/cloudshell-help/troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key"}},l={},a=[{value:"Error Message",id:"error-message",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"error-connecting-remotely-to-a-device-guacamole-refused-to-connect",children:'Error Connecting Remotely to a Device: "guacamole refused to connect"'}),"\n",(0,o.jsx)(t.h2,{id:"error-message",children:"Error Message"}),"\n",(0,o.jsxs)(t.admonition,{type:"danger-one-line",children:[(0,o.jsx)(t.p,{children:"This site can't be reached"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(98780).c+"",width:"683",height:"393"})})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"QualiX is unable to establish a remote connection to a device from CloudShell Portal."}),"\n",(0,o.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"To resolve the connection issue described above, follow these steps:"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"From the CloudShell Portal machine, ping the QualiX machine to verify the connection between the CloudShell Portal machine and the Qualix machine."}),"\n",(0,o.jsxs)(t.li,{children:["Log in to a different device on the same network, and do the following:","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Ping the target device to verify that the target device is running and resides on the same network."}),"\n",(0,o.jsx)(t.p,{children:"If this fails, contact your IT department to power on the target device, and connect it to the network."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Establish a remote connection to the target device to verify that the target device allows that type of connection."}),"\n",(0,o.jsx)(t.p,{children:"If this fails, contact your IT department to enable the desired connection to the target device."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Log in to the QualiX machine with your credentials, and do the following:","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Ping the target device to verify that there is a network route available to the target device."}),"\n",(0,o.jsx)(t.p,{children:"If this fails, contact your IT department to configure the network route."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Establish a remote. connection to the target device to verify that the QualiX machine can connect to the target device."}),"\n",(0,o.jsx)(t.p,{children:"If this fails, contact your IT department for assistance."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"To resolve the Remote Desktop Connection failure issue, follow this step:"})}),"\n",(0,o.jsx)(t.p,{children:"An RDP connection may use different security policies."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you cannot connect to QualiX with the RDP connection, verify that the key added to the ",(0,o.jsx)(t.code,{children:"ServerUniversalSettings.xml"})," file includes the following highlighted parameters:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=http&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />\n'})}),"\n",(0,o.jsxs)(t.p,{children:["For additional information, see ",(0,o.jsx)(t.a,{href:"/cloudshell-help/install-configure/qualix/post-installation-config/configure-remote-access",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},98780:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/Refused-Error-f7fb1a693b7ae970a821d23bd3cca1a0.png"},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>s});var o=n(11504);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);