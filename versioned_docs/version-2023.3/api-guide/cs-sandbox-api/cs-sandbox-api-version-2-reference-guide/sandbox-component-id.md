---
sidebar_position: 9
---


# Sandbox Component Id

### Description

Gets details and available actions for a particular component (resource, service, or App) in a specific sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |
| `component_id` | The id of the component (`string`). Can be retrieved via [sandbox components](./sandbox-components.md) and [blueprint start](./blueprint-start.md). |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox component id` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox component id` method returns details about a specific component of a particular sandbox, and the actions that can be performed on the component.

```javascript
{
   "id":"0daead01-8e57-4064-81d4-84911effa933",
   "name":"MyApp",
   "type":"Application",
   "component_type":"Generic App Model",
   "description":"",
   "active_deployment_name":"",
   "template_name":"",
   "app_lifecycle":"undeployed",
   "attributes":[
      {
         "type":"string",
         "name":"user",
         "value":""
      }
   ],
   "connection_interfaces":[
      {
         "name":"RDP",
         "url":""
      }
   ],
   "_links":{
      "self":{
         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933",
         "method":"GET"
      },
      "commands":{
         "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/commands",
         "method":"GET"
      }
   }
}
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox component id` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `id` |   | The ID of the component. `(string)` |
| `name` |   | The name of the component. `(string)` |
| `type` |   | The component ("resource", "application", or "service"). `(string)` |
| `component_type` |   | The resource model. `(string)` |
| `description` |   | A short description of the component. `(string)` |
| `active_deployment_name` |   | (Available for App components) The name of the deployment path for the App. `(string)` |
| `template_name` |   | (Available for App components) The name of the App template. `(string)` |
| `app_lifecycle` |   | (Available for App components) The current state of the App ("undeployed"/"deployed"). `(string)` |
| `attributes` |   | The attributes of the resource model. `(array)` |
|   | `type` | The attribute type. `(string)` |
|   | `name` | The attribute name. `(string)` |
|   | `value` | The attribute value. `(string)` |
| `connection_ interfaces` |   | The connection interfaces of the resource. `(array)` |
|   | `name` | The name of the connection interface. `(string)` |
|   | `url` | The URL of the connection interface of the component. `(string)` |
| `_links` |   | The actions that can be performed on the component of a sandbox in the user's domain: |
|   | `self` | Provides a link to get the component's details via a `GET` request. |
|   | `commands` | Provides a link to get all the resource commands for the component via a `GET` request. |

</details>

