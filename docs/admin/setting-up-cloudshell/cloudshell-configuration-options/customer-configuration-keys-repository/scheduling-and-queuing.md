---
sidebar_position: 17
---

# Scheduling and Queuing

***Job Scheduling*** *is available as an add-on. For details, contact your account manager.*

For local tests configurations, see [Working with local tests](../../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md#working-with-local-tests).

## Set allowed job overtime before termination
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="ExecutionJobDurationOvertimePercentage" value="20"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric (in percentage)</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Server installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10</td>
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
## Set number of recently completed jobs to display in the scheduler
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="NumberOfEndedExecutionJobSetsToDislpay" value="4"/>`</td>
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
			<td>2</td>
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
## Set the default job time buffer for extra time for tests, per job
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultCaluclationBufferInMinutes" value="10"/>`</td>
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
			<td>10</td>
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
## Lock a test for editing
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableTestShellStudioAccessControl" value="True"/>`</td>
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
			<td>7.1 and above</td>
		</tr>
	</tbody>
</table>
## Admin unlock permission
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="EnableAccessControlAdministration" value="False"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>True/False</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` TestShell Studio installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>False</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>TestShell Studio</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>7.1 and above</td>
		</tr>
	</tbody>
</table>
## Set the default severity level for suite notification emails
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="SuiteEmailNotificationDefaultSeverityLevel" value="ErrorsOnly"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>None, ErrorsOnly, SuiteAndErrors, All</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>ErrorsOnly</td>
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
## Set the report template to use for tests executed in the Job Scheduling dashboard

*To set the default execution report template for tests that were executed in Remote Runner, see Specifying the default report template.*
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="DefaultReportTemplate" value="Test Steps"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Test Results, Test Steps, Detailed Report, Failure Report</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Test Results</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>Before 7.0</td>
		</tr>
	</tbody>
</table>
## Set the maximum number of steps for test reports
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="MaxReportStepCount" value="10000"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>Numeric</td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal/TestShell installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>10000</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal, TestShell Studio and Runner</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>Before 7.0</td>
		</tr>
	</tbody>
</table>
## Set the default Reporting Profile for automation suite jobs
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="LoggingProfile" value="Results"/>`</td>
		</tr>
		<tr>
			<td>Possible values</td>
			<td>
            Results, Measurements and Results, All, None

For details, see [Setting the default Reporting Profile for automation suite jobs](../advanced-cloudshell-customizations.md#setting-the-default-reporting-profile-for-automation-suite-jobs).
            </td>
		</tr>
		<tr>
			<td>Where to add/change</td>
			<td>`customer.config` CloudShell Portal installation directory</td>
		</tr>
		<tr>
			<td>Default value</td>
			<td>Results</td>
		</tr>
		<tr>
			<td>Affected CloudShell Component</td>
			<td>CloudShell Portal</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>Before 7.0</td>
		</tr>
	</tbody>
</table>
## Enable non-admin users to edit and create suite templates
<table>
	<tbody>
		<tr>
			<td>Key</td>
			<td>`<add key="AllowRegularUsersToEditSnQ" value="True"/>`</td>
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
			<td>6.3 and above</td>
		</tr>
	</tbody>
</table>
