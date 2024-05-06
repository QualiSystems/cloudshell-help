---
sidebar_position: 6
---

# Integrating Azure with Cloud-based CloudShell Installation

This article explains the process for setting up an Azure integration where Quali Server is installed on the Azure region.

The process is as follows:

1. Choose an Azure region for the integration.
2. Create a resource group in this region.
3. In the resource group, create an Azure VM and install CloudShell on it.
    
    - You can install all the required CloudShell components on this VM or use a combination of VMs in the same VNet.
    - Make sure the VNet has an address space that will not overlap with the CloudShell Sandbox VNet, which is "10.0.0.0/8". Something like "192.168.25.0/24".
4. [Configure Azure API to work with CloudShell](./microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md).
5. Deploy the Azure template to create the management resource group and VNets, as explained in [Create a Management Resource Group and VNets](./microsoft-azure-integration/create-a-management-resource-group-and-vnets.md).
    
    - You can choose to create a new management resource group or select the CloudShell VM's resource group. However, if you deploy the Azure template in a different resource group, you will also need to create a peering between the CloudShell VM's VNet and the CloudShell management VNet.
    - In the template, make sure to select the **Internal** deployment mode.
6. Connect the Execution Server to the CloudShell Server. For details, see [Connecting the Execution Server to Quali Server](./managing-the-azure-execution-server.md#connecting-the-execution-server-to-quali-server).
    
7. Create the Azure cloud provider resource and an App template.
    
    :::important Networking considerations:
    - To allow all inbound traffic from other Apps in the sandbox, in the App's **Deployment Paths** page, enable the **Allow All Sandbox Traffic** attribute.
        
    - To allow end users to remotely connect to the App VMs, in the App's **Deployment Paths** page, make sure to open inbound connections to the VMs using the **Inbound Ports** attribute or set up QualiX for in-browser connections via the sandbox itself. For example, specifying "3389" allows RDP connections, while "22" enables QualiX to run in-browser connections. And set the user/password credentials in the App's **App Resource** page.
    :::
8. To verify the integration, do the following:
    
    1. Log into CloudShell Portal, set up and reserve a blueprint that deploys an Azure App on the region.
    2. Make sure you can log in to the VMs using the credentials on the App template.
    3. For networking, reserve a blueprint that has two Azure Apps and make sure a subnet is created in Azure for the App VMs.

### Related Topics

- [Microsoft Azure Integration and Configuration](./microsoft-azure-integration/index.md)
- [Add an Azure Cloud Provider Resource](./microsoft-azure-integration/add-an-azure-cloud-provider-resource.md)
- [Managing App Templates](../../../cloudshell-manage-dashboard/manage-app-templates/index.md)
- [Subnet Connectivity](../../../setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md)
