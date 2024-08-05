---
sidebar_position: 17
---

# Migrating Shells to Python 3

In this article, we’ll explain the general process for upgrading a Python 2-based shell to Python 3.

:::note
Quali is currently working on updating all Quali-certified Python 2 shells to Python 3, so if you need a Python 3 version of a Quali-certified shell, please contact your Technical Account Manager.
:::

1. Open the shelldefinition.yaml file and promote the shell version. For example:
    
    ```yaml
    template_version: 2.0.0
    ```
    
2. Open the `drivermetadata.xml` file and add the PythonVersion="3" tag:
    
    ```xml
    <Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.CloudService2Driver" Name="CloudService2Driver" Version="1.0.0" PythonVersion="3">
    ```
    
3. In the `requirements.txt` file:
    
    1. Replace *cloudshell-core* with *cloudshell-logging*.
    2. Update the rest of the CloudShell packages to the latest versions.
4. In every `.py` file in the project:
    
    1. Update the code syntax to Python 3 format.
        
    2. Update the import of *cloudshell-core* to *cloudshell-logging* (no need to update the code).
        
        ```python
        from cloudshell.logging.qs_logger import get_qs_logger
        ```
        
5. Make sure all non-CloudShell packages support Python 3.
    
6. Pack and install the shell on CloudShell.
