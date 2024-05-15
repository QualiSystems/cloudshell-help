---
sidebar_position: 17
---

# Delete Test Execution Service

### Description

Deletes a Test Execution Service.

:::info Notes
When deleting a Test Execution Service, it is marked as deleted and the following takes place:

- The Test Execution Service will not get new execution tasks.
- Test that are pending/running on the Test Execution Service will be terminated.
- The status of jobs assigned to the Test Execution Service will be set to terminated with the reason being that the Test Execution Service was deleted.
:::

### URL

`http://{Job Scheduling API IP}:{port#}/{space_name}/ExecutionServer/{id}`

| Parameter | Description/Comments |
| --- | --- |
| id | Test Execution Service's id, which can be retrieved via [Get Test Execution Services](./get-test-execution-services) method. |

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