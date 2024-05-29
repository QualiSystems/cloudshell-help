---
sidebar_position: 3
---

# Database User Permissions were not Correctly Configured

## Error Message

:::danger-one-line
Please check your database configuration on the server side
:::

## Description

When opening CloudShell portal or attempting to perform an action, such as reserving a Sandbox, the above error message is displayed.

## Possible Causes

- Quali Server installation or configuration was run prior to configuring database permissions, therefore, the server cannot write to the database.
- Database user permissions were not correctly defined.

## Solution

**To resolve the issue described above, follow these steps:**

1. Verify you have set the proper SQL database permissions. See [Database Prerequisites](../../install-configure/cs-system-requirements/database-prereq.md).
2. Restart Quali Server and try again to access the database.
