---
sidebar_position: 10
---

# New Job Scheduling

## Switching between Sandbox Services
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="UseEmbeddedSandboxService" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            True: Use Quali Server's out-of-the-box Sandbox Service

False: Use Kubernetes-based Sandbox Service
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
			<td>2020.2 and above</td>
		</tr>
	</tbody>
</table>

## Allowing Quali Server to access the Kubernetes-based Sandbox Service
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="SandboxServiceHost" value="<sandbox-service-svc-external-ip/hostname>"/>`

`<add key="SandboxServiceRestPort" value="<port-number>"/>`
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            SandboxServiceHost - Ip address/hostname

SandboxServiceRestPort - port number
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>8888 - default port number</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2020.2 and above</td>
		</tr>
	</tbody>
</table>

## Allowing Quali Server to access the Kubernetes-based RabbitMQ Service
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="RabbitHostname" value="<sandbox-service-svc-external-ip/hostname>"/>`

`<add key="RabbitPort" value="<port-number>"/>`
            </td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            RabbitHostname - Ip address/hostname

RabbitPort - port number
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>15671 - default port number</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2020.2 and above</td>
		</tr>
	</tbody>
</table>

