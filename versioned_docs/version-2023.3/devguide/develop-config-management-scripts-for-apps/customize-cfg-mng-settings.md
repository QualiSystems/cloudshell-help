---
sidebar_position: 4
---

# Customizing Configuration Management Settings

As a CloudShell system administrator, you can modify certain attributes related to configuration management operations.

**To customize configuration management settings:**

1. As system administrator, log into **Resource Manager Client**.
2. In the **Admin** ribbon, click **Resource Families**.
    
    The **Resource Families** explorer is displayed.
    
3. Click the **Configuration Services** service family and then select the appropriate model:
    
    - **Ansible Configuration**
    - **Custom Script Configuration**
    
    The model's **Parameters** pane is displayed.
    
    ![](/Images/Admin-Guide/Inventory-Operations/CustomScriptConfiguration.png)
    
4. Select the desired attribute.
    
    The following attributes are provided by default:
    
    | Attribute | Description |
    | --- | --- |
    | Ansible Additional Arguments | (For Ansible) Arguments to be passed to the execution of the playbook (`Ansible-playbook` command). For example, `-v` will set verbose mode on, `-f` will set the maximum number of VMs to be handled in parallel. Multiple arguments can be given, separated by spaces. For additional information on possible arguments, see the official Ansible documentation.<br/>**Note:** The arguments are defined globally for all Apps using Ansible.<br/>**Important:** To configure Ansible to connect to certified hosts only (Linux VMs with a valid 'known\_hosts' key), include the following additional arguments: `--ssh-extra-args='-o StrictHostKeyChecking=yes'` |
    | Execution Server Selector | Enables CloudShell administrators to indicate which Execution Server or group of Execution Servers will be used to perform configuration management operations on App VMs. This is recommended for CloudShell deployments that have different sites or domains. |
    | Supports Ansible | (For Ansible) Indicates that an Execution Server has a compatible version of Ansible and can run the Ansible configuration management operations. Enabled by default. |
    | Timeout Minutes | Maximum number of minutes allowed for connection to the target machine. App deployment will fail when the timeout period has passed. 20 minutes by default. |
    
5. Click **Edit Rules**.
    
    The **Attribute Rules** dialog box is displayed.
    
6. You can also specify a **Default Value** for this attribute.
7. Click **OK**.
8. Save your changes.
