---
sidebar_position: 3
---

# Add Global Blueprint Inputs

**Description**: Add a global blueprint input to a specific blueprint.

**Signature**: `add_global_input_to_topology(topology_name, globalInputName, inputType, defaultValue, description, possibleValues)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the family |
| `globalInputName` | In | Yes | The name of the attribute |
| `inputType` | In | Yes | In case of service family, specify if this attribute should be presented to the user who using the service |
| `defaultValue` | In | No, but an empty string '' is still required if a default value is not provided. | Specify the list of allowed values for this attribute (comma separated) |
| `description` | In | No, but an empty string '' is still required if a default value is not provided. | Specify the list of allowed values for this attribute (comma separated) |
| `possibleValues` | In | No, but an empty list [] is still required if a default value is not provided. | Specify the list of allowed values for this attribute (comma separated) |


**Sample 1 - with all input values specified (correct call)**:

```javascript
packageEditor.add_global_input_to_topology('blueprint1', 'version number', 'String', 'None', 'Please specify the software version', [])
```

**Sample 2 - with only required input values specified (correct call)**:

```javascript
packageEditor.add_global_input_to_topology('blueprint1', 'version number', 'String', '', '', [])
```

**Sample 3 - demonstrating an incorrect call (in contrast to Sample 2 above)**:

```javascript
packageEditor.add_global_input_to_topology('blueprint1', 'version number', 'String')
```