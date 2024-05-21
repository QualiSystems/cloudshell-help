"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[92496],{97092:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(17624),i=s(4552);const r={sidebar_position:3,sidebar_label:"Azure VM From Marketplace",hide_table_of_contents:!0},l="Azure VM From Marketplace Deployment Path Attributes",d={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes",title:"Azure VM From Marketplace Deployment Path Attributes",description:"The following attributes would be used to define the Azure VM From Marketplace:",source:"@site/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Azure VM From Marketplace",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Azure VM From Custom Image",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes"},next:{title:"Azure VM From Gallery Image 2G",permalink:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-galery-dp-attributes"}},a={},o=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"azure-vm-from-marketplace-deployment-path-attributes",children:"Azure VM From Marketplace Deployment Path Attributes"}),"\n",(0,n.jsx)(t.p,{children:"The following attributes would be used to define the Azure VM From Marketplace:"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Every VM deployed from a Marketplace image is created with a managed disk, which is deleted when the sandbox ends."})}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["If you want to deploy a third party application from a Marketplace image, make sure Programmatic Deployment is enabled for the image in the subscription. To enable, log in to Azure and open the Marketplace, find the image and click it, select the Want to deploy programmatically? Get started link at the bottom of the blade that appears. Then, in the Configure Programmatic Deployment blade, scroll down to the bottom, select Enable for the appropriate subscription and click Save. For additional information, see the following Azure help page: ",(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/blog/working-with-marketplace-images-on-azure-resource-manager/",children:"Working with Marketplace Images on Azure Resource Manager"}),"."]})}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Attribute"}),(0,n.jsx)("th",{children:"Azure shell version"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Cloud Provider"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Name of the Azure cloud provider resource to be used"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Image Publisher"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Define the VM image's ",(0,n.jsx)(t.strong,{children:"Publisher"}),", ",(0,n.jsx)(t.strong,{children:"Offer"})," and ",(0,n.jsx)(t.strong,{children:"SKU"}),"."]}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The Publisher, Offer and SKU must exist in the Azure region where the VM will be deployed."})}),(0,n.jsxs)(t.p,{children:["For typical image properties, see the following Azure help pages: ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage",children:"Linux VM images"})," and ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/cli-ps-findimage",children:"Windows VM images"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Image Offer"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Image Offer"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Image SKU"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Image SKU"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"VM Size"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"(Optional) Size of the Microsoft Azure VM. This parameter determines the CPU, memory and networking capacity of the VM. Leave it empty to use the default VM Size that was set in the cloud provider resource. For example: \u201cStandard_A1_v2\u201d."}),(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"For Azure Apps that will run configuration management operations, specify a VM size of Standard_A2_v2 or larger."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Disk Type"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Type of disk to use for the VM's operating system. Possible options depend on the shell version:"}),(0,n.jsx)(t.p,{children:"Azure 1G shell:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"HDD (default)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"SSD"})}),"\n"]}),(0,n.jsx)(t.p,{children:"Azure 2G shell:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Standard HDD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Standard SSD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Premium SSD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Standard SSD (zone-redundant storage)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Premium SSD (zone-redundant storage)"})}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Disk Size"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"(Optional) Disk size (in GB) of the VM's operating system. For example, \u201c17\u201d or \u201c35\u201d."}),(0,n.jsxs)(t.p,{children:["If you leave it empty, CloudShell will determine the disk size according to the App's ",(0,n.jsx)(t.strong,{children:"VM Size"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Data Disks"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Semicolon-separated list of data disks that will be added to the VM."}),(0,n.jsxs)(t.p,{children:["The syntax is: ",(0,n.jsx)(t.code,{children:"disk_name:disk_size,disk_type"})]}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"disk1:10;disk2:20,Premium SSD;disk3:20,Standard SSD (zone-redundant storage)"})}),(0,n.jsx)(t.p,{children:"Supported disk types are:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Standard HDD"})," (default)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Standard SSD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Premium SSD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Ultra SSD"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Standard SSD (zone-redundant storage)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Premium SSD (zone-redundant storage)"})}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"License Type"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Optionally apply an OS license you own to the VM."}),(0,n.jsx)(t.p,{children:"Options are:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"No License"}),": None"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Windows OS"}),": Windows_Client"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Windows Server OS"}),": Windows_Server"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Red Hat Enterprise Linux (RHEL)"}),": RJE:_BYOS"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SUSE Linux Enterprise Server (SLES)"}),": SLES_BYOS"]}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable Boot Diagnostics"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Enable Boot diagnostics for the VM. For additional information, see Microsoft Docs' ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/boot-diagnostics",children:"Azure boot diagnostics"})," article."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Boot Diagnostics Storage Account"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:['The name of a storage account where boot diagnostic artifacts will be stored. Enter "Sandbox Storage" to use the storage account created by the sandbox. By default: the managed storage account is used if ',(0,n.jsx)(t.strong,{children:"Enable Boot Diagnostics"})," is enabled."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Resource Group Name"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:"(Optional) The name of the predefined resource group where the VM will be deployed. This resource group will contain all cloud resources created for the VM (such as network interfaces, security groups, disks and the VM itself). When the VM tears down, its cloud resources will be deleted from the resource group but the resource group will remain."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Add Public IP"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Set to ",(0,n.jsx)(t.strong,{children:"True"})," to use a public IP address to communicate with the virtual machine from outside the virtual network."]}),(0,n.jsxs)(t.p,{children:["In most cases the public IP address is associated with the VM until the VM is stopped or terminated, after which the IP is no longer available. To ensure that the IP is available to your subscription at any time, reserve it by setting the ",(0,n.jsx)(t.strong,{children:"Public IP Type"})," attribute to ",(0,n.jsx)(t.strong,{children:"Static"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Wait for IP"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:["Determines if the App deployment process waits for the VM to get an IP. Default is ",(0,n.jsx)(t.strong,{children:"False"}),"."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Extension Script File / Configuration"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"(Optional) Custom extension script (PowerShell, Python, batch, etc.) to execute on the deployed VM."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Extension Script File"}),": Raw URL of the script file"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Extension Script Configuration"}),": Space-separated value containing the tool to be used to execute the script, such as Python or PowerShell, the script's file name and extension, and any inputs that need to be passed to the script. For example: ",(0,n.jsx)(t.code,{children:"python my_script.py input1"})," ",(0,n.jsx)(t.code,{children:"input2"})]}),"\n"]}),(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For non-PowerShell scripts, the tool to be used to execute the script must be installed on the VM."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For Linux VMs, you must specify the tool to be used. For Windows VMs, PowerShell is used by default, unless a different tool is specified."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Extension scripts are not supported on Kali Linux images in Azure Marketplace. To fix this issue, you will need to use a modified version of the Marketplace image:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Deploy a VM based on the ",(0,n.jsx)(t.strong,{children:"Kali Linux"})," Marketplace image."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"sudo nano /usr/lib/python3/dist-packages/azurelinuxagent/common/osutil/factory.py\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Find the line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"from .debian import DebianOSModernUtil\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Replace with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"from .debian import DebianOSModernUtil,DebianOSBaseUtil\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Press ",(0,n.jsx)(t.strong,{children:"[CTRL]"})," + ",(0,n.jsx)(t.strong,{children:"[O]"})," and ",(0,n.jsx)(t.strong,{children:"[Enter]"})," keys."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Press ",(0,n.jsx)(t.strong,{children:"[CTRL]"})," + ",(0,n.jsx)(t.strong,{children:"[X]"})," and ",(0,n.jsx)(t.strong,{children:"[Enter]"})," keys."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Restart the ",(0,n.jsx)(t.strong,{children:"walinuxagent.service"})," service."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a custom image out of the VM."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Public IP Type"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:["Set to ",(0,n.jsx)(t.strong,{children:"Static"})," to ensure that the VM always uses the same public IP. By default, public IPs are ",(0,n.jsx)(t.strong,{children:"Dynamic"})," and the address associated to them may change when the VM is powered off."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Inbound Ports"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["(Optional) Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default access from the management VPC is allowed and all ports are open for traffic between Azure App VMs within the sandbox, but this can be changed using the ",(0,n.jsx)(t.strong,{children:"Allow All Sandbox Traffic"})," attribute."]}),(0,n.jsx)(t.p,{children:"In addition, all outbound traffic is allowed."}),(0,n.jsx)(t.p,{children:"The syntax is:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"port[single/range]:protocol[tcp(default)/udp]"})}),(0,n.jsx)(t.p,{children:'For example: "80;tcp:443;udp:200-220".'}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If not specified, the protocol defaults to TCP."})}),(0,n.jsx)(t.admonition,{title:"Tips",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'To allow QualiX in-browser connections to the VM from the sandbox, include port "22".'}),"\n",(0,n.jsxs)(t.li,{children:["To set more specific security groups, it is recommended to use the TestShell API's ",(0,n.jsx)(t.a,{href:"pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html#SetAppSecurityGroups",children:"SetAppSecurityGroups"})," method instead. Unlike the Inbound Ports attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see ",(0,n.jsx)(t.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/setappsecuritygroups-code-example",children:"SetAppSecurityGroups Code Example"}),"."]}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Custom Tags"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:"Semi-colon separated list of up to 9 tags to be applied to all related Azure objects created during the App deployment, such as the sandbox's resource group, VNETs, subnets, NSGs and VMs. Attribute supports the following syntax: [TagName]=[TagValue]; [TagName]=[TagValue]. For example: \u201cTag1=Val1;Tag2=Val2\u201d"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Allow All Sandbox Traffic"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Determines if the App allows inbound traffic from all other Azure Apps in the sandbox. If set to False, the App's VM will be isolated. Access from specific Apps or subnets can be defined using the Inbound Ports attribute or API."}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"By default, this attribute is True, and access is allowed to all ports from all Apps in the sandbox. By default, all ports are open for traffic within the sandbox."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable IP Forwarding"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:"Enables IP forwarding on all network interfaces of the app in order to support virtual appliances like routers and firewalls that are connected to multiple subnets. "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Autoload"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:"Enables the automatic execution of the Autoload command during reservation Setup."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Availability Zones"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:["Specify the Availability Zone (1, 2, or 3) in which the App\u2019s VM, managed disk and public IP (if available) will be deployed. Leave empty to inherit the Availability Zones defined on the cloud provider resource. For details and supported regions, see ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/availability-zones/az-overview",children:"Regions and availability zones"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>d,M:()=>l});var n=s(11504);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);