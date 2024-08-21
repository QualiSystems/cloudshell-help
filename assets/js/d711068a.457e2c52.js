"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41409],{67814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(74848),o=i(28453);const r={sidebar_position:6},t="Configure an Execution Server Selector for AWS EC2",c={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",title:"Configure an Execution Server Selector for AWS EC2",description:"This article explains how to associate an Execution Server to AWS EC2 App deployments and command executions. To learn how to associate an Execution Server to resources, Apps and blueprints, see Setting Up Execution Servers to Run Commands.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2.md",tags:[],version:"2023.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Connect the Management VPC to Quali Server",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server"},next:{title:"Add an AWS EC2 Cloud Provider Resource",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource"}},l={},a=[];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configure-an-execution-server-selector-for-aws-ec2",children:"Configure an Execution Server Selector for AWS EC2"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["This article explains how to associate an Execution Server to AWS EC2 App deployments and command executions. To learn how to associate an Execution Server to resources, Apps and blueprints, see ",(0,s.jsx)(n.a,{href:"/2023.3/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The management VPC contains two Execution Servers: the ",(0,s.jsx)(n.strong,{children:"es-shells"})," Execution Server has a configured IAM role, which enables it to communicate with AWS and create the necessary elements, such as instances, networking etc. (as well as run any configuration management operations defined on the App), and the ",(0,s.jsx)(n.strong,{children:"es-commands"})," Execution Server is used to run custom code on the instances and has an empty IAM role, which restricts it from altering configurations on AWS services. The reason we have two Execution Servers is to ensure that custom code is launched in a safe and isolated manner, preventing misuse of the AWS account. As these are Linux Execution Servers, they do not support Suite executions."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"es-shells"})," Execution Server in CloudShell needs to be associated with the AWS EC2 cloud provider resource while the ",(0,s.jsx)(n.strong,{children:"es-commands"})," Execution Server needs to be associated with the deployed App's shell, allowing it to launch the shell's commands inside the sandbox VPC. This link is achieved by using an attributes that has the ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," rule."]}),"\n",(0,s.jsxs)(n.p,{children:["For information about managing, troubleshooting and upgrading Execution Servers on AWS, see ",(0,s.jsx)(n.a,{href:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers",children:"Managing AWS EC2 Execution Servers"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The below procedure assumes you're using the out-of-the-box ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," attribute. However, in order to use this attribute, you will need to assign it the ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," rule in Resource Manager Client's ",(0,s.jsx)(n.strong,{children:"Attributes"})," tab. For details, see ",(0,s.jsx)(n.a,{href:"/2023.3/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes#defining-attribute-rules",children:"Defining attribute rules"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure the Execution Server Selector attribute:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"CloudShell Portal"}),", configure the Execution Server:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Manage>Execution Servers>Servers"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"es-shells"})," Execution Server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"}),' check box and enter a unique value, such as "us-east-1-es1\u201d.']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(19357).A+"",width:"428",height:"153"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you are using a deployed App shell that has a custom driver, repeat the above process to configure the ",(0,s.jsx)(n.strong,{children:"es-commands"})," Execution Server with a different ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," value."]}),"\n",(0,s.jsxs)(n.p,{children:["To complete the link, in the App's ",(0,s.jsx)(n.strong,{children:"App Resource"})," page, specify the same value on the ",(0,s.jsx)(n.strong,{children:"Execution Server Selector"})," attribute."]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["If you are setting up AWS integration in High Availability mode, repeat this process for the backup Execution Servers (",(0,s.jsx)(n.strong,{children:"es-shells-b"})," and ",(0,s.jsx)(n.strong,{children:"es-commands-b"}),")."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",children:"Add an AWS EC2 Cloud Provider Resource"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19357:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);