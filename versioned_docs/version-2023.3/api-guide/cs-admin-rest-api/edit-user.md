---
sidebar_position: 31
---

# Edit user

### Description

Edit a user's details..

### URL

`http://{Admin API IP}:{port#}/api/v1/users/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) User's id. Can be retrieved via [Get all users](./get-all-users.md). |

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