---
sidebar_position: 18
---

# Create group

### Description

Creates one or more new CloudShell groups.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups`

### HTTP method

`POST`

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
  "Groups": [
    {
      "Name": "my group",
      "Description": "my test group",
      "groupRole": "Regular"
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
    "Groups": [
        {
            "Name": "mygroup",
            "Description": "my test group",
            "ViewOnly": false,
            "groupType": "UserDefined",
            "groupRole": "Regular",
            "Id": 7
        }
    ],
    "Errors": []
}
```
</details>

<details>
<summary>Response code</summary> 

```javascript
201 Created
```
</details>