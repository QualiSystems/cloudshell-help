---
sidebar_position: 16
---

# Remove Abstract Resources or Templates from a Blueprint

**Description**: Remove an abstract resource / template from a specific blueprint.

**Signature**: `remove_abstract_from_topology(topology_name, abstract_path)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `abstract_path` | In | Yes | The name of the abstract resource, or the path from the resource to the sub resource name |

**Samples**:

```javascript
packageEditor.remove_abstract_from_topology('TestTopology','AbsChassis*/AbsPort*')
```