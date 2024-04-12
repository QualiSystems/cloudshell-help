---
sidebar_position: 16
---

# Sandbox Stop

### Description

Ends a sandbox per specified sandbox ID. Returns a successful response when the sandbox is stopped.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/stop`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox stop` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

A successful response is displayed when the `sandbox stop` method ends the sandbox:

```javascript
{
   "result":"success",
   "_links":{
      "all":{
         "href":"/sandboxes",
         "method":"GET"
      }
   }
}
```

</details>