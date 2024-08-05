---
sidebar_position: 3
---

# Connect the CloudShell Management VNet to Quali Server

*Note that this procedure only applies to scenarios where Quali Server is not installed in Azure. If Quali Server is installed on Azure, see [Integrating Azure with Cloud-based CloudShell Installation](../integrating-azure-with-cloud-based-cloudshell-installation.md).*

This article guides you on how to set up the VPN connection between Quali Server and Azure.
:::note
This can be done in various ways and is subject to your organization’s IT policy. For illustration purposes, this article shows how to set up a site-to-site VPN connection.
:::
A VPN connection is needed to allow the execution server installed on Azure to work with CloudShell, and to allow resources deployed on Azure to connect back to CloudShell resources that are on your private network, like on prem devices and vCenter VMs.

For this procedure, you will need the IP address of your Quali Server VPN endpoint (provided by your IT administrator) and the **VPN Public IP**, which is created by the Azure Template deployment and can be found in the management resource group’s VPN deployment output.

**To connect the CloudShell Management VNet to Quali Server:**

1. Log in to [https://portal.azure.com/](https://portal.azure.com/).
2. Open the **Local network gateways** page.
3. Click the name of the local network gateway residing in the management resource group created by the Azure Template deployment.
    
4. In the blade that appears, click **Configuration**.
    
    The **Configuration** blade is displayed.
    
5. The configuration parameters should already be filled out using the values you specified in the Azure template.
    
    | Parameter | Description |
    | --- | --- |
    | IP address | The IP address defined in the Azure template's **VPN Address** parameter. of the Quali Server's VPN endpoint specified in the Azure Template. |
    | Address space | The IP range (in CIDR notation) defined in the Azure template's **On Premise CIDR** parameter. This range will be used by the CloudShell Management VNet and by the virtual machines that will be created by CloudShell. |
    
6. Click **Save**.
7. Click **Connections**.
    
    The **Connections** blade is displayed.
    
8. In the blade that appears, click **Add**.
    
    The **Add connection** blade is displayed.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/AzureAddConnectionBlade.png)
    
9. Fill in the connection's parameters.
    
    | Parameter | Description |
    | --- | --- |
    | Name | Name for the connection. |
    | Connection type | Type of connection to be made. By design, **Site-to-site** is selected for security and encryption reasons. |
    | Virtual network gateway | Azure virtual network to be used by this connection.<br/>Select the virtual network in the management resource group created by the Azure Template deployment |
    | Local network gateway | Local network gateway for which a connection will be added. |
    | Shared key (PSK) | Encryption key to be used to encrypt the connection.<br/>The same shared key must be used in both the virtual network and local network gateways. If your gateway device doesn't provide one, you can make one up here and provide it to your device. |
    | Subscription | The subscription can't be changed when adding a connection to an existing peer. |
    | Resource group | The resource group can't be changed when adding a connection to an existing peer. |
    | Location | The location can't be changed when adding a connection to an existing peer. |
    
10. Click **OK**.
    
    The connection is created. For more information about the connection, open the gateway's **Connections** blade or click the **Create connection** notification
    
    ![](/Images/Admin-Guide/Azure-deployment-type/CreateConnectionNotification.png)
    
11. Next, [Add an Azure Cloud Provider Resource](./add-an-azure-cloud-provider-resource.md).
