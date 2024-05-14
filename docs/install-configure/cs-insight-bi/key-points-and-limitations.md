---
sidebar_position: 3
---

# Key Points And Limitations

- Insight dashboards require the logged in user to have an email defined in their user profile.
- Utilization is only saved for connectable resources. Chassis or blade utilization is calculated according to the ports usage.
- Utilization requires CloudShell inventory to have at least one connectable resource.
- Resource utilization is updated once a day at 1:00 AM, according to the time zone of the CloudShell database server. At this time, resource utilization data is calculated and stored in the CloudShell database. The data is then streamed to Sisense based on the Sisense [Synchronization](./install-insight/synchronization.md) configuration.
- Insight dashboards display resource utilization data in a resolution of every few seconds.
- Blueprint usage is determined according to the duration of sandboxes for the blueprint.
- Where resources are shared in multiple sandboxes, the usage of such resources can be higher than 24 hours in a day.
- Utilization is only saved for resources that are stored in the inventory.
- The Virtualization, Automation Suites and Automation Test dashboards require Sisense customization permissions. For details, contact your Quali Account Manager.
- Automation suites executions are available only for TestShell executions (there is no support for custom execution servers).
- Data related to Sandbox Save and Restore is stored and can be displayed in customized **Insight** dashboards.