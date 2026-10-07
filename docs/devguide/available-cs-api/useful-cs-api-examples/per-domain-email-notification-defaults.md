---
sidebar_position: 11
---

# Setting Email Notification Defaults per Domain

By default, the sandbox email notification defaults (for example, how many minutes before the sandbox ends the **Before end** notification is sent) are set globally for the whole CloudShell deployment, using the `ReservationEmail.*` keys in the Quali Server's `customer.config` file. For details, see [Email Notifications Overview](../../../intro/features/email-notifications.md).

You can override these defaults for a specific domain using the `UpdateDomainSetting` and `GetDomainSettings` Automation API methods. For example, the **Before end** notification can default to 60 minutes before the end in `Domain1` and 24 hours before the end in `Domain2`.

*Available in CloudShell 2024.1.0.2686 and later, 2025.1 and 2026.1. To use these methods from Python, use `cloudshell-automation-api` 2026.1 or later.*

## How it works

- **These values are defaults only.** They determine the values that are pre-filled in the **Email Notifications** section of the **Reserve** form when a user reserves a sandbox while working in that domain. As with the global defaults, users can change them per sandbox, unless the domain disables this with `NonAdminCanChangeNotifications`.
- **Settings you don't set fall back to the global value.** Each domain stores only the settings you set for it. Any setting not set for the domain uses the global `customer.config` value, and a domain with no settings behaves exactly as before.
- **They apply to the domain the user is working in.** The defaults come from the user's current domain at the time they open the **Reserve** form.
- **The Automation API isn't affected.** Sandboxes created through the Automation API (for example, `CreateImmediateTopologyReservation`) use the notification values passed by the caller, not these defaults.

## Available settings

The setting names are the names of the global `ReservationEmail.*` keys, without the `ReservationEmail.` prefix. Names are case-sensitive.

| Setting name | Value | Default for |
| --- | --- | --- |
| `SendNotificationBeforeEnd` | `True`/`False` | Whether the **Before end** notification is selected |
| `NotificationMinutesBeforeEnd` | Number of minutes | How long before the sandbox ends (before its teardown starts) the **Before end** notification is sent |
| `SendNotificationOnStart` | `True`/`False` | Whether the **On start** notification is selected |
| `SendNotificationOnSetupComplete` | `True`/`False` | Whether the **On setup complete** notification is selected |
| `SendNotificationOnEnd` | `True`/`False` | Whether the **On end** notification is selected |
| `NonAdminCanChangeNotifications` | `True`/`False` | Whether regular users can change the notification selections in the **Reserve** form (admins and domain admins always can) |

The other `ReservationEmail.*` keys (such as `NotifySystemAdmins`, `NotifyDomainAdmins`, `RecipientsToNotify`, `SendNotificationOnReschedule` and the `Override*` keys) control who receives the emails and when they're sent, not the **Reserve** form defaults. They are always global, and setting them per domain has no effect.

:::note
Setting names and values aren't validated. A misspelled name or a value that isn't a valid number or `True`/`False` is saved but ignored, and the global value is used instead. Use `GetDomainSettings` to check what is stored for a domain.
:::

## API methods

| Method | Parameters | Description |
| --- | --- | --- |
| `UpdateDomainSetting` | `domainName`, `name`, `value` (all strings) | Creates or updates a single setting for the domain. Only admins can call it. |
| `GetDomainSettings` | `domainName` | Returns the settings stored for the domain, as a list of `Key`/`Value` items. It doesn't include the global values for settings that aren't set for the domain. |

There is no method that deletes a setting. To return a domain to the global behavior for a setting, set it to the same value as the global key.

## Example

The following script sends the **Before end** notification by default 60 minutes before the end in `Domain1` and 24 hours (1440 minutes) before the end in `Domain2`:

```python
from cloudshell.api.cloudshell_api import CloudShellAPISession

api = CloudShellAPISession(host='<Quali Server address>', username='admin', password='<password>', domain='Global')

domain_defaults = {
    'Domain1': {'SendNotificationBeforeEnd': 'True', 'NotificationMinutesBeforeEnd': '60'},
    'Domain2': {'SendNotificationBeforeEnd': 'True', 'NotificationMinutesBeforeEnd': '1440'},
}

for domain_name, settings in domain_defaults.items():
    for name, value in settings.items():
        api.UpdateDomainSetting(domainName=domain_name, name=name, value=value)

for domain_name in domain_defaults:
    stored = api.GetDomainSettings(domainName=domain_name)
    print(domain_name, {item.Key: item.Value for item in stored.Settings})
```

Output:

```
Domain1 {'SendNotificationBeforeEnd': 'True', 'NotificationMinutesBeforeEnd': '60'}
Domain2 {'SendNotificationBeforeEnd': 'True', 'NotificationMinutesBeforeEnd': '1440'}
```

New sandboxes reserved from the Portal in these domains will now have the **Before end** notification selected, set to 60 minutes and 24 hours before the end respectively. Sandboxes reserved in other domains keep using the global `ReservationEmail.NotificationMinutesBeforeEnd` value.

:::note
The `SendNotificationBeforeEnd` setting is included because the minutes value only matters if the **Before end** notification is selected. If the global `ReservationEmail.SendNotificationBeforeEnd` key is already `True`, setting `NotificationMinutesBeforeEnd` alone is enough.
:::

## Related topics

- [Email Notifications Overview](../../../intro/features/email-notifications.md)
- [Advanced CloudShell Customizations](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md)
