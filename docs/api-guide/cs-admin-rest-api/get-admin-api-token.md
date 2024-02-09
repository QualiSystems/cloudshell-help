---
sidebar_position: 2
---

# Get Administration API token

### Description

Gets an authentication token for Administration API.

### HTTP method

PUT

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/Api/Auth/Login
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

Example header format:

| Parameter | Description/Comments |
| --- | --- |
| Username | (string) CloudShell username. |
| Password | (string) CloudShell user password. |
| Domain | (string) CloudShell domain. |
</details>

<details>
<summary>Request example</summary>

```javascript
{
    "Username":"admin",
    "Password":"admin",
    "Domain":"Global"
}
```
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
"UJvRg9mn6EywpLYMpRPiQg2"
```
</details>

<details>
<summary>Response code</summary>

```javascript
200
```

</details>

