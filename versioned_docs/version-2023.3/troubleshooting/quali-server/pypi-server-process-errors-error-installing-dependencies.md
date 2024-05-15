---
sidebar_position: 3
---

# PyPi Server process errors: "error installing dependencies"

## Error Message

:::danger-one-line
Error: General Execution. Failed to start execution: Unexpected error – Failed to setup the Python environment, error installing dependencies. The PyPi server process might be down or inaccessible. See the documentation and logs for more details.
:::

## Description

When attempting to run a Python command that requires an external package, CloudShell serves the package to the Execution Server as follows:

- The Execution Server downloads the package from the local PyPi Server repository on the Quali Server machine.
    
    or
    

- If the package is missing from the local PyPi Server repository, Quali Server downloads it from the public PyPi repository and then serves it to the Execution Server.

If CloudShell cannot access this package or is forced to use an incompatible version of it, the above error message is displayed.

## Possible Causes

- There is a firewall blocking port 443 over HTTPS (SSL port used by Quali Server/Execution Server to access the public Python repository).
- The local PyPi Server failed to run or stopped running.
- There's an incompatible version of one or more of the shell or script's dependencies in the local PyPi repository and this is forcing the Execution Server to use that package.

## Solution

Before performing any of the following steps, please review the log files at the following location on the relevant execution server machine:

`C:\ProgramFiles(x86)\QualiSystems\TestShell\ExecutionServer\Logs\QsPythonDriverHost\InstallRequirements\_XXXX.log`

**To determine if there is a firewall blocking port 443:**

- If the Python command you are trying to run requires access to a package from the public Python repository, verify that port 443 over HTTPS is open on the Quali Server and all execution server machines.
    

**To investigate why the local PyPi Server failed to run:**

1. Check if the local PyPi Server is available by browsing to the Quali Server’s local PyPi Server (both from the Quali Server itself, and from the Execution Server machine): `http://<Quali-Server-IP-or-hostname>:8036`
    
    A "Welcome to pypiserver" page is displayed.
    
2. If the page is not displayed, restart your local PyPi Server from CloudShell Monitor on the Quali Server machine.
3. If you do not have online access, make sure all required packages are installed on your local PyPi Server. See [Loading packages to your PyPi Server repository](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md#loading-packages-to-your-pypi-server-repository).
    
4. If you have a package on the local PyPI Server, but it is not the correct version according to the requirements of the Python shell or script, you will need to load the specific version as well, see [Special considerations](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md#special-considerations).
    

**To fix an incompatible dependency issue:**

1. In the sandbox workspace, open the Activity Feed and locate the command's error message.
2. Find the relevant Execution Server and open the latest **InstallRequirements** log on the Execution Server machine's **QaPythonDriverHost** folder (usually at `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\Logs\QsPythonDriverHost`):
    
    ![](/Images/Troubleshoot/InstallRequirementsFolder.png)
    
3. Look for a missing dependency error that looks something like this:
    
    `No matching distribution found for pynacl>=1.0.1 (from paramiko<2.7,>=2.6->cloudshell-cli>=4.0.1->-r C:\Windows\TEMP\tmpD2BB.tmp (line 1))`
    
    This error tells us that **pynacl** is missing, but it was required by **paramiko**, which in turn was required by **cloudshell cli package**.
    
4. Don’t resolve dependencies one by one. Instead, go to the root and re-download all those dependencies. If there are duplicates in offline pypi already you can just skip copying them over.
5. You can also force CloudShell to build a new virtual environment for the shell or script's execution. You can do this in two ways:
    
    - Updating the shell or script and rerunning the command. This forces CloudShell to build a new virtual environment on the Execution Server, downloading the required dependencies in the process.
    - Restarting the Execution Server. A restart deletes all old virtual environments.
