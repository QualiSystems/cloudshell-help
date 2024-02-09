---
sidebar_position: 8
---

# Get domain's blueprints

### Description

Gets a list of all blueprints in a given domain.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/domains/{id}/blueprints
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Domain's ID. Can be retrieved via [Get all domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-domains.htm).|
</details>

<details>
<summary >Query parameters</summary>

| Parameter | Description/Comments |
| --- | --- |
| paginationProperties.limit | (integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. <br/>
  Default value : 50 |
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
    "Blueprints": [
        {
            "Alias": "Azure test",
            "CreatorName": "hezsys",
            "EnableSandboxSave": true,
            "topologyType": "Regular",
            "topologyState": "Pending",
            "BaseTopology": null,
            "ParentId": "942e2ff1-23b6-4d22-852a-3068380b80f4",
            "Name": "Azure test",
            "Description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",
            "Type": "Topology",
            "ModificationDate": "2022-02-14T14:48:08",
            "CreateDate": "2022-02-14T10:43:52",
            "Version": 6,
            "Id": "d3e496b5-1426-4607-a72e-3a696549f35c"
        },
        {
            "Alias": "New York",
            "CreatorName": "hez",
            "EnableSandboxSave": true,
            "topologyType": "Regular",
            "topologyState": "Pending",
            "BaseTopology": null,
            "ParentId": "942e2ff1-23b6-4d22-852a-3068380b80f4",
            "Name": "New York",
            "Description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",
            "Type": "Topology",
            "ModificationDate": "2023-07-17T04:34:04",
            "CreateDate": "2022-02-13T13:08:25",
            "Version": 25,
            "Id": "6fc4e095-606c-4fcc-9bf3-725dd01b5aa8"
        },
        {
            "Alias": "AWS test",
            "CreatorName": "hezsys",
            "EnableSandboxSave": true,
            "topologyType": "Regular",
            "topologyState": "Pending",
            "BaseTopology": null,
            "ParentId": "942e2ff1-23b6-4d22-852a-3068380b80f4",
            "Name": "AWS test",
            "Description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",
            "Type": "Topology",
            "ModificationDate": "2022-02-14T10:43:33",
            "CreateDate": "2022-02-14T10:38:41",
            "Version": 5,
            "Id": "54b0f107-14e5-46e8-8ce6-92bb50d55e06"
        },
        {
            "Alias": "vCenter Resource BP",
            "CreatorName": "hez",
            "EnableSandboxSave": true,
            "topologyType": "Regular",
            "topologyState": "Pending",
            "BaseTopology": null,
            "ParentId": "942e2ff1-23b6-4d22-852a-3068380b80f4",
            "Name": "vCenter Resource BP",
            "Description": "Blueprint with preconfigured setup & teardown processes.Deploys Apps and resolves connections on Setup, and deletes App VMs on Teardown",
            "Type": "Topology",
            "ModificationDate": "2022-02-13T13:20:14",
            "CreateDate": "2022-02-13T13:16:30",
            "Version": 6,
            "Id": "ecc31ee9-0a49-4bd4-b36a-c9e6c09698f4"
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