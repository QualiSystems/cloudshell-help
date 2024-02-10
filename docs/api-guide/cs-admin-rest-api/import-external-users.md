---
sidebar_position: 26
---

# Import external users

### Description

Import users from your active directory/LDAP into CloudShell.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/users
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
| UserName | External user name. Can be retrieved via [Get users from an external group](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-external-group-users.htm) or [Get users from an external group](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-external-group-users.htm). |
| GroupName | External group name. Can be retrieved via [Get all external groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-external-groups.htm). <br/> Tip: You should import by group name for larger organizations containing hundreds of users as importing all users may fail due to active directory/LDAP limitations. |

</details>

<details>
<summary>Request example</summary>

```javascript
{
  "UserName": "James Porter",
}
```

By group name:

```javascript
{
  "GroupName": "Azure_DevOps_Cloud_Admins"
}
```
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Users": [
        {
            "Id": 11,
            "Sid": "750ad20a-ccf7-4185-a1d9-9202bd108f71",
            "Username": "automationuser",
            "Email": null,
            "IsActive": true,
            "IsAdmin": false,
            "GroupIds": [
                1
            ],
            "TimeZoneInfoId": null,
            "MaxReservationDuration": 1440,
            "MaxConcurrentReservations": 10,
            "MaxScheduledSandboxes": 10,
            "MaxOwnedBlueprints": 10,
            "MaxSavedSandboxes": null,
            "DomainRoles": [],
            "DomainName": "QUALISYSTEMS",
            "ImportedSid": "S-1-5-21-1487810946-2753822684-3978873285-7293"
        }
    ],
    "Errors": []
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>