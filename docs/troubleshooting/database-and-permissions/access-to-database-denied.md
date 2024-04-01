---
sidebar_position: 1
---

# Access to Database Denied

## Error Messages

When access to the database is denied, one of the following error messages is displayed.

:::danger &nbsp;
- could not execute batch command.\[SQL: SQL not available\]

- check\_cells\_configuration ended with status Failed with error: HTTP Error 500: The server encountered an error processing the request. Please see the server logs for more details.

- close\_scenario ended with status Failed with error: HTTP Error 500: The server encountered an error processing the request. Please see the server logs for more detail
:::

## Description

Quali Server cannot access the CloudShell database. For example when performing an upgrade to the SQL server, during installation, when restarting the database, and when configuring Quali Server.

All the error messages described in this article stem from the same possible cause.

## Possible Causes

Database user permissions were not correctly defined.

## Solution

**To resolve the issues described above, follow these steps:**

1. Verify you have set the proper SQL database permissions. See [Database Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/db-prereqs.htm).
2. Restart **Quali Server** and try again to access the database.
