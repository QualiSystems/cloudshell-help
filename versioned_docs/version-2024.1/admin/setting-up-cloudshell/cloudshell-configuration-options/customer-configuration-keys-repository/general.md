---
sidebar_position: 8
---

# General

 ## Show/hide the main navigation bar components

Show/hide the main navigation bar components (HideSnQ, HideReservations, HideTopologies, HideInventory)
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>
            `<add key="HideSnQ" value="True"/>`

`<add key="HideReservations" value="True"/>`

`<add key="HideTopologies" value="True"/>`

`<add key="HideInventory" value="True"/>`
            </td>
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
			<td>False for all keys</td>
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


## Set the default home page
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HomePageUrl" value="/RM/Topology"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            Scheduling and queueing: "SnQ/Scheduler/"

Topologies: "RM/Topology"

Reservations: "RM/"

Any other page relative address.
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>The topologies dashboard URL ("/RM/Topology")</td>
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

## Add the Contact option to the user menu in CloudShell Portal
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ContactUsURL" value="<url>"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>url</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A (disabled)</td>
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

## Specify the number of resource driver executions that can run in parallel
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="WorkerPoolSize" value="20"/>`</td>
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
			<td>Quali Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.0</td>
		</tr>
	</tbody>
</table>

## Enable user definitions to be imported from an active directory
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ActiveDirectory.Domain" value="QUALISYSTEMS"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Domain names</td>
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
			<td>6.3 and above</td>
		</tr>
	</tbody>
</table>

## Manual import of users using LDAP or Active Directory
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key=ExternalUserPluginClass" value="LdapPlugin"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            `ActiveDirectoryPlugin`

`LdapPlugin` - requires additional configurations - see [LDAP Integration](../../../cloudshell-identity-management/access-control-and-authentication/ldap-integration.md)
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>`ActiveDirectoryPlugin`</td>
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

## Import user from external system (Active Directory, LDAP) if it does not exist in TestShell
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ExternalUserManagement.AutoImportUser" value="True"/>`</td>
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
			<td>6.1 and above</td>
		</tr>
	</tbody>
</table>

## Disable **DBCC TRACEON**
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="sql_sysadmin_membership_exists" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (True = DBCC TRACEON is enabled)</td>
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
			<td>6.1 and above</td>
		</tr>
	</tbody>
</table>

## Set the user cache timeout value in seconds
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="Authentication.UserCacheTimeoutSeconds" value="600"/>`</td>
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
			<td>600</td>
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

## Specify the path for the packaging logs
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="PackageLog" value="<InstallationDirectory>:\Program Files (x86)\QualiSystems\CloudShell\Server\Packaging Logs"/>`</td>
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
			<td>Installation path:=`<InstallationDirectory>:\Program Files(x86)\QualiSystems\CloudShell\Server\Packaging Logs`</td>
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

## Define the Instructions pane size
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="WS_InstructionsPanelWidth" value="500"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in pixels)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>540</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.1 and above</td>
		</tr>
	</tbody>
</table>

## Set the default Python version for new Python scripts

Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultPythonVersion" value="Python 3"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            `Python 2`

`Python 3`
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Python 3</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Execution Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.2 and above</td>
		</tr>
	</tbody>
</table>

## Show the **Drivers** management page
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideDriversTabInManage" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (True = Hide **Drivers** tab is enabled)</td>
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
			<td>9.2 and above</td>
		</tr>
	</tbody>
</table>

## Hiding the CloudShell Portal footer
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableQualiBrandingFooter" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (False = hide the footer)</td>
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
			<td>2021.3 and above</td>
		</tr>
	</tbody>
</table>

## Allowing the execution of orchestration scripts without the need for a blueprint driver
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ExecutePythonOrchestrationScriptsDirectly" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (False = disable the ability to run orchestration scripts directly from Quali Server and require the use of a blueprint driver)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>temp</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>9.3 and above</td>
		</tr>
	</tbody>
</table>

## Increasing the time allowed for Quali Server to stop during upgrade
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ServiceOnStopTimeSeconds" value="30"/>`</td>
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
			<td>30</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2021.3 and above</td>
		</tr>
	</tbody>
</table>

## Change the default Quali API port
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="QualiApi.Port" value="9001"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (port number)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>9000</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Quali API</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>6.4 and above</td>
		</tr>
	</tbody>
</table>

## Hide Approval Request content from CloudShell Portal
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableApprovals" value="False"/>`</td>
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
			<td>2023.1 and above</td>
		</tr>
	</tbody>
</table>

## Enabling the automatic removal of expired approval requests
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ApprovalsCleanup.EnableOldExpiredRequests" value="True"/>`</td>
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
			<td>2023.1 and above</td>
		</tr>
	</tbody>
</table>

## Setting the expiration timeout for approval requests
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ApprovalsCleanup.OldExpiredRequestsTimeoutInHours" value="168"/>`</td>
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
			<td>168</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2023.1 and above</td>
		</tr>
	</tbody>
</table>

## Setting the interval for detecting for expired approval requests
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ApprovalsCleanup.OldExpiredRequestsCheckIntervalInHours" value="24"/>`</td>
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
			<td>24</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2023.1 and above</td>
		</tr>
	</tbody>
</table>

## Keep ports in reservation when removing visual connectors
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableVisualConnectorDisconnectRemovePorts" value="false"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Boolean</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>true</td>
			<td>false</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2024.1 and above</td>
		</tr>
	</tbody>
</table>