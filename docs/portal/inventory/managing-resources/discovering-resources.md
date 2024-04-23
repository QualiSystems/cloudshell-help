---
sidebar_position: 5
---

# Discovering Inventory Resources

This article explains how to rediscover an existing inventory resource. The discovery process validates the resource's settings against the actual device or cloud provider (for cloud provider resources), and loads the device's resource structure (if exists) and settings into the resource. It runs as part of the resource creation process and needs to be rerun again whenever you edit a resource's settings, such as a cloud provider resource's address or access credentials.

**To rediscover an inventory resource:**

1. In the Inventory dashboard, in the Resources tab, click the resource's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_35x34.png) and select Discover.
    
    The Resource dialog box is displayed.
    
2. Edit the settings that are necessary for the resource discovery process.
    
    :::tip
    Use the Execution Server Selector if you want a specific Execution Server or group of Execution Servers to execute the resource's commands. For additional information about associating Execution Servers to resources, see [Associating Resources to Specific Execution Servers](./associate-resources-to-es.md).
    :::
    
3. Click Continue to rediscover the resource.

## Related Topics

- [Inventory Dashboard](../inventory-dashboard.md)
