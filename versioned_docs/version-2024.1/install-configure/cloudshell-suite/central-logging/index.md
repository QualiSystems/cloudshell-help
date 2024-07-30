# Central Logging Configuration

:::tip
In 2021.2 GA, these capabilities are supported for the Quali Server, CloudShell Execution Server and New Job Scheduling services. CloudShell Portal, Resource Manager Client and individual drivers that appear in ProgramData\\QualiSystems\\Logs do not publish logs in the new JSON format.
:::
Starting with CloudShell 2021.2 GA, it is possible to integrate CloudShell with 3<sup>rd</sup> party log management tools (such as Elastic Stack) in order to view CloudShell log data in from a central location. In this mode, log files in JSON format are added in addition to the standard CloudShell log files and sent to the configured log management server, allowing you to easily search and filter their data.

<details>
<summary>Log file locations</summary>

JSON log files:

- ~`\QualiSystems\CloudShell\Server\JsonLogs`
- ~`\QualiSystems\TestShell\ExecutionServer\JsonLogs`

Standard log files:

- ~`\QualiSystems\CloudShell\Server\Logs`
- ~`\QualiSystems\TestShell\ExecutionServer\Logs`
</details>

For example, Central Logging allows you to (<span style={{ color: 'red' }}>**1**</span>) see all logging details pertaining to a specific flow (across different CloudShell components) or CloudShell server/microservice in one place, (<span style={{ color: 'red' }}>**2**</span>) search for logs and log data, and (<span style={{ color: 'red' }}>**3**</span>) see details pertaining to specific log entries and system messages:

![](/Images/IG2/CentralLoggingStack.png)

Central Logging configuration is a two step process:

- [Configure log4net Appenders for Central Logging](./config-log4net.md)
- [Configure Elastic Stack for Central Logging](./modify-cloudshell.md)

## Related Topics

- [How to Track Event Threads Using Trace ID or Reservation ID](./track-threads.md)