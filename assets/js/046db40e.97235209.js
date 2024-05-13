"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[51488],{2132:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(17624),t=n(4552);const o={sidebar_position:2},i="Modify CloudShell to Use the Kubernetes-based Services",r={id:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell",title:"Modify CloudShell to Use the Kubernetes-based Services",description:"Once the New Job Scheduling infrastructure deployment completes, you need to do the following in order to configure CloudShell Server to use its components:",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow",slug:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Set the Mongo, Rabbit and Sandbox Services to Use Static IPs",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip"},next:{title:"Deploy the New Job Scheduling Infrastructure using Helm",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm"}},d={},c=[];function a(e){const l={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"modify-cloudshell-to-use-the-kubernetes-based-services",children:"Modify CloudShell to Use the Kubernetes-based Services"}),"\n",(0,s.jsx)(l.p,{children:"Once the New Job Scheduling infrastructure deployment completes, you need to do the following in order to configure CloudShell Server to use its components:"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Enable the Kubernetes cluster components to receive inbound communication from the Quali Server."}),"\n",(0,s.jsx)(l.li,{children:"Configure CloudShell to use these Kubernetes-based services instead of the out-of-the-box versions that are embedded in Quali Server"}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"To modify CloudShell to use the Kubernetes-based services:"})}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["Verify the External IP\xa0addresses of the ",(0,s.jsx)(l.code,{children:"sandbox-service-svc"})," and ",(0,s.jsx)(l.code,{children:"cloudshell-rabbitmq-ha"})," Kubernetes services. This can be achieved by running the following command:"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-python",children:"kubectl get svc -n cloudshell\n"})}),"\n",(0,s.jsxs)(l.p,{children:["From the below output example, you will need the ",(0,s.jsx)(l.strong,{children:"External IP"})," and ",(0,s.jsx)(l.strong,{children:"Port(s)"})," details for the above services:"]}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:n(41352).c+"",width:"958",height:"200"})}),"\n",(0,s.jsxs)(l.p,{children:["For more details about ",(0,s.jsx)(l.code,{children:"kubectl get"}),", see the official Kubernetes documentation at: ",(0,s.jsx)(l.a,{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get",children:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get"})]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Open the C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config file."}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Add the following keys and set the external IPs:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:'<add key="UseEmbeddedSandboxService" value="False"/>\n<add key="SandboxServiceHost" value="<sandbox-service-svc-external-ip>"/>\n<add key="SandboxServiceRestPort" value="<port-number>"/>\n<add key="RabbitHostname" value="<cloudshell-rabbitmq-ha-external-ip>"/>\n<add key="RabbitPort" value="<port-number>"/>\n'})}),"\n",(0,s.jsx)(l.p,{children:"For example:"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:'<add key="UseEmbeddedSandboxService" value="False"/>\n<add key="SandboxServiceHost" value="192.168.70.204"/>\n<add key="SandboxServiceRestPort" value="8888"/>\n<add key="RabbitHostname" value="192.168.70.201"/>\n<add key="RabbitPort" value="5671"/>\n'})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Save the file."}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"Rerun the Quali Server configuration wizard."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:l}={...(0,t.M)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},41352:(e,l,n)=>{n.d(l,{c:()=>s});const s=n.p+"assets/images/ExternalIps-9153fbcae54c4b2b29d09d10b9d4c832.png"},4552:(e,l,n)=>{n.d(l,{I:()=>r,M:()=>i});var s=n(11504);const t={},o=s.createContext(t);function i(e){const l=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:l},e.children)}}}]);