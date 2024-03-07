"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1670],{26676:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=l(17624),t=l(4552);const o={sidebar_position:4},i="Upgrade Considerations for New Job Scheduling",r={id:"install-configure/cloudshell-suite/new-jss-install-config/update-considerations",title:"Upgrade Considerations for New Job Scheduling",description:"To upgrade the New Job Scheduling, run the helm upgrade command as explained in Deploy the New Job Scheduling Infrastructure using Helm.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/update-considerations.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config",slug:"/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/update-considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/update-considerations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Requirements (New Job Scheduling)",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/requirements"},next:{title:"High-level installation flow",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/"}},c={},u=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"upgrade-considerations-for-new-job-scheduling",children:"Upgrade Considerations for New Job Scheduling"}),"\n",(0,s.jsxs)(n.p,{children:["To upgrade the New Job Scheduling, run the ",(0,s.jsx)(n.code,{children:"helm upgrade"})," command as explained in ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-helm-install.htm",children:"Deploy the New Job Scheduling Infrastructure using Helm"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Before upgrading from earlier versions of the New Job Scheduling, do the following. Please note that you only need to do this once, so if you already upgraded to a previous version of the New Job Scheduling, just run the ",(0,s.jsx)(n.code,{children:"helm upgrade"})," command."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run this command on the Kubernetes client machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"kubectl delete secret cloudshell-acr -n cloudshell\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Starting with CloudShell 2021.2, the Kubernetes-based Mongo deployment is no longer exposed outside the Kubernetes cluster for security reasons. Therefore, if you're using Mongo hosted within the Kubernetes cluster you will no longer get an external IP for the Mongo cluster instance. If external access is required, the ",(0,s.jsx)(n.code,{children:"externalAccess"})," tag can be added under the Mongo configuration in the customer-values.yaml in the following way:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"mongodb:\n  enabled: true\n  externalAccess:\n    enabled: true\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>r,M:()=>i});var s=l(11504);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);