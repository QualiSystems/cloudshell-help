---
sidebar_position: 14
---

# Sandbox Output

### Description

Gets the content of CloudShell Portal's Output console for a particular ACTIVE sandbox. This displays execution information related to running blueprint and resource commands.

The maximum number of entries in the response is configured by the administrator. If this number of entries is exceeded, the response will include multiple pages. For more information, see [Setting the response page size for the Sandbox API live documentation pages](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Cnfg-Ky.htm#Controll).

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/output`

| Parameter | Description/Comments |
| --- | --- |
| `sandbox_identifier` | The id of the sandbox (`string`). Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |

You may add the following optional parameters to the end of the method's URL to filter the number of events. For example - displaying the last 100 events:
| Query parameters |  Description/Comments |
| --- | --- |
| `tail` | Last number of entries to return. `(integer)` |
| `from_entry_id` | ID of the first entry in the response page to display, which is returned in the `next_entry_id` property of the response `(string)` |
| `since` | Time from which to return all entries. Time must be specified in ISO 8601 format (for example PT23H).`(string)` |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox output` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

By default, the method returns all the output messages that were displayed during the sandbox's lifecycle.

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox output` method returns the entries from the Output console of a particular sandbox. The response includes :

```javascript
{
   "number_of_returned_entries":"2",
   "next_entry_id":"99434",
   "more_pages":"false",
   "entries":[
      {
         "id":"82159835-2d95-46a9-95ec-9251963d203d",
         "time":"2017-01-15T09:51:17Z",
         "text":"Beginning sandbox setup"
      },
      {
         "id":"79549eaf-7f1a-4180-a88b-e7da27e5075b",
         "time":"2017-01-15T09:51:20Z",
         "text":"Resource: \"\" is now: Online"
      }
   ],
   "_links":{
      "self":{
         "href":"/sandboxes/994bd534-740a-45f5-851f-ff452f2a17a2/output",
         "method":"GET"
      }
   }
}
```
</details>

<details>
<summary>Response summary</summary>

The response properties of the `sandbox output` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `number_of_returned_entries` |   | The number of entries in the Output console that match the filter criteria in the request. `(integer)` |
| `next_entry_id` |   | (Relevant if the response includes multiple pages) The ID of the first entry on the next page of the response `(integer)` <br/> Note: To get the next page, run the method again with this value in the `from_entry_id` input parameter. |
| `more_pages` |   | (Relevant if the response includes multiple pages) `true` indicates that there are additional entries that are not displayed in this response page `(bool)` |
| `entries` |   | The details of the output console entry `(array)` |
|   | `id` | The ID of the entry `(string)` |
|   | `time` | The time in which the Output entry was logged `(string)` |
|   | `text` | The text displayed in the Output console for this entry `(string)` |
| `_links` |   | The actions that can be performed on the Output console entries of a sandbox in the user's domain: |
|   | `self` | Provides a link to get the Output console entries for the sandbox via a `GET` request. |

</details>