# Configure the Self-Service Portal

CloudShell Portal is a self-service web client. This article describes how to configure the CloudShell Portal.
:::tip
If you are installing or upgrading CloudShell, this CloudShell Portal configuration wizard will open automatically as part of the setup process. if you are manually updating the application, open the wizard, as explained in [Configure Application Settings](../configure-app-settings.md).
:::
## Install the required IIS version

CloudShell Portal requires a compatible IIS site. You can install and configure the IIS site manually or select the **Use IIS Express** option if you want CloudShell to do it automatically. Note that IIS Express option does not allow configuring CloudShell Portal to work over HTTPS.

- Use the **IIS configuration** window to install the required IIS version.
    
    ![](/Images/IG2/Check-for-CloudShell-required_35.png)
    
    The Portal is installed in the folder:
    
    `C:\Program Files (x86)\Qualisystems\CloudShell\Portal`
    

## IIS configuration with IIS Express

When the **Use IIS Express** option is selected, setup installs IIS Express if it does not already exist on the server machine:

- CloudShell installs an IIS Express version that is compatible with the OS platform.
- Earlier versions of IIS Express are uninstalled from your machine.

The default configuration uses port 80 as the port number and localhost as the address. You can configure these settings during the installation, or modify them later by launching the Quali Server configuration utility.

**To load the portal:**

1. Open a browser and enter the `localhost:Port# address` for a local machine, or the `IP:port/DNS:port address` for remote access.
2. In the **Administrative Tasks** window (see [Admin Configuration Settings](../admin-config-settings.md)), set the admin password, email, and SMTP settings, assign users to groups and domains, and update data.
3. Optionally, designate the port manually by entering an available port number in the `Port` field text box. The installer notifies you if the port that you specified is unavailable.
4. Open **IIS Manager**, select **Request Filtering**, click **HTTP Verbs** and make sure the **PUT** and **DELETE** verbs are enabled on the website.

## IIS configuration using the IIS manual option

This section explains how to install IIS website manually.

Manual IIS configuration is a three step process:

1. [Manually install IIS on Supported Windows Server OS](../../configure-products/configure-portal/index.md#manually-install-iis-on-supported-windows-server-os)
2. [Manually create the IIS website](../../configure-products/configure-portal/index.md#manually-create-the-iis-website)
3. Use the new CloudShell Portal website

### Manually install IIS on Supported Windows Server OS

Before installing CloudShell Portal, make sure you are using a machine that has a CloudShell Portal-supported OS. For details, see [Minimum Requirements for CloudShell Servers and Clients](../../../cs-system-requirements/min-requirements-for-cs.md).

**Supported versions**

- IIS 8.0-10.0
- Windows Server 2012-2022

**To install IIS on Windows Server:**

1. Install IIS on your CloudShell Portal machine.
    :::note
    To install IIS 8.0 on Windows 2012, see this [Microsoft TechNet](https://technet.microsoft.com/en-us/library/hh831475(v=ws.11).aspx) article.
    :::
2. If you are using IIS 8 with Windows Server 2012 or Windows Server 2012 R2, make sure to install the **Web Server** role within the **Server Manager** Windows application. This sub-role enables IIS to use the ASP.NET for running the CloudShell Portal.  
     <details>
     <summary>More...</summary>
    
    1. Open **Server Manager**.
    2. Click **Add roles and features**.
        
        ![](/Images/IG2/Server-Manager-Add-roles.png)
        
    3. Click **Next** until you reach the **Server Roles** page.
    4. Select **Web Server**.
        
        ![](/Images/IG2/Server-Manager-Web-Server-role.png)
        
    5. In the confirmation window, click **Add Features**.
        
        ![](/Images/IG2/Server-Manager-Add-Features.png)
        
    6. Click **Next**. In the **Features** page, select **.NET Framework 4.6 Features** and check all the child features. If .NET Framework 4.6 is not available, select the latest version.
        
        ![](/Images/IG2/Server-Manager-NET-Framework-Features.png)
        
    7. Click **Next**. In the **Role Services** page, click **Application Development** and select all .NET 4.6 components.
        
        ![](/Images/IG2/Server-Manager-Role-Services.png)
        
    8. Click **Next** and then **Install**.
     </details>
3. Next, manually create the IIS website.

### Manually create the IIS website

Manual Portal IIS website configuration is a three step process:

- [Create a new website in IIS Manager](../configure-portal/index.md#create-a-new-website-in-iis-manager)
- [Enter the port you configured](../configure-portal/index.md#enter-the-port-you-configured)
- [Test portal settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-cs-portal.htm?tocpath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CConfigure%20CloudShell%20Products%7CConfigure%20the%20Self-Service%20Portal%7C_____0#Test)

Optional steps:

- [Enable dynamic compression on your IIS settings](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/Bst-Prctcs-cs-portal.htm#(Optiona)): Enables dynamic compression to improve transmission times between IIS and CloudShell Portal.
- [Enhance IIS website security](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/Bst-Prctcs-cs-portal.htm#Enhance): Enahnces the website's security by only allowing cookies that come from an HTTP source.

### Create a new website in IIS Manager

This procedure assumes that CloudShell Portal and Quali Server are installed on the same machine.

**To create a new website in IIS Manager:**

1. Open the IIS Manager by running the following command at the command prompt:
    
    ```javascript
    inetmgr.msc
    ```
    
2. In the **Connections** window, right-click **Sites**.
    
    ![](/Images/IG2/Check-for-CloudShell-required_37.png)
    

3. In the context menu, select **Add Web Site**.
    
    ![](/Images/IG2/Check-for-CloudShell-required_38.png)
    
4. Define the web site settings as follows:
    1. In the **Site name** field, specify a name for the site.
    2. In the **Content Directory** field, specify a **Physical Path**, pointing to the portal folder.
    3. (For HTTPS only) Set the **Binding Type** to **https**.
    4. (For HTTPS only) Set your **SSL certificate**.
    5. Click **OK** to submit the changes.
        
        ![](/Images/IG2/Check-for-CloudShell-required_39.png)
        
5. In the **Connections** pane, click **Application Pools** and select the application pool with the new website's name, in the **Actions** pane on the right, click **Basic Settings**.
    
6. In the **Edit Application Pool** window, edit the application pool that was created for your website. Make sure the **.NET CLR Version is v4.0.x** or later.
    
    ![](/Images/IG2/Check-for-CloudShell-required_40.png)
    
7. Go to the `~\Qualisystems\Cloudshell\Portal\customer.config` file and change the value for `LoadIISExpress` to `False` in the following key:
    
    `<add key="Portal.LoadIISExpress" value="False" />`
    
8. In IIS Manager, do the following:
    1. In the **Connections** pane, click **Sites** and select the newly created website.
    2. Double-click **Request Filtering** and click **HTTP Verbs**.
    3. Make sure the **PUT** and **DELETE** verbs are enabled on the website. If they are not, add them by using the **Allow Verb**... option in the **Actions** pane on the right.
    4. Start the website.
9. Browse to the website and test it.
    :::note
    Skype and perhaps other applications might block certain ports. For example, Skype blocks the default HTTPS port 443.
    :::

**Troubleshooting Portal access errors:**

- "403.14 Forbidden" error: Follow the steps in this Microsoft Support article: [https://docs.microsoft.com/en-us/troubleshoot/iis/http-403-14-forbidden-webpage](https://docs.microsoft.com/en-us/troubleshoot/iis/http-403-14-forbidden-webpage)
- "CloudShell Portal could not be contacted" error: Follow the steps in [Manual IIS Installation Error](https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/Manual-IIS-installation-error.htm)
- "HTTP Error 500.19" or "500 - Internal server error" errors: Open the **Server Manager** Windows application, under **Server Roles**, select **Web Server>Web Server>Application Development>ASP.NET 4.6** (If ASP.NET 4.6 is missing, select the latest available version).
    
    ![](/Images/IG2/ASP.NET-4.6.png)
    

#### Enter the port you configured

In order to test connectivity, the CloudShell Configuration Wizard requires the port number.

**To specify the IIS website port:**

1. In the CloudShell Portal configuration wizard's **IIS configuration** page, select **Set IIS manually**.
    
    ![](/Images/IG2/Check-for-CloudShell-required_36.png)
    
2. In the **Enter the port you configured** field, specify the port that you entered in the **Add Web Site** window.
3. Next, optionally enable dynamic compression to speed up transmission times between the IIS website and CloudShell Portal or proceed to test the portal settings. For details, see [Best Practices for CloudShell Portal](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/Bst-Prctcs-cs-portal.htm).

**Test portal settings**

**To test the portal settings:**

1. In the CloudShell Portal configuration wizard's **IIS configuration** page, click **Check Now**.
    
    If you see any errors, see [Troubleshooting Portal access errors:](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-cs-portal.htm?tocpath=Installation%20and%20Configuration%7CCloudShell%20Suite%7CConfigure%20CloudShell%20Products%7CConfigure%20the%20Self-Service%20Portal%7C_____0#Troubleshooting-portal-access-errors).
    
2. Click **Next**.
    
3. Next, complete the CloudShell Portal Wizard and make sure you can access CloudShell Portal.

## IIS configuration changes when browsing to CloudShell Portal (WebDAV)

In older versions of Windows Server and IIS, you may need to add WebDAV manually to your website's `web.config` file. Running CloudShell Portal without WebDAV will block simple HTTPS requests including PUT and DELETE requests. To make sure that WebDAV is enabled on your website, try adding a CloudShell component such as a resource or App to the blueprint/sandbox diagram in CloudShell and if the operation fails with no indication, perform these steps.

**To modify the Web.config file:**

1. Go to the `<Installation Drive>\QualiSystems\CloudShell\Portal\Web.config` file and locate the following XML element:
    
    ```javascript
    <configuration>
        <system.webServer>
            <modules>
    ```
    
2. Add the following element under it:
    
    ```javascript
    <remove name="WebDAVModule" />
    ```
    
3. Locate the following XML Element:
    
    ```javascript
    <configuration>
        <system.webServer>
            <handlers>
    ```
    
4. Add the following element under it:
    
    ```javascript
    <remove name="WebDAV" />
    ```
    
5. Save the `Web.config` file.
6. Restart CloudShell Portal.

## Related Topics

- [Set the Timeout Period for CloudShell Portal](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-cs-portal-timeout.htm)
- [Configuring CloudShell Portal to Work in HTTPS Mode](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Appendices/cs-portal-https.htm)