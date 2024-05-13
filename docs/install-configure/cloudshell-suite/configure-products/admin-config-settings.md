---
sidebar_position: 3
---

# Admin Configuration Settings

## Administrative tasks

- In the **Administrative Tasks** window, you can set the admin password, email and SMTP settings, assign users to groups and domains, and update data.
    
    ![](/Images/IG2/Configuring-the-database-connection_14.png)
    

## Admin password

1. Click the Admin Password button to modify the administrator’s password.
    
    ![](/Images/IG2/Configuring-the-database-connection_15.png)
    
    If you're using CloudShell without the New Job Scheduling, the password update is automatic and should take a few moments.
    
2. If your CloudShell deployment uses the New Job Scheduling, set the new password on the different services, as explained in [Modify the CloudShell Admin Password](../new-jss-install-config/admin-actions/modify-cs-admin-pass.md).

## PyPi Server Credentials

1. Click the **PyPi Server Credentials** button to configure the PyPi Server access credentials.
    
    ![](/Images/IG2/PyPiServerCredentials.png)
    
2. Set the PyPi Server's username and password or leave empty to use the default "pypiadmin" username and password. These credentials will be required to load packages to the local PyPi Server repository.
3. Click **OK**.

## SMTP mail configuration

1. To configure SMTP email settings, click the **Email & SMTP** button and select **Enable Email**.
    
    ![](/Images/IG2/Configuring-the-database-connection_16.png)
    
    Note: After making changes to the SMTP settings, you need to stop and then restart the Quali Server service.
    
2. In the **SMTP Server** address box, enter the name of the mail server in your organization.
3. In the **Port** field, verify that the specified port for the mail server is correct. Otherwise, enter the correct port number.
4. Select the **Use SSL** check box for secure transmission.
5. In the **Sender email address** field, enter the email address that is used for sending emails.
6. If an anonymous login is not supported in the specified mail server, clear the **Anonymous login** check box. Then enter the username and password of the email sender.
7. After all inputs are specified, click the **Send Test Email** button to test sending an email with these settings. Enter a recipient email and click **OK** to send the test email.
    
    ![](/Images/IG2/Configuring-the-database-connection_17.png)
    

## Search service configuration

- Click the **Search Service** button to re-index the search service. If it is up to date, the OK button is disabled.
    
    ![](/Images/IG2/Configuring-the-database-connection_18.png)
    

## Watcher utilization data

This option allows CloudShell to share usage data and system health information with Quali. For details, see [CloudShell Watcher Data Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Watcher.htm).

- Click **Watcher Utilization Data** and enable/disable the option, as appropriate.
    
    ![](/Images/IG2/watcherutilizationdataenable.png)
    

## User migration

All CloudShell users must be associated with at least one group and one domain. Users without an associated domain are not able to login.

- Click the **User Migration** button to migrate any unassociated users with a default group and domain.
    
    ![](/Images/IG2/Configuring-the-database-connection_19.png)
    

## Server upgrade

For server applications, the **Upgrade** window shows the application data upgrade stages.

![](/Images/IG2/Configuring-the-database-connection_20.png)