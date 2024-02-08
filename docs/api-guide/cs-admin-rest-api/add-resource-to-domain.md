---
sidebar_position: 12
---

# Add resources to domain

### Description

Add resources from other domains to a give domain.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>
```javascript
http://{Admin API IP}:{port#}/api/v1/domains/{id}/resources
```
</details>

<details>
<summary>Headers</summary>



Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) Domain's id. Can be retrieved via [Get all domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-domains.htm). |

</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| id | (string) Resource id. Can be retrieved via [Get domain's resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-domain-resources.htm). |
| IncludeDescendants | (bool) (Optional) Include sub-resources in the domain. Default is **true**. |

</details>

<details>
<summary>Request example</summary>

```javascript
{

  "Resources": [
    {
      "Id": "6deda6fb-8f56-4c12-ac29-00b3fb7756db",
      "IncludeDescendants": true
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



201 Created
</details>