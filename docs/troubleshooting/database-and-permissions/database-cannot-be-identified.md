---
sidebar_position: 2
---

# Database cannot be identified

## Description

CloudShell cannot identify the database but you can access it locally from the SQL Management Studio.

This applies to scenarios where the database is installed locally or remotely, but you cannot connect to it from the Quali Server configuration wizard or when trying to build the Sisense ElastiCube database.

## Possible Causes

SQL Server browsing is not running on the database machine.

## Solution

**To resolve the issue described above, follow these steps:**

- Open Windows Services on the database machine and make sure the **SQL Server Browser** service is started.
