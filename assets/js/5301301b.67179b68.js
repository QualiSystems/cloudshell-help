"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[89376],{85259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(17624),s=t(4552);const r={},o="Create a Management VPC and Networks using CloudFormation",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/index",title:"Create a Management VPC and Networks using CloudFormation",description:"The CloudFormation service creates the Management VPC, subnet within the Management VPC, and then launches three AWS EC2 instances, two with an execution server and one with QualiX. The execution servers then need to be configured to access the on-prem Quali Server. To set up a deployment where Quali Server is also installed on AWS, see Integrating AWS with Cloud-based CloudShell Installation.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/index.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Required Permissions for AWS Deployment",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/required-permissions-for-aws-deployment"},next:{title:"Integrating AWS with Cloud-based CloudShell Installation",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell"}},a={},d=[];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-a-management-vpc-and-networks-using-cloudformation",children:"Create a Management VPC and Networks using CloudFormation"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"CloudFormation"})," service creates the Management VPC, subnet within the Management VPC, and then launches three AWS EC2 instances, two with an execution server and one with QualiX. The execution servers then need to be configured to access the on-prem Quali Server. To set up a deployment where Quali Server is also installed on AWS, see ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",children:"Integrating AWS with Cloud-based CloudShell Installation"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important:",type:"note",children:(0,i.jsxs)(n.p,{children:["We strongly recommend using the new and improved ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/1695",children:"AWS 2nd Gen shell"}),". If you're using the 1",(0,i.jsx)("sup",{children:"st"})," Gen version of the shell that comes out of the box with CloudShell, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2021.1/Portal/Content/Admn/VPC-Crt-Mng-VPC-Ntwrks.htm",children:"this version"})," of the online help."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To create a Management VPC and the required networks:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Make sure you have the information required for this process, as listed in ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/required-permissions-for-aws-deployment",children:"Required Permissions for AWS Deployment"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['As an admin, open your AWS management account, search for "cloudformation" and click the ',(0,i.jsx)(n.strong,{children:"CloudFormation"})," service."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6e4).c+"",width:"1201",height:"369"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Create Stack"})," drop-down list and select ",(0,i.jsx)(n.strong,{children:"With new resources (standard)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create stack"})," page, specify the appropriate Quali template. There are two template URLs for AWS integration and they are provided in ",(0,i.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"CloudShell Download Center"})," for each CloudShell release version:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0_Main.yaml"}),": Deploys the cloud infrastructure that is needed for the deployment type of your choice - internal or external deployments. This includes the management VPC and a peering to your local network's gateway for external deployments where Quali Server is installed locally. In this mode, a sandbox VPC is created for each sandbox."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In an internal deployment, the QualiX instance has only a Private IP associated with it. The Private IP is accessible from the networks that are connected to the Management VPC (such as the network in which the Quali Server resides)."}),"\n",(0,i.jsx)(n.li,{children:"In an external deployment, the QualiX instance has a Public IP associated with it."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3_Shared_VPC.yaml"}),": Is optionally deployed after the ",(0,i.jsx)(n.strong,{children:"0_Main.yaml"})," and enables you to define an existing VPC that will host the cloud infrastructure (instead of creating a new sandbox VPC for each sandbox). Defines the shared VPC's account, IP ranges and transit gateway. For details, see ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-shared-vpc-using-cloudformation",children:"Create a Shared VPC using CloudFormation"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Specify Details"})," page, enter a ",(0,i.jsx)(n.strong,{children:"Stack name"})," and fill in the installation parameters."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Parameter"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Network"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Determines how the network infrastructure is deployed. Options are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NAT"}),": Used for internal deployment, where the QualiX instance has only a Private IP associated with it. This option doesn\u2019t expose a public IP to the internet. This option deploys QualiX and the Execution Servers on AWS while CloudShell is installed on prem and communicates with the AWS stack via VPN. It is also possible to have CloudShell installed on AWS. For details, see ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",children:"Integrating AWS with Cloud-based CloudShell Installation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local"}),": Used for deployments where internet access is provided via the on prem VPN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public (Elastic IP)"}),": Used for external deployment, where the QualiX instance has a Public IP associated with it."]}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VPN Attachment"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Determines if to create a VPN connection to the on-prem network and how it will be attached to the management VPC. Options are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transit gateway"}),": Connects the VPC to the on-prem network via a central hub."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC gateway"}),": Connects the management VPC directly to the on-prem network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"No VPN"}),": Does not create a VPN connection. Use this option if you plan on having CloudShell installed on AWS and don\u2019t need on-prem access. This option does the following:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Does not create a VPN connection."}),"\n",(0,i.jsxs)(n.li,{children:["Deploys an empty Windows Server 2019 Full Base instance on AWS on which you will need to manually install CloudShell Server in this instance, as explained in ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-management-vpc/integrating-aws-with-cloud-based-cloudshell",children:"Integrating AWS with Cloud-based CloudShell Installation"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Management VPC CIDR"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"The IP range (in CIDR notation) to be used for the Management VPC. Select a class C CIDR (/24)."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Management VPC will be later connected via VPN with your on-premise network so select an IP range that does not conflict with your other networks."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Key Pair"}),(0,i.jsx)("td",{children:"The KeyPair to use for all instances that will be created in the Management VPC."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instance Type"}),(0,i.jsx)("td",{children:"The instance type to be used for the execution server and QuailX instances. The minimum recommended instance type is c4.large."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"High Availability Mode"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["Use this option if you wish to set up AWS integration in High Availability mode. In this mode, the integration will create two additional execution servers, ",(0,i.jsx)(n.strong,{children:"es-shells-b"})," and ",(0,i.jsx)(n.strong,{children:"es-commands-b"})," that will be used for failover scenarios."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Before enabling High Availability mode, please take into account that the failover instances will incur additional costs."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VPN Address"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"The public IP address of the router on the network in which Quali Server resides."}),(0,i.jsxs)(n.p,{children:["Leave empty if you set ",(0,i.jsx)(n.strong,{children:"VPN Attachment"})," to ",(0,i.jsx)(n.strong,{children:"No VPN"}),"."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"On-premise CIDR"}),(0,i.jsx)("td",{children:"The IP range (in CIDR notation) of the private network in which the Quali Server resides (outside of the management VPC)."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Enhanced S3 Bucket Security"}),(0,i.jsx)("td",{children:"Select True to enable this option to encrypt and block public access from the S3 bucket."})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{colspan:"2",children:[(0,i.jsx)(n.p,{children:"Configure the execution servers (created by the CloudFormation process) to work with the Quali Server:"}),(0,i.jsxs)(n.p,{children:["Leave the below parameters empty if you set ",(0,i.jsx)(n.strong,{children:"VPN Attachment"})," to ",(0,i.jsx)(n.strong,{children:"No VPN"})," and ",(0,i.jsx)(n.strong,{children:"Network"})," to ",(0,i.jsx)(n.strong,{children:"Public (Elastic IP)"}),"."]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"CloudShell Server IP"}),(0,i.jsx)("td",{children:"The IP Address of the Quali Server"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"CloudShell Username"}),(0,i.jsx)("td",{children:"The CloudShell admin user"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"CloudShell Password"}),(0,i.jsx)("td",{children:"The CloudShell admin password"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(77877).c+"",width:"1026",height:"1448"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Options"})," page, click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Review"})," page, at the bottom, select the ",(0,i.jsx)(n.strong,{children:"I acknowledge that AWS CloudFormation might create IAM resources"})," check box."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The stack is created."}),"\n",(0,i.jsxs)(n.p,{children:["If stack creation fails with the below subscription error, make sure to subscribe to the CentOS 7 ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/marketplace/pp/B00O7WM7QW",children:"Marketplace image"})," and try again."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(54292).c+"",width:"1136",height:"139"})}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["Note the ",(0,i.jsx)(n.strong,{children:"Outputs"})," tab at the bottom of the page. You will need this information when you ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",children:"Add an AWS EC2 Cloud Provider Resource"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(19320).c+"",width:"981",height:"451"})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"VPC Dashboard"}),", open ",(0,i.jsx)(n.strong,{children:"VPN Connections"})," to see the VPN connection settings:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7652).c+"",width:"999",height:"664"})}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsx)(n.li,{children:"Next, do one of the following:"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want to set up a shared VPC integration in which AWS EC2 Apps are deployed to an existing VPC on AWS: ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/create-a-shared-vpc-using-cloudformation",children:"Create a Shared VPC using CloudFormation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If Quali Server is installed in your on-prem network: ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/connect-the-management-vpc-to-quali-server",children:"Connect the Management VPC to Quali Server"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If Quali Server is also on AWS: ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2",children:"Configure an Execution Server Selector for AWS EC2"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},54292:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/AWSSubscriptionError-e4bc51ba22760d32af719f1fe0807954.png"},77877:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/CloudFormationInstallParams-9454b4dac97eff609ff35e9a1c0073e1.png"},6e4:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/CloudFormationSection-91083ce60333f7547247edb09178974d.png"},19320:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/CloudFormationStack-d401424cdc256987077c8a853cb27a48.png"},7652:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/CloudFormationVPNConnections-9222f32f8310e8262859d258971de8ff.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);