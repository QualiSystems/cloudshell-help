---
sidebar_position: 4
---

Behavior Changes and Removed Capabilities
=========================================

Behavior Changes
----------------

The following list includes changes in behavior introduced into CloudShell by version:

| Capability | Change Description | Changed in Release |
| --- | --- | --- |
| Erlang version | To accommodate the upgraded RabbitMQ version (3.12.0) explained in [Breaking Changes](#breaking-changes), Erlang will be upgraded to newer version 25.2.3. This version is the maximum supported Erlang for RabbitMQ 3.12.0. Environment variables will be updated accordingly to suite the new Erlang version. | 2023.2 EA |
| Python versions | In 2022.1, we updated CloudShell's Python versions as follows: <ul><li>2.7.10 to 2.7.18</li><li>3.7.1 to 3.9.9</li></ul> This may cause unexpected behavior if your automation is constrained to use specific Python versions.  | 2022.1 EA |
| API tokens | To increase security and to allow time-based token access to the system, CloudShell 2022.1 generates a time-based token for our product APIs. In previous versions, only some of the APIs used such a system. By default, the token validity period is 5 hours. Notes: <ul><li>For security reasons, we recommend upgrading to the latest version of CloudShell.</li><li> Existing automation code utilizing Quali API may need to be updated to regenerate a token whenever an existing token expires.</li></ul> | 2022.1 EA |
| Reserve form | The Blueprint Name field in the Reserve form is no longer editable.  | 2022.1 EA |
| New Job Scheduling | In this CloudShell version, the Test Execution Servers use Robot Framework 4.0. As such, tests using an older version of the framework might not work as expected. For details, see this [section](https://github.com/robotframework/robotframework/blob/master/doc/releasenotes/rf-4.0.rst#backwards-incompatible-changes) in the Robot Framework 4.0 release notes. | 2022.1 EA |
| Updated BI dashboards | The following out-of-the-box dashboards will be replaced by the new 2021.2 GA version (customized out-of-the-box dashboards will be left as is): Blueprints, Inventory, Sandboxes, Users, and Utilization. Viewer access is provided out-of-the-box, allowing CloudShell users to view and use the dashboards. Initial configuration, as well as the ability to add/customize dashboards and use legacy versions requires privileged access. For details, contact your Quali Account Manager. | 2021.2 GA |
| New Job Scheduling | For security reasons, the Mongo deployment is no longer accessible outside the Kubernetes cluster and as a result does not get an external IP. However, external access can easily be configured using the `externalAccess` tag n the mongodb section of the customer-values-yaml. For details, see Upgrade Considerations for New Job Scheduling. | 2021.2 EA |
| New Job Scheduling |  Before upgrading from an earlier version, make sure to run the following on the Kubernetes client machine: <pre>kubectl delete secret cloudshell-acr -n cloudshell</pre>  | 2021.2 EA |
| New Job Scheduling | Job Scheduling Service needs to be restarted after 2021.2 EA upgrade. This only applies to 2021.2 EA version and will be fixed for the GA. | 2021.2 EA |
| Blocking the option to link license pool to global domain | When a user tries to attach a license pool to the Global domain they will now get a message stating that pools can't be associated with the global domain. This does not apply to existing associations of license pools with Global domain. | 2021.2 EA |
| Periods no longer supported in abstract resource names | Abstract resource names no longer support '.' (period) characters. Furthermore, importing blueprints will replace periods with underscores '\_' in abstract resource names. | 2020.2 |
| New CloudShell installation prerequisites |  As of version 2020.2 we are moving some of our Sandbox related data to be managed and stored in Mongo DB instead of SQL Server. This allows CloudShell to drastically improve its performance, allowing hundreds of Sandbox reservation per minute. <ul><li> 2 new prerequisites are installed on Quali Sever: <ul><li> MongoDB </li><li> RabbitMQ </li></ul></li><li> Quali Server's Installation Wizard and **QsConfig** have gone through some changes. </li></ul> New screens and some updated to existing screens have been added to the flow. | 2020.2 GA |
| DB optimizations clean-ups | Data expiration is defined by default to be saved indefinitely. Admins can now define the time to keep sandbox event log data via the SandboxLogAndOutputSaveDuration configuration key. | 2020.2 GA |
| "In Use" Sandbox overtime |  When using Job Scheduling, sandboxes will now end once all tests in the job are completed or the sandbox reaches its defined duration (the earlier of the two). This applies also to sandboxes that include L1 switches or use an _ActivateTopology_ APImethod. | 9.3 GA Patch 5 |

Breaking Changes
----------------

The following list includes capabilities that have been removed from CloudShell and the version number in which the change was introduced.

| Capability | Change Description | Changed in Release |
| --- | --- | --- |
| RabbitMQ upgrade and new location | The embedded RabbitMQ will be upgraded to version 3.12.0 and relocated from …\\Cloudshell\\Server\\SandboxService\\RabbitMQ\\rabbitmq\_server\\ to …\\Cloudshell\\Server\\Rabbit. <br/> Any custom settings like password must be manually relocated to the new destination files. Previous versions of RabbitMQ can be uninstalled.  | 2023.2 EA |
| Partial search in sandboxes dashboard | The **Sandboxes** dashboard does not support searching by partial sandbox id. | 2021.2 EA |
| Blueprint Build Type - Deprecation | It is no longer possible to reserve blueprints of type _Build_. | 2020.2 GA |
| Licensing |  As of version 9.3, customers that have a Team Tier license will not be able to:  <ul><li> 1.  Have more than 50 concurrent licenses </li><li> 2.  Use white labeling </li><li> 3.  SSO to the system </li></ul> | 9.3 GA |
| Licensing | Customers that will not have a job scheduling add-on license will not see the job scheduling tab in the portal, and will not be able to start jobs using API calls. | 9.3 GA |