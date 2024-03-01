---
sidebar_position: 7
---

## sandbox stop

### Description

Ends a sandbox per specified sandbox ID. Returns a successful response when the sandbox is stopped.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v1/sandboxes/{sandbox_identifier}/stop`

### HTTP method

`POST`

### Request

<details>
<summary>URL</summary>

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). <br/> :::note You can get the sandbox ID from the [sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____2#sandboxe) method, [blueprint start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____2#blueprin2) method, and from the sandbox ID segment in the CloudShell Portal URL.
::: |
</details>

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

