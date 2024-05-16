"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59160],{97116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=t(17624),r=t(4552);const l={},i="Kubernetes Integration",o={id:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/index",title:"Kubernetes Integration",description:"The Kubernetes deployment type integrates CloudShell with Kubernetes. This integration enables the deployment of CloudShell Apps in self-hosted and cloud-managed Kubernetes containers. CloudShell supports deploying Kubernetes pods from images residing in the cluster's image registry.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/index.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/kubernetes-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Private Cloud Apps in Domains",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains"},next:{title:"Supported Cloud Providers for Kubernetes Integration",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/supported-cloud-providers-for-kubernetes-integration"}},d={},a=[{value:"Kubernetes installation workflow",id:"kubernetes-installation-workflow",level:2},{value:"Related Topics",id:"related-topics",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubernetes-integration",children:"Kubernetes Integration"}),"\n",(0,s.jsx)(n.p,{children:"The Kubernetes deployment type integrates CloudShell with Kubernetes. This integration enables the deployment of CloudShell Apps in self-hosted and cloud-managed Kubernetes containers. CloudShell supports deploying Kubernetes pods from images residing in the cluster's image registry."}),"\n",(0,s.jsx)(n.p,{children:"The following diagram illustrates an Kubernetes integration (with a local CloudShell installation) hosting two live sandboxes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(84172).c+"",width:"1648",height:"533"})}),"\n",(0,s.jsx)(n.p,{children:"CloudShell communicates with the Kubernetes cluster over the Kubernetes API to deploy and manage container instances as part of CloudShell sandboxes."}),"\n",(0,s.jsx)(n.p,{children:"When deploying a sandbox, CloudShell creates a Kubernetes deployment in a dedicated namespace for the sandbox. The deployment spins up 1 or more pods for each Kubernetes App (number of pods are defined in the App\u2019s settings) as well as services for exposing the internal and external ports defined in the App. A dedicated service is created for each port. For each internal port, a ClusterIP service is created, and for each external port, a LoadBalancer or NodePort service is created."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CloudShell does not manage Kubernetes App connectivity at this time. This can be done using the external and internal ports defined in the App."}),"\n",(0,s.jsx)(n.li,{children:"When the sandbox ends, the sandbox's namespace along with all its components are automatically deleted from the cluster."}),"\n",(0,s.jsxs)(n.li,{children:["The App's external IP is displayed in the VM Details pane. For details, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/apps/view-vm-details",children:"View an App's VM Details"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes-installation-workflow",children:"Kubernetes installation workflow"}),"\n",(0,s.jsx)(n.p,{children:"To integrate Kubernetes with CloudShell, perform the following steps:"}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{style:{backgroundColor:"#fff9c7"},children:(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{value:"1",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-cloud-provider-resource",children:"Add a Kubernetes Cloud Provider Resource"})})}),(0,s.jsx)("li",{value:"2",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/add-a-kubernetes-app-template",children:"Add a Kubernetes App Template"})})})]})})})})}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/kubernetes-prerequisites",children:"Kubernetes Prerequisites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/kubernetes-integration/supported-cloud-providers-for-kubernetes-integration",children:"Supported Cloud Providers for Kubernetes Integration"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},84172:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/KubernetesIntegrationArchitecture-6cf53da050bd29df6ecceec823269e47.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var s=t(11504);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);