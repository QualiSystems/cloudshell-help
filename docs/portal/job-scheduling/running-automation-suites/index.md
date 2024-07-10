# Running Automation Suites

There are three types of automation suites that can be run: automation suite templates that can be run multiple times, customized versions of an automation suite template, and an ad-hoc automation suite which you define on the fly and run once.

:::note
Ad-hoc automation suites are available for all user types while automation suite templates are only accessible to admins and to non-admin users that have permission to access those templates.
:::

These are explained in detail in the following articles:

- [Running Automation Suites from Templates](./run-suites-from-template.md)
- [Running Custom Automation Suites](./run-custom-suites.md)
- [Running AdHoc Automation Suites](./run-adhoc-suites.md)

Note that the defined execution time of the suite is not necessarily the time at which the suite is executed. First, the suite enters the queue and waits for a matching execution server to become available and the requested sandbox (if defined) to become active.

In addition to the requested start time specified for the automation suite, there are three job settings that influence the actual execution start time:

- Resource availability in the job's requested blueprint
- Execution server availability
- Job duration
    
    :::note
    The next en-queued job will not run if the current job's duration has not completed, even if its tests have completed their execution. The admin can use the `QacAllowedTimeFrameDurationInMinutes` key to search for available job slots to run the following jobs.
    :::
    

## Related Topics

- [Extending and Stopping Automation Suite Jobs](../extend-and-stop-automation-suites/extend-suite-jobs.md)
- [Viewing Execution History and Test Reports](../../portal/job-scheduling/view-execution-history-and-reports/)