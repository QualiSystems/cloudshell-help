---
sidebar_position: 14
---

# Remove Services from a Blueprint

**Description**: Remove an existing service from a specific blueprint.

**Signature**: `remove_service_from_topology(topology_name, service_alias)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `service_alias` | In | Yes | Specify the alias of the service that you want to remove |

**Samples**:

```javascript
packageEditor.remove_service_from_topology('TestTopology','ServiceA')
```