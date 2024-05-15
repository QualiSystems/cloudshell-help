---
sidebar_position: 5
---

# Blueprint Catalog

## New blueprints section: visibility
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyDashboardNewTopologies" value="True"/>`</td>
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

## New blueprints section: number of blueprints to display
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="NewTopologiesCategoryCount" value="5"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (suggested 1-20)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>5</td>
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

## New blueprints section: maximum age for new blueprints
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="NewTopologiesCategoryDaysLimit" value="20"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (number of days)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>-1 (to not restrict to any timeframe)</td>
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

## Recently modified section: visibility
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyDashboardRecentlyModified" value="True"/>`</td>
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

## Recently modified section: number of blueprints to display
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RecentlyModifiedTopologiesCategoryCount" value="5"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (suggested 1-20)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>5</td>
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

## Display most recently reserved blueprints in the **Blueprint Catalog**'s **Featured** view, in which you are either the owner or a permitted user
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyDashboardRecentlyReserved" value="True"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
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

## Blueprint Catalog: Set the maximum number of recently reserved blueprints to display in the **Featured** view's **Recently Reserved** section
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="RecentlyReservedTopologiesCategoryCount" value="5"/>`</td>
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
			<td>5</td>
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

## Specify categories of the blueprints to display in the **Featured** section of the **Blueprint Catalog**
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyDashboardFeaturedCategories" value="Category 1, Category 2"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Category names, separated by comma</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>customer.config CloudShell Server installation directory</td>
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
			<td>6.0 and above</td>
		</tr>
	</tbody>
</table>

## Display all blueprints in the main Blueprint Catalog
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="TopologyDashboardAllTopologies" value="True"/>`</td>
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

## Blueprint display modes
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ShowAlphabeticTopologySubCategories" value="True"/>`</td>
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

## Hide the **Status** filter
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideEnvironmentsStatusFilter" value="False"/>`</td>
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

## Enable **View** type blueprints
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableEnvironmentTypeView" value="True"/>`</td>
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
			<td>6.2.3 and above</td>
		</tr>
	</tbody>
</table>

## Enable reference architecture flows
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableEnvironmentType" value="False"/>`</td>
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
			<td>6.2 and above</td>
		</tr>
	</tbody>
</table>

## Hide templates that require order to disable creating blueprints using those templates
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="HideOrders" value="True"/>`</td>
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
			<td>6.2 and above</td>
		</tr>
	</tbody>
</table>

