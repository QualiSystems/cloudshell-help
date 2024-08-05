---
sidebar_position: 8
---

# Remove a Resource Script from a Model

**Description**: Remove a Resource Script from a specific model.

**Signature**: `remove_script_from_model(model_name, script_name)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | Specify the model name from which you want the driver to be removed |
| `script_name` | In | Yes | Specify the name of the resource script to be removed |


**Sample**:

```javascript
`packageEditor.remove_script_from_model('Generic Chassis Model','Debugging script')`
```