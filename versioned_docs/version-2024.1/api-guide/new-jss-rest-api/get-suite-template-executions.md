---
sidebar_position: 10
---

# Get suite template executions

### Description

Gets the executions of a specific suite template, including job and test details.

### URL

`http://{Job Scheduling API IP}:[port#]/api/spaces/{space_name}/SuiteTemplate/{id}/executions?createdBy={createdBy}$count={count}`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite execution's ID- included in the suite's URL. (string)<br/>For example:<br/><code>ht<span>tp</span>://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/</code> |
| createdBy | CloudShell user who started the execution. You can provide a specific CloudShell username or enter 'anyone' to return all results. (string) |
| count | Number of executions to get, starting with the last. For example, if the template has 5 executions, a count of "3" will return executions 5, 4, and 3. (number) |

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

```javascript
200 OK
```

<details>
<summary>Response example</summary>
```javascript
[
  {
    "id": "fde35ef4-eb00-4d49-a24c-107f55e2192e",
    "counter": 9,
    "suiteTemplateDescription": "",
    "createdDate": "2020-10-28T12:47:44.64Z",
    "executedByName": "admin",
    "executedByUsername": "admin",
    "suiteTemplateName": "Hardware Network Test",
    "suiteTemplateId": "b25d72e0-4f44-4b62-949c-02596196b157",
    "startedDate": "2020-10-28T12:47:50.66Z",
    "endedDate": "2020-10-28T12:49:51.887Z",
    "status": 2,
    "statusDescription": "Succeeded",
    "jobs": [
      {
        "id": "7a1b3d9c-ff65-461e-a7e6-fff538af3159",
        "name": "job 1",
        "description": null,
        "startedDate": "2020-10-28T12:47:50.66Z",
        "endedDate": "2020-10-28T12:49:51.887Z",
        "status": 2,
        "statusDescription": "Succeeded",
        "testExecutionServerName": "My TES2",
        "blueprint": {
          "id": "0e1e151f-a581-4e6d-b9e2-7473b1d2297e",
          "name": "CloudShell Sandbox Template",
          "url": null
        },
        "tests": [
          {
            "id": "89c85ae0-2563-45ad-b810-8a0581a0f526",
            "testId": "17936298/demo_tests1/new_test (1).robot",
            "name": "new_test (1).robot",
            "path": "demo_tests1",
            "repositoryName": "ROBOT Tests",
            "result": 1,
            "resultDescription": "Passed",
            "startedDate": "2020-10-28T12:47:50.66Z",
            "endedDate": "2020-10-28T12:48:20.962Z",
            "inputs": [
              {
                "name": "additional_parameters",
                "value": ""
              }
            ],
            "errorCode": 0,
            "errorMessage": "",
            "hasReport": false
          },
          {
            "id": "9b3fbf41-a006-426d-8d09-b5463895106b",
            "testId": "17936298/140_tests_tsivya2/b (101).robot",
            "name": "b (101).robot",
            "path": "140_tests_tsivya2",
            "repositoryName": "ROBOT Tests",
            "result": 1,
            "resultDescription": "Passed",
            "startedDate": "2020-10-28T12:48:20.967Z",
            "endedDate": "2020-10-28T12:48:51.312Z",
            "inputs": [
              {
                "name": "additional_parameters",
                "value": "fghfgh"
              }
            ],
            "errorCode": 0,
            "errorMessage": "",
            "hasReport": false
          },
          {
            "id": "17cc6edf-0899-4e29-b69f-a7c6899fddac",
            "testId": "17936298/140_tests_tsivya2/b (102).robot",
            "name": "b (102).robot",
            "path": "140_tests_tsivya2",
            "repositoryName": "ROBOT Tests",
            "result": 1,
            "resultDescription": "Passed",
            "startedDate": "2020-10-28T12:48:51.32Z",
            "endedDate": "2020-10-28T12:49:21.584Z",
            "inputs": [
              {
                "name": "additional_parameters",
                "value": "dfgsd"
              }
            ],
            "errorCode": 0,
            "errorMessage": "",
            "hasReport": false
          },
          {
            "id": "3c63a8ce-348e-4b5d-acb2-41d3d9f9ecaf",
            "testId": "17936298/140_tests_tsivya2/b (103).robot",
            "name": "b (103).robot",
            "path": "140_tests_tsivya2",
            "repositoryName": "ROBOT Tests",
            "result": 1,
            "resultDescription": "Passed",
            "startedDate": "2020-10-28T12:49:21.589Z",
            "endedDate": "2020-10-28T12:49:51.887Z",
            "inputs": [
              {
                "name": "additional_parameters",
                "value": "dfg"
              }
            ],
            "errorCode": 0,
            "errorMessage": "",
            "hasReport": false
          }
        ],
        "sandbox": {
          "id": "b1824a49-d204-40fc-ae51-fed6e7396960",
          "name": "job 1 #9",
          "url": null,
          "inputs": null
        },
        "errorCode": null,
        "errorMessage": null
      }
    ]
  },
]
```
</details>

<details>
<summary>Response summary</summary>

<table>
<thead><tr><th>Parameter</th><th>Description/Comments</th></tr></thead>
<tbody>
  <tr>
    <td>id</td>
    <td>Suite execution id. (guid)</td>
  </tr>
  <tr>
    <td>counter</td>
    <td>Suite execution number. (numeric)</td>
  </tr>
  <tr>
    <td>suiteTemplateDescription</td>
    <td>Suite execution description. (string)</td>
  </tr>
  <tr>
    <td>createdDate</td>
    <td>Suite execution creation time. (ISO 8601 Date/Time format)</td>
  </tr>
  <tr>
    <td>executedByName</td>
    <td>First and Last name of the CloudShell user who executed the suite. (ISO 8601 Date/Time format)</td>
  </tr>
  <tr>
    <td>executedByUserName</td>
    <td>CloudShell username who executed the suite. (string)</td>
  </tr>
  <tr>
    <td>suiteTemplateName</td>
    <td>Suite template name. (string)</td>
  </tr>
  <tr>
    <td>suiteTemplateId</td>
    <td>Suite template id - included in the suite's URL. (guid)</td>
  </tr>
  <tr>
    <td>startedDate</td>
    <td>Suite execution start time. (ISO 8601 Date/Time format)</td>
  </tr>
  <tr>
    <td>endedDate</td>
    <td>Suite execution completion time. (ISO 8601 Date/Time format)</td>
  </tr>
  <tr>
    <td>status</td>
    <td>Suite execution status code. (numeric)<br/>
    For details, see [Statuses and results](./jss-rest-api-response-codes).</td>
  </tr>
  <tr>
    <td>statusDescription</td>
    <td>Suite execution status description. (string)<br/>
    For details, see [Statuses and results](./jss-rest-api-response-codes).</td>
  </tr>
  <tr>
    <td>jobs</td>
    <td>
    Job details:<br/>
      - **id**: Job ID. (guid)
      - **name**: Job name. (string)
      - **description**: Job description, if defined. (string)
      - **startedDate**: Job execution start time. (ISO 8601 Date/Time format)
      - **endedDate**: Job execution completion time. (ISO 8601 Date/Time format)
      - **status**: Job status code. (numeric) For details, see [Statuses and results](./jss-rest-api-response-codes).
      - **statusDescription**: Job status description. (string) For details, see [Statuses and results](./jss-rest-api-response-codes).
      - **testExecutionServerName**: Test Execution Service that handled the suite's execution. (string)
      - **blueprint**: Details of the job's blueprint.
        - **id**: Blueprint ID - included in the blueprint's URL. (guid)
            <br/>
            For example:
            <br/>
            http://192.168.30.6/RM/Diagram/Index/<b>0e1e151f-a581-4e6d-b9e2-7473b1d2297e</b>?diagramType=Topology
        - **Name**: Blueprint name. (string)
        - **URL**: Blueprint URL. (string)
      - **tests**: Details of the job's tests.
        - **id**: Unique id of the test’s execution. (guid)
        - **testID**: Test path on the online test repository. (string)
        - **name**: Test name. (string)
        - **path**: Test's folder path on the online test repository. (string)
        - **repositoryName**: Name of online repository containing the test. (string)
        - **result**: Test result code. (numeric) For details, see [Statuses and results](./jss-rest-api-response-codes).
        - **resultDescription**: Test result description. (string) For details, see [Statuses and results](./jss-rest-api-response-codes).
        - **startedDate**: Test execution start time. (ISO 8601 Date/Time format)
        - **EndedDate**: Test execution completion time. (ISO 8601 Date/Time format)
        - **Inputs**: Details about the test's inputs:
          - **name**: Input name. (string)
          - **Value**: Input value, if defined. (string)
        - **errorCode**: Test error code. (numeric) For details, see [Statuses and results](./jss-rest-api-response-codes).
        - **errorMessage**: Test error message. (string) For details, see [Statuses and results](./jss-rest-api-response-codes).
        - **hasReport**: Test report, if generated. (bool)
      - **sandbox**: Details about the sandbox spun up for the job's execution.
        - **id**: Sandbox ID - included in the sandbox URL. (guid)
        - **name**: Sandbox name, composed of job name, dash and job execution number. (string) For example: "job 1 #1"
        - **url**: Sandbox URL. (string)
        - **inputs**: Sandbox inputs, if defined. (string)
      - **errorCode**: Job error code. (numeric) For details, see [Statuses and results](./jss-rest-api-response-codes).
      - **errorMessage**: Job error message. (string) For details, see [Statuses and results](./jss-rest-api-response-codes).
    </td>
  </tr>
</tbody>
</table>
</details>