---
sidebar_position: 1
---

# Cloud Provider 2G Shells Features and Capabilities

This article lists the enhancements and capabilities introduced with each release of our certified 2<sup>nd</sup> Gen cloud provider shells, as well as documentation references.
:::important
In addition to our certified cloud provider shells, we also have "community" grade cloud provider shells that were developed by our community's developers, including shells for Nutanix and Google Cloud Platform. Feel free to download them from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
:::
## VMware vCenter

- Shell's community page - [VMware vCenter Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1691).
- Shell's [README](https://github.com/QualiSystems/VMware-vCenter-Cloud-Provider-Shell-2G/blob/master__old_code/README.md).
:::note
vCenter 5.0.0 and above works only with CloudShell 2022.1 EA and above.
:::
<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>6.0.2</td>
            <td>
            - **Forged Transmits** internal enhancements
            </td>
        </tr>
        <tr>
            <td>6.0.1</td>
            <td>
            - Added support for splitting VM UUIDs by ";" and "," in affinity rule commands
- Added automation process that creates affinity rule name if it is specified but not present
</td>
        </tr>
        <tr>
            <td>6.0.0</td>
            <td>
            Optional port group attributes. To use these attributes, the CloudShell admin needs to manually add them to the VLAN service model in Resource Manager Client. For details, see [Configuring Services](../setting-up-cloudshell/inventory-operations/configuring-services.md).

The new attributes are:

- **Forged Transmits**: (Boolean) Enables to configure the port groups on the virtual switch to allow forged transmits. [VMware Docs](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-7DC6486F-5400-44DF-8A62-6273798A2F80.html) article.
- **Promiscuous Mode**: (Boolean) Enables to configure the port groups on the virtual switch to allow promiscuous mode. [VMware Docs](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-92F3AB1F-B4C5-4F25-A010-8820D7250350.html?hWord=N4IghgNiBcIAoCcD2BbAlgZwMYFck4wAIBZJAEwFMQBfIA) article
- **MAC Address Changes**: (Boolean) Enables to configure the port groups on the virtual switch to allow MAC address changes. [VMware Docs](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-942BD3AA-731B-4A05-8196-66F2B4BF1ACB.html?hWord=N4IghgNiBcILIEEDCACBATdAnApgZzxSQAswA7Ac3xAF8g) article
- **Switch Name**: (String/Lookup) Allows you to choose the switch to use. The switch can be hard-coded in the attribute or set as a **User input** on the VLAN model, allowing the sandbox end-user to specify the desired switch.
    
    ![](/Images/Admin-Guide/switch-name_2022.2.png)
</td>
        </tr>
        <tr>
            <td>5.0.5</td>
            <td>
            - Updated dependencies
            </td>
        </tr>
        <tr>
            <td>4.2.5</td>
            <td>
            - Remove the App's newly created vCenter folder if cloning the VM fails
- VM details show each disk size (See [View an App's VM Details](../../portal/sandboxes/sandbox-workspace/apps/view-vm-details.md))
- Added hint support for templates to the **VM From Linked Clone** deployment path, so the **vCenter VM** attribute now displays your vCenter server's VMs and templates (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
- **Autoload**, **Behavior During Save**, and **IP Regex** attributes are now visible in the App deployment paths (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
- Fixed issue that caused CloudShell to ignore the **Behavior During Save** attribute **VM From Linked Clone** deployment path on the resource (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
- Fixed wmks link generation for different vCenter versions (wmks is used by QualiX)
- Fixed issue that prevented changing an HDD of a Linked Clone VM (VM created from a VM snapshot) (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
- Fixed issue that prevented selecting a datastore cluster
- Fixed issue preventing CloudShell from getting the cluster usage without cluster name
- Fixed issue preventing CloudShell from finding Resource Group under Compute Cluster
</td>
        </tr>
        <tr>
            <td>5.0.3</td>
            <td>
            - **Refresh IP** command returns the updated IP
            </td>
        </tr>
        <tr>
            <td>5.0.2</td>
            <td>
            - Added the **Enable Tags** attribute
            </td>
        </tr>
        <tr>
            <td>5.0.1</td>
            <td>
            - Fixed "connection to existing port groups" issue using the "vCenter VLAN Port Group" service
- Fixed issue with automatic removal of port groups after disconnecting connection routes
</td>
        </tr>
        <tr>
            <td>5.0.0</td>
            <td>
            - Implemented possible value suggestions (autocomplete) for App template attributes: **VM Name**, **VM Template**, and **VM Snapshot** (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
:::note    
vCenter 5.0.0 and above works only with CloudShell 2022.1 EA and above.
:::
            </td>
        </tr>
        <tr>
            <td>4.2.0</td>
            <td>
            - Implemented various fixes and updates
- Added integration with QualiX for the **Get VM Web Console** feature, by adding the **VM Console Link** attribute to the App Resource Shell (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- The default value for the shutdown method is hard. even if the value is not valid. (See [Add VMware vCenter Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource.md))
- Updated **Remove Snapshot** command with new parameter **remove_child** (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
</td>
        </tr>
        <tr>
            <td>4.1.0</td>
            <td>
            - Added support for **Static Apps**
:::note    
This version is supported for CloudShell 2022.1 and up.
:::
            </td>
        </tr>
        <tr>
            <td>4.0.0</td>
            <td>
            - Support for python 3.9/3.10
- Added **Remove Snapshot** command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Added tags for the VM/Folder/Network for vCenter 6.5+
    
- Improved deployment of Apps with a private IP
    
- Fixed duplicate VMs names in the sandbox
    
- Fixed issue that prevented Save and Restore Sandbox from saving the state of VM
    
- Fixed issue with Port Group not being removed when disconnecting
</td>
        </tr>
        <tr>
            <td>3.5.0</td>
            <td>
            - Added **Customize Guest OS** hidden command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
            </td>
        </tr>
        <tr>
            <td>3.4.0</td>
            <td>
            - Added the ability to set FQDN hostnames for Linux virtual machines
- Added the ability to reconfigure CPU/RAM on powered on VMs (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Fixed VM cleanup in case of incorrect customization specification
- Added the ability to create a new network interface if there are no virtual network adapters on the virtual machine
</td>
        </tr>
        <tr>
            <td>3.3.0</td>
            <td>
            - Fixed sandbox folder deletion in the event of failed/canceled VM deployment
- Fixed issue preventing the addition of multiple HDD disks in the **Reconfigure VM** command for vCenter v7 (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Added **vCenter VLAN Port Group** service to support connecting Apps to existing port groups. The vCenter.VLAN.Port.Group.zip service can be downloaded from the vCenter 2G shell's Integrations page and imported into CloudShell. (See [Connecting vCenter Apps to an existing VLAN port group](../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md#connecting-vcenter-apps-to-an-existing-vlan-port-group))
- Release Notes:
    - The "vCenter VLAN Port Group" service still has the "VLAN ID" attribute (not required). It was added in order to support consistency between vCenter and CloudShell in terms of VLAN management.
</td>
        </tr>
        <tr>
            <td>3.2.0</td>
            <td>
            - Added possibility to set gateway in the **Private IP** attribute (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
            </td>
        </tr>
        <tr>
            <td>3.1.2</td>
            <td>
            - Fix for Save/Restore Sandbox (See [Save a Sandbox](../../portal/sandboxes/sandbox-workspace/save-sandbox.md) and [Restore a Saved Sandbox](../../portal/sandboxes/saved-sandboxes/restore-saved-sandbox.md))
- Changed App's **Deploy** command's mechanism to deploy VMs into folders. Separate folder per sandbox. Folder name = sandbox id (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
</td>
        </tr>
        <tr>
            <td>3.1.1</td>
            <td>
            - Added new attributes to all App deployment types: Hostname and **Private IP** (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
            </td>
        </tr>
        <tr>
            <td>3.0.0</td>
            <td>
            - Fixed typo: Renamed **HHD** attribute to **HDD** (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
            </td>
        </tr>
        <tr>
            <td>2.2.0</td>
            <td>
            - Added **Get VM Web Console** deployed App command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Added vSwitch connectivity support (See [Add VMware vCenter Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource.md))
</td>
        </tr>
        <tr>
            <td>2.1.0</td>
            <td>
            - Added **Reconfigure VM** deployed App command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Added **Get Cluster Usage** hidden command
- Added Managed Object Reference ID to the deployed App's **Get VM Details** (See [View an App's VM Details](../../portal/sandboxes/sandbox-workspace/apps/view-vm-details.md))
</td>
        </tr>
        <tr>
            <td>2.0.1</td>
            <td>
            - Removed **Execution Server Selector** attribute
            </td>
        </tr>
        <tr>
            <td>1.0.0</td>
            <td>
            - Official release
- Based on python 3
- Supports vCenter 5.5 - 7. PDF guides on how to find required vCenter elements are available for download in [Add VMware vCenter Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource.md) (step 8).
- Built according to Cloud Provider Standard version 1.0.0
- Added **Customization Spec** attribute to allow additional customization of deployed App (See [Add a vCenter App Template](./private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template.md))
</td>
        </tr>
    </tbody>
</table>

## vCenter Static VM

- Shell's [README](https://github.com/QualiSystems/Generic-Static-vCenter-VM-Shell-2G/blob/master/README.md).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.0.0</td>
            <td>
            - Official release
:::note    
Works with cloud provider resource based on vCenter MWare shell 4.1.0 and above.
:::
- Based on python 3
</td>
        </tr>
    </tbody>
</table>

## Microsoft Azure

- Shell's community page - [Azure Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1687).
- Shell's [README](https://github.com/QualiSystems/Microsoft-Azure-Cloud-Provider-Shell-2G/blob/master/README.md).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>2.5.0</td>
            <td>
            - **Autoload** and **Enable IP Forwarding** are now available on the App deployment paths (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- Added Managed Identity authorization to Azure Shell
- Added **KeyVault** attribute (and SSHKeys processing) to the Azure shell resource (See [Add an Azure Cloud Provider Resource](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource.md))
- Added **Availability Zones** attribute to the Azure shell resource and App deployment paths
- Fixed several bugs related to storage account creation, VM details display, and extension script executions
</td>
        </tr>
        <tr>
            <td>2.4.2</td>
            <td>
            - Added **AutoGenerated Name** attribute switch, that allows user to override default name generation behavior
            </td>
        </tr>
        <tr>
            <td>2.4.1</td>
            <td>
            - Added **Boot Diagnostics Storage Account** deployment type attribute (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
            </td>
        </tr>
        <tr>
            <td>2.4.0</td>
            <td>
            - Added support for adding Bring Your Own License (BYOL) licenses for the virtual machines
- Added custom tags support in the Azure Deployment Path (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- The App's **Get VM Details** command now returns more accurate information about the OS disk and data disks (See [View an App's VM Details](../../portal/sandboxes/sandbox-workspace/apps/view-vm-details.md))
- Added an additional validation for the **Resource Group** attribute in the Azure Deployment Path
- Removed Sandbox NSG creation for scenarios where all subnets are predefined
- Added ability to enable boot diagnostic for the VM (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- Added logic to automatically hide **Power On** command for shared deployed App resources - Apps that were deployed in a different sandbox (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
</td>
        </tr>
        <tr>
            <td>2.3.0</td>
            <td>
            - Added support for data disks in the Azure deployment paths (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- Added **Reconfigure VM** command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Added support for **Standard SSD/Premium SSD/Ultra SSD** and other types of Azure disks (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- Removed Sandbox/MGMT vNETs binding to the network tags
- Added possibility to deploy Azure VM in a separate Resource Group (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
</td>
        </tr>
        <tr>
            <td>2.1.0</td>
            <td>
            - New **Azure Shared Image Gallery** App deployment type (See [Add an Azure App Template](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template.md))
- Sandbox management network is optional now (See [Create a Management Resource Group and VNets](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets.md))
- Added support for predefined subnets (See [Connecting Azure Apps to predefined subnets](../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md#connecting-azure-apps-to-predefined-subnets))
</td>
        </tr>
        <tr>
            <td>2.0.0</td>
            <td>
            - Removed **Execution Server Selector** attribute
            </td>
        </tr>
        <tr>
            <td>1.1.2</td>
            <td>
            - Added support for custom tags (See [Create a Management Resource Group and VNets](./public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets.md))
            </td>
        </tr>
        <tr>
            <td>1.0.0</td>
            <td>
            - Official release
- Based on python 3
- Built according to Cloud Provider Standard version 1.0.0
</td>
        </tr>
    </tbody>
</table>

## Amazon AWS EC2

- Shell's community page - [Amazon AWS Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1695).
- Shell's [README](https://github.com/QualiSystems/Amazon-AWS-Cloud-Provider-Shell-2G#readme).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.3.0</td>
            <td>
            - Added support for PowerShell scripts in User Data (See [Add an AWS EC2 App Template](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template.md))
            </td>
        </tr>
        <tr>
            <td>1.2.0</td>
            <td>
            - Added new **Single VPC Mode**. Defined in the AWS cloud provider resource, which allows Apps that use this resource to be deployed within the Management VPC (See [Add an AWS EC2 Cloud Provider Resource](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-cloud-provider-resource.md))
            </td>
        </tr>
        <tr>
            <td>1.1.1</td>
            <td>
            - Updated description for the attributes **Enable Source Dest Check** and **Status Check Timeout** (See [Add an AWS EC2 App Template](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template.md))
            </td>
        </tr>
        <tr>
            <td>1.1.0</td>
            <td>
            - New deployment type attribute **Enable Source Dest Check** allows disabling source/dest check (See [Add an AWS EC2 App Template](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template.md))
- New deployment type attribute **Status Check Timeout** to set timeout for a status check (See [Add an AWS EC2 App Template](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/add-an-aws-ec2-app-template.md))
</td>
        </tr>
        <tr>
            <td>1.0.3</td>
            <td>
            - Official release
- Added new flavor - **Shared VPC** (See [AWS Integration](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md))
- Multiple minor bug fixes
</td>
        </tr>
        <tr>
            <td>0.2.2</td>
            <td>
            - Pre-release
- Added support for **Shared VPC** (See [AWS Integration](./public-cloud-provider-support-in-cloudshell/aws-integration-and-configuration/aws-integration/index.md))
- Based on Python 3
</td>
        </tr>
    </tbody>
</table>

## OpenStack

- Shell's community page - [OpenStack Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1694).
- Shell's [README](https://github.com/QualiSystems/OpenStack-Cloud-Provider-Shell-2G#readme).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.2.1</td>
            <td>
:::note
Supported on CloudShell 2022.2 GA and up
:::
- Added **Behavior During Save** attribute for the Save/Restore command (See [Add OpenStack Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-openstack-cloud-provider-resource.md))
</td>
        </tr>
        <tr>
            <td>1.2.0</td>
            <td>
:::note
Supported on CloudShell 2022.2 GA and up
:::
- Added sandbox Save/Restore support for OpenStack Apps and deployed Apps (See [Save a Sandbox](../../portal/sandboxes/sandbox-workspace/save-sandbox.md))
- Added the **Private IP** attribute (See [Add an OpenStack App Template](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-an-openstack-app-template.md))
- Added the **User Data** attribute, allowing you to specify metadata or a post-installation script that will run on the deployed App (See [Add an OpenStack App Template](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-an-openstack-app-template.md))
- Added ability to connect to an existing network (See [Connecting OpenStack App to an existing network](../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md#connecting-openstack-app-to-an-existing-network))
- Added ability to specify **Subnet CIDR** in VLAN service (See [Specify Subnet CIDR for OpenStack VLAN service](../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md#specify-subnet-cidr-for-openstack-vlan-service))
- Added built-in capability to create separate trunks for different VLAN services
</td>
        </tr>
        <tr>
            <td>1.1.0</td>
            <td>
            - VLAN trunk support
- Added the **OpenStack Trunk Network ID** attribute (See [Add OpenStack Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-openstack-cloud-provider-resource.md))
- Updated the **OpenStack Domain Name** attribute's description (See [Add OpenStack Cloud Provider Resource](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-openstack-cloud-provider-resource.md))
</td>
        </tr>
        <tr>
            <td>1.0.0</td>
            <td>
            - Official release
- Added the **Console** command (See [Run App Commands](../../portal/sandboxes/sandbox-workspace/apps/run-app-commands.md))
- Renamed the Shell to "OpenStack Cloud Provider Shell 2G" (See [OpenStack Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1694) community page)
- Added the **Inbound Ports** attribute to the App's deployment type (See [Add an OpenStack App Template](./private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/add-an-openstack-app-template.md))
</td>
        </tr>
        <tr>
            <td>0.1.1</td>
            <td>
            - Pre-release
- Based on Python 3
- Known issues:
    - Security groups are not created for the VM
</td>
        </tr>
    </tbody>
</table>

## Kubernetes

- Shell's community page - [Kubernetes Cloud Provider Shell 2G](https://github.com/orgs/QualiSystems/discussions/1689).
- Shell's [README](https://github.com/QualiSystems/Kubernetes-Cloud-Provider-2G/blob/master/README.md).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.0.1</td>
            <td>
            - Initial release
- Based on python 3
- Built according to Cloud Provider Standard version 1.0.0
</td>
        </tr>
    </tbody>
</table>

## Oracle Cloud Infrastructure (OCI)

- Shell's community page - [Oracle Cloud Infrastructure (OCI) Shell 2G](https://github.com/orgs/QualiSystems/discussions/1686).
- Shell's [README](https://github.com/QualiSystems/OCI-Shell-2G/blob/dev/README.md).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.1.9</td>
            <td>
            - Added retries for vNIC retrieval
- Adjusted VCN Service configuration
</td>
        </tr>
        <tr>
            <td>1.1.5</td>
            <td>
            - Fixed issue preventing security list from being populated across all subnets/VCNs
            </td>
        </tr>
        <tr>
            <td>1.1.4</td>
            <td>
            - Fixed compatibility issues with the latest OCI python packages
            </td>
        </tr>
        <tr>
            <td>1.1.3</td>
            <td>
            - Initial release
            </td>
        </tr>
    </tbody>
</table>

## Cisco VIRL

- Shell's community page - [VIRL Shell 2G](https://github.com/orgs/QualiSystems/discussions/1685).
- Shell's [README](https://github.com/QualiSystems/VIRL-Shell-2G).

<table>
    <thead>
        <th>Release</th>
        <th>Capabilities added</th>
    </thead>
    <tbody>
        <tr>
            <td>1.0.2</td>
            <td>
            - Added support for SSH version 2
- Added option to specify additional "empty" interfaces (interfaced without IP addresses that are not connected to any endpoints)
</td>
        </tr>
        <tr>
            <td>1.0.1</td>
            <td>
            - Added fix for non-unique Resource Names.
            </td>
        </tr>
        <tr>
            <td>1.0</td>
            <td>
            - Official release
            </td>
        </tr>
    </tbody>
</table>
