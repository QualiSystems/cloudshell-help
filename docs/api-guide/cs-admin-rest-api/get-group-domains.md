---
sidebar_position: 22
---

# Get group's domains

### Description

Gets a list of all domains associated to a given group.

### URL

`http://{Admin API IP}:{port#}/api/v1/groups/{id}/domains`

| Parameter | Description/Comments |
| --- | --- |
| ID | (string) Group's ID. Can be retrieved via [Get all groups](./get-all-groups.md).|

### HTTP method

`GET`

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
    "Domains": [
        {
            "ViewOnly": false,
            "Id": "5c966733-c496-486d-8b1a-963c13e9a103",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "some description about this domain",
            "Name": "new domain 02"
        },
        {
            "ViewOnly": false,
            "Id": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "",
            "Name": "New York"
        },
        {
            "ViewOnly": false,
            "Id": "134b19d4-6c56-491d-b765-b61191c37f78",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "",
            "Name": "San Francisco"
        },
        {
            "ViewOnly": false,
            "Id": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
            "Archived": false,
            "EndTime": null,
            "LicensePoolId": null,
            "Description": "A domain that includes all available resources",
            "Name": "Global"
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