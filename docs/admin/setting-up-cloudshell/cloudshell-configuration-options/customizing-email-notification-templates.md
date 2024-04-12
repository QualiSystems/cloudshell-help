---
sidebar_position: 7
---

# Customizing Email Notification Templates

CloudShell email notifications are based on HTML templates, which can be customized as appropriate.
:::note Important:
Make backup copies of any templates you want to customize just in case you need to revert back. Upgrading CloudShell will override any custom templates you have so make sure to keep backups.
:::
These templates reside on the Quali Server machine at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\EmailTemplates` and use a combination of text and CloudShell variables that pass information from CloudShell.

For example, the "Sandbox Ending" email template:

![](/Images/Admin-Guide/Setting-Up-CloudShell/EmailNotificationTemplate.png)

The "Sandbox Ending" email notification:

![](/Images/Admin-Guide/Setting-Up-CloudShell/EmailNotificationExample.png)

## Email templates

### Job templates:

- **JobExecutionEnded**: Emailed when a job's execution has finished.
- **JobExecutionEnding**: Emailed when a job's blueprint reaches overtime.
- **JobExecutionStarted**: Emailed when a job's execution starts.
- **JobSuiteEnded**: Emailed when all of a suite's jobs have finished their execution.
- **JobSuiteStarted**: Emailed when a suite's execution starts.

### Reservation templates:

- **MultipleServersAreUsingTheDatabase**: When Quali Server detects that another Quali Server is already using the Quali SQL database, CloudShell sends this email and disables itself to prevent data consistency issues.
    
- **PermittedUserAddedToReservation**: Emailed to users when they are added as permitted users to an a sandbox.
- **ReservationCanceled**: Emailed when the sandbox is canceled.
- **ReservationEnded**: Emailed when the sandbox is torn down. Corresponds to the On end email notification defined on the sandbox.
- **ReservationEnding**: Emailed before a sandbox begins teardown. Corresponds to the Before end email notification defined on the sandbox.
- **ReservationPending**: Emailed when a future sandbox is reserved.
- **ReservationRescheduled**: Emailed when a sandbox's duration has been modified.
- **ReservationSetupCompleted**: Emailed when a sandbox's setup phase completes. Corresponds to the On setup complete email notification defined on the sandbox.
- **ReservationStarted**: Emailed when a sandbox is reserved. Corresponds to the On start email notification defined on the sandbox.

### License templates:

- **LicenseExtendedReservationLimitExceeded**: Emailed to users when their reservation request is rejected because they have reached their concurrent reservations limit.
- **LicensePoolLimitExceeded**: Emailed to users when their reservation request is rejected because the domain's concurrent reservations limit has been reached.
- **LicenseReservationLimitExceeded**: Emailed to users who have reached their concurrent reservations limit.

## Available variables

### Reservation variables:

- **Now**: Time at which the email notification was sent.
- **ReservationName**: Sandbox name.
- **ReservationStartTime**: Time at which the sandbox was reserved.
- **TimeZone**
- **ReservationMainTopology**: Blueprint on which the sandbox is based.
- **ReservationLink / ReservationLinkHelp**: Used in the link to the sandbox workspace. For example:
    
    ```javascript
    <a href="{{ReservationLink}}">{{ReservationLinkHelp}}</a>
    ```
    
- **ReservationOwner**: Owner of the reservation. Reservation creator by default.
- **ReservationId**: Sandbox ID
- **ReservationEndTimeWithTimeZoneOrPersistent**: Planned end time. "No end time" is displayed for persistent sandboxes.
- **ReservationDescription**: Sandbox description.
- **ReservationResources**: Details of the sandbox's resources.
- **ReservationNumberOfResources**: Number of resources in the sandbox.
- **ReservationConflicts**: Resource conflicts that occurred when reserving the sandbox.

### Job variables:
:::note
For some of these variables, the information provided depends on the type of execution - job or suite.
:::
- **SuiteName**: Automation suite name.
- **JobName**
- **StartDate**: Job/suite execution start date, depending on the notification.
- **EndDate**: Job/suite execution end date, depending on the notification.
- **Result**: Job/suite execution result, depending on the notification.
- **Owner**: Owner of the job or suite.
- **TriggeredBy**: Indicates how the Automation Suite was triggered: Manual (“User”), API or Scheduled.
- **Description**
- **TopologyName**: Blueprint attached to the job.
- **TotalNumberOfTests**: Number of tests in the job.
- **State**: Job's completion state.
- **Result**: Job/suite execution result. For details, see [Viewing Test, Job and Suite Execution Results](../../../portal/job-scheduling/view-tests-job-suite-execution-results.md).
- **FailureReason**
- **JobSuitePage**: Link to the suite's execution page.
- **JobPageLink**: Used to build the link to the job''s execution page. For example:
    
    ```javascript
    To view job progress <a href="{{JobPageLink}}">click here</a>
    ```
    

### License variables:

- **MessageTitle**: Title of the email notification. For example: "Reservations Limit Exceeded".
- **ReservationOwner**
- **ReservationName**
- **LimitExceededDate**: Date at which the concurrent reservation limit was reached.
- **LimitExceededTime**: Time at which the concurrent reservation limit was reached.
- **TimeZone**
- **Domain**: Domain in which the limit was reached.
- **LicensePoolName**: Name of the domain's license pool, which indicates the domain's number of allowed concurrent reservations.
