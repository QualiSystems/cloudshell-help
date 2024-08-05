---
sidebar_position: 4
---

# Add an Attribute to a Model

Description: Attach an existing attribute to a specific model.

**Signature**: `attach_attribute_to_model(model_name, attribute_name, user_input, allowed_values)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | The name of the model |
| `attribute_name` | In | Yes | The name of the attribute |
| `user_input` | In | Yes | In case of service family, specify if this attribute should be presented to the user who using the service |
| `allowed_values` | In | No | Specify the list of allowed values for this attribute |

**Sample**:

```javascript
`packageEditor.attach_attribute_to_model('Generic Chassis Model','attribute1',False,'')`
```