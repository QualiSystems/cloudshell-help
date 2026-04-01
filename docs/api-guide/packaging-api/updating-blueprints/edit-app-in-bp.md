---
sidebar_position: 10
---

# Edit an App in a Blueprint

**Description**: Edit an app to an existing blueprint.

**Signature**: `edit_app(topology_name, app_name, topology_app)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `app_name` | In | Yes | The name of the App to edit |
| `topology_app` | In | Yes | Python object (TopologyApp) that defines the properties of the desired App to edit |

**Sample**:

```javascript
packageEditor.edit_app('TestTopology', ‘MyApp1’, topologyAppPythonObject)
```