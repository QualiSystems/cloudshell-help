---
sidebar_position: 36
---

# Get all license pools

### Description

Gets a list of all license pools in CloudShell.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/licensepools
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
    "LicensePools": [
        {
            "Name": "SF license pool",
            "Description": "License pool for San Francisco domain",
            "MaxConcurrentReservation": 15,
            "Domains": [
                "8cd12c8d-6d40-4dfd-89da-a8d8dde00575"
            ],
            "CreateDate": "2023-07-18T06:59:07",
            "Id": "a4ba81df-ead7-487b-b684-b04300a48e69"
        },
        {
            "Name": "NY license pool",
            "Description": "License pool for New York domain",
            "MaxConcurrentReservation": 10,
            "Domains": [
                "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33"
            ],
            "CreateDate": "2023-07-18T06:55:55",
            "Id": "a48d85a0-6332-445b-bf03-b04300a3ac9d"
        }
    ],
    "Cursor": "TXkgbGljZW5zZSBwb29s"
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>
