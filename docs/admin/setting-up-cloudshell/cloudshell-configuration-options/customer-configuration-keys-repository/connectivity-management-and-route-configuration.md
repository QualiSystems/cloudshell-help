---
sidebar_position: 4
---

# Connectivity Management and Route Configuration

## Set the maximum number of hops allowed per route
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="MaxHopsForRoute" value="10"/>`</td>
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
			<td>6</td>
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

## Enable automatic route configuration (automatically configures L1 connections)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableRouteConfiguration" value="True"/>`</td>
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

## Enable regular users to change their email address
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ChangeEmailEnabled" value="True"/>`</td>
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
			<td>7.0 and above</td>
		</tr>
	</tbody>
</table>

## Enable regular users to change email notifications
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ReservationEmail.NonAdminCanChangeNotifications" value="False"/>`</td>
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

## Set the default number of max hops displayed for routes (in the connection’s Max Hops field in the Resource Connections dialog box)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultMaxHopsForRoute" value="2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in hops)</td>
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
			<td>6.1 and above</td>
		</tr>
	</tbody>
</table>

## Set the default connection type when creating a connection
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultSelectedConnectionType" value=""/>`</td>
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
			<td>Route</td>
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

## Set the supported connection types for new connections
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SupportedConnectionTypes" value=""/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Connection type, separated by comma</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Route, Cable, Tap, Connector</td>
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

