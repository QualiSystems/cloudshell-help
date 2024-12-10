---
sidebar_position: 3
---

# Create the Linux Execution Server from a Script

## Online installation process (CentOS)

**Prerequisites:**

- Quali Server
- Execution server script that matches your Quali Server version
- Existing Linux CentOS 7.x VM

**To create the Linux execution server in an online environment:**

1. Make sure you have the Linux execution server installation script in a temporary location. For details, see [Downloading the Linux Virtual Appliance Image](./../linux-es-va-overview/download-es-va-image.md).
    
2. Create a Linux VM with a CentOS version that matches the script's version.
    
3. Using a file transfer client like WinSCP, upload the script to the VM's root folder.
    
4. If the VM is in offline mode, extract the **Offline Package Repository** zip file to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md#add-the-out-of-the-box-dependencies-package-to-the-local-pypi-server-repository).
    
5. Run the following command to allow the script to be executable.
    
    ```javascript
    chmod +x cloudshell_es_install_script.sh
    ```
    
6. Execute the script with the right parameters.
    
    ```python
    ./cloudshell_es_install_script.sh <CloudShell IP> <CloudShell User> <CloudShell Password> <ES Server Name>
    ```
    
7. Next, [Log into the VM](../post-installation/log-into-the-vm.md).
    

## Offline installation (CentOS, RedHat, Ubuntu)

The offline installation script supports CentOS, RedHat and Ubuntu.

**Prerequisites:**

- Download server: Machine with an internet connection for downloading the execution server's script package and dependencies
- Execution server: Offline machine with access to Quali Server and one of the following operating systems:
    - RHEL/CentOS 8.x
    - Ubuntu 22.04
- Python installed on the VM or in the base image
- Latest stable Mono 6.12 version installaed on the VM ([Download Mono](https://www.mono-project.com/download/stable/#download-lin))
- Create the following folder structure on the execution server machine:
    
    - `/tmp/ExecutionServerInstall`
        - `/os_pkgs`
        - `/python_pkgs`
            

**To create the Linux execution server:**

1. In [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center), find the appropriate **CloudShell Execution Server Offline Installation Package** and copy its URL.
    :::note
    Execution server and Quali Server must have the same version.
    :::
2. Download the package to the download server.
    
    ```javascript
    wget <CloudShell Execution Server Offline Installation Package URL> -O ExecutionServer.tar
    ```
    
    And copy the package to the execution server's `/tmp/ExecutionServerInstall` folder.
    
3. Make sure the execution server has either Python 2.7.18 and Python 3.9.9 installed. If it is missing, run the appropriate commands to download the appropriate package:
    
    - Python 2:
        
        ```javascript
        wget https://www.python.org/ftp/python/2.7.18/Python-2.7.18.tgz
        ```
        
    
    - Python 3:
        
        ```javascript
        wget https://www.python.org/ftp/python/3.9.9/Python-3.9.9.tgz
        ```
        
    
    And copy the `.tgz` Python files to the execution server's `/tmp/ExecutionServerInstall` folder.
    
4. Download the appropriate packages:
    
    - For RedHat/CentOS:
        
        ```javascript
        yumdownloader --resolve yum-utils make mono-complete-5.16.0.220 gcc python2-devel python3-devel openssl-devel zlib zlib-devel libffi-devel python2-pip python3-pip
        ```
        
    - For Ubuntu:
        
        ```javascript
        apt install --download-only build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev zlib* python-pip mono-complete=6.12.* -y
        ```
        
        Note that the Ubuntu packages will be located at `/var/cache/apt/archives`.
        
    
    And copy the packages to the execution server's `/tmp/ExecutionServerInstall/os_pkgs` folder.
    
5. Download the appropriate Python packages to the download server.
    
    - Python 2:
        
        ```javascript
        pip2 download pip==19.2.3
        pip2 download virtualenv==20.13.0
        pip2 download wheel==0.37.1
        ```
        
    - Python 3:
        
        ```javascript
        pip3 download pip==21.2.4
        pip3 download virtualenv==20.13.0
        pip3 download wheel==0.37.1
        ```
        
    
    And copy the package to the execution server's `/tmp/ExecutionServerInstall/python_pkgs` folder.
    
6. On the execution server, navigate to the `/tmp/ExecutionServerInstall` folder and run:
    
    ```javascript
    ./cloudshell_es_installation -s <Cloudshell Server> -u <Username> -p <Password> -n <ES Name> -o <rhel or ubuntu>
    ```
    :::note
    Omit `-n <ES Name>` to use the machine's hostname as the execution server's display name in CloudShell Portal.
    :::
7. When the installation completes, you can optionally cleanup the `/tmp/ExecutionServerInstall` folder or the download server altogether.