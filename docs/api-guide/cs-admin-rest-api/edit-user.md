---
sidebar_position: 22
---

# Edit user

### Description

Edit a user's details..

### HTTP method

PUT

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
| id | (string) User's id. Can be retrieved via [Get all users](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-users.htm). |
</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Username | (bool) Username. _Username cannot be modified._ |
| Password | (string) User's password |
| Email | (string) User's email address. |
| IsActive | (bool) **true** creates an active user. |
| IsAdmin | (bool) **true** creates a system administrator. |
| GroupIds | (string) Comma-separated list of group ids to add the user to. |
| TimeZoneInfold | (string) User's time zone. |
| MaxReservationDuration | (int) Maximum allowed sandbox duration for the user (in days). |
| MaxConcurrentReservations | (int) Maximum number of sandboxes the user can own at any time.. |
| MaxScheduledSandboxes | (int) Maximum number of scheduled (planned/future) sandboxes the user can have at any time. |
| MaxOwnedBlueprints | (int) Set the maximum of blueprints the user can own at any given time. Unlimited by default. _This setting applies to admins, domain admins and regular users only._ |
| MaxSavedSandboxes | (int) Maximum number of saved sandboxes the user can have at any time. Unlimited by default. _Applies to customers using the Save and Restore add-on._ |
</details>

<details>
<summary>Request example</summary>

```javascript
{
    "Username": "john m",
    "Password": "a",
    "Email": "user99@example.com",
    "IsActive": true,
    "IsAdmin": true,
    "GroupIds": [-1],
    "TimeZoneInfoId": "Israel Standard Time",
    "MaxReservationDuration": -1,
    "MaxConcurrentReservations": -1,
    "MaxScheduledSandboxes": -1,
    "MaxOwnedBlueprints": -1,
    "MaxSavedSandboxes": -1
}
```
</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>