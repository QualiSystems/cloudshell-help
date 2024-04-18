---
sidebar_position: 3
---

# Execution Servers - Executions Page

The **Executions** page enables you to both view the real time status and general information of active driver instances and job executions and manage their executions.

Regarding drivers, the **Executions** page displays the instances of the active drivers, not their commands. For additional information, see [Instance](../../../intro/Term.md#instance).

:::note Notes:
- Starting with CloudShell 9.3, CloudShell runs orchestration scripts directly without needing the **Python Setup & Teardown** blueprint driver. This out-of-the-box behavior can be changed using the ExecutePythonOrchestrationScriptsDirectly configuration key.
- The blueprint driver is still included with CloudShell and running orchestration scripts manually from the sandbox's **Blueprint Commands** pane will invoke it, creating an instance for the driver in the **Executions** page.
:::
![](/Images/CloudShell-Portal/Manage/ExecutionServersExecutionsPage.png)

The information available for each driver or test in the **Executions** page includes:

<table>
    <thead>
        <th>Property</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>Displays the name of the resource or blueprint containing the driver, and for tests, the path of the current test.</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>
            Indicates the type of driver:

- **Blueprint** for sandbox-level drivers
- **Resource** for resource/service/App drivers
</td>
        </tr>
        <tr>
            <td>Server</td>
            <td>The name of the execution server running the execution.</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>
            Current status of the execution.

For drivers:

- **Active**: driver instance has command executions
- **Idle**: driver instance has no command executions

For jobs:

- **Running**: tests are currently running
</td>
        </tr>
        <tr>
            <td>menu icon ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton_20x19.png)</td>
            <td>
            The following options are available:

- **Stop**: Stop all command executions of a specific driver/script instance. Applies to both CloudShell Authoring and Python drivers.
- **Remove**: Remove a CloudShell Authoring driver instance and its command executions.
- **Terminate**: Remove a Python driver instance and any command executions that are running on the instance.
- **Details**: Show the job details page in the **Job Scheduling** dashboard.

For example:

![](/Images/CloudShell-Portal/Manage/ExecutionServersStopTerminate.png)
            </td>
        </tr>
    </tbody>
</table>

## Stopping all command executions of a specific driver instance

This procedure shuts down the command executions of a driver's instance but leaves the instance alive. This also applies to script executions.
:::important Tip:
To stop a specific command execution, in the sandbox workspace, open the appropriate commands pane and click Stop. For additional information, see [Stopping commands during execution](../../../portal/sandboxes/sandbox-workspace/run-commands.md#stopping-commands-during-execution).
:::
**To stop a driver's commands:**

1. In the **Execution Servers** page, click **Executions**.
    
    The **Executions** view of the page is displayed.
    
2. Click the execution's menu button and select **Stop**.
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServersStopTerminate.png)
    
    The execution is stopped and removed from the page. If there are any commands in the queue for this resource, they will run now in the instance.
    :::note
    If errors occur when attempting to stop a command or a test, please contact Quali Support at: [support.quali.com](https://support.quali.com/). Quali Support can assist you in testing your network and in adjusting your configuration to help solve these issues..
    :::

## Terminating a driver's instance or script execution

*This procedure applies to Python drivers and scripts. For CloudShell Authoring drivers, see [Removing a driver's instance](../managing-execution-servers/execution-servers-executions-page.md#removing-a-drivers-instance).*
:::note
Driver instances may include multiple command executions while script executions only have one. For brevity, the term "instance" is used for both driver instances and script executions.
:::
Terminating a driver's instance immediately cancels all running commands on that instance, without waiting for them to complete. Therefore, it is recommended to either stop a command or let it run its course instead of terminating.

In some cases, however, terminating an instance is required. For example, if you associate the resource or App to an execution server, but already have an instance of the driver running on a different execution server, that instance will prevent new commands from running on the resource. This is because the instance is associated to the wrong execution server and multiple driver instances of the same component cannot co\-exist in CloudShell. In this case, terminating the driver instance will enable the new commands to run on the correct execution server.

:::note Notes:
- Terminating running commands may cause unexpected behavior. For example, terminating a Teardown command execution on a sandbox with Azure VMs may prevent CloudShell from deleting the sandbox's resource group and VMs from the cloud provider.
- In some cases, terminating a driver's instance in one sandbox may apply to other sandboxes if the resource is shared and is being used in different sandboxes, or in a scenario where concurrent commands are running on the resource.
:::
**To terminate a driver's instance or script execution:**

1. In the **Execution Servers** page, click **Executions**.
    
    The **Executions** view of the page is displayed.
    
2. Click the execution's menu button and select **Terminate**.
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServersStopTerminate.png)
    
3. In the confirmation window, click **OK**. If there are any commands in the queue for this resource, they will run now in a new instance.

## Removing a driver's instance

*This procedure applies to CloudShell Authoring drivers. For Python drivers, see [Terminating a driver's instance or script execution](../managing-execution-servers/execution-servers-executions-page.md#terminating-a-drivers-instance-or-script-execution).*

In some scenarios, you may need to remove a driver's instance.

For example, if you associate the resource or App to an execution server, but already have an instance of the driver running on a different execution server, that instance will prevent new commands from running on the resource. This is because the instance is associated to the wrong execution server and multiple driver instances of the same component cannot co\-exist in CloudShell. In this case, terminating the driver instance will enable the new commands to run on the correct execution server.
:::note
Before you remove an Authoring driver instance, make sure you stop all of the instance's command executions and exclude the execution server on which the instance resides. To exclude an execution server, see [Including/excluding execution servers](../managing-execution-servers/execution-servers-servers-page.md#includingexcluding-execution-servers).
:::
**To remove a driver instance:**

1. In the **Execution Servers** page, click **Executions**.
    
    The **Executions** view of the page is displayed.
    
2. In the row of the required execution, click the menu icon and select **Remove**.
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServersRemove.png)
    

## Related Topics

- [Execution Servers - Overview Page](../managing-execution-servers/execution-servers-overview-page.md)
- [Execution Servers - Servers Page](../managing-execution-servers/execution-servers-servers-page.md)
- [Execution Servers - Commands Queue Page](../managing-execution-servers/execution-servers-commands-queue-page.md)
