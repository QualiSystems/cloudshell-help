---
sidebar_position: 33
---

# Get all external groups

### Description

Get all external groups from your active directory/LDAP.

### URL

`http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/groups`

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
            "Name": "Administrators",
            "DistinguishedName": "CN=Administrators,CN=Builtin,DC=qualisystems,DC=local"
        },
        {
            "Name": "ADSyncAdmins",
            "DistinguishedName": "CN=ADSyncAdmins,CN=Users,DC=qualisystems,DC=local"
        },
        {
            "Name": "Azure_DevOps_Cloud_Admins",
            "DistinguishedName": "CN=Azure_DevOps_Cloud_Admins,OU=00.00.Quali.Azure.Security.Groups,OU=00.00.Microsoft-Azure,OU=00.00.Cloud.Services,OU=00.QUALI.WW.DATA.CENTERS,DC=qualisystems,DC=local"
        }
    ],
    "Cursor": "QXp1cmVfRGV2T3BzX0Nsb3VkX0FkbWlucw=="
}
```
</details>

<details>
<summary>Response code</summary>

```javascript
200 OK
```
</details>