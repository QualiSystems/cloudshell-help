---
sidebar_position: 1
---

# Configure Execution Server for Ansible

The first thing you need to do is set up an Execution Server that can execute Ansible configuration management. For this you will need a Linux Execution Server with the following utilities and configurations:

- Execution Server installed on Linux machine, with the ansible attribute enabled. See [Linux Execution Server Installation and Configuration](../../../install-configure/linux-virtual-appliance/).
- Python 3.7 (Python 3.9.x is provided out of the box with the **Linux Execution Server** virtual appliance or script)
- Ansible 2.9.27
- pywinrm 0.4.2
- CentOS sshpass

## Indicate Execution Servers that run Ansible

This section explains how to indicate that the Execution Server installation has Ansible installed and therefore can support Ansible operations on Apps.

:::note Notes
- If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository).
- Quali Server must be running when configuring the Execution Server.
::: 

**To configure an Execution Server using CloudShell Portal:**

1. In the Execution Server machine, log in to CloudShell Portal as administrator.
2. In the **Manage** dashboard, click **Execution Servers** and then select **Servers**.
3. In the **Servers** page, click the Execution Server's name.
    
    The **Attributes** window pops up.
    
    ![](/Images/Admin-Guide/Inventory-Operations/AnsibleAttributesPane.png)
    
4. Select the **Supports Ansible** check box to use this Execution Server for Ansible configuration management.
5. If you have several Execution Servers that support Ansible but want to use this one, see the following section:
    
    This is recommended for geographically distributed deployments where you want a local Execution Server to perform operations on cloud providers that are physically nearest that Execution Server. For more information, see [Managing Public Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains.md) or [Managing Private Cloud Apps in Domains](../../../admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains.md).
    
    **To set a specific Execution Server for Ansible configuration management:**
    
    1. Select the attribute and specify a value.
    2. Specify the same value on the **Execution Server Selector** attribute in the cloud provider resource and/or in the **Resource Manager Client \> Configuration Services \> Ansible Configuration** service model.
        
        By default, CloudShell will use the Execution Server defined in the cloud provider resource. If it is not available, CloudShell will use the Execution Server defined in the **Ansible Configuration** model. Execution Servers specified on the deployed App shell/resource are not used for configuration management.
        :::note
        You can also configure the designated Ansible Execution Server to perform additional operations, such as running shells or commands.
        :::
6. Click **Done**.

**To configure an Execution Server via command-line:**

1. In the Execution Server machine, run command-line as administrator.
2. Navigate to the `/root/ExecutionServer` folder (or `opt/ExecutionServer` for Linux machines on Azure or AWS).
3. Run the following command with your details:
    
    ```python
    mono QsExecutionServerConsoleConfig.exe /s:localhost /u:admin /p:admin /esn:my_es /ansible /a:"{'Execution Server Selector':'CloudShell domain'}" ***
    ```
    
    | Attribute | Description |
    | --- | --- |
    | /s | Quali Server IP address or hostname |
    | /u | CloudShell admin to connect to CloudShell server |
    | /p | CloudShell admin's password |
    | /esn | Execution Server name to register with CloudShell |
    | /ansible | Parameter indicating to Ansible configuration management that this Execution Server supports Ansible operations |
    | /a |     Additional attributes to set on the Execution Server. For example, passing to that option the value `{'attributeName1':'attributeValue1', 'attributeName2':'attribauteValue2'}` adds two attributes and their values.<br/>Note that the attributes must have the **Execution Server Selector** rule. |
    
    :::note Notes
    - If the Execution Server VM does not have an internet connection, make sure the `OfflinePackageRepository` zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository).
    - Quali Server must be running when configuring the Execution Server.
    - Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: `"admin1234!"`
    :::  
    

## Perform additional configurations on the Execution Server machine

To run Ansible configuration management on this Execution Server, several additional configurations are needed.

**To configure the Execution Server to run Ansible:**

1. Install Ansible as globally available command line utility.
    
    ```javascript
    python3 -m pip install ansible
    ```
    
    :::note To install in an offline environment:
    1. Download the offline dependencies from [here](https://help-archive.quali.com/help%20versions/attachments/PY39-linux-ansible-reqs-2.14.0.zip).
    2. Place them in the Quali Server offline repository:
        
        `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Config\Pypi Server Repository`
        
    3. Run the following command:
        
        ```javascript
        python3 -m pip install ansible --index-url=http://<QUALI_SERVER_IP>:8036/simple --trusted-host <QUALI_SERVER_IP>
        ```
        
        Replace \<QUALI\_SERVER\_IP\> with the IP of the machine containing the offline packages.
        
        **index-url** tells pip to download from local repo rather than public pypi, and **trusted-host** says you can trust this local server
    :::    
    
2. Verify install by running:
    
    ```javascript
    ansible --version
    ```
    
    ![](../../Images/Linux2/ansible status.png)
    
3. Install **pywinrm** into same python environment as global Ansible. This library is required by Ansible to connect to Windows Apps.
    
    ```javascript
    python3 -m pip install pywinrm
    ```
    
4. Install the **CentOS sshpass** module to allow password authentication to Apps.
    
    ```javascript
    yum install sshpass
    ```
    

## Next...

Make sure to [Enable WinRM on Windows VMs to Support Configuration Management](../../enable-winrm-on-win-vm-for-cfg-mng.md).
