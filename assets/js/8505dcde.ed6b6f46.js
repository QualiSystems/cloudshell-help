"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69392],{76540:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=i(17624),o=i(4552);const l={},t="AWS Integration",r={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index",title:"AWS Integration",description:"The AWS deployment type integrates CloudShell with the AWS public cloud. This integration enables the deployment of CloudShell Apps in AWS. CloudShell supports deploying AWS instances from AMI (Amazon Machine Image) images.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Integration and Configuration",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/"},next:{title:"AWS Regions Supported by CloudShell",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/aws-regions-supported-by-cloudshell"}},d={},a=[{value:"AWS installation workflow",id:"aws-installation-workflow",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aws-integration",children:"AWS Integration"}),"\n",(0,s.jsx)(n.p,{children:"The AWS deployment type integrates CloudShell with the AWS public cloud. This integration enables the deployment of CloudShell Apps in AWS. CloudShell supports deploying AWS instances from AMI (Amazon Machine Image) images."}),"\n",(0,s.jsx)(n.p,{children:"CloudShell supports three infrastructure deployment modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dedicated VPC"})," mode: (Default) CloudShell deploys a new VPC and subnet(s) for each sandbox and deletes that VPC and related cloud resources when the sandbox ends. This mode is provided with CloudShell via the out-of-the box AWS shell. For details,"]}),"\n",(0,s.jsx)(n.p,{children:"The following diagram illustrates an AWS integration (with a local CloudShell installation) hosting two live sandboxes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(95648).c+"",width:"1239",height:"712"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Shared VPC"})," mode: CloudShell deploys the sandbox to an existing VPC. When the sandbox ends, the sandbox-deployed cloud resources such as subnets, instances and security groups are deleted from the cloud while the VPC remains. For details,"]}),"\n",(0,s.jsx)(n.admonition,{title:"Notes about Shared VPC:",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This mode is supported by the AWS EC2 2G shell, which needs to be downloaded separately from ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Applies to sandboxes based on AWS cloud provider resources that are configured to use Shared VPC mode."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"New subnet(s) are created in the shared VPC for each sandbox and deleted when the sandbox ends."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CloudShell creates 2 dedicated security groups per sandbox, which are used to isolate AWS instances from instances of other sandboxes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Shared VPCs can reside in different AWS accounts and different regions."}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"The following diagram illustrates an AWS integration with two different accounts, where each account has a shared VPC with live sandboxes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(48844).c+"",width:"1489",height:"1410"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Single"})," (Management VPC): CloudShell deploys the sandbox in the Management VPC, which was deployed as part of CloudShell's CloudFormation stack."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The deployment architecture in AWS requires a ",(0,s.jsx)(n.strong,{children:"Management VPC"})," to be created for each relevant AWS region. The Management VPC has 4 instances, which are always on:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("strong",{style:{color:"blue"},children:"QualiX"}),": QualiX Server used to enable in-browser RDP, Telnet and SSH access to Apps in the sandbox."]}),"\n",(0,s.jsxs)(n.li,{children:["Execution Servers: Two Execution Servers named ",(0,s.jsx)(n.strong,{children:"es-shells"})," and ",(0,s.jsx)(n.strong,{children:"es-commands"})," are deployed in the region and for High Availability Mode, an additional two fallback execution servers are deployed named ",(0,s.jsx)(n.strong,{children:"es-shells-b"})," and ",(0,s.jsx)(n.strong,{children:"es-commands-b"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"es-shells"}),": Execution server to be used for the deployment and management of the AWS instances. This execution server has access to AWS API and is associated with an AWS IAM role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"es-commands"}),": Execution server to be used for running scripts and commands on the AWS instances. This execution server is associated with an empty AWS IAM role."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NAT"}),": (Created in integrations where Quali Server IS NOT installed on AWS) Network address translation instance that enables internally deployed AWS instances to initiate outbound traffic to the Internet or other AWS services, while preventing the AWS instances from receiving inbound traffic from the Internet. Do not touch this instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cloudshell-server"}),": Created when deploying a public Main CloudFormation template without VPN. It's the user's responsibility to install Quali Server on this instance. For details, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",children:"Integrating AWS with Cloud-based CloudShell Installation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Keeping these instances running at all times entails a fixed monthly rate."})}),"\n",(0,s.jsxs)(n.p,{children:["Both the ",(0,s.jsx)(n.strong,{children:"es-shells"})," and ",(0,s.jsx)(n.strong,{children:"es-commands"})," execution servers in the Management VPC need to access the Quali Server, which is located outside of the Management VPC (on-premise, another AWS VPC or another public cloud). To allow this access, you need to configure a VPN between the Management VPC and the network in which the Quali Server resides."]}),"\n",(0,s.jsx)(n.p,{children:"When a new CloudShell sandbox with AWS EC2 Apps is starting, the out-of-the-box setup process creates a new VPC with a subnet in it (in shared mode, the sandbox subnet is created in an existing VPC defined in the AWS cloud provider resource). All AWS EC2 Apps within the same sandbox are deployed in this sandbox subnet (within the Sandbox VPC). This architecture allows both QualiX Server and the execution servers to access the Apps in the sandbox while keeping the Apps within one sandbox isolated from Apps in other sandboxes. Note that up to 255 AWS EC2 Apps may be deployed in a single sandbox."}),"\n",(0,s.jsx)(n.p,{children:"In dedicated VPC mode, the sandbox VPC is connected to the Management VPC using a VPC Peering connection. In shared VPC mode, there is no peering between the management VPC and shared VPC, and communication is done via a static transit gateway, which acts like a router between the different VPCs."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS EC2 Apps in the same sandbox are actually on the same subnet and VPC, and can interact with each other."}),"\n",(0,s.jsxs)(n.li,{children:["CloudShell allows sandboxes to have multiple subnets. See ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"When the sandbox ends, the Sandbox VPC along with all its components (the subnets, the App instances and the VPC Peering) are automatically deleted by CloudShell. In Shared VPC mode, the sandbox subnets and instances are deleted but the VPC infrastructure remains."}),"\n",(0,s.jsx)(n.li,{children:"In dedicated mode, when the sandbox ends, the Sandbox VPC along with all its components (subnets, App instances and the VPC peering) are automatically deleted by CloudShell. In shared mode, the subnets and App instances are deleted but the shared VPC remains."}),"\n",(0,s.jsxs)(n.li,{children:["Amazon API enables you to retrieve a sandbox's VPC name using the ",(0,s.jsx)(n.strong,{children:"ReservationId"})," tag with the sandbox's ID. This can be used, for example, in real-time automation processes."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"aws-installation-workflow",children:"AWS installation workflow"}),"\n",(0,s.jsx)(n.p,{children:"For each AWS region you want to integrate with CloudShell, perform the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",children:"Create a Management VPC and Networks using CloudFormation"})}),"\n",(0,s.jsxs)(n.p,{children:["In order to deploy a shared VPC integration where CloudShell sandboxes are deployed to an existing VPC, you need to also create a Shared VPC\xa0stack to define the AWS account and shared VPC to use, as explained in ",(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-shared-vpc-using-cloudformation",children:"Create a Shared VPC using CloudFormation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server",children:"Connect the Management VPC to Quali Server"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",children:"Configure an Execution Server Selector for AWS EC2"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",children:"Add an AWS EC2 Cloud Provider Resource"})}),"\n",(0,s.jsx)(n.p,{children:"For shared VPC mode, make sure to also configure the shared VPC parameters on the cloud provider resource."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template",children:"Add an AWS EC2 App Template"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-the-qualix-server-for-aws-ec2",children:"Configure the Qualix Server for AWS EC2"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/aws-regions-supported-by-cloudshell",children:"AWS Regions Supported by CloudShell"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/required-permissions-for-aws-deployment",children:"Required Permissions for AWS Deployment"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/cost-management-of-aws-ec2-instances",children:"Cost Management of AWS EC2 Instances"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/managing-aws-ec2-execution-servers",children:"Managing AWS EC2 Execution Servers"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},48844:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/AWS-Architecture---Shared-mode-ad84f68cfe0e702f6d73e337a4db73cb.png"},95648:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/AWS-architecture-ea0087acf0e348663711ca828136b3a4.png"},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>t});var s=i(11504);const o={},l=s.createContext(o);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);