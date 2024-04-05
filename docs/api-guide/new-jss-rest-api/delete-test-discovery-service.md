---
sidebar_position: 15
---

# Delete Test Discovery Service

### Description

Deletes a Test Discovery Service.

:::warning Important 
Before you delete a test repository, please note that this action will remove from CloudShell all tests that were discovered by the repository's discovery server. Any suites that use these tests will be rendered unusable.
:::

### URL

`http://{Job Scheduling API IP}:{port#}/{space_name}/DiscoveryServer/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | Test Discovery Service's id, which can be retrieved via [Get Test Discovery Services](./get-test-discovery-services) method. |

### HTTP method

`DELETE`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

```javascript
200 OK
```