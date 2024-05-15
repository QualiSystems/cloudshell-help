---
sidebar_position: 2
---

# Configure Sisense to Work with SSO

Use the instructions in the following procedure to configure Insight to work with SSO. This requires configuring SSO on Sisense, the BI analytics tool used by Insight. You can do this via CloudShell's **Insight** tab or directly through the Sisense application.

**Prerequisites:**

- [Grant Data Security Permissions to ElastiCube Name](../install-insight/insight-configuration/grant-permissions.md)
- [Configure HTTPS Connection Between CloudShell Portal and Sisense](../install-insight/insight-configuration/configure-https.md) (mandatory if the CloudShell Portal is configured to use HTTS)

**To configure Sisense to work with SSO:**

1. In the **Insight** tab, click **Admin** and select **Single Sign On** from the left menu.
2. Enable the **Single Sign On Configuration** check box.
3. Select the SSO method to use: **JWT**.
4. In the **Remote Login URL** field, add the following URL:
    
    http://\[CloudShell Portal Address\]:\[CloudShell Portal Port\]/Account/SisenseLogin
    
    :::note Notes    
    - \[CloudShell Portal Address\] is the IP address or hostname that users enter in order to browse to CloudShell Portal.
    - \[CloudShell Portal Port\] is the port to use (required if default port 80 is not used).
    :::    
    
    ![](/Images/BI/Configure-Sisense-to-Work_2.png)
    
5. Copy the Shared Secret string.
6. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:
    
    `<add key="BiSSOSecret" value="shared-secret-value"/>`
    
7. Save the file and restart the **CloudShell Portal IIS** service.