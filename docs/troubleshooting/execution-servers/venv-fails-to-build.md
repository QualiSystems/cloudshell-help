---
sidebar_position: 4
---

# Failed Windows venv build: Visual C++ Build Tools dependency

## Description

When running a shell command in a sandbox, CloudShell is unable to create the virtual environment for the shell's package dependencies on the execution server. The following line is included in the `InstallRequirements.txt` log on the execution server:

:::danger &nbsp;
distutils.errors.DistutilsPlatformError: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": [https://visualstudio.microsoft.com/visual-cpp-build-tools/](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
:::

## Possible Causes

The appropriate Microsoft Visual C++ version is missing from the execution server.

## Solution

**To fix this issue:**

1. Install Microsoft Visual C++ Build Tools 14 on the execution server machine.
2. Restart the **TestShell Execution Server** service.
