---
sidebar_position: 6
---

# Comparison Between CloudShell's Job Scheduling Offerings

This article lists special considerations, known issues and limitations with the New Job Scheduling, and provides a comparison between the two Job Scheduling offerings.

:::note
For brevity, the term "Job Scheduling (1st Gen)" denotes the original Job Scheduling which is accessed via CloudShell Portal.
:::

For a comparison of the APIs provided for the new and original Job Scheduling, see [API Support for New Job Scheduling and Job Scheduling (1st Gen)](../api-guide/new-jss-rest-api/api-support-for-jss-and-js.md).

|   | New Job Scheduling | Job Scheduling (1st Gen) |
| --- | --- | --- |
| General | Kubernetes-based, supports different testing frameworks (Robot is supported out-of-the-box), capable of hundreds of concurrent executions, uses an external web portal and has a dedicated RESTful API and live documentation page. | Supports TestShell Studio test, provided as a dashboard within CloudShell Portal and uses CloudShell's RESTful Quali API. |
| Email notifications | Planned | Available |
| Behavior in Maintenance Window | Only admins can log into Job scheduling Portal and execute suites during the Maintenance Window. Suites that were set to run automatically would be executed even if their start time is within the Maintenance Window. | Only admins can log into CloudShell Portal and execute suites. Suites that were set to run automatically would only be executed if the start time is outside the Maintenance Window. For details, see [Maintenance Window](../admin/cloudshell-manage-dashboard/maintenance-window.md). |
| Licensing | New Job Scheduling is a paid add-on. | 1st Gen Job Scheduling is a paid add-on. |