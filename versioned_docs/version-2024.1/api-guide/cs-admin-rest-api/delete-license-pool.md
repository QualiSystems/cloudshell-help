---
sidebar_position: 40
---

# Delete license pool

### Description

Delete a specific license pool from CloudShell.

### URL

`http://{Admin API IP}:{port#}/api/v1/licensepools/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) License pool's id. Can be retrieved via [Get all license pools](./get-all-license-pools.md). |

### HTTP method

`DELETE`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>