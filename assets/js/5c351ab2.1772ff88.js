"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[95372],{79396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(17624),i=t(4552);const s={sidebar_position:1},l="Integrating AWS with Cloud-based CloudShell Installation",r={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",title:"Integrating AWS with Cloud-based CloudShell Installation",description:"It is possible to set up an AWS integration where CloudShell is Server is also installed on AWS.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create a Management VPC and Networks using CloudFormation",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/"},next:{title:"Create a Shared VPC using CloudFormation",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-shared-vpc-using-cloudformation"}},a={},d=[];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"integrating-aws-with-cloud-based-cloudshell-installation",children:"Integrating AWS with Cloud-based CloudShell Installation"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to set up an AWS integration where CloudShell is Server is also installed on AWS."}),"\n",(0,o.jsx)(n.p,{children:"The process is as follows"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Deploy the ",(0,o.jsx)(n.strong,{children:"Main.yaml"})," CloudFormation template. For details, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",children:"Create a Management VPC and Networks using CloudFormation"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Important:",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Make sure the ",(0,o.jsx)(n.strong,{children:"Network"})," parameter is set to either ",(0,o.jsx)(n.strong,{children:"NAT"})," or ",(0,o.jsx)(n.strong,{children:"Public"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If you're deploying a public network, make sure ",(0,o.jsx)(n.strong,{children:"VPN Attachment"})," is not set to ",(0,o.jsx)(n.strong,{children:"No VPN"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["From AWS Marketplace, deploy a ",(0,o.jsx)(n.strong,{children:"Windows Server 2019 English Full Base"})," instance called ",(0,o.jsx)(n.strong,{children:"cloudshell-server"})," that is connected to the Execution Servers subnet."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the instance's security group, set a rule to allow inbound RDP connections over IPv4 - see this ",(0,o.jsx)(n.a,{href:"http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/authorizing-access-to-an-instance.html",children:"article"})," for official instructions."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Log in to the Windows Server 2019 instance using Remote Desktop. To get the password, in the ",(0,o.jsx)(n.strong,{children:"EC2 Dashboard"}),", right-click the instance and select ",(0,o.jsx)(n.strong,{children:"Connect"}),", click ",(0,o.jsx)(n.strong,{children:"Get Windows Password"}),", browse to the keypair file you used in CloudFormation and select ",(0,o.jsx)(n.strong,{children:"Decrypt"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["On the instance, install the CloudShell suite that matches the CloudFormation template you are using. Make sure you install an execution server on this machine and configure it to run all sandbox orchestration scripts. For details, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands#controlling-execution-server-selection-for-blueprint-commands",children:"Controlling execution server selection for blueprint commands"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Stop and start the ",(0,o.jsx)(n.strong,{children:"es-shells"})," and ",(0,o.jsx)(n.strong,{children:"es-commands"})," instances to allow the execution servers to register Quali Server."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If for whatever reason they didn't register, manually connect each execution server to the CloudShell Server, as explained in ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers#connecting-the-execution-server-to-quali-server",children:"Connecting the Execution Server to Quali Server"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In CloudShell Portal, in the ",(0,o.jsx)(n.strong,{children:"Manage"})," dashboard, open the ",(0,o.jsx)(n.strong,{children:"Execution Servers>Servers"})," page and make sure the two execution servers registered successfully and are online."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var o=t(11504);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);