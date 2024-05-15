---
sidebar_position: 1
---

# Login

### Description

Logs the user in to CloudShell, authenticates the user’s credentials and domain, and returns an authorization token to be used with all subsequent requests. Requests that contain this token return information relevant for the specified domain, per the user's permissions.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/login`

### HTTP method

`PUT`

### Request

<details>
<summary>Headers</summary>

Example header format for the `login` method:

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

The user credentials (in JSON format). The parameters of the `login` method include:

| Parameter | Description |
| --- | --- |
| `username` | The user's name. `(string)` |
| `password` | The user's password. `(string)` |
| `domain` | The user's domain. `(string)` |

</details>

<details>
<summary>Request example</summary>

Example request input for the `login` method in JSON format:

```javascript
{
   "username":"admin",
   "password":"admin",
   "domain":"Global"
}
```
</details>

### Response

<details>
<summary>Response exaple</summary>

The following is a sample authorization token returned by the `login` method:

`"a0IAmINiGUmVsoJS9IeG1A=="`
</details>

<details>
<summary>Response summary</summary>

The `login` method returns an authorization token that must be added to the header of each API method.

</details>