---
sidebar_position: 1
---

# VLAN Connectivity - Points to Consider

When setting up your L2 resources, take these points into consideration.

## Compatibility

- CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.
    

## Out-of-the-box support

- CloudShell automatically deploys and tears down L2 connections when starting and ending the sandbox.
- CloudShell provides out-of-the-box support for multiple VLAN networks in the same sandbox.

## Networking

- CloudShell only controls and models the leaf switches (those connected to the endpoints). All L2 switches in the fabric must be fully trunked.
- To enable the use of VLANs between physical end points, make sure you connect the physical devices to the appropriate L2 switch resources, as explained in [Define the Resource Connections of the Switch or Patch Panel](../define-the-resource-connections-of-the-switch-or-patch-panel.md).
- To auto-discover an L2 switch resource and add it to the CloudShell inventory, you should use an appropriate CloudShell L2 Shell (from [Quali Repositories](https://github.com/orgs/QualiSystems/repositories)) that provides all the required VLAN connectivity capabilities.
- To enable connections for virtual machines deployed in a private cloud, make sure to configure networking in their cloud provider resource. For example, define the vCenter dvswitch or OpenStack management network when configuring the cloud provider resource.
- CloudShell supports L2 connections based on SDN. For details, see the [SDN Controller Shell Standard](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/SDN_controller_standard.md) and shells in the [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) page.

## VLAN services

- **VLAN service customizations**: Additional VLAN services can be created. For example, you could set up multiple VLAN Auto services in the same domain, each with a different allocation range. Simply duplicate an existing VLAN service and edit the settings, as appropriate. Then, in the **Scripts - Resource** management page, add the new VLAN service model to the **Vlan Service Connect All** script.
- Modifying a range on a VLAN service does not affect VLANs that are currently in use.
- Peer-to-peer (P2P) connections:
    
    - **P2P VLAN Default** is an admin-level service that is only visible to domain and system administrators in CloudShell Portal.
    - When a peer-to-peer connection is being resolved, CloudShell selects a VLAN to use according to the following logic:
        
        1. CloudShell selects the P2P VLAN Default service that exists in the blueprint.
        2. Otherwise, it uses a P2P VLAN Default service in a category associated to the user's domain.
        3. Otherwise, it uses a P2P VLAN Default service in CloudShell.
        4. Otherwise, the **VLAN Auto** preset's settings are used.

## OpenStack

- Only Access mode is supported for OpenStack instances deployed in CloudShell sandboxes.
- VXLAN ID ranges are only supported for OpenStack cloud provider, and configured in the Allocated Ranges attribute of the VLAN service.
    :::note
    To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack.
    :::
- VLAN Trunking: Starting with OpenStack Cloud Provider Shell version 1.2.0, CloudShell will create a new interface on the deployed App's VM for every connected VLAN service. For details, see [OpenStack Configuration Requirements](../../../../supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements.md).

## Related Topics

- [VLAN Connectivity](./index.md)
- [Services Overview](../../../../../intro/features/services.md)
- [Apps Overview](../../../../../intro/features/apps-overview.md)
- [Connections Legend](../../../../../portal/sandboxes/sandbox-workspace/add-connectivity/connections-legend.md)
- [Virtual Network Connectivity](../../../../../portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/index.md)
- [Connect Resources and Apps](../../../../../portal/sandboxes/sandbox-workspace/connect-resources-and-apps.md)
