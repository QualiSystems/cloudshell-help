---
sidebar_position: 11
---

# Get domain's groups

### Description

Gets a list of all groups in a given domain.

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](./get-all-domains.md).|

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

</details>

<details>
<summary >Query parameters</summary>

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
            "Sid": "00000000-0000-0000-0000-000000000000",
            "Name": "System Administrators",
            "Description": "Built in group, all members have administrative rights.",
            "ViewOnly": false,
            "groupType": "System",
            "groupRole": "SystemAdmin",
            "Id": -1
        },
        {
            "ParentIds": null,
            "Sid": "00000000-0000-0000-0000-000000000000",
            "Name": "domain admin",
            "Description": null,
            "ViewOnly": false,
            "groupType": "UserDefined",
            "groupRole": "DomainAdmin",
            "Id": 2
        },
        {
            "ParentIds": null,
            "Sid": "00000000-0000-0000-0000-000000000000",
            "Name": "view-only",
            "Description": null,
            "ViewOnly": true,
            "groupType": "UserDefined",
            "groupRole": "DomainAdmin",
            "Id": 5
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