---
sidebar_position: 2
---

# Create a Management Resource Group and VNets

The **Azure Resource Template** deployment process creates the CloudShell management resource group, the CloudShell Management VNet and CloudShell Sandbox VNet within the resource group and a peering between these networks, which are detailed in [Microsoft Azure Integration](./index.md). You will then need to configure the Execution Server and QualiX Server created in the CloudShell Management VNet to access the Quali Server.

:::note Notes:
- We strongly recommend using the new and improved [Azure 2nd Gen shell](https://github.com/orgs/QualiSystems/discussions/1687). If you're using the 1<sup>st</sup> Gen version of the shell that comes out of the box with CloudShell, see [this version](https://help.quali.com/Online%20Help/2021.1/Portal/Content/Admn/Azure-Crt-Mng-RSc-Grp.htm) of the online help.
- The below procedure assumes you already have CloudShell Server installed locally. However, if you plan on installing CloudShell Server on the Azure region, see [Integrating Azure with Cloud-based CloudShell Installation](../integrating-azure-with-cloud-based-cloudshell-installation.md).
:::
**To create a CloudShell management resource group and the required networks:**

1. Import the Azure template file from [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center). The template file is provided as a JSON file for each CloudShell release version.
2. Log in to [https://portal.azure.com](https://portal.azure.com/#) and open the **Template specs** page.
3. Click **Import template** and import the Azure template file.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/TemplateSpecImport.png)
    
4. In the **Basics** tab, fill in the template spec's mandatory details (Name, Subscription, Resource Group, Location, Version), and click **Next** until the template spec is created.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/TemplateSpecCreation.png)
    
5. Click the name of the new template spec.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/ClickAzureTemplate.png)
    
6. In the blade that appears, click **Deploy**.
    
    The **Custom deployment** page is displayed.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/TemplateSettingsBlade.png)
    
    1. Specify the **Subscription**, **Resource group**.
    2. In the **Instance details** area, fill in the deployment parameters.
        
        | Parameter | Required? | Description |
        | --- | --- | --- |
        | CloudShell Admin | Required | The CloudShell admin user |
        | CloudShell Admin Password | Required | The CloudShell admin’s password |
        | CloudShell Server IP | Required | The IP address of the Quali Server |
        | CloudShell SSH User Name | Required | Create a user name and password to be used to connect to the QualiX and Execution Server that will be created in Azure.<br/>Make sure you save these credentials for future use. |
        | CloudShell SSH Password | Required | Create a password to be used with the **CloudShell SSH User Name**.<br/>Password must contain 12-72 characters and include 1 lower case character, 1 upper case character and 1 special character. |
        | Management Vnet CIDR | Required | The IP range (in CIDR notation) to be used for the CloudShell Management VNet. Specify a class C CIDR (/24).<br/>For example: "192.168.120.0/24". |
        | Management Vnet VPN Subnet CIDR | Required | (Relevant if **Create VPN Endpoint** is set to **True**) The IP range (in CIDR notation) of the subnet in which the VPN connection is set. This range must be included in the CloudShell Management VNet’s range.<br/>For example: "192.168.120.0/28". |
        | Management Vnet Subnet CIDR | Required | The IP range (in CIDR notation) of the subnet to be used by the CloudShell Management VNet.<br/>This range must be included in the CloudShell Management VNet’s range. This subnet is used by CloudShell components such as QualiX Server and Execution Server.<br/>For example: "192.168.120.16/28". |
        | Deployment Mode | Required | Use external deployment to create a QualiX VM with a public IP, or internal deployment to create the QualiX VM with a private IP. Possible values are **External** and **Internal**.<br/>The private IP is accessible from the networks that are connected to the CloudShell Management VNet (such as the network in which the Quali Server resides). |
        | Create VPN Endpoint | Required | Set to **True** to create a VPN endpoint to the CloudShell Management VNet to support a hybrid scenario. |
        | On Premise CIDR | Optional | The IP range (in CIDR notation) of the private network in which the Quali Server resides (outside of the CloudShell Management VNet). |
        | VPN Address | Optional | The public IP address of the router on the network in which Quali Server resides. |
        | Sandbox Vnet CIDR | Optional | The IP range (in CIDR notation) to be used for the Sandbox VNet. |
        | Sandbox Vnet Subnet CIDR | Optional | The IP range (in CIDR notation) of the deafult subnet that will be created for the Sandbox VNet. This range must be included in the Sandbox VNet’s range. Note that after the template is deployed you can delete this redundant subnet manually. |
        
7. Click **Review + create**, and then **Create**.
    
    The Template is being deployed.
    
    If an error message is displayed, click the message to learn more about the error.  
    ![](/Images/Admin-Guide/Azure-deployment-type/TemplateCreationError.png)
    
    To track the deployment's progress, click the **Notifications** button.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/TemplateDeploymentNotification.png)
    
8. The Azure Template deployment's output includes the QualiX Public IP and, if required, the VPN Public IP. You will need this information to connect to the Azure subnets and App VMs from CloudShell.
    
    1. Click **Go to resource group** and then click the name of the resource group.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/ClickResourceGroup.png)
        
    2. In the blade that appears, click **Deployments**.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/AzureDeployments.png)
        
    3. For the **QualiX Public IP**, click the QualiX deployment and expand **Deployment Details**.
    4. (If VPN was configured in the Azure Template) For the **VPN Public IP**, click the CloudShell VPN deployment.
9. Next, if your installation requires a VPN connection, [Connect the CloudShell Management VNet to Quali Server](./connect-the-cloudshell-management-vnet-to-quali-server.md). If not, [Add an Azure Cloud Provider Resource](./add-an-azure-cloud-provider-resource.md).
