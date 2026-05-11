---
sidebar_position: 21
---

# Set Default Duration

**Description**: Set the default duration for a specific blueprint.

**Signature**: `set_default_duration(topology_name, duration)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `duration` | In | Yes | The duration that you want to set |

**Samples**:

```javascript
packageEditor.set_default_duration('environment1','1:1:1:1')
```