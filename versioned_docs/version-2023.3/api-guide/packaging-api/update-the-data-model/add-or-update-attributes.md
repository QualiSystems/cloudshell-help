---
sidebar_position: 11
---


# Add or Update Attributes

**Description**: Add a new attribute to the data model, or modify an existing attribute.

**Signature**: `add_or_update_attribute(attribute_name, default_value, description, attribute_type, lookup_values, rules)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `attribute_name` | In | Yes | The name of the attribute that you want to add or modify |
| `default_value` | In | No | The default value that you want to assign to the attribute in case it is left empty when used |
| `description` | In | No | A short description for the attribute |
| `attribute_type` | In | Yes | One of the following values: DateTime, Numeric, String, Boolean, Lookup, Password |
| `lookup_values` | In | No | If the attribute type is Lookup, specify the list of allowed values |
| `rules` | In | No | Specify 0 or more capabilities for the attribute, available values: <li> Editable After Run (System Administrators) </li> <li> Editable After Run (Everyone) </li> <li> Configuration </li> <li> Setting </li> <li> Display In Diagram </li> <li> Link Configurations </li> <li> Variable Capability </li> <li> Constant Capability </li> <li> Displayed In Route Creation </li> <li> Available For Abstract Resources </li> <li> Displayed In Search Filters </li> <li> Execution Server Selector </li> <li> Monitor Modifications </li> <li> Admin Only  </li> |


**Sample**:

```javascript
`packageEditor.add_or_update_attribute('AttString','','String Attribute','String','','')`

`packageEditor.add_or_update_attribute('AttLookup','A','Lookup Attribute','Lookup',['A','B','C'],'')`

`packageEditor.add_or_update_attribute('AttString','AAA','String Attribute1','String','',['Editable After Run (System Administrators)','Editable After Run (Everyone)','Configuration','Setting','Displayed In Diagram','Link Configurations','Variable Capability','Constant Capability','Displayed In Route Creation','Available For Abstract Resources','Displayed In Search Filters','Execution Server Selector','Monitor Modifications','Admin Only','Editable After Run'])`
```