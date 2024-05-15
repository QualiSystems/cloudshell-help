---
sidebar_position: 20
---

# Edit group

### Description

Edit a group's details.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's id. Can be retrieved via [Get all groups](./get-all-groups.md). |

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
| Name | (string) Group name. |
| Description | (string) Group description. |
| GroupRole | Group's role. Possible values are: External, Regular, DomainAdmin |

</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Name": "my updated group name",
  "Description": "Updated description",
  "GroupRole": "Regular"
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