---
sidebar_position: 32
---

# Delete user

### Description

Delete a specific user from CloudShell.

### URL

`http://{Admin API IP}:{port#}/api/v1/users/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) User's id. Can be retrieved via [Get all users](./get-all-users.md) or [Get group's users](./get-group-users.md). |

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