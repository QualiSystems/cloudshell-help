---
sidebar_position: 9
---

# Get suite template details

### Description

Gets a detailed summary of a suite template in a domain.

### URL

`http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteTemplate/{id}`

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

<details>
<summary>Response example</summary>
```javascript
{
  "id": "b25d72e0-4f44-4b62-949c-02596196b157",
  "createdDate": "2020-10-28T10:30:19.122Z",
  "ownerUsername": "admin",
  "ownerName": "admin",
  "modifiedDate": "2020-10-28T11:10:07.78Z",
  "modifiedByUsername": "admin",
  "modifiedByName": "admin",
  "testTypeName": "Robot",
  "testTypeId": "59aabbe8-dc0b-48c4-81af-d76f915b47b1",
  "spaceId": "35f2d31b-7ce2-45b1-b7aa-7e5002a9031c",
  "spaceName": "Test Lab",
  "name": "Hardware Network Test",
  "description": "",
  "cronTrigger": null,
  "shouldStartAutomatically": false,
  "jobs": [
    {
      "name": "job 1",
      "description": "",
      "durationBufferInMinutes": 0,
      "blueprint": {
        "id": "0efe151f-a581-4e6d-b9e2-7473bbcf297e",
        "name": "CloudShell Sandbox Template",
        "inputs": []
      },
      "tests": [
        {
          "id": "17936298/demo_tests1/new_test (1).robot",
          "name": "new_test (1).robot",
          "path": "demo_tests1",
          "durationInMinutes": 1,
          "inputs": [
            {
              "name": "additional_parameters",
              "value": ""
            }
          ],
          "repositoryName": "ROBOT Tests"
        },
        {
          "id": "17936298/140_tests_tsivya2/b (101).robot",
          "name": "b (101).robot",
          "path": "140_tests_tsivya2",
          "durationInMinutes": 1,
          "inputs": [
            {
              "name": "additional_parameters",
              "value": "fghfgh"
            }
          ],
          "repositoryName": "ROBOT Tests"
        },
        {
          "id": "17936298/140_tests_tsivya2/b (102).robot",
          "name": "b (102).robot",
          "path": "140_tests_tsivya2",
          "durationInMinutes": 3,
          "inputs": [
            {
              "name": "additional_parameters",
              "value": "dfgsd"
            }
          ],
          "repositoryName": "ROBOT Tests"
        },
        {
          "id": "17936298/140_tests_tsivya2/b (103).robot",
          "name": "b (103).robot",
          "path": "140_tests_tsivya2",
          "durationInMinutes": 4,
          "inputs": [
            {
              "name": "additional_parameters",
              "value": "dfg"
            }
          ],
          "repositoryName": "ROBOT Tests"
        }
      ]
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
    <td>createdDate</td>
    <td>Suite template creation time. (ISO 8601 Date/Time format)</td>
  </tr>
  <tr>
    <td>ownerUserName</td>
    <td>CloudShell username who owns the suite template. (string)</td>
  </tr>
  <tr>
    <td>ownerName</td>
    <td>First and Last name of the CloudShell user who owns the suite template. (string)</td>
  </tr>
  <tr>
    <td>modifiedDate</td>
    <td>Last modification time of suite template. (string)</td>
  </tr>
  <tr>
    <td>modifiedByUserName</td>
    <td>CloudShell user who last modified the template. (string)</td>
  </tr>
  <tr>
    <td>testTypeName</td>
    <td>Testing framewor of suite's tests. (string)</td>
  </tr>
  <tr>
    <td>testTypeId</td>
    <td>ID of the test type. (guid)</td>
  </tr>
  <tr>
    <td>spaceId</td>
    <td>ID of domain in which the suite template resides. (guid)</td>
  </tr>
  <tr>
    <td>spaceName</td>
    <td>Domain in which the suite template resides. (string)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Suite template name. (string)</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Suite template description. (string)</td>
  </tr>
  <tr>
    <td>cronTrigger</td>
    <td>Configured recurring executions of this suite, in cron. (cron expression)</td>
  </tr>
  <tr>
    <td>shouldStartAutomatically</td>
    <td>Specifies if suite execution is set to start automatically (true). (bool)</td>
  </tr>
  <tr>
    <td>jobs</td>
    <td>
    Job details:<br/>
      - **name**: Job name. (string)
      - **description**: Job description, if defined. (string)
      - **durationBufferInMinutes**: Buffer period, in minutes. (numeric)
      - **blueprint**: Details of the job's blueprint.
        - **id**: Blueprint ID - included in the blueprint's URL. (guid)
            <br/>
            For example:
            <br/>
            http://192.168.30.6/RM/Diagram/Index/<b>0efe151f-a581-4e6d-b9e2-7473bbcf297e</b>?diagramType=Topology
        - **name**: Blueprint name. (string)
        - **inputs**: Inputs defined on the job's blueprint. (string) (string)
      - **tests**: Details of the job's tests.
        - **id**: Test ID. (guid)
        - **name**: Test name. (string)
        - **path**: Test path from the root. (string)
        - **durationInMinutes**: Test's duration, in minutes. (numeric)
        - **inputs**: Details about the test's inputs:
          - **name**: Input name. (string)
          - **Value**: Input value, if defined. (string)
        - **repositoryName**: Name of online repository containing the test. (string)
    </td>
  </tr>
</tbody>
</table>
</details>