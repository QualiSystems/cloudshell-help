---
sidebar_position: 19
---

# Set Setup Duration

**Description**: Set the setup duration time for a specific blueprint.

**Signature**: `set_setup_duration(topology_name, minutes)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `minutes` | In | Yes | The duration in minutes |

**Samples**:

```javascript
packageEditor.set_setup_duration('Blueprint1',15)
```