"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52444],{98432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=n(17624),i=n(4552);const o={},s="Post Installation Configuration",a={id:"install-configure/qualix/post-installation-config/index",title:"Post Installation Configuration",description:"This section describes the configuration steps that are required after the first login to QualiX VM.",source:"@site/docs/install-configure/qualix/post-installation-config/index.md",sourceDirName:"install-configure/qualix/post-installation-config",slug:"/install-configure/qualix/post-installation-config/",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/post-installation-config/index.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Log into the QualiX Server VM",permalink:"/cloudshell-help/next/install-configure/qualix/log-into-qualix"},next:{title:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/configure-remote-access"}},r={},c=[{value:"In this chapter:",id:"in-this-chapter",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"post-installation-configuration",children:"Post Installation Configuration"}),"\n",(0,l.jsx)(t.p,{children:"This section describes the configuration steps that are required after the first login to QualiX VM."}),"\n",(0,l.jsxs)(t.p,{children:["In the configuration process, you set up the remote access terminals that tell CloudShell how to create the connections to the sandbox components. The terminals are defined in the Quali Server machine's ",(0,l.jsx)(t.code,{children:"ServerUniversalSettings.xml"})," file."]}),"\n",(0,l.jsx)(t.p,{children:"For example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-xml",children:'<key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />\n'})}),"\n",(0,l.jsx)(t.p,{children:"QualiX provides two methods for remote access connectivity (each has its own remote access terminals):"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Apache Guacamole provides access via RDP, SSH, Telnet and VNC."}),"\n",(0,l.jsxs)(t.li,{children:["QualiX\u2019 ",(0,l.jsx)(t.strong,{children:"VCenter Console Proxy"})," service provides access to vCenter App VMs using vCenter's VM Web Console."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"in-this-chapter",children:"In this chapter:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm",children:"Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm",children:"Configure VM Web Console Access to vCenter App VMs (QualiX)"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-SSL-Suprt.htm",children:"Enable HTTPS Connection Between QualiX and CloudShell Portal"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-jks-cert.htm",children:"Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cstmz-rmt-access-trmnl.htm",children:"Customize Remote Access Terminals"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Set-Static-IP.htm",children:"Set a Static IP for the QualiX VM"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Restrict-qualix-access-to-portals.htm",children:"Restrict QualiX Access to Specific CloudShell Portals"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Mdfy-no-CPUs-allctd-mem.htm",children:"Modify Number of CPUs and Allocated Memory"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Qualix-5.0.htm",children:"QualiX Configuration for Version 5.0 and up"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var l=n(11504);const i={},o=l.createContext(i);function s(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);