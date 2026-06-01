# Assembly Lab: An Innovative Approach to Dynamic Resource Management

## Introduction

Assembly Lab revolutionizes traditional lab management by introducing a dynamic and flexible system for managing resources and fulfilling orders. 

Unlike conventional labs where the configuration of devices remains static, Assembly Lab enables the fluid movement of sub-resources between different resources to meet specific blueprint requirements. 

The key is to understand the difference between standard Cloudshell blueprint resolution, and Assembly Lab blueprint resolution.
In the standard mode, the entire blueprint must be solved satisfactorily, or there will be a conflict.

In Assembly Lab, solving the blueprint partially is possible, and it is expected that further changes to the inventory OR to the request (originally a blueprint, but now a pending sandbox) will eventually bring the sandbox to the desired state.

## Diagram Editor

### Collapsing Abstract Nodes

When working with complex blueprints that contain many abstract requirements, users can collapse abstract nodes in the diagram editor for a cleaner visualization. Right-click an abstract node and select **Collapse** to hide its child elements. This helps manage large diagrams while retaining access to the full structure when needed.

## Assembly Lab Rules

### Route Handling

If there is a route between resources, the route will not be solved (i.e., Layer 1 ports will not be reserved). However, the system will attempt to select resources that are connected to Layer 1 switches.

### Smart Route Creation with L1 Priority

When creating routes between concrete devices in the sandbox, the system prioritizes using existing route segments (patch panels, Layer 1 infrastructure). If a valid route can be established through existing L1 infrastructure, it will be used automatically.

If no valid route can be established through existing L1 infrastructure, a provisional direct connection (device-to-device) is created. This placeholder route can later be refined by selecting appropriate connections through Layer 1 switches or patch panels.

### L1 Port Auto-Add on Solve

When solving an abstract requirement that is part of a route, if the solution resource is connected to a Layer 1 port, that port is automatically added to the route and reservation. This eliminates the need to manually manage L1 port assignments when resolving abstract requirements within routes.

Conversely, when unsolving an abstract, the associated L1 port is automatically removed from the route and reservation.

### Sandbox Creation

A sandbox is always created, even if not all requirements are met. This approach ensures that users can proceed with their projects while resolving outstanding requirements.

### Exclusive Requirement Solving

When solving exclusive abstract requirements, only the device itself is used as the solution — not the entire resource graph beneath it. This ensures that exclusive reservations are scoped precisely to the required resource.

Additionally, the "unsolve abstract" operation accurately determines which resources to remove from the reservation, preventing unintended removal of resources that are still needed by other requirements.

### Whole Resource Utilization

As many resource requirements as possible will be solved with whole resources. This approach minimizes fragmentation and maintains the integrity of individual resources.

### Sub-Resource Utilization

If a requirement cannot be met with an entire resource, the system will attempt to solve it using parts drawn from other resources. This flexibility ensures that requirements can still be met even if whole resources are not available.

### Port Matching

If a requirement involves a port (from the "connectable" family), matching the parent resource will automatically match the child resource. Ports will not be drawn from different resources but from within the same resource where they reside. This rule maintains the logical integrity of connections.

### Abstract Resources Modification

Abstract resources can now also be added directly to a sandbox and modified therein. This allows requirements to change during the lifetime of the sandbox.

### Abstract Quantity

:::warning[Quantity in Abstract Resources is not supported for Assembly Lab]
:::

### Fixed devices

Fixed devices are never selected as parts, only as complete resources. [Read more](./fixed-devices.md)

## Completing Work Order Resources

For a work order resource to be marked as completed, the following conditions must be met:

### Sub-Resource Matching

All sub-resources that match their requirements must be children of resources that match their parent requirements.

### Model and Value Matching

The matching resource must be of the same model as the requirement and have values that are required by the abstract resource.

### Hierarchical Completion

Each of the work order resources in their hierarchy must also be marked as "completed" for the entire resource to be considered completed.