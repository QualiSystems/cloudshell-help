---
sidebar_position: 2
---

# Blueprints

### Description

Gets a list of all the public blueprints associated with the user's domain. Returns blueprint details related to the user's domain and permissions, such as the blueprint GUID and the actions that can be performed on each blueprint.

:::note
In CloudShell Portal, make sure to set the blueprints to "Public" as the API does not work with private blueprints.
:::

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/blueprints`

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `blueprints` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>

The `blueprints` method returns a list of all the blueprints associated with the user's domain and permissions and the actions that can be performed on the individual blueprints:

```javascript
[
   {
      "name":"WebApi",
      "id":"c6abccb6-71eb-423b-b754-477c11d6bc2a",
      "description":null,
      "availability":"Not Available",
      "categories":[
         
      ],
      "estimated_setup_duration":"PT25M",
      "_links":{
         "self":{
            "href":"/blueprints/c6abccb6-71eb-423b-b754-477c11d6bc2a",
            "method":"GET",
            "name":"get a blueprint's details",
            "templated":true
         },
         "all":{
            "href":"/blueprints",
            "method":"GET",
            "name":"get available blueprints according to the user domain"
         },
         "create_sandbox":{
            "href":"/blueprints/c6abccb6-71eb-423b-b754-477c11d6bc2a/start",
            "method":"POST",
            "name":"create a sandbox from the blueprint",
            "templated":true
         }
      }
   }
]
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `blueprints` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `name` |   | The name of the blueprint. `(string)` |
| `id` |   | The ID of the blueprint. `(string)` |
| `description` |   | A short description about the blueprint. `(string)` |
| `availability` |   | The availability of the blueprint. <br/> Possible values: Available Now, Not Available. `(string)` |
| `categories` |   | The categories assigned to the blueprint. `(string)` |
| `estimated_setup_duration` |   | The estimated setup duration of the sandbox. The estimated duration's value is specified in ISO 8601 format. |
| `_links` |   | The actions that can be performed on the blueprints in the user's domain: |
|   | `self` | Provides a link to get the blueprint's details via a `GET` request. |
|   | `all` | Provides a link to get all available blueprints according to the user's domain via a `GET` request. |
|   | `create_sandbox` | Provides a link to create a sandbox from the blueprint via a `POST` request. |
</details>

