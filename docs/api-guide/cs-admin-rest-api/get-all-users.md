---
sidebar_position: 20
---

# Get all users

### Description

Gets a list of all users in CloudShell.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/users
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
    "Users": [
        {
            "Id": 1,
            "Sid": "71afdb5c-d479-43a4-993d-0e01d77d02ac",
            "Username": "admin",
            "Email": null,
            "IsActive": true,
            "IsAdmin": true,
            "GroupIds": [
                -1,
                1
            ],
            "TimeZoneInfoId": "Israel Standard Time",
            "MaxReservationDuration": null,
            "MaxConcurrentReservations": null,
            "MaxScheduledSandboxes": null,
            "MaxOwnedBlueprints": null,
            "MaxSavedSandboxes": null,
            "DomainRoles": [
                {
                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
                    "role": "SystemAdmin"
                },
                {
                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",
                    "role": "SystemAdmin"
                },
                {
                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",
                    "role": "SystemAdmin"
                },
                {
                    "DomainId": "134b19d4-6c56-491d-b765-b61191c37f78",
                    "role": "SystemAdmin"
                },
                {
                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",
                    "role": "SystemAdmin"
                },
                {
                    "DomainId": "985c3306-fad7-4e85-a4e3-c44876149657",
                    "role": "SystemAdmin"
                }
            ],
            "DomainName": null,
            "ImportedSid": null
        },
        {
            "Id": 4,
            "Sid": "93f41a86-946b-4e96-b8f1-1af642e000f0",
            "Username": "john",
            "Email": "",
            "IsActive": true,
            "IsAdmin": false,
            "GroupIds": [
                1,
                3
            ],
            "TimeZoneInfoId": "Israel Standard Time",
            "MaxReservationDuration": null,
            "MaxConcurrentReservations": 100,
            "MaxScheduledSandboxes": 10000,
            "MaxOwnedBlueprints": null,
            "MaxSavedSandboxes": 20,
            "DomainRoles": [
                {
                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",
                    "role": "Regular"
                },
                {
                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",
                    "role": "Regular"
                },
                {
                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",
                    "role": "Regular"
                },
                {
                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",
                    "role": "Regular"
                }
            ],
            "DomainName": null,
            "ImportedSid": null
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