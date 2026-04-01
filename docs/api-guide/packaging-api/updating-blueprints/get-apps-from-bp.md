---
sidebar_position: 11
---

# Get Apps from a Blueprint

**Description**: Get all apps from an existing blueprint.

**Signature**: `get_apps(topology_name)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |

**Sample**:

```javascript
packageEditor.get_apps('TestTopology')
```