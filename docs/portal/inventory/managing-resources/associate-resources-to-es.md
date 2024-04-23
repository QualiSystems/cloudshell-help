---
sidebar_position: 8
---

# Associating Resources to Specific Execution Servers

*For details about associating Apps or blueprints to execution servers, see [Setting Up Execution Servers to Run Commands](../../../admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).*

This article explains how to link a resource to a specific execution server or group of execution servers. This is especially useful in deployments that include multiple geographically-distributed sites, to ensure that distant lab resources are handled by an on premise execution server, to reduce latency and improve performance.

This is done by setting the same value on the **Execution Server Selector** attribute on the resource and on the suitable execution server(s).

:::note
Resources based on 2nd Gen Shells include the **Execution Server Selector** attribute. If you don't see the attribute in the cloud provider resource's **Discovery** page, make sure it has the **Execution Server Selector** rule - for details, see [Defining attribute rules](../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md#defining-attribute-rules). Alternatively, you can create a dedicated "Execution Server Selector" attribute and associate it to your Amazon AWS shell.
:::

**To associate a resource to an execution server:**

1. Set the **Execution Server Selector** value on the execution server.
    
    1. Open the **Manage** dashboard's **Execution Servers>Servers** page.
        
        ![](/Images/CloudShell-Portal/Manage/Management_2_1.png)
        
    2. Click the suitable execution server.
        
        The **Attributes** dialog box is displayed.
        
    3. Specify the resource's domain in the **Execution Server Selector** attribute. For example: "London".
        
        ![](/Images/CloudShell-Portal/Manage/AddAttribute.png)
        
    
    1. Click **Done**.
2. Set the **Execution Server Selector** value on the resource.
    
    1. In the **Inventory** dashboard, in the **Resources** tab, make sure the resource is not currently reserved.
    2. Click the resource's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_28x27.png) and select **Discovery**. If **Discovery** is unavailable, click **Edit**.
    3. In the **Execution Server Selector** attribute, specify the same value you set on the execution server and rediscover the resource.
    
    When running a command on the resource, CloudShell will use this execution server. If additional execution servers have the same attribute value, CloudShell will select the first available one.
    

:::note Notes
- In some scenarios, you may want to specify additional criteria for execution server selection. For example, an execution server in India that is running on a Windows OS. To achieve this, make sure the resource has these two selector attributes (for example, 'Lab Location' and 'OS'), with 'India' and 'Windows' as their values and at least one execution server with these two attributes selected and with the same values.
- In CloudShell, you will need to create the attributes with the **Execution Server Selector** rule and then add the attributes to the shell, as explained in the following sections.
:::

## Creating Execution Server Selector attributes

1. In **Resource Manager Client**, open the **Attributes** tab.
2. Create the new attribute. The attribute can be of any type except **Password**.
3. Attach the **Execution Server Selector** rule to the attribute.  
    ![](/Images/CloudShell-Portal/Manage/Management_2.png)
4. Save your changes.
5. Repeat steps a-d to add additional linking attributes.

## Adding the Execution Server Selector attributes to resources

In order to use the Execution Server Selector attribute you created, you must first add the attribute to the resource's shell.

- To add attributes to a 2nd Gen shell, see [Adding custom attributes to a Shell](../../../admin/cloudshell-manage-dashboard/managing-shells.md#adding-custom-attributes-to-a-shell).
- To add attributes to a 1st Gen shell:
    
    1. In **Resource Manager Client**, open the **Resource Families** explorer.
    2. Add the attributes to the relevant models/families.

## Related Topics

- [Inventory Dashboard](../inventory-dashboard.md)
