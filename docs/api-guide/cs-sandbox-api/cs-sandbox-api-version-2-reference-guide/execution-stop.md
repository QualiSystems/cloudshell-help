---
sidebar_position: 21
---


# Execution Stop

### Description

Ends an execution of a component or sandbox command, per specified execution ID. Returns a successful response when the execution is stopped.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/executions/{execution_id}`

### HTTP method

`DELETE`

### Request

<details>
<summary>URL</summary>

| Parameter | Description/Comments |
| --- | --- |
| `execution_id` | 
The id of the command's execution (`string`). <br/> Note : You can get the **execution ID** from the [component command start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#componen2) and the [blueprint start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/REST-API-blueprint_strt.htm) methods. |

</details>

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