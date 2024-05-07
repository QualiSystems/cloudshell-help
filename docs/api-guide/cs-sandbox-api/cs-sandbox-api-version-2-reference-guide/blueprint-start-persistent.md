---
sidebar_position: 5
---

# Blueprint Start Persistent

### Description

Creates a new persistent sandbox from a specific public persistent blueprint associated with the user's domain. Returns details about the persistent sandbox such as ID and the actions that can be performed on the sandbox. (After the sandbox is created, you can view it in the Sandboxes dashboard in CloudShell Portal.)

:::note
- You cannot reserve blueprints if there are conflicts with the reservation timeslot. For additional information see [Creating Sandboxes](../../../portal/sandboxes/creating-sandboxes.md).
- This method does not support regular sandboxes. As such, attempting to start a regular blueprint will end in error.
:::

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/blueprints/{blueprint_identifier}/start-persistent`

| Parameter | Description/Comments |
| --- | --- |
| `blueprint_identifier` | The name or id of the blueprint (`string`). Can be retrieved via [blueprints](./blueprints.md). |

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>

Example header format for the `blueprint start` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

The scheduling and input parameters of the sandbox in JSON format. The elements of the `blueprint start` method include:

| Parameter | Description/Comments |
| --- | --- |
| `name` | The name of the sandbox. `(string)` <br/> If you do not specify a name, you will get the following error message: "Reservation name must be specified in request body". |
| `params` | Any published input parameters defined for the blueprint and its abstract resources. Input parameters that have no default must be included in the request. Abstract resource input parameters must be associated to global inputs (specify the global inputs in the request). `(Array)` <br/> If you do not specify the input parameters, you will get the following error message: "Blueprint has invalid inputs". |
| `permitted_users` | Users permitted to use the sandbox. Permitted users must have access to the logged-in domain. |

</details>

<details>
<summary>Request example</summary>

```javascript
{
  "name": "Persistent sandbox name",
  "params": [
  ],
  "permitted_users": [
     "steven",
     "julia"
  ]
}
```
</details>

### Response

<details>
<summary>Response example</summary>

The `blueprint start` method returns details about the new sandbox. The output includes details about the sandbox ID and the actions that can be performed on the sandbox:

```javascript
{
  "name": "Persistent sandbox name",
  "id": "8d653d03-9e12-47ce-9d30-19cae1a239c3",
  "blueprint_id": "b4852f4b-d2bd-4dbc-b03a-f943941a9053",
  "description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",
  "start_time": "2021-08-02T09:22:00Z",
  "end_time": null,
  "state": "BeforeSetup",
  "type": "Sandbox",
  "components": [
    {
      "id": "6644dc07-1cc1-4b28-9879-0c704f106c2b",
      "name": "cloudshell-latest",
      "type": "Application",
      "component_type": "Generic App Model",
      "app_lifecycle": "Undeployed",
      "_links": {
        "self": {
          "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components/6644dc07-1cc1-4b28-9879-0c704f106c2b",
          "method": "GET"
        }
      }
    },
    {
      "id": "92259d2a-3928-46ec-9da8-65eccc19b7f8",
      "name": "dbs-latest-cloudshell",
      "type": "Application",
      "component_type": "Generic App Model",
      "app_lifecycle": "Undeployed",
      "_links": {
        "self": {
          "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components/92259d2a-3928-46ec-9da8-65eccc19b7f8",
          "method": "GET"
        }
      }
    }
  ],
  "parameters": [],
  "setup_stage": "None",
  "permitted_users": [
    "admin",
    "julia",
    "steven"
  ],
  "_links": {
    "self": {
      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3",
      "method": "GET"
    },
    "components": {
      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/components",
      "method": "GET"
    },
    "output": {
      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/output",
      "method": "GET"
    },
    "stop": {
      "href": "/sandboxes/8d653d03-9e12-47ce-9d30-19cae1a239c3/stop",
      "method": "POST"
    },
    "all": {
      "href": "/sandboxes",
      "method": "GET"
    },
    "blueprint": {
      "href": "/blueprints/b4852f4b-d2bd-4dbc-b03a-f943941a9053",
      "method": "GET"
    }
  }
}
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `blueprint start` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `name` |   | The name of the sandbox. `(string)` |
| `id` |   | The ID of the sandbox. `(string)` |
| `state` |   | The current state of the sandbox. Possible values: Pending, BeforeSetup, Setup, Ready, Teardown, Error, Ended. `(string)` |
| `type` |   | The sandbox type ("Sandbox"). `(string)` |
| `components` |   | The resource model of the sandbox. `(array)` |
|   | `id` | Component's unique ID. `(string)` |
|   | `name` | The name of the component. `(string)` |
|   | `description` | A short description of the resource. |
|   | `type` | The component ("resource", "application", or "service"). `(string)` |
|   | `component_type` | The resource model. `(string)` |
|   | `attributes` | The attributes of the resource model. `(array)` |
|   | `type` | The attribute type. `(string)` |
|   | `name` | The attribute name. `(string)` |
|   | `value` | The attribute value. `(string)` |
|   | `connection_ interfaces` | The connection interfaces of the resource. `(array)` |
|   | `name` | The name of the connection interface. `(string)` |
|   | `url` | The URL of the connection interface of the resource. `(string)` |
|   | `app_lifecycle` | (Available for App components) The current state of the App ("undeployed"/"deployed"). `(string)` |
|   | `_links` | The actions that can be performed on the sandbox component (Get component details). |
| `_links` |   | The actions that can be performed on the sandbox in the user's domain: |
|   | `self` | Provides a link to get the details for the sandbox via a `GET` request. |
|   | `components` | Provides a link to get all components in the sandbox via a `GET` request. |
|   | `stop` | Provides a link to get stop the sandbox via a `POST` request. |
|   | `all` | Provides a link to get all available sandboxes according to the user's domain via a `GET` request. |
| `parameters` |   | Published inputs and additional info. |
| `permitted_users` |   | Users permitted to use the sandbox, including the owner. |

</details>