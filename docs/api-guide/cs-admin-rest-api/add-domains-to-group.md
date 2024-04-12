---
sidebar_position: 23
---


# Add domains to group

### Description

Adds one or more domains to a given group.

### URL 

`http://{Admin API IP}:{port#}/api/v1/groups/{id}/domain`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's ID. Can be retrieved via [Get all groups](./get-all-groups.md). |

### HTTP method

`POST`

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
| Id | (string) Domain ids. Can be retrieved via [Get all domains](./get-all-domains.md). |
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