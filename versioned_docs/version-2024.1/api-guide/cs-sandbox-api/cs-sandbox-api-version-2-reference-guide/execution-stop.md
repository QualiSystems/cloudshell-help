---
sidebar_position: 21
---


# Execution Stop

### Description

Ends an execution of a component or sandbox command, per specified execution ID. Returns a successful response when the execution is stopped.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/executions/{execution_id}`

| Parameter | Description/Comments |
| --- | --- |
| `execution_id` | The id of the command's execution (`string`). Can be retrieved via the [component command start](./component-command-start.md) and the [sandbox command start](./sandbox-command-start.md) methods. |

### HTTP method

`DELETE`

### Request

<details>
<summary>Headers</summary>

Example header format for the `execution stop` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

A successful response is displayed when the `execution stop` method ends the execution:

```javascript
{
"result": "success",
}
```
</details>