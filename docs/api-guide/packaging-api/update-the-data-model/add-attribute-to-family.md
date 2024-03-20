---
sidebar_position: 2
---

# Add an Attribute to a Family

**Description**: Attach an existing attribute to a family.

**Signature**: `attach_attribute_to_family(family_name, attribute_name, user_input, allowed_values)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `family_name` | In | Yes | The name of the family |
| `attribute_name` | In | Yes | The name of the attribute |
| `user_input` | In | Yes | In case of service family, specify if this attribute should be presented to the user who using the service |
| `allowed_values` | In | No | Specify the list of allowed values for this attribute (comma separated) |


**Sample**:

```javascript
`packageEditor.attach_attribute_to_family('Generic Chassis','attribute1',False,'')`
```