---
sidebar_position: 7
---

# Connect Resources and Apps

You can connect and disconnect resources and Apps that are linked by a connection route. For information about connection routes, see [Connectivity Overview](../../../intro/features/connectivity.md)


## Viewing connection status

**To view the connection status of a connection:**

- Click a connection. A context menu is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Resource-Connectivity-in-a.png)
    
    The icon at the center of the menu circle indicates the current state of the route - **Connected** or **Disconnected**.
    
    For more details about the connection, from the side-panel, select **Properties**.
    

## Connecting or disconnecting reserved resources

You can connect or disconnect connections of type Route, Tap, Cable, and Connector (for LAN/Subnet connections). Connecting and disconnecting a connection creates/removes the internal mapping required for the connection.

:::note
When reserving a blueprint that has connection routes, the default setup script automatically connects all physical and virtual network connections. And when a sandbox ends, all the route mappings of the sandbox are cleared by the default teardown script. For additional information, see [CloudShell Sandbox Template](../../../admin/cloudshell-manage-dashboard/blueprint-templates.md#cloudshell-sandbox-template).
:::

**To connect or disconnect a reserved route:**

1. Click a connection.
2. From the **Actions** context menu, click the appropriate option (**Connect** or **Disconnect**).
    
    :::note
    You cannot connect or disconnect deployed Apps to or from a subnet.
    :::
    

## Connecting all endpoints of a VLAN service

It is also possible to connect all endpoints that are connected to a VLAN service using the service's Connect All command.

:::note
**Subnet** services are automatically deployed during the sandbox's setup phase by CloudShell's **Default Sandbox Setup** script, but do not have a **Connect All** command.
:::

**To connect a VLAN service's endpoints:**

1. In the sandbox, click the VLAN service.
2. Select **Commands**.
    
    The **Service Commands** pane is displayed on the right.
    
3. Click **Connect All**.
    
    :::note
    If the command is missing, ask your administrator to add the VLAN service model to the **Vlan Service Connect All** script in the **Scripts - Resource** management page.
    :::
    

## Connecting vCenter Apps to an existing VLAN port group

*This capability is supported for Apps based on [vCenter 2<sup>nd</sup> Gen shell](https://community.quali.com/repos/5386/vmware-vcenter-cloud-provider-shell-2g) cloud provider resources.*

It is possible to connect an App or deployed App to an existing port group. This enables you to connect deployed Apps in different sandboxes and also to connect Apps deployed in a sandbox to static VMs on the vCenter server. This creates a shared connection, so you can use the same VLAN ID in different blueprints/sandboxes.

:::note
This capability is supported only for vCenter Apps and applies to port groups created on the datacenter defined on the vCenter cloud provider resource.
:::

For illustration purposes, the below procedure assumes you want to connect an App to port group "QS\_vSwitch1\_VLAN\_100\_Access":

![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/vCenterVlanPortGroup.png)

**To connect an App to an existing port group:**

1. Configure the **Virtual Network** attribute on the VLAN service as follows:
    
    1. In Resource Manager Client, open the **Attributes** explorer.
    2. Edit the **Virtual Network** attribute.
    3. Make sure the **Read-only** checkbox is unselected.
        
        ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/VirtualNetworkAttribute.png)
        
    4. Click **OK** and save.
    5. Open the **Resource Families** explorer and expand the **Virtual Network** family.
        
        ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/VirtualNetworkFamily.png)
        
    6. Click the appropriate service model (**VLAN Auto / VLAN Manual**).
    7. From the model's **Attributes** tab, select **Virtual Network** and click **Edit Rules**.
    8. Select **User input** and click **OK** and save.
        
        ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/UserInput.png)
        
    
2. Open the blueprint or sandbox.
3. From the **App / Service** pane, drag the VLAN service into the diagram.
4. Set the service's details:
    
    - **Virtual Network**: Network name or ID in the **Virtual Network** field. Make sure to specify a value in the **VLAN ID** field - this will be ignored but it must have a value as it's a system mandatory attribute.
    - **VLAN ID**: Port group's VLAN ID. This VLAN ID will be used if the **Virtual Network** field is left empty.
    
    :::tip
    For additional port group configurations, see release 6.0.0 in [VMware vCenter](../../../admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities.md#vmware-vcenter).
    :::
    
5. Click Add.
6. Create connection requirements between the vCenter Apps and the service.
7. Deploy the connection(s), as appropriate.
    
    The connection is created like with any other VLAN service. This includes by deploying the App, connecting the purple Connector line if the App is already deployed, and reserving the blueprint.
    

## Connecting Azure Apps to predefined subnets

*This capability is supported for Apps based on [Azure 2<sup>nd</sup> Gen shell](https://community.quali.com/repos/5247/azure-cloud-provider-shell-2g) cloud provider resources.*

It is possible to connect Azure Apps to subnets residing in the Sandbox VNet.

**To connect Azure Apps to a predefined subnet:**

1. Download the `Azure.Subnet.zip` file from the Azure 2<sup>nd</sup> Gen shell's Integrations [page](https://community.quali.com/repos/5247/azure-cloud-provider-shell-2g).
2. Import the ZIP file into CloudShell Portal.
3. Open the blueprint or sandbox.
4. From the **App / Service** pane, drag the new **Azure Subnet** service into the diagram.
5. Set the following details on the service:
    - **Public**: Subnet's privacy policy - Public to enable connections to the subnet's VMs from outside the subnet or Private.
    - **Subnet Name**: The name of the subnet, as displayed in the Subnets blade on Azure.
6. Click **Add**.
7. Deploy the connection(s), as appropriate.
    
    The connection is created like with any other Subnet service. This includes by deploying the App, connecting the purple Connector line if the App is already deployed, and reserving the blueprint.
    

## Connecting OpenStack App to an existing network

*This capability is supported for Apps based on [OpenStack 2nd Gen shell](https://github.com/QualiSystems/OpenStack-Cloud-Provider-Shell-2G) version 1.2.0 and up.*

This section explains how to enable CloudShell to connect an OpenStack App to an existing network. This capability requires editing the **VLAN Auto** **/** **VLAN Manual** service models in Resource Manager Client.

**To allow connecting to an existing VLAN network:**

1. In Resource Manager Client, open the **Attributes** explorer.
2. Edit the **Virtual Network** attribute.
3. Unselect the **Read-only** checkbox and click **OK** and save.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/VirtualNetworkAttribute.png)
    
4. Open the **Resource Families** explorer and expand the **Virtual Network** family.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/VirtualNetworkFamily.png)
    
5. Click the appropriate service model (**VLAN Auto / VLAN Manual**).
6. From the model's **Attributes** tab, select **Virtual Network** and click **Edit Rules**.
7. Select **User input** and click **OK** and save.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/UserInput.png)
    
8. In the blueprint, add the VLAN service and specify a network name or ID in the **Virtual Network** field. Make sure to specify a value in the **VLAN ID** field - this will be ignored but it must have a value as it's a system mandatory attribute.
    
    :::note
    The network must have a subnet.
    :::
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/OpenStackVirtualNetworkService.png)
    
9. Click **Add**.

## Specify Subnet CIDR for OpenStack VLAN service

*This capability is supported for Apps based on [OpenStack 2nd Gen shell](https://github.com/QualiSystems/OpenStack-Cloud-Provider-Shell-2G) version 1.2.0 and up.*

This capability requires editing the **VLAN Auto / VLAN Manual** service models in Resource Manager Client.

**To allow connecting to an existing VLAN network:**

1. In Resource Manager Client, open the **Attributes** explorer.
2. Add a new attribute with the following settings:
    
    - Name: Subnet CIDR
    - Attribute Type: String
    - Value: CIDR string in the format `CIDR[;Gateway][;First_IP-Last_IP]`
    
    For example:
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/SubnetCIDR.png)
    
3. Open **Resource Families > Virtual Networks** and add the attribute to the appropriate service model (**VLAN Auto / VLAN Manual**).
4. To allow the user to set the subnet CIDR, in the service model, select the attribute, click **Edit Rules**, and make sure **User input** is selected.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Working-with-Services/SubnetCIDRUserInput.png)
    
5. Save your changes in the **Resource Families** explorer.

## Related Topics

- [Physical Network Connectivity](./add-connectivity/add-physical-network/index.md)
- [Virtual Network Connectivity](./add-connectivity/add-virtual-network/index.md)
- [L1 Switches](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md)
- [Patch Panels](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels.md)
- [VLAN Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md)
- [Subnet Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md)