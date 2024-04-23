---
sidebar_position: 2
---

# Test Ansible Playbooks on the Linux Execution Server

Before running the playbook in an App, it is recommended to test it manually. To do that, follow these steps:

1. On a Linux Execution Server machine, access the `/etc/ansible/ansible.cfg` file and uncomment the line:
    
    `host_key_checking = False`
    
    :::note Notes
    - At runtime, the Ansible driver creates a local `ansible.cfg` file and adds the above key.
    - In addition, this local `ansible.cfg` takes priority over all other config files. See this [Ansible documentation page](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#the-configuration-file) for details about Ansible config file hierarchies.
    :::
2. Create a folder that will be the root of your test. This folder will contain the Ansible playbook as well as any additional folders and files required by the playbook.
    
3. Add an inventory file with hosts and their groups (optional) for testing.
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Ansible_10.png)
    
4. Add one or more playbook files.
    :::note
    If you plan on using several playbook files in the App, make sure the main one is named *site.yml*.
    :::
    ![Discovery Dialog](/Images/Devguide-configuration-management/Ansible_11_484x265.png)
    
5. (Optional) Add a “roles” folder.
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Ansible_12_624x319.png)
    
6. (Optional) Populate it with the desired roles.
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Ansible_13_624x319.png)
    
7. Test the playbook by running `ansible-playbook –i <InventoryFile> <MainPlaybookFile.yml>`. For some sample playbooks, see [Ansible Playbook Examples](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Ansible-Playbook-Examples.htm).
    
    ![Discovery Dialog](/Images/Devguide-configuration-management/Ansible_14_624x813.png)
    
8. Once you are done developing your playbook, zip the playbook files along with the roles folder, upload it to a repository, and set the URL in the App template, as explained in [Add the Playbook to an App](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Add-the-Playbook.htm).