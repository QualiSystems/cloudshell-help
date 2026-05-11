---
sidebar_position: 2
---

# Remove Routes (by Alias)

**Description**: Remove an existing route from a specific blueprint.

**Signature**: `remove_route_by_alias(topology_name, route_alias)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `route_alias` | In | Yes | Specify the route’s alias. |

**Sample**:

```javascript
packageEditor.remove_route_by_alias('blueprint1', 'ABC')
```