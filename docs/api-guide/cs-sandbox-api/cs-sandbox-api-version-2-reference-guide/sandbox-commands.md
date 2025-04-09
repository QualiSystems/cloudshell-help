---
sidebar_position: 17
---


# Sandbox Commands

### Description

Gets details for all the blueprint commands in the sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/commands`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox commands` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox commands` method returns details about the blueprint commands in a particular sandbox and the actions that can be performed on each command.

```javascript
[
   {
      "name":"my_command",
      "description":"",
      "params":[
         {
            "name":"param1",
            "description":"",
            "type":"numeric",
            "possible values":[
               
            ],
            "default value":"",
            "mandatory":false
         }
      ],
      "executions":[
         {
            "id":"0daead01-8e57-4064-81d4-84911effa911",
            "status":"Pending",
            "supports_cancellation":"false",
            "_links":{
               
            }
         }
      ],
      "_links":{
         "self":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/commands/my-command",
            "method":"GET"
         },
         "start":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/commands/my-command/start",
            "method":"POST"
         }
      }
   }
]
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox commands` method are described in the following table.

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
|   | `status` | The current status of the command execution ("pending", "running", "stopping", "canceled", `(string)` |
|   | `supports_cancellation` | Whether or not stopping the execution before it is completed is supported. `(bool)` |
|   | `_links` | The actions that can be performed on the execution (Get execution details, Delete execution) |
| `_links` |   | The actions that can be performed on a sandbox's blueprint command in the user's domain: |
|   | `self` | Provides a link to get a command's details via a `GET` request. |
|   | `start` | Provides a link to get start a command's execution via a `POST` request. |

</details>