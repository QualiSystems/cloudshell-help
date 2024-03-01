---
sidebar_position: 3
---

# Blueprint Identifier

### Description

Gets details and available actions for a particular public blueprint associated with the user's domain.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/blueprints/{blueprint_identifier}`

### HTTP method

`GET`

### Request

<details>
<summary>URL</summary>

:::note
You can get the blueprint name and blueprint ID from the [blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#blueprin) method or from the blueprint ID segment in the CloudShell Portal URL.
:::

| Parameter | Description/Comments |
| --- | --- |
| `blueprint_identifier` | 
The name or id of the blueprint (`string`). |

</details>

<details>
<summary>Headers</summary>

Example header format for the `blueprint identifier` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The example response of the `blueprint identifier` method is similar to that of the [blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/REST-API-blueprints.htm) method. However, in this case the output properties are displayed for a particular blueprint (as opposed to multiple ones), and includes any published blueprint and resource input parameters. The API can call a blueprint by name or ID.

</details>