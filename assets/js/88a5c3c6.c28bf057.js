"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[160],{86660:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>r});var s=t(17624),i=t(4552);const n={sidebar_position:7},o="Restrict QualiX Access to Specific CloudShell Portals",a={id:"install-configure/qualix/post-installation-config/restrict-qualix-access",title:"Restrict QualiX Access to Specific CloudShell Portals",description:"Perform these steps to specify the CloudShell Portal machines that can access QualiX. This applies to CloudShell deployments where some of the portal machines reside in a different network and for security reasons, we don\u2019t want them to access QualiX.",source:"@site/docs/install-configure/qualix/post-installation-config/restrict-qualix-access.md",sourceDirName:"install-configure/qualix/post-installation-config",slug:"/install-configure/qualix/post-installation-config/restrict-qualix-access",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/restrict-qualix-access",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/qualix/post-installation-config/restrict-qualix-access.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Set a Static IP for the QualiX VM",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/set-static-ip-for-qualix"},next:{title:"Modify Number of CPUs and Allocated Memory",permalink:"/cloudshell-help/next/install-configure/qualix/post-installation-config/modify-cpu-and-ram"}},c={},r=[];function u(e){const l={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"restrict-qualix-access-to-specific-cloudshell-portals",children:"Restrict QualiX Access to Specific CloudShell Portals"}),"\n",(0,s.jsx)(l.p,{children:"Perform these steps to specify the CloudShell Portal machines that can access QualiX. This applies to CloudShell deployments where some of the portal machines reside in a different network and for security reasons, we don\u2019t want them to access QualiX."}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"To specify the CloudShell Portal hosts that can use QualiX:"})}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"SSH to Qualix server."}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.code,{children:"edit /opt/qualix/.guacamole/guacamole.properties"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Remove the following line:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"qualix-allow-auth-from: 0.0.0.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"To specify the IPs of the CloudShell Portal machines that can access QualiX, add the following line to the file:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"qualix-allow-auth-from: <CloudShell-Portal-ip1>,<CloudShell-Portal-ip2>\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Save and close file."}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Restart the ",(0,s.jsx)(l.strong,{children:"Qualix-tomcat"})," service:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-javascript",children:"systemctl restart qualix-tomcat.service\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:l}={...(0,i.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,l,t)=>{t.d(l,{I:()=>a,M:()=>o});var s=t(11504);const i={},n=s.createContext(i);function o(e){const l=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:l},e.children)}}}]);