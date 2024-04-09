---
sidebar_position: 4
---

# Refresh login

### Description

Refreshes an expired access token.

### URL

`http://{Job Scheduling API IP}:{port#}/api/Token/refresh/{refresh_Token}`

| Parameter | Description/Comments |
| --- | --- |
| refresh_token | refreshToken to use. (string) |

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