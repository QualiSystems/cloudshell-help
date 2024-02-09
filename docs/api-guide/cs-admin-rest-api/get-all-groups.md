---
sidebar_position: 14
---

# Get all groups

### Description

Gets a list of all groups in CloudShell.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/groups
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`
</details>

<details>
<summary>Query parameters</summary>

| Parameter | Description/Comments |
| --- | --- |
| paginationProperties.limit | (integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. <br/> Default value : 50 |
| paginationProperties.sort-by | (string) Field to use to sort the results. <br/> Default value : Name |
| paginationProperties.sort-order | (integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. <br/> Default value : 1 |
| paginationProperties.cursor | (string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional. |
| paginationProperties.filter | (string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional. |

</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Groups": [
        {
            "ParentIds": null,
            "Sid": "fa414b79-174f-4906-9c95-976caf363864",
            "Name": "System Administrators",
            "Description": "Built in group, all members have administrative rights.",
            "ViewOnly": false,
            "groupType": "System",
            "groupRole": "SystemAdmin",
            "Id": -1
        },
        {
            "ParentIds": null,
            "Sid": "88fc9928-a1f3-45c3-99cd-45a46d256592",
            "Name": "Everyone",
            "Description": null,
            "ViewOnly": false,
            "groupType": "System",
            "groupRole": "Regular",
            "Id": 1
        },
        {
            "ParentIds": null,
            "Sid": "1c7a0c13-600e-43ae-ab2d-6f594e245912",
            "Name": "domain admin",
            "Description": null,
            "ViewOnly": false,
            "groupType": "UserDefined",
            "groupRole": "DomainAdmin",
            "Id": 2
        },
        {
            "ParentIds": null,
            "Sid": "a2bf342a-5883-4e1a-87a5-5bb6e13b421b",
            "Name": "regular users",
            "Description": null,
            "ViewOnly": false,
            "groupType": "UserDefined",
            "groupRole": "Regular",
            "Id": 3
        }
    ],
    "Cursor": null
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>