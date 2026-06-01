---
sidebar_position: 9
---

# Update Domain Setting

### Description

*Added in CloudShell 2024.1.*

Updates a specific setting for a domain. Use this to configure per-domain behavior such as email notification timing.

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/settings`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md). |

### HTTP method

`PUT`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| `Name` | The name of the domain setting to update. `(string)` |
| `Value` | The new value for the setting. `(string)` |

</details>

<details>
<summary>Request example</summary>

```javascript
{
    "Name": "NotificationMinutesBeforeEnd",
    "Value": "15"
}
```
</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>

### Available Domain Settings

| Setting Name | Description |
| --- | --- |
| `NotificationMinutesBeforeEnd` | Number of minutes before sandbox end time to send an email notification to the sandbox owner. |
