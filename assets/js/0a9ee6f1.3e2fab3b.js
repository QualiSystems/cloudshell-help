"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[89034],{99197:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=s(74848),i=s(28453);const l={sidebar_position:1},o="Deploying a New Test Execution Service",c={id:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/deploy-new-tes",title:"Deploying a New Test Execution Service",description:"To deploy a new Test Execution Service:",source:"@site/versioned_docs/version-2024.1/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/deploy-new-tes.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management",slug:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/deploy-new-tes",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/deploy-new-tes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/deploy-new-tes.md",tags:[],version:"2024.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Execution Services Management",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/"},next:{title:"Viewing All Helm Chart Deployments",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/tes-management/view-helm-deployments"}},r={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploying-a-new-test-execution-service",children:"Deploying a New Test Execution Service"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To deploy a new Test Execution Service:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log on to the designated machine."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the following code into the ",(0,t.jsx)(n.code,{children:"customer.values.yaml"})," file (outside of the ",(0,t.jsx)(n.code,{children:"cloudshell-core"})," section):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"robot-test-execution-service:\n  name: test-execution-service1\n  env:\n    TES_SERVER_NAME: TES1\n    TES_API_HOST: test-execution-service1-svc\n    TES_CAPACITY: 200\n    TES_SERVER_DESCRIPTION: CloudShell's Execution Service\n  image:\n    tag: 1.0.0.116\n    pullSecret: cloudshell-acr\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can also take the code snippet from the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file residing in the official CloudShell version Helm chart package from ",(0,t.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"Quali\u2019s Download Center"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the settings accordingly."}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['You need to provide a unique name to the new Test Execution Service (in the above example: "test-execution-service1\u201d). This name will be used to identify the service in Kubernetes. Make sure to specify the same name in the ',(0,t.jsx)(n.code,{children:"TES_API_HOST"})," environment variable as well, followed by ",(0,t.jsx)(n.code,{children:"-svc"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Make sure to use the same image tag (in the above example: "1.0.0.116\u201d) as in the main CloudShell helm chart.'}),"\n",(0,t.jsxs)(n.li,{children:["It is possible to add additional environment variables to the list for additional customization, as listed in ",(0,t.jsx)(n.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/config-test-execution-service#parameters",children:"Parameters"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To create a new deployment, run the following from your command-line or terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"helm upgrade --install cloudshell cloudshell.tgz -f customer.values.yaml -namespace cloudshell\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tes1"})," is the name of the helm deployment. Provide an informative name"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cloudshell.tgz"})," is the name of the helm chart package"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);