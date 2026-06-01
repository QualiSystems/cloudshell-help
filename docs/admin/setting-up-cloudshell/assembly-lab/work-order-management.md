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

Each record in the Routes tab represents a single route. Routes are sorted alphabetically for easier navigation.

- For cable routes (known as "direct" in the work order), if both work order resources at the terminus have been selected, users can apply "connect" to indicate that the devices have been wired together in the lab (or "disconnect" for the inverse). The **Save & Connect** button is disabled for Cable type routes since no Layer 1 connection is needed.
- For Layer 1 routes, users can assign the work order resource to be connected to another device in the lab.

### Route Search

When searching for resources to assign to a route, the following search capabilities are available:

- **L1Connectables filter** — filters the resource search to show only resources that can be connected via Layer 1 infrastructure.
- **Free text search** — type any text to filter route entries by name or other attributes.

## Permissions and State Management

### Work Order Permissions

Only administrators or users who have been explicitly granted permission can update work orders. This ensures that work order modifications are controlled and auditable.

### Recursive State Updates

When setting a parent resource's state to **Completed**, all child ports under that parent are automatically set to Completed as well. This eliminates the need to manually update each sub-resource individually.

### Pending Sandbox Restrictions

When a sandbox is in **Pending** state, connectivity changes (connecting or disconnecting routes) are blocked. The sandbox must transition out of the Pending state before route connectivity operations can be performed.

### Resource Sorting

Resources in the work order view are sorted by their request name, making it easier to find and manage specific work order items.