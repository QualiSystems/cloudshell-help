---
sidebar_position: 1
---

# License Server Installation

**To install the License Server:**

- Follow the License Server installation procedure in [Select a CloudShell License](../../../cloudshell-suite/configure-products/select-a-license.md).

## Preparing the nodes

1. Run the following on each Quali Server node:
    
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\Functions.ps1
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServer.ps1
    - Unblock-file C:\\Quali\\QualiHa\\QualiServer\\QualiServerCommonFunctions.ps1
2. To enable PowerShell commands, add **Dword Enable** in registry key:
    
    **HKEY\_LOCAL\_MACHINE\\Software\\Microsoft\\Windows Script Host\\Settings**
    

## Configuring each node with License Server

**To configure each node in the system:**

1. Install License Server on each node.

2. Configure the License Server. Use [CloudShell Suite Installation and Configuration](../../../cloudshell-suite/configure-products/select-a-license.md) for more information about License Server Installation.

3. Apply the license.

## Create a Configuration Role for WSFC

**To create a configuration role:**

1. Open **Windows Failover Cluster Manager**.
    
    ![](/Images/HA1/License-Server-installation_161x116.jpg)
    

2. Right-click **Roles** and select **Configure Role**.

3. Click **Next**, select the **Generic Script** option, then click **Next**.

4. Enter the path to the `LicenseServer.vbs` file.
    
    (for example: `c:\Quali\LicenseServer.vbs`)
    

5. Enter a name for the role and click **Next**.

6. Click **Next** to complete the wizard.
    
    This creates a new role that starts to run cluster events.
    
    ![](/Images/HA1/License-Server-installation.png)