---
sidebar_position: 5
---


# Create a Model Hierarchy

**Description**: Create the model hierarchy, link the specified model under the list of parent models.

**Signature**: `add_parent_model(model_name, parent_models)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | The name of the model to modify |
| `parent_models` | In | Yes | The list of models to be added to the list of parents for this model |

**Sample**:
```javascript
`packageEditor.add_parent_model('Generic Ethernet Port',['Generic Chassis Model', 'Bridge Generic Model'])`
```