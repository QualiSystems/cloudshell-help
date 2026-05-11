---
sidebar_position: 12
---

# Add Services to a Blueprint

**Description**: Add a service to a specific blueprint.

**Signature**: `add_service_to_topology(topology_name, service_name, alias, position_x, position_y)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `resource_full_name` | In | Yes | The name of the service that you want to add |
| `alias` | In | Yes | Specify an alias for the service |
| `position_x` | In | Yes | Indicate the x position in the diagram layout |
| `position_y` | In | Yes | Indicate the y position in the diagram layout |

**Samples**:

```javascript
packageEditor.add_service_to_topology('TestTopology','Service','ServiceC',500,500)
```