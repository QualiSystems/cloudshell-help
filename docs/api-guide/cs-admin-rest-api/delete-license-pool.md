---
sidebar_position: 31
---

### Description

Delete a specific license pool from CloudShell.

### HTTP method

DELETE

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/licensepools/{id}
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) License pool's id. Can be retrieved via [Get all license pools](http://localhost:3000/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-license-pools). |
</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>