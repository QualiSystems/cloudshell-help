---
sidebar_position: 2
---

# Execution Servers - Servers Page

In the **Servers** page, you can view and manage the execution servers in CloudShell.

![](/Images/CloudShell-Portal/Manage/ExecutionServersServersPage.png)

The information available for each execution server in the **Servers** page includes:

| Property | Description |
| --- | --- |
| Server | Name and description |
| Type | (Relevant if you are using **Job Scheduling** and a custom-developed execution server)<br/>Indicates if the Execution Server is a CloudShell Execution Server (Windows or Linux-based) or a custom-developed Execution Server. For example, "TestShell" indicates standard CloudShell execution servers that run commands and TestShell tests. |
| Status | **Included** or **Excluded** |
| Connection | **Online** or **Offline**<br/>If you are experiencing network-related issues between Quali Server and the Execution Server, for example, the Execution Server's connection status changes frequently from online to offline, please contact Quali Support at: [support.quali.com](https://support.quali.com/). Quali Support can assist you in testing your network and in adjusting your configuration to help solve these issues. |
| Activity | Indicates if the execution server is doing anything at the moment. For example, **Idle** (no tests/commands are running) or **3 Running** (3 executions are currently running) |
| Job Slots | Displays the permitted number of concurrent jobs |
| Command Slots | Displays the permitted number of concurrent commands |
| Host Name | Displays the host name of the machine on which the execution server is installed. Hover over the host name to see the machine's operating system. |

## Including/excluding execution servers

Execution servers need to be excluded in certain situations. For example, when doing maintenance work on a particular machine and you don't want anybody to use it.

In addition, the execution server may exclude itself in the event of a runtime error.

:::note Important
Excluding an execution server basically means that we're excluding it from new assignments, so when you exclude an execution server, it will complete any running jobs/commands but new ones will be handled by an available execution server.
:::
**To change the status of the execution server:**

1. In the **Execution Servers** page, click **Servers**.
    
    The **Servers** view of the page is displayed.
    
2. Click the execution server's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select the appropriate option.![](/Images/CloudShell-Portal/Manage/ExecutionServersIncludeExclude.png)

## Viewing the current execution activity of an execution server

**To view the execution activity of an execution server:**

1. In the **Execution Servers** page, click **Servers**.
    
    The **Servers** view of the page is displayed.
    
2. Click the execution server's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **View Executions**. Alternatively, click **Executions** from the left menu.

## Setting attribute values

In order to improve performance and stability in CloudShell deployments that include multiple geographically distributed sites, it is recommended to configure the deployment process of resource and App commands to run on execution servers that are physically closest to those elements. This is also used to restrict CloudShell's blueprint commands to run on a dedicated execution server or group of execution servers.

This is done by associating an attribute that has the **Execution Server Selector** rule to the resource or App. And setting the same attribute value on that resource or App and on the execution server or execution servers that will deploy the element's commands. For blueprint commands, the attribute needs to be created, and linked to blueprint command executions using the `EnvironmentCommandsESRestrictions` configuration key. For additional information, see the "Controlling execution server selection" sections in [Setting Up Execution Servers to Run Commands](../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).

**To set an attribute value on an execution server:**

1. In the **Execution Servers** page, click **Servers**.
    
    The **Servers** page is displayed.
    
2. Click the name of the execution server or click the execution server's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Attributes**.
    
    The **Attributes** dialog box is displayed, showing the **Execution Server Selector** attributes in CloudShell.
    
    ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersAttributes.png)
    
3. Select the check box of the appropriate attribute and specify the value that is set on the resource's attribute. For example, the domain name.
    
4. Click **Done**.

## Deleting an execution server

**To delete an execution server from CloudShell:**

1. In the **Execution Servers** page, click **Servers**.
    
    The **Servers** view of the page is displayed.
    
2. Click the execution server's menu button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select **Delete**.

## Related Topics

- [Execution Servers - Overview Page](../managing-execution-servers/execution-servers-overview-page.md)
- [Execution Servers - Executions Page](../managing-execution-servers/execution-servers-executions-page.md)
- [Execution Servers - Commands Queue Page](../managing-execution-servers/execution-servers-commands-queue-page.md)
