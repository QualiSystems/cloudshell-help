---
sidebar_position: 7
---

# Add Resources to a Blueprint

**Description**: Add a new resource to a specific blueprint.

**Signature**: `add_resource_to_topology(topology_name, resource_full_name, is_shared=True, position_x=200, position_y=200)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `resource_full_name` | In | Yes | Specify the resource name. You can also include the full path from the root to the resource before the resource name, separated by slashes. For example: FolderName/ResourceName. |
| `is_shared` | In | Yes | Indicate whether this resource can be shared with other users |
| `position_x` | In | No | Indicate the x position in the diagram layout |
| `position_y` | In | No | Indicate the y position in the diagram layout |

**Samples**:

```javascript
packageEditor.add_resource_to_topology('blueprint1','Chassis3',True,400,400)

packageEditor.add_resource_to_topology('blueprint1','Chassis3/Blade1/Port1',True,400,400)
```