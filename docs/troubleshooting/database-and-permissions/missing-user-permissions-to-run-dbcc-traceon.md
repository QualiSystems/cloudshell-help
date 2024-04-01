---
sidebar_position: 4
---

# Missing User Permissions to Run DBCC TRACEON

## Error Message

:::danger &nbsp;
Saving resource family changes Error:

User 'NT AUTHORITY\\SYSTEM' does not have permission to run DBCC TRACEON.
:::
## Description

Quali Server cannot access the CloudShell databases. This usually occurs when attempting to install or run Quali Server before configuring database permissions.

## Possible Causes

- Quali Server installation or configuration was run prior to configuring database permissions, therefore, the server cannot write to the database (`NT AUTHORITY\SYSTEM`).
- Database user permissions were not correctly defined.

## Solution

**To resolve the issue described above, follow these steps:**

1. Verify you have set the proper SQL database permissions. See [Database Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/db-prereqs.htm). 
2. Restart Quali Server and try again to access the database.
