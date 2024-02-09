---
sidebar_position: 7
---

# Delete domain

### Description

Delete a specific domain from CloudShell.

### HTTP method

DELETE

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/domains/{id}
```
</details>

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) Domain's id. |
</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>