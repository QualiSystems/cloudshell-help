---
sidebar_position: 4
---

# Configure Physical Network Connectivity Requirements

It is possible to configure new connectivity requirements or modify the properties on existing ones using the **Resource Connections - Inventory** tab.

**To configure a connectivity requirement:**

1. In the **Resource Connections** dialog box, click the **Inventory** tab.
    
    To edit an existing connectivity requirement, in the blueprint or sandbox, click a connectivity requirement. From the context menu, select the **Inventory** option.
    
2. In the **Inventory** tab, click a connectivity requirement.
    
    The connectivity requirement's row expands.
    
3. You can edit the following:
    
    | Field | Description |
    | --- | --- |
    | Alias | Click the **Alias** field and enter the description. The route's alias is displayed for the route in the diagram workspace. |
    | Type | To define the data transfer direction between the resources, from the **Type** dropdown list, select the suitable option:<ul><li>**Bi** \- Supports bidirectional data flow</li><li>**Uni \(\-\-\>\)** \- Supports unidirectional data flow from the left resource to the right resource</li><li>**Uni \(\<\-\-\)** \- Supports unidirectional data flow from the right resource to the left resource</li></ul> |
    | Status | <span style={{ color: 'red' }}>As this feature imposes many restrictions on how environments are resolved and cannot be used in conjunction with some other features such as abstract resources, it is strongly recommended to use shared routes only if it is absolutely required.</span><br/>Shared routes enable you to dynamically create an L1 route and then share it across several sandboxes.<br/>When reserving a blueprint containing a shared route, it is initially resolved like any other route by the reservation process. However, any subsequent reservations of blueprints containing that same route will simply be associated with that active route. Note that CloudShell does not prevent users from disconnecting/reconnecting shared routes in their sandbox, even if other sandboxes are currently using it. When a sandbox containing a shared route ends, CloudShell checks if any other sandboxes are currently associated with the same shared route, and will only disconnect that route when the last remaining sandbox is no longer active. In effect, a shared route is started by the first sandbox requesting it and automatically disconnects when the last sandbox referencing it ends.<br/>**Note:** Disconnecting a shared route or tearing down the route's sandbox does not affect other shared routes.<br/>**Points to consider:**<ul><li>Shared routes must use the same endpoints (resources and ports) and the ports must be defined as shared.</li><li>This feature is not supported for connection routes involving abstract resources.</li><li>Because multiple sandboxes can use the same route, there are additional restrictions on how it can be used and scheduled.</li></ul>For example, if a specific multi-hop route has already been resolved for a shared route it might conflict with an overlapping sandbox reservation using a different solution. These types of conflicts can be hard to troubleshoot, which again emphasizes the need to use this feature only when there are no alternatives. |
    | Max Hops | This value determines the maximum number of leaps, or hops, between L1 switches or patch panels in the route.<br/>For example, if a route has 2 maximum hops defined but the only available connection solution is `Source<->L1a<->L1b<->L1c<->L1d<->Target`, the route will fail because the maximum allowable number of hops is 2 while the route requires 3. The default is set in the `DefaultMaxHopsForRoute` key. |
    | Attribute | Route attributes are attributes that have the **Link Configurations** rule enabled. These attributes reside on the L1 resource ports. Note that changing a route attribute's value updates the actual port on the L1 resource.<br/>**Note:** In the blueprint, you can change port attributes in the route's **Resource Connections** dialog box or **Connection Properties** side pane, while in the sandbox, you need to use the side pane.<br/>**To change a route attribute's value:**<ul><li>Do one of the following:<ul><li>In the blueprint:<ul><li>Click the route. From the context menu, select **Inventory**.</li><li>Click the connection row and scroll down to the attribute.</li></ul></li><li>In the sandbox: Click the route. From the context menu, select **Properties**.</li></ul></li><li>Select the attribute's check box and specify the value.</li><li>Select the attribute's target. Options are:<ul><li>**Source**: Updates the attribute's value on the L1 resource port that is connected to the source endpoint</li><li>**Target**: Updates the attribute value on the L1 resource port that is connected to the target endpoint</li><li>**All**: Updates all L1 resource ports in the route</li></ul></li><li>Click **Save** (or **Activate** in the **Resource Connections** side pane to apply the changes to the L1 resource ports).</li></ul>When a route is connected in the sandbox, CloudShell saves the attribute values for the route and applies them to the route's selected resources. For example, if the Speed attribute is set to be 10G, upon connecting a route with such an attribute value, CloudShell will set this speed on the L1 switch.<br/>**Tip:** To see the attribute's value, from the Sandbox menu, select Show Physical Layer. Hover over the L1 resource and select Structure. In the Resource Structure side pane, click the connection row's arrow and select Attributes. |
    

4. Click **Save**.

## Related Topics

- [Physical Network Connectivity](./index.md)
- [View Physical Network Connectivity Requirements](./view-phy-net-connectivity-req.md)
- [Add Physical Network Connectivity Requirements](./add-phy-net-req/index.md)