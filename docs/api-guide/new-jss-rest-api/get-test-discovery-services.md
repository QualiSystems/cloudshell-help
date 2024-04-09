---
sidebar_position: 16
---

# Get Test Discovery Services

### Description

Gets all registered Test Discovery Services, including each server's details (server id, address, name, etc.).

### URL

`http://{Job Scheduling API IP}:{port#}/api/DiscoveryServer`

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
[
  {
    "id": "df80242a-0372-46f7-b2cb-6766cd343c4b",
    "address": "test-discovery-service-svc",
    "name": "Robot Discovery Service",
    "description": "Robot Discovery Service",
    "testTypeName": "robot",
    "isOnline": true,
    "repository": {
      "url": "",
      "displayName": "ROBOT Tests"
    }
  }
]
```
</details>

<details>
<summary>Response summary</summary>

| Parameter | Description/Comments |
| --- | --- |
| id | Test Discovery Service id. (guid) |
| address | Test Discovery Service address. (string) |
| name | Test Discovery Service name. (string) |
| description | Test Discovery Service description, if defined. (string) |
| testTypeName | Test Discovery Service's supported test type. (string)<br/>For example, Robot. |
| isOnline | Whether the Test Discovery Service is currently online. (bool) |
| repository | Details of the online test repository associated to this Test Discovery Server.<br/><ul><li>**url**: Online test repository URL. (string)</li><li>**displayName**: Name of the online test repository. (string)</li></ul> |
</details>