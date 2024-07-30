---
sidebar_position: 4
---

# Configure Sandbox API to Work in HTTPS Mode

The section describes how to set up CloudShell Sandbox API to run in secure mode (https).

Before you begin make sure you have an SSL certificate installed on your CloudShell Portal IIS server.

**To configure Sandbox API to run in HTTPS mode:**

1. Make sure you have the `server.key` and `server.crt` Portal IIS certificate files or convert file/s you have to these two files (using the `openssl` tool, for example).
2. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\SandboxApiGateway\win64\ssl` folder, and place the `server.key` and `server.crt` IIS certificate files in this folder (If the folder does not exist, create it).
3. In the `C:\Program Files (x86)\QualiSystems\CloudShell\SandboxApiGateway\conf\httpd.conf` file, uncomment the "Define UseSSL” line:
    
    ![](/Images/IG2/Snbx-api-httpd.conf.png)
    :::tip Important
    The instructions in this article are sufficient. Do not follow the instructions provided in the file.
    :::
4. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\SandboxApiGateway\customer.config` file, and add the following key :
    
    `<add key="Frost.PortSSL" value="3443"/>`
    
    Replace the default port number of "3443” as required.
    :::note
    To reset the CloudShell Sandbox API port number, see [Configure CloudShell Sandbox API](../configure-products/config-sandbox-api.md).
    :::
5. Make sure to keep a back up of these files as they may be overwritten/deleted when upgrading CloudShell to a new version or patch.
6. Restart the **CloudShellSandboxAPIGateway** service.