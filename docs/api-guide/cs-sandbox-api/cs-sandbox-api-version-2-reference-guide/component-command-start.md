---
sidebar_position: 12
---


# Component Command Start

### Description

Executes a particular command or connected command for a specific component (resource, service, or App) in a sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components/{component_id}/commands/{command_name}/start`

### HTTP method

`POST`

### Request

<details>
<summary>URL</summary>

:::note
 You can get the sandbox ID from the [sandboxes](./sandboxes.md) method, [blueprint start](./blueprint-start.md) method, and from the sandbox ID segment in the CloudShell Portal URL. You can get the component ID from the [sandbox components](./sandbox-components.md) method and the [blueprint start](./blueprint-start.md) method, and the command's name from the [sandbox component commands](./sandbox-component-commands.md) method.
:::

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). |
| `component_id` | The id of the sandbox component (`string`). |
| `command_name` | The name of the component command (`string`). |

</details>

<details>
<summary>Headers</summary>

Example header format for the `component command start` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>
                                                                                                                                                                                                                                                            
<details>
<summary>Request body</summary>

The input parameters of the command in JSON format. The elements of the `component command start` method include.

| Parameter | Description/Comments |
| --- | --- |
| `command_tag` | Tag defined for the connected command. Connected command tags are used to define categories of functionality.`(string)`
Possible values: <br/> - power <br/> - remote_\<command name>: For example, "remote_save_snapshot" for vCenter VM save snapshot. |
| params | Any input parameters required for running the command must be included in the request.(array) <br/> If you do not specify the input parameters, you will get the following error message: "No values were provided for the following mandatory inputs: \{Parameter name}". |
| `connected_ports_full_path` | List of connected ports to use in this operation. (array) <br/> Include the full path from the root resource to each port, separated by slashes. For example: Switch20/Blade5/PowerPort1. Leave blank to perform the connected operation on all of the specified resource’s connected ports. |
| `printOutput` | Whether or not the command output is displayed in the console or command line. `(bool)` |
</details>

<details>
<summary>Request example for regular commands</summary>

```javascript
{
   "params":[
      {
         "name":"Version",
         "value":"1.0.223.7"
      }
   ],
   "printOutput":"true/false"
}
```
</details>

<details>
<summary>Request example for connected commands</summary>

```javascript
{
  "command_tag": "power",
  "params": [
    {
      "name": "Version",
      "value": "1.0.223.7"
    }
  ],
  "connected_ports_full_path": [
    "Switch20/Blade5/PowerPort1"
  ],
  "printOutput": true
}
```
</details>

### Response

<details>
<summary>Response example</summary>

The `component command start` method returns details about a specific execution of the sandbox component command. The response includes the command's execution ID and the actions that can be performed on the execution.

```javascript
{
   "executionId":"1DEB29BF-22B0-4CF6-B7BE-02173520EB81",
   "supports_cancellation":true"_links":{
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

The response output properties of the `component command start` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `executionId` |   | The ID of the execution. `(string)` |
| `supports_cancellation` |   | Whether or not stopping the execution before it is completed is supported. `(bool)` |
| `_links` |   | The actions that can be performed on the execution: |
|   | `self` | Provides a link to get a the execution's details via a `GET` request. |
|   | `stop` | Provides a link to end the execution via a `DELETE` request. |

</details>