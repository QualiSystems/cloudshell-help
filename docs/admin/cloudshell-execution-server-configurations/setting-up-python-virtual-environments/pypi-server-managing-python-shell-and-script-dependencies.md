---
sidebar_position: 2
---

# PyPi Server - Managing Python Shell and Script Dependencies

CloudShell manages driver and script dependencies using **PyPi Server**. PyPi Server is a process that is installed with CloudShell on the **Quali Server** computer.
:::note
If you are upgrading to CloudShell 8.3 and above, make sure to migrate your offline and locally developed Python packages to the PyPi Server repository. For additional information, see [Migrate Python Dependencies to PyPi Server](../../../install-configure/cloudshell-suite/upgrade-procedure/migrade-python-dependencies.md).
:::
The PyPi server allows easy and organized development of Python packages for local use. A developer can remotely upload their own local Python packages to the local PyPi server, making them available to all the Execution Servers, without having to expose these packages in a public repository (such as public PyPi) or a testing repository (such as a local TestPy). For details, see [Configuring CloudShell to Execute Python Commands in Offline Mode](./configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).

As illustrated below, the following takes place when a Python script or driver is launched:

1. The execution server contacts the PyPi Server to get the required package versions.
2. If copies of the packages, with the right versions, reside in the local PyPi Server repository, the Execution Server will download them. However, if the repository contains packages that don't have the right versions (as defined in the shell or script's `requirements.txt` file \- see [Referencing other packages](../../../devguide/developing-shells/driver-deep-dive.md)), the operation will fail.
3. If the packages are missing from the local PyPi Server repository, the Execution Server will search and download the packages from public PyPi.

![](/Images/Admin-Guide/Setting-Up-CloudShell/PyPiServer-flow_673x332.png)

:::note Notes:
- To configure PyPi Server behind a proxy to allow the Execution Servers to reach PyPi Server, see [Using a Proxy to Download Python Packages from Public PyPi](../setting-up-python-virtual-environments/using-a-proxy-to-download-python-packages-from-public-pypi.md).
- To configure PyPi Server behind a reverse proxy for secure communication between the PyPi Server and the Execution Servers, see [Configuring PyPi Server to Work in Secure Mode](../../../install-configure/cloudshell-suite/secure-communication/config-secured-pypi.md).
:::
The following configuration modes are available for Python driver and script dependencies:

## Automatic online mode
:::note
The PyPi Server and Execution Servers must have access to the Internet in order for CloudShell to work in this mode.
:::
This is the default mode. When a Python driver or script that has dependencies is running, the execution server running the driver or script automatically creates a new virtual environment for the driver or script's instance and PyPi Server sends the dependencies (i.e. links to download the dependencies) to the execution server, which downloads the missing dependencies and loads all the required dependencies to the virtual environment.

If any of the dependencies are not in the local repository, PyPi Server searches for them online in public PyPi and sends links to their online locations for download to the local PyPi server. *To learn how to block PyPi Server from downloading certain packages in online mode, see the section below.*
:::important
Packages you add to the local PyPi Server repository will constrict all Python scripts and drivers that use any version of these packages to use the specific versions residing in the repository (if they require a different version, the execution will result in error). Therefore, for packages that are published in the public PyPi repository, the best practice is to specify the package versions in the `requirements.txt` instead of adding them to the local repository.
:::
### Blocking PyPi Server from downloading packages from public PyPi

If you have internet access but want to block PyPi Server from downloading packages that reside in the public PyPi repository, place all the Python dependencies in your local PyPi Server repository, including the dependencies of Shells you are using and any other dependencies required by custom scripts and drivers you have in CloudShell.

However, we do not recommend to place CloudShell dependencies in the repository (packages that come out\-of\-the\-box with CloudShell and packages that are released by Quali's Shells team), as this will force your scripts and drivers to use those package versions even if newer ones are in public PyPi (as explained in the note above). Therefore, we recommend to leave out any CloudShell dependencies (packages that include "cloudshell" in their name) to make sure you get backwards\-compatible CloudShell fixes and updates we publish from time to time on public PyPi.

## Manual offline mode

This mode is used when access to the Internet is unavailable for Quali Server and the execution servers. To make dependencies available in offline mode, the admin needs to download the dependencies and place them in the local PyPi Server repository residing on the Quali Server machine when installing or upgrading CloudShell.

For additional information, see [Configuring CloudShell to Execute Python Commands in Offline Mode](./configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).

## Loading packages to your PyPi Server repository

This procedure explains how to place specific packages in the local PyPi Server repository. This is required if Quali Server is in offline mode and cannot download packages from public PyPi and is useful for development and testing of drivers and scripts that require the use of packages, which are not published in the public PyPI Python repository.

There are two ways to load packages to your PyPi Server repository, you can **manually extract** the dependencies packages to the repository or **use command\-line** to load specific packages, as explained below.
:::note
This applies to both online and offline CloudShell deployments.
:::
### Special considerations

Packages you add to the local PyPi Server repository will constrict all Python scripts and drivers that use any version of these packages to use the specific versions residing in the repository (if they require a different version, the execution will result in error). Therefore, for packages that are published in the public PyPi repository, the best practice is to specify the package versions in the `requirements.txt` instead of adding them to the local repository.

If you are upgrading from version 8.2 or below, you will need to add many packages at once, for example, when migrating to the PyPi Server method for managing Python packages. If this is the case, copy the Python dependencies residing in the dependencies folder(s) defined by the `<PythonOfflineRepositoryPath>` key to the new PyPi Server repository. You can also manually copy the packages to the new location if you have access to the Quali Server machine.

### Manually uploading the dependencies to the local PyPi Server repository

You can manually copy the dependency packages to the new location if you have access to the Quali Server machine.

**To manually upload the dependencies:**

1. Copy the ZIP packages to the Quali Server computer.
    
    You can download the dependencies from the shell's [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
    
    For custom shells and scripts that are not available in the Community, you can download the dependencies listed in the `requirements.txt` file using the following command:
    
    ```python
    pip download -r requirements.txt
    ```
    :::warning
    For custom shells, make sure to install dependencies that match the operating system of the Execution Server (Windows/Linux).
    :::
2. If multiple dependencies are zipped up together \- extract the bundle to the local PyPi Server repository DON’T extract the actual packages.
    
    For example:
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/extracting-dependencies_633x90.png)
    
    By default, the local PyPi Server repository is at: `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Config\Pypi Server Repository`.
    

### Loading a package using command\-line

For this method, you need the access credentials to the PyPi Server repository, which were defined when running the Quali Server configuration wizard. If you do not have them, contact your IT administrator. By default, the username and password are "pypiadmin".

**To load a package using command\-line:**

1. Unzip the package. Make sure the package contains a `setup.py` file.
2. In the unzipped package, create a file named **.pypirc** with the following data (common practice when working with Python packages and uploading them to PyPi):
    
    ```python
    [distutils]
    index-servers =
      pypiserver
    
    [pypiserver]
    repository=http://<CloudShell server hostname/ip>:<pypi server port (default is 8036)>
    username=<pypi server username>
    password=<pypi server password>
    ```
    
    For example:
    
    ```python
    [distutils]
    index-servers =
      pypiserver
    
    [pypiserver]
    repository=http://192.168.54.37:8036
    username=pypiadmin
    password=pypiadmin
    ```
    
3. Save the file.
4. Open command\-line from the unzipped package folder location and upload using the suitable option: **Setup** or **Twine**:
    
    - **To upload using Setup:**
        
        ```python
        set HOME=<unzipped package folder path>
        python setup.py sdist upload -r pypiserver
        ```
        
    - **To upload using Twine:**
        
        (If the dist folder is missing from the package, run `python setup.py sdist`)
        
        ```python
        pip install twine
        python -m twine upload dist/* --config-file .pypirc -r pypiserver
        ```
        
    
    The package is uploaded to the local PyPi Server repository.
    

## Related Topics

- [Updating Python Dependencies for Shells, Drivers and Scripts](./updating-python-dependencies-for-shells-drivers-and-scripts)
