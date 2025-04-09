---
sidebar_position: 19
---

# Sandbox Command Start

### Description

Executes a particular command for a specific sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/commands/{command_name}/start`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |
| `command_name` | The name of the command (`string`). Can be retrieved via [sandbox  commands](./sandbox-commands.md). |

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox command start` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

The input parameters of the command in JSON format. The elements of the `sandbox command start` method include.

| Parameter | Description/Comments |
| --- | --- |
| `params` | Any input parameters required for running the command must be included in the request. If you do not specify the input parameters, you will get the following error message: "No values were provided for the following mandatory inputs: \{Parameter name}". `(Array)` |
| `printOutput` | Whether or not the command output is displayed in the console or command line. `(bool)` |
</details>

<details>
<summary>Request example</summary>

```javascript
{
   "params":[
      {
         "name":"string",
         "value":"string"
      }
   ]
}
```
</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox command start` method returns details about a specific execution of the sandbox command. The response includes the command's execution ID and the actions that can be performed on the execution.

```javascript
{
   "executionId":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
   "supports_cancellation":true,
   "_links":{
      "self":{
         "href":"/execution/1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
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

The response output properties of the `sandbox command start` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `executionId` |   | The ID of the execution. `(string)` |
| `supports_cancellation` |   | Whether or not stopping the execution before it is completed is supported. `(bool)` |
| `_links` |   | The actions that can be performed on the execution: |
|   | `self` | Provides a link to get the execution's details via a `GET` request. |
|   | `stop` | Provides a link to end the execution via a `DELETE` request. |

</details>
