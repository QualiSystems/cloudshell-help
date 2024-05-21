---
sidebar_position: 3
---

# Configure the Linux Execution Server for Ansible

To run Ansible configuration management on this Execution Server, several additional configurations are needed.

**Prerequisites:**

- Execution Server has the `/ansible` flag enabled. For details, see [Example: How to Run the Configuration File](./configure/example-run-config-file.md)

**To configure the Execution Server to run Ansible:**

1. Install Ansible as globally available command line utility.
    
    ```javascript
    python3 -m pip install ansible
    ```
    :::note
    **To install in an offline environment:**
    
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
    
    ![](/Images/Linux2/ansible-status.png)
    
3. Install **pywinrm** into same python environment as global Ansible. This library is required by Ansible to connect to Windows Apps.
    
    ```javascript
    python3 -m pip install pywinrm
    ```
    
4. Install the **CentOS sshpass** module to allow password authentication to Apps.
    
    ```javascript
    yum install sshpass
    ```