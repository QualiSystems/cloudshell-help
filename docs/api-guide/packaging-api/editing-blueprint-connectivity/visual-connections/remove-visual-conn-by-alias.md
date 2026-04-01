---
sidebar_position: 2
---

# Remove Visual Connectors (by Alias)

**Description**: Remove the visual connector with the specified alias from a specific blueprint.

**Signature**: `remove_visual_connector_by_alias(topology_name, connector_alias)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `connector_alias` | In | Yes | Specify the connector’s alias. |

**Sample**:

```javascript
packageEditor.remove_visual_connector_by_alias('blueprint1', 'ABC')
```