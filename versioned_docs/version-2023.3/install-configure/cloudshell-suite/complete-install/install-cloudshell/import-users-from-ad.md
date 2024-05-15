---
sidebar_position: 9
---

# Import User Definitions from an Active Directory (Optional)

This article describes how to import user definitions from an active directory. Perform these steps after completing the CloudShell installation.

## Add a key to the customer.config file

Use the following steps to add the required key to the **customer.config** file and modify it to the required domain name.
:::note
Before importing user definitions from the active directory, ensure that the logon user of the server is in the same domain as the Active Directory.
:::
**To add the required key to the customer.config file and then modify the key:**

1. In the machine where CloudShell is installed, navigate to CloudShell installation folder, for example:
    
    **C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server**
    
2. Open the **customer.config** file in a text editor.
    
    ![](/Images/IG2/Check-for-CloudShell-required_33.png)
    
3. Add the following line to the **customer.config** file.
    
    `<add key="ActiveDirectory.Domain" value="QUALISYSTEMS"/>`
    
4. Modify the new key by changing the value field from "QUALISYSTEMS" to that of your domain, for example:
    
    `value="MYDOMAIN"`
    
5. Save the modified **customer.config** file.
6. Restart the **Quali Server** service.

## Import new users into CloudShell

You can manage the user's setttings in **Resource Management Client** except for the username and password, which are provided by the Active Directory service provider.
:::note
Before importing user definitions from the active directory, the logon user of the server must be in the same domain as the Active Directory.
:::
**To import new users into CloudShell:**

1. Open the CloudShell Resource Management Client.
2. From the Quali Community's [Docs & Training](http://www.quali.com/community/training/) page, open the **CloudShell Resource Manager Online Help.**
3. Follow the steps described in [Importing users into CloudShell from an active directory](../../../../admin/cloudshell-identity-management/managing-users/managing-cloudshell-users.md#importing-users-into-cloudshell-from-an-active-directory).

## Enable CloudShell to automatically import users when they first log in to CloudShell

**To enable CloudShell to automatically import users at first login:**

1. In the machine where CloudShell is installed, open the **C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\customer.config** file, and add the following key:
    
    `<add key="ExternalUserManagement.AutoImportUser" value="True"/>`
    
2. Save the **customer.config** file.
3. Restart the **Quali Server** service.