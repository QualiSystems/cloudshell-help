---
sidebar_position: 14
---

# Get domain's resources

### Description

Gets a list of all resources (and sub-resources) in a domain.

### URL

`http://{Admin API IP}:{port#}/api/v1/domains/{id}/resources`

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
    "Resources": [        
        {
            "FullPath": "Bridge1",
            "FullName": "Bridge1",
            "IsExcluded": false,
            "reservedStatus": "Available",
            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",
            "Name": "CDS_OPS_Bridgit10",
            "Description": "",
            "Type": "LabResource",
            "ModificationDate": "2021-01-31T12:10:52",
            "CreateDate": "2021-01-31T12:10:52",
            "Version": 4,
            "Id": "3063656e-52ba-4760-962a-0609006f54f8"
        },
        {
            "FullPath": "Bridge1/Jack1",
            "FullName": "Bridge1/Jack1",
            "IsExcluded": false,
            "reservedStatus": "Available",
            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",
            "Name": "PPJackVLb14",
            "Description": "",
            "Type": "LabResource",
            "ModificationDate": "2021-01-31T12:10:21",
            "CreateDate": "2021-01-31T12:10:21",
            "Version": 33,
            "Id": "4bcb852a-f4bf-4ab2-97db-02b1fec07733"
        },
        {
            "FullPath": "Bridge1/Jack2",
            "FullName": "Bridge1/Jack2",
            "IsExcluded": false,
            "reservedStatus": "Available",
            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",
            "Name": "PPJackVLb14",
            "Description": "",
            "Type": "LabResource",
            "ModificationDate": "2021-01-31T12:10:21",
            "CreateDate": "2021-01-31T12:10:21",
            "Version": 33,
            "Id": "f3c8ed5e-d76f-4b5f-9548-7d37a2f387a4"
        },
        {
            "FullPath": "Bridge1/Jack3",
            "FullName": "Bridge1/Jack3",
            "IsExcluded": false,
            "reservedStatus": "Available",
            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",
            "Name": "PPJackVLb14",
            "Description": "",
            "Type": "LabResource",
            "ModificationDate": "2021-01-31T12:10:21",
            "CreateDate": "2021-01-31T12:10:21",
            "Version": 33,
            "Id": "ccf544fa-070a-4157-8a37-07b1ba12aaf8"
        },
    ],
    "Cursor": "100"
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>