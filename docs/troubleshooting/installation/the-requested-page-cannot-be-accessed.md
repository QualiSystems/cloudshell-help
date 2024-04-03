---
sidebar_position: 6
sidebar_label: The Requested page cannot be accessed
---

# The Requested Page Cannot be Accessed because the Related Configuration Data for the Page is Invalid

## Error Message

:::danger &nbsp;
HTTP Error 500.19 - Internal Server Error: The Requested page cannot be accessed because the related configuration data for the page is invalid.
:::

## Description

During the process of creating a new website in IIS Manager, an error message is displayed indicating a problem reading the configuration file for the Web server or Web application.

## Solution

**To resolve the issue described above, follow these steps:**

1. If you receive a HTTP Error 500.19 error message, do the following:
    
    1. Open the control panel's **Windows Features** dialog box, and add **Internet Information Services > World Wide Web Services > Application Development Features > ASP.NET 4.6** (If ASP.NET 4.6 is missing, select the latest available version).
    2. Click **OK**.
2. If you are using IIS 8 with Windows Server 2012 or Windows Server 2012 R2, make sure to install the 'Web Server' role within the server manager.
3. After selecting the web server role, click **Next** and in the **Role Services** section, under **Application Development**, select **ASP.NET 4.5**.
    
    This sub-role enables IIS to use the ASP.NET 4.5 for running the CloudShell Portal.
    

## Related Topics

- [Configure the Self-Service Portal](../../install-configure/cloudshell-suite/configure-products/configure-portal/index.md)
