---
sidebar_position: 22
---



# Sandbox Owner Identifier

### Description

.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/owners/{owner_identifier}`

### HTTP method

`GET`

### Request

<details>
<summary>URL</summary>

| Parameter | Description/Comments |
| --- | --- |
| `owner_identifier` | The name of the user (`string`). |
</details>

<details>
<summary>Headers</summary>

Example header format for the `sandboxes` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandboxes` method returns a list of all the sandboxes and the actions that can be performed on each sandbox.

```javascript
[
  {
    "name": "Sanity Testing on Latest Build",
    "id": "fa4a313a-061d-4a40-9815-9730dd7c916f",
    "description": "Blueprint with preconfigured sanity tests to be run on the latest build.",
    "state": "Ready",
    "blueprint": {
      "name": "Sanity Testing Blueprint",
      "id": "506f1880-5ba0-48ad-9385-d259edcf885b"
    }
  },
  {
    "name": "System Diagnostics Test",
    "id": "0b0747f3-b3bb-4de1-b0f0-9c15b7327bb9",
    "description": "Blueprint that automates system diagnostics checks on the local network.",
    "state": "Ready",
    "blueprint": {
      "name": "System Diagnostics Blueprint",
      "id": "07e70b79-3cba-4f1a-a957-fb4b0552fb33"
    }
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandboxes` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `name` |   | The name of the sandbox. `(string)` |
| `id` |   | The ID of the sandbox. `(string)` |
| `description` |   | A text description of the sandbox. `(string)` |
| `state` |   | The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. `(string)` |
| `blueprint` |   | The details of the sandbox's blueprint `(Array)` |
|   | `name` | The name of the blueprint `(string)` |
|   | `id` | The id of the blueprint `(string)` |

</details>
