---
sidebar_position: 3
---

# Get all domains

### Description

Gets a list of all domains in CloudShell

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/domains
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
| paginationProperties.limit | (integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. <br/> Default value : 50|
| paginationProperties.sort-by | (string) Field to use to sort the results. <br/> |
| paginationProperties.sort-order | (integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. <br/> Default value : 1 |
| paginationProperties.cursor | (string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional. |
| paginationProperties.filter | (string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional. |
</details>

### Response

<details>
<summary>Response example</summary>

```javascript
{
    "Domains": [
        {
            "Id": "5c966733-c496-486d-8b1a-963c13e9a103",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "New York team's domain",
            "Name": "New York"
        },
        {
            "Id": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "San Francisco team's domain",
            "Name": "San Fran"
        },
        {
            "Id": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "Global domain",
            "Name": "Global"
        }
    ],
    "Cursor": null
}
```
</details>

<details>
<summary>Response example</summary>
    200
</details>
