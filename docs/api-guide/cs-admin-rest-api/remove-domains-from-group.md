---
sidebar_position: 24
---

# Remove domains from group

### Description

Removes one or more domains from a given group.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups/{id}/domains`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's ID. Can be retrieved via [Get all groups](./get-all-groups.md). |

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
| Id | (string) Domain's id. Can be retrieved via [Get group's domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-group-domains.htm). |
</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Domains": [
    {
      "Id": "5c966733-c496-486d-8b1a-963c13e9a103"
    },
    {
      "Id": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575"
    },
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