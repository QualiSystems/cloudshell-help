---
sidebar_position: 1
---
# Large Amount of Memory Used on Quali Server

## Error Message

:::danger-one-line
Quali Server is utilizing a large amount of memory
:::

## Description

Quali Server (RAM) in **Windows Task Manager**, increases to an unexpectedly high level.

## Possible Causes

1. This is a memory leak caused by open sessions of activities that were not closed or recycled after use.
2. There are paging or swapping configurations (in Windows) on the Quali Server machine.

:::note
Paging or swapping (in Windows) is a virtual memory management scheme, in which a computer stores/retrieves data from secondary storage (hard disk space as ROM) for use by its main memory (RAM). As a result, the entire virtual memory management scheme of the Quali Server machine, will rely on its RAM, 100% of the time.
:::

## Solution

**To resolve the memory leak issue described above, follow this step:**

- Consult your Technical Account Manager or Quali Support.

**To resolve the paging or swapping configuration issue described above, follow this step:**

- Enlarge the paging size (in Windows) to approximately 2 times the size of available RAM on the Quali Server machine.
    
    :::note
    It is recommended that you refer to the Microsoft website for the most up-to-date instructions
    :::
    

## Related Topics

[Minimum Requirements for CloudShell Servers and Clients](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm)
