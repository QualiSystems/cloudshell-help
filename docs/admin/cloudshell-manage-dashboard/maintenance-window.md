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

:::note
When editing an **active** maintenance window, you cannot set its end time to a time that is not in the future (at or before the current time). To end an active maintenance window immediately, use the **Stop** action rather than editing its end time.
:::

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

## Maintenance Window By Domain

*New in CloudShell 2026.1*

In addition to the system-wide maintenance window described above, administrators can define maintenance windows scoped to individual domains. During a domain-scoped maintenance window, the same restrictions described in [About the maintenance window](#about-the-maintenance-window) (login, sandbox reservation, and automation) apply only to the selected domain. Other domains keep operating normally.

This is useful for planned infrastructure maintenance, upgrades, or other activities that require temporarily restricting access in a specific domain without affecting other teams.

A domain-scoped maintenance window uses exactly the same schedule, notification duration, and messages (**Message on Login**, **Notification Message**, **Error on Reserve**, and **Warning on Reserve**) as a system-wide window. The only difference is the domain the window applies to:

- A window associated with the **Global** domain is system-wide and applies to all domains (this is the default for windows created from the **Global** domain, as described in [Setting a maintenance window](#setting-a-maintenance-window)).
- A window associated with a specific domain applies only to that domain.

Each domain can have at most one active or planned maintenance window at a time, independently of other domains.

### Configuring a Domain Maintenance Window

A domain maintenance window is configured the same way as a system-wide one — by adding a maintenance window and associating it with the target domain, rather than with the **Global** domain.

**To set a maintenance window for a specific domain:**

1. As system administrator, open the **Manage** dashboard.
2. In the page navigation bar, click **Maintenance Window**.
3. Click the **Add New Maintenance Window** button.
4. Associate the window with the domain you want to place under maintenance (instead of the **Global** domain).
5. Enter the schedule, notification duration, and messages, as described in [Navigating the maintenance window](#navigating-the-maintenance-window). These fields behave identically to a system-wide window.
6. Click **Save**.

The window follows the same lifecycle as a system-wide window (**NEW** → **PLANNED** → **ACTIVE**), and can be extended, stopped, or deleted the same way. The restrictions take effect only for users of the associated domain.

:::note
The values you provide are the same as for a system-wide window: a schedule (start time and duration), a notification duration (how long before the start time to display the **Notification Message**), and the four maintenance messages. The maintenance window is not configured through a per-domain "domain setting" value — associating the window with a domain is what scopes it. The exact placement of the domain selection in the UI may vary by version.
:::

:::note
The system-wide maintenance window (a window associated with the **Global** domain) takes precedence over domain-level maintenance windows. If both a Global and a domain-scoped window are active, the system-wide (Global) restrictions apply.
:::

## Related Topics

- [Manage Dashboard Overview](../../admin/cloudshell-manage-dashboard/manage-dashboard-overview.md)
- [CloudShell Domains](../../admin/cloudshell-identity-management/cloudshell-domains/index.md)
