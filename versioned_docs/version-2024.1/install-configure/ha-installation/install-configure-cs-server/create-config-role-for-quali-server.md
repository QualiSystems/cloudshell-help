---
sidebar_position: 4
---

# Creating a Configuration Role for Quali Server

## Preparing the nodes

1. Run the following on each Quali Server node:
    
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\Functions.ps1
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServer.ps1
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServerCommonFunctions.ps1
2. To enable PowerShell commands, add **Dword Enable** in registry key:
    
    **HKEY\_LOCAL\_MACHINE\\Software\\Microsoft\\Windows Script Host\\Settings**
    

## Creating a configuration role

1. Make sure the **Quali Server** service is stopped on all Quali Server nodes.
2. Open **Windows Failover Cluster Manager**.
    
    ![](/Images/HA1/Creating-a-Configuration-Role_161x117.jpg)
    

3. Right-click **Roles**.
    
    ![](/Images/HA1/Creating-a-Configuration-Role_217x172.png)
    

4. Select **Configure Role**.
5. Click **Next**, select the **Generic Script** option, then click **Next**.
6. Enter the path to the `Quali.vbs` file (for example: `c:\Quali\QualiServer\Quali.vbs`).
7. Enter a name for the role and click **Next**.
8. Click **Next** to complete the wizard.
    
    This creates a new role that starts to run. This role uses the PS1 files to operate Quali server and elasticsearch during cluster events.
    
    ![](/Images/HA1/Creating-a-Configuration-Role_1.jpg)
    
    :::tip
    If the role fails to start with an "incorrect function” error, see [CloudShell Troubleshooting](../../../troubleshooting/installation/powershell-execution-policy-high-availability.md).
    :::