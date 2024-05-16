"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63876],{72144:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=n(17624),t=n(4552);const o={sidebar_position:2},i="Set the Mongo, Rabbit and Sandbox Services to Use Static IPs",a={id:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip",title:"Set the Mongo, Rabbit and Sandbox Services to Use Static IPs",description:'This article explains how to set static IPs for the CloudShell services in a local Kubernetes deployment. For cloud-managed Kubernetes "", and in the mongodb section, specify an empty array [].',source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment",slug:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Customize the Deployment Configuration Parameters",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params"},next:{title:"Modify CloudShell to Use the Kubernetes-based Services",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell"}},r={},c=[];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"set-the-mongo-rabbit-and-sandbox-services-to-use-static-ips",children:"Set the Mongo, Rabbit and Sandbox Services to Use Static IPs"}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsxs)(s.p,{children:["This article explains how to set static IPs for the CloudShell services in a local Kubernetes deployment. For cloud-managed Kubernetes: Specify empty values ",(0,l.jsx)(s.code,{children:'loadBalancerIP: ""'}),", and in the mongodb section, specify an empty array: ",(0,l.jsx)(s.code,{children:"loadBalancerIPs: []"}),"."]})}),"\n",(0,l.jsx)(s.p,{children:"Network providers such as Calico and MetalLB are used out-of-the-box to provide CloudShell's Kubernetes-based services with basic networking and to expose their external endpoints to the \u201coutside\u201d network. However, whenever one of these services is deleted and then recreated, there is a chance that the external address will change. To ensure this does not happen, make sure to set these CloudShell services to use static IPs."}),"\n",(0,l.jsx)(s.p,{children:"The services are:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Sandbox Service: Used by the Quali Server to start sandboxes."}),"\n",(0,l.jsx)(s.li,{children:"Mongo: Can be exposed for DB-related activities, such as debugging, remote access and maintenance."}),"\n",(0,l.jsx)(s.li,{children:"RabbitMQ: Used by Quali Server to relay messages to the Sandbox Service."}),"\n",(0,l.jsx)(s.li,{children:"Nginx Ingress: Allows external users to access the New Job Scheduling Portal, REST API and the REST API live documentation page."}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"To set static IPs for CloudShell services:"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"In the customer.values.yaml file, set the load balancer IP(s). Make sure to add any missing tags to code according to the following code examples:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Sandbox Service section:"})}),"\n",(0,l.jsxs)(s.p,{children:["Accessed by Quali Server and resides outside of the Kubernetes cluster on a Windows machine. ",(0,l.jsx)(s.code,{children:"loadBalancerIP"})," exposes and allocates an external IP using the installer L2 providers (for example MetalLB) used for the Sandbox Service."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"sandbox-service:\n  sandboxService:\n    service:    # external address (out of k8s) for the sandbox service\n      loadBalancerIP: 192.168.74.84\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"MongoDB section:"})}),"\n",(0,l.jsxs)(s.p,{children:["If Mongo is enabled in the Helm chart, use the ",(0,l.jsx)(s.code,{children:"loadBalancerIP"})," parameter to expose and allocate an external IP using the installer L2 providers (for example MetalLB) used for the MongoDB replicaset. The Quali Server can be configured to use this MongoDB instance."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:'mongodb:\n enabled: true\n externalAccess:\n  service:\n   loadBalancerIPs:# array of addresses, per the number of replicas to be used\n    - "192.168.74.45"\n    - "192.168.74.31"\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"RabbitMQ section:"})}),"\n",(0,l.jsxs)(s.p,{children:["Use the ",(0,l.jsx)(s.code,{children:"loadBalancerIP"})," parameter to expose and allocate an external IP using the installer L2 providers (for example MetalLB) used for the RabbitMQ cluster."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:'rabbitmq:\n enabled: true\n service:\n  loadBalancerIP: "192.168.74.78" # single address\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Nginx Ingress section:"})}),"\n",(0,l.jsx)(s.p,{children:"The ingress controller exposes port 80 by default. On top of the ingress controller, you can configure a certificate or SSO."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:'ingress-nginx:\n controller:\n  service:\n   loadBalancerIP: "192.168.74.8" # single address\n'})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Save the file."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Next, ",(0,l.jsx)(s.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm",children:"Deploy the New Job Scheduling Infrastructure using Helm"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>i});var l=n(11504);const t={},o=l.createContext(t);function i(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);