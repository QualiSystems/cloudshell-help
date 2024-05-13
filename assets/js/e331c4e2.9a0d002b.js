"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[98518],{89392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=n(17624),i=n(4552);const l={sidebar_position:3},c="Scaling up and down Test Execution Services in Kubernetes Environment (via Stateful Sets)",o={id:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/scale-up",title:"Scaling up and down Test Execution Services in Kubernetes Environment (via Stateful Sets)",description:"CloudShell's Helm deployment package is designed to allow admins to easily spin up Test Execution Services using a Kubernetes StatefulSet.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/scale-up.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/scale-up",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/scale-up",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/scale-up.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Viewing All Helm Chart Deployments",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/view-helm-deployments"},next:{title:"Test Repository Configuration",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config"}},r={},a=[{value:"Scaling up Test Execution Services",id:"scaling-up-test-execution-services",level:2},{value:"Scaling down Test Execution Services",id:"scaling-down-test-execution-services",level:2}];function u(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"scaling-up-and-down-test-execution-services-in-kubernetes-environment-via-stateful-sets",children:"Scaling up and down Test Execution Services in Kubernetes Environment (via Stateful Sets)"}),"\n",(0,s.jsx)(t.p,{children:"CloudShell's Helm deployment package is designed to allow admins to easily spin up Test Execution Services using a Kubernetes StatefulSet."}),"\n",(0,s.jsx)(t.p,{children:"Out of the box, installing theHelm deployment on a Kubernetes cluster deploys the Test Execution Service StatefulSet containing a single Test Execution Service instance (pod) associated with it. However, admins can choose to scale up or down the Stateful Set to increase the number of available Test Execution Services the system can utilize."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Scaling up the Test Execution Servers StatefulSet can be done using the Kubernetes CLI or using the Kubernetes UI, which is discussed below."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Prerequisites"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"2023.3 GA Helm package"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"scaling-up-test-execution-services",children:"Scaling up Test Execution Services"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Stateful Sets"})," area, select the ",(0,s.jsx)(t.strong,{children:"Test Execution Service"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From the more options button on the right, select ",(0,s.jsx)(t.strong,{children:"Scale"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(44828).c+"",width:"1060",height:"233"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Specify the ",(0,s.jsx)(t.strong,{children:"Desired replicas"})," and click ",(0,s.jsx)(t.strong,{children:"Scale"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(44332).c+"",width:"669",height:"247"})}),"\n",(0,s.jsx)(t.p,{children:"New Test Execution Services are created and registered to the Job Scheduling."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"scaling-down-test-execution-services",children:"Scaling down Test Execution Services"}),"\n",(0,s.jsx)(t.p,{children:"If you no longer need certain replicas, it is possible to scale down the StatefulSet to a lower number."}),"\n",(0,s.jsx)(t.p,{children:"Note that scaling down removes the pods from Kubernetes but does not delete the Test Execution Servers from the Job Scheduling Portal. The deleted Test Execution Sevices will be set to \u201cOffline\u201d and will not execute new tests."})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},44332:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/KubernetesDesiredReplicas-f74ac1ad99bef4e4d71a0321d0884fb7.png"},44828:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/KubernetesSatefulSets-59abb56342b7073982c3c9467ecbfa45.png"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var s=n(11504);const i={},l=s.createContext(i);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);