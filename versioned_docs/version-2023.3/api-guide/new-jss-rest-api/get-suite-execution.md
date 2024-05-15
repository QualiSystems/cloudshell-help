---
sidebar_position: 5
---

# Get suite execution

### Description

Get a suite execution's details.

### URL

`http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteExecution/{id}`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite execution's ID- included in the suite's URL. (string)<br/>For example:<br/><code>ht<span>tp</span>://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/</code> |

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
{
  "id": "1ab91be7-6136-4fd5-b22d-72c462947459",
  "counter": 1,
  "suiteTemplateDescription": "",
  "createdDate": "2020-10-28T10:30:22.035Z",
  "executedByName": "admin",
  "executedByUsername": "admin",
  "suiteTemplateName": "Hardware Network Test",
  "suiteTemplateId": "b25d72e0-4f44-4b62-949c-02596196b157",
  "startedDate": "2020-10-28T10:30:31.14Z",
  "endedDate": "2020-10-28T10:31:01.43Z",
  "status": 2,
  "statusDescription": "Succeeded",
  "jobs": [
    {
      "id": "205aac56-5826-4b5e-a96a-5887b0940b40",
      "name": "job 1",
      "description": null,
      "startedDate": "2020-10-28T10:30:31.14Z",
      "endedDate": "2020-10-28T10:31:01.43Z",
      "status": 2,
      "statusDescription": "Succeeded",
      "testExecutionServerName": "My TES2",
      "blueprint": {
        "id": "0efe151f-a581-4e6d-b9e2-7473bbcf297e",
        "name": "CloudShell Sandbox Template",
        "url": "http://192.168.30.6/RM/Diagram/Index/0efe151f-a581-4e6d-b9e2-7473bbcf297e?diagramType=Topology"
      },
      "tests": [
        {
          "id": "672df5e3-e103-46ad-b324-88ca9b520c97",
          "testId": "17936298/demo_tests1/new_test (1).robot",
          "name": "new_test (1).robot",
          "path": "demo_tests1",
          "repositoryName": "ROBOT Tests",
          "result": 1,
          "resultDescription": "Passed",
          "startedDate": "2020-10-28T10:30:31.14Z",
          "endedDate": "2020-10-28T10:31:01.43Z",
          "inputs": [
            {
              "name": "additional_parameters",
              "value": ""
            }
          ],
          "errorCode": 0,
          "errorMessage": "",
          "hasReport": true
        }
      ],
      "sandbox": {
        "id": "46dccae6-88ff-47cf-9d67-f1f058a125a0",
        "name": "job 1 #1",
        "url": "http://192.168.30.6/RM/Diagram/Index/46dccae6-88ff-47cf-9d67-f1f058a125a0",
        "inputs": null
      },
      "errorCode": null,
      "errorMessage": null
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
            http://192.168.30.6/RM/Diagram/Index/<b>0efe151f-a581-4e6d-b9e2-7473bbcf297e</b>?diagramType=Topology
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
        - **name**: Sandbox name, comosed of job name, dash and job execution number. (string) For example: "job 1 #1"
        - **url**: Sandbox URL. (string)
        - **inputs**: Sandbox inputs, if defined. (string)
      - **errorCode**: Job error code. (numeric) For details, see [Statuses and results](./jss-rest-api-response-codes).
      - **errorMessage**: Job error message. (string) For details, see [Statuses and results](./jss-rest-api-response-codes).
    </td>
  </tr>
</tbody>
</table>
</details>