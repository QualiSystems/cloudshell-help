---
sidebar_position: 2
---

# Reserving Resources from the Inventory

Admins can reserve a resource directly from the Inventory dashboard. This will create a sandbox containing only this resource (as well as its sub-resources if the resource is unshared by default). By default, this option is available for CloudShell admins only but can be exposed to regular users using the `AllowRegularUsersToReserveFromInventory` configuration key.

:::note
This creates a limited sandbox that does not include orchestration and resource conflict management capabilities, and cannot use abstract resources or virtual resources. Therefore, if you need such capabilities, it is recommended to reserve a regular blueprint that has the required orchestration instead.
:::

![](/Images/CloudShell-Portal/Lab-Management/Working-with-the-Inventory/InventResResFromInventory.png)

**To reserve a resource from the Inventory:**

1. In the resource row, click the more actions (![](/Images/CloudShell-Portal/Lab-Management/Environments/ActionsButton_19x20.png)) button and select Reserve.
    
    The Reserve dialog box is displayed.
    
2. Enter the sandbox details and click **Reserve**.
    
    A sandbox containing this resource is created.
    

## Related Topics

- [Inventory Dashboard](../inventory-dashboard.md)
- [Creating Sandboxes](../../sandboxes/creating-sandboxes.md)
