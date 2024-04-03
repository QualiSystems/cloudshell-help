---
sidebar_position: 2
---

# Manual IIS Installation Error

## Error Message

:::danger &nbsp;
CloudShell Portal could not be contacted.

Please check your settings.
:::

## Description

When manually installing the **CloudShell IIS** site using the Set IIS manually option in the **Configuration Wizard - CloudShell Portal**, an error is displayed if the "IIS\_Users" group is not permitted on the CloudShell Portal installation directory.

## Solution

**To resolve the issue described above, follow these steps:**

1. Go to the `<Installation drive>\Program Files (x86)\QualiSystems\CloudShell\` directory.
2. Right-click the `Portal` directory and select **Properties**.
3. In the **Portal Properties** dialog box, click the **Security** tab.
    
4. In the **Permissions for Portal** dialog box, click **Edit** and add the **IIS\_IUsrs** group to the Portal installation directory.
    
    For example:
    
    ![](/Images/Troubleshoot/WebConfigPermissions.png)
    
5. Click **OK**.
6. Click **OK** in the **Portal Properties** dialog box.

## Related Topics

[Configure the Self-Service Portal](../../install-configure/cloudshell-suite/configure-products/configure-portal/index.md)
