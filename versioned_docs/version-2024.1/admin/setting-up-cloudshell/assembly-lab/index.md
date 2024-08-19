# Assembly Lab: An Innovative Approach to Dynamic Resource Management

## Introduction

Assembly Lab revolutionizes traditional lab management by introducing a dynamic and flexible system for managing resources and fulfilling orders. 

Unlike conventional labs where the configuration of devices remains static, Assembly Lab enables the fluid movement of sub-resources between different resources to meet specific blueprint requirements. 

The key is to understand the difference between standard Cloudshell blueprint resolution, and Assembly Lab blueprint resolution.
In the standard mode, the entire blueprint must be solved satisfactorily, or there will be a conflict.

In Assembly Lab, solving the blueprint partially is possible, and it is expected that further changes to the inventory OR to the request (originally a blueprint, but now a pending sandbox) will eventually bring the sandbox to the desired state.

## Assembly Lab Rules

### Route Handling

If there is a route between resources, the route will not be solved (i.e., Layer 1 ports will not be reserved). However, the system will attempt to select resources that are connected to Layer 1 switches.

### Sandbox Creation

A sandbox is always created, even if not all requirements are met. This approach ensures that users can proceed with their projects while resolving outstanding requirements.

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