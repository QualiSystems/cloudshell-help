---
sidebar_position: 13
---


# Sandbox Activity

### Description

Gets the content of CloudShell Portal's Activity Feed for a particular sandbox. This displays information about actions performed in the sandbox by the user and automation process.

The maximum number of entries in the response is configured by the administrator. If this number of entries is exceeded, the response will include multiple pages. For more information, see [Setting the response page size for the Sandbox API live documentation pages](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#setting-the-response-page-size-for-the-sandbox-api-live-documentation-pages).

### URL

`http://{CloudShell Sandbox API Gateway IP address}:{port#}/api/v2/sandboxes/{sandbox_identifier}/activity?tail=100&from_event_id`

| URL Parameters | Description/Comments |
| --- | --- |
| `sandbox_identifier` | Can be retrieved via [sandboxes](./sandboxes.md), [blueprint start](./blueprint-start.md) and from the sandbox ID segment in the CloudShell Portal URL. |

You may add the following optional parameters to the end of the method's URL to filter the number of events. For example - displaying the last 100 errors:

| Query Parameters | Description/Comments |
| --- | --- |
| `error_only` | Returns only "error" type events. `(bool)` |
| `since` | Time from which to return all events. Time must be specified in ISO 8601 format (for example PT23H).`(string)` |
| `tail` | Last number of events to return. `(integer)` |
| `from_event_id` | ID of the first event in the response page to display, which is returned in the `next_event_id` property of the response. `(string)` |

### HTTP method

`GET`

### Request

<details>
<summary>Headers</summary>

Example header format for the `sandbox activity` method:

`Authorization: Basic <authorization token returned from the login method>`

`Content-Type: application/json`

By default, the method's response includes all the events that occurred during the sandbox's lifecycle.

</details>

### Response

<details>
<summary>Response example</summary>

The `sandbox activity` method returns the events from the Activity Feed of a particular sandbox. The response includes :

```javascript
{
   "num_returned_events":"20",
   "more_pages":"false",
   "next_event_id":"99434",
   "events":[
      {
         "id":"82159835-2d95-46a9-95ec-9251963d203d",
         "event_type":"success",
         "event_text":"Sandbox 'MyBlueprint' has started",
         "output":"Null",
         "time":"2017-01-15T09:51:17Z"
	  "execution_server": null
      },
      {
         "id":"79549eaf-7f1a-4180-a88b-e7da27e5075b",
         "event_type":"success",
         "event_text":"'Deploy' resource command on 'vCenter VM From...' started",
         "output":"Null",
         "time":"2017-01-15T09:51:17Z"
	  "execution_server": "WIN-ES-NY"
      }
   ]
}
```
</details>

<details>
<summary>Response summary</summary>

The response output properties of the `sandbox activity` method are described in the following table.

| Property | Sub Property | Description/Comments |
| --- | --- | --- |
| `number_of_returned_events` |   | The number of events in the Activity Feed that match the filter criteria in the request. `(integer)` |
| `more_pages` |   | (Relevant if the response includes multiple pages) `true` indicates that there are additional events that are not displayed in this response page `(bool)` |
| `next_event_id` |   | (Relevant if the response includes multiple pages) The ID of the first event on the next page of the response. `(integer)` <br/> Note: To get the next page, run the method again with this value in the `from_event_id` input parameter. |
| `events` |   | The details of the Activity Feed events `(array)` |
|   | `id` | The ID of the event `(string)` |
|   | `event_type` | The type of event ("success"/"error") `(string)` |
|   | `event_text` | The text displayed in the Activity Feed for the event `(string)` |
|   | `output` | (Events related to command execution) Text displayed as output of the command `(string)` |
|   | `time` | The time in which the Activity Feed event was logged `(string)` |
|   | `execution_server` | Name of the execution server that executed the command. `(string)` |

</details>