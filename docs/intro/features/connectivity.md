---
sidebar_position: 5
---

# Connectivity Overview

Blueprints and sandboxes can contain different elements, such as physical and virtual devices as well as VMs on a public or private cloud. A big part of the sandbox is connectivity between these different elements, so after you add elements into your blueprint or sandbox, you can set up their connectivity requirements using connection lines and network services.

The following connectivity layers are supported:

- L1 networks between physical devices using direct physical route connections between the endpoints. Real-time mapping is supported and can be displayed, showing the L1 resource(s) and ports being used for the connections in the sandbox.
- L2 (VLAN) networks between physical or virtual devices/VMs using a **VLAN** service.
- L3 (subnet) networks for virtual elements using a **Subnet** service. For example, VMs on a public cloud such as AWS or Azure.
    

:::note Notes
- VLAN and Subnet networks support many-to-many connections.
- CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.
- For virtual machines, CloudShell provides additional networking customization options including port rules, security groups and more. For details, see [Adding App templates](../../admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template.md).
:::

For more information, see [Physical Network Connectivity](../../portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/index.md) and [Virtual Network Connectivity](../../portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/index.md).

## Related Topics

- [Connect Resources and Apps](../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md)
- [Connectivity Control](../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/..)