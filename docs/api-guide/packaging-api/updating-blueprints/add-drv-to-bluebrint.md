---
sidebar_position: 5
---

# Add a Driver to a Blueprint

**Description**: Add a driver to an existing blueprint.

**Signature**: `add_driver_to_topology(topology_name, driver_name, driver_file_path)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `driver_name` | In | Yes | Specify a name for the blueprint driver |
| `driver_file_path` | In | Yes | Specify the full path to the driver file (including file name). dll files are supported. |

**Sample**:

```javascript
packageEditor.add_driver_to_topology('TestTopology','TopDriver', 'C:\\Work\\Drivers\\Environment\\EnvironmentDriver.Compilation\\EnvironmentDriver.dll')
```