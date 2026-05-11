---
sidebar_position: 1
---

# Add Visual Connectors

**Description**: Add a visual connector between the source and target resources in a specific blueprint.

**Signature**: `add_visual_connector(topology_name, connector_alias, resource_source_name, resource_target_name, source_family_type, target_family_type, direction)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `connector_alias` | In | Yes | Specify the connector’s alias. |
| `resource_source_name` | In | Yes | The name of the source |
| `resource_target_name` | In | Yes | The name of the target |
| `source_family_type` | In | Yes | Specify the type of the source element: Resource, Service |
| `target_family_type` | In | Yes | Specify the type of the target element: Resource, Service |
| `direction` | In | Yes | Specify the direction of the route: Uni, Bi |

**Sample**:

```javascript
packageEditor.add_visual_connector('blueprint1', 'ABC', 'Chassis1/Blade1/Port1','Vlan Auto 2','Resource','Service','Bi')
```