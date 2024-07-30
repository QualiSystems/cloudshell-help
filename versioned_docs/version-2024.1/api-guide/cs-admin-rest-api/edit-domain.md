---
sidebar_position: 6
---

# Edit domain

### Description

Gets a list of all domains in CloudShell

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's id. Can be retrieved via [Get all domains](./get-all-domains.md). |

### HTTP method

`PUT`

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
| Name | (string) Domain name. |
| Description | (string) Domain description. |
| EndTime | (string) End time of domain's validity. When the end time is reached, the domain will be accessible but no longer in use. |
| Archived | (bool) **true** to archive the domain. |
| LicensePoolId | (string) Id of the license pool. Can be retrieved via [Get all license pools](./get-all-license-pools.md). |
| MinimumLeadTimeMinutes | (int) Determine how soon a sandbox can be ordered from the present time. For example, a minimum lead time of 60 would mean that the FROM field must be now + 60 minutes. |

</details>

<details>
<summary>Request example</summary>

```javascript
{
    "Name": "MyFirstDomain",
    "Description": "Updated domain",
    "EndTime": "05/20/2023 4:37:00 PM",  
    "Archived": true,
    "LicensePoolId": "7932E56D-057E-47FE-8E37-B00600A97C7F",
    "MinimumLeadTimeMinutes": 120

}
```

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

```javascript
200 Ok
```
</details>