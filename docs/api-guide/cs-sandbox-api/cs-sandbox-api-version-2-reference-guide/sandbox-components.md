---
sidebar_position: 8
---


# Sandbox Components

### Description

Gets details about the components (resources, services, and Apps) of a particular sandbox.

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/components`

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

Example header format for the `sandbox components` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox components` method returns details about all the components of a particular sandbox and the actions that can be performed on each component.

```javascript
[
   {
      "id":"0daead01-8e57-4064-81d4-84911effa933",
      "name":"MyApp",
      "type":"Application",
      "component_type":"Generic App Model",
      "description":"",
      "active_deployment_name":"",
      "template_name":"",
      "app_lifecycle":"undeployed""attributes":[
         {
            "type":"string",
            "name":"user",
            "value":""
         }
      ],
      "connection_interfaces":[
         {
            "name":"SSH",
            "url":""
         }
      ]"_links":{
         "self":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa933",
            "method":"GET"
         }
      }
   }{
      "id":"0daead01-8e57-4064-81d4-84911effa911",
      "name":"MySwitch",
      "type":"Resource",
      "component_type":"Generic Switch Model",
      "description":"",
      "attributes":[
         {
            "type":"string",
            "name":"vendor",
            "value":""
         }
      ],
      "connection_interfaces":[
         {
            "name":"Telnet",
            "url":""
         }
      ]"_links":{
         "self":{
            "href":"/sandboxes/0daead01-8e57-4064-81d4-84911effa000/components/0daead01-8e57-4064-81d4-84911effa911",
            "method":"GET"
         }
      }
   }
]
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox components` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `id` |   | The ID of the component. `(string)` |
| `name` |   | The name of the component. `(string)` |
| `type` |   | The component ("resource", "application", or "service"). `(string)` |
| `component_type` |   | The resource model. `(string)` |
| `description` |   | A short description of the component. `(string)` |
| `active_deployment_name` |   | (Available for App components) The name of the deployment path for the App. `(string)` |
| `template_name` |   | (Available for App components) The name of the App template. `(string)` |
| `app_lifecycle` |   | (Available for App components) The current state of the App ("undeployed"/"deployed"). `(string)` |
| `attributes` |   | The attributes of the resource model. `(array)` |
|   | `type` | The attribute type. `(string)` |
|   | `name` | The attribute name. `(string)` |
|   | `value` | The attribute value. `(string)` |
| `connection_interfaces` |   | The connection interfaces of the resource. `(array)` |
|   | `name` | The name of the connection interface. `(string)` |
|   | `url` | The URL of the connection interface. `(string)` |
| `_links` |   | The actions that can be performed on the component of a sandbox in the user's domain: |
|   | `self` | Provides a link to get the component's details via a `GET` request. |

</details>
