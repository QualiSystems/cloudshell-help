---
sidebar_position: 12
---

# Change suite owner

### Description

Changes a suite template's owner.

### URL

`http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteTemplate/{id}/changeowner`

| Parameter | Description/Comments |
| --- | --- |
| space_name | CloudShell domain in which the suite was executed. (string) |
| id | Suite template's id - included in suite's URL. For example:<br/><code>ht<span>tp</span>://192.168.74.11/Test%20Lab/suite/<b>b25d72e0-4f44-4b62-949c-02596196b157</b>/</code> |

### HTTP method

`PUT`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Content-Type: application/json`
</details>

<details>
<summary>Request body</summary>

| Parameter | Description/Comments |
| --- | --- |
| ownerUsername | CloudShell username to set as the new owner. (string) |
</details>

<details>
<summary>Request example</summary>
```javascript
{
  "ownerUsername": "user1"
}
```
</details>

