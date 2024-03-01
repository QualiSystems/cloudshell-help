---
sidebar_position: 18
---

# Sandbox Command Name

### Description

Gets details about a particular blueprint command in a specific sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/commands/{command_name}`

### HTTP method

`GET`

### Request

<details>
<summary>URL</summary>

:::note
 You can get the **sandbox ID** from the [sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#sandboxe) method, [blueprint start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#blueprin3) method, and from the sandbox ID segment in the CloudShell Portal URL, and the command's name from the [sandbox commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#sandbox5) method.
:::

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). |
| `command_name` | The name of the command (`string`). |

</details>

<details>
<summary>Headers</summary>

Example header format for the `sandbox command name` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox command name` method returns details about a specific command for a particular sandbox and the actions that can be performed on the command.

```javascript
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
            "self":{
               "href":"/executions/0daead01-8e57-4064-81d4-84911effa911",
               "method":"GET"
            }"stop":{
               "href":"/executions/0daead01-8e57-4064-81d4-84911effa911",
               "method":"DELETE"
            }
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
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox command name` method are described in the following table.

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
|   | `status` | The current status of the command execution ("pending", "running", "stopping", "canceled". `(string)` |
|   | `supports_cancellation` | Whether or not stopping the execution before it is completed is supported. `(bool)` |
|   | `_links` | The actions that can be performed on the execution (Get execution details, Delete execution) |
| `_links` |   | The actions that can be performed on the sandbox's blueprint command in the user's domain: |
|   | `self` | Provides a link to get the command's details via a `GET` request. |
|   | `start` | Provides a link to start the command's execution via a `POST` request. |

</details>