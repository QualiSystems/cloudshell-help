---
sidebar_position: 27
---

# Remove users from group

### Description

Removes one or more users from a group.

### HTTP method

DELETE

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) Group's id. Can be retrieved via [Get all groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-groups.htm). |
</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Id | (string) User's id. Can be retrieved via [Get group's users](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-group-users.htm). |
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