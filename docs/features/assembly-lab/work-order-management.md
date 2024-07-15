---
sidebar_position: 3
---
# Work Order Management

In Assembly Lab, work orders are crucial for managing routes and resources within the sandbox. The work order consists of two main tabs: Resources and Routes.

## Resources Tab

The Resources tab maintains a record for each abstract resource or sub-resource. Each record can have a concrete resource that matches it and a "state" indicating its progress (Not Started, In Progress, Completed).

Until each work order resource has a concrete resource that matches the abstract requirement and is marked as Completed, the sandbox diagram will display the abstract resource rather than the concrete resource.

## Routes Tab

The Routes tab displays either cable routes or logical routes used to apply Layer 1 connectivity.

Each record in the Routes tab represents a single route.

- For cable routes (known as "direct" in the work order), if both work order resources at the terminus have been selected, users can apply "connect" to indicate that the devices have been wired together in the lab (or "disconnect" for the inverse).
- For Layer 1 routes, users can assign the work order resource to be connected to another device in the lab.