---
sidebar_position: 2
---

# Job Scheduling Dashboard

*Job Scheduling is available as an add-on. For details, contact your account manager.*

The **Job Scheduling** dashboard enables you to view, manage and run the system’s automation tests. It uses three different queues to manage the execution process: the list of available automation suites on the **Executions** page, and the **Planned** and **Scheduled** queues on the **Queue** page.

At any given time, the dashboard header indicates the number of pending, scheduled, and running jobs.

![](/Images/CloudShell-Portal/Scheduling-Jobs/Header.png)

## Navigating the Job Scheduling dashboard

In the image below, hover over an area or option to learn more about it, or use the table that follows.

![](/Images/CloudShell-Portal/Scheduling-Jobs/Job-Scheduling-Dashboard.png)

The dashboard's areas are arranged as follows: 

| Area | Description |
|---|---|
| 1 | Run a free text search for items in the dashboard. |
| 2 | Switch between the **Executions**, **Queue**, **Edit Execution Server Types**, and **Update Local Tests** pages. |
| 3 | Use the filters to find items matching specific criteria. |
| 4 | The dashboard header displays the **Job Scheduling** page you are on and enables you to clear any filters you applied to the dashboard. |
| 5 | This area displays the status of the jobs, queues, and execution servers. Here you can manage the execution of jobs and entire suites. |

## Executions page

The **Executions** page lists all available automation suites for the logged-in user, including running and completed jobs. Here, you can add new automation suites, initiate executions, and view execution details, as well as run custom versions of any available suite.

You can sort the suites by **Name** or **Execution Date**, from the **Sort By** dropdown list:

- **Name** – displays the suite templates grouped by label, and sorted in an ascending alphabetical order (A-Z), by label name and then by suite name.
- **Execution date** – displays the suite templates sorted by the last execution date in descending order – from new to old.

The admin user and the suite owner can delete automation suites. Note that suite history will also be deleted.

## Queue page

The **Queue** page displays the lists of planned and scheduled jobs.

Running an automation suite enqueues the suite's jobs. Enqueued suites are added to the Pending queue. When the sandbox required for the job is active, the job is automatically moved to the Scheduled queue.

## Edit execution server types

Available for Administrators only.

This page enables you to create an Execution Server type for your custom execution servers.

For more information, see [Enabling custom execution servers](../../admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md#enabling-custom-execution-servers).

## Update local tests

Available for Administrators only.

This page enables you to update the local tests that can be added to jobs in the suite. The page displays the input parameters that are required to access and update the local tests.

To learn how to set this up, follow the configuration steps in [Enabling Automation Suites to Use Local Tests](../../admin/setting-up-cloudshell/source-control-using-local-tests-in-automation-suites/enabling-automation-suites-to-use-local-tests.md), or contact your Customer Success representative.
