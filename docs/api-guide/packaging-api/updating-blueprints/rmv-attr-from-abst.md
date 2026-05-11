---
sidebar_position: 18
---

# Remove an Attribute from an Abstract Resource

**Description**: Remove an existing attribute from a specific abstract resource.

**Signature**: `remove_attribute_from_abstract(topology_name, abstract_path, attribute_name)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `abstract_path` | In | Yes | The name of the abstract resource, or the path from the resource to the sub resource name |
| `attribute_name` | In | Yes | Specify the name of the attribute that you want to remove |

**Samples**:

```javascript
packageEditor.add_attribute_to_abstract('Blueprint1','AbsChassis*','Version')
```