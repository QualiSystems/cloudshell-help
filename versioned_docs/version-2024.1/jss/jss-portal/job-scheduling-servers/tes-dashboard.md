---
sidebar_position: 1
---

# Test Execution Servers Dashboard
    
Test execution servers are managed in the Job Scheduling Portal and execute Robot Framework tests. For additional details, see [Test Execution Service](../../../install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/index.md).

![](/Images/JSS/JssJobSchedulingServers.png)

The following details/actions are provided for each test execution server:

- **Include** toggle to include/exclude a test execution server (green is included - ![](/Images/JSS/JssJobSchedulingServersToggle_37x22.png))
- **Name** of the test execution server
- **Status**: Current status of the test execution server (**Online/Offline**). The New Job Scheduling brings test execution servers offline if it cannot communicate with a particular server or if the server is not running.
- **Associated Domains**: Domains the test execution server can be used in.
    
- **Test Type**: The type of tests this test execution server can execute
- **Address**: The test execution server's IP address and port
- **Running Jobs / Capacity**: Number of currently running jobs and the capacity (maximum number of jobs this test execution server can run at the same time).
- more actions button: Includes the option to delete this test execution server
    
    ![](/Images/JSS/jssMoreActionsMenu.png)
    

## Including/excluding a test execution server

Admins can include and exclude test execution servers from the New Job Scheduling Portal. This is especially useful if you're running maintenance on a test execution server and don't want anyone to use it during that time.

**To exclude a test execution server:**

1. In the New Job Scheduling Portal, click **Job Scheduling Servers**.
    
    The **Job Scheduling Servers** page is displayed. Test execution servers that are included have a green toggle.
    
2. Click the toggle. In the window that appears, optionally provide a reason and confirm the action.
    
    ![](/Images/JSS/JssJobSchedulingServers-TES-Included_183x76.png)
    
    The toggle changes to gray.
    
    ![](/Images/JSS/JssJobSchedulingServers-TES-Excluded_183x89.png)
    
3. To include the test execution server, click the toggle again.
    

## Changing a test execution server's domain associations

Test execution servers can be associated to a specific domain or to all domains.

To illustrate how this works, consider a scenario where you have several domains. You could have dedicated test execution servers for each domain that physically reside on the domain servers, and maybe several test execution servers that are associated to all domains. And whenever a test is executed, CloudShell will look for an available test execution server that is either directly associated to that specific domain or to **Any Domain**.

**To change a test execution server's domain association:**

1. In the New Job Scheduling Portal, click **Job Scheduling Servers**.
    
    The **Job Scheduling Servers** page is displayed.
    
2. Click the test execution server's **Associated Domains** drop-down list and select the suitable option.
    

## Deleting a test execution server

:::info Important
Before you delete a test execution server, please note that all test executions running on this test execution server will be stopped.
:::

**To delete a test execution server:**

1. In the New Job Scheduling Portal, click **Job Scheduling Servers**.
    
    The **Job Scheduling Servers** page is displayed.
    
2. Click the test execution server's more action button and then select **Delete**.
    
    ![](/Images/JSS/JssJobSchedulingServersDeleteTES_149x91.png)
    
3. Confirm the action.
    
    ![](/Images/JSS/JssJobSchedulingServersDeleteTESConfirmation_353x211.png)