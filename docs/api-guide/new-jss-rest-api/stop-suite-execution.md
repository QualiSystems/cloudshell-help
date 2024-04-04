---
sidebar_position: 6
---

# Stop suite execution

### Description

Stop an active suite execution.

### URL

`http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteExecution/{id}/stop`

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
| id | Suite execution's ID - included in the suite's URL. (string)<br/>For example:<br/>http://192.168.74.11/Test%20Lab/execution/<b>1ab91be7-6136-4fd5-b22d-72c462947459</b>/ |
</details>

### Response

```javascript
200 OK
```