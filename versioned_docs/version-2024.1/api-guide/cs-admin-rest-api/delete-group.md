---
sidebar_position: 21
---

# Delete group

### Description

Deletes a group by ID from CloudShell.

### URL

`http://{Admin API IP}:{port#}/api/v1/group/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's id. Can be retrieved via [Get all groups](./get-all-groups.md). |

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