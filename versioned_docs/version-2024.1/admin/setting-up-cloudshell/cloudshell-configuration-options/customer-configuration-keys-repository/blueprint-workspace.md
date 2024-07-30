---
sidebar_position: 6
---

# Blueprint Workspace

## Defines the maximum allowed orchestration driver teardown time
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyTeardownDurationMaxHours" value="24"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in hours)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>48</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Quali Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>

## Defines the maximum allowed orchestration driver setup time
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologySetupDurationMaxHours" value="24"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in hours)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Quali Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>48</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Quali Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>

## Enable the option to show or hide the **More Info** option from blueprints
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideMoreInfoOnEnvironmentTile" value="False"/>`</td>
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
			<td>6.2.3 and above</td>
		</tr>
	</tbody>
</table>

## Block non-admin users from exporting blueprint packages
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="BlockPackageExportForNonAdmins" value="True"/>`</td>
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

## Display **Instructions** side pane by default
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="WS_Environment_AutoOpenInstructions" value="True"/>`</td>
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
			<td>`<add key="WS_Environment_AutoOpenCommands" value="True"/>`</td>
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

## Enable users to create blueprints from a template
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="OnlyAllowNewEnvironmentsFromTemplates" value="False"/>`</td>
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
			<td>6.3 and above</td>
		</tr>
	</tbody>
</table>

## Change the time allocated for exporting the blueprint diagram
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ExportToPdf.WaitForRender" value="3000"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (time to wait, in milliseconds)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>2000</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2021.2 and above</td>
		</tr>
	</tbody>
</table>

## Enable the **Check Blueprint Routes** option in the **Blueprint** menu
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DetectFailedRoutes" value="True"/>`</td>
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
			<td>9.2 and above</td>
		</tr>
	</tbody>
</table>

## Set the route grouping policy
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="MaxUngroupedRoutes" value="5"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (number of connection lines to be grouped)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>3</td>
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
