---
sidebar_position: 13
---

# Start suite execution

### Description

Runs a suite template (starts execution).

### URL

`http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteTemplate/{id}/start`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite execution's ID- included in the suite's URL. (string)<br/>For example:<br/><code>ht<span>tp</span>://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/</code> |

### HTTP method

`POST`

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