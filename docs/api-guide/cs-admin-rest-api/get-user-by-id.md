---
sidebar_position: 29
---

# Get user by ID

### Description

Get a user's details.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/users/{id}
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) User's ID. Can be retrieved via [Get all users](http://localhost:3000/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-users) or [Get group's users](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-group-users.htm). |

</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Id": 14,
    "Sid": "02358185-f2a7-465f-8d05-6052590896e2",
    "Username": "john m",
    "Email": "john@example.com",
    "IsActive": true,
    "IsAdmin": true,
    "GroupIds": [
        -1,
        1
    ],
    "TimeZoneInfoId": "Israel Standard Time",
    "MaxReservationDuration": 1,
    "MaxConcurrentReservations": 2,
    "MaxScheduledSandboxes": 2,
    "MaxOwnedBlueprints": 2,
    "MaxSavedSandboxes": 0,
    "DomainRoles": [
        {
            "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
            "role": "SystemAdmin"
        },
        {
            "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",
            "role": "SystemAdmin"
        },
        {
            "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",
            "role": "SystemAdmin"
        },
        {
            "DomainId": "134b19d4-6c56-491d-b765-b61191c37f78",
            "role": "SystemAdmin"
        },
        {
            "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",
            "role": "SystemAdmin"
        },
        {
            "DomainId": "985c3306-fad7-4e85-a4e3-c44876149657",
            "role": "SystemAdmin"
        }
    ],
    "DomainName": null,
    "ImportedSid": null
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>