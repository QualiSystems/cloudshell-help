---
sidebar_position: 4
---

# Quali Server upgrade fails in the Restart Service step

## Description

When upgrading Quali Server, the Quali Server service sometimes does not stop gracefully, which causes the Restart Service step to fail. By default, CloudShell provides the Quali Server stop process 30 seconds to complete. However, if the Quali Server does not stop within that period, the upgrade process will shut down.

![](/Images/RN/181718.png)

## Solution

**To resolve this issue:**

- Stop the **Quali Server** service before upgrade.
    
    Or
    
- Use the `ServiceOnStopTimeSeconds` configuration key to increase the timeout period for the Quali Server stop process.
