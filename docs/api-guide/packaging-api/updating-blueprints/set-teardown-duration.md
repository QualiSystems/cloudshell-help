---
sidebar_position: 20
---

# Set Teardown Duration

**Description**: Set the teardown duration time for a specific blueprint.

**Signature**: `set_teardown_duration(topology_name, minutes)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `minutes` | In | Yes | The duration in minutes |

**Samples**:

```javascript
packageEditor.set_teardown_duration('Blueprint1',15)
```