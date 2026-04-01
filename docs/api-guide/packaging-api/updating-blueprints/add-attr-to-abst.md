---
sidebar_position: 17
---

# Add an Attribute to an Abstract Resource

**Description**: Add a new attribute to a specific abstract resource.

**Signature**: `add_attribute_to_abstract(topology_name, abstract_path, attribute_name, possible_values, default_value, required, publish)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `abstract_path` | In | Yes | The name of the abstract resource, or the path from the resource to the sub resource name |
| `attribute_name` | In | Yes | Specify the name of the attribute that you want to add to the abstract resource |
| `possible_values` | In | No | Specify a list of possible values |
| `default_value` | In | No | Specify the default value for the attribute |
| `required` | In | Yes | Specify whether this attribute is required or not |
| `publish` | In | Yes | Specify whether this attribute is published and can be changed when a new sandbox is created from the blueprint |

**Samples**:

```javascript
packageEditor.add_attribute_to_abstract('Blueprint1','AbsChassis*','Version',[],True,True)
```