"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34058],{53820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=t(74848),i=t(28453);const o={sidebar_position:9},c="Cannot Connect via SSH to Ubuntu 22.04 Machines With Private Key",r={id:"troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key",title:"Cannot Connect via SSH to Ubuntu 22.04 Machines With Private Key",description:"Description",source:"@site/versioned_docs/version-2023.3/troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key.md",sourceDirName:"troubleshooting/qualix",slug:"/troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key",permalink:"/2023.3/troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/troubleshooting/qualix/cannot-connect-via-ssh-to-ubuntu-22.04-machines-with-private-key.md",tags:[],version:"2023.3",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:'Error Connecting Remotely to a Device: "guacamole refused to connect"',permalink:"/2023.3/troubleshooting/qualix/error-connecting-remotely-to-a-device-guacamole-refused-to-connect"},next:{title:"Unable to login to CloudShell Portal",permalink:"/2023.3/troubleshooting/cloudshell-portal/unable-to-login-to-cloudshell-portal"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cannot-connect-via-ssh-to-ubuntu-2204-machines-with-private-key",children:"Cannot Connect via SSH to Ubuntu 22.04 Machines With Private Key"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Connecting to an Ubuntu 22.04 VM with a private key using the SSH direct access link may fail."}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To resolve this issue:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Login to Ubuntu 22.04 machine."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit ",(0,s.jsx)(n.code,{children:"/etc/ssh/sshd_config"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the following line to the end of the config file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PubkeyAcceptedKeyTypes +ssh-rsa\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart ssh server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl restart ssh\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Or run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo echo -e "PubkeyAcceptedKeyTypes +ssh-rsa\\nHostKeyAlgorithms +ssh-rsa" >> /etc/ssh/sshd_config&&systemctl restart ssh\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To deploy an Ubuntu-22.04 AWS EC2 App:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create the script with the below content and place it in an S3 bucket or make it accessible from the deployed App's VM."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nsudo echo -e "PubkeyAcceptedKeyTypes +ssh-rsa\\nHostKeyAlgorithms +ssh-rsa" >> /etc/ssh/sshd_config&&systemctl restart ssh\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the App's ",(0,s.jsx)(n.strong,{children:"Deployment Paths"})," page, specify a link to the script in the ",(0,s.jsx)(n.strong,{children:"USER DATA URL"})," attribute."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);