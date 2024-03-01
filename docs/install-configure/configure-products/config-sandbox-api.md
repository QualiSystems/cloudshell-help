---
sidebar_position: 10
---

# Configure CloudShell Sandbox API

The CloudShell Sandbox API service is installed by the CloudShell Installation wizard (as described in [Install CloudShell Sandbox API](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Complete%20Installation/instl-cs-sndbox-api.htm)). Since CloudShell Sandbox API is a service, you can install it on the same machine as the CloudShell Portal/Quali Server or on a different machine, and also install it on several machines (and can configure the settings accordingly). Having multiple Sandbox API services is useful if you have security issues and don’t want to allow connectivity from other automation clients to Quali Server or for scenarios where you have multiple Continuous Integration servers in different parts of the lab consuming sandboxes.
:::note
The default port for the CloudShell Sandbox API in the Quali Server is 82. You can customize this port number, as required.
:::
**To customize the port settings for accessing the CloudShell Sandbox API:**

1. In the CloudShell Configuration Wizard, click **CloudShell Sandbox API** to open a web page, where you can customize the **Port Number** for accessing the API to suit your needs.
    
    ![](/Images/IG2/Configuring-CloudShell-Sandbox.png)
    
2. When the CloudShell Sandbox API is installed on a different machine than the CloudShell Portal, in the **Quali Server Address** field, you can specify the host name or IP address of the Quali Server.
3. Click **Save** to save the settings. (If you wish to revert the settings, click **Revert**.)