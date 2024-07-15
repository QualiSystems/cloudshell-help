# Assembly Lab: An Innovative Approach to Dynamic Resource Management

## Introduction

Assembly Lab revolutionizes traditional lab management by introducing a dynamic and flexible system for managing resources and fulfilling orders. Unlike conventional labs where the configuration of devices remains static, Assembly Lab enables the fluid movement of sub-resources between different resources to meet specific blueprint requirements. This document outlines the core principles, operational workflow, rules, and benefits of the Assembly Lab model.

## Core Principles

### Dynamic Resource Allocation

Assembly Lab operates on the principle of dynamic resource allocation, where sub-resources can be reallocated as needed to fulfill specific orders. This flexibility ensures that the lab can adapt to varying requirements and optimize the use of available resources.

### Resource Fluidity

In contrast to regular lab management, where resources and devices are fixed, Assembly Lab promotes the fluidity of sub-resources. Sub-resources can be moved between different resources to achieve the desired configuration, enhancing the lab's ability to meet diverse and complex requirements.

### Work Orders and Abstract Resources

Each user request is represented by a work order, detailing the set of requirements needed for the desired environment. These requirements are also referred to as abstract resources.

## Configure an Assembly Lab Domain

To leverage the capabilities of Assembly Lab, a domain must be configured to the Assembly Lab domain. Once the domain is configured, all sandboxes created within this domain will adhere to the specific rules of Assembly Lab.

:::note
Once a domain has been configured as an assembly lab domain, do not try to change it back to a non-assembly lab domain. Assembly Lab domains have a different set of rules for resource management and blueprint resolution which are not compatible with standard domain operation.
:::

To set a domain to be an Assembly Lab domain, open the [domain's properties page in Resource Management Client](../../../cloudshell-identity-management/cloudshell-domains/domains-window.md).

1. Press Edit next to the domain name.
2. Tick the checkbox Assemble Lab and press `Ctrl+S`.

![configure domain](../../../static/Images/Admin-Guide/AssembleLab/configure-domain.png)

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

## Operational Workflow

### Reserving Blueprints

Customers order a blueprint, which does not have to be solveable with the current devices in the lab.

### Analyzing Requirements

The blueprint is analyzed to identify the necessary resources and sub-resources. This analysis determines the specific components needed to fulfill the order.

### Resolution Engine

The resolution engine attempts to automatically match the blueprint requirements with available resources. This automated process aims to streamline the assembly of environments by efficiently allocating resources.

### Handling Unmatched Requirements

If the resolution engine cannot match all the requirements, the sandbox environment will still go live. This approach allows users to manually shift sub-resources from other devices or adjust the requirements as needed.

### Assembling the Environment

The selected resources are assembled step-by-step to match the blueprint. This piecemeal approach ensures that each component is correctly configured and integrated into the final environment.

## Work Order Management

In Assembly Lab, work orders are crucial for managing routes and resources within the sandbox. The work order consists of two main tabs: Resources and Routes.

### Resources Tab

The Resources tab maintains a record for each abstract resource or sub-resource. Each record can have a concrete resource that matches it and a "state" indicating its progress (Not Started, In Progress, Completed).

Until each work order resource has a concrete resource that matches the abstract requirement and is marked as Completed, the sandbox diagram will display the abstract resource rather than the concrete resource.

### Routes Tab

The Routes tab displays either cable routes or logical routes used to apply Layer 1 connectivity.

Each record in the Routes tab represents a single route.

- For cable routes (known as "direct" in the work order), if both work order resources at the terminus have been selected, users can apply "connect" to indicate that the devices have been wired together in the lab (or "disconnect" for the inverse).
- For Layer 1 routes, users can assign the work order resource to be connected to another device in the lab.

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

## Benefits of Assembly Lab

### Increased Flexibility

The ability to move sub-resources between different resources provides greater flexibility in managing and fulfilling orders. This ensures that the lab can quickly adapt to changing requirements and optimize the use of available resources.

### Enhanced Efficiency

Piecemeal order resolution allows for more efficient resource allocation and utilization. By assembling environments step-by-step, Assembly Lab can ensure that each component is correctly configured and integrated, reducing the risk of errors and improving overall efficiency.

### Optimized Resource Utilization

The fluid movement of sub-resources ensures that resources are used optimally, minimizing waste and maximizing the lab's capacity to fulfill orders. This leads to cost savings and improved resource management.

### Scalability

Assembly Lab's dynamic and flexible approach makes it highly scalable. The lab can easily expand or contract its operations to meet changing demands, ensuring that it remains responsive and adaptable.

### User Empowerment

By allowing sandboxes to go live even with unmatched requirements, users have the power to make adjustments and optimizations in real-time. This empowers users to take control of their environments and ensure they meet their specific needs.

## Conclusion

Assembly Lab represents a significant advancement in lab management by introducing a dynamic and flexible system for managing and fulfilling orders. Through the principles of dynamic resource allocation, piecemeal order resolution, and resource fluidity, Assembly Lab enhances flexibility, efficiency, and scalability. This innovative approach ensures that the lab can meet diverse and complex requirements, optimize resource utilization, and deliver high-quality environments tailored to specific needs. Additionally, the inclusion of work orders and abstract resources, coupled with the resolution engine, empowers users to have greater control over their environments, fostering a collaborative and adaptive lab management ecosystem. The rules governing Assembly Lab further streamline operations and maintain logical integrity, ensuring a seamless and efficient resource management process. The ability to manage user groups through capability sets, use sticky notes for clarifications, and leave comments on work order records enhances communication and collaboration between lab managers and customers.
