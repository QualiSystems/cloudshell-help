---
sidebar_position: 5
---

# Get domain by ID

### Description

Get a domain's details.

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md). |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`


</details>

### Response

<details>
<summary>Response example</summary>   

```javascript
{
    "Id": "5c966733-c496-486d-8b1a-963c13e9a103",
    "Archived": false,
    "EndTime": null,
    "LicensePoolId": null,
    "Description": "New York team's domain",
    "Name": "New York"
}
```
</details>

<details>
<summary>Response code</summary>  

```javascript
200 OK
```
</details>