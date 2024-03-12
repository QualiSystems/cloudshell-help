---
sidebar_position: 4
---

# Configure Virtual Network Connectivity Requirements

Blueprint designers can configure new Virtual Network connectivity requirements or modify the properties of existing ones.

**To configure a connectivity requirement's properties:**

1. In the diagram, click a connectivity route. From the context menu, select **Properties**.
    
    The **Connection Properties** side pane is displayed.
    
2. Click the arrow button in the upper right-hand corner of a connectivity requirement's row. From the context menu, select **Attributes**.
    
    ![](/Images/CloudShell-Portal/Lab-Management/ConnectorAttributesOpen.png)
    
    The **Connector Attributes** side pane is displayed. The side pane includes a diagram of the source and target endpoints and lists the connectivity requirement's attributes. Editable attributes have a ![](/Images/CloudShell-Portal/Lab-Management/Reservations/EditButton_19x21.png) button.
    
    ![](/Images/CloudShell-Portal/Lab-Management/ConnectorAttributesSidePane.png)
    
3. If an endpoint is an App or a deployed App and a vNIC is not specified, CloudShell will use the first available vNIC (in the holding network specified in the App's cloud provider resource) to make the connection.
    
    You can specify the vNIC to use in the **Requested Source Vnic Name** and **Requested Target Vnic Name** attributes (the source and target endpoints are identified on the diagram at the top of the **Connector Attributes** side pane). Use commas to specify multiple vNIC names. For private cloud Apps, you can specify the full name or index number of the vNIC (for example, "Network adapter 2" or simply “2”). For public cloud Apps, specify the device index number (for example, "2").
    
    CloudShell also allows mapping sub-resources that reside on the deployed App, like blades and ports, to other endpoints, but this requires some configuration. For details, see the CloudShell Dev Guide's [Mapping Connections using App Sub-resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Mapping-App-Connections.htm) article.
    
    :::note Notes:
    - For AWS EC2 and Azure Apps that have multiple connections, the vNICs must be sequential. In other words, if there is a gap in the sequence, CloudShell will try to use the next vNIC in the sequence to fill the gap, but if that vNIC is missing, the sandbox will fail. For example, if your VM is connected to 4 subnets, you will be able to specify indexes 0 and 3 on specific connections, and CloudShell will use eth0 and eth3 on them. The other 2 connections that don't have a specified index will use eth1 and eth2 randomly. The same example will fail if either eth1 or eth2 are missing.
        
    - If the App's connection fails, make sure the vNIC is available in the holding network specified in the App's cloud provider resource.
    :::
4. Click **Save**.

## Related Topics

[Apps Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Apps.htm)