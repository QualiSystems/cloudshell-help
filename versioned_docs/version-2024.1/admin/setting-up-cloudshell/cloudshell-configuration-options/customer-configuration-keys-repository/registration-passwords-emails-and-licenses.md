---
sidebar_position: 15
---

# Registration, Passwords, Emails, and Licenses

## Enable registration

Enable registration (Requires also setting the Registration.AdminEmail key, as explained below) (Registration.Enabled)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Registration.Enabled" value="True"/>`</td>
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
## Set email address for a system administrator level user
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="Registration.AdminEmail" value="admin@company.com"/>`

Where `admin@company.com` is the email address of a **Resource Manager Client** system administrator
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Email address, separated by semi-colons (;)</td>
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
## Configure registered user permissions
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Registration.DefaultDomain" value=""/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Default domain</td>
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
## Configure registered user permissions
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Registration.AdditionalGroup" value=""/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>External Users</td>
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
## Configure the default role when a user is registered
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Registration.DefaultRole" value="Regular"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Regular</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.1 and above</td>
		</tr>
	</tbody>
</table>
## Enable password reset

This also requires configuring the SMTP mail. See [Enabling password reset](../advanced-cloudshell-customizations.md#enabling-password-reset).
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ResetPassword.Enabled" value="True"/>`</td>
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
## Hide the "Change Password" option from the user menu
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ChangePasswordEnabled" value="False"/>`</td>
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
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>
## Enable delaying failed login attempts/brute-force protection
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DelayFailedLoginsAttempts" value="True"/>`</td>
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
			<td>2023.3 and above</td>
		</tr>
	</tbody>
</table>
## Change the default idle time for releasing the license
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="IdleLicenseReleaseWatchdog.IdleTimeInMinutes" value="65"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in minutes)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal / CloudShell Authoring / TestShell Studio installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>65</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>TestShell Studio/TestShell Runner/CloudShell Authoring</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.3 and above</td>
		</tr>
	</tbody>
</table>
## Change the email validation pattern
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="EmailValidationPattern" value=""/>`

Where the email address strings can include any character in any language or symbol (separated by "@" and "."). For example, to limit the email address to a particular company, set value="[^\s@]+@company\.com"
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text, email address string</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Email address format (*@*.*)</td>
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
## Include a link to the sandbox in notification emails
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="PortalAddressLinkForEmails" value="protocol://Portal:PortalPort"/>`

| Parameter | Parameter details |
| --- | --- |
| `protocol` | http or https if CloudShell Portal is set to use SSL |
| `PublicServerName` | The DNS name or IP address of the CloudShell Portal virtual front |
| `PortalPort` | The port which CloudShell Portal is using (If the port is 80 or 443, remove this parameter and the colon from the key value). |
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Text, email address string</td>
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
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.0 and above</td>
		</tr>
	</tbody>
</table>
