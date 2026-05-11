---
sidebar_position: 8
---

# Remove Resources to a Blueprint

**Description**: Remove an existing resource from a specific blueprint.

**Signature**: `remove_resource_from_topology(topology_name, resource_full_name)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `resource_full_name` | In | Yes | Specify the resource name. You can also include the full path from the root to the resource before the resource name, separated by slashes. For example: FolderName/ResourceName. |

**Sample**:

```javascript
packageEditor.remove_resource_from_topology('blueprint1','Chassis3')
```