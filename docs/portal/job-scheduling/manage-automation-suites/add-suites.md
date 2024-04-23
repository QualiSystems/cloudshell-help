---
sidebar_position: 1
---

# Adding Automation Suites

You can create automation suite templates that users are able to run many times, or an ad hoc automation suite that runs only once. For additional information about ad hoc automation suites, see [Running AdHoc Automation Suites](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/JOB-SCHDL/Run-Adhoc-Atmt-Suite.htm).

:::note
Admins can enable non-admin users to edit and create suite templates using the `AllowRegularUsersToEditSnQ` key - see [Advanced CloudShell Customizations](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#enabling-non-admin-users-to-edit-and-create-suite-templates).
:::

## Add a new automation suite

An automation suite must have at least one job that has a test. However, an automation suite can have multiple jobs, with each job containing multiple tests.

**To add a new automation suite:**

1. In CloudShell Portal, click **Job Scheduling**.
    
    The **Job Scheduling** dashboard is displayed in the **Executions** page, listing the existing automation suites.
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/Automation-suites.png)
    
2. Click **Add New Suite**. If you have multiple execution server types, click the drop down list directly below the **Add New Suite** link and select the execution server type for the new automation suite template.
    
    The **Create Suite Template** page is displayed. the suite's execution server type is displayed in brackets in the blue header.
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/CreateSuiteTemplate.png)
    
3. Specify a **Name** for the automation suite.
4. To define the email notification the user executing the automation suite will receive, click the **Email Notifications** field and select one of the following options:
    
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
            <td>(Default) Notifications will be sent if an error occurs while trying to run the suite within the suite. Test failure does not prompt an email notification.</td>
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

    :::note    
    Email notifications require [SMTP mail configuration](../../../install-configure/cloudshell-suite/configure-products/admin-config-settings.md#smtp-mail-configuration) and the executing user's profile to have an email address - see [Managing CloudShell Users](../../../admin/cloudshell-identity-management/managing-users/managing-cloudshell-users.md).
    :::
    
5. To view or edit the published input fields, in the **User Inputs** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_8_18x19.png) and edit the required fields.
    
    ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_10_.png)
    
6. To define advanced scheduling options for the suite, in the **Advanced** field, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_9.png).
    
    The **Advanced options** window pops up.
    
    - Click the **Scheduling** button in the top right hand corner of the window and set the options:
        
        | Option | Description |
        | --- | --- |
        | Start Automatically | (Not available for adhoc automation suites) Configure recurring executions of this suite. You can set the suite to execute on specific days or on a set interval. |
        | Remove old jobs from queue | 
        Define a timeout period for the suite. Jobs will be automatically removed from the queue when the time-out period ends. |
        | Set specific timeframe | Define a specific start and end time for the suite. |
        | End sandbox when Job fails | Select this option to end sandboxes automatically when the job fails. |
        
        :::note Notes        
        - When the suite's execution time arrives, the suite enters the queue and waits for the right execution server and sandbox to be ready. For additional information, see [Running Automation Suites](../running-automation-suites/index.md).
        - Additional scheduling options are available when running a custom execution of a template. For additional information, see [Running Custom Automation Suites](../running-automation-suites/run-custom-suites.md).
        :::
        
    - (Available for system administrators only; not available for adhoc suites) To change the template's owner, in the top right hand corner of the screen, click **Permissions** and specify the **Domain** and **Owner** of this automation suite. This option determines who can access and edit the automation suite template. By default, the owner is the user who created the automation suite template, but both the template's owner and the system administrator can edit the template.
        
7. Optionally, enter a **Description** for the automation suite.
8. Optionally, to add a label to the suite, in the **Categories** area, click the **Labels** field, select a label from the drop down list or enter a new label name, and press **\[Enter\]**. Labeling suites enables users to filter the suites in the **Job Scheduling** dashboard.
    
9. Next, add a job to the automation suite.

## Add jobs to an automation suite

Jobs group together tests and execute them sequentially on the same execution server.

An automation suite must have at least one job. You can select the blueprint on which the job's tests will run and also a specific execution server to execute the job's tests. An automation suite's jobs run in parallel.

:::note
Jobs do not run in parallel if they exceed the number of available job slots in the execution server, or if there is a reservation conflict for the resources in the linked blueprints.
:::

**To add a job to an automation suite:**

1. In the **Create Suite Template (TestShell)** page, in the **Jobs** area, click the ![](/Images/CloudShell-Portal/Scheduling-Jobs/AddJob.png) button.
    
    The **Jobs** area expands.
    
2. Enter the job's name.
3. Optionally, enter a **Description** for the job.
4. To define a blueprint for the job, click the **Blueprint** field. From the **Select blueprint** side pane, select the blueprint and click **Done**.
    
    :::note Notes    
    - Persistent blueprints are reserved as regular time-limited sandboxes by the job and are torn down when the job's execution ends.
    - Blueprints that require approval are unavailable for the New Job Scheduling.
    - Execution cannot be initiated until the blueprint's resources are available and the blueprint can be reserved.
    :::
    
    Test authors can prepare tests for execution in the **Job Scheduling** dashboard by recommending the most appropriate blueprint for each test. Every test can be linked to one or more recommended blueprints.
    
5. If the job is associated to a blueprint that has inputs (global/requirement/additional info), those inputs are displayed under the job. You can do the following:
    
    - Specify the input values.
    - Publish a variable as an input to the user running the job. To publish a variable, click the input's **publish** button (![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/PublishButton.png)).
    
    For example, blueprint inputs "Deployment Mode" and "Deployment Type":
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/BlueprintInputs.png)
    
6. The job's total estimated duration is used to allocate available time slots. This comprises the estimated duration of each of the job's tests, with buffer and provisioning estimates (if the blueprint includes setup/teardown commands). Click the **Duration** field.
    
    - Click the **Duration** field.
        
        The **Set duration** window pops up.
        
        There are two different ways to specify the job's total estimated duration:
        
        - In the **Calculated** method, the job's total duration includes the buffer period you define in the **Set buffer** field (default is 10 minutes), the total duration of the job's tests, and the provisioning period (the total setup and teardown duration if they exist in the blueprint associated with the job).
        - Use the **Specific** method to set a specific number of weeks, days, hours, and minutes as the job's estimated duration. Note that the estimated duration cannot be less than the aggregated estimate of the job's tests. If existing, the provisioning duration is added to your estimated duration.
        
        :::note Additional Notes        
        - Jobs that exceed their estimated duration are aborted unless they are extended successfully before completion.
        - If a sandbox ends while a job is still running, the job is terminated. To avoid terminating jobs too early, define additional overtime that will be added to all the jobs in the system.
        - Jobs that enter the overtime period send a warning notification to the initiator who can try to extend the sandbox from the CloudShell Portal.
        - Trying to run a job using the calculated duration method while the job’s tests have no estimated duration will result in an error
        :::
        
7. To configure the job's execution settings, click the ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_8.png) button. In the Execution Settings window, select the required settings.
    
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
                  :::note
                  To assign an execution server associated to a specific domain, attach to the job a blueprint that contains a resource that is set to be deployed by the desired domain's execution server via the Execution Server Selector attribute, as explained in [Associating Resources to Specific Execution Servers](../../inventory/managing-resources/associate-resources-to-es.md).
                  :::
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
    
8. Next, add tests to the job in the automation suite.

## Add tests to a job

Tests in a job run sequentially in their specified order.

**To add a test to a job:**

1. In the **Create Suite Template (TestShell)** page, in the **Jobs** area, click **Tests**.
    
    The **Add a test** side pane is displayed, showing the **Local** and **Shared** folders of your TestShell Studio.
    
2. Click a folder to display its tests. To view a test's description and number of parameters, click the **More Info** button.
3. Click a test.
    
    The test is added to the job and displayed in the **Tests** area below.
    
4. In the **Duration (Min)** field to the right of the test, enter the estimated number of minutes needed for the execution of the test.
    
    Note: If an estimated duration was set for the Studio test, that duration is displayed by default.
    
    The test's duration period is added to the job's calculated duration.
    
5. If any of the job's tests have inputs, those inputs are displayed in the job’s test input area. Note that password inputs are supported since CloudShell 8.3 and are encrypted both when typing and in transmission. You can do the following:
    
    - Specify the input values.
        
        To utilize multiline variable input values of type **String** (see Variable types ) and JSON format, click the attribute's **expand** button to open the variable edit window, enter your value and click the check button.
        
        For example:
        
        ![](/Images/CloudShell-Portal/Scheduling-Jobs/VariableInputScreen.png)
        
        :::note
        A "\\\\n" tag is automatically inserted between each line of text, indicating a line break, as shown below:
        
        ![](/Images/CloudShell-Portal/Scheduling-Jobs/VariableInputScreenNTag.png)
        
            :::warning
            CloudShell does not allow you to directly specify a multiline variable input of type string using the edit button unless you add a "\\\\n" tag at the end of each line.
            :::

        :::
        
    - Publish a variable as an input to the user running the job. To publish a variable, click the input's **publish** button (![](/Images/CloudShell-Portal/Lab-Management/Working-with-Resources/PublishButton.png)).
        
    
    For example, a "Port" variable is used:
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/NewTest.png)
    
    :::note
    An administrator can configure the possible variables displayed to the user, and define dependencies between the variable fields. See [Using JavaScript Extensibility to configure dependencies between test parameters](../../../admin/cloudshell-manage-dashboard/javascript-extensions.md#using-javascript-extensibility-to-configure-dependencies-between-test-parameters).
    :::
    
6. Add additional tests to the job as appropriate.
    
    :::note
    The tests are executed in their order in the job. You can add the same test multiple times to the same job
    :::
    
7. Close the **Add a test** pane.
8. To change the execution order of the tests in the job, next to the test's name, click ![](/Images/CloudShell-Portal/Running-Ad-Hoc-Suites/Ad-Hoc-Suites_7_21x21.png) and drag the test to the required location.
9. Click **Done**.
    
    The following indication message is displayed:
    
    ![](/Images/CloudShell-Portal/Scheduling-Jobs/JobEnqueuedIndicationMessage.png)
    
    The new automation suite is added to the **Executions** page.