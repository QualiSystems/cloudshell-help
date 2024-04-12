---
sidebar_position: 4
---

# Configuring CloudShell to Execute Python Commands in Offline Mode

When a Python driver or script runs in CloudShell, the Execution Server gets the Python packages from the local PyPi Server repository or downloads them from the online public PyPi repository (if they're missing from the local PyPi) and places them in the driver or script's virtual environment on the execution server.

PyPi Server is installed on the Quali Server machine and requires an internet connection, so if Quali Server and/or the execution servers work offline (i.e. do not have an internet connection), or the packages are missing from public PyPi, you will need to copy the required Python packages, including the out-of-the-box ones, to the local PyPi Server repository on the Quali Server computer. When a driver or script runs, the **PyPi Server** process running on the Quali Server computer will copy the required dependencies from this folder to the driver or script's virtual environment on the appropriate execution server. For additional information, see [Loading packages to your PyPi Server repository](./pypi-server-managing-python-shell-and-script-dependencies.md#loading-packages-to-your-pypi-server-repository).
:::warning
The `<PythonOfflineRepositoryPath>` configuration key that defines the local offline package folder has been deprecated in CloudShell 8.3. Therefore, when upgrading to CloudShell 8.3 and above, you will need to configure PyPi Server as the mechanism for serving Python dependencies to your Python drivers and scripts. For details, see this [Migrate Python Dependencies to PyPi Server](../../../install-configure/cloudshell-suite/upgrade-procedure/migrade-python-dependencies.md). To learn more about PyPi Server, see [PyPi Server - Managing Python Shell and Script Dependencies](./pypi-server-managing-python-shell-and-script-dependencies.md#pypi-server---managing-python-shell-and-script-dependencies).
:::
In this article (perform the procedures that are relevant for you):

- [Add the out-of-the-box dependencies package to the local PyPi Server repository](#add-shell-and-script-packages-to-the-local-pypi-server-repository) (required)
- [Add Shell and script packages to the local PyPi Server repository](#add-shell-and-script-packages-to-the-local-pypi-server-repository)

## Add the out-of-the-box dependencies package to the local PyPi Server repository

*This procedure applies to CloudShell deployments in which the Quali Server and/or the execution servers are offline and must be done when installing or upgrading CloudShell.*

Some native CloudShell operations require running Python code that uses certain Python packages. These include out-of-the-box CloudShell orchestration, App deployments on private cloud providers and configuration management operations. These dependencies are included in the `OfflinePackageRepository.zip` package CloudShell provides with every CloudShell release.

**To add out-of-the-box dependencies to the local PyPi Server repository:**

- Download the extract the `OfflinePackageRepository.zip` **Offline Package** zip file from [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247) and extract it to the local PyPi Server repository (by default: `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Config\Pypi Server Repository`).

## Add Shell and script packages to the local PyPi Server repository

*This procedure applies to CloudShell deployments that are either offline or require the use of Python packages that are not in the public PyPi repository.*

Shells and scripts running in CloudShell may also rely on packages in the public PyPi Python repository. Therefore, each time you add a Shell or script to CloudShell, to enable your offline execution servers to run this Shell or script, make sure to download its dependent packages and place them in the local PyPi Server repository as well.

**To add Python packages to the local PyPi Server repository (do this for each shell or script you add into CloudShell):**

1. From an online computer, do one of the following:
    
    - Connect to the Internet and download each dependency specified in the `requirements.txt` file with the following command: 
        :::note
        For Python 2 shells or scripts, use a Python 2.7.10 (and up) interpreter and for Python 3, use a 3.x interpreter. The Python version is defined in the shell's `drivermetadata.xml`'s `PythonVersion` property and when editing the script in CloudShell Portal's **Manage>Assets** page.
        :::
        ```python
        pip download -r requirements.txt
        ```
        
        The Shell or script's requirements are downloaded as zip files.
        
    - In [Quali Repositories](https://github.com/orgs/QualiSystems/repositories), locate the Shell and click the Shell's **Download** link. In the page that is displayed, from the **Downloads** area, extract the dependencies package zip file.
2. Place these zip files in the local PyPi Server repository.

## Related Topics

- [PyPi Server - Managing Python Shell and Script Dependencies](./pypi-server-managing-python-shell-and-script-dependencies.md)
- [Updating Python Dependencies for Shells, Drivers and Scripts](./updating-python-dependencies-for-shells-drivers-and-scripts.md)
