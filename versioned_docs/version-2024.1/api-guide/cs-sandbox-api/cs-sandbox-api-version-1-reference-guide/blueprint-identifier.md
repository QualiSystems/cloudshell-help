---
sidebar_position: 3
---

# Blueprint Identifier

### Description

Gets details and available actions for a particular public blueprint associated with the user's domain.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v1/blueprints/{blueprint_identifier}`

| Parameter | Description/Comments |
| --- | --- |
| `blueprint_identifier` | The name or id of the blueprint (`string`). Can be retrieved via [blueprints](./blueprints.md). |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `blueprint identifier` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The example response of the `blueprint identifier` method is similar to that of the [blueprints](./blueprints.md) method. However, in this case the output properties are displayed for a particular blueprint (as opposed to multiple ones), and includes any published blueprint and resource input parameters. The API can call a blueprint by name or ID.
</details>