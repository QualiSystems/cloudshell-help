---
sidebar_position: 1
---

# Abstract Resources

## Randomized abstract resource selection
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RandomizeAbstractSelection" value="False"/>`</td>
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

## Change the number of matches that are considered for abstract sub-resource requirements
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AbstractSubResourceResultsPageSize" value="number of results"/>`</td>
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
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2021.1 and above</td>
		</tr>
	</tbody>
</table>

## Abstract resource resolution strategy
When CloudShell reserves a sandbox, it resolves each abstract resource requirement to a concrete resource. By default (`Legacy`), all abstract resolution runs under a single global lock, so concurrent reservation requests are handled one at a time. Setting the strategy to `Optimistic` enables an opt-in solver that resolves abstract requirements outside that global lock and validates the result before committing, improving throughput when many reservations run concurrently. On `Legacy`, resolution behavior is unchanged. After changing this key, restart the CloudShell Server for it to take effect.

<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AbstractResolutionStrategy" value="Optimistic"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Legacy/Optimistic</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory (requires a CloudShell Server service restart)</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Legacy</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2026.1 and above</td>
		</tr>
	</tbody>
</table>