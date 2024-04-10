---
sidebar_position: 13
---

# Remove groups from domain

### Description

Removes one or more blueprints from a domain.

### URL 

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md).|

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
| Id | (string) Group's id. Can be retrieved via [Get all groups](./get-all-groups.md). |

</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Groups": [
    {
      "Id": 1
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