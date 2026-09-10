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


## Resource Enrichment Cache
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableResourceEnrichmentCache" value="false"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False (True - This cache promotes faster retrieval of resource details when rendering diagrams. False - disables for specific problematic scenarios - very large diagrams)</td>
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

## Environment variable configuration overrides

*Starting with CloudShell 2024.1.0.2682*, CloudShell supports overriding `customer.config` values using environment variables. This enables configuration management without modifying files directly, which is useful for containerized deployments and automation scenarios.

To override a configuration key, set an environment variable whose name is **exactly the configuration key name** — there is no prefix and no character substitution. For example, to override `<add key="UseRabbitServer" value="false"/>`, set an environment variable named `UseRabbitServer`.

<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>N/A (the environment variable is named after the configuration key it overrides)</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Any value that would be valid in the corresponding `customer.config` key</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>System environment variables on the machine running the CloudShell component</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>All (Quali Server, Portal, Execution Server)</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2024.1.0.2682 and above</td>
		</tr>
	</tbody>
</table>

:::note
Environment variable overrides take precedence over values defined in `customer.config`. This allows you to manage configuration centrally (e.g., via orchestration tools or container runtime) without modifying config files on disk.

An environment variable that is unset or set to an empty string is ignored, and the value from `customer.config` (or the key's built-in default) is used instead. You therefore cannot use an environment variable to override a key to an empty value.

This applies to the great majority of configuration keys, but not to every one of them — a small number are read straight from the configuration file and ignore the environment. If a key does not respond to an environment variable, set it in `customer.config` instead.
:::

## Allow unicode characters in script command context

When set to `true`, allows passing unicode characters to script environment variables. This is useful when usernames or other context values contain unicode characters. By default, unicode characters are suppressed when CloudShell builds the environment variables that pass the command context to a script.

The Execution Server reads this key, so set it on each Execution Server that runs the affected scripts — setting it on the Quali Server has no effect. Restart the Execution Server service after changing it.

<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AllowUnicodeForCommandContext" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` Execution Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>Execution Server</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>2024.1.0.2669 and above</td>
		</tr>
	</tbody>
</table>

## Configure AI Assistant chat menu item in Portal

Administrators can configure an AI Assistant menu item in the Portal by setting a URL template. This adds a menu item that opens an AI chat interface in a new browser tab, passing context about the current Portal page (and the current sandbox, when applicable) to the external AI chat service.

The URL template can include placeholders, wrapped in curly braces, that are replaced with the actual context values at runtime. For example, the template `https://your-ai-chat-url.com?page={pageUrl}&amp;user={user}` opens the chat URL with the current page path and the logged-in user's name filled in.

Because the template is set as the value of an XML attribute in `customer.config`, any literal `&` that separates URL query parameters must be written as `&amp;`. You can also use commas instead.

The following placeholders are supported:

**Always available** (provided on every Portal page):

| Placeholder | Description |
| --- | --- |
| `{user}` | Username of the logged-in user. |
| `{domain}` | Name of the current domain (empty if none). |
| `{version}` | CloudShell version (without the build number). |
| `{pageType}` | Identifier of the current Portal page (empty if not available). |
| `{pageUrl}` | Path and query string of the current Portal page. |
| `{pageContent}` | The visible text of the Portal's main content area, with runs of whitespace collapsed to single spaces and **truncated to the first 2000 characters**. |
| `{context}` | All of the other placeholder values as a single JSON object. Use this to hand the whole context to a chat service that takes one free-text query — it is the placeholder used in the example that ships in `customer.config`. |

**Available only inside a sandbox or blueprint page** (replaced with empty values on all other pages, such as the catalog or inventory):

| Placeholder | Description |
| --- | --- |
| `{sandboxId}` | ID of the current sandbox/blueprint. |
| `{sandboxName}` | Name of the current sandbox/blueprint. |
| `{status}` | Reservation status of the sandbox. |
| `{setupStage}` | Current setup stage of the sandbox. |
| `{resourceList}` | Comma-separated list of resource names in the sandbox/blueprint. |
| `{resourceCount}` | Number of resources in the sandbox/blueprint. |

:::note
- Sandbox placeholders (`{sandboxId}`, `{sandboxName}`, `{status}`, `{setupStage}`, `{resourceList}`, `{resourceCount}`) are only populated when the user opens the AI Assistant from within a sandbox or blueprint diagram. On any other page they are replaced with empty values.
- Each value is URL-encoded automatically when it is substituted, so do not encode the placeholders yourself.
- A placeholder that is not in the list above — including a misspelled one — is replaced with an empty string rather than reported as an error. If a template produces a URL with missing values, check the placeholder spelling first.
:::

:::warning Both `{pageContent}` and `{context}` send Portal content off-site
`{pageContent}` carries whatever text is currently on the user's screen, and `{context}` embeds `{pageContent}` along with every other value. Using either one sends that content — which can include resource names, addresses, and attribute values shown on the page — to the external chat service in the URL, where it may be logged or retained by that service. Point the template only at a service your organization is willing to share this data with, and prefer the narrower placeholders if you do not need the full page.
:::

<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AiChatUrl" value="https://your-ai-chat-url.com?page={pageUrl}&amp;sandbox={sandboxId}"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>A URL template containing any of the supported placeholders listed above.</td>
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
			<td>2026.1 and above</td>
		</tr>
	</tbody>
</table>

## Keep Portal users signed in across application-pool recycles

When enabled, the Portal rebuilds a user's session from the sign-in cookie after an application-pool recycle instead of forcing a re-login. This applies to standard and SSO/SAML users, and lets background page refreshes recover silently. Set to `False` to restore the previous behavior of signing users out on recycle.

<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableSessionRehydration" value="True"/>`</td>
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
			<td>2026.1 and above</td>
		</tr>
	</tbody>
</table>