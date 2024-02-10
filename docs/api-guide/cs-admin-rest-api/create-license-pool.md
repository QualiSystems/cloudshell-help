---
sidebar_position: 29
---

# Create license pool

### Description

Creates a new license pool in CloudShell.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/licensepools
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
    "Name": "NY license pool",
    "Description": "License pool for New York team",
    "MaxConcurrentReservation": 10,
    "Domains": ["2702ce9e-2db8-4b1d-94d6-1c4bf1b40267", "be342a7f-e2b8-45c6-9b32-0869b505029c"]
}
```
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Name": "New York license pool",
    "Description": "License pool for New York team",
    "MaxConcurrentReservation": 10,
    "Domains": [
        "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
        "dcd91805-4e1c-48a8-88c7-d9805e876783"
    ],
    "CreateDate": "0001-01-01T00:00:00",
    "Id": "18967cc7-f239-496c-a900-b04300a5dafc"
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
201 Created
```
</details>