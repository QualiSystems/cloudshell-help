---
sidebar_position: 1
---

# New Job Scheduling REST API Response Codes

Each API call you make returns a server response. For example:

![](/Images/JSS/JssRestApiServerResponse_520x271.png)

Possible response codes are:

| Code | Description | Result |
| --- | --- | --- |
| 200 | Success | API call was successfully executed. |
| 400 | Error: Bad request | API call is not applicable. For example, attempting to stop an already completed suite execution. |
| 401 | Error: Unauthorized | Authorization issue. `accessToken` may have expired. |