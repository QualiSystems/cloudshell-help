---
sidebar_position: 7
---

# Add a Resource Script to a Model 

**Description**: Add a resource script to a specific model.

**Signature**: `add_script_to_model(model_name, script_name, script_file_path, version, script_alias, parameters, category)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | Specify the model name you want the driver to be connected to |
| `script_name` | In | Yes | Specify the name of the resource script you want to add |
| `script_file_path` | In | Yes | To replace the current script file with another one, specify the full path to the script file (including file name). py files and zip packages are supported. |
| `version` | In | No | Set a version number for the script |
| `script_alias` | In | No | Specify an alias for the service |
| `parameters` | In | No | Specify a list of inputs required by the script. For example: \[“key1, value1”, “key2, value2”\] |
| `category` | In | No | Script's category. The script will be arranged under this category in the resource/App/service's Commands pane |

**Sample**:

```javascript
`add_script_to_model('Generic Chassis Model','Debugging script' ,'C:\\Work\\Scripts\\Resource-Service\\resource_debugging_script_v1.4.zip', '', 'Generic Resources', [], 'Infra')`
```