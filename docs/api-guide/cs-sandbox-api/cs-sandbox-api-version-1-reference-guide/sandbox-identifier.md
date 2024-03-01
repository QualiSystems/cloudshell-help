---
sidebar_position: 5
---

## sandbox identifier

### Description

Gets details and available actions for a particular sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v1/sandboxes/{sandbox_identifier}`

### HTTP method

`GET`

### Request

<details>
<summary>URL</summary>

:::note
You can get the sandbox ID from the [sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____2#sandboxe) method, [blueprint start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V1-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____2#blueprin2) method, and from the sandbox ID segment in the CloudShell Portal URL.
:::

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | 
The id of the sandbox (`string`). |

</details>

<details>
<summary>Headers</summary>

Example header format for the `sandbox identifier` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox identifier` method returns details about a particular sandbox (as opposed to multiple ones). The output includes details about the sandbox ID and the actions that can be performed on the sandbox:

```javascript
{
   "name":"Test Blprnt 2",
   "id":"994bd534-740a-45f5-851f-ff452f2a17a2",
   "state":"Ready",
   "setup_stage":"Provisioning""type":"Sandbox",
   "components":[
      {
         "name":"MySwitch",
         "type":"Resource",
         "component_type":"Generic Switch Model",
         "description":"",
         "attributes":[
            {
               "type":"string",
               "name":"vendor",
               "value":" """
            }
         ],
         "connection_interfaces":[
            {
               "name":"Telnet",
               "url":""
            }
         ],
      }
   ],
   "apps":[
      {
         "name":"MyApp",
         "type":"Application",
         "description":""
      }
   ],
   ]"permitted_users":[
      {
         "john.s",
         "emily.b",
         "lucas.w"
      }
   ]"_links":{
      "self":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2",
         "method":"GET",
         "name":"get a sandbox' details",
         "templated":true
      },
      "stop":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/stop",
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
```

</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox identifier` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `name` |   | The name of the sandbox. `(string)` |
| `id` |   | The ID of the sandbox. `(string)` |
| `blueprint_id` |   | The ID of the blueprint on which the sandbox is based. |
| `description` |   | A description of the sandbox `(string)` |
| `start_time` |   | The time when the sandbox started `(string)` |
| `end_time` |   | the time when the sandbox ended or is expected to end `(string)` |
| `state` |   | The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. `(string)` |
| `setup_stage` |   | (If the sandbox includes orchestration scripts) The current setup stage of the sandbox. Possible values: Provisioning, Connectivity, Configuration, Ended, None. `(string)` |
| `type` |   | The sandbox type ("Sandbox"). `(string)` |
| `components` |   | The resource model of the sandbox. `(array)` |
|   | `name` | The name of the component. `(string)` |
|   | `type` | The component ("resource", "application", or "service"). `(string)` |
|   | `component_type` | The resource model. `(string)` |
|   | `description` | A short description of the resource. |
|   | `attributes` | The attributes of the resource model. `(array)` |
|   | `type` | The attribute type. `(string)` |
|   | `name` | The attribute name. `(string)` |
|   | `value` | The attribute value. `(string)` |
|   | `connection_interfaces` | The connection interfaces of the resource. `(array)` |
|   | `name` | The name of the connection interface. `(string)` |
|   | `url` | The URL of the connection interface of the resource. `(string)` |
| `apps` |   | The Apps of the sandbox. `(string)` |
|   | `type` | The App type ("Application"). `(string)` |
|   | `name` | The name of the App (for example, App1). `(string)` |
|   | `description` | A short description of the App. `(string)` |
| `permitted_users` |   | Sandbox's permitted users list. Specify as a comma-separated list of the CloudShell user names. |
| `_links` |   | The actions that can be performed on the sandbox in the user's domain: |
|   | `self` | Provides a link to get the details for the sandbox via a `GET` request. |
|   | `stop` | Provides a link to stop the sandbox via a `POST` request. |
|   | `all` | Provides a link to get all available sandboxes according to the user's domain, via a `GET` request. |
|   | `blueprint` | Provides a link to get the details of the sandbox's blueprint via a `GET` request. |

</details>