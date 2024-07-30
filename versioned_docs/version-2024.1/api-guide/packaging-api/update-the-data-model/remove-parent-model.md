---
sidebar_position: 6
---

# Remove a Parent Model

**Description**: Modify the model hierarchy, remove the specified model from the list of parent models.

**Signature**: `remove_parent_model(model_name, parent_models)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | The name of the model to modify |
| `parent_models` | In | Yes | The list of models to be removed from the list of parents for this model |

**Sample**:

```javascript
`packageEditor.remove_parent_model('Generic Ethernet Port',['Generic Chassis Model'])`
```
