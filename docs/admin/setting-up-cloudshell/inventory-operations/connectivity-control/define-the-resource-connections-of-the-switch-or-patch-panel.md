---
sidebar_position: 4
---

# Define the Resource Connections of the Switch or Patch Panel

*This section applies to patch panels, power switches, L1 switches and L2 switches. For brevity, the term "switch resource" is used for all four.*

Once the resource structure of the switch is updated, you can define which devices are connected to the switch's ports by associating the CloudShell resources of those devices to the switch resource(s).
:::note
CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.
:::
**To define resource connections:**

1. In **Resource Manager Client**, open the **Resource Explorer** pane.
2. Right click the switch resource and click **Configuration**.
    
    The **Configuration** page is displayed.
    
3. Click the **Connections** button at the bottom of the page.
    
    The **Resource connection** dialog box is displayed.
    
4. Connect a resource's port to a different port in the switch resource by clicking each port's **Connected To** button, selecting the resource's **Family** and **Resource**, and selecting the port to connect.
5. For each connection, you can set the **Connection Weight**. To do so, double click the **Connection Weight** cell of the connection and specify the desired number. The default value is 10.
    
    The connection weight ensures that specific connections take priority over others when an L1 route can be resolved through multiple possible connections. Specifically, the more weight a connection has, the "heavier" it becomes, and CloudShell's route resolution will be less likely to choose it, and the opposite is true as well - a connection with less weight will have a higher likelihood of being chosen for a route.
    
    For example, in a hub and spoke formation that includes multiple switches, let's say DUT 1 resource normally uses Switch 1 and Switch 2 to connect to DUT 2. In cases where this route is jammed, you could have DUT 1 use the more expensive central switch instead by setting the sum of this route's connection weights to be lower than that of the normal route.
    
6. Click **OK** in the **Resource connection** dialog box.
7. Repeat this step to connect all relevant resources to the switch resource.
8. Save your changes.

## Related Topics

- [Patch Panels](./patch-panels.md)
- [L1 Switches](./l1-switches.md)
- [VLAN Connectivity](./vlan-connectivity/index.md)
