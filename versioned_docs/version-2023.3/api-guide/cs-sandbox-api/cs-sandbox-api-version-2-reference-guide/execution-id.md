---
sidebar_position: 20
---

# Execution Id

### Description

Gets details about a specific execution of a sandbox or component command, per specified execution ID.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/executions/{execution_id}`

| Parameter | Description/Comments |
| --- | --- |
| `execution_id` | The id of the command's execution (`string`). Can be retrieved via the [component command start](./component-command-start.md) and the [sandbox command start](./sandbox-command-start.md) methods. |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `execution id` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `execution id` method returns details about a specific execution of a sandbox or component command and the actions that can be performed on the execution.

```javascript
{
   "id":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
   "supports_cancellation":"true",
   "started":"""ended":"",
   "status":"",
   "output":"",
   "_links":{
      "self":{
         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
         "method":"GET"
      },
      "stop":{
         "href":"/executions/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
         "method":"DELETE"
      }
   }
}
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `execution id` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `id` |   | The ID of the execution. `(string)` |
| `supports_cancellation` |   | Whether or not stopping the execution before it is completed is supported. `(bool)` |
| `started` |   | The date and time at which the execution started. `(string)` |
| `ended` |   | The date and time at which the execution ended. `(string)` |
| `status` |   | The current status of the command execution - "pending", "running", "stopping", "canceled". `(string)` |
| `output` |   | (If the command returns an output message) The command's output. `(string)` |
| `_links` |   | The actions that can be performed on the execution: |
|   | `self` | Provides a link to get the execution's details via a `GET` request. |
|   | `stop` | (If the execution supports cancellation and is still running) Provides a link to end the execution via a `DELETE` request. |

</details>