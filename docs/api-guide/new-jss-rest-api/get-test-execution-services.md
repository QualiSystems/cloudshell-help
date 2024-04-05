---
sidebar_position: 18
---

# Get Test Execution Services

### Description

Gets all registered Test Execution Services, including each server's details (server id, address, test type, capacity, etc.).

### URL

`http://{Job Scheduling API IP}:{port#}/api/ExecutionServer`

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

### Response

<details>
<summary>Response example</summary>
```javascript
[
  {
    "id": "94f4ab95-5c58-46b1-adce-fab88f9196e4",
    "name": "My TES1",
    "testTypeId": "59aabbe8-dc0b-48c4-81af-d76f915b47b1",
    "testTypeName": "Robot",
    "address": "http://test-exec-srv.test-exec-srv-2.default.svc.cluster.local:8250",
    "capacity": 200,
    "description": "Cloudshell Execution Service for running Robot tests",
    "runningJobsCount": 0,
    "leasedJobsCount": 0,
    "isOnline": true,
    "isIncluded": true,
    "excludedByUsername": null,
    "excludedByName": null,
    "excludeReason": null,
    "spaces": []
  },
]
```
</details>

<details>
<summary>Response summary</summary>

| Parameter | Description/Comments |
| --- | --- |
| id | Test Execution Service id. (guid) |
| name | Test Execution Service name. (string) |
| testTypeId | Id of the test type. (guid) |
| testTypeName | Test Execution Service supported test type. (string)<br/>For example, Robot. |
| address | Test Execution Service address. (string) |
| capacity | Maximum supported number of concurrent job executions. (numeric) |
| description | Test Execution Service description, if defined. (string) |
| runningJobsCount | Number of jobs currently running on the Test Execution Service.<br/>Note that the sum total of the leasedJobsCount and runningJobsCount cannot exceed the defined capacity. (numeric) |
| leasedJobsCount | Job slots allocated to a suite execution while the job’s sandbox is being created. (numeric)<br/>Note that the sum total of the leasedJobsCount and runningJobsCount cannot exceed the defined capacity. |
| isOnline | Whether the Test Execution Service is currently online. (bool) |
| isIncluded | Whether the Test Execution Service is currently included. (bool) |
| excludedByUsername | (Applies only if the Test Execution Service is currently excluded) CloudShell username who excluded the Test Execution Service. (string) |
| excludedByName | (Applies only if the Test Execution Service is currently excluded) First and last name of the CloudShell user who excluded the Test Execution Service. (string) |
| excludeReason | (Applies only if the Test Execution Service is currently excluded) Reason provided for excluding the Test Execution Service. (string) |
| spaces | Domains in which this Test Execution Service is used. (string) |
</details>