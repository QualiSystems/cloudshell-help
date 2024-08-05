---
sidebar_position: 14
---

# Assembly Lab Overview

## Dynamic Resource Management

Assembly Lab transforms traditional lab management with a flexible, dynamic system for resource management and order fulfillment. Unlike static configurations in conventional labs, Assembly Lab allows fluid movement of sub-resources to meet specific blueprint requirements.

### Key Features

1. **Flexible Blueprint Resolution**: Unlike standard blueprint resolution that requires complete solutions, Assembly Lab allows partial solutions. Users can make changes to inventory or requests to gradually achieve the desired state.

2. **Route Handling**: Routes between resources are not immediately solved, but the system tries to select connected resources.

3. **Sandbox Creation**: A sandbox is created even if not all requirements are met, enabling users to proceed while resolving outstanding needs.

4. **Whole and Sub-Resource Utilization**: The system prioritizes whole resources to minimize fragmentation. If unavailable, it utilizes sub-resources from other resources.

5. **Port Matching**: Ports are matched within the same resource, maintaining logical connections.

6. **Abstract Resources Modification**: Abstract resources can be added and modified directly in a sandbox.

7. **Fixed Devices**: Fixed devices are used only as complete resources.

### Completing Work Order Resources

For a work order resource to be marked as completed:
- All sub-resources must match their parent requirements.
- Resources must match the model and required values.
- The hierarchy of work order resources must be completed.

### User Interaction and Negotiation

- **Sandbox Interaction**: Lab managers and customers can negotiate and adjust requirements.
- **Capability Sets**: User groups are managed with specific access levels and permissions.
- **Sticky Notes**: Notes can be added to blueprints and sandboxes for clarification and communication.
- **Work Order Comments**: Lab managers can leave comments on work orders for customer updates.

Assembly Lab offers a revolutionary approach to lab management, enhancing flexibility and resource efficiency.


## Related Topics

- [Assembly Labs](../../admin/setting-up-cloudshell/assembly-lab/index.md)
