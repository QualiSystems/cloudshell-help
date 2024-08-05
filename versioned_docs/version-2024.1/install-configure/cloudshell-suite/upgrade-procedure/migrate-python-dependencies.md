---
sidebar_position: 4
---

# Migrate Python Dependencies to PyPi Server

When upgrading to CloudShell 8.2 and above, the upgrade process implements PyPi Server as the Python package management mechanism and disables the previous mechanism, which uses the `<PythonOfflineRepositoryPath>` configuration key to define the repository for the offline Python dependencies. Therefore, to allow your CloudShell scripts and drivers to use the packages residing in the old repository, you will need to copy them to the local PyPi Server repository.

:::note
This procedure only applies to your offline Python packages (i.e. packages that do not reside on the public PyPi repository) or if your CloudShell deployment is offline, as in online mode, PyPi Server downloads and serves online packages automatically when a script or driver requiring such packages is executed.
:::

**To copy the packages to the local PyPi Server repository:**

1. If you have access to the Quali Server machine, manually copy the packages from the old repository on the Quali Server and/or Execution Servers. If you don't have access to the Quali Server machine, use the Setup or Twine command line methods, as explained in [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).

2. Restart the relevant services (**Quali Server** service on the CloudShell Server machine, and **TestShell Execution Server** service on each updated Execution Server machine).
   
    :::note
    There is no need to remove the `<PythonOfflineRepositoryPath>` key from the customer.config file in the CloudShell and Execution Server installation directories as CloudShell will ignore it.
    :::