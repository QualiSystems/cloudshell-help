"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[58e3],{95428:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var l=s(17624),o=s(4552);const i={sidebar_position:4},t="Upgrade Considerations for New Job Scheduling",r={id:"install-configure/cloudshell-suite/new-jss-install-config/update-considerations",title:"Upgrade Considerations for New Job Scheduling",description:"To upgrade the New Job Scheduling, run the helm upgrade command as explained in Deploy the New Job Scheduling Infrastructure using Helm.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/update-considerations.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config",slug:"/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/update-considerations.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Requirements (New Job Scheduling)",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/requirements"},next:{title:"High-level installation flow",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/"}},c={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"upgrade-considerations-for-new-job-scheduling",children:"Upgrade Considerations for New Job Scheduling"}),"\n",(0,l.jsxs)(n.p,{children:["To upgrade the New Job Scheduling, run the ",(0,l.jsx)(n.code,{children:"helm upgrade"})," command as explained in ",(0,l.jsx)(n.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/deploy-jss-with-helm",children:"Deploy the New Job Scheduling Infrastructure using Helm"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Before upgrading from earlier versions of the New Job Scheduling, do the following. Please note that you only need to do this once, so if you already upgraded to a previous version of the New Job Scheduling, just run the ",(0,l.jsx)(n.code,{children:"helm upgrade"})," command."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run this command on the Kubernetes client machine:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"kubectl delete secret cloudshell-acr -n cloudshell\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Starting with CloudShell 2021.2, the Kubernetes-based Mongo deployment is no longer exposed outside the Kubernetes cluster for security reasons. Therefore, if you're using Mongo hosted within the Kubernetes cluster you will no longer get an external IP for the Mongo cluster instance. If external access is required, the ",(0,l.jsx)(n.code,{children:"externalAccess"})," tag can be added under the Mongo configuration in the customer-values.yaml in the following way:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"mongodb:\n  enabled: true\n  externalAccess:\n    enabled: true\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>t});var l=s(11504);const o={},i=l.createContext(o);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);