"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73340],{41604:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var i=s(17624),l=s(4552);const t={sidebar_position:1},o="Modify the CloudShell Admin Password",r={id:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions/modify-cs-admin-pass",title:"Modify the CloudShell Admin Password",description:"For details about changing the Quali Server service's running user, see Changing the Running User on the Quali Server Service.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/modify-cs-admin-pass.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/admin-actions",slug:"/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/modify-cs-admin-pass",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/modify-cs-admin-pass",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/modify-cs-admin-pass.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"New Job Scheduling Administrative Actions",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-action"},next:{title:"Update the RabbitMQ Credentials in Kubernetes Environment",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/admin-actions/update-k8s-env"}},d={},a=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modify-the-cloudshell-admin-password",children:"Modify the CloudShell Admin Password"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"For details about changing the Quali Server service's running user, see"})," ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/change-service-user",children:"Changing the Running User on the Quali Server Service"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to change the CloudShell system administrator password, you must register the new password with the New Job Scheduling. If you don\u2019t do this, you will not be able to access the Job Scheduling Portal and REST API with this user."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This procedure only applies to deployments that use the New Job Scheduling. In CloudShell deployments without the New Job Scheduling, the password update is automatic."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This procedure assumes you are storing your passwords in plain text. However, you can use a Kubernetes secret instead, to safeguard your passwords as well as other sensitive data on the Kubernetes cluster. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",children:"Customize the Deployment Configuration Parameters"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To register the new admin password with the New Job Scheduling:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the Quali Server configuration wizard and set the new password. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/configure-products/admin-config-settings",children:"Admin Configuration Settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"~\\Server\\SndboxService\\Customer.yaml"})," file, and set the password:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"quali_server:\n    host: 'localhost'\n    port: 8029\n    password: <new-admin-password>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Include the following parameters in the ",(0,i.jsx)(n.code,{children:"customer.values.yaml"})," file with the new password:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"identity-service:\n  identityService:\n    env:\n      AppSettings__CloudShell__Password: <new-admin-password>\njob-scheduling-service:\n  jobSchedulingService:\n    env:\n      CloudShell__Password: <new-admin-password>\nsandbox-service:\n  sandboxService:\n    env:\n      SBS__QUALI_SERVER__PASSWORD: <new-admin-password>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Redeploy the CloudShell helm chart."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var i=s(11504);const l={},t=i.createContext(l);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);