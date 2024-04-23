---
sidebar_position: 1
---

# What Are Automation Suites?

An automation suite defines execution settings for the specified test type. It groups together one or more jobs to be executed under the same automation plan. A job is a set of one or more tests that run sequentially on the same execution server, in the same sandbox. Each job in the suite can reserve a different test blueprint and select its own execution server. The automation suite's jobs can also run in parallel.

Automation suites are listed in the Executions page of the Job Scheduling dashboard. This includes automation suites attached to blueprints in which you have only "view-only" access to resources.

:::note
Your login group and domain determine which automation suites are listed. In other words, users do not see suites that are attached to blueprints or sandboxes outside of their permitted domains.
:::

![](/Images/Admin-Guide/Setting-Up-CloudShell/Automation-suites.png)

Note that migrated suite templates will be automatically connected to the Global domain (and available only to users with permissions to the Global domain). Suite owners can change the associated domain by logging to the portal and editing the suite template.

## Types of automation suites

There are three types of automation suites you can create and execute:

- Automation suite template to execute the same automation plan multiple times
- Customized version of a template that runs without modifying the template itself
- Adhoc automation suite (created on the fly and runs only once). Once executed, the automation suite cannot be modified.
