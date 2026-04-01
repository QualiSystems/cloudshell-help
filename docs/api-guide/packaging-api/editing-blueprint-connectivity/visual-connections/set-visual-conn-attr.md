---
sidebar_position: 4
---

# Set a Visual Connector's Attributes

**Description**: Update the attribute value of the visual connector that has the specified alias.

**Signature**: `set_visual_connector_attribute(topology_name, connector_alias, attribute_name, attribute_value)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `connector_alias` | In | Yes | Specify the connector’s alias |
| `attribute_name` | In | Yes | Specify the attribute name that you want to add / update, only attributes that has the rule **Link Configurations** can be used as visual connector attributes |
| `attribute_value` | In | Yes | Specify the value to set on the attribute |

**Sample**:

```javascript
packageEditor.set_visual_connector_attribute('blueprint1','ABC','attr1','val1')
```