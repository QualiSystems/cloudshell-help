---
sidebar_position: 6
---

# Sandboxes

### Description

Gets a list of all the running and pending sandboxes (regular and persistent sandboxes) associated with the user's domain, as well as each sandbox's details, including the sandbox ID and the available actions that can be performed on it. It can also show completed sandboxes related to the user's domain.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v1/sandboxes`

### HTTP method

`GET`

### Request

<summary>Headers</summary>

Example header format for the `sandboxes` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

:::note
To also include completed sandboxes in the response, add the parameter `show_historic` to the request URL:
The default value for this parameter is `false`.
:::

### Response

<details>
<summary>Response example</summary>

The `sandboxes` method returns a list of all the sandboxes and the actions that can be performed on each sandbox.

```javascript
[
   {
      "name":"Test Blprnt2",
      "id":"11491c80-6f79-4e9c-b592-78242c6dc698",
      "description":"This is a list of sandboxes in this user domain",
      "state":"Ready",
      "blueprint":{
         "name":"Test Blprnt2",
         "id":"2f4c972b-5c64-4b08-bae4-73408d7b171d"
      },
      "_links":{
         "self":{
            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698",
            "method":"GET",
            "name":"get a sandbox' details",
            "templated":true
         },
         "components":{
            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/components",
            "method":"GET"
         },
         "stop":{
            "href":"/sandboxes/11491c80-6f79-4e9c-b592-78242c6dc698/stop",
            "method":"POST",
            "name":"stop a sandbox",
            "templated":true
         },
         "all":{
            "href":"/sandboxes",
            "method":"GET",
            "name":"get all sandboxes"
         }
      }
   }
]
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
| `_links` |   | The actions that can be performed on a sandbox in the user's domain: |
|   | `self` | Provides a link to get a specific sandbox's details per specified sandbox ID via a `GET` request. |
|   | `stop` | Provides a link to end an active sandbox per specified sandbox ID via a `POST` request. |
|   | `all` | Provides a link to get all available sandboxes according to the user's domain via a `GET` request. |

</details>