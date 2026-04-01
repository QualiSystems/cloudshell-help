---
sidebar_position: 15
---

# Add Abstract Resources to a Blueprint

**Description**: Add an abstract resource to a specific blueprint.

**Signature**: `add_abstract_to_topology(topology_name, abstract_path, position_x, position_y, family, models, default_mode, publish_models, quantity, publish_quantity, is_shared)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `service_alias` | In | Yes | Specify the alias of the service that you want to remove |
| `abstract_path` | In | Yes | The name of the abstract resource, or the path from the resource to the sub resource name |
| `position_x` | In | Yes | Indicate the x position in the diagram layout |
| `position_y` | In | Yes | Indicate the y position in the diagram layout |
| `family` | In | Yes | Specify the abstract resource family |
| `models` | In | No | Specify one or more models for the abstract resource |
| `default_model` | In | No | Specify the default model from the list of models (only for published models) |
| `publish_models` | In | Yes | Specify whether the models can be changed when a new sandbox is created from the blueprint |
| `quantity` | In | Yes | Specify the number of resources that this abstract resource represents |
| `publish_quantity` | In | Yes | Specify whether the quantity can be changed when a new sandbox is created from the blueprint |
| `is_shared` | In | No | Indicate the share level of the added abstract resource |

**Samples**:

```javascript
packageEditor.add_abstract_to_topology('TestTopology','AbsChassis*',250,250,'Generic Chassis',['Generic Chassis Model'],True,5,True,True)
```