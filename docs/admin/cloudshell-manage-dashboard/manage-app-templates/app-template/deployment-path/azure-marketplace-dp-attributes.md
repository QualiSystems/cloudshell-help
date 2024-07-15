---
sidebar_position: 3
sidebar_label: Azure VM From Marketplace
hide_table_of_contents: true
---

# Azure VM From Marketplace Deployment Path Attributes

The following attributes would be used to define the Azure VM From Marketplace:
:::note
Every VM deployed from a Marketplace image is created with a managed disk, which is deleted when the sandbox ends.
:::
:::important
If you want to deploy a third party application from a Marketplace image, make sure Programmatic Deployment is enabled for the image in the subscription. To enable, log in to Azure and open the Marketplace, find the image and click it, select the Want to deploy programmatically? Get started link at the bottom of the blade that appears. Then, in the Configure Programmatic Deployment blade, scroll down to the bottom, select Enable for the appropriate subscription and click Save. For additional information, see the following Azure help page: [Working with Marketplace Images on Azure Resource Manager](https://azure.microsoft.com/en-us/blog/working-with-marketplace-images-on-azure-resource-manager/).
:::
<table>
    <thead>
        <th>Attribute</th>
        <th>Azure shell version</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Cloud Provider</td>
            <td>All</td>
            <td>Name of the Azure cloud provider resource to be used</td>
        </tr>
        <tr>
            <td>Image Publisher</td>
            <td>All</td>
            <td>
            Define the VM image's **Publisher**, **Offer** and **SKU**.
:::note
The Publisher, Offer and SKU must exist in the Azure region where the VM will be deployed.
:::
For typical image properties, see the following Azure help pages: [Linux VM images](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage) and [Windows VM images](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/cli-ps-findimage).
            </td>
        </tr>
        <tr>
            <td>Image Offer</td>
            <td>All</td>
            <td>Image Offer</td>
        </tr>
        <tr>
            <td>Image SKU</td>
            <td>All</td>
            <td>Image SKU</td>
        </tr>
        <tr>
            <td>VM Size</td>
            <td>All</td>
            <td>
            (Optional) Size of the Microsoft Azure VM. This parameter determines the CPU, memory and networking capacity of the VM. Leave it empty to use the default VM Size that was set in the cloud provider resource. For example: "Standard\_A1\_v2”.
:::important
For Azure Apps that will run configuration management operations, specify a VM size of Standard\_A2\_v2 or larger.
:::
            </td>
        </tr>
        <tr>
            <td>Disk Type</td>
            <td>All</td>
            <td>
            Type of disk to use for the VM's operating system. Possible options depend on the shell version:

Azure 1G shell:

- **HDD (default)**
- **SSD**

Azure 2G shell:

- **Standard HDD**
- **Standard SSD**
- **Premium SSD**
- **Standard SSD (zone-redundant storage)**
- **Premium SSD (zone-redundant storage)**
</td>
        </tr>
        <tr>
            <td>Disk Size</td>
            <td>All</td>
            <td>
            (Optional) Disk size (in GB) of the VM's operating system. For example, "17” or "35”.

If you leave it empty, CloudShell will determine the disk size according to the App's **VM Size**.
            </td>
        </tr>
        <tr>
            <td>Data Disks</td>
            <td>2G</td>
            <td>
            Semicolon-separated list of data disks that will be added to the VM.

The syntax is: `disk_name:disk_size,disk_type`

For example:

`disk1:10;disk2:20,Premium SSD;disk3:20,Standard SSD (zone-redundant storage)`

Supported disk types are:

- **Standard HDD** (default)
- **Standard SSD**
- **Premium SSD**
- **Ultra SSD**
- **Standard SSD (zone-redundant storage)**
- **Premium SSD (zone-redundant storage)**
</td>
        </tr>
        <tr>
            <td>License Type</td>
            <td>2G</td>
            <td>
            Optionally apply an OS license you own to the VM.

Options are:

- **No License**: None
- **Windows OS**: Windows\_Client
- **Windows Server OS**: Windows\_Server
- **Red Hat Enterprise Linux (RHEL)**: RJE:\_BYOS
- **SUSE Linux Enterprise Server (SLES)**: SLES\_BYOS
</td>
        </tr>
        <tr>
            <td>Enable Boot Diagnostics</td>
            <td>2G</td>
            <td>
            Enable Boot diagnostics for the VM. For additional information, see Microsoft Docs' [Azure boot diagnostics](https://docs.microsoft.com/en-us/azure/virtual-machines/boot-diagnostics) article.
            </td>
        </tr>
        <tr>
            <td>Boot Diagnostics Storage Account</td>
            <td>2G</td>
            <td>The name of a storage account where boot diagnostic artifacts will be stored. Enter "Sandbox Storage" to use the storage account created by the sandbox. By default: the managed storage account is used if **Enable Boot Diagnostics** is enabled.</td>
        </tr>
        <tr>
            <td>Resource Group Name</td>
            <td>2G</td>
            <td>(Optional) The name of the predefined resource group where the VM will be deployed. This resource group will contain all cloud resources created for the VM (such as network interfaces, security groups, disks and the VM itself). When the VM tears down, its cloud resources will be deleted from the resource group but the resource group will remain.</td>
        </tr>
        <tr>
            <td>Add Public IP</td>
            <td>All</td>
            <td>
            Set to **True** to use a public IP address to communicate with the virtual machine from outside the virtual network.

In most cases the public IP address is associated with the VM until the VM is stopped or terminated, after which the IP is no longer available. To ensure that the IP is available to your subscription at any time, reserve it by setting the **Public IP Type** attribute to **Static**.
            </td>
        </tr>
        <tr>
            <td>Wait for IP</td>
            <td>All</td>
            <td>Determines if the App deployment process waits for the VM to get an IP. Default is **False**.</td>
        </tr>
        <tr>
            <td>Extension Script File / Configuration</td>
            <td>All</td>
            <td>
            (Optional) Custom extension script (PowerShell, Python, batch, etc.) to execute on the deployed VM.

- **Extension Script File**: Raw URL of the script file
- **Extension Script Configuration**: Space-separated value containing the tool to be used to execute the script, such as Python or PowerShell, the script's file name and extension, and any inputs that need to be passed to the script. For example: `python my_script.py input1` `input2`
    
:::note Notes
- For non-PowerShell scripts, the tool to be used to execute the script must be installed on the VM.
- For Linux VMs, you must specify the tool to be used. For Windows VMs, PowerShell is used by default, unless a different tool is specified.
- Extension scripts are not supported on Kali Linux images in Azure Marketplace. To fix this issue, you will need to use a modified version of the Marketplace image:
    
    1. Deploy a VM based on the **Kali Linux** Marketplace image.
        
    2. Run the following command:
        
        ```javascript
        sudo nano /usr/lib/python3/dist-packages/azurelinuxagent/common/osutil/factory.py
        ```
        
    3. Find the line:
        
        ```javascript
        from .debian import DebianOSModernUtil
        ```
        
    4. Replace with:
        
        ```javascript
        from .debian import DebianOSModernUtil,DebianOSBaseUtil
        ```
        
    5. Press **\[CTRL\]** + **\[O\]** and **\[Enter\]** keys.
    6. Press **\[CTRL\]** + **\[X\]** and **\[Enter\]** keys.
    7. Restart the **walinuxagent.service** service.
    8. Create a custom image out of the VM.
:::
    </td>
        </tr>
        <tr>
            <td>Public IP Type</td>
            <td>All</td>
            <td>Set to **Static** to ensure that the VM always uses the same public IP. By default, public IPs are **Dynamic** and the address associated to them may change when the VM is powered off.</td>
        </tr>
        <tr>
            <td>Inbound Ports</td>
            <td>All</td>
            <td>
            (Optional) Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default access from the management VPC is allowed and all ports are open for traffic between Azure App VMs within the sandbox, but this can be changed using the **Allow All Sandbox Traffic** attribute.

In addition, all outbound traffic is allowed.

The syntax is:

`port[single/range]:protocol[tcp(default)/udp]`

For example: "80;tcp:443;udp:200-220".
:::note
If not specified, the protocol defaults to TCP.
:::
:::tip Tips
- To allow QualiX in-browser connections to the VM from the sandbox, include port "22".
- To set more specific security groups, it is recommended to use the TestShell API's [SetAppSecurityGroups](pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html#SetAppSecurityGroups) method instead. Unlike the Inbound Ports attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see [SetAppSecurityGroups Code Example](../../../../supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/setappsecuritygroups-code-example.md).
:::
            </td>
        </tr>
        <tr>
            <td>Custom Tags</td>
            <td>2G</td>
            <td>Semi-colon separated list of up to 9 tags to be applied to all related Azure objects created during the App deployment, such as the sandbox's resource group, VNETs, subnets, NSGs and VMs. Attribute supports the following syntax: [TagName]=[TagValue]; [TagName]=[TagValue]. For example: "Tag1=Val1;Tag2=Val2”</td>
        </tr>
        <tr>
            <td>Allow All Sandbox Traffic</td>
            <td>All</td>
            <td>
            Determines if the App allows inbound traffic from all other Azure Apps in the sandbox. If set to False, the App's VM will be isolated. Access from specific Apps or subnets can be defined using the Inbound Ports attribute or API.

:::note
By default, this attribute is True, and access is allowed to all ports from all Apps in the sandbox. By default, all ports are open for traffic within the sandbox.
:::
            </td>
        </tr>
        <tr>
            <td>Enable IP Forwarding</td>
            <td>2G</td>
            <td>Enables IP forwarding on all network interfaces of the app in order to support virtual appliances like routers and firewalls that are connected to multiple subnets. </td>
        </tr>
        <tr>
            <td>Autoload</td>
            <td>2G</td>
            <td>Enables the automatic execution of the Autoload command during reservation Setup.</td>
        </tr>
        <tr>
            <td>Availability Zones</td>
            <td>2G</td>
            <td>Specify the Availability Zone (1, 2, or 3) in which the App’s VM, managed disk and public IP (if available) will be deployed. Leave empty to inherit the Availability Zones defined on the cloud provider resource. For details and supported regions, see [Regions and availability zones](https://learn.microsoft.com/en-us/azure/availability-zones/az-overview).</td>
        </tr>
    </tbody>
</table>