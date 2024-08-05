---
sidebar_position: 2
---

# ElastiCube Tables

This article describes, for reference purposes, each of the component tables in the ElastiCube data store. The dashboards that present information for your analysis compiles its information from the ElastiCube data store.
:::note
In 2021.2 we added several tables for enhanced searchability and filtering. These tables are not documented in this article but are included in ElastiCube.
:::
## App daily log

(Used in Legacy dashboards) The App daily log provides daily information of App utilization. Each row in the table represents a day in which a deployed App was active, and includes the resource ID of the deployed App.

| Name | Type | Description |
| --- | --- | --- |
| DateId | Integer | An integer representation of the date and time |
| Date | Date-Time | The date and time |
| ResourceId | Text | The unique identifier of the deployed App resource |

## Calendar

The ElastiCube Calendar component table provides date and time at which any items in the inventory were used.

| Name | Type | Description |
| --- | --- | --- |
| Date | Date-Time | The date and time |
| DateId | Integer | An integer representation of the date and time |
| TimePeriod | Integer | The reservation's duration. Options are 1 / 7 / 30 / 365 (days). |

## Executions

(Used in Legacy dashboards) The ElastiCube Executions table provides details of tests that were executed from CloudShell’s job scheduling module and that had logging profile of "All”.

| Name | Type | Description |
| --- | --- | --- |
| BatchNumber | Text | The batch number that the user entered, in case the execution was triggered from the Runner |
| CalculatedTestResult | Text | Terminated, Error, Passed, Failed, Completed |
| Day | Integer | The day of month in which the execution started |
| EndTimeTimeStamp | Text | A text representation of the execution end time |
| ExecutionEndTime | Date-Time | The date and time at which the execution ended |
| ExecutionErrored | Integer | 1-The execution ended with error, 0-otherwise |
| ExecutionFailed | Integer | 1-The test had failed, 0-otherwise |
| ExecutionId | Text | The unique identifier of the execution |
| ExecutionName | Text | The name of the execution (also represents the name of the test) |
| ExecutionPassed | Integer | 1-The test passed, 0-otherwise |
| ExecutionPath | Text | The full path to the test, for example: TestShell/Tests/Shared/Test 1 |
| ExecutionResults | Text | Terminated, Error, Passed, Failed, Completed |
| ExecutionStartTime | Date-Time | The date and time at which the execution started |
| ExecutionTerminated | Integer | 1-The execution terminated, 0-otherwise |
| IsRegression | Integer | 1-regression, 0-standard test |
| JobExecutionId | Text | Foreign key to JobExecutionHistory table |
| Month | Integer | The month in which the Execution started |
| PartNumber | Text | The part number that the user entered, in case the execution was triggered from the Runner |
| Quarter | Integer | The quarter in which the Execution started |
| RegressionResultId | Text | The unique identifier of the result |
| ResultCode | Integer | 0-Fail, 1-Pass, Empty-None |
| ResultString | Text | Pass, Fail, None |
| RootExecutionId | Text | The unique identifier of the root test that initiated the execution (used for nested tests) |
| SerialNumber | Text | The serial number that the user entered, in case the execution was triggered from the Runner |
| StartTimeTimeStamp | Text | A text representation of the execution start time |
| StationName | Text | The name of the station that triggered the execution |
| StatusCode | Integer | 1-Completed, 2-Terminated, 0-Running |
| StatusString | Text | Completed, Terminated, Running |
| TestId | Text | The unique identifier of the execution test |
| User Id | Text | The unique identifier of the user who initiated the execution |
| UserName | Text | The user name of the user who initiated the execution |
| UUTId | Text | The unique identifier of the UUT that was linked to the execution |
| UUTName | Text | The name of the UUT that was linked to the execution |
| UUTPath | Text | The path of the UUT that was linked to the execution |
| Version | Text | The version that the user entered, in case the execution was triggered from the Runner |
| Year | Integer | The year in which the Execution started |

## Job execution history

(Used in Legacy dashboards) The Job execution history table uses the parameters listed below:

| Name | Type | Description |
| --- | --- | --- |
| JobId | Text | The unique identifier of the job |
| JobName | Text | The name of the job |
| SuiteExecutionId | Text | The unique identifier of the automation suite's execution (Foreign key to the suite execution history table) |
| SelectedExecution Server | Text | The execution server that was selected to run the job. |
| JobResult | Text | Completed, Passed, Failed, Ended With Error, Ended With An Exception, Manually Stopped, Terminated, or Not Started |
| CreateTime | Date-Time | The date and time at which the job was created |
| EnqueueTime | Date-Time | The date and time at which the job was enqueued |
| ScheduledTime | Date-Time | The date and time at which the job was scheduled to run |
| ActualStart Time | Date-Time | The date and time at which the job started running. |
| ActualEndTime | Date-Time | The date and time at which the job stopped running |
| Logging Profile | Text | The selected logging profile for this job’s tests. None, All, Results, Measurements and Results |
| Stop On Fail | Integer | Indicates whether to stop the job execution if one of the tests fails. |
| Stop On Error | Integer | Indicates whether to abort the job if any test ends with an error. |
| TopologyID | Text | The unique identifier of the blueprint |
| ReservationID | Text | The unique identifier of the sandbox |
| EstimatedJobDuration | Decimal | The estimated duration of the job's execution |
| JobTopology | Text | The blueprint that was requested for the job |
| JobDuration | Integer | The actual job duration in seconds |

## Login data log

(Used in new dashboards) The Login data log enables users to filter the dashboards according to user login time.

| Name | Type | Description |
| --- | --- | --- |
| ActionType | Text | Indicates the login type. Options are:<ul><li>**Login:** Regular login</li><li>**SSOLogin:** Login via SSO</li></ul> |
| Time | Date-Time | The date and time at which the user logged into CloudShell |
| UserId | Text | The user who logged in to CloudShell |
| DomainId | Text | ID to which the user logged in |
| ClientType | Text | Type of client used to log in. Options are: **Unknown**, **API**, **Portal**, **WpfClient** and **JSS** |

## Measurements only

(Used in Legacy dashboards) As part of test development, you can specify one or more measurements for each test. As part of the test execution, you can provide values for these measurements. The test attributes and measurements values logged during test execution are listed in the database using the fields below.

| Name | Type | Description |
| --- | --- | --- |
| Day | Integer | The measurement's start time – day |
| ExecutionId | Text | FK to executions table |
| MeasureDimension | Text | The dimension of the measure: Scalar, Vector, Matrix |
| MeasurementEndTime | Date-Time | The date and time at which the measurement ended |
| MeasurementFailed | Integer | 1 – Failed, 0 – Otherwise |
| MeasurementName | Text | The name of the measurement |
| MeasurementPassed | Integer | 1 – Passed, 0 – Otherwise |
| MeasurementPath | Text | The path to the measurement |
| MeasurementResultCode | Integer | The result of the measurement: 1-Passed, 0-Failed, else - None |
| MeasurementResultString | Text | Text representation of the measurement result |
| MeasurementStartTime | Date-Time | The date and time at which the measurement started |
| MeasurementType | Text | The type of measurement: Numeric, String, Image |
| Month | Integer | Measurement start time – month |
| Quarter | Integer | Measurement start time – quarter |
| ResultCode | Integer | 1-Pass, 0-Fail, Empty – None |
| ResultString | Text | Text representation of the result |
| StatusCode | Integer | 3-Completed, 1-Terminated, 4-NotStarted, None, 2-Started, 7-Debugged, 5-Error, 0-Skipped |
| StatusString | Text | Completed, Terminated, NotStarted, None, Started, Debugged, Error, Skipped |
| StepId | Text | The unique identifier of the step in the test |
| StepName | Text | The name of the step as defined in the test |
| StepType | Text | The type of step, for example: Text To Report, Fail, Pass |
| ValueNumeric | Integer | (Relevant for numeric measurements) Numeric representation of the value |
| ValueString | Text | String representation of the measurement value |
| Variable | Text | The variable's name |
| Year | Integer | The measurement's start time - year |
| CalculatedMeasurementResult | Text | Passed, Failed |

## Reservation daily log

The Reservation daily log table provides daily information of blueprint utilization.

Each row in the Reservation daily log table represents a single sandbox that was active in a specific day. Calendar days that have no sandboxes do not appear in this log.

| Name | Type | Description |
| --- | --- | --- |
| Date | Date-Time | The record date (one of the dates in which the sandbox was active) |
| DateId | Text | Integer representation of the date |
| ExtendedEndDate | Date-Time | (Used in legacy dashboards) If the sandbox was extended, this field displays the extended date. |
| JobId | Text | (Used in legacy dashboards) The unique identifier of the automation suite job that created the sandbox |
| ActualEndDate | Date-Time | The exact date and time at which the sandbox ended |
| PlannedEndDate | Date-Time | The planned end date for the sandbox according to the value specified during sandbox creation |
| ReservationCount | Integer | (Used in legacy dashboards) The number of concurrent sandboxes in CloudShell when this sandbox was created |
| StartDate | Date-Time | The date and time at which the sandbox started |
| StartDateId | Integer | (Used in new dashboards) Integer that indicates the date in which the sandbox started. Format: \|YEAR\| \|MONTH\| \|DAY\|. For example: "20210720" indicates "7/20/2021” |
| DailyDuration | Integer | Daily sandbox duration (in minutes) |
| DailyDuration\_days | Integer | (Used in new dashboards) Daily sandbox duration (in days) |
| TotalDuration | Integer | (Used in legacy dashboards) Total sandbox duration (in minutes) |
| ReservationId | Text | The unique identifier of the sandbox |
| ReservationName | Text | The name of the sandbox |
| ReservingDomain | Text | (Used in legacy dashboards) The domain in which the sandbox was created |
| ReservedTopology | Text | The name of the reserved blueprint |
| TopologyId | Text | The unique identifier of the blueprint that was reserved |
| OwnerName | Text | The name of the sandbox owner |
| UserId | Text | (Used in new dashboards) The unique identifier of the user. Used for improving query performance. |
| EndDate | Date-Time | The estimated end date of the sandbox, or the actual end date in case the sandbox already ended |

## Reservation rejection log

(Used in new dashboards) The Reservation rejection log table lists each rejected reservation request and the rejection reason.

Each row in the Reservation summary log table represents a single reservation rejection. Calendar days that have no rejected reservations do not appear in this log.

| Name | Type | Description |
| --- | --- | --- |
| ReservationId | Text | The unique identifier of the sandbox |
| BlueprintId | Text | The unique identifier of the blueprint from which the reservation was launched |
| BlueprintName | Text | Name of the blueprint from which the reservation was launched |
| SavedSandboxId | Text | The unique identifier of the saved sandbox from which the reservation was launched |
| StartTime | Date-Time | The date and time at which the sandbox started |
| EndTime | Date-Time | The date and time at which the sandbox ended |
| OwnerLongId | Text | Internal owner ID to be used when OwnerId cannot be resolved. |
| DomainId | Text | The unique identifier of the domain in which the reservation was launched |
| RequestTime | Date-Time | The date and time at which the reservation was requested |
| RejectReason | Text | Reason for rejecting the reservation.<br/>Reasons include:<ul><li>resource conflict</li><li>license limit global</li><li>license limit domain (pool)</li><li>user limitation - # of concurrent sandboxes</li><li>user limitation - sandbox length</li><li>no solution</li></ul> |
| RequestType | Text | Type of reservation request. Options are New and Reschedule |
| IsRecurrence | Bool | True if reservation is part of a series |

## Reservation setup log

(Used in new dashboards) The Reservation setup log indicates which reservations successfully completed setup.

| Name | Type | Description |
| --- | --- | --- |
| ReservationId | Text | The unique identifier of the sandbox |
| SetupStartTime | Date-Time | The date and time at which the sandbox's setup process started |
| IsSuccess | Bool | True if reservation setup completed successfully |

## Reservation summary log

The Reservation summary log table provides details about the completed, running, and pending sandboxes in CloudShell.

Each row in the Reservation summary log table represents a single sandbox. Calendar days that have no sandboxes do not appear in this log.

| Name | Type | Description |
| --- | --- | --- |
| Id | Integer | The unique identifier of the reservation event. |
| ActualEndDate | Date-Time | The exact date and time at which the sandbox ended |
| DomainId | Text | The unique identifier of the domain in which the sandbox was created |
| DomainName | Text | The name of the domain in which the sandbox was created |
| ExtendedEndDate | Date-Time | If the sandbox was extended, this field displays the extended date. |
| Abuse | Text | (Used in legacy dashboards) Indicates a resource in the reservation that is not utilized by drivers. |
| JobId | Text | (Relevant for sandboxes created by automation suite jobs) The unique identifier of the job |
| PlannedEndDate | Date-Time | The planned sandbox end date that was defined when creating the sandbox |
| Type | Integer | Type of blueprint used. Options are: **Regular**, **View** and **Template**. |
| ReservationCount | Integer | The number of concurrent sandboxes in CloudShell when this sandbox was created |
| StartDate | Date-Time | The date and time at which the sandbox was started |
| StartDateId | Integer | The unique identifier of the sandbox's start date. Format: \|YEAR\| \|MONTH\| \|DAY\|. For example: "20210720" indicates "7/20/2021” |
| OvertimeMinutes | Integer | (Relevant for sandboxes that went into overtime) The sandbox's overtime duration in minutes |
| Duration | Integer | Total sandbox duration (in minutes) |
| ReservationId | Text | The unique identifier of the sandbox |
| ReservationName | Text | The name of the sandbox |
| ReservingDomain | Text | (Used in legacy dashboards) The domain in which the sandbox was created |
| ReservedTopology | Text | The name of the reserved blueprint |
| TopologyId | Text | The unique identifier of the blueprint that was reserved |
| UserId | Text | The unique identifier of the user. Used for improving query performance. |
| SavedSandboxId | Text | The unique identifier of the saved sandbox from which the reservation was launched |
| OwnerName | Text | The name of the sandbox owner |
| EndDateId | Integer | Unique identifier of the sandbox's end date. Format: \|YEAR\| \|MONTH\| \|DAY\|. For example: "20210720" indicates "7/20/2021” |
| EndDate | Date-Time | The estimated end date of the sandbox, of the actual end date in case the sandbox had already ended |

## Resource attributes value summary

(Used in Legacy dashboards) The Resource attributes value summary table provides information about all the resources in CloudShell.

Each record in this table represents a single resource in CloudShell. For each attribute that has the **Displayed in Insight** rule, a column is added to the table. This table is updated once a day. For more information, see [Displaying attributes in BI](../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md#displaying-attributes-in-bi).

| Name | Type | Description |
| --- | --- | --- |
| ResourceId | Text | The unique identifier of the resource |

## Resource attributes log

(Used in Legacy dashboards) The Resource attributes log table lists all the attributes that have the **Displayed in Insight** rule.

| Name | Type | Description |
| --- | --- | --- |
| AttributeName | Text | The name of the attribute |
| AttributeType | Text | The attribute's type (string, password, numeric, boolean, or lookup) |
| Id | Integer | The unique identifier of the attribute |

## Resource attribute value log

(Used in Legacy dashboards) The Resource attribute value log table provides the values of all the attributes that have the **Displayed in Insight** rule.

| Name | Type | Description |
| --- | --- | --- |
| AttributeId | Integer | The unique identifier of the attribute |
| AttributeValue | Text | The value of the attribute |
| ResourceId | Text | The unique identifier of the resource |

## Resource family log

(Used in Legacy dashboards) The Resource family log table lists the name and unique ID of each resource family in CloudShell, as well as whether it is connectable.

| Name | Type | Description |
| --- | --- | --- |
| Id | Big Integer | The unique identifier of the family |
| IsConnectable | Text | Indicates whether a resource family is defined to be connectable (for example: ports, NICs and so on.) |
| ResourceFamilyName | Text | The name of the family |

## Resource log

This Resource log table lists the resources in the inventory. Each resource is associated to a model. Each model can be associated with one or more resources. A resource can have a hierarchy, or be part of a hierarchy.

The Resource log table provides all the levels of the hierarchy. Each resource has two hierarchy connections: a connection to its parent resource, if one exists. and a connection to the root resource - the resource in the highest level of the hierarchy, if one exists.

Legacy dashboards:

| Name | Type | Description |
| --- | --- | --- |
| root\_1 | Integer | Indicates a root resource |
| Leaf\_1 | Integer | Indicates an edge sub-resource. For example, port. |
| Created | Date-Time | (Used in old dashboards) The time at which the resource was created |
| Dateid | Integer | Unique identifier of the resource's creation date. Format: \|YEAR\| \|MONTH\| \|DAY\|. For example: "20210720" indicates "7/20/2021” |
| CalculatedResourceModel | Text | (Used in old dashboards) By default the value is the CloudShell Model name. If the resource has a **Model** attribute, this field contains the attribute value. |
| Calculated RootModel | Text | (Used in old dashboards) By default the value is the CloudShell Model name. If the resource has a **Model** attribute, this field contains the attribute value. |
| Deleted | Date-Time | (Used in old dashboards) The time at which the resource was deleted |
| Id | Text | The unique identifier of the resource |
| ParentId | Text | The unique identifier of the parent resource |
| ResourceFullName | Text | (Used in old dashboards) The full name of the resource. The full name contains the resource name and the hierarchy.<br/>For example: Switch 1\\Blade 2\\Port 34 |
| ResourceModelId | Big Integer | (Used in old dashboards) The unique identifier of the model |
| ResourceName | Text | The name of the resource |
| RootId | Text | The unique identifier of the root resource that contains the resource.<br/>For example: the identifier of "Switch 1” in the following port "Switch 1\\Blade 2\\Port 34”<br/>Note that for root resources the value is the resource's unique identifier. |
| RootName | Text | The name of the root resource that contains this resource.<br/>For example: the value of "Switch 1” in the following port "Switch 1\\Blade 2\\Port 34”<br/>Note that for root resources the value is the resource's name. |
| ParentName | Text | (Used in old dashboards) The unique identifier of the parent resource.<br/>For example: the identifier of "Blade 2” in the following port: "Switch 1\\Blade 2\\Port 34”<br/>Note that for root resources the value is empty because they do not have a parent. |
| RootFamilyName | Text | The family name of the root resource |
| RootModelName | Text | The model name of the root resource |
| ResourceFamilyName |   | (Used in new dashboards) Family of the resource |
| ResourceModelName |   | (Used in new dashboards) Model of the resource |
| IsConnectable | Text | This value specifies whether the resource can be connected to other resources |
| ParentPath | Text | The path of the parent resource from the root.<br/>For example: the value for the port "Switch 1\\Blade 2\\Port 34” is "Switch 1\\Blade 2”.<br/>Note that for root resources the value is empty. |
| BladePath | Text | (Used in old dashboards) (Relevant for connectable resources only) The parent path of the parent resource |
| AppTemplateName | Text | (Used in old dashboards) The name of the App template on which the App is based |
| CloudProviderName | Text | (Used in old dashboards) The name of the cloud provider resource on which the App is hosted |
| CreatedInReservationName | Text | (Used in old dashboards) The name of the sandbox in which the resource or App was created |
| CreatedInDomain | Text | (Used in old dashboards) The name of the domain in which the App was deployed |
| RootDeleted | Date-Time | The time at which the root resource was deleted |
| root\_deleted\_txt | Text | (Used in new dashboards) If the root of the resource is deleted, the value is "Deleted”. Otherwise null. |
| root\_created | Date-Time | (Used in new dashboards) Data and time at which the root resource was created. |
| resource\_created | Date-Time | (Used in new dashboards) Date and time at which the resource was created. |
| resource\_deleted | Date-Time | (Used in new dashboards) Date and time at which the resource was deleted. |
| resource\_deleted\_txt | Text | (Used in new dashboards) If the resource is deleted, the value is "Deleted”. Otherwise null. |

## Resource model log

(Used in Legacy dashboards) The Resource model log table lists the name, unique ID and family of each resource model in CloudShell.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| Id | Big Integer | The unique identifier of the model |
| ResourceFamilyId | Big Integer | The unique identifier of the family |
| ResourceModelName | Text | The name of the model |

## Resource utilization log

The Resource utilization log table provides a daily usage summary of **connectable** resources in sandboxes.
:::note
Connectable resources are basically ports that can be connected to other components, such ethernet, fiber, or other connectable ports.
:::
| Name | Type | Description |
| --- | --- | --- |
| EntryDate | Date-Time | The date of entry that this log record represents (specific day within a sandbox) |
| Id | Big Integer | The unique identifier of each record |
| Lock1 | Integer | (Used in legacy dashboards) Daily lock status log, the day is divided into 6 segments, each value can be either 0 or 1:<br/>0 = The resource was not locked in the sandbox in this segment<br/>1 = The resource was locked in the sandbox in this segment |
| Lock2 | Integer | (Used in legacy dashboards) 4 hour day intervals for resources marked "in use” in the sandbox |
| Lock3 | Integer | (Used in legacy dashboards) 4 hour day intervals for resources marked "in use” in the sandbox |
| Lock4 | Integer | (Used in legacy dashboards) 4 hour day intervals for resources marked "in use” in the sandbox |
| Lock5 | Integer | (Used in legacy dashboards) 4 hour day intervals for resources marked "in use” in the sandbox |
| Lock6 | Integer | (Used in legacy dashboards) 4 hour day intervals for resources marked "in use” in the sandbox |
| Res1 | Integer | Daily sandbox status log, the day is divided into 6 segments, each value can be either 0 or 1:<br/>0 = The resource was not reserved in the sandbox in this segment<br/>1 = The resource was reserved in the sandbox in this segment |
| Res2 | Integer | 4 hour day intervals for resources in a sandbox |
| Res3 | Integer | 4 hour day intervals for resources in a sandbox |
| Res4 | Integer | 4 hour day intervals for resources in a sandbox |
| Res5 | Integer | 4 hour day intervals for resources in a sandbox |
| Res6 | Integer | 4 hour day intervals for resources in a sandbox |
| ReservationId | Text | The unique identifier of the sandbox |
| ResourceId | Text | The unique identifier of the resource |
| TopologyId | Text | The unique identifier of the blueprint |
| TopologyName | Text | Name of the blueprint |
| UserId | Text | The unique identifier of the user who reserved the resource |
| Username | Text | (Used in legacy dashboards) The internal system name of the user who reserved the resource (full name should be retrieved from ReservationSummaryLog table) |
| EntryDateTimeStamp | Text | Textual representation of the entry date |
| DayOfWeek | Text | (Used in legacy dashboards) The day of week of the record |

The following two examples are presented to show how parameters in the tables are populated with information and how the information can be used to analyze results. These examples use data collected by the Resource utilization log tables.

### Example #1

This example shows the utilization information collected for resource ‘Port\_12’ during the date 29-Jul-2013:
| | | | |
|--------------|----------|----------|----------|
| Date         | 00:00.0  | 00:00.0  | 00:00.0  |
| ResourceId   | \{Port12\} | \{Port12\} | \{Port12\} |
| TopologyName | DemoLab1 | DemoLab1 | DemoLab2 |
| ReservationId| \{Res1ID\} | \{Res2ID\} | \{Res3ID\} |
| Res1         | 1        | 0        | 0        |
| Res2         | 1        | 0        | 0        |
| Res3         | 1        | 0        | 0        |
| Res4         | 0        | 1        | 0        |
| ResEntry5    | 0        | 0        | 0        |
| Res6         | 0        | 0        | 1        |
| Username     | User1    | User1    | User2    |


The first two records show that ‘User1’ reserved the resource twice. These sandboxes occurred at different times of the day.

A day is divided into six segments. The value ‘1’ implies that the resource was reserved in segment 1 of the selected day. The port was therefore reserved for ‘User1’ in two different sandboxes for 4/6 parts of the day:

| Res<br/>1 | Res<br/>2 | Res<br/>3 | Res<br/>4 | Res<br/>5 | Res<br/>6 |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 |

The total utilization of ‘Port 12’ during the date 29-Jul-2013 should take into account all the sandboxes, so it will result in 5/6 parts of the day:

| Res<br/>1 | Res<br/>2 | Res<br/>3 | Res<br/>4 | Res<br/>5 | Res<br/>6 |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 1 |

### Example #2

This example shows information that was collected and shows the utilization of a chassis that includes ports: ‘Port\_12’ and ‘Port 13’ during the date 29-Jul-2013.

The information listed below shows that the first two records belong to ‘Port 12’ and the third record belongs to ‘Port 13’.
| | | | |
|--------------|----------|----------|----------|
| EntryDate   | 00:00.0 | 00:00.0 | 00:00.0 |
| ResourceId  | \{Port12\} | \{Port12\} | \{Port13\} |
| TopologyName| DemoLab1 | DemoLab1 | DemoLab2 |
| ReservationId | \{Res1ID\} | \{Res2ID\} | \{Res3ID\} |
| Res1        | 1       | 0       | 0       |
| Res2        | 1       | 0       | 0       |
| Res3        | 1       | 0       | 0       |
| Res4        | 0       | 1       | 0       |
| Res5        | 0       | 0       | 0       |
| Res6        | 0       | 0       | 1       |
| Username    | User1   | User1   | User2   |


Each port has a different utilization result:

| ResourceId | Res1 | Res2 | Res3 | Res4 | Res5 | Res6 |
| --- | --- | --- | --- | --- | --- | --- |
| \{Port12\} | 1 | 1 | 1 | 0 | 0 | 0 |
| \{Port12\} | 0 | 0 | 0 | 1 | 0 | 0 |
| \{Port13\} | 0 | 0 | 0 | 0 | 0 | 1 |

Port 12 was utilized for 4/6 of the day while Port 13 was utilized for 1/6 of the day.

However, when summarizing the utilization for the chassis as a resource, you need to join the utilization of the two ports: so the utilization for the chassis for 29-Jul-2013 is 5/6:

| Res1 | Res2 | Res3 | Res4 | Res5 | Res6 |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 0 | 1 |

## Suite execution history

(Used in Legacy dashboards) The Suite execution history table provides an execution summary of the automation suites in CloudShell.

| Name | Type | Description |
| --- | --- | --- |
| SuiteId | Text | The unique identifier of the automation suite template |
| SuiteName | Text | The name of the automation suite template |
| SuiteExecutionId | Text | The unique identifier of the automation suite's execution |
| SuiteExecutionName | Text | The name of the automation suite execution |
| SuiteResult | Text | The automation suite 's result |
| CreateTime | Date-Time | The date and time at which the automation suite was created |
| PendingTime | Date-Time | Indicates the date and time at which the automation suite was added to the queue |
| StartTime | Date-Time | The date and time at which the automation suite began execution |
| EndTime | Date-Time | The date and time at which the automation suite completed its execution |
| Type | Text | TestShell or custom type name |
| ExecutingUserId | Text | The user who executed the automation suite |
| OwnerId | Text | The user who is the owner of the automation suite |
| DomainId | Text | The unique identifier of the domain in which the automation suite was created |
| SuiteDuration | Integer | The duration of the automation suite |
| ExecutingDomain | Text | The domain that executed the automation suite |
| UserId | Text | The unique identifier of the user who executed the automation suite |

## TestShell domain log

(Used in Legacy dashboards) The TestShell domain log provides details about all user domains in CloudShell.

| Name | Type | Description |
| --- | --- | --- |
| Id | Text | The unique identifier of the domain |
| Name | Text | The name of the domain |

## Topology log

This table provides details about all the blueprints which were available in CloudShell.

The values of this table use the parameters listed below:

| Name | Type | Description |
| --- | --- | --- |
| CreateDate | Date-Time | The date when the blueprint was created |
| DeleteDate | Date-Time | The date when the blueprint was deleted |
| Owner | Text | Link to the owner of the blueprint |
| ID | Text | The unique identifier of the blueprint |
| Name | Text | The name of the blueprint |
| Type | Text | Regular / View |

## User domain

The User domain table indicate a connection between user, group and Domain. A new feature in the ElastiCube is permission-based access – a user should see only their own domain’s data, so this table is needed to query data based on the user’s domain.

| Name | Type | Description |
| --- | --- | --- |
| Email | Text | User's email |
| Username | Text | CloudShell user name |
| DomainId | Text | The unique identifier of the domain |
| Id | Text | Unique identifier of the user |
| Name | Text | Name of the domain |
| GroupId | Text | User's group associated to the domain |

## User group

(Used in Legacy dashboards) The groups that are defined in CloudShell and their relation to users.

The User group table provides a way to filter the BI tables by Group.

| Name | Type | Description |
| --- | --- | --- |
| UserId | Text | The unique identifier of the user |
| GroupId | Text | The unique identifier of the group |
| GroupName | Text | The name of the group |