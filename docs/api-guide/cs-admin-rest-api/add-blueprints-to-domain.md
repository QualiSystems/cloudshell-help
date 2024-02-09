---
sidebar_position: 9
---

# Add blueprints to domain

### Description

Adds one or more blueprints from different domains to the desired domain.

### HTTP method

POST

### Request

<details>
<summary>URL</summary>
```javascript
http://{Admin API IP}:{port#}/api/v1/domains/{id}/blueprints
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

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| Id | (string) Blueprint's id. |
| ValidateResourceAvailability | (string) Set to **true** to check that the blueprint's resources are available in the new domain. |
</details>

<details>
<summary>Request example</summary>
```javascript
{
  "Blueprints": [
    {
      "Id": "ca60106f-761b-4463-976f-8cc846bc10ff"
    },
    {
      "Id": "a68214a1-3c5d-4534-886d-a1d281e58f21"
    }    
  ],
  "ValidateResourceAvailability": true
}
```
</details>

### Response

<details>
<summary>Response example</summary>
```javascript
{
    "Errors": []
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>