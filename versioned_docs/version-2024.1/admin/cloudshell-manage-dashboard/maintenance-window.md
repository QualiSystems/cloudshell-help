---
sidebar_position: 7
---

# Maintenance Window

## About the maintenance window

**Maintenance Window** allows system admins to schedule and notify users of an immediate or upcoming system-wide maintenance. For example, to perform an upgrade or any other preventive maintenance that could cause disruption of service. During the maintenance window, only system administrators and domain administrators can log in to CloudShell, schedule and work in sandboxes, and launch jobs.

The maintenance window is system-wide and applies to all domains.

If a non-admin user attempts to log in during this period, they will get a canned message. If they are logged in when the maintenance window starts, they will be logged-out and redirected to the login page and presented with the **Message on Login** message.

Additional points to consider when a maintenance window is defined:

- Sandboxes scheduled before the maintenance window will run as usual even if they overlap with the maintenance window. Admin users can view all sandboxes scheduled for the maintenance window duration, by clicking the **Go to Sandboxes** button. See the [Navigating the maintenance window](../../admin/cloudshell-manage-dashboard/maintenance-window.md#navigating-the-maintenance-window) section.
- If a regular user reserves or restores a sandbox that starts or ends outside the maintenance window, the sandbox will be reserved or restored as usual. Users are warned that they will not have access to the sandbox during the maintenance period.
- Admins can run automation suites during the maintenance window.
- Reserving a recurring sandbox is blocked if all the occurrences start or end during the maintenance window. Otherwise, the sandbox will start as usual.
- You cannot change the timeslot of a reservation that falls within the maintenance window.
- Automation suite jobs moved to the scheduled queue after the maintenance window was created will run as usual unless they overlap the maintenance window. If this occurs, they will run after the maintenance window.
- Automation suite jobs that were set to run automatically before the maintenance window was created or during the period in which the maintenance window was extended will fail if they overlap with the maintenance window.
- API: non-admin users cannot create a new session during a maintenance window. If they are in the middle of a session, the session will not be terminated, but they will be logged out on the session timeout.

## Setting a maintenance window

The **Maintenance Window** page is only displayed for system administrators in the **Global** domain.

**To set a maintenance window:**

1. As system administrator, access the **Global** domain.
2. Open the **Manage** dashboard.
3. In the page navigation bar, click **Maintenance Window**.
4. Click the **Add New Maintenance Window** button.
    
    The maintenance window is created.
    
5. Enter the required information in the dialog box, as explained below.
    
6. Click **Save**.

## Navigating the maintenance window

In the image below, hover over an area or option to learn more about it, or use the table that follows. You can edit any of the messages presented in the **Maintenance Window**. Click **Save** to apply your changes.

![](/Images/CloudShell-Portal/Manage/MaintenanceWindow_624x501.png)

The maintenance window's areas are arranged as follows:

|   | Field | Description |
| --- | --- | --- |
| 1 | Add New Maintenance Window | Click this button to define a maintenance window. You can have only one active maintenance window at any time. |
| 2 | Status | A maintenance window can be:<ul><li>**NEW** - new maintenance window which was not saved yet</li><li>**ACTIVE** - maintenance window has started but has not ended</li><li>**PLANNED** - maintenance window is scheduled to start at a future time</li></ul> |
| 3 | Schedule | Define the maintenance period. You can start the maintenance window now or at a future time, and set the duration.<br/>You can extend or stop a maintenance window by editing this section. |
| 4 | Go to Sandboxes | Click this button to show the sandboxes that are scheduled to run during the maintenance timeframe. Feel free to inform the sandbox owners that they will not have access to these sandboxes. |
| 5 | Show Notification | Define how long before the maintenance window's start time to show the **Notification message**.<br/>If you do not configure this setting, CloudShell Portal will not notify users prior to the beginning of the maintenance window. |
| 6 | Notification Message | The message shown to all users for the period defined in **Show notification** prior to the maintenance window start time.<br/>The notification is shown in the upper right hand corner of the screen as follows during the defined period:<br/>![](/Images/CloudShell-Portal/Manage/NotificationMessage.png)<br/>**Note:** During the maintenance window, the contents of the tooltip change to the **Message on login**, and are visible only to system and domain admins. |
| 7 | Message on Login | The message shown to all users who try to log in to CloudShell Portal during the maintenance window. For system and domain admin users, CloudShell Portal also shows this message during the maintenance period. |
| 8 | Error on Reserve | The message shown to non-admin users who try in advance to create a sandbox that starts or ends within the maintenance window. |
| 9 | Warning on Reserve | The message shown to non-admin users who try in advance to create a sandbox that starts and ends outside the maintenance window. The user is presented with the option to either **Continue** or **Cancel**. If they select to continue, the sandbox will be created and remain active during the maintenance period, but it will be inaccessible.<br/>In the API, there is no warning, and the action is allowed. |
| 10 | Delete button | <ul><li>**PLANNED** or **NEW** state: deletes the maintenance window</li><li>**ACTIVE** state: ends and deletes the maintenance window</li></ul> |

## Related Topics

- [Manage Dashboard Overview](../../admin/cloudshell-manage-dashboard/manage-dashboard-overview.md)
