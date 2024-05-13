"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[8932],{59324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=t(17624),i=t(4552);const o={sidebar_position:4},l="Configure the New Job Scheduling to Run in HTTPS",r={id:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https",title:"Configure the New Job Scheduling to Run in HTTPS",description:"Depending on your organization's security policy, you may want to have the New Job Scheduling Portal and REST API run over a secured connection.",source:"@site/docs/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions",slug:"/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-https.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Define Sandbox Creation Retries",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/sandbox-creation-retries"},next:{title:"Configure Single Sign-on (SSO) for the New Job Scheduling",permalink:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/config-sso"}},c={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-the-new-job-scheduling-to-run-in-https",children:"Configure the New Job Scheduling to Run in HTTPS"}),"\n",(0,s.jsx)(n.p,{children:"Depending on your organization's security policy, you may want to have the New Job Scheduling Portal and REST API run over a secured connection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure the New Job Scheduling Portal and REST API to run in HTTPS:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a Kubernetes TLS secret named ",(0,s.jsx)(n.strong,{children:"jss-tls"})," that contains the private key and public certificate for your computer domain name. For details, see this official Kubernetes documentation ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets",children:"page"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"kubectl create secret tls jss-tls --key ${KEY_FILE} --cert ${CERT_FILE}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following ",(0,s.jsx)(n.strong,{children:"ingress"})," and ",(0,s.jsx)(n.strong,{children:"ingress-nginx"})," sections to your ",(0,s.jsx)(n.code,{children:"customer.values.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'cloudshell-core:\n  job-scheduling-portal:\n    jobSchedulingPortal:\n      ingress:\n        tls:\n          enabled: true\n          hosts:\n            - portal_dns.com\n\n  ingress-nginx:\n    controller:\n      config:\n        force-ssl-redirect: "true"\n      extraArgs:\n        default-ssl-certificate: $(POD_NAMESPACE)/jss-tls\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the file and redeploy the helm chart, as explained in ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/JSS/jss-helm-install.htm",children:"Deploy the New Job Scheduling Infrastructure using Helm"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"All future HTTP traffic, by domain name and IP, should be redirected to HTTPS, as expected."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'When connecting to the New Job Scheduling Portal using its private IP address over HTTPS, the browser may return a "Certificate invalid" warning if the IP address has changed (dynamic IP). Skipping this warning should fix this issue as this will force the browser to redirect to the Portal\'s domain name.'})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var s=t(11504);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);