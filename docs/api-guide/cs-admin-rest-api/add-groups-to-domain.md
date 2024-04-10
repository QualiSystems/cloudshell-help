---
sidebar_position: 12
---


# Add groups to domain

### Description

Adds one or more groups to a given domain.

### URL 

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md).|

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
| Id | (string) Group id. Can be retrieved via [Get all groups](./get-all-groups.md). |
| ViewOnly | (bool) Specify true to add the group with "view only" permissions. |
</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Groups": [
    {
      "Id": 1,
      "ViewOnly": false
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