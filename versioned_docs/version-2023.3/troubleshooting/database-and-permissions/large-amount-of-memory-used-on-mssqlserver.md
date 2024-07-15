---
sidebar_position: 5
---

# Large Amount of Memory Used on MSSQLSERVER

## Error Message

:::danger-one-line
MS SQL SERVER on the SQL database VM is utilizing a large amount of memory
:::

## Description

The MS SQL Server memory (RAM) increases to an unexpectedly high level.

![](/Images/Troubleshoot/Large-amount-of-memory-used_518x306.png)

## Possible Causes

This is not a memory leak but a Microsoft MS SQL Server default setting. MS SQL Server consumes as much memory as Windows allows it to consume. This is a by-design behavior of an MS SQL Server instance and is not a CloudShell issue.

## Solution

To resolve the issue described above, follow these steps:

You can configure the maximum RAM usage on an MS SQL Server Instance to limit its memory consumption to a reasonable level in the following two ways.

:::note
It is recommended that you refer to the Microsoft website for the most up-to-date instructions.
:::

1. Via the GUI Interface (MS SQL Server Management Studio).
2. Via the Standard MS SQL Command Query via a MS SQL session fired up by a programming language or, directly in MS SQL Server Management Studio.
    1. Connect to your target MS SQL Server instance.
    2. Open a new query page, pointing to "master”(one of the System Databases).
    3. Type/Run the following commands, one at a time:
        1. `sp_configure 'show advanced options', 1;`
        2. `GO`
        3. `RECONFIGURE;`
        4. `GO`
        5. `sp_configure 'max server memory', XXXX;`  
        :::note
        "XXXX” can be any number up to 17674, i.e. 17.674GB
        :::
        6. `GO`
        7. `RECONFIGURE;`
        8. `GO`
        9. `sp_configure 'show advanced options', 0;`
    4. Exit MS SQL Server Management Studio (you do not need to save anything).
