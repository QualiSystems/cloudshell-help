"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[79e3],{5544:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=s(17624),i=s(4552);const r={sidebar_position:1},l="Customize the Deployment Configuration Parameters",d={id:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",title:"Customize the Deployment Configuration Parameters",description:"To customize the deployment parameters:",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment",slug:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Customize the Deployment of the New Job Scheduling Infrastructure",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/"},next:{title:"Set the Mongo, Rabbit and Sandbox Services to Use Static IPs",permalink:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip"}},o={},c=[{value:"Configuration parameters",id:"configuration-parameters",level:2},{value:"job-scheduling-service section",id:"job-scheduling-service-section",level:3},{value:"identity-service section",id:"identity-service-section",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"customize-the-deployment-configuration-parameters",children:"Customize the Deployment Configuration Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To customize the deployment parameters:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Download the official CloudShell Helm chart package that corresponds to your CloudShell version from ",(0,n.jsx)(t.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"Quali\u2019s Download Center"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Download this example parameter file: ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(70424).c+"",children:"sample.customer.values.yaml.zip"})," and extract it to the folder containing the ",(0,n.jsx)(t.code,{children:"CloudShell.tgz"})," package."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This parameter file configures the New Job Scheduling infrastructure deployment with the necessary values to connect to your CloudShell environment."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Customize the following mandatory parameters inside the ",(0,n.jsx)(t.code,{children:"customer.values.yaml"})," (parameter descriptions in the ",(0,n.jsx)(t.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params",children:"Configuration parameters"})," section that follows):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"cloudshell-core:\n  identity-service:\n    identityService:\n      env:\n        AppSettings__CloudShell__Host\n        AppSettings__CloudShell__Password\n  \n  job-scheduling-service:\n    jobSchedulingService:\n      env:\n        QualiPortal__Host\n        QualiPortal__Port\n        QualiPortal__Scheme\n        CloudShell__Host\n        CloudShell__Scheme\n        CloudShell__Password\n  \n  sandbox-service:\n    sandboxService:\n      env:\n        SBS__QUALI_SERVER__HOST\n        SBS__QUALI_SERVER__PASSWORD\n  \nrobot-test-execution-service:\n    env:\n      TES_SERVER_DESCRIPTION\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"(Optional) You can use Kubernetes secret values for any of the above parameters instead of plaintext values."}),"\n",(0,n.jsx)(t.p,{children:"For example,"}),"\n",(0,n.jsx)(t.p,{children:"Use the following configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"identity-service:\n  identityService:\n    secret_env:\n      - name: AppSettings__CloudShell__Password\n\t secretname: <kubernetes_secret_name>\n\t secretkey: <kubernetes_secret_key>\n"})}),"\n",(0,n.jsx)(t.p,{children:"For the following Kubernetes secret:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudshell-password\ndata:\n  password: SXR6aWtra2s=\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For details about Kubernetes secrets, see the official Kubernetes ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets",children:"documentation"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Next,"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-parameters",children:"Configuration parameters"}),"\n",(0,n.jsx)(t.p,{children:"The following configuration parameters are available for you."}),"\n",(0,n.jsx)(t.h3,{id:"job-scheduling-service-section",children:"job-scheduling-service section"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"MongoDB settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MainDbSettings__ConnectionString"})}),(0,n.jsxs)(t.td,{children:["Job Scheduling Service's MongoDB connection string.",(0,n.jsx)("br",{}),"Format: ",(0,n.jsx)(t.code,{children:"mongodb://<hostname>:<port>/?connectTimeoutMS=300000"}),(0,n.jsx)("br",{}),"Where ",(0,n.jsx)(t.code,{children:"<hostname>"})," is the hostname or IP address and ",(0,n.jsx)(t.code,{children:"<port>"})," is the MongoDB port (27018 by default)"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MainDbSettings__SuiteExecutionsDataRetentionInDays"})}),(0,n.jsx)(t.td,{children:"Time, in days, to keep suite execution history. Suite executions that occurred before the defined period will be removed from the database."}),(0,n.jsx)(t.td,{children:"30"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TestExecutionReportDbSettings__ConnectionString"})}),(0,n.jsx)(t.td,{children:"Set a different DB to use for the test execution reports. By default, the reports are saved to the Job Scheduling Service DB."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TestExecutionReportDbSettings__SuiteExecutionsDataRetentionInDays"})}),(0,n.jsx)(t.td,{children:"Time, in days, to keep test execution reports. Suite executions that occurred before the defined period will be excluded from the reports."}),(0,n.jsx)(t.td,{children:"30"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SuiteExecutionSettings__ValidateJobDataBeforeRun"})}),(0,n.jsxs)(t.td,{children:["Set to ",(0,n.jsx)(t.strong,{children:"true"})," to check that the job's tests and blueprint exist before execution."]}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"RabbitMQ service settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Configure this section if you want to use a different RabbitMQ service from the one that is installed with the Job Scheduling Service."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ConsumptionServiceSettings__Host__Address"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address of the RabbitMQ machine. For example: host.docker.internal"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ConsumptionServiceSettings__Host__UserName"})}),(0,n.jsxs)(t.td,{children:["RabbitMQ user",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," This user must be the same as the running user on the Quali Server service. For details, see Changing the Running User on the Quali Server Service."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ConsumptionServiceSettings__Host__Password"})}),(0,n.jsx)(t.td,{children:"RabbitMQ user's password"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ConsumptionServiceSettings__Host__Port"})}),(0,n.jsx)(t.td,{children:"RabbitMQ machine"}),(0,n.jsx)(t.td,{children:"5671"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Quali Server settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CloudShell__Host"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CloudShell__Port"})}),(0,n.jsx)(t.td,{children:"Port used by Job Scheduling Service to access Quali Server."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CloudShell__Username"})}),(0,n.jsx)(t.td,{children:"CloudShell admin user"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CloudShell__Password"})}),(0,n.jsx)(t.td,{children:"CloudShell admin password"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CloudShell__Scheme"})}),(0,n.jsxs)(t.td,{children:["Protocol for communication between Job Scheduling Service and Quali Server (",(0,n.jsx)(t.strong,{children:"http/https"}),")."]}),(0,n.jsx)(t.td,{children:"http"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Identity Server settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IdentityServer__Host"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IdentityServer__Port"})}),(0,n.jsx)(t.td,{children:"Port used by Job Scheduling Service to access Quali Server."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IdentityServer__Scheme"})}),(0,n.jsxs)(t.td,{children:["Protocol for communication with Quali Server (",(0,n.jsx)(t.strong,{children:"http/https"}),")."]}),(0,n.jsx)(t.td,{children:"http"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"CloudShell Portal settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"QualiPortal__Host"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"QualiPortal__Port"})}),(0,n.jsx)(t.td,{children:"Port used by Job Scheduling Service to access CloudShell Portal."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"QualiPortal__Scheme"})}),(0,n.jsxs)(t.td,{children:["Protocol for communication with Quali Server (",(0,n.jsx)(t.strong,{children:"http/https"}),")."]}),(0,n.jsx)(t.td,{children:"http"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"identity-service-section",children:"identity-service section"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Identity Service settings"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__IdentityServer__Host"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__IdentityServer__Port"})}),(0,n.jsx)(t.td,{children:"Port used by Job Scheduling Service to access Identity Service."}),(0,n.jsx)(t.td,{children:"5000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__IdentityServer__Scheme"})}),(0,n.jsxs)(t.td,{children:["Protocol for communication between Job Scheduling Service and Identity Service (",(0,n.jsx)(t.strong,{children:"http/https"}),")."]}),(0,n.jsx)(t.td,{children:"http"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__IdentityServer__ConnectionStrings"})}),(0,n.jsxs)(t.td,{children:["Identity Service's MongoDB connection string.",(0,n.jsx)("br",{}),"Format: ",(0,n.jsx)(t.code,{children:"mongodb://<hostname>:<port>/"}),(0,n.jsx)("br",{}),"Where ",(0,n.jsx)(t.code,{children:"<hostname>"})," is the hostname or IP address and ",(0,n.jsx)(t.code,{children:"<port>"})," is the MongoDB port (27019 by default)"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Quali Server details"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Username"})}),(0,n.jsx)(t.td,{children:"CloudShell admin user"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Password"})}),(0,n.jsx)(t.td,{children:"CloudShell admin password"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Space"})}),(0,n.jsx)(t.td,{children:"CloudShell domain to be used."}),(0,n.jsx)(t.td,{children:"Global"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Host"})}),(0,n.jsx)(t.td,{children:"Hostname or IP address."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Port"})}),(0,n.jsx)(t.td,{children:"Port used by Job Scheduling Service to access Quali Server."}),(0,n.jsx)(t.td,{children:"9000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AppSettings__CloudShell__Scheme"})}),(0,n.jsxs)(t.td,{children:["Protocol for communication between Job Scheduling Service and Quali Server (",(0,n.jsx)(t.strong,{children:"http/https"}),")."]}),(0,n.jsx)(t.td,{children:"http"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},70424:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/files/sample.customer.values.yaml-a6c709fac0e379074974d36c43990ad4.zip"},4552:(e,t,s)=>{s.d(t,{I:()=>d,M:()=>l});var n=s(11504);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);