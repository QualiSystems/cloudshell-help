---
sidebar_position: 5
---

# Updating Python Dependencies for Shells, Drivers and Scripts

This article explains how to update your local PyPi Server repository. This is required when you upgrade a Shell, driver or script that has new/updated dependencies. It applies to both online and offline dependencies.

## Updating offline Python dependencies

**To update offline Python dependencies:**

1. Make a backup copy of the PyPi Server repository folder so you have the option to revert back if any errors occur.
2. Download the latest Python dependencies package zip file locally and extract the zip file to the local PyPi Server repository. See [Configuring CloudShell to Execute Python Commands in Offline Mode](./configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).
3. Restart any execution server that has a live instance of the relevant driver or script. This requires running the Execution Server's configuration wizard - see [Configure the Execution Server](../../../install-configure/cloudshell-suite/configure-products/config-execution-server.md).
    

## Updating online Python dependencies

In online mode, the PyPi Server process automatically downloads and extracts the appropriate dependencies file to the driver or script's virtual environment every time a new instance of the driver or script is created.

**To update online Python dependencies:**

- If there is a live instance of the driver or script, restart the execution server to delete the instance, as explained above. The next time a command of the driver or script is executed, PyPi Server will download the Python dependencies.

## Related Topics

- [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md)
- [Configuring CloudShell to Execute Python Commands in Offline Mode](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md)
