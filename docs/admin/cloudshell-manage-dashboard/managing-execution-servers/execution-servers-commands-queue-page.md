---
sidebar_position: 4
---

# Execution Servers - Commands Queue Page

The **Commands Queue** page lists the command executions that are currently in the queue. In addition, it displays the reason why each command is in the queue. This applies to all types of commands in CloudShell, including resource/App/service commands coming from the shell's driver and orchestration commands. For details on developing such commands, see [Driver Deep Dive](../../../devguide/developing-shells/driver-deep-dive.md) and [Script Deep Dive](../../../devguide/develop-orch-scripts/script-deep-dive.md).

![](/Images/CloudShell-Portal/Manage/ExecutionServersCommandsQueue.png)

The information available for each command execution in the **Commands Queue** page includes:

<table>
    <thead>
        <tr>
        <th>Property</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Command Name</td>
            <td>Name of the command in CloudShell</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>**Blueprint** or **Resource**</td>
        </tr>
        <tr>
            <td>Sandbox Name</td>
            <td>Link to the sandbox</td>
        </tr>
        <tr>
            <td>Resource Name</td>
            <td>Name of the CloudShell resource. This field is empty for blueprint commands.</td>
        </tr>
        <tr>
            <td>Enqueue Time</td>
            <td>Time when the command execution entered the queue, set to the time zone defined in CloudShell Portal.</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>
            Reason why the command is in the queue.
:::important
If additional information is available, an exclamation mark (!) is displayed next to the command's status. Hover over the exclamation mark to see a table of matching execution servers. Each row in the table displays an execution server's name and the status, or reason why the command is not running on it. The statuses are explained in the Statuses section below.
:::
            </td>
        </tr>
    </tbody>
</table>

## Statuses

### If no compatible execution server exists:

<table>
    <thead>
        <tr>
        <th>Status</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"New, Waiting to be processed"</td>
            <td>The command has not been processed by CloudShell. CloudShell typically processes new commands within a few seconds, so the command should be processed shortly.</td>
        </tr>
        <tr>
            <td>"Pending, Concurrent commands not enabled"</td>
            <td>
            A command is already running on the resource but the command's shell does not support running multiple commands at the same time, or, if it's a blueprint command, a command is already running on the sandbox but CloudShell is configured to not support multiple blueprint commands at the same time.

To fix this issue, do one of the following:

- Wait for the current command to complete. The enqueued command will run as soon as a command slot is available on the execution server.
- Stop the currently running command that is preventing the enqueued command to run.
- Enable concurrent commands for the resource or blueprints, as follows:
    
    For resources based on 1st Gen Shells, in **Resource Manager Client**, open the Shell's model and in the **Parameters** area, select **Supports Concurrent Commands**. For 2nd Gen Shells, you need to add support concurrent commands in the `shell-definition.yaml` file, as explained in [Drivers and concurrency](../../../devguide/developing-shells/driver-deep-dive.md#drivers-and-concurrency). To enable concurrent blueprint script commands, set the `AllowConcurrentTopologyScriptCommands` configuration key to `true`.
</td>
        </tr>
        <tr>
            <td>"No installed execution servers"</td>
            <td>
            CloudShell cannot find any registered execution servers. In this case, while the command was in the queue, all your execution servers were deleted, possibly through the **Execution Servers - Executions** page.

To fix this issue, install the execution server(s) using the **TestShell Execution Server Configuration Wizard**.
            </td>
        </tr>
        <tr>
            <td>"No execution servers matching attribute requirements (!)"</td>
            <td>
            The command's resource or App is defined to select an execution server by **Execution Server Selector** attributes but no execution server matches the criteria.

To link the element to an execution server, see the appropriate "Controlling execution server selection" section in [Setting Up Execution Servers to Run Commands](../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).
            </td>
        </tr>
        <tr>
            <td>"Execution server with existing driver instance doesn't match attribute requirements (!)"</td>
            <td>
            When a resource command is executed, an instance of the shell's driver is created on the execution server that is running the command.

This is a very specific scenario in which the instance on the execution server is still alive, but the user links the resource's Shell to a different execution server and attempts to run another command on that resource. However, the new command will enter the queue since multiple instances of the same driver cannot co-exist, and the original instance is associated to a different execution server.

To fix the issue, do one of the following:

- Wait for the idle timeout of the original driver instance to pass, which will terminate the instance and enable the new command to run.
- Terminate the original driver instance in the **Execution Servers - Executions** page.
- Add the missing attribute value to the execution server hosting the driver instance.
</td>
        </tr>
    </tbody>
</table>

### If compatible execution servers exist:

<table>
    <thead>
        <tr>
        <th>Status</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"Pending, Waiting to be processed"</td>
            <td>CloudShell typically processes enqueued commands within a few seconds, so the command will either be processed shortly or executed on a compatible execution server, as soon as one is available.</td>
        </tr>
        <tr>
            <td>"No Available Execution Server (!)"</td>
            <td>
            CloudShell has execution servers that can run the command, but none are available at the moment. To see why the execution servers are unavailable, hover over the more info icon.

Possible reasons are that the execution servers are:

- Excluded
- Offline
- Set to have a zero command slots capacity
- All command slots are being used.
</td>
        </tr>
    </tbody>
</table>

## Related Topics

- [Execution Servers - Overview Page](../managing-execution-servers/execution-servers-overview-page.md)
- [Execution Servers - Servers Page](../managing-execution-servers/execution-servers-servers-page.md)
- [Execution Servers - Executions Page](../managing-execution-servers/execution-servers-executions-page.md)
