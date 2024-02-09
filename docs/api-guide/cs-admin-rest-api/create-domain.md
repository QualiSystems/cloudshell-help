---
sidebar_position: 4
---

# Create domain

### Description

Creates a new domain in CloudShell.

### HTTP method

POST

### Request


<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/domains
```
</details>


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
| Name | (string) License pool name. |
| Description | (string) License pool's description. |
| Archived | (bool) (Optional) Specify "true" to create an archived domain. |
| EndTime (Optional) | (string) (Optional) Domain's expiration time. When this time is reached, the domain will still be accessible but no longer in use. |
| LicensePoolId | (string) (Optional) Name of the license pool to use for the domain. |
| Description | (string) (Optional) Domain's name. |

</details>

<details>
<summary>Request example</summary> 

```javascript
{
  "Archived": true,
  "EndTime": "string",
  "LicensePoolId": "string",
  "EndTime": "05/20/2023 4:37:00 PM"
  "Description": "string",
  "Name": "string"
}
```
</details>

### Response

<details>
<summary>Response example</summary> 

```javascript
{
    "Id": "e7d4289c-4355-435e-bc8f-aea0591af53c"
}
```
</details>

<details>
<summary>Response code</summary> 

```javascript
201 Created
```
</details>

