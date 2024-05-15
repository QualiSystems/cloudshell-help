---
sidebar_position: 15
---


# Sandbox Extend

### Description

Extends the duration of a particular sandbox by a specified timeframe.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/extend`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox extend` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

The scheduling parameter of the sandbox in JSON format. The elements of the `sandbox extend` method include:

| Parameter | Description/Comments |
| --- | --- |
| `extended_time` | The additional duration required for the sandbox. Time must be specified in ISO 8601 format (for example PT23H). `(string)` <br/> If you do not specify a value, the following error message will be displayed: "Parameter is not a valid extended time". |

</details>

<details>
<summary>Request example</summary>

```javascript
{
   "extended_time":"PT2H5M"
}
```
</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox extend` method returns details about the extended sandbox. The output includes details about the sandbox ID and the new time of the sandbox's duration:

```javascript
{
   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",
   "name":"Test Blprnt2",
   "start_time":"2017-01-01T10:30:00Z",
   "end_time":"2017-01-01T12:35:00Z",
   "remaining_time":"PT24H30M"
}
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox extend` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `id` |   | The ID of the sandbox. `(string)` |
| `name` |   | The name of the sandbox. `(string)` |
| `start_time` |   | The time when the sandbox started `(string)` |
| `end_time` |   | The time when the extended sandbox ends. `(string)` |
| `remaining_time` |   | The time left for the sandbox `(string)` |

</details>