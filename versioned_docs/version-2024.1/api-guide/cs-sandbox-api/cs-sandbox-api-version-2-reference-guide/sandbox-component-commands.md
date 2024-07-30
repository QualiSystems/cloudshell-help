---
sidebar_position: 10
---


# Sandbox Component Commands

### Description

Gets details about all the commands and connected commands provided for a particular component (resource, service, or App) in a specific sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}/commands`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |
| `component_id` | The id of the component (`string`). Can be retrieved via [sandbox components](./sandbox-components.md) and [blueprint start](./blueprint-start.md). |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox component commands` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox component commands` method returns details about all the commands provided for a specific component of a particular sandbox and the actions that can be performed on each command.

```javascript
[
   {
      "name":"my_command",
      "description":"",
      "params":[
         {
            "name":"param1",
            "description":"",
            "type":"numeric""possible values":[
               
            ],
            "default value":"""mandatory":false
         }
      ]"executions":[
         {
            "id":"0daead01-8e57-4064-81d4-84911effa911",
            "status":"Pending",
            "supports_Cancelation":"false",
            "_links":{
               
            }
         }
      ],
      "_links":{
         "self":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/my_command",
            "method":"GET"
         },
         "start":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933/commands/my_command/start",
            "method":"POST"
         }
      }
   }
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox component commands` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `name` |   | The name of the command. `(string)` |
| `description` |   | A short description of the command. `(string)` |
| `params` |   | The parameters needed for the command execution. `(array)` |
|   | `name` | The parameter name. `(string)` |
|   | `description` | The parameter description. `(string)` |
|   | `type` | The parameter type ("string", "numeric", or "lookup"). `(string)` |
|   | `possible values` | All the possible values for this parameter. `(array)` |
|   | `default value` | The default value of the parameter. `(string)` |
|   | `mandatory` | Whether or not the parameter is mandatory for the command execution. `(bool)` |
| `executions` |   | The execution history for this command. `(array)` |
|   | `id` | The ID of the execution. `(string)` |
|   | `status` | The current status of the command execution ("pending", "running", "stopping", "canceled"). `(string)` |
|   | `supports_cancellation` | Whether or not stopping the execution before it is completed is supported. `(bool)` |
|   | `_links` | The actions that can be performed on the execution (Get execution details, Delete execution) |
| `_links` |   | The actions that can be performed on a sandbox's component command in the user's domain: |
|   | `self` | Provides a link to get a command's details via a `GET` request. |
|   | `start` | Provides a link to start a command's execution via a `POST` request. |
| command_tag | string | (For connected commands only) Tag defined for the command. Options are "power" or "remote_\<remote command name>" |

</details>
