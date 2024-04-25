---
sidebar_position: 6
---

# Configure an Execution Server Selector for Azure

*This article explains how to associate an Execution Server to Azure Apps. To learn how to associate an Execution Server to resources, other Apps and blueprints, see [Setting Up Execution Servers to Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc.htm).*

The CloudShell Management VNet contains an Execution Server called "**Azure-\<region\>**" (for example, "Azure\-East US"), which resides in a dedicated VM called **ExecutionServer\-VM**. This Execution Server is responsible for running the App's deployment and automation, as well as configuration management operations defined on the App. As this is a Linux Execution Server, it does not support Suite executions.

In CloudShell, this Execution Server needs to be associated with the Azure cloud provider resource via the **Execution Server Selector** attribute. This is achieved by setting the same value for this attribute in the Azure cloud provider resource and in the deployed App shell in the App template's **App Resource** page. Note that this Execution Server will also run any configuration management operations defined in the App. For information about managing, troubleshooting and upgrading Execution Servers on Azure, see [Managing the Azure Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-VNET-Exec-Srv-Mng.htm).
:::important
If CloudShell Server is installed on Azure, rerun the Execution Server's configuration, as explained in [Upgrading an existing Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-VNET-Exec-Srv-Mng.htm#Upgradin),and specify the CloudShell Server's private IP. Then, perform the below steps.
:::
**To add and configure the Execution Server Selector attribute:**

1. In **CloudShell Portal**, configure the Execution Server:
    
    1. Open the **Manage>Execution Servers>Servers** page.
    2. Find the Execution Server called "Azure-\<region\>", open its action menu and click **Attributes**.
    3. Select the **Execution Server Selector** check box and enter the value you entered for the Azure cloud provider in the previous step.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/SelectAzureExecutionServer.png)
        
2. Click **Done**.
3. When creating the App template, specify the same value on the **Execution Server Selector** attribute in the relevant App's **App Resource** page.
4. Click **Done**.
    
5. Next, [Configure the Qualix Server for Azure](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-VNET-Qualix-Srv.htm)
