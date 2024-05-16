"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[32040],{38188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(17624),o=i(4552);const r={sidebar_position:5},s="Connect the Management VPC to Quali Server",a={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server",title:"Connect the Management VPC to Quali Server",description:"To connect the Management VPC to Quali Server:",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create a Shared VPC using CloudFormation",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-shared-vpc-using-cloudformation"},next:{title:"Configure an Execution Server Selector for AWS EC2",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2"}},c={},l=[];function d(e){const n={a:"a",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connect-the-management-vpc-to-quali-server",children:"Connect the Management VPC to Quali Server"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To connect the Management VPC to Quali Server:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To prepare Quali Server, configure the connection between the Management VPC and Quali Server via VPN, and register the Execution Servers on Quali Server."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To complete the configuration, perform the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the AWS console and identify the Management VPC listed in the ",(0,t.jsx)(n.strong,{children:"VPN Connections"})," summary."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Management VPC\u2019s VPN connection created in ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",children:"Create a Management VPC and Networks using CloudFormation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Management VPC"})," and click ",(0,t.jsx)(n.strong,{children:"Download Configuration"})," according to the type of gateway you have on the Quali Server network side."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(52724).c+"",width:"782",height:"201"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the configuration information to configure VPN on the Quali Server network side."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure you have an active VPN."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To register the Execution Server instances on the Quali Server:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to your AWS console."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"EC2 Dashboard"}),", identify the two Execution Server instances associated with the Management VPC created when the Management VPC was created."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Reboot the Execution Server instances (",(0,t.jsx)(n.strong,{children:"es-shells"})," and ",(0,t.jsx)(n.strong,{children:"es-commands"}),"): right click the instance and select ",(0,t.jsx)(n.strong,{children:"Instance State>Reboot"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(98980).c+"",width:"813",height:"336"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Next, ",(0,t.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",children:"Configure an Execution Server Selector for AWS EC2"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},52724:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/AWSDeploymentTypeInstallation-a97629fcd978628c16f3b2e4a11b2120.png"},98980:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/CloudFormationRebootExecutionServers-0d9f051e67394c6f212f459cbb964049.png"},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>s});var t=i(11504);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);