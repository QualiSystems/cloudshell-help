---
sidebar_position: 6
---

# Cleaning Up the Virtual Environments Folder

CloudShell creates a new virtual environment in the installation path on the Execution Server whenever:

- A new or updated shell or script is being run in CloudShell
- (Applies to resource and orchestration scripts only) The same script is being run with a different Python version - defined in the **Manage - Scripts** page

This takes up disk space as virtual environments of the older driver and script versions are retained. You can remove these older virtual environments to free up disk space.

:::note 
The installation paths are:

- On Windows: `%PROGRAMDATA%\QualiSystems\venv`
    
- On Linux: `/usr/share/QualiSystems/venv/`.
:::
**To remove unneeded virtual environments:**

- Restart the Execution Server.
    
    CloudShell will automatically clean up the unneeded virtual environments that were associated with previous driver and script versions.
