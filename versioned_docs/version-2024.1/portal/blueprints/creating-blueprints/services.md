---
sidebar_position: 6
---

# Services in Blueprints

This article explains how to use services in blueprints. For additional information about CloudShell services, see [Services Overview](../../../intro/features/services.md).

## View services

**To view services:**

1. In the Diagram view, in the toolbar, click **App / Service**.  
    The **Add App / Service** catalog is displayed.

2. Browse the catalog by selecting a services folder or by using the text search.
    
    The list of folder items are displayed, grouped by the service families.
    

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/WorkingWithServices1_New.png)

## Add services
:::tip
Before you add a Subnet service, read through [Subnet Connectivity - Points to Consider](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider.md).
:::
**To add a service to the diagram:**

1. Click the ‘**+**’ icon or drag it from the catalog into the diagram.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/Working-with-Services_3.png)
    
    The **Add Service** dialog box is displayed.
    
2. Fill in any required fields.
3. Click **Add**.

## Remove services

**To remove a service from the diagram:**

1. Select the required service.
2. Hover over the **Actions** menu, select **More Options** and then select the **Remove** option .
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/Working-with-Services_4.png)
    

## Specify service attributes

When adding a service to a blueprint, you can specify that certain service attributes must prompt the user to enter values when the blueprint is reserved.

**To specify service attributes in a blueprint:**

1. Login in to CloudShell Portal as administrator.
2. Click **Lab Management > Blueprints**
3. Click **\+** **Create Blueprint**. If the **Select from Templates** context menu is displayed, click **Create Empty Blueprint**.

A new blank blueprint is displayed in the **Blueprint Catalog**.

5. In the toolbar, click **App / Service**.
    
    The **Add App / Service** pane is displayed.
    
6. Drag the required service into the blueprint canvas. For the purposes of this procedure, a service called Apache HTTP is added.
    
    The **Add Service** dialog box is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/AccessApacheServerTemplateApp.png)
    
7. To make an attribute available as a required data-entry field to users of the blueprint, click the publish icon:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/IconAttributePublish_96x51.png)
    :::note
    If you need to modify the attribute so that it is no longer published, click the publish icon again.
    :::
8. To add the service to the blueprint, click **Add**.
    

## Related Topics

- [VLAN Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md)
- [Subnet Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md)
- [Connect Resources and Apps](../../sandboxes/sandbox-workspace/connect-resources-and-apps.md)