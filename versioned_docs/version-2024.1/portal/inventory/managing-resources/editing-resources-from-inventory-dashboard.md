---
sidebar_position: 7
---

# Editing Resources from the Inventory Dashboard

This article explains how to modify a resource's settings and folder location from the Inventory dashboard.

:::note
This feature does not apply to cloud provider resources.
:::

**To edit a resource:**

1. In the **Inventory** dashboard, in the **Resources** tab, click the resource's More Actions button and select **Edit**.
    
    The **Resource** dialog box is displayed.
    
2. Edit the resource's settings, as appropriate. The **Name**, **Address**, **Folder**, **Visibility**, **Remote Connection**, **Links** and **Share Level** fields are provided for all resources, while additional fields may change, depending on the Shell of the resource.
    
    ![](/Images/CloudShell-Portal/INVN/EditInventoryResource.png)
    
    <table>
    <thead>
        <tr>
        <th>Attribute</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>
            Specify the name of the resource in CloudShell.

    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: `| . - \_ \] \[`
    :::
            </td>
        </tr>
        <tr>
            <td>Address</td>
            <td>
            Specify the IP Address of the device
            </td>
        </tr>
        <tr>
            <td>Folder</td>
            <td>
            Select the CloudShell folder in which to place the resource. Use the search bar to quickly find the desired folder.

    :::note
    Placing a resource in a domain's folder does not associate the resource with that domain.
    :::
            </td>
        </tr>
        <tr>
            <td>Visibility</td>
            <td>
            Determine who can see the resource in the diagram, search pane and in the **Inventory** dashboard. The default visibility is defined in the resource family.

            Values are:

            - **Family Default** - as defined in the resource's family
            - **Admin only** - only domain and system administrators
            - **Everyone** - any CloudShell user

    :::note
    When you change the visibility, a window pops up, asking you if you want to apply the change to the sub resources as well. Click Yes to apply to all sub resources.
    :::
            </td>
        </tr>
        <tr>
            <td>Remote Connection</td>
            <td>
            Enable/disable remote connections (using RDP, SSH, telnet, etc.) to the resource's device from the sandbox. The default remote connection policy is defined in the resource family.

            Values are:

            - **Family Default** - as defined in the resource's family
            - **Enable** - allow remote connections from the resource
            - **Disable** - do not allow remote connections from the resource

    :::note
    Remote connections require the use of QualiX Server. For more information, see [QualiX Installation and Configuration](../../../install-configure/qualix/index.md).
    :::
            </td>
        </tr>
        <tr>
            <td>Links</td>
            <td>
            Enables you to decide of the available links to expose for this specific resource in the sandbox.

            In order to add/remove links, make sure the **Remote Connection** field is set to **Enable**.
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
            Determines the share level of a resource in a blueprint or sandbox. By default, the share level is defined in the resource family by the Locked by default check box. To override the default configuration, select Unshared/Shared.

    :::note
    In a blueprint or sandbox, end users can choose to share or unshare the resource. For more details, see [Share Reserved Resources](../../blueprints/creating-blueprints/resources/share-reserved-resources.md).
    :::

            Values are:

            - **Family Default** - as defined in the resource's family
            - **Unshared** - do not allow sharing the resource with other concurrent sandboxes
            - **Shared** - allow sharing the resource
            </td>
        </tr>
    </tbody>
    </table>
    
    
3. Save your changes.
    
    :::info-one-line
    It is recommended to rediscover the resource at this time to make sure it was configured properly - see [Discovering Inventory Resources](./discovering-resources.md)
    :::
    

## Related Topics

- [Inventory Dashboard](../inventory-dashboard.md)
- [Discovering Inventory Resources](./discovering-resources.md)
