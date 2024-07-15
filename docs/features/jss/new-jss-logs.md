---
sidebar_position: 4
---

# New Job Scheduling Service Logs

This article provides logging details for the New Job Scheduling services.

Supported log levels are TRACE, DEBUG, INFO, WARN, ERROR. Please note that TRACE captures everything. To change the log level for specific services, see [Change Log Levels for New Job Scheduling Services](../install-configure/cloudshell-suite/new-jss-install-config/admin-actions/change-log-level.md).

## Job Scheduling Service

Suite execution events are logged in Job Scheduling Service logs, in DEBUG log level. These include:

- Suite was triggered
- Looking for available slot in TES
- Requesting a sandbox
- Receiving a sandbox
- Test started
- Test ended
- Suite ended

To get the full picture, search for the sandbox ID in the Quali Server and Execution Server logs.

Each suite execution, job, test, sandbox and sandbox request has a unique ID. For example:

`[2021-01-18 11:01:16.9069] [4] [INFO] [229a41efd8ef] [] [Quali.CloudShell.Job.Scheduling.Api.ConsumptionService.RabbitMqConsumptionServiceSandboxConsumer] -- Begin processing {"result": true, "``sandbox_id``": "1ae1e266-1512-412c-bd82-031d3bd7fa45", "retries": 0, "errors": [], "error_code": 0, "``request_id``": "0f045b2f-a15f-4a81-9a11-e1af3c2faee4" [2021-01-18 11:01:47.2871] [9] [INFO] [229a41efd8ef] []`

`[Quali.CloudShell.Job.Scheduling.Api.TestExecutionManagement.SandboxExecutionHandler] --` `Test execution id``: 9e9801db-9703-46dc-a687-ba898cf23e87 ended with result Passed`

`[2021-01-18 11:01:47.3168] [9] [INFO] [229a41efd8ef] [] [Quali.CloudShell.Job.Scheduling.Api.TestExecutionManagement.SandboxExecutionHandler] --` `Job execution id``: 0f045b2f-a15f-4a81-9a11-e1af3c2faee4 ended successfully, with result Succeeded`

`Next test was triggered. test execution id: 9e9801db-9703-46dc-a687-ba898cf23e87, in job execution id: 0f045b2f-a15f-4a81-9a11-e1af3c2faee4, in` `suite execution id``: 99a10ee3-1529-4b4d-b8ba-09f0f79cb7b0`

| Log location | Default logging level | Maximum file size | Maximum number of files |
| --- | --- | --- | --- |
| Console<br/>Logs directory under `/JobSchedulingService` (at least 2 files per day: one containing all the logs and the second one only errors) | All logs: DEBUG<br/>Errors log: WARN | All logs: 50 MB<br/>Error log: 10 MB | All logs: 50<br/>Error log: 10 |


## Test Execution Service

Job/test execution logs

| Log location | Default logging level | Maximum file size | Maximum number of files |
| --- | --- | --- | --- |
| Console | WARN |  |  |

## Test Discovery Service

Test repository connection logs

| Log location | Default logging level | Maximum file size | Maximum number of files |
| --- | --- | --- | --- |
| Console | WARN |  |  |

## Sandbox Service

Sandbox creation and management logs

| Log location | Default logging level | Maximum file size | Maximum number of files |
| --- | --- | --- | --- |
| `./sandbox_service_logs`  | WARN | 10 MB | 5 |

## Identity Service

General Identity Service logs - related to user activity in the New Job Scheduling

| Log location | Default logging level | Maximum file size | Maximum number of files |
| --- | --- | --- | --- |
| Logs are saved only to the console (docker logs)  | WARN |  |  |