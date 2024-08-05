---
sidebar_position: 3
---

# Running AdHoc Automation Suites

Ad-hoc automation suites can be used to define and execute an automation suite on the fly. Ad-hoc suites are intended for one time use and therefore do not have recurrence settings or the capability to publish inputs. The job and test results are saved in the ad-hoc automation suite's execution history, but the ad-hoc suite's settings are not saved and cannot be reused.

:::note
Regular users who are permitted to access a test can run it as part of an ad-hoc suite. The test is not visible to users who are not permitted to view and run it. For information about adding permitted users to a test, see Adding users and groups to a test.
:::

**To add an ad-hoc automation suite:**

1. In the **Executions** page, in the **AdHoc** automation suite's row, click **Run**.    
2. In the **Name** field, enter a name for the suite.
3. In the **Description** field, enter a description for the suite.
4. To add a job to the suite, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_2_46x27.png).  
    1. In the **Name** field, enter a name for the job.  
        
    2. In the **Description** field, enter a description for the job.
    3. In the **Blueprint** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_4.png). In the **Select blueprint** pane, select the required blueprint and click **Done**. Optionally, enter default values for the blueprint's inputs, if it has any.
    4. To add a test to the job, in the **Tests** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_5_24x19.png). In the **Add a test** pane, browse to the required test and click to add it.  
        Tests are executed sequentially, so to change the order of the tests inside your job, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_4.png), next to the test name click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_7_21x21.png) and drag the test to the required location.
    5. For each test in the job, enter the duration (in minutes).
    6. Optionally, enter default values for the test's input fields if it has any. Multiline values are supported for test input string attributes, as explained in [Add tests to a job](../manage-automation-suites/add-suites.md#add-tests-to-a-job).
        
    7. To edit the duration of the job, in the **Duration** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_8_18x19.png).  
        
    
        | Tab | Action to perform | Instruction |
        | --- | --- | --- |
        | Calculated tab | Update the job duration buffer | In the Set buffer (minutes) field, enter the required value. |
        | Specific tab | Enter the job duration manually | Enter the amount of time required for the job execution. |
    
    8.  To define the job's execution settings, in the required job row, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_8_18x19.png).
        
        <table>
        <thead>
            <th>Option</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Execution Servers</td>
                <td>
                Select the execution server(s) that will run the job's tests:
        
                - **Specific**: Select a specific execution server. If needed you can select more than one execution server.
                - **Any**: The execution server is selected automatically by availability
                </td>
            </tr>
            <tr>
                <td>Reporting Profile</td>
                <td>
                Determine what will be written to the execution report:
        
                - **None**: Test results (passed/ failed/ completed/ error/ terminated) and measurements attributes
                - **Results**: Test results (passed/ failed/ completed/ error/ terminated) and measurements attributes
                - **Measurements and Results**: Test results (passed/ failed/ completed/ error/ terminated), transformations, text to report, measurement attributes, and captured image
                - **All**: Every input received by the test and output sent during the test
                </td>
            </tr>
            <tr>
                <td>Stop On</td>
                <td>
                Determine when the job will stop:
        
                - **Fail**: The job will stop running when a test fails
                - **Error**: The job will stop running when an error occurs or if the test encounters an error.
                </td>
            </tr>
        </tbody>
        </table>
        
5. To add additional jobs to the suite, repeat the last step.
6. To define the email notification you wish to receive for the suite, click the Email Notifications field and select one of the following options: 

    <table>
    <thead>
        <th>Option</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>None</td>
            <td>No notification will be sent.</td>
        </tr>
        <tr>
            <td>Errors Only</td>
            <td>Notifications will be sent if an error occurs while trying to run the suite within the suite. Test failure does not prompt an email notification.</td>
        </tr>
        <tr>
            <td>Suite and Errors</td>
            <td>
            Notifications will be sent:

            - When the first job in the suite started to run and the last job in the suite completed the run.
            - If an error occurred while trying to run the suite or any of the jobs it consists of.
            </td>
        </tr>
        <tr>
            <td>All</td>
            <td>
            Notifications will be sent:

            - When the first job in the suite started to run and the last job in the suite completed the run.
            - If an error occurred while trying to run the suite or any of the jobs it consists of.
            - When each job within the suite started running and completed its run.
            </td>
        </tr>
    </tbody>
    </table>


7. To define advanced scheduling options for the suite, in the **Advanced** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_9.png) and select a suitable option:

    | Option | Description |
    | --- | --- |
    | Remove old jobs from queue | Define timeout for the suite. Jobs will be automatically removed from the queue upon time-out. |
    | Set specific timeframe | Define a specific start and end time for the suite. |
    | End Sandbox when Job fails | Select this option to end sandboxes automatically when the job fails. |

8. To view or edit the published input fields, in the User Inputs field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_8_18x19.png) and edit the required field.
    
    ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_10_.png)
    
9. To delete a job from the suite, in the job’s row, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_11_21x23.png).
10. Click **Run**.
    
    The suite is added to the queue and will run as soon as an appropriate execution server and the blueprint's resources (if a blueprint was defined) are available for the duration of the automation suite's jobs.
    
    For details about suite results and reports, see [Viewing Test, Job and Suite Execution Results](../view-tests-job-suite-execution-results.md) and [Viewing Execution History and Test Reports](../../../portal/job-scheduling/view-execution-history-and-reports/).