"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[19132],{90888:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=t(17624),i=t(4552);const r={sidebar_position:2,sidebar_label:"Azure VM From Custom Image",hide_table_of_contents:!0},l="Azure VM From Custom Image Deployment Path Attributes",d={id:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes",title:"Azure VM From Custom Image Deployment Path Attributes",description:"The following attributes would be used to define the Azure VM From Custom Image:",source:"@site/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes.md",sourceDirName:"admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path",slug:"/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-custom-image-dp-attributes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Azure VM From Custom Image",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"AWS EC2 Instance",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/aws-ec2-dp-attributes"},next:{title:"Azure VM From Marketplace",permalink:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/deployment-path/azure-marketplace-dp-attributes"}},o={},a=[];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"azure-vm-from-custom-image-deployment-path-attributes",children:"Azure VM From Custom Image Deployment Path Attributes"}),"\n",(0,n.jsx)(s.p,{children:"The following attributes would be used to define the Azure VM From Custom Image:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Attribute"}),(0,n.jsx)("th",{children:"Azure shell version"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Cloud Provider"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Name of the Azure cloud provider resource to be used"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Azure Image"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:["Name of the custom image. The image name is listed in the ",(0,n.jsx)(s.strong,{children:"Images"})," blade of the Azure portal."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Azure Resource Group"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:"Name of the resource group in which the custom image resides."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"VM Size"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"(Optional) Size of the Microsoft Azure computing resources, including CPU, memory and networking capacity of the VM. Leave it empty to use the default VM Size that was set in the cloud provider resource. For example: \u201cStandard_A1_v2\u201d."}),(0,n.jsx)(s.p,{children:"Make sure the VM size you specify is supported by the image you defined in the App."}),(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsx)(s.p,{children:"For Azure Apps that will run configuration management operations, specify a VM size of Standard_A2_v2 or larger."})}),(0,n.jsxs)(s.p,{children:["For additional information, see the Azure help page ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes",children:"Sizes for virtual machines in Azure"})," or use Azure CLI to get a list of your region's supported sizes."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Disk Type"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Type of disk to use for the VM's operating system. Possible options depend on the shell version:"}),(0,n.jsx)(s.p,{children:"Azure 1G shell:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"HDD (default)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"SSD"})}),"\n"]}),(0,n.jsx)(s.p,{children:"Azure 2G shell:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard HDD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard SSD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Premium SSD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard SSD (zone-redundant storage)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Premium SSD (zone-redundant storage)"})}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Disk Size"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"(Optional) Disk size (in GB) of the VM's operating system. For example, \u201c17\u201d or \u201c35\u201d."}),(0,n.jsx)(s.p,{children:"If you leave it empty, CloudShell will determine the disk size according to the App's VM Size."})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Data Disks"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Semicolon-separated list of data disks that will be added to the VM."}),(0,n.jsxs)(s.p,{children:["The syntax is: ",(0,n.jsx)(s.code,{children:"disk_name:disk_size,disk_type"})]}),(0,n.jsx)(s.p,{children:"For example:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"disk1:10;disk2:20,Premium SSD;disk3:20,Standard SSD (zone-redundant storage)"})}),(0,n.jsx)(s.p,{children:"Supported disk types are:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard HDD (default)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard SSD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Premium SSD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Ultra SSD"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Standard SSD (zone-redundant storage)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Premium SSD (zone-redundant storage)"})}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"License Type"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"Optionally apply an OS license you own to the VM."}),(0,n.jsx)(s.p,{children:"Options are:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"No License"}),": None"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Windows OS"}),": Windows_Client"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Windows Server OS"}),": Windows_Server"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Red Hat Enterprise Linux (RHEL)"}),": RJE:_BYOS"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SUSE Linux Enterprise Server (SLES)"}),": SLES_BYOS"]}),"\n"]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable Boot Diagnostics"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Enable Boot diagnostics for the VM. For additional information, see Microsoft Docs' ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/boot-diagnostics",children:"Azure boot diagnostics"})," article."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Boot Diagnostics Storage Account"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:['The name of a storage account where boot diagnostic artifacts will be stored. Enter "Sandbox Storage" to use the storage account created by the sandbox. By default: the managed storage account is used if ',(0,n.jsx)(s.strong,{children:"Enable Boot Diagnostics"})," is enabled."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Resource Group Name"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"(Optional) The name of the predefined resource group where the VM will be deployed. This resource group will contain all cloud resources created for the VM (such as network interfaces, security groups, disks and the VM itself). When the VM tears down, its cloud resources will be deleted from the resource group but the resource group will remain."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Add Public IP"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Set to ",(0,n.jsx)(s.strong,{children:"True"})," to use a public IP address to communicate with the VM from outside the virtual network."]}),(0,n.jsxs)(s.p,{children:["In most cases the public IP address is associated with the VM until the VM is stopped or terminated, after which the IP is no longer available. To ensure that the IP is available to your subscription at any time, reserve it by setting the ",(0,n.jsx)(s.strong,{children:"Public IPType"})," attribute to ",(0,n.jsx)(s.strong,{children:"Static"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Wait for IP"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Determines if the App deployment process waits for the VM to get an IP. Default is ",(0,n.jsx)(s.strong,{children:"False"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Extension Script File / Configuration"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:"(Optional) Custom extension script (PowerShell, Python, batch, etc.) to execute on the deployed VM."}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extension Script File"}),": Raw URL of the script file"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extension Script Configuration"}),": Space-separated value containing the tool to be used to execute the script, such as Python or PowerShell, the script's file name and extension, and any inputs that need to be passed to the script. For example: ",(0,n.jsx)(s.code,{children:"python my_script.py input1"})," ",(0,n.jsx)(s.code,{children:"input2"})]}),"\n",(0,n.jsx)(s.admonition,{title:"Notes:",type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"For non-PowerShell scripts, the tool to be used to execute the script must be installed on the VM."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"For Linux VMs, you must specify the tool to be used. For Windows VMs, PowerShell is used by default, unless a different tool is specified."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Extension scripts are not supported on Kali Linux images in Azure Marketplace. To fix this issue, you will need to use a modified version of the Marketplace image:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Deploy a VM based on the ",(0,n.jsx)(s.strong,{children:"Kali Linux"})," Marketplace image."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"sudo nano /usr/lib/python3/dist-packages/azurelinuxagent/common/osutil/factory.py\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Find the line:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"from .debian import DebianOSModernUtil\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Replace with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"from .debian import DebianOSModernUtil,DebianOSBaseUtil\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Press ",(0,n.jsx)(s.strong,{children:"[CTRL]"})," + ",(0,n.jsx)(s.strong,{children:"[O]"})," and ",(0,n.jsx)(s.strong,{children:"[Enter]"})," keys."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Press ",(0,n.jsx)(s.strong,{children:"[CTRL]"})," + ",(0,n.jsx)(s.strong,{children:"[X]"})," and ",(0,n.jsx)(s.strong,{children:"[Enter]"})," keys."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Restart the ",(0,n.jsx)(s.strong,{children:"walinuxagent.service"})," service."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a custom image out of the VM."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["To support the execution of extension scripts, custom images created outside of Azure Marketplace must include the ",(0,n.jsx)(s.strong,{children:"ProvisionGuestAgent"})," agent. For additional information, see ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/features-windows",children:"Virtual machine extensions and features for Windows"}),"."]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Public IP Type"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Set to ",(0,n.jsx)(s.strong,{children:"Static"})," to ensure that the VM always uses the same public IP. By default, public IPs are ",(0,n.jsx)(s.strong,{children:"Dynamic"})," and the address associated to them may change when the VM is powered off."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Inbound Ports"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["(Optional) Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default access from the management VPC is allowed and all ports are open for traffic between Azure App VMs within the sandbox, but this can be changed using the ",(0,n.jsx)(s.strong,{children:"Allow All Sandbox Traffic"})," attribute."]}),(0,n.jsx)(s.p,{children:"In addition, all outbound traffic is allowed."}),(0,n.jsx)(s.p,{children:"The syntax is:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"port[single/range]:protocol[tcp(default)/udp]"})}),(0,n.jsxs)(s.p,{children:['For example: "80;443',":tcp",";200-220",":udp",'".']}),(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"If not specified, the protocol defaults to TCP."})}),(0,n.jsx)(s.admonition,{title:"Tips:",type:"important",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'To allow QualiX in-browser connections to the VM from the sandbox, include port "22".'}),"\n",(0,n.jsxs)(s.li,{children:["To set more specific security groups, it is recommended to use the TestShell API's ",(0,n.jsx)(s.code,{children:"[SetAppsSecurityGroup](https://help.quali.com/Online%20Help/0.0/TestShell-API/TestShell%20XML%20RPC%20API.html)"})," method instead. Unlike the ",(0,n.jsx)(s.strong,{children:"Inbound Ports"})," attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see ",(0,n.jsx)(s.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/SetAppSecurityGroups-code-sample.htm",children:"SetAppSecurityGroups Code Example"}),"."]}),"\n"]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Custom Tags"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Semi-colon separated list of up to 9 tags to be applied to all related Azure objects created during the App deployment, such as the sandbox's resource group, VNETs, subnets, NSGs and VMs. Attribute supports the following syntax: [TagName]=[TagValue]; [TagName]=[TagValue]. For example: \u201cTag1=Val1;Tag2=Val2\u201d"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Allow All Sandbox Traffic"}),(0,n.jsx)("td",{children:"All"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Determines if the App allows inbound traffic from all other Azure Apps in the sandbox. If set to ",(0,n.jsx)(s.strong,{children:"False"}),", the App's VM will be isolated. Access from specific Apps or subnets can be defined using the ",(0,n.jsx)(s.strong,{children:"Inbound Ports"})," attribute or API."]}),(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"By default, this attribute is True, and access is allowed to all ports from all Apps in the sandbox. By default, all ports are open for traffic within the sandbox."})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable IP Forwarding"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Enables IP forwarding on all network interfaces of the app in order to support virtual appliances like routers and firewalls that are connected to multiple subnets."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Autoload"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Enables the automatic execution of the Autoload command during reservation Setup."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Availability Zones"}),(0,n.jsx)("td",{children:"2G"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Specify the Availability Zone (1, 2, or 3) in which the App\u2019s VM, managed disk and public IP (if available) will be deployed. Leave empty to inherit the Availability Zones defined on the cloud provider resource. For details and supported regions, see ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/availability-zones/az-overview",children:"Regions and availability zones"}),"."]})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>d,M:()=>l});var n=t(11504);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);