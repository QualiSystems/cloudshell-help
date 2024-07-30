---
sidebar_position: 4
---

# Update Resource Attributes

You can prepare or assign, from within the blueprint workspace, resource attributes that have the **Setting** rule attached to them. For example, to define values that you will want to use later on in the sandbox for a specific scenario.
:::note
**Points to consider:** CloudShell does not automatically set the new values on the resource, as it does when you set custom resource attribute values in the sandbox.

- You need to first apply the changes using the [Activate-topology](pathname:///api-docs/2024.1/Python-API/cloudshell.api.html?highlight=activatetopology#cloudshell.api.cloudshell_api.CloudShellAPISession.ActivateTopology) API, which can be added to the setup flow. Please take into account that this API will also trigger the connection of all the L1 routes.
- Alternatively, you can read the updated values from the blueprint's information using the [GetTopologyDetails](pathname:///api-docs/2024.1/Python-API/cloudshell.api.html?highlight=gettopologydetails#cloudshell.api.cloudshell_api.CloudShellAPISession.GetTopologyDetails) API, and either use it to set the values on the resource or just use it as part of the scripts.
:::
**To modify resource attributes:**

1. In **Diagram** view, hover over the resource. From the **Actions** menu, select the **Attributes** option.
    
    The **Resource Attributes** pane is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Updating-resource-attributes.png)
    
2. You can edit attributes that are not set to read-only by clicking the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/EditButton.png) button next to it.

3. Click **Save**.
    

## Related Topics

- [Blueprint Workspace](../../blueprint-workspace/index.md)