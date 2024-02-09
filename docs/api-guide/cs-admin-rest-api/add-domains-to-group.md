---
sidebar_position: 15
---


# Add domains to group

### Description

Adds one or more domains to a given group.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/groups/{id}/domain
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's ID. Can be retrieved via [Get all groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-groups.htm). |

</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Id | (string) Group's id. Can be retrieved via [Get all groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-groups.htm). |
| ViewOnly | (bool) Specify true to add the group with "view only" permissions. |
</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Domains": [
    {
      "Id": "domain1 id"
    },
    {
      "Id": "domain2 id"
    }
  ],
  "ViewOnly": true
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
201 Created
```
</details>