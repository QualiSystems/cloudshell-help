---
sidebar_position: 10
---

# Remove blueprints from domain

### Description

Removes one or more blueprints from a domain.

### URL 

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/blueprint`

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
| Id | (string) Blueprint's id. Can be retrieved via [Get domain's blueprints](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-domain-blueprints.htm). |

</details>

<details>
<summary>Request example</summary>
```javascript
{
  "Blueprints": [
    {
      "Id": "369960ab-68ff-4fdc-bf02-054a96879812"
    },
    {
      "Id": "a0cd0b72-8ed6-41a8-a460-0ab6253aa6af"
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