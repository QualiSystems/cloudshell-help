---
sidebar_position: 16
---

# Sandboxes

## Controlling the time a command can stay in "pending" state
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="InstantJobTimeToLiveTimeoutMinutes" value="10"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in minutes)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
## Enable users to share a sandbox only with other users of the same groups
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="PickOnlyUsersFromLoggedInUserGroups" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Prevents users reserving a blueprint from viewing **Owner** and **Permitted Users** details
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="PickOnlyLoggedInUser" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.0 and above</td>
		</tr>
	</tbody>
</table>
## Unlock sandboxes for use during the Setup process
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="BlockSandboxDuringSetup" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.1 and above</td>
		</tr>
	</tbody>
</table>
## Enable extended permissions for external users
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ExternalUserHasExtendedPermissions" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>
            `customer.config` CloudShell Server installation directory

\* Requires restarting both the **Quali Server** and **CloudShell Portal IIS** services.
            </td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Prevent users from using the **Reserve Anyway** option
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="BlockReserveWithConflicts" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config CloudShell Server installation directory`</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
:::note
When this key is enabled, an administrator will still be able to reserve with conflicts.
This is also the behavior when using the CloudShell automation api.
If however, the logged in admin is trying to create a reservation for a regular user (set the owner to a regular user), this will fail as well if there are conflicts.
:::

## Enable regular users to view sandboxes of other users in their domain
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ShowOtherUserInDomainReservations" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set the default duration for new sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Reservation.DefaultDuration" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in hours)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Disable the "Recurrence" option when creating sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableRecurringReservation" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>
## Set the default maximum number of sandboxes a user can have at the same time
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultUserMaxConcurrentReservations" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set the default maximum number of scheduled sandboxes a user can have at the same time
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultUserMaxScheduledSandboxes" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            Numeric

empty value - unlimited number of scheduled sandboxes allowed

0 - no scheduled sandboxes allowed
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10/empty (unlimited) for users migrated from a pre-9.3 Patch 2 CloudShell</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.3 Patch 2 and above</td>
		</tr>
	</tbody>
</table>
## Set the default maximum number of blueprints a user can own at any given time
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultUserMaxOwnedBlueprints" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>empty (unlimited)</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Quali Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2021.3 and above</td>
		</tr>
	</tbody>
</table>
## Set the default maximum number of saved sandboxes a user can create with the **Save and Restore** add-on

This key applies only to new users or users created in a CloudShell version prior to 9.0 that are migrated for the first time.
:::note
Admins can configure the maximum number of saved sandboxes for a specific user in Resource Manager Client or via API, when updating user settings or when creating a new user.
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultUserMaxSavedSandboxes" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>empty (unlimited)</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Quali Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.0 and above</td>
		</tr>
	</tbody>
</table>
## Set the default maximum sandbox duration limit for each user
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultUserMaxReservationDuration" value="1:00:00:00"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>days:hours:minutes:seconds</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>1:00:00:00</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set the maximum number of users per reservation
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="MaxPermittedUsersForReservarion" value="10"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>20</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.0 and above</td>
		</tr>
	</tbody>
</table>
## Display **Instructions** side pane by default
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="WS_Reservation_AutoOpenInstructions" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Display **Commands** side pane by default
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="WS_Reservation_AutoOpenCommands" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Determine whether sandboxes should end automatically
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AutoEndReservation" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            True/False (True - auto end sandbox at end time / False = allow sandbox to enter overtime
:::note Important
It is not recommended to enable Overtime since it makes managing and troubleshooting conflicts more difficult.
:::
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Show the **Mark "in use"** option for resources
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideMarkInUseAction" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (True - hides the option) **Mark "in use"** option / False = displays **Mark "in use" option**</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.2 and above</td>
		</tr>
	</tbody>
</table>
## Prevent non-admin users from reserving shared resources exclusively
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="NonAdminCanUnshareResource" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (False = resources marked as ‘Shared by default’ cannot be ‘unshared’ by regular user)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Prevent non-admin users from viewing the physical connection layer in the sandboxes dashboard
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="NonAdminCanViewPhysicalLayerInReservation" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set email notification defaults for sandboxes - notify when sandbox is reserved
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.SendNotificationOnStart" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set email notification defaults for sandboxes - notify when setup completes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.SendNotificationOnSetupComplete" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.3 GA and above</td>
		</tr>
	</tbody>
</table>
## Set email notification defaults for sandboxes - notify when teardown is scheduled to start
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.SendNotificationBeforeEnd" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set email notification defaults for sandboxes - notify x minutes before sandbox is scheduled to end
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.NotificationMinutesBeforeEnd" value="10"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in minutes)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set email notification defaults for sandboxes - notify when sandbox ends
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.SendNotificationOnEnd" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Add additional recipients for sandbox notifications
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.RecipientsToNotify" value="admin1@company.com;admin2@company.com"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Email addresses, separated by semi-colons</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set general policies to inform system admins
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.NotifySystemAdmins" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set general policies to inform domain admins
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.NotifyDomainAdmins" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Set general policies to inform domain admins
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.NotifyDomainAdmins" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Force admin notifications **On Start** even if user disables them
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.OverrideSendNotificationOnStart" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            True - send an email notification to the admin/domain admin when the sandbox starts

False - send an email notification according to the sandbox end-user's settings when booking the sandbox
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Force admin notifications **On setup complete** even if user disables them
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.OverrideSendNotificationOnSetupComplete" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.3 GA and above</td>
		</tr>
	</tbody>
</table>
## Force admin notifications **Before End** even if user disables them
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.OverrideSendNotificationBeforeEnd" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            True - send an email notification to the admin/domain admin before the sandbox ends

False - send an email notification according to the sandbox end-user's settings when booking the sandbox
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Force admin notifications **On end** even if user disables them
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.OverrideSendNotificationOnEnd" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            True - send an email notification to the admin/domain admin when the sandbox ends

False - send an email notification according to the sandbox end-user's settings when booking the sandbox
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Enable users to create ad-hoc sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideCreateNewEmptyReservation" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.2 and above</td>
		</tr>
	</tbody>
</table>
## Enable HTML formatting in **Output** console, **Full Activity Feed** and **Commands** side pane
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="CommandsOutputConsoleSupportsHtml" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.0 and above</td>
		</tr>
	</tbody>
</table>
## Limit the time to keep sandbox **Activity Feed/Output** data
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SandboxLogAndOutputSaveDuration" value="180"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in days)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>17910</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2020.2 EA and above</td>
		</tr>
	</tbody>
</table>
## Prevent the **Output** console from opening when new sandbox events occur
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AutoOpenCommandOutputOnNewEvents" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2021.3 EA and above</td>
		</tr>
	</tbody>
</table>
## Configure a calendar event for future sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SendEmailForFutureReservations" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.1 and above</td>
		</tr>
	</tbody>
</table>
## Disable admin calendar event when user extends (or cancels a future) sandbox
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="ReservationEmail.SendNotificationOnReschedule" value="False"/>`

`<add key="ReservationEmail.OverrideSendNotificationOnRescheduled" value="False"/>`
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>
## Prevent users from accessing sandbox links in a different domain
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AutoSwitchDomain" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.0 and above</td>
		</tr>
	</tbody>
</table>
## Show/hide user/sandbox details of currently shared resources in CloudShell Portal
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ShowSharedResourceUsage" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True (show user/sandbox details)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>
## Set **List** view as the default for sandbox workspaces

For additional information, see [Sandbox List View](../../../../portal/sandboxes/sandbox-workspace/sandbox-list-view.md).
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ShowListViewByDefault" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.2 and above</td>
		</tr>
	</tbody>
</table>
## Prevent regular users from adding/removing resources in sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="BlockAddRemoveResourcesInSandbox" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.2 GA and above</td>
		</tr>
	</tbody>
</table>
## Allow sandboxes with shorter duration than Before end notification
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.VerifyNotificationBeforeEndLongerThanDuration" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2022.2 GA</td>
		</tr>
	</tbody>
</table>
## Set the lowest role that can create and use persistent sandboxes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideOrders" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>True</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.2 and above</td>
		</tr>
	</tbody>
</table>
