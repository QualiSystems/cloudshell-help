---
sidebar_position: 6
---

# Including/Excluding Inventory Resources

This article explains how to include or exclude resources from CloudShell. Note that CloudShell also excludes resources if their discovery process fails or while they are being edited. Excluded resources are not available for use in CloudShell blueprints and sandboxes.

:::note Important
You cannot reserve blueprints that contain excluded resources.
:::

**To exclude an inventory resource:**

- In the **Inventory** dashboard, in the **Resources** tab, click the resource's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Exclude**.
    
    An exclamation mark is displayed on the resource, indicating that it is excluded.
    
    ![](/Images/CloudShell-Portal/INVN/ExcludedResource.png)
    

**To include a resource:**

- In the **Inventory** dashboard, in the **Resources** tab, click the resource's More Actions button and select **Include**.
    
    The resource is included.
    
    :::note
    This does not rediscover the resource, so if the resource was excluded because of an error during the discovery process, you will still need to fix the problem and rediscover the resource.
    :::
    

## Related Topics

- [Inventory Dashboard](../inventory-dashboard.md)
