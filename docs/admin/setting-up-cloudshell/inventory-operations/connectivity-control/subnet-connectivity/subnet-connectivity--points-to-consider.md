---
sidebar_position: 1
---

# Subnet Connectivity - Points to Consider

When adding a subnet to a blueprint diagram, take the following points under consideration. To learn how to add a subnet to a blueprint and set the service's attribute values, see [Services in Blueprints](../../../../../portal/blueprints/creating-blueprints/services.md).

## General

- By default, CloudShell creates a single subnet on the public cloud for the sandbox's public cloud Apps. However, blueprint designers can have CloudShell create additional subnets.
    :::note
    If both AWS and Azure Apps are included in the sandbox, CloudShell will create two subnets, one for each public cloud.
    :::
- There are two ways to create additional subnets, by adding **Subnet** services to the blueprint diagram or creating peer-to-peer connections by directly creating a **Connector** route between two AWS EC2 or Azure Apps.
- A sandbox that has additional subnets will create these subnets instead of the default one.

## Out-of-the-box support

- CloudShell provides out-of-the-box support for multiple subnets in the same sandbox for AWS EC2/Azure Apps.

## Sandbox IP limit

- The maximum number of IPs per sandbox is 255. Therefore, when adding multiple subnet services, make sure the total subnet size does not exceed this limit.
- For P2P connections between two AWS EC2 or Azure Apps, CloudShell creates a subnet with 16 IPs.

## Private cloud Apps

- Subnet services cannot be connected to private cloud Apps, such as vCenter. For additional information, see [Virtual Network Connectivity](../../../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/index.md).

## Cloud provider resource

- All Apps connected to the same subnet must use the same cloud provider resource for their deployment. This prevents modeling a network with components in different clouds.
- CloudShell allows changing a connected deployed App's deployment type as long as the new deployment type uses the same cloud provider resource.

## Connections

- Deployed Apps cannot be connected or disconnected in the sandbox.
    
    However, if you need to disconnect a deployed App, you can remove it from the sandbox. This will both disconnect the App from the subnets or Apps it is connected to, and delete the App's VM from the cloud provider. For additional information, see [Apps in Sandboxes](../../../../../portal/sandboxes/workspace/apps/).
    
- It is possible to connect Azure Apps to predefined subnets residing on the Sandbox VNet. This capability is supported for Azure 2<sup>nd</sup> Gen cloud provider resources. For additional information, see [Connecting Azure Apps to predefined subnets](../../../../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md#connecting-azure-apps-to-predefined-subnets).
- If the diagram has any subnet services, make sure all AWS EC2/Azure Apps in that diagram are connected to at least one subnet. For additional information, see [Apps in Sandboxes](../../../../../portal/sandboxes/workspace/apps/).
- For AWS EC2 instances, the subnet range allocation is independent from the IP allocation. As a result, instance IPs may not be included in the defined range of their subnet. Please note that this is a display issue and does not affect connectivity.
    
    For example, the IPs allocated to the deployed instances are outside the subnet's range:
    
    ![](/Images/Admin-Guide/Inventory-Operations/AWSSubnetConnectivity.png)
    

## Modifying subnets

- Subnet services cannot be added, edited or removed from a sandbox. For additional information, see [Services in Sandboxes](../../../../../portal/sandboxes/sandbox-workspace/services.md).

## Related Topics

- [Subnet Connectivity](./index.md)
- [Services in Blueprints](../../../../../portal/blueprints/creating-blueprints/services.md)
- [Apps in Blueprints](../../../../../portal/blueprints/creating-blueprints/apps/)
- [Virtual Network Connectivity](../../../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/index.md)
