---
sidebar_position: 6
---

# Edit domain

### Description

Gets a list of all domains in CloudShell

### HTTP method

PUT

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
| id | (string) Domain's id. |

</details>

<details>
<summary>Request body</summary>
| Parameter | Description/Comments |
| --- | --- |
| Name | (string) Domain name. |
| Description | (string) Domain description. |
| EndTime | (string) End time of domain's validity. When the end time is reached, the domain will be accessible but no longer in use. |
| Archived | (bool) **true** to archive the domain. |
| LicensePoolId | (string) Id of the license pool. Can be retrieved via [Get all license pools](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-license-pools.htm). |

```javascript
{
    "Name": "MyFirstDomain",
    "Description": "Updated domain",
    "EndTime": "05/20/2023 4:37:00 PM",  
    "Archived": true,
    "LicensePoolId": "7932E56D-057E-47FE-8E37-B00600A97C7F"

}
```
</details>

<details>
<summary>Request example</summary>
```javascript
{
  "Description": "domain's new description",
  "Name": "domain's new name"  
}
```
</details>

### Response

<details>
<summary>Response code</summary>

200 OK
</details>