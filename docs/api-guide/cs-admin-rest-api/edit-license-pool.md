---
sidebar_position: 39
---

# Edit license pool

### Description

Edit a license pool's details..

### URL 

`http://{Admin API IP}:{port#}/api/v1/licensepools/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | (string) License pool's id. Can be retrieved via [Get all license pools](./get-all-license-pools.md). |

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
| Name | (bool) License pool name. |
| Description | (string) License pool's password |
| MaxConcurrentReservation | (int) Maximum number of licenses (sandbox reservations) allowed by the license pool. |
| Domains | (string) List of domain ids to add the license pool to. |
</details>

<details>
<summary>Request example</summary>

```javascript
{
    "Name": "Test license pool",
    "Description": "license pool for testing",
    "MaxConcurrentReservation": 3,
    "Domains": ["985c3306-fad7-4e85-a4e3-c44876149657"]
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