---
sidebar_position: 1
---

# Add Routes

**Description**: Create a route between the source and target resources in a specific blueprint.

**Signature**: `add_route(topology_name, route_alias, source, target, route_interface, max_hops, direction, shared)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `route_alias` | In | Yes | Specify the route’s alias. |
| `source` | In | Yes | The name and path of the source resource (end point) |
| `target` | In | Yes | The name and path of the target resource (end point) |
| `route_interface` | In | Yes | The protocol type of the end points |
| `max_hops` | In | Yes | Specify the maximum number or allowed hops. |
| `direction` | In | Yes | Specify the direction of the route: Uni, Bi |
| `shared` | In | Yes | Specify whether these routes are shared. Shared routes can be used in more than one sandbox. |

**Sample**:

```javascript
packageEditor.add_route('blueprint1', 'ABC','Chassis1/Blade1/Port1','Chassis2/Blade1/Port1','Ethernet',3,'Bi',False)
```