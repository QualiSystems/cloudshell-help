---
sidebar_position: 19
---

# Get test execution report

### Description

Gets a specific test execution's report.

### URL

`http://{Job Scheduling API IP}:[port#]/api/spaces/{space_name}/TestExecution/{id}/Report`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite execution's ID- included in the suite's URL. (string)<br/>For example:<br/><code>ht<span>tp</span>://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/</code> - included in [Get suite execution](./get-suite-execution) |


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
{
  "testResult": 1,
  "name": "new_test (1).robot",
  "path": "demo_tests1",
  "startTime": "2020-10-28T20:05:07.472Z",
  "endTime": "2020-10-28T20:05:37.653Z",
  "testExecutionServerName": "My TES2",
  "executedBy": "steven.g",
  "report": "Test request data: {\"domainName\": \"Test Lab\", \"test\": \"demo_tests1/new_test (1).robot\", \"reportsFullPath\": \"/home/jrobot/app/nfs/quali/archive/e1a812cd-192d-4617-8046-be5c5861d46c_steven.g\", \"reservationID\": \"e1a812cd192d46178046be5c5861d46c\", \"executionID\": \"9dc164b376004515ac94da4b933d1d7c\", \"testInactivityTimeoutInMinutes\": 2, \"username\": \"steven.g\", \"job\": null, \"parameters\": \"\", \"suite\": null, \"robot\": null, \"inputs\": null}",
  "errorCode": 0,
  "errorMessage": ""
}
```
</details>

<details>
<summary>Response summary</summary>

| Parameter | Description/Comments |
| --- | --- |
| testResult | Test result code. (numeric)<br/>For details, see [Statuses and results](../../jss/statuses-and-results.md). |
| name | Test name. (string) |
| path | Test's folder path on the online test repository. (string) |
| startTime | Test execution's start time. (ISO 8601 Date/Time format) |
| endTime | Test execution's completion time. (ISO 8601 Date/Time format) |
| testExecutionServerName | Test Execution Service used to execute the test. (string) |
| executedBy | CloudShell user who executed the test. (string) |
| report | Test execution report. (json) |
| errorCode | Test execution's error code. (numeric)<br/>For details, see [Statuses and results](../../jss/statuses-and-results.md). |
| errorMessage | Test execution's error message. (string)<br/>For details, see [Statuses and results](../../jss/statuses-and-results.md). |
</details>