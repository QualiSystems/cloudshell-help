---
sidebar_position: 19
---

# Get group by ID

### Description

Gets a group's details using the group's id.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's ID. Can be retrieved via [Get all groups](./get-all-groups.md).|

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
    "ParentIds": null,
    "Sid": "42038eb9-9a58-4298-8a38-0be6f4d3b87a",
    "Name": "my group",
    "Description": "my group's description",
    "ViewOnly": false,
    "groupType": "UserDefined",
    "groupRole": "Regular",
    "Id": 7
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>