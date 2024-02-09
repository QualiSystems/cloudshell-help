---
sidebar_position: 23
---

# Delete user

### Description

Delete a specific user from CloudShell.

### HTTP method

DELETE

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/users/{id}
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) User's id. Can be retrieved via [Get all users](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-users.htm) or [Get group's users](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-group-users.htm). |
</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>