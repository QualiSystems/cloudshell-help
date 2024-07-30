---
sidebar_position: 14
---

# PyPi Server

## Set the online computer's name and port
:::note
This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer.
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RequirementsRepository" value="http://<hostname|IP>:<port>"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>hostname or IP address and port</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Execution Server installation directories</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Execution Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>

## Define the online computer as a trusted host
:::note
This applies to CloudShell deployments using PyPi Server to retrieve and serve Python dependencies from a dedicated online computer.
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RequirementsTrustedHost" value="http://<hostname|IP>:<port>"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>hostname or IP address specified in the `RequirementsRepository` configuration key</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Execution Server installation directories</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Execution Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>

## Set a secondary online python packages repository
:::note
Make sure to set this key on all execution servers.
:::
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RequirementsExtraRepository" value="http://<hostname|IP>:<port>"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            hostname or IP address and port. For example:

`<add key="RequirementsExtraRepository" value=https://testpypi.python.org/simple//>`
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Execution Server installation directories</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Execution Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.2 and above</td>
		</tr>
	</tbody>
</table>

