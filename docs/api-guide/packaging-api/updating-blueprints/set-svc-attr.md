---
sidebar_position: 13
---

# Set an Attribute's Value in a Service

**Description**: Sets the value of an attribute included in a specific service.

**Signature**: `set_attribute_to_service(topology_name, service_alias , attribute_name, attribute_value, publish)`

**Parameters**:

| Name | Direction | Required | Description |
| --- | --- | --- | --- |
| `topology_name` | In | Yes | The name of the blueprint |
| `service_alias` | In | Yes | Specify the service's alias |
| `attribute_name` | In | Yes | Specify the name of the attribute in the format ServiceName.AttributeName |
| `attribute_value` | In | Yes | Specify the attribute's value |
| `publish` | In | No | Specify if the attribute is published or not. Default is "False". |

**Samples**:

```javascript
packageEditor.set_attribute_to_service('TestTopology','Service','VLAN ID',121,True)
```