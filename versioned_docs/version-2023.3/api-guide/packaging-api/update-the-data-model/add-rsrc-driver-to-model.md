---
sidebar_position: 9
---

# Add a Resource Driver to a Model

**Description**: Add a driver to a specific model.

**Signature**: `add_driver_to_model(model_name, driver_name, driver_file_path)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `model_name` | In | Yes | Specify the model name you want the driver to be connected to |
| `driver_name` | In | Yes | Specify the name of the resource driver to be removed |
| `driver_file_path` | In | Yes | Specify the full path to the driver file (including file name). py and dll files are supported. |


**Sample**:
```javascript
`packageEditor.add_driver_to_model('Generic Chassis Model','ResDriver' ,'C:\\Work\\Drivers\\Resource-Service\\ResourceDriver.Compilation\\ResourceDriver.dll')`
```