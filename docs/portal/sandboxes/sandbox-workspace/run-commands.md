---
sidebar_position: 8
---

# Run Commands

This article explains how to run, track and troubleshoot resource and blueprint commands in a sandbox. To use commands in a sandbox, add the appropriate resources and orchestration scripts to the blueprint in CloudShell. CloudShell supports the following commands:

- CloudShell Authoring .NET drivers (attached to blueprint)
- Python scripts or ZIP files (attached to blueprint/resources)
- Configuration Management bash/PowerShell scripts or Ansible playbooks (attached to resource)

For additional information about commands and scripts, see [CloudShell Terminology](../../../intro/Term.md).

In this article:

- [Blueprint commands](#blueprint-commands)
- [Resource commands](#resource-commands)
- [Viewing command output information](#viewing-command-output-information)
- [Stopping commands during execution](#stopping-commands-during-execution)
- [Error reporting](#error-reporting)

## Blueprint commands

Blueprint commands can be used to orchestrate sandbox-level operations.

**To run a blueprint command:**

1. In the sandbox toolbar, click **Commands**.
    
    The **Blueprint Commands** pane is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Blueprint-Scripts-Pane.png)  
    
2. Optionally, if the command has inputs, in the command row click ![](/Images/CloudShell-Portal/Lab-Management/Reservations/inputs-icon_19x22.png).
    1. Enter the required inputs.
    2. To run the command, click **Run**.
   
3. To run a command with no inputs, click the command's ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Run-Script_29x29.png) button.
    
    An indication message is displayed in the sandbox workspace to notify that the command was called.
    
    When the command completes, the completed status is displayed.  
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Script-Complete.png)
    

## Resource commands

In addition to sandbox-level orchestration, individual resources, Apps and services can also contain automation operations that can be executed from the sandbox workspace.

:::note
Deployed Apps provide default power commands. For additional information, see [Apps in Sandboxes](./apps/run-app-commands.md).
:::

**To access the Commands pane:**

1. Hover over the resource, App or service and select the **Commands** option from the context menu.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Running Commands_2_335x137.png)
    
    The **Commands** side pane is displayed, listing the resource commands.
    
2. Click the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Running-Commands_1_25x25.png) button to launch the command immediately. If the command has inputs, click the ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Running-Commands_3_21x22.png) button, specify the input values and click **Run**.
    
    When the command completes, the completed status is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Blueprint-Scripts-Pane.png)
    
:::note
Removing a resource does not stop the resource’s running or queued commands. In this case, the command will fail and an indication message will be displayed in the feeds.
:::

## Viewing command output information

For additional information, see [Viewing System Messages](../../../portal/sandboxes/sandbox-workspace/system-messages).

## Stopping commands during execution

All users can stop blueprint script commands during execution. Orchestration commands, such as Setup and Teardown cannot be stopped once they start running.

Users can stop resource /App commands only if the shell's developer enabled the option to do so.

**To stop a resource or App command's execution:**

- In the **Resource Commands** or **App Commands** pane, click the **Stop** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/StopScriptCmd_21x20.png) button on the command execution you want to stop.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/ResourceCommandsPaneStop.png)
    
    The command's execution stops running. If you are an admin, the **Stop** button changes to **Terminate** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/TermPythDrvr_20x20.png). Unlike **Stop**, which gracefully shuts down the command, **Terminate** will immediately cancel the command's execution.
    
    :::note Notes    
    - Terminating running commands may cause unexpected behavior. For example, terminating a Teardown command execution on a sandbox with Azure VMs may prevent CloudShell from deleting the sandbox's resource group and VMs from the cloud provider.
    - In some cases, terminating a driver's instance in one sandbox may apply to other sandboxes if the resource is shared and is being used in different sandboxes, or in a scenario where concurrent commands are running on the resource.
    :::
    

**To stop a blueprint command's execution:**

- In the **Blueprint Commands** pane, click the **Stop** ![](/Images/CloudShell-Portal/Lab-Management/Reservations/StopScriptCmd_26x24.png) button on the command execution you want to stop.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/Blueprint-Scripts-Pane-Stop.png)
    
    :::note
    If errors occur when attempting to stop a command or a test during execution, please contact Quali Support at: [support.quali.com](https://support.quali.com/). Quali Support can assist you in testing your network and in adjusting your configuration to help solve these issues.
    :::
    

## Error reporting

Exceptions are thrown for failed commands that are unexpectedly terminated. When an exception occurs, CloudShell displays an error notification message to the end user - see [Viewing System Messages](../../../portal/sandboxes/sandbox-workspace/system-messages). CloudShell logs detail the causes of the exception.

You may want to consider using Python exception handling capabilities to when CloudShell generates control error notifications (to limit notifications for specific exceptions).

The stack trace error log is located in: `...ExecutionServer\Logs\QsPythonDriverHost_*.log`

## Related Topics

- [Apps in Sandboxes](../../sandboxes/workspace/apps)
- [Creating Blueprints](../../blueprints/creating-blueprints/index.md)
- [Create Blueprint Commands](../../blueprints/creating-blueprints/create-blueprint-commands.md)
- [Configure Blueprint Orchestration](../../blueprints/creating-blueprints/configure-orchestration.md)