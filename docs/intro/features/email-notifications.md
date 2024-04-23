---
sidebar_position: 6
---

# Email Notifications Overview

CloudShell admins can configure CloudShell to send notification emails at different stages during the lifecycle of CloudShell sandboxes and/or automation suites. To use email notifications, perform [SMTP mail configuration](../../install-configure/cloudshell-suite/configure-products/admin-config-settings.md#smtp-mail-configuration) and set the appropriate sandbox lifecycle key(s) and/or automation suite notification.

For example, a sandbox termination notification:

![](/Images/Admin-Guide/Setting-Up-CloudShell/EmailNotificationExample.png)

:::note Notes
- CloudShell sends notification emails to the email defined in the CloudShell user's profile.
- The time stamp on the emails is in the time zone of the recipient. In the event of multiple recipients in different time zones, CloudShell will send a different email to each time zone's recipients.
:::

## Automation suite notifications

Suite notifications are configured per suite, in the **Email Notifications** drop-down list. The recipient is the user that executed the automation suite. For additional information, see [Add a new automation suite](../../portal/job-scheduling/manage-automation-suites/add-suites.md).

## Sandbox lifecycle notifications

Sandbox lifecycle notifications include notifications for the different sandbox lifecycle events including **On start**, **On setup complete** (active) and **On end**, and calendar invites for future reservations or extended sandboxes.

These notifications are set using the configuration keys listed in the following sections. To set any of these configuration keys, copy the appropriate key from this article to the `\QualiSystems\CloudShell\Server\customer.config` file and restart the Quali Server service.

### Sandbox notification defaults

These keys define the email notification defaults for new sandboxes. The recipient of each notification is mentioned below, but you can configure CloudShell to also send these notifications to admins and specific email addresses, as explained in the [Admin override keys](#admin-override-keys) section below.

- **On start** (when the sandbox is reserved):
    
    Key: `<add key="ReservationEmail.SendNotificationOnStart" value="True"/>`
    
- **On setup completion** (when the sandbox's setup phase completes, provided in CloudShell 9.3):
    
    Key: `<add key="ReservationEmail.SendNotificationOnSetupComplete" value="True"/>`
    
- **Time to Teardown** (when teardown is scheduled to start): For details about this notification, see the Admin override keys section below.
- **Before end** (x minutes before the sandbox's teardown phase starts):
    
    Key: `<add key="ReservationEmail.NotificationMinutesBeforeEnd" value="10"/>`
    
- **On end** (when the sandbox ends):
    
    Key: `<add key="ReservationEmail.SendNotificationOnEnd" value="True"/>`
    

Note that the sandbox end-user can change the defaults in the **Email Notifications** section of the sandbox's **Reserve**, **Restore** or **Update** forms.

![](/Images/CloudShell-Portal/Lab-Management/Reservations/ReservePaneEmailNotificaions.png)

### Admin override keys

**Email notifications for all sandbox events to admins/domain admins:**

These keys determine if the admin/domain admin receives an email notification for notifications that were enabled in sandboxes by the users who launched them.

- `<add key="ReservationEmail.NotifySystemAdmins" value="True"/>`
- `<add key="ReservationEmail.NotifyDomainAdmins" value="True"/>`

:::tip
To disable admin notifications for sandbox events, set the `ReservationEmail.Notify` key(s) as well as the appropriate `ReservationEmail.Override` keys to **False**. For details, see [Disabling admin email notifications](../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#disabling-admin-email-notifications).
:::

**Email notifications for specific sandbox events:**

These keys determine if the admins receive a notification for specific sandbox events regardless if these notifications were enabled/disabled in a specific sandbox.

- **On Start** (when the sandbox is reserved):
    
    Key: `<add key="ReservationEmail.OverrideSendNotificationOnStart" value="True"/>`
    
- **On setup complete** (when the sandbox's setup phase completes, provided in CloudShell 9.3):
    
    Key: `<add key="ReservationEmail.OverrideSendNotificationOnSetupComplete" value="True"/>`
    
- **Before end** (x minutes before the sandbox is scheduled to end):
    
    Key: `<add key="ReservationEmail.OverrideSendNotificationBeforeEnd" value="True"/>`
    
- **Time to Teardown** (when teardown is scheduled to start, sent at the start of the sandbox; recipients are the admins and domain admins):
    
    Key: `<add key="ReservationEmail.SendNotificationBeforeEnd" value="True"/>`
    
- **On end** (when the sandbox ends):
    
    Key: `<add key="ReservationEmail.OverrideSendNotificationOnEnd" value="True"/>`
    

### Additional sandbox notifications

- **Send calendar invite for future sandboxes** (recipient is the owner of the sandbox):
    
    `<add key="SendEmailForFutureReservations" value="True"/>`
    
    Note that the sandbox end-user can also manually create a calendar invite, as explained in [Create a Calendar Event for a Sandbox](../../portal/sandboxes/sandbox-workspace/create-cal-event-for-sandbox.md).
    
- **Disable calendar invites for extended/cancelled sandboxes** (recipient is the admin): By default, CloudShell sends an email notification whenever the user extends a sandbox or cancels a future sandbox. To disable this behavior, set these keys:
    
    `<add key="ReservationEmail.SendNotificationOnReschedule" value="False"/>` and `<add key="ReservationEmail.OverrideSendNotificationOnRescheduled" value="False"/>`
    
- **New permitted user notification** (recipients are the permitted users): When adding permitted users to an active sandbox, those users will receive both a notification email informing them of the addition and any other email notifications defined in the sandbox. The notification is only sent if the sandbox has any notifications enabled. This behavior is provided out-of-the-box in CloudShell 9.3.

### Email notifications for all sandbox events to specific email addresses

This key enables CloudShell to send sandbox event notifications to a list of email addresses (comma-separated).

For example:

`<add key="ReservationEmail.RecipientsToNotify" value="john.s@company.com;mate.b@company.com"/>`

## Customizing email notifications

CloudShell email notifications are based on HTML templates, which can be customized as appropriate. For details, see [Customizing Email Notification Templates](../../admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-email-notification-templates.md).

## Related Topics

- [Registration, passwords, emails, and licenses](../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#registration-passwords-emails-and-licenses)