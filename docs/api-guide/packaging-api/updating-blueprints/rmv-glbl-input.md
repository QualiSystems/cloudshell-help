---
sidebar_position: 4
---

# Remove a Global Blueprint Input

**Description**: Remove a global input from a specific blueprint.

**Signature**: `remove_global_input(topology_name, input_name)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint that you want to remove |
| `input_name` | In | Yes | The name of the global input to remove. *Note:* Only one input can be removed per method call. |

**Sample**:

```javascript
packageEditor.remove_global_input('Blueprint1', 'global1')
```