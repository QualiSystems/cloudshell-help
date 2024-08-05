# Add Physical Network Connectivity Requirements

After you add resources into the blueprint or sandbox, you can add their connectivity requirements by drawing connectivity lines between them. There are four connection types: Route, Cable, Tap, and Visual. They are explained in detail below. For app connections, see [Add Virtual Network Connectivity Requirements](../../add-virtual-network/add-virtual-net-connectivity-req.md).

:::note
Creating a route request in the blueprint doesn’t guarantee that a possible solution (actual physical connectivity between the endpoints) exists.
:::

**To add resource connectivity requirements:**

1. In the diagram, hover over a resource and from the context menu, select the Create Connection option.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/CreateConnectionButton.png)
    
2. Click a target resource to connect.
    
    The **Resource Connections** dialog box is displayed, listing the ports in both the source and target resources that can be used to create the connectivity requirement.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Environments/ResourceConnectionWindow.png)
    
3. From the **Connection Type** dropdown list, select the connection type.
    
    Each connection type is represented by a color code (see [View Physical Network Connectivity Requirements](../view-phy-net-connectivity-req.md)). For the different connection line types and icons used to indicate different connection variations, see [Connections Legend](../../connections-legend.md).
    
    | Connection type | Description |
    | --- | --- |
    | Route (Logical) | A route represents a logical connection between two endpoints that may or may not be connected directly and are represented on the diagram by lines. A route may be requested from a source resource that is connected indirectly to the target resource via an L1 switch or patch panel, it can also be used to represent a virtual network link between the two devices. Each of the inner connections between the source and target resource is a route segment. Route segments can be physical connections between two devices, or mapped connections within the switch or panel. |
    | Cable (Physical) | Represents a request for a physical connection between two endpoints. The cable indicates a direct connection between two resources hence includes only one segment. This requires communicating the cable request to the system administrator who needs to physically connect the resources with a cable. <br/><br/> The following workflow is provided to address situations where you need to make a physical connection between resources in the blueprint. A different workflow may be used to suit your organization's needs.<br/>i. Email the required cable connection to the system administrator. You can draw the connectivity lines between the resources in the blueprint and send them in a CSV file - see [Exporting Diagrams](../../../../../blueprints/creating-blueprints/export-blueprints/export-diagram.md). <br/>ii. The system administrator connects the resources with a physical cable and notifies you that the connection is ready. <br/>iii. Reserve the blueprint and create the missing connection using the Cable (Physical) connection type.<br/>iv. Connect the resources.<br/> Once a connection is established, the broken connection line becomes a solid line. |
    | Tap (Logical) | Creates a type of route that represents a unidirectional connection from a tapped resource (source) to a monitoring device (target). The tap route is direction sensitive. |
    | Connector (Visual) | This connection is visual only and can be created between any types of endpoints, connectable and non-connectable alike. This connection type does not have connected and disconnected states, just one default state. This type can be used for many different reasons. For example, to visualize some logical relation between endpoints in the diagram, or to pass information to the blueprint's orchestration or one of the resources regarding custom relations between resources. <br/><br/>This connection is also used for L2 and L3 connectivity (CloudShell determines this automatically based on the endpoints) - see [Add Virtual Network Connectivity Requirements](../../add-virtual-network/add-virtual-net-connectivity-req.md). |
    

The available source and target port lists are updated according to the selected connection type.

4. Optionally, use the filters located in the left filter bar to find the ports to use. The following filters are available:
    
    | Filter category | Options |
    | --- | --- |
    | Resources | <ul><li>**In this workspace:** Selecting this option will display only ports that are already part of the workspace</li><li>**Include already in use:** Selecting this option will include ports that are currently being used by other connections</li></ul> |
    | Availability | <ul><li>**Show all:** Will display all ports either they are available or not</li><li>**Available Now:** Will display ports that are currently available ( for blueprint editing only)</li><li>**For this sandbox:** Will display ports that are available for the sandbox duration (for sandbox only)</li></ul> |
    | Connectivity | <ul><li>**Only disconnected:** Will display ports that are not physically connected to any other device</li><li>**Only connected:** Will display ports that are physically connected to another device</li><li>**Any status:** Will display ports whether either they are physically connected or not</li></ul> |
    | Domain (available for blueprint editing only) | <ul><li>**Current domain:** Deselecting this option will display ports from domains other than the current domain</li></ul> |
    
    It is also possible to add custom filters based on attribute values. For example, filtering by protocol type. To configure an attribute to be shown as a filter in the **Resource Connections** dialog box, enable the **Displayed in Route Creation** rule in the attribute in **Resource Manager**. The user should be able to filter ports based on the attributes values.
    
5. To specify multiple routes between the two endpoints, see [Add Multiple Physical Network Connectivity Requirements](../../../../../blueprints/creating-blueprints/add-connectivity/add-physical-network/add-phy-net-req/index.md).
6. From the **Select Source Port** pane, select the port of the source endpoint.
7. From the **Select Target Port** pane, select the port of the target endpoint.
8. Click the **Add** button to add the connectivity requirement. You can add more connectivity requirements between additional ports by repeating the same sequence.
9. Click **Save** to add the new route.
    
    An indication message is displayed. For example:
    
    ![](/Images/CloudShell-Portal/Lab-Management/ResourceConnectionMessage.png)  
    When connecting the routes in a sandbox, CloudShell resolves the routes (establishes the required internal mappings in the L1 or Patch Panel resources along the route, or uses a Virtual Network if an App is included in the route).
    
    :::tip
    To check if the connectivity requirement you added can be solved, see [Check Blueprint](../../../../../blueprints/creating-blueprints/check-blueprint.md).
    :::
    

## Related Topics

- [Physical Network Connectivity](../../add-physical-network/index.md)
- [Physical Network Connectivity Prerequisites](../physical-net-connectivity-prereq.md)
- [View Physical Network Connectivity Requirements](../view-phy-net-connectivity-req.md)
- [Add Multiple Physical Network Connectivity Requirements](../add-phy-net-req/index.md)
- [Configure Physical Network Connectivity Requirements](../config-physical-conn-req.md)