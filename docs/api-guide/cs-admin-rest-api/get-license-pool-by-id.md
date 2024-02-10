---
sidebar_position: 28
---

# Get license pool by ID

### Description

Gets a license pool's details using the group's id.

### HTTP method

GET

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
| Id | (string) License pool's id. Can be retrieved via [Get all license pools](http://localhost:3000/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-license-pools). |
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Name": "SF license pool 2",
    "Description": "License pool for San Francisco domain",
    "MaxConcurrentReservation": 15,
    "Domains": [
        "8cd12c8d-6d40-4dfd-89da-a8d8dde00575"
    ],
    "CreateDate": "2023-07-18T06:59:07",
    "Id": "a4ba81df-ead7-487b-b684-b04300a48e69"
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>