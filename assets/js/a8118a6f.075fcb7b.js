"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[90216],{6788:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var n=s(17624),i=s(4552);const t={sidebar_position:3},o="Deploy the New Job Scheduling Infrastructure using Helm",c={id:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm",title:"Deploy the New Job Scheduling Infrastructure using Helm",description:"To install the Helm chart:",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow",slug:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Modify CloudShell to Use the Kubernetes-based Services",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell"},next:{title:"New Job Scheduling Administrative Actions",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-action"}},r={},h=[];function a(e){const l={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"deploy-the-new-job-scheduling-infrastructure-using-helm",children:"Deploy the New Job Scheduling Infrastructure using Helm"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To install the Helm chart:"})}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:["In a command-line terminal, navigate to the folder containing the CloudShell.tgz package you downloaded from ",(0,n.jsx)(l.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"Quali\u2019s Download Center"}),"."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-python",children:"cd <cloudshell-helm-charts-folder>\n"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"Deploy the Helm package using the customized parameters file:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-python",children:"helm upgrade --install cloudshell cloudshell.tgz -f customer.values.yaml --namespace cloudshell\n"})}),"\n",(0,n.jsx)(l.p,{children:"Where:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:'"cloudshell.tgz" is the name of the helm chart package'}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:'"customer.values.yaml" is the parameters file name'}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:['"cloudshell" is the name of the logical namespace in which the deployment will reside. To install CloudShell on the default namespace, remove ',(0,n.jsx)(l.code,{children:"--namespace cloudshell"})," flag from the command."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"The command output should look like this:"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:s(83667).c+"",width:"827",height:"123"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"To query the CloudShell services status:"})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Use kubectl, Kubernetes Dashboard or your preferred Kubernetes UI."}),"\n"]})]})}function d(e={}){const{wrapper:l}={...(0,i.M)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},83667:(e,l,s)=>{s.d(l,{c:()=>n});const n=s.p+"assets/images/HelmOutput-22b9cfcfc3224e78e60388038a57da22.png"},4552:(e,l,s)=>{s.d(l,{I:()=>c,M:()=>o});var n=s(11504);const i={},t=n.createContext(i);function o(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);