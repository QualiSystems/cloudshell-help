---
sidebar_position: 8
---

# Get suite templates

### Description

Gets a basic summary of all suite templates in a specific domain.

### URL

`http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteTemplate/Summary`

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
</details>

### Response

<details>
<summary>Response example</summary>
```javascript
[
  {
    "id": "b25d72e0-4f44-4b62-949c-02596196b157",
    "name": "Hardware Network Test",
    "description": "",
    "ownerName": "admin",
    "ownerUsername": "admin",
    "createdDate": "2020-10-28T10:30:19.122Z",
    "modifiedDate": "2020-10-28T11:10:07.78Z"
  }
]
```
</details>

<details>
<summary>Response summary</summary>

| Parameter | Description/Comments |
| --- | --- |
| id | Suite template id. (guid) |
| name | Suite template name. (string) |
| description | Suite template description, if defined. (string) |
| ownerName | First and last name of the CloudShell user who owns the suite. (string) |
| ownerUserName | CloudShell username who owns the suite. (string) |
| createdDate | Suite template creation time. (ISO 8601 Date/Time format) |
| modifiedDate | Last modification time of suite template. (ISO 8601 Date/Time format) |
</details>