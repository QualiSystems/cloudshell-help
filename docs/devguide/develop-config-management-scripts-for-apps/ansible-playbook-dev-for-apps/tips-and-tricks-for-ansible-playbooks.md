---
sidebar_position: 5
---

# Tips and Tricks for Ansible Playbooks

Please take the following under consideration when developing your playbook:

- Make sure the Execution Server can access the script’s raw URL.
- When setting the VM user’s credentials in the App, make sure you provide the credentials of a user that has the necessary permissions to successfully execute all the playbook’s tasks.
- There's no need to include a hosts file in the playbook ZIP. At runtime, the Execution Server does the following:
    
    1. Creates a dedicated hosts file, listing any groups specified in the App's **Inventory Groups** field along with the App's IP.
    2. Packages the playbook ZIP with the new hosts file.
    3. Sends the playbook package to the Ansible Server.
- If the App’s VM takes a long time to fully load, you may want to adjust the maximum time for the machine to respond, by setting the **Timeout Minutes** attribute on the **Custom Script Configuration** resource model (in Resource Manager Client’s **Resource Families** explorer).
- Use the **Ansible Additional Arguments** attribute to specify more parameters that should run along with the `ansible-playbook` command (e.g. `-vvv` for easier debugging). The attribute resides in Resource Manager Client>**Resource Families** explorer>**Configuration Services**. For details about supported arguments, see the official Ansible [documentation](https://docs.ansible.com/ansible/2.4/ansible-playbook.html).
- To use an Ansible playbook on a Windows VM, make sure WinRM is configured and loaded automatically to allow the playbook to communicate with that VM. A script for this is provided in [Enable WinRM on Windows VMs to Support Configuration Management](../../enable-winrm-on-win-vm-for-cfg-mng.md).
- Error "Failed to connect to the host via ssh: Warning: Permanently added '192.168.11.12' (RSA) to the list of known hosts.":
    
    When you first start using Ansible, by default, it has host verification enabled. This might result in warnings about ssh verification issue. You can disable it by setting a key (in the Ansible config file) or an environment variable: [https://docs.ansible.com/ansible/latest/inventory\_guide/connection\_details.html#managing-host-key-checking](https://docs.ansible.com/ansible/latest/inventory_guide/connection_details.html#managing-host-key-checking)