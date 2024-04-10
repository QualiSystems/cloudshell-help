---
sidebar_position: 30
---

# Create user

### Description

Creates a new user in CloudShell.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/users
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
| Username | (bool) Username. |
| Password | (string) User's password |
| Email | (string) User's email address. |
| IsActive | (bool) **true** creates an active user. |
| IsAdmin | (bool) **true** creates a system administrator. |
| GroupIds | (string) Comma-separated list of group ids to add the user to. |
| TimeZoneInfold | (string) User's time zone. |
| MaxReservationDuration | (int) (Optional) Maximum allowed sandbox duration for the user (in minutes). Specify "-1" to use the default. |
| MaxConcurrentReservations | (int) (Optional) Maximum number of sandboxes the user can own at any time. Specify "-1" to use the default. |
| MaxScheduledSandboxes | (int) (Optional) Maximum number of scheduled (planned/future) sandboxes the user can have at any time. Specify "-1" to use the default. |
| MaxOwnedBlueprints | (int) (Optional) Maximum number of blueprints the user can own at any given time. Specify "-1" to use the default (unlimited) _This setting applies to admins, domain admins and regular users only._ |
| MaxSavedSandboxes | (int) (Optional) Maximum number of saved sandboxes the user can have at any time. Unlimited by default. _Applies to customers using the Save and Restore add-on._ Specify "-1" to use the default. |
</details>

<details>
<summary>Request example</summary>

```javascript
{
  "Username": "john m",
  "Password": "1234",
  "Email": "john@example.com",
  "IsActive": true,
  "IsAdmin": true,
  "GroupIds": [
    1
  ],
  "TimeZoneInfoId": "Israel Standard Time",
  "MaxReservationDuration": 1,
  "MaxConcurrentReservations": 2,
  "MaxScheduledSandboxes": 2,
  "MaxOwnedBlueprints": 2,
  "MaxSavedSandboxes": 0
}
```
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Id": 14
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
201 Created
```
</details>