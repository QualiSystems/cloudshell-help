---
sidebar_position: 7
---

# Stop job execution

### Description

Stops a specific job's execution.

### URL

`http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteExecution/{id}/JobExecution/{job_execution_id}/stop`

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite execution's ID- included in the suite's URL. (string)<br/>For example:<br/>http://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/ |
| job_execution_id | Job's id - included in the **jobs** section of the [Get suite execution](./get-suite-execution.md)'s response. For example:<br/>`..."jobs": [{"id": "205aac56-5826-4b5e-a96a-5887b0940b40",...` |
</details>

### Response

<details>
<summary>Response example</summary>
```javascript
{
  "errors": [
    {
      "message": "'843b572e-e768-47d7-8333-48b2c6f23d8b': Execution already completed",
      "name": "ExecutionCompleted",
      "code": 1007
    }
  ]
}
```
</details>

<details>
<summary>Response summary</summary>

<table>
<thead><th>Parameter</th><th>Description/Comments</th></thead>
<tbody>
  <tr>
    <td>name</td>
    <td>ExecutionCompleted (string)</td>
  </tr>
</tbody>
</table>
</details>