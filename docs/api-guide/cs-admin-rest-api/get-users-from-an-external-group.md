---
sidebar_position: 25
---

# Get users from an external group

### Description

Get users from a group in your active directory/LDAP.

### HTTP method

GET

### Request

<details>
<summary>URL</summary>

```javascript
http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/groups/{groupName}/users
```
</details>

<details>
<summary>Headers</summary>

Example header format:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

| Parameter | Description/Comments |
| --- | --- |
| groupName | Name of the group (e.g. “Azure\_DevOps\_Cloud\_Admins”). Can be retrieved via [Get all external groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-external-groups.htm). |
</details>

<details>
<summary>Query parameters</summary>

| Parameter | Description/Comments |
| --- | --- |
| paginationProperties.limit | (integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. <br/> Default value : 50 |
| paginationProperties.sort-by | (string) Field to use to sort the results. Default value : Name |
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
            "Id": "S-1-5-21-1487810946-2753822684-3978873285-7489",
            "Username": "user1.s",
            "DisplayName": "user1",
            "DistinguishedName": "CN=user1 Vlasenko,OU=00.05.Quali-IL-Ops.And.IT,OU=00.00.Quali-IL-Departments,OU=00.00.Petah-Tikva,OU=00.00.Quali-IL,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",
            "Email": "user1@quali.com",
            "DomainName": "QUALISYSTEMS"
        },
        {
            "Id": "S-1-5-21-1487810946-2753822684-3978873285-11090",
            "Username": "user2.j",
            "DisplayName": "user2",
            "DistinguishedName": "CN=user2 Castro,OU=00.08.Quali-US.Texas-Ops.And.IT,OU=00.00.Quali-US.Texas-Departments,OU=00.00.Quali-US.Texas,OU=00.01.Quali-US,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",
            "Email": "user2@quali.com",
            "DomainName": "QUALISYSTEMS"
        },
        {
            "Id": "S-1-5-21-1487810946-2753822684-3978873285-22202",
            "Username": "user3.h",
            "DisplayName": "user 3",
            "DistinguishedName": "CN=user3 Poldian,OU=00.05.Quali-IL-Ops.And.IT,OU=00.00.Quali-IL-Departments,OU=00.00.Petah-Tikva,OU=00.00.Quali-IL,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",
            "Email": "user3.p@quali.com",
            "DomainName": "QUALISYSTEMS"
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