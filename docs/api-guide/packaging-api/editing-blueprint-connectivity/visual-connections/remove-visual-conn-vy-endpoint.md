---
sidebar_position: 3
---

# Remove Visual Connectors (by Endpoints)

**Description**: Remove the visual connector from a specific blueprint.

**Signature**: `remove_visual_connector_by_endpoints(topology_name, source, target, direction)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `source` | In | Yes | The name of the source |
| `target` | In | Yes | The name of the target |
| `direction` | In | Yes | Specify the direction of the connector: Uni, Bi |

**Sample**:

```javascript
packageEditor.remove_visual_connector_by_endpoints('blueprint1', 'Chassis1/Blade1/Port4','Vlan Auto 2','Bi')
```