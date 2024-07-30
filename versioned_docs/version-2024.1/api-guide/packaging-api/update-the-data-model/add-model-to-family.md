---
sidebar_position: 3
---

# Add a Model to a Family

**Description**: Create a new model under a specific family.

When importing the package into CloudShell, if the model doesn’t exist it will be created. Otherwise it will be modified.

**Signature**: `add_model_to_family(family_name, model_name, description)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `family_name` | In | Yes | The name of the family |
| `model_name` | In | No | The name of the model |
| `description` | In | No | A short description of the model |

**Sample**:

```javascript
`packageEditor.add_model_to_family('Generic Chassis', 'Special Chassis','This is a special Chassis model')`
```