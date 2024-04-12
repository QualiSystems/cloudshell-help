---
sidebar_position: 4
---


# Blueprint Start

### Description

Creates a new sandbox from a specific public blueprint associated with the user's domain. Returns details about the sandbox such as ID and the actions that can be performed on the sandbox. (After the sandbox is created, you can view it in the Sandboxes dashboard in CloudShell Portal.)

:::note
- You cannot reserve blueprints if there are conflicts with the reservation timeslot. For additional information see [Creating Sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Crt.htm).
- This method does not support persistent sandboxes. As such, starting a persistent sandbox will deploy a regular sandbox.
:::

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/blueprints/{blueprint_identifier}/start`

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
| `name` | The name of the sandbox. `(string)` <br/> If you do not specify a name, you will get the following error message: "Reservation name and duration must be specified in request body". |
| `duration` | The duration for this sandbox. Time must be specified in ISO 8601 format (for example PT23H). `(string)` <br/> If you do not specify the duration, you will get the following error message: "Duration format must be a valid 'ISO 8601' (e.g 'PT23H' or 'PT4H2M')". |
| `params` | Any published input parameters defined for the blueprint and its abstract resources. Input parameters that have no default must be included in the request. Abstract resource input parameters must be associated to global inputs (specify the global inputs in the request). `(Array)` <br/> If you do not specify the input parameters, you will get the following error message: "Blueprint has invalid inputs". |
| `permitted_users` | Users permitted to use the sandbox. Permitted users must have access to the logged-in domain. |

</details>

<details>
<summary>Request example</summary>

```javascript
{
   "name":"testbp-sndbx",
   "duration":"PT2H5M",
   "params":[
      {
         "name":"global1",
         "value":"value1"
      },
      {
         "name":"abstract resource 1.attribute4",
         "value":"some value"
      },
      {
         "name":"abstract resource 1/sub resource.attribute4",
         "value":"some value"
      }
   ],
   "permitted_users":[
      "john.s",
      "emily.b",
      "lucas.w"
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
   "name":"Test Blprnt2",
   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",
   "state":"Ready",
   "type":"Sandbox",
   "components":[
      {
         "id":"82159835-2d95-46a9-95ec-9251963d203d",
         "name":"MyApp",
         "type":"Application",
         "component_type":"Generic App Model",
         "app_lifecycle":"undeployed",
         "_links":{
            "self":{
               "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components/82159835-2d95-46a9-95ec-9251963d203d",
               "method":"GET"
            }
         }
      }
   ],
   "_links":{
      "self":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2",
         "method":"GET",
      },
      "components":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components",
         "method":"GET"
      },
      "stop":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/stop",
         "method":"POST",
      },
      "all":{
         "href":"/sandboxes",
         "method":"GET",
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
| `state` |   | The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. `(string)` |
| `type` |   | The sandbox type ("Sandbox"). `(string)` |
| `components` |   | The resource model of the sandbox. `(array)` |
|   | `name` | The name of the component. `(string)` |
|   | `type` | The component ("resource", "application", or "service"). `(string)` |
|   | `component_type` | The resource model. `(string)` |
|   | `app_lifecycle` | (Available for App components) The current state of the App ("undeployed"/"deployed"). `(string)` |
|   | `_links` | The actions that can be performed on the sandbox component (Get component details). |
| `_links` |   | The actions that can be performed on the sandbox in the user's domain: |
|   | `self` | Provides a link to get the details for the sandbox via a `GET` request. |
|   | `components` | Provides a link to get all components in the sandbox via a `GET` request. |
|   | `stop` | Provides a link to get stop the sandbox via a `POST` request. |
|   | `all` | Provides a link to get all available sandboxes according to the user's domain via a `GET` request. |

</details>