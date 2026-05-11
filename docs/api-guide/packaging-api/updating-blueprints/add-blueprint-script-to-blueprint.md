---
sidebar_position: 6
---

# Add a Blueprint Script to a Blueprint

**Description**: Add a blueprint script to a specific blueprint.

**Signature**: `add_script_to_topology(topology_name, script_name,  script_file_path, version, script_alias,  parameters, category)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `script_name` | In | Yes | The name of the blueprint script you want to add |
| `script_file_path` | In | Yes | To replace the current script file with another one, specify the full path to the script file (including file name). `py` files and `zip` packages are supported. |
| `version` | In | No | Set a version number for the script |
| `script_alias` | In | No | Specify an alias for the service |
| `parameters` | In | No | Specify a list of inputs required by the script. For example: [“key1, value1”, “key2, value2”] |
| `category` | In | No | Script's category. The script will be arranged under this category in the blueprint/sandbox's *Blueprint Commands* pane |

**Sample**:

```javascript
packageEditor.add_script_to_topology('my blueprint', 'custom_setup_script', 'C:\\Work\\Projects\\Scripts\\custom_setup_script.zip', 1.0.0, 'Custom Setup Script', [], 'Custom scripts')
```