---
sidebar_position: 1
---

# Running Automation Suites from Templates

:::note
You can update test and blueprint inputs before running an execution of the template, and create more extensive modifications by running a custom version.
:::

**To run an instance of an automation suite template:**

1. In the **Executions** page, in the automation suite's row, click **Run**.
    
    The automation suite is en-queued and its jobs are added to the **Pending** queue.
    
2. If the suite has test or blueprint input parameters, a pre-run page is displayed, allowing users to specify the input values. Multiline values are supported for test input string attributes, as explained in [Add tests to a job](../manage-automation-suites/add-suites.md#add-tests-to-a-job). Click the input's Customize link and change the value as appropriate.
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/Automation-suites_1_New.png)
    
3. When you are done editing the input parameters, at the bottom of the page, click **Run**, or alternatively click **Customize** to run a custom execution of the suite instead.
    
    The automation suite is en-queued and its jobs are added to the **Pending** queue (in the **Queue** page).
    
    A job remains in the **Pending** queue while the system finds a time slot when the blueprint can be reserved for the estimated duration, and the requested execution servers for all of its tests are available.
    
    When the job's blueprint is ready, it is moved automatically to the Scheduled queue. However, execution will not start before the suite's scheduled date and time.
    
    For details about suite results and reports, see [Viewing Test, Job and Suite Execution Results](../view-tests-job-suite-execution-results.md) and [Viewing Execution History and Test Reports](../../../portal/job-scheduling/view-execution-history-and-reports/).
    

### Job settings that determine execution start time

In addition to the requested Start time specified for the automation suite, job settings that influence the actual execution start time include:

- Resource availability in the requested blueprint for the job's estimated duration.
- Execution server availability

Jobs can only run on enabled (active) execution servers. There must also be sufficient available licenses to run requested/en-queued jobs.

The suite will only begin execution after:

- The specified Start time has been reached.
- The selected blueprint has been reserved, and any setup commands have run.
- One of the selected execution servers becomes available.