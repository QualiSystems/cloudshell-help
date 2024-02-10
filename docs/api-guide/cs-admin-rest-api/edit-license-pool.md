---
sidebar_position: 30
---

# Edit license pool

### Description

Edit a license pool's details..

### HTTP method

PUT

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

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Name | (bool) License pool name. |
| Description | (string) License pool's password |
| MaxConcurrentReservation | (int) Maximum number of licenses (sandbox reservations) allowed by the license pool. |
| Domains | (string) Comma-separated list of domain ids to add the license pool to. |
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