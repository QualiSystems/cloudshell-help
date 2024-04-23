---
sidebar_position: 1
---

# SSO Tester

The SSO Tester utility allows you to test the Saml2 configuration on a CloudShell system with predefined SSO SAML integration. It is used to ensure that the SSO implementation works with your IdP and local configurations. We recommend using the SSO Tester utility on your staging environment before implementing CloudShell with Saml2 SSO in your production environment.

## Prerequisites

Before using the SSO Tester utility, make sure to:

1. [Install the SSO Tester utility](#install-the-sso-tester-utility)
2. [Create a new website in IIS Manager](#create-a-new-website-in-iis-manager)
3. [Configure CloudShell to work with SAML SSO](./index.md#configure-cloudshell-to-work-with-saml-sso)
:::note
Make sure you have IIS installed on your machine. The SSO Tester utility does not work on machines on which the default IIS Express is installed.
:::
### Install the SSO Tester utility

The SSO Tester package includes a web application that tests SSO integration with CloudShell Portal.

**To install the SSO Tester utility:**

1. Download the [SSO Tester](https://qualisystems.hosted-by-files.com/Downloadcenter/Platform%20Extensions/SSOTester/SSO%20Tester%207.2.exe) package file.
2. Extract the contents of the compressed archive to your local directory.

### Create a new website in IIS Manager

**To create a new website in IIS Manager:**

1. Open IIS Manager.
    
2. In the **Connections** pane, right-click **Sites**.
    
    ![](/Images/Admin-Guide/User-Management/SSO_Check-for-CloudShell-required_1.png)
    
3. Select **Add Website**.
    
    ![](/Images/Admin-Guide/User-Management/SSO_Check-for-CloudShell-required_2_559x541.png)
    
4. In the **Site name** field, specify a name for the site.
5. In the **Content Directory** field, specify a **Physical Path**, pointing to your CloudShell installation's `Portal` folder (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Portal`).
6. In the **Binding** field, specify an available port and click **OK**.
    
    ![](/Images/Admin-Guide/User-Management/SSO_Check-for-CloudShell-required_3.png)
    
7. In the **Connections** pane, click **Application Pools**.
    
8. In the **Application Pools** window, double-click your new website.
    
    ![](/Images/Admin-Guide/User-Management/SSO_Check-for-CloudShell-required_4.png)
    
9. In the **Edit Application Pool** window, edit the application pool that was created for your website.
10. Verify that the **.NET CLR version is 4.0.\***.
11. Select the **Start application pool immediately** checkbox, and click **OK**.
12. In the **Connections** pane, click your website, then in the **Actions** pane, under **Manage Website**, click **Restart**.
13. If you are using IIS 8 with Windows Server 2012 or Windows Server 2012 R2, make sure to install the 'Web Server' role within the server manager.
14. After selecting the web server role, click **Next** and in the **Role Services** section, under **Application Development**, select **ASP.NET 4.5**.
    
    This sub-role enables IIS to use the ASP.NET 4.5 for running the CloudShell Portal.
    

## Using the SSO Tester utility

**To use the SSO Tester utility:**

1. Browse to the location to which you extracted the tester. Open the `customer.config` file, and add the URL of the newly created website to the following key:
    
    `<add key="CustomAbsoluteLoginPage" value="http://[server]/AuthServices/SignIn" />`
    
2. In the same folder, open the `kentor.config` file, and add the URL of the newly created website as the value of both the `entityId` and `returnUrl` attributes of the following key:
    
    ```javascript
    <kentor.authServices entityId="http://CloudShellPortalURL/AuthServices" returnUrl="http://CloudShellPortalURL/">
    ```
    
3. Edit the `kentor.config` file, according to the requirements described in [Sample file requirements](./index.md#sample-file-requirements).
4. Open CloudShell Portal.
    
    You are redirected to the IdP login page.
    
5. Log in with the credentials of one of the users you defined in the IdP.
    
    A test page with the attributes returned by the IdP is displayed.
    
6. If errors are displayed, make the required changes and reload the website.
    :::note Notes
    - If error message HTTP Error 500.19 is issued, change the permissions of the SSO Tester's Portal folder and reload the website.
    - If changes were made to the `kentor.config` file, reset the application in the IIS Manager.
        
        ![](/Images/Admin-Guide/User-Management/SSO_Restart-IIS.png)
    :::