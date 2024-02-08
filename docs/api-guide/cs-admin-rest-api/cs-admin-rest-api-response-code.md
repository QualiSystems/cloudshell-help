---
sidebar_position: 1
---

# CloudShell Administration REST API Response Codes

| Code | Description | Result |
| --- | --- | --- |
| 200 OK | Success | API call was successfully executed. |
| 201 Created | Success | API call was successfully executed |
| 202 | Accepted | Accept partial success only, as part of the request was completed. For example, if you requested to delete / add batch of groups to domain. |
| 400 | Bad Request | Missing or Invalid Value in request |
| 403 | Forbidden | Invalid permissions or username |
| 404 | Not Found | Matching Entity was not found by request values |
| 409 | Conflict | Already exists |