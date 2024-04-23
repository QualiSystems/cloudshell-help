# VLAN Connectivity

CloudShell provides dedicated VLAN services that enable the creation of Layer 2 connections between both physical and virtual endpoints (for example, physical servers and App-deployed virtual machines) by allocating a VLAN ID for each connection. VLAN-based connectivity supports both peer-to-peer and many-to-many connections.

To use VLANs in CloudShell, the system administrator needs to perform the following configurations:

1. Make sure the organization's L2 switches are properly modeled in CloudShell, and include the appropriate resource connections, as explained in [Define the Resource Connections of the Switch or Patch Panel](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Rsc-Cncts.htm).
2. [Associate the VLAN service family to the domain categories](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN.htm?tocpath=CloudShell%20Administration%7CSetting%20Up%20CloudShell%7CInventory%20Operations%7CConnectivity%20Control%7CVLAN%20Connectivity%7C_____0#Associat)
3. [Customize the VLAN service models](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN.htm?tocpath=CloudShell%20Administration%7CSetting%20Up%20CloudShell%7CInventory%20Operations%7CConnectivity%20Control%7CVLAN%20Connectivity%7C_____0#Configur)
:::note Important:
Before setting up your L2 resources and connections, review [VLAN Connectivity - Points to Consider](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN-Cnsdr.htm).
:::
:::tip
CloudShell supports connecting vCenter Apps to existing port groups. For details, see [Connecting vCenter Apps to an existing VLAN port group](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Rsrc-Cnct.htm#Connecti3).
:::
## How CloudShell creates VLAN connections

When resolving a VLAN connection between sandbox resources/Apps, CloudShell assumes the devices can access one another on the L2 network. In other words, if the connection involves several interconnected switches, CloudShell only configures the edges of the layer 2 networks but doesn’t affect what happens inside.

For example, the diagram below illustrates an L2 network using three L2 switches. Switch 1 is connected to your physical devices, while switches 2 and 3 comprise the fabric.

![](/Images/Admin-Guide/Inventory-Operations/L2NetworkDiagram.png)

When connecting any of the endpoints, whether its physical devices or virtual machines deployed in your vCenter server, CloudShell only cares about their immediate ports, and not what happens between them.

## How CloudShell allocates VLAN IDs

CloudShell allocates VLAN IDs for routes using several parameters that are defined by the administrator in the VLAN service. The parameters are **Pool Name**, **VLAN ID**, **Allocation Ranges**, and **Isolation Level**, which are explained below.

CloudShell can check availability for a specific **VLAN ID** or find an available VLAN ID within the defined **Allocation Ranges**.

When connecting a route that uses a VLAN service, CloudShell allocates the VLAN ID based on the availability of the VLAN ID in the pool specified, which is the domain by default. However, if the VLAN ID is **Shared** (defined in the **Isolation Level** attribute), it can be shared among multiple connections in the same sandbox and between sandboxes in the same domain/pool.

## Associate the VLAN service family to the domain categories

To expose the VLAN services in the **Apps / Services** catalog of a specific domain, you must associate the service family to each desirable domain's service category. For information about creating service categories for domains, see [Creating a service catalog category](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-n-Cnfgr-Srvc.htm#Managing).

**To associate the VLAN services to the domain category:**

1. As system administrator, log into **Resource Manager Client**.
2. In the **Admin** ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Click the service family containing the VLAN services. For example, **Virtual Network**.
    
    The family's **Parameters** pane is displayed.
    
4. Click the **Categories** tab.
5. Click **Add**.
    
    The **Select Category** dialog box is displayed.
    
6. Select the domain category. To select multiple categories, press the **\[Shift\]** key.
7. Save your changes.

## Customize the VLAN service models

This section explains how to customize the default settings of the VLAN service and control which settings can be changed by the user in the blueprint diagram. To learn how to add a VLAN service to a blueprint and set the service's attribute values, see [Services in Blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Blprnt-Use-Srvc.htm).
:::note
Additional VLAN services can be created. For example, you could set up multiple VLAN Auto services in the same domain, each with a different allocation range. Simply duplicate an existing VLAN service and edit the settings, as appropriate. Then, in the Scripts - Resource management page, add the new VLAN service model to the Vlan Service Connect All script.
:::
   - **VLAN Auto**: This preset automatically selects the VLAN ID for each endpoint connection out of a defined range according to availability in the domain's pool. **VLAN Auto** allocates VLAN IDs as exclusive by default. This means that the same VLAN ID cannot be used in two or more sandboxes in the same pool.

:::note
**VLAN Auto** selects only one available VLAN ID, even if it is used in **Trunk** mode.
:::
    <details>
    <summary>**Customizing a VLAN Auto preset**</summary>
    
    **To customize a VLAN Auto preset's attributes:**
    
    1. In the **Resource Families** explorer, open the **Virtual Network** service family and click the **VLAN Auto** service model. Alternatively, copy the service model to customize a separate preset.
        
        The **Parameters** pane is displayed to the right of the **Resource Families** explorer.
        
    2. Click the **Attributes** tab and configure the required attributes:

<table>
    <thead>
        <th>Attribute</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Access Mode</td>
            <td>
            Determines if the VLAN is configured as Access or Trunk. Default is Access.
:::note
Only Access mode is supported for OpenStack instances deployed in CloudShell sandboxes.
:::
            </td>
        </tr>
        <tr>
            <td>Allocation Ranges</td>
            <td>
            Determines the ranges of VLAN IDs that can be used. CloudShell will select the first available ID from the allocation ranges specified.

You can specify one or more ranges, and specific VLAN IDs. Multiple values are separated by a comma. Default range is 2-4094 for VLAN and 16777216 for VXLAN.

For example: "3, 100-220, 300-350"
:::note
VXLAN ID ranges are only supported for OpenStack cloud provider. To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack.
:::

:::important
Modifying a range will not affect VLANs that are currently in use.
:::
            </td>
        </tr>
        <tr>
            <td>Isolation Level</td>
            <td>Determines if the allocated VLAN ID is **Exclusive** or **Shared**. Default is **Exclusive**.</td>
        </tr>
        <tr>
            <td>Virtual Network</td>
            <td>Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited.</td>
        </tr>
        <tr>
            <td>VLAN ID</td>
            <td>(Optional) Enables you to specify the VLAN ID (or range if **Access Mode** is set to **Trunk**) to use. The VLAN ID must be included in the specified allocation range. However, if the VLAN ID is already allocated exclusively to someone else, an error will be displayed.</td>
        </tr>
        <tr>
            <td>Pool Name</td>
            <td>
            (Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites.

If empty, the domain name is used.
:::note
A VLAN service can allocate the same VLAN in different domains if the pool name is not set.
:::
            </td>
        </tr>
        <tr>
            <td>QinQ</td>
            <td>
            (Only in **Access** mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is **False**.
:::note
If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail.
:::
            </td>
        </tr>
    </tbody>
</table>

    3. Save your changes.
</details>    
- **VLAN Manual**: This preset enables the user to specify the VLAN ID to use. **VLAN Manual** allocates VLAN IDs as shared by default.
<details>
    <summary>**Customizing a VLAN Manual preset**</summary>
    
    **To customize a VLAN Manual preset's attributes:**
    
    1. In the **Resource Families** explorer, open the **Virtual Network** service family and click the **VLAN Manual** service model. Alternatively, copy the service model to customize a separate preset.
        
        The **Parameters** pane is displayed to the right of the **Resource Families** explorer.
        
    2. Click the **Attributes** tab and configure the required attributes:
        
<table>
    <tbody>
        <tr>
            <td>**Access Mode**</td>
            <td>
            Determines if the VLAN is configured as **Access** or **Trunk**. Default is Access.
:::note
Only **Access** mode is supported for OpenStack instances deployed in CloudShell sandboxes.
:::
            </td>
        </tr>
        <tr>
            <td>**Isolation Level**</td>
            <td>Determines if the allocated VLAN ID is **Exclusive** or **Shared**. Default is **Shared**.</td>
        </tr>
        <tr>
            <td>**Virtual Network**</td>
            <td>Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited.</td>
        </tr>
        <tr>
            <td>**VLAN ID**</td>
            <td>(Mandatory) Enables you to specify the VLAN ID (or range if **Access** **Mode** is set to **Trunk**) to use. If the VLAN ID is already allocated exclusively to someone else, an error will be displayed.</td>
        </tr>
        <tr>
            <td>**Pool Name**</td>
            <td>
            (Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites.

If empty, the domain name is used.
:::note
A VLAN service can allocate the same VLAN in different domains if the pool name is not set.
:::
            </td>
        </tr>
        <tr>
            <td>**QinQ**</td>
            <td>
            (Only in **Access** mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is **False**.
:::note
If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail.
:::
            </td>
        </tr>
    </tbody>
</table>
        
    3. Save your changes.
</details>
    
- **P2P VLAN Default**: This preset enables you to set the default VLAN settings to be used by peer-to-peer connections. By default, it allocates an exclusive VLAN ID for each endpoint connection out of a defined range according to availability in the domain's pool.

<details>
<summary>**Customizing a P2P VLAN Default preset**</summary>

The default VLAN service to be used for peer-to-peer connections can be defined by a **P2P VLAN Default** service model. Even if not configured, a peer-to-peer fallback is provided by CloudShell, as described in the note at the bottom of this section.
:::note
P2P VLAN Default is an admin-level service that is only visible to domain and system administrators in CloudShell Portal.
:::
**To customize a P2P VLAN Default preset's attributes:**

1. In the **Resource Families** explorer, open the **Virtual Network \- Administrative** service family and click the **P2P VLAN Default** service model. Alternatively, copy the service model to customize a separate preset.
    
    The **Parameters** pane is displayed to the right of the **Resource Families** explorer.
    
2. Click the **Attributes** tab and configure the required attributes:

<table>
    <tbody>
        <tr>
            <td>Access Mode</td>
            <td>
            Determines if the VLAN is configured as **Access** or **Trunk**. Default is **Access**.
:::note
Only **Access** mode is supported for OpenStack instances deployed in CloudShell sandboxes.
:::
            </td>
        </tr>
        <tr>
            <td>Allocation Ranges</td>
            <td>
            Determines the ranges of VLAN IDs that can be used. CloudShell will select the first available ID from the allocation ranges specified.

You can specify one or more ranges, and specific VLAN IDs. Multiple values are separated by a comma. Default range is 2-4094 for VLAN and 16777216 for VXLAN.

For example: "3, 100-220, 300-350"
:::note
VXLAN ID ranges are only supported for OpenStack cloud provider. To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack.
:::
:::important
Modifying a range will not affect VLANs that are currently in use.
:::
            </td>
        </tr>
        <tr>
            <td>Isolation Level</td>
            <td>Determines if the allocated VLAN ID is **Exclusive** or **Shared**. Default is **Exclusive**.</td>
        </tr>
        <tr>
            <td>Virtual Network</td>
            <td>Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited.</td>
        </tr>
        <tr>
            <td>VLAN ID</td>
            <td>(Optional) Enables you to specify the VLAN ID (or range if **Access** **Mode** is set to **Trunk**) to use. The VLAN ID must be included in the specified allocation range. However, if the VLAN ID is already allocated exclusively to someone else, an error will be displayed.</td>
        </tr>
        <tr>
            <td>Default VLAN</td>
            <td>Defines the Virtual Network service as a default service to use for peer-to-peer connections.</td>
        </tr>
        <tr>
            <td>Pool Name</td>
            <td>
            (Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites.

If empty, the domain name is used.
:::note
A VLAN service can allocate the same VLAN in different domains if the pool name is not set.
:::
            </td>
        </tr>
        <tr>
            <td>QinQ</td>
            <td>
            (Only in **Access** mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is **False**.
:::note
If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail.
:::
            </td>
        </tr>
    </tbody>
</table>
1. Save your changes.
:::note Notes
When a peer-to-peer connection is being resolved, CloudShell selects a VLAN to use according to the following logic:

1. CloudShell selects the P2P VLAN Default service that exists in the blueprint.

2. Otherwise, it uses a P2P VLAN Default service in a category associated to the user's domain.  
    
3. Otherwise, it uses a P2P VLAN Default service in CloudShell.  
    
4. Otherwise, the VLAN Auto preset's settings are used.
:::
</details>

    ## Related Topics
    
    - [VLAN Connectivity - Points to Consider](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN-Cnsdr.htm)
    - [Services Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Services.htm)
    - [Apps Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Apps.htm)
    - [Connections Legend](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Cnctivity-Lgnd.htm)
    - [Virtual Network Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Cnct/Vir-Ntwrk-Cnct-Cntnr.htm)
    - [Connect Resources and Apps](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Rsrc-Cnct.htm)