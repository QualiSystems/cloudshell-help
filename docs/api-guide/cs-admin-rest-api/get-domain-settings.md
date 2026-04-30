---
sidebar_position: 8
---

# Get Domain Settings

### Description

*Added in CloudShell 2024.1.*

Gets all settings for a specific domain. Domain settings control per-domain behavior such as email notification timing.

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/settings`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md). |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

```javascript
[
    {
        "Name": "NotificationMinutesBeforeEnd",
        "Value": "10"
    }
]
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>
