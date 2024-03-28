---
sidebar_position: 1
---

# PowerShell Execution Policy (High Availability)

## Error Message

:::danger &nbsp;
Incorrect function
:::

## Description

The Quali High Availability (HA) solution uses PowerShell code to manage the cluster.

The error message occurs in an HA deployment where PowerShell scripts are used to manage the cluster.

If, after starting the Quali Server role from the **Windows Failover Cluster Manager**, the role fails with an ‘incorrect function’ error, run the steps below.

:::note
This error can be found both in the **Windows Failover Cluster Manager** and in the Windows Event Viewer.
:::

## Solution

**Follow these steps to ensure that the execution policy is unrestricted on the machine where the code is executed:**

1. Open **PowerShell** as Administrator.
2. Run the following command: `Get-ExecutionPolicy`.
    
    The command should return the result: **Unrestricted**.
    
3. If this result is not received, run the following command: `Set-ExecutionPolicy Unrestricted`
4. In the registry, make sure that the following key value is unrestricted:
    
    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell`
    
    ![](/Images/Troubleshoot/PowerShell-Execution-Policy1.png)
    
5. Restart the **Quali Server** role.
6. If you're still not getting the **Unrestricted** result, run:
    
    `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser`
