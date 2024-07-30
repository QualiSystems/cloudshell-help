---
sidebar_position: 2
---

# API

For configuration keys related to API SSO, see [SSO Login to CloudShell APIs](../../../../devguide/available-cs-api/sso-login-to-cs-api.md).

## Setting the response page size
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultSandboxApiPagingSize" value="1000"/>`</td>
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
			<td>1000</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell API</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>8.1 and above</td>
		</tr>
	</tbody>
</table>

## Extending the API authorization token validity period
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AuthToken.ExpirationSpanMinutes" value="1000"/>`</td>
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
			<td>300</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell API</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>
