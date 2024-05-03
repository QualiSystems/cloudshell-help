---
sidebar_position: 2
---

# Running Custom Automation Suites

You can run a customized version of an existing automation suite. Execution history for custom suites is stored together with the original suite template, even if none of the jobs are the same.

Customizing an automation suite does not change the automation suite template's settings.

**To customize an existing automation suite:**

1. In the **Executions** page, click the automation suite's ![](/Images/CloudShell-Portal/Scheduling-Jobs/AdvancedSettingsTool.png) **Run Custom** button.
    
    The **Run Suite** page is displayed.
    
2. Customize the automation suite's settings, as follows:
    
    <table>
    <tbody>
        <tr>
            <td>Scheduling</td>
            <td>
             - **ASAP**: run the job as soon possible (depending on the availability of the execution server and blueprint's resources)
             - **Specific**: run in a specific timeframe
            </td>
        </tr>
        <tr>
            <td>Tests</td>
            <td>Select which of the automation suite's tests to include in the execution</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>Optionally enter a description for the execution</td>
        </tr>
        <tr>
            <td>Inputs</td>
            <td>If the automation suite's blueprint or tests have published inputs, use this area to set the values of the published and unpublished inputs. Multiline values are supported for test input string attributes, as explained in [Add tests to a job](../manage-automation-suites/add-suites.md#add-tests-to-a-job).</td>
        </tr>
    </tbody>
    </table>
    
3. Click **Run**, or alternatively click **Customize** to run a custom execution of the suite instead.
    
    The suite is added to the queue and will run as soon as an appropriate execution server and the blueprint's resources (if a blueprint was defined) are available for the duration of the automation suite's jobs.
    
    For details about suite results and reports, see [Viewing Test, Job and Suite Execution Results](../view-tests-job-suite-execution-results.md) and [Viewing Execution History and Test Reports](../../../portal/job-scheduling/view-execution-history-and-reports/).