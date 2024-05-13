"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[23408],{55068:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(17624),i=s(4552);const l={sidebar_position:1,sidebar_label:"AWS EC2 Instance",hide_table_of_contents:!0},r="AWS EC2 Instance Deployment Path Attributes",a={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes",title:"AWS EC2 Instance Deployment Path Attributes",description:"The following attributes would be used to define the AWS EC2 Instance deployment:",source:"@site/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"AWS EC2 Instance",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Adding a new App Template",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template"},next:{title:"Azure VM From Custom Image",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes"}},o={},d=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"aws-ec2-instance-deployment-path-attributes",children:"AWS EC2 Instance Deployment Path Attributes"}),"\n",(0,n.jsx)(t.p,{children:"The following attributes would be used to define the AWS EC2 Instance deployment:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Attribute"}),(0,n.jsx)("th",{children:"AWS shell version"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Cloud Provider"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Name of the AWS EC2 cloud provider resource to be used"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"AWS AMI ID"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:'AWS AMI ID to launch the instance from. For example, "ami-6869aa05".'}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The AMI must be accessible in the selected cloud provider's AWS region."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Allow All Sandbox Traffic"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Determines if the App allows inbound traffic from all other AWS EC2 Apps in the sandbox. If set to ",(0,n.jsx)(t.strong,{children:"False"}),", the instance will be isolated. Access from specific Apps or subnets can be defined using the ",(0,n.jsx)(t.strong,{children:"Inbound Ports"})," attribute or API."]}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["By default, this attribute is ",(0,n.jsx)(t.strong,{children:"True"}),". This means that all access is allowed to all ports from all Apps in the sandbox and all ports are open for traffic within the sandbox."]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Instance Type"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:'AWS EC2 instance type. The instance type determines the CPU, memory, storage and networking capacity of the instance. For example, "t2.large".'}),(0,n.jsx)(t.p,{children:"Leave empty to use the default instance type specified in the AWS EC2 cloud provider resource."}),(0,n.jsx)(t.p,{children:"For built-in or Marketplace images, make sure the instance type is supported by the image you defined in the App."})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"IAM Role Name"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"(Optional) Name of the IAM role to associate to the App's AWS EC2 instance. The instance will use this role to access AWS."}),(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The role must have the AWS permissions required for the actions the instance is expected to perform."}),"\n",(0,n.jsx)(t.li,{children:"If the role does not exist, or there are other issues with launching the instance with the role, App deployment will fail."}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Inbound Ports"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default all ports are open for traffic between AWS EC2 App instances within the sandbox, but this can be changed using the ",(0,n.jsx)(t.strong,{children:"Allow All Sandbox Traffic"})," attribute."]}),(0,n.jsx)(t.p,{children:"In addition, all outbound traffic is allowed."}),(0,n.jsx)(t.p,{children:"The syntax is:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"port[single/range]:protocol[tcp(default)/udp]"})}),(0,n.jsxs)(t.p,{children:['For example: "80;443',":tcp",";200-220",":udp",'".']}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If not specified, the protocol defaults to TCP."})}),(0,n.jsx)(t.admonition,{title:"Tips",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'To allow QualiX in-browser connections to the VM from the sandbox, include port "22".'}),"\n",(0,n.jsxs)(t.li,{children:["To set more specific security groups, it is recommended to use the TestShell API's ",(0,n.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html",children:"SetAppsSecurityGroup"})," method instead. Unlike the Inbound Ports attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see ",(0,n.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/SetAppSecurityGroups-code-sample.htm",children:"SetAppSecurityGroups Code Example"}),"."]}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Public IP Options"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Enables access to the instance from the internet. Options are:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"No Public IP"})," - default option"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Public IP (single subnet)"})," - (for Apps connected to a single subnet [private or public]) allocates a public IP"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Elastic IPs"})," - (for Apps connected to multiple subnets) allocates an elastic IP for the App in each of the public subnets that it is connected to"]}),"\n"]}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"In AWS EC2 Apps, this setting is mandatory if the App is connected to more than one network (private or public)."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Storage Size"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The root volume size. The value must be greater or equal to the size of the root snapshot used. If set to 0, the default defined in the image will be used. For example: 30."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Storage IOPS"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The default number of I/O operations per second that the root volume can support. This parameter is used only for storage of type io1, in which you can provision up to 30 IOPS per GiB. If set to 0, the default in the image is used. For example: 240."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Storage Type"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The type of storage volume. In AWS, there are several EBS Volume types that can be used, gp2 and io1 for SSD, st1 and sc1 for HDD or the standard type which is the old generation EBS volume type. If auto is selected, the storage type defined in the image is used."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Root Volume Name"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"The device names available for the volume. Depending on the block device driver of the selected AMI's kernel, the device may be attached with a different name than what you specify. If left empty, the default defined in the AMI is used. For example: /dev/xvda"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Autoload"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Enables the automatic execution of the Autoload command during reservation Setup."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Wait for IP"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["If set to ",(0,n.jsx)(t.strong,{children:"False"}),", the deployment will not wait for the VM to get an IP."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Wait for Status Check"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["If set to ",(0,n.jsx)(t.strong,{children:"True"}),", the App's deployment will end successfully only after instance status checks have passed. The status checks include network connectivity, physical host status, system status and more."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Wait for Credentials"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Enable in order to retrieve credentials from a Windows machine. Note that if this parameter is enabled and the credentials are not retrieved within 15 minutes, the deployment will fail."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Custom Tags"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Custom tags to be set on CloudShell-deployed AWS EC2 instances for billing, like the details of the project or team that deployed the instance."}),(0,n.jsx)(t.p,{children:"For multiple tags, specify a comma-separated list of the key-value pairs. For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"tag_name1:ec2_instance,tag_name2:ec2_instance2"})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"User Data URL"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"(Optional) URL to the raw version of the script to execute (PowerShell, bash, sh, etc.)."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"User Data Parameters"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["(Optional) Parameters to pass to the user data script. For example, specifying ",(0,n.jsx)(t.code,{children:"param1 param2"})," will result in the command running as follows:"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"./file.sh param1 param2"})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Private IP"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["When the VPC is in static mode (defined on the AWS EC2 cloud provider resource's ",(0,n.jsx)(t.strong,{children:"VPC Mode"})," attribute), this attribute is used to set a static private IP for the deployed App."]}),(0,n.jsxs)(t.p,{children:["To set a static private IPs in multi-subnet mode, specify a json string that maps the subnet request CIDR to the requested static private IP. For example: ",(0,n.jsx)(t.code,{children:'{"10.0.0.0/28": "10.0.0.6"}'})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable Source Dest Check"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set to ",(0,n.jsx)(t.strong,{children:"True"})," to enable source/destination checks. Source/destination checks allow users to create custom routing inside the VPC. It is applied to all vNICs of a certain instance. If enabled, you can reconfigure routing to go through that instance. This value must be ",(0,n.jsx)(t.strong,{children:"False"})," for Virtual Appliance instances like virtual firewalls/routers."]}),(0,n.jsx)(t.admonition,{title:"Important",type:"note",children:(0,n.jsxs)(t.p,{children:["This value must be False for Virtual Appliance instances like virtual firewalls/routers. The reason for this is that some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Setting ",(0,n.jsx)(t.strong,{children:"Enable Source Dest Check"})," to ",(0,n.jsx)(t.strong,{children:"False"})," ensures the instances are not stopped when they become impaired."]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Status Check Timeout"}),(0,n.jsx)("td",{children:"2nd Gen only"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Timeout, in seconds, for AWS status checks to pass. Some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Therefore, to ensure virtual appliance instances are not stopped when they become impaired, use this attribute to provide a long enough timeout for the instance to complete its status check."}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:'The default timeout is 600 seconds (10 minutes). However, instance deployment will fail once the instance status becomes "impaired". Specifying a status check timeout period will configure CloudShell to ignore the "impaired" status and instead wait for the instance deployment to complete or the timeout period to pass.'})})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>r});var n=s(11504);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);