---
sidebar_position: 5
---

# TestShell Database Permissions

## Error Message

:::danger &nbsp;
Windows Service Logon Info

The service is unable to logon to the Database. The user "LocalSystem” does not have permission to connect to "TestShell” database.

![](/Images/Troubleshoot/Windows-Service-Logon-Info.png)
:::

## Description

The above error may appear when creating a new database or using an existing database on a remote database server.

## Possible Causes

Local user does not have permission to open a remote database.

## Solution

**To grant CloudShell users permissions for a database on a remote machine:**

1. In the **User** field of the **Windows Service Logon Info** dialog box, enter the Local System user or Domain User name.
2. Specify the full path, for example:
    
    `<Domain>\<Username>`
    
    -or-
    
    `<Local User on RemoteMachine>\<Username>`
    
3. In the Password field, enter the user’s password.
4. Confirm the user password and click OK to proceed.
