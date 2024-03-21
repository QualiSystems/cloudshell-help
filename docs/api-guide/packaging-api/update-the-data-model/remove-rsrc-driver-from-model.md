---
sidebar_position: 10
---

# Remove a Resource Driver from a Model

**Description**: Remove the py or dll driver from a specific model.

**Signature**: `remove_driver_from_model(model_name, driver_name)`

**Parameters**:
| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | Specify the model name you want the driver to be removed from |
| `driver_name` | In | Yes | Specify the name of the driver you want to remove |

**Sample**:

```javascript
`packageEditor.remove_driver_from_model('Generic Chassis Model','ResDriver')`
```