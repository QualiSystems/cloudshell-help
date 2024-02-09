---
sidebar_position: 5
---

# Get domain by ID

### Description

Get a domain's details.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/domains/{id}
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-groups.htm). |
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