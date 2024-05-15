---
sidebar_position: 18
---

# Scheduling Commands

## Enable blueprint scripts to run concurrently
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AllowConcurrentTopologyScriptCommands" value="True"/>`</td>
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
			<td>8.0 and above</td>
		</tr>
	</tbody>
</table>
## Setting Quali Server's timeout period for L1 drivers
:::note
For more information, see [Set the timeout period for L1 drivers](../../../setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md#set-the-timeout-period-for-l1-drivers).
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="L1DriverProcessStartupTime" value="3"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in seconds)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>1</td>
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
