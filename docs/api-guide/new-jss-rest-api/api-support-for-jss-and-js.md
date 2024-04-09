---
sidebar_position: 20
---

# API Support for New Job Scheduling and Job Scheduling (1st Gen)

The section compares the APIs for the different Job Scheduling features. The New Job Scheduling has a dedicated RESTful API while the original Job Scheduling uses the [Quali API](https://help.quali.com/Online%20Help/0.0/Portal/Quali-API/Quali%20API%20Library.html).

:::note
For brevity, the term "Job Scheduling (1st Gen)" denotes the original Job Scheduling which is accessed via CloudShell Portal.
:::

### API support

|   | New Job Scheduling | 1st Gen Job Scheduling |
| --- | --- | --- |
| **Authentication operations:** | | |
| Login | Available<br/>**Syntax:**<br/>`POST /api/Account/login` | Available via `(/API/Auth/Login)` API |
| Refresh | Available<br/>**Syntax:**<br/>`GET /api/Token/refresh/{refresh_token}` |   |
| Revoke | Available<br/>**Syntax:**<br/>`POST /api/Token/revoke API` |   |
| **Execution Server management operations:** |
| Get execution servers | **Syntax:**<br/>`GET /api/ExecutionServer` API | Available via Get Execution Servers API |
| Get execution server details | Available<br/>**Syntax:**<br/>`GET /api/ExecutionServer` API |   |
| Delete execution server | Available<br/>**Syntax:**<br/>`DELETE /api/ExecutionServer/{id}` |   |
| **Suite management operations:** |
| Get available suite templates |   | Available via Get Available Suite Templates API |
| Get suite template details | Available<br/>**Syntax:**<br/>`GET http://<Job Scheduling Ingress>/api/spaces/<space_name>/SuiteTemplate/<suite template id>` | Available via Get Suite Template Details API<br/>**Syntax:**<br/>`GET http://<Quali Server>:9000/API/Scheduling/SuiteTemplates/suiteTemplateName` |
| Delete suite template | Available<br/>**Syntax:**<br/>`DELETE /api/spaces/{space_name}/SuiteTemplate/{id}` |   |
| Change suite owner | Available<br/>**Syntax:**<br/>`PUT ​/api​/spaces​/{space_name}​/SuiteTemplate​/{id}​/changeowner` |   |
| Get suite details | Available<br/>**Syntax:**<br/>`GET "http://<Job Scheduling Ingress>/api/spaces/<space_name>/SuiteExecution/<suite execution id>` | Available via Get Suite Details API<br/>**Syntax:**<br/>`GET http://<Quali Server>:9000/API/Scheduling/Suites/suiteId` |
| Get suite status | Available<br/>**Syntax:**<br/>`GET /api/spaces/{space_name}/SuiteTemplate/{id}` | Available via Get Suite Status API<br/>**Syntax:**<br/>`GET http://<Quali Server>:9000/API/Scheduling/Suites/Status/suiteId` |
| Get test folder child elements |   | Available for TestShell Studio tests only |
| Get test information |   | Available for TestShell Studio tests only |
| **Suite execution operations:** |
| Get suite executions for specific template | Available<br/>**Syntax:**<br/>`GET ​/api​/spaces​/{space_name}​/SuiteExecution​/{id} GET API` |   |
| Stop suite execution | Available<br/>**Syntax:**`POST /api/spaces/{space_name}/SuiteExecution/{id}/stop` | Available via Stop Suite Execution API<br/>**Syntax:**<br/>`DELETE http://<Quali Server>:9000/API/Scheduling/Suites/SuiteId` |
| Enqueue custom suite | Available via `/api/spaces/{space_name}/SuiteExecution/{id}` GET API<br/>**Syntax:**`POST http://<Job Scheduling Ingress>/api/spaces/{space_name}/SuiteTemplate/{id}/start` |Available via Enqueue Custom Suite API<br/>**Syntax:**<br/>`POST http://<Quali Server>:9000/API/Scheduling/Suites` |
| Enqueue custom job |   | Available via Enqueue Custom Job API |
| Get job details | Available<br/>**Syntax:**<br/>`GET /api/spaces/{space_name}/SuiteExecution/{id}` | Available via Get Job Details API |
| Stop job execution | Not supported for specific job executions. Supported for suite executions via `/api/spaces/{space_name}/SuiteExecution/{id}/stop` API | Available via Stop Job Execution API |
| Get jobs in queue |   | Available via Get Queued Jobs API |
| Get running jobs |   | Available via Get Running Jobs API |
| Deploy dedicated resrvation per job | Available | Available |
| Generate suite execution report | Available<br/>**Syntax:**<br/>`GET/api/spaces/{space_name}/TestExecution/{id}/Report` |   |
| **Reservation operations:**<br/>The following APIs are available for both Job Scheduling features via Quali API. |
| Get reservation attachment |   |   |
| Get reservation attachment details |   |   |
| Delete file from reservation |   |   |
| **Configuration operations:**<br/>The following APIs are available for both Job Scheduling features via Quali API. |
| Import package |   |   |
| Export package |   |   |

## Related Topics

- [REST API Page](../../jss/jss-portal/jss-rest-api.md)