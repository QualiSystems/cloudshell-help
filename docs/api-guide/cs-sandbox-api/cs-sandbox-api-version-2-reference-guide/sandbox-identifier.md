---
sidebar_position: 7
---

# Sandbox Identifier

### Description

Gets details and available actions for a particular sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}`

### HTTP method

`GET`

### Request

<details>
<summary>URL</summary>

:::note
You can get the sandbox ID from the [sandboxes](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#sandboxe) method, [blueprint start](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/Sndbx-REST-API/REST-API-V2-Ref-Guide.htm?tocpath=CloudShell%20API%20Guide%7CCloudShell%20Sandbox%20API%7C_____3#blueprin3) method, and from the sandbox ID segment in the CloudShell Portal URL.
:::

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). |
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
   "blueprint id":"44ec66d1-4ac8-4e4b-a3e8-c733482ea176",
   "description":"",
   "start_time":"2017-01-01T10:30:00Z",
   "end_time":"2017-01-01T12:00:00Z",
   "state":"Ready",
   "setup_stage":"Provisioning""type":"Sandbox",
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
   "parameters":[
      {
         "name":"Param1",
         "value":""
      },
      {
         "name":"Param2",
         "value":""
      }
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
      },
      "components":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/components",
         "method":"GET"
      },
      "output":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/output",
         "method":"GET"
      },
      "stop":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/stop",
         "method":"POST",
      },
      "all":{
         "href":"/sandboxes",
         "method":"GET",
      }"blueprint":{
         "href":"/blueprints/44ec66d1-4ac8-4e4b-a3e8-c733482ea176",
         "method":"GET"
      }
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
|   | `app_lifecycle` | (Available for App components) The current state of the App ("undeployed"/"deployed"). `(string)` |
|   | `_links` | The actions that can be performed on the sandbox component (Get component details). |
| `parameters` |   | Any published input parameters defined for the sandbox's blueprint and the blueprint's resources. |
|   | `name` | The parameter name `(string)` |
|   | `value` | The parameter value `(string)` |
| `permitted_users` |   | Sandbox's permitted users list. Specify as a comma-separated list of the CloudShell user names. |
| `_links` |   | The actions that can be performed on the sandbox in the user's domain: |
|   | `self` | Provides a link to get the details for the sandbox via a `GET` request. |
|   | `components` | Provides a link to get all components in the sandbox via a `GET` request. |
|   | `output` | Provides a link to get all messages printed to the Output console via a `GET` request. |
|   | `stop` | Provides a link to stop the sandbox via a `POST` request. |
|   | `all` | Provides a link to get all available sandboxes according to the user's domain, via a `GET` request. |
|   | `blueprint` | Provides a link to get the details of the sandbox's blueprint via a `GET` request. |

</details>