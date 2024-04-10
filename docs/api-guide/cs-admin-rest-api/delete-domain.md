---
sidebar_position: 7
---

# Delete domain

### Description

Delete a specific domain from CloudShell.

### URL 

`http://{Admin API IP}:{port#}/api/v1/domains/{id}`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's id. Can be retrieved via [Get all domains](./get-all-domains.md).|

### HTTP method

`DELETE`

### Request

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>