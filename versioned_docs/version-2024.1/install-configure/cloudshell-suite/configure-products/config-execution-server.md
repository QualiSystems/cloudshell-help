---
sidebar_position: 9
---

# Configure the Execution Server

:::note Notes
- CloudShell also provides Virtual Appliances that install Execution Servers on Linux VMs. For details, see [Linux Execution Server Installation and Configuration](../../../install-configure/linux-virtual-appliance).
- To run Ansible configuration management operations, a Linux-based Execution Server needs to be created and configured. For details, see [Ansible Playbook Development for Apps](../../../devguide/develop-config-management-scripts-for-apps/ansible-playbook-dev-for-apps).
- Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s).
:::

**To configure the Execution Server:**

1. Open the **Execution Server** configuration wizard, as explained in [Configure Application Settings](./configure-app-settings.md). If you are installing or upgrading CloudShell, this wizard will open automatically as part of the setup process.
2. In the **Server connectivity** window, specify the execution server settings:
    
    ![](/Images/IG2/Execution-Server-Connectivity.png)
    
    | Parameter | Description |
    | --- | --- |
    | server name or IP address | Specify the host name or IP address of the Execution Server machine. |
    | Username | Specify a CloudShell system administrator to use for the Execution Server configuration process. |
    | Password | Specify the CloudShell system administrator's password. |
    
3. Click **Next**.
4. In the **Execution server configuration** window, specify the execution server settings:
    
    ![](/Images/IG2/Check-for-CloudShell-required_34.png)
    
    | Parameter           | Description |
    |---------------------|-------------|
    | Server name         | Specify a name for the server. By default, the computer name is used as the execution server name. |
    | Server description  | Enter a short description of the server. This description helps portal users when selecting which execution server to use in a job template. |
    | Job slot capacity   | Specify the permitted number of concurrent jobs.<br/>**Note:** The execution of a job that has a blueprint takes up a concurrent sandbox license for the duration of the job execution. Therefore, if the concurrent sandbox limit has been reached, the execution of such jobs will end in Error. |
    | Command slot Capacity | Specify the permitted number of commands. Do not leave this field blank. You can specify 0 or any required number of command slots. The value of this field is not dependent on a license. |
:::tip
To assist you with setting up your job and command slot capacities, see [Optimizing Execution Provisioning](../../../admin/cloudshell-execution-server-configurations/optimizing-execution-provisioning.md). 
:::
5. Click **Next**.
6. In the **Select a license** window, specify the license to use.
    
    You can browse for the location of the license, specify the network address where the license resides, or use a Commuter license to temporarily use a network license for CloudShell on a computer that is not connected to the network.
    
7. Click **Next**.
:::note
When installing your execution server on a computer that is not a Windows Server machine, make sure to configure the machine's Power Options to prevent it from automatically going into sleep mode.
:::
9. When configuration completes, click **Finish**.
10. In CloudShell 8.2 and above, Python dependencies are served to the appropriate drivers and scripts through the **PyPi Server** process, which is installed with CloudShell - see [Configure PyPi Server in Offline Mode](./config-pypi-server-in-offline-mode.md).
    :::note
    In CloudShell 8.3, we have changed the mechanism that manages Python dependencies for the drivers and scripts. So if you are upgrading to CloudShell 8.3 or above, make sure to add the Python dependencies to the PyPi Server repository residing on Quali Server machine, to make them available to your execution servers. For additional information, see [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).
    :::
11. To enable the execution of tests that run GUI automation (Ranorex), write to Excel using the Filesystem library, use libraries that run GUI elements, or use the **Capture Image** TestShell Studio function,

## Related Topics

- [Configure the Execution Server to Run as a Process by Default](./config-execution-server-process.md).