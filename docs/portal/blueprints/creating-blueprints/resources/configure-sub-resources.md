---
sidebar_position: 5
---

# Configure Sub-resources

It is possible to reserve specific sub-resources for the time slot of the sandbox. This is useful in situations where you want to have exclusive access to certain ports. For example, ports on an L1 switch to resolve resource connections.
:::note
This option is available for resources that have defined sub-resources.
:::
To view a list of the sub-resources currently attached to this resource, hover over the resource, select **Structure** from the context menu.

**To add a sub-resource:**

1. In **Diagram** view, hover over the resource.
2. From the **Actions** menu, select **Add sub resource**.
    
    The **Add Resource** pane is displayed.
    
3. Use the search and filtering options to find the sub resource(s) you want to use.
4. Select the sub resource from the pane and drag it into the workspace.
5. Click the down arrow of the sub-resource and make sure the **Share** option is listed. If you see the **Unshare** option, select it to prevent users of other sandboxes from using this sub-resource during the time slot of the sandbox.

## Related Topics

- [Blueprint Workspace](../../blueprint-workspace/index.md)
- [L1 switches in CloudShell Portal](../../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md#l1-switches-in-cloudshell-portal)