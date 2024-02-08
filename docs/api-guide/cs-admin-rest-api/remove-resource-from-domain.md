---
sidebar_position: 13
---

# Remove resources from domain

### Description

Removes resources/sub-resources from domain by id.

### HTTP method

DELETE

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
| ID | (string) Domain's ID. |
</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Id | (string) Resource id (not ParentId). Can be retrieved via [Get domain's resources](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-domain-resources.htm). |
| RemoveAssocations | (bool) Unbooks the resource in the domain. Default is **true**. |
</details>

<details>
<summary>Request example</summary>

```javascript
{

  "Resources": [
    {
      "Id": "<resource id>",
      "RemoveAssociations": false
    },
    {
      "Id": "<resource id>",
      "RemoveAssociations": false
    }
  ]
}
```
</details>


### Response

<details>
<summary>Request example</summary>

```javascript
{
    "Errors": []
}
```
</details>

<details>
<summary>Response code</summary>

200 OK

</details>