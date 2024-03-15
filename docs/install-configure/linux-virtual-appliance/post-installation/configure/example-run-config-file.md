---
sidebar_position: 1
---

# Example: How to Run the Configuration File

In the `/root/ExecutionServer` folder (or `opt/ExecutionServer` for Linux machines on Azure or AWS), run the appropriate command:

- **To use this Execution Server for general operations:**
    
    ```javascript
    mono QsExecutionServerConsoleConfig.exe /s:ServerAddress /u:User /p:Pass /esn:ESName
    ```
    
    For example:
    
    ```javascript
    mono QsExecutionServerConsoleConfig.exe /s:192.168.30.56 /u:admin /p:admin /esn:ESName
    ```
    

- **To use this Execution Server for Ansible configuration management operations, you need to set the /ansible flag, which tells CloudShell to use this Execution Server to run Ansible playbooks.**
    
    ```javascript
    mono QsExecutionServerConsoleConfig.exe /s:ServerAddress /u:admin /p:admin /esn:ExecutionServerName /ansible
    ```
    
    And perform the steps in the [Configure the Linux Execution Server for Ansible](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv-for-ansible.htm) article that follows.
    
- **If you have several Execution Servers that support Ansible but want to use a specific Execution Server for certain operations, use the Execution Server Selector attribute to associate the Execution Server to the appropriate cloud providers, or associate it to the Ansible shell to designate it globally for Ansible operations.**
    
    1. First, set the **Execution Server Selector** attribute with a value on the Execution Server.
        
        For example:
        
        ```javascript
        mono QsExecutionServerConsoleConfig.exe /s:192.168.35.41 /u:admin /p:admin /esn:ExecutionServerName /ansible /a:"{'Execution Server Selector':'London'}"
        ```
        
        You might need to attach the **Execution Server Selector** rule to the Execution Server Selector attribute. As explained in [Associating Resources to Specific Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Assct-Rsrc-to-ES.htm#Creating).
        
    2. Then, set the same **Execution Server Selector** value specified in the **Execution Server Selector** attribute in the cloud provider resource and/or on **Resource Manager Client > Configuration Services > Ansible Configuration** service model. By default, CloudShell will use the Execution Server defined in the cloud provider resource. If it is not available, CloudShell will use the Execution Server defined in the **Ansible Configuration** model. Execution Servers specified on the deployed App shell/resource are not used for configuration management.
        :::note
        To run Ansible on App-deployed Windows VMs, WinRM must be enabled on those VMs. For additional information, see [Configure Execution Server for Ansible](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-Ansible-ES-Sprt.htm).
        :::