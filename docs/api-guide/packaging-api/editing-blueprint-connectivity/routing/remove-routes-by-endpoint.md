---
sidebar_position: 3
---

# Remove Routes (by Endpoints)

**Description**: Remove an existing route from a specific blueprint.

**Signature**: `remove_route_by_endpoints(topology_name, source, target, direction)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `source` | In | Yes | The name and path of the source resource (end point) |
| `target` | In | Yes | The name and path of the target resource (end point) |
| `direction` | In | Yes | Specify the direction of the route: Uni, Bi |

**Sample**:

```javascript
packageEditor.remove_route_by_endpoints('blueprint1', 'Chassis1/Blade1/Port4','Chassis2/Blade1/Port1','Bi')
```