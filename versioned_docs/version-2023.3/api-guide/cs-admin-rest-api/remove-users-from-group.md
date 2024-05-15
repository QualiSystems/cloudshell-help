---
sidebar_position: 27
---

# Remove users from group

### Description

Removes one or more users from a group.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) Group's id. Can be retrieved via [Get all groups](./get-all-groups.md). |

### HTTP method

`DELETE`

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
| Id | (string) User's id. Can be retrieved via [Get group's users](./get-group-users.md). |
</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Users": [
    {
      "Id": 0
    }
  ]
}
```
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Errors": []
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>