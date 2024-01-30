---
sidebar_position: 3
---

# Defining the Self-Service Portal Settings

In this article:

- [Changing the time zone](#changing-the-time-zone)
- [Switching domains](#switching-domains)
- [Changing your email address](#changing-your-email-address)
- [Changing your password](#changing-your-password)
- [Resetting your password](#resetting-your-password)
- [Logging off](#logging-off)

## Changing the time zone

To switch to another time zone:

- From the User menu, select the location item and select a new one from the context menu.

## Switching domains

Every user must be associated with a group and a domain.

The installation wizard provides a user migration tool that associates users who are currently not part of any domain with a new or existing domain.

**Users not associated with any domain will not be able to access the portal.**

To switch to another domain:

- In the menu bar, click the domain name and select a different one from the context menu.
    
    :::note
    Only permitted domains are available.
    :::
    

## Changing your email address

You can change your email address in the CloudShell Portal in order to receive email notifications about your Sandboxes, job scheduling, and so on. This option is enabled using the `ChangeEmailEnabled` key.

To change your email:

1. From the User menu, select **Change Email**.
    
    The **Change Email** dialog box opens, displaying (when relevant) the currently registered email address in the read-only Current Email field.
    
2. Type your New Email address.
3. Click Save.
    
    The new email address is updated. The settings are also updated in Resource Manager.
    

## Changing your password

This option is enabled by default but can be disabled using the `ChangePasswordEnabled` key.

To change your password:

1. From the User menu, select **Change Password**.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ChangePassword.png)
    
2. In the **Change Password** dialog box, enter the required details and click Save.

## Resetting your password

Note that this option needs to be enabled by your administrator, as explained in [Enabling password reset](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Wrk-wth-Cnfg-Ky.htm#Enabling4).

- If you forgot your password, click the Forgot your password? link in the login page to reset your password.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/PasswordReset.png)
    
    The system will send an email with a link for resetting your password.
    

## Logging off

To log-off from the portal:

- From the **User** menu, select **Logoff**.