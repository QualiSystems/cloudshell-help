# Assembly Lab: An Innovative Approach to Dynamic Resource Management

## Introduction

Assembly Lab revolutionizes traditional lab management by introducing a dynamic and flexible system for managing resources and fulfilling orders. Unlike conventional labs where the configuration of devices remains static, Assembly Lab enables the fluid movement of sub-resources between different resources to meet specific blueprint requirements. This document outlines the core principles, operational workflow, rules, and benefits of the Assembly Lab model.

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

Fixed devices are never selected as parts, only as complete resources. [Read more](#fixed-devices-1)

## Operational Workflow

### Reserving Blueprints

Customers order a blueprint, which does not have to be solvable with the current devices in the lab.

### Analyzing Requirements

The blueprint is analyzed to identify the necessary resources and sub-resources. This analysis determines the specific components needed to fulfill the order.

### Resolution Engine

The resolution engine attempts to automatically match the blueprint requirements with available resources. This automated process aims to streamline the assembly of environments by efficiently allocating resources.

### Handling Unmatched Requirements

If the resolution engine cannot match all the requirements, the sandbox environment will still go live. This approach allows users to manually shift sub-resources from other devices or adjust the requirements as needed.

### Assembling the Environment

The selected resources are assembled step-by-step to match the blueprint. This piecemeal approach ensures that each component is correctly configured and integrated into the final environment.

## Completing Work Order Resources

For a work order resource to be marked as completed, the following conditions must be met:

### Sub-Resource Matching

All sub-resources that match their requirements must be children of resources that match their parent requirements.

### Model and Value Matching

The matching resource must be of the same model as the requirement and have values that are required by the abstract resource.

### Hierarchical Completion

Each of the work order resources in their hierarchy must also be marked as "completed" for the entire resource to be considered completed.

## Required Actions for Incomplete Work Order Resources

Each work order resource that is not yet complete and has an issue blocking completion will have Required Actions. In the Work Order UI, by clicking on the warning or error indicator, users can see what is blocking completion and, in some cases, remediate the issue automatically.

For example:

If the sub-resource is not part of its parent, you can indicate that you have moved it in the real world and update Cloudshell to reflect that it has been moved.

Since an Assembly Lab involves moving devices in the lab, tracking the "real world" resource structure and cabling is critical. The purpose of the work order is not only to help reserve the right resources but also to indicate changes to the data that reflect what is happening in the lab.

## A Common Use Case

In a typical use case, Assembly Lab facilitates collaboration between two groups of users: lab managers and customers.

### Lab Managers

- Responsible for managing the lab and overseeing work orders.
- Ensure that resources are allocated efficiently and that the lab environment meets the specified requirements.

### Customers

- Submit requests using blueprints, which may represent new use cases or environments.
- Interact with lab managers through the sandbox to negotiate requirements and find solutions.

### User Interaction and Negotiation

#### Sandbox Interaction

The sandbox environment enables lab managers and customers to negotiate over requirements and make adjustments as needed. This can involve shifting devices around or changing requirements to something more feasible.

#### Capability Sets

User groups can be managed through capability sets, ensuring that each group has the appropriate access levels and permissions.

#### Sticky Notes

Sticky notes can be placed in blueprints and sandboxes to clarify requirements and communicate important information.

#### Work Order Comments

Lab managers can leave comments on each record in the work order, allowing customers to track progress and stay informed about the status of their requests.

## Fixed Devices

Administrators can configure devices to not be used as partial solutions in other devices.
This is done by adding an boolean attribute with the tag Fixed to resources.

Make sure to set this value to True for all resources who are never supposed to be used as parts in other resources.

:::note
Fixed resources can never be solutions for requests that are part of a cable route. This is so they maintain their current setup
:::

## Conclusion

Assembly Lab represents a significant advancement in lab management by introducing a dynamic and flexible system for managing and fulfilling orders. Through the principles of dynamic resource allocation, piecemeal order resolution, and resource fluidity, Assembly Lab enhances flexibility, efficiency, and scalability. This innovative approach ensures that the lab can meet diverse and complex requirements, optimize resource utilization, and deliver high-quality environments tailored to specific needs. Additionally, the inclusion of work orders and abstract resources, coupled with the resolution engine, empowers users to have greater control over their environments, fostering a collaborative and adaptive lab management ecosystem. The rules governing Assembly Lab further streamline operations and maintain logical integrity, ensuring a seamless and efficient resource management process. The ability to manage user groups through capability sets, use sticky notes for clarifications, and leave comments on work order records enhances communication and collaboration between lab managers and customers.
