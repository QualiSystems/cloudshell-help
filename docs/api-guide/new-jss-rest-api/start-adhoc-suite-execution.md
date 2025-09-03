---
sidebar_position: 14
---

# Start adhoc suite execution

### Description

Runs an adhoc suite execution. Adhoc suites are created on-the-fly for the execution and cannot be edited, deleted nor rerun.

### URL

`http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteExecution/start`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |

### HTTP method

`POST`

### Request

<details>
<summary>Headers</summary>


Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary>Request body</summary>

Suite details. The parameters of the adhoc suite execution method include:
<table>
<thead><tr><th>Parameter</th><th>Description/Comments</th></tr></thead>
<tbody>
  <tr>
    <td>name</td>
    <td>Name of the suite execution. (string)</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Optional description for the suite execution. (string)</td>
  </tr>
  <tr>
    <td>testTypeName</td>
    <td>Type of tests to run. (string)<br/>Currently, the value to use is "Robot".</td>
  </tr>
  <tr>
    <td>jobs</td>
    <td>
    Job details:<br/>
      - **name**: Job name. (string)
      - **description**: Job description, if defined. (string)
      - **durationBufferInMinutes**: Job's execution buffer, in minutes. (Numeric)
      - **blueprint**: Details of the job's blueprint.
        - **name**: Blueprint name. (string)
        - **inputs**: Published global inputs defined in the job's blueprint.
          - **name**: global input's name. (string)
          - **value**: global input's value. (string)
        - **abstractRequirements**: Published requirements in the blueprint's abstract resources.
          - **type**: Type of abstract requirement. (string)
              There are two options:
                - "**Quantity**" when specifying the number of abstract resources to select.
                - "**Attribute**" for any other attribute requirement.
          - **resource**: Name of the abstract resource. (string)
          - **name**: Name of the abstract requirement. Specify "Quantity" to indicate the number of abstract resources to select.
          - **value**: Requirement's value. (string, numeric for Quantity)
        - **additionalInputs**: Published additional inputs in the blueprint's abstract resources.
          - **resource**: Name of the abstract resource. (string)
          - **name**: Name of the additional info. (string)
          - **value**: Additional info's value. (string)
        - **serviceInputs**: Published inputs belonging to services in the blueprint.
          - **resource**: Name of the service. (string)
          - **name**: Name of the service input. (string)
          - **value**: Service input's value. (string)
      - **tests**: Details of the job's tests.
        - **name**: Name of the test. (string)
        - **path**: Path to the test's containing folder. (string)
        - **durationInMinutes**: Test's duration in minutes. (Numeric)
        - **inputs**: Test's inputs.
          - **name**: Input name. (string)
          - **Value**: Input value. (string)
        - **repositoryName**: Name of online repository containing the test. (string)        
    </td>
  </tr>
</tbody>
</table>
</details>

<details>
<summary>Request example</summary>
```javascript
{
	"name": "my ad-hoc robot execution",
	"description": "string",
	"testTypeName": "Robot",
	"jobs": [
	{
        "name": "job 1",
        "description": "string",
        "durationBufferInMinutes": 3,
        "blueprint": {
            "name": "my blueprint",
            "inputs": [
            {
            "name": "Sandbox number",
            "value": "4"
            }],
            "abstractRequirements": [
            {
            "type": "Quantity",
            "resource": "DUT resource",
            "name": "Quantity",
            "value": "1"
            }],
            "additionalInputs": [{
            "resource": "DUT resource",
            "name": "Firmware version",
            "value": "1.00.2"
            }],
            "serviceInputs": [{
            "resource": "Controller service",
            "name": "Service.Address",
            "value": "192.168.45.112"
            }]
        },
        "tests": [
        {
            "name": "run-traffic.robot",
            "path": "Traffic tests",
            "durationInMinutes": 1,
            "inputs": [
                {
                    "name": "Additional CMD Parameters",
                    "value": ""
                }
            ],
            "repositoryName": "GitHub"
        }
        ]
    }
]
}
```
</details>

### Response

<details>
<summary>Response example</summary>
```javascript
{
  "id": "a7f13fe5-ddee-4ec8-971f-a0e6784c8387"
}
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
</tbody>
</table>
</details>