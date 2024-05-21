"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[45420],{89152:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(17624),i=s(4552);const t={sidebar_position:7},o="Add an AWS EC2 Cloud Provider Resource",d={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",title:"Add an AWS EC2 Cloud Provider Resource",description:"The AWS EC2 cloud provider enables the deployment of AWS instances from an Amazon Machine Image (AMI).",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource.md",tags:[],version:"2023.3",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Configure an Execution Server Selector for AWS EC2",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/configure-an-execution-server-selector-for-aws-ec2"},next:{title:"Add an AWS EC2 App Template",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template"}},l={},a=[];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"add-an-aws-ec2-cloud-provider-resource",children:"Add an AWS EC2 Cloud Provider Resource"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"AWS EC2"})," cloud provider enables the deployment of AWS instances from an Amazon Machine Image (AMI)."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We strongly recommend using the 2",(0,r.jsx)("sup",{children:"nd"})," Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: ",(0,r.jsx)(n.a,{href:"/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell#replacing-the-1st-gen-shell-with-a-2nd-gen-version",children:"Replacing the 1st Gen shell with a 2nd Gen version"}),", ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities",children:"Cloud Provider Shells - Features and Capabilities Per Release"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To add an AWS EC2 cloud provider resource:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to CloudShell as administrator and access the required domain. This will enable the Apps based on this cloud provider resource to be usable in this domain. For additional information, see ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Inventory"})," dashboard, in the ",(0,r.jsx)(n.strong,{children:"Resources"})," tab, click the folder in which you want to create the resource."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"+ Add New"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Create New Resource"})," dialog box, select the ",(0,r.jsx)(n.strong,{children:"AWS EC2"})," cloud provider template. To use the AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell, select ",(0,r.jsx)(n.strong,{children:"Amazon AWS Cloud Provider Shell 2G"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter a ",(0,r.jsx)(n.strong,{children:"Name"})," for the AWS EC2 resource."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - _ ] ["})}),"\n",(0,r.jsxs)(n.p,{children:["Access to the AWS account is provided using the IAM role configured in the ",(0,r.jsx)(n.strong,{children:"Management VPC"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Resource"})," dialog box is displayed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(21780).c+"",width:"802",height:"648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the required information."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"All AWS elements must belong to the specified region."})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Attribute"}),(0,r.jsx)("th",{children:"Supporting shell version"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Execution Server Selector"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["(Optional) This attribute points to a pre-defined group of execution servers (grouped by a common ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"})," value). To make the association, enter the same value you specified on the execution server."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["To use the out-of-the-box ",(0,r.jsx)(n.strong,{children:"Execution Server Selector"}),' attribute, make sure it has the "Execution Server Selector" rule. For details on how to add the rule to the attribute, see ',(0,r.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes#defining-attribute-rules",children:"Defining attribute rules"}),"."]})}),(0,r.jsxs)(n.p,{children:["For additional information on managing App deployments per domains, see ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Region"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:'The code of the AWS region to be used by this cloud provider resource. For example, "us-east-1".'}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The AWS region must have ",(0,r.jsx)(n.strong,{children:"Management VPC"})," configured. For the list of supported regions, see ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/aws-regions-supported-by-cloudshell",children:"AWS Regions Supported by CloudShell"}),"."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VPC CIDR"}),(0,r.jsxs)("td",{children:["AWS 1",(0,r.jsx)("sup",{children:"st"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["CIDR to be used for sandbox VPC if ",(0,r.jsx)(n.strong,{children:"VPC Mode"})," is set to ",(0,r.jsx)(n.strong,{children:"Static"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"AWS Mgmt SG ID"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["The Management VPC's security group (use the ",(0,r.jsx)(n.strong,{children:"SG1id"}),' output when configuring the Management VPC for the region). For example, "sg-71240198".']}),(0,r.jsxs)(n.p,{children:["This value is used by the ",(0,r.jsx)(n.strong,{children:"Setup"})," process to configure the communication between the Management VPC's instances and the Sandbox instances."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"AWS Mgmt VPC ID"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["ID\xa0of the Management VPC. Used by the ",(0,r.jsx)(n.strong,{children:"Setup"})," process to set up the VPC and subnet for the sandbox (use the ",(0,r.jsx)(n.strong,{children:"ManagementVPCID"})," output when configuring the Management VPC for the region). For example \u201cvpc-633fb904\u201d."]}),(0,r.jsx)(n.p,{children:"This value is created when configuring the Management VPC for the region."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Keypairs Location"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["S3 bucket containing sandbox PEM files (use the ",(0,r.jsx)(n.strong,{children:"S3Name"})," output when configuring the Management VPC for the region)."]}),(0,r.jsx)(n.p,{children:'Each active Sandbox creates a PEM file under a designated folder. For example, "sandbox-management".'})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Max Storage Size"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:'(Optional) The maximum number of GiB in the root volume. The value of this parameter will be the storage size limit for all apps deployed on this Cloud Provider. For example, "8".'}),(0,r.jsx)(n.p,{children:'The value must be greater than or equal to the size of the root snapshot used. If set to "0", the default size of the snapshot will be used.'})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Max Storage IOPS"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:'(Optional) The maximum number of I/O operations per second to be supported by the volume. The value of this parameter is the storage IOPS limit for all Apps deployed on this Cloud Provider. For example, "240".'}),(0,r.jsxs)(n.p,{children:["This parameter is used only for storage of type ",(0,r.jsx)(n.strong,{children:"io1"}),", in which you can provision up to 30 IOPS per GiB. If set to zero, the default in the image is used."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Networks In Use"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Reserved networks that will be excluded when allocating sandbox networks, and therefore must include the Management VPC CIDR (which was provided as an input to the CloudFormation deployment process) as well as any other private networks that have access to the Management VPC."}),(0,r.jsx)(n.p,{children:'The syntax is comma separated CIDR. For example, "10.0.0.0/32,172.31.0.0/24".'})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Instance Type"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"(Optional) The default AWS EC2 instance type for the deployed instance. The instance type determines the CPU, memory and networking capacity of the instance to be deployed. For example \u201ct2.large\u201d."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The instance type can be changed when creating the App in the ",(0,r.jsx)(n.strong,{children:"Manage"})," dashboard."]})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VPC Mode"}),(0,r.jsx)("td",{children:"All"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Every sandbox with AWS Apps deploys a VPC to AWS, while in Shared VPC mode, CloudShell deploys the sandbox to an existing VPC. This setting determines how the sandbox VPC selects a CIDR block."}),(0,r.jsx)(n.p,{children:"Options are:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamic"}),": The CIDR block is selected by Cloudshell Server. In other words, CloudShell deploys a new VPC\xa0with a dedicated CIDR for every sandbox."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Static"}),": The CIDR block for all sandboxes allocated is taken from the ",(0,r.jsx)(n.strong,{children:"VPC CIDR"})," attribute. To configure CloudShell to support this mode, see the ",(0,r.jsx)(n.a,{href:"https://github.com/QualiSystems/Amazon-AWS-Cloud-Provider-Shell-2G#typical-workflows",children:"Typical Workflows"})," of the AWS EC2 2G shell's README file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Shared"}),": Indicates that the cloud provider resource will deploy to the shared VPC defined in ",(0,r.jsx)(n.strong,{children:"Shared VPC\xa0ID"})," and use the CIDR block defined in the ",(0,r.jsx)(n.strong,{children:"VPC\xa0CIDR"})," attribute."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Single"}),": The sandbox infrastructure will be deployed within the Management VPC and use the VPC CIDR block."]}),"\n"]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Static VPC CIDR"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["CIDR to be used for sandbox VPC if ",(0,r.jsx)(n.strong,{children:"VPC Mode"})," is set to ",(0,r.jsx)(n.strong,{children:"Static"}),"."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Shared VPC ID"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["(Mandatory for Shared VPC mode) Shared VPC\u2019s ID (can be found in the output of the shared VPC CloudFormation stack, in the ",(0,r.jsx)(n.strong,{children:"SharedVPCId"})," key). For example: \u201cvpc-0bf24b1ebrd855e30\u201d."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Shared VPC Role ARN"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["(Mandatory for Shared VPC mode) Role created by the CloudFormation process with read/write permissions in the AWS account (can be found in the output of the shared VPC CloudFormation stack, in the ",(0,r.jsx)(n.strong,{children:"SharedRoleARN"})," key). This role is used by CloudShell to operate in the shared VPC."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Transit Gateway ID"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["(Mandatory for Shared VPC mode) ID of the transit gateway (can be found in the output of the main CloudFormation stack, in the ",(0,r.jsx)(n.strong,{children:"TGWid"})," key)."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Additional Management Networks"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Networks to be allowed to interact with all sandboxes. This is used for allowing connectivity to AWS resources outside the Management VPC."}),(0,r.jsx)(n.p,{children:'The syntax is comma separated CIDRs. For example, "10.0.0.0/24,10.1.0.0/16,172.31.0.0/24".'})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VPN Gateway ID"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsxs)("td",{children:["(Applies to Shared VPC mode only) ID of the gateway to use. Required to connect the shared VPC's sandbox subnets to the VPN gateway. CloudShell does this by creating a route between the specified VPN gateway and the connected subnet within the VPC CIDR. Can be found in the output of the shared VPC CloudFormation stack, in the ",(0,r.jsx)(n.strong,{children:"VPNGWid"})," key."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"VPN CIDRs"}),(0,r.jsxs)("td",{children:["AWS 2",(0,r.jsx)("sup",{children:"nd"})," Gen shell only"]}),(0,r.jsx)("td",{children:"(Mandatory for Shared VPC mode if VPN Gateway ID is defined) Comma-separated list of CIDRs in the local network to be used to VPN to the shared VPC. Example, 10.1.0.0/24,10.3.0.0/16"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click Start ",(0,r.jsx)(n.strong,{children:"Discovery"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When the discovery process completes, a confirmation message is displayed. The cloud provider resource is displayed in the ",(0,r.jsx)(n.strong,{children:"Inventory"})," dashboard in CloudShell Portal and in Resource Manager Client."]}),"\n",(0,r.jsxs)(n.p,{children:["To customize the App deployment types and publish App orchestration parameters, see ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/customizing-app-deployment-types",children:"Customizing App Deployment Types"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Next, ",(0,r.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template",children:"Add an AWS EC2 App Template"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21780:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/AWSResourceDiscoveryInformation-940a92922366eaf28d98bfe556b8a272.png"},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>o});var r=s(11504);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);