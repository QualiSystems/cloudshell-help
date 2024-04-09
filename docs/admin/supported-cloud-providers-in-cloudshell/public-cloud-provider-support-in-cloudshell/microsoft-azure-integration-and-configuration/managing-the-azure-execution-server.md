---
sidebar_position: 3
---

# Managing the Azure Execution Server

The deployment process of the CloudShell Template deploys a VM on the Azure region called **ExecutionServer-VM** and in it installs an Execution Server called "`Azure-<region>`" (for example, "Azure-East US").

## Support

- The Execution Server is installed on a Centos 7 VM (CentOS 7.2 and up).
- The Execution Server comes with Python 2.7 and 3 installed and configured out of the box.

## Accessing the Execution Server VM

- Use the **Admin Username** and **Admin Password** defined in the CloudShell Template that was deployed on the Azure region.

## Connecting the Execution Server to Quali Server

This procedure is required if Quali Server is also installed on Azure.

- Log in to the Execution Server machine and follow the instructions in [Configure the Linux Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv.htm).

## Execution Server logs

Execution Server logs reside at:

- `/opt/ExecutionServer/logs`
- `/var/log/qualisystems/`

## Performing maintenance operations on an Execution Server

Do the following if you need to perform any maintenance operations on the Execution Server, such as updating the Execution Server version of setting `customer.config` keys:

1. Stop the Execution Server service by running the following command:
    
    ```bash
    sudo systemctl stop es
    ```
    
2. Perform the maintenance operations.
3. Start the Execution Server service by running the following command:
    
    ```bash
    sudo systemctl start es
    ```
    

## Installing a new Execution Server

Follow this procedure to install a new Execution Server from scratch. To upgrade an existing Execution server, scroll down to the next section.

1. From [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center?flash_digest=3f2ece71dadb98bf640f295d5812eb5e8aedb9a7), download the **Linux Execution Server** installation script to your local machine.
    
2. In Azure Marketplace, create a **CentOS** VM (CentOS 7.2 and up).
    
3. In the **Advanced** tab, click **Select an extension to install**.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/AzureSelectExtension.png)
    
4. In the **Install an Extension** page, search for and click **Custom Script For Linux**.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/AzureVMExtensionScript.png)
    
5. Click **Next**.
6. In the **Configure Custom Script For Linux Extension** page, set the params:
    
    - **Script files**: Browse to the **Linux Execution Server** installation script file you downloaded. Follow the instructions to create a storage account and upload the script as a blob to the storage account. Then, repeat the above step and select the storage account > container > script.
        
        ![](/Images/Admin-Guide/Azure-deployment-type/AzureStorageAccount.png)
        
    - **Command**: Paste the below line, and set the CloudShell Server and admin credentials.
        
        ```bash
        sudo sh cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]
        ```
        
        For example:
        
        ```bash
        sudo sh cloudshell_es_install_script.sh 192.168.52.47 admin admin es-EastUS
        ```
        
        :::note Notes
        - If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2).
        - Quali Server must be running when configuring the Execution Server.
            
        - Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: `"admin1234!"`
        :::
            
        
7. Click **Create**.
    
    ![](/Images/Admin-Guide/Azure-deployment-type/AzureConfigureCustomScript.png)
    
8. Finish creating the VM.

## Upgrading an existing Execution Server

There are two ways to upgrade the Azure Execution Server:

- Upgrade to a GA version (by running a custom script on the Execution Server VM)
- Upgrade to a non-GA patch version (by replacing configuration DLLs)

**To upgrade to a GA version:**

1. SSH to the VM.
2. Stop the Execution Server service by running the following command:
    
    `sudo systemctl stop es`
    
3. Run the following script (set the appropriate values):
    
    ```bash
    curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s -S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]
    ```
    
    For example:
    
    ```bash
    curl https://s3.amazonaws.com/quali-prod-binaries/8.3-168734/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s -S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells
    ```
    
    :::note Notes    
    - If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2).
    - Quali Server must be running when configuring the Execution Server.
        
    - Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: `"admin1234!"`
    :::
    
4. Start the Execution Server service by running the following command:
    
    ```bash
    sudo systemctl start es
    ```
    
    Tip: The Execution Server service name was changed from qa\_execution\_server to es in version 8.3.
    

**To upgrade to a patch version:**

1. Open the CloudShell patch package.
2. Go to the `~\CloudShell <version>\Data\ExecutionServer\Qualisystems\TestShell\ExecutionServer` folder. For example: ![](/Images/Admin-Guide/CloudShellPackageForCloudProviders.png)
    
3. Select all contents in the folder and create a tar archive.
4. Copy the tar file to the `/temp` folder in the **ExecutionServer-VM** VM.
5. SSH to the VM.
6. Stop the Execution Server service by running the following command:
    
    ```bash
    sudo systemctl stop es
    ```
    
7. Extract the tar file to `/opt/ExecutionServer`, overriding any existing files.
8. Start the Execution Server service by running the following command:
    
    ```bash
    sudo systemctl start es
    ```
