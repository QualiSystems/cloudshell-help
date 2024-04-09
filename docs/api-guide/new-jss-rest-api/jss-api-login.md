---
sidebar_position: 2
---

# New Job Scheduling API Login

### Description

Both the new CloudShell Job Scheduling Portal and the API use token-based authentication. When a user logs in, an access token is generated for the user's session together with a refresh-token that can be used to create new access tokens in case the access token expires, providing you with maximum control over access to the system by 3<sup>rd</sup> party applications and users.

:::note
The New Job Scheduling does not include the Global domain. This means two things:

- There is no central location for reviewing activity from all domains in the Job Scheduling Portal.
- Users associated only with the Global domain cannot access the Job Scheduling Portal or API.
:::

### URL

`http://{Job Scheduling API IP}:{port#}/api/Account/login`

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Content-Type: application/json`
</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| username | CloudShell admin username. (string) |
| password | CloudShell admin password. (string) |
</details>

<details>
<summary>Request example</summary>
```javascript
{
  "username": "string",
  "password": "string"
}
```
</details>

### Response

<details>
<summary>Response example</summary>
```javascript
{
  "accessToken": "oHk5r-5R-lYlB7ekIjdk6FVKHs7GXwIdZxU6s7M9Rdo",
  "refreshToken": "rXd4YhgsW0GdoYuim6k-TeZPugPAOr5uN-kWjGMPNzo",
  "tokenType": "Bearer",
  "expiresIn": 18000
}
```
</details>

<details>
<summary>Response summary</summary>

| Parameter | Description/Comments |
| --- | --- |
| accessToken | Token for authorizing REST API calls. (guid) |
| refreshtoken | Token for refreshing expries accessToken. (guid) |
| tokenType | Token type. (string) |
| expiresIn | Validity period in seconds. (Numeric) |
</details>