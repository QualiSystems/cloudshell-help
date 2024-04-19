---
sidebar_position: 3
---

# Managing AWS EC2 Execution Servers

The CloudShell CloudFormation process installs two Execution Servers on the AWS EC2 region - **es-shells** and **es-commands**.

## Support

- The Execution Servers are installed on Centos 7 instances (CentOS 7.2 and up).
- The Execution Servers come with Python 2.7 and 3 installed and configured out of the box.

## Accessing the Execution Server instances

- Use username “centos” and the key used during the CloudFormation deployment.

## Connecting the Execution Server to Quali Server

This procedure is required if Quali Server is also installed on AWS.

- Log in to the Execution Server machine and follow the instructions in [Configure the Linux Execution Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Linux/Cnfg-Exec-Srv.htm).

## Execution Server logs

Execution Server logs reside at:

- `/opt/ExecutionServer/logs`
- `/var/log/qualisystems/`

## Performing maintenance operations on an Execution Server

Do the following if you need to perform any maintenance operations on the Execution Server, such as updating the Execution Server version of setting `customer.config` keys:

1. Stop the Execution Server service by running the following command:
    
    ```python
    sudo systemctl stop es
    ```
    
2. Perform the maintenance operations.
3. Start the Execution Server service by running the following command:
    
    ```python
    sudo systemctl start es
    ```
    

## Installing a new Execution Server

Follow this procedure to install a new Execution Server from scratch. To upgrade an existing Execution server, scroll down to the next section.

1. From [Quali’s Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center?flash_digest=3f2ece71dadb98bf640f295d5812eb5e8aedb9a7), download the **Linux Execution Server** installation script to your local machine.
    
2. In the **EC2 Dashboard**, launch an instance, select the latest **CentOS 7** instance type.
    
    The **Choose an Instance Type** page is displayed.
    
3. At the bottom of the page, click **Next: Configure Instance Details**.
4. In the **Advanced Details** area, select **As text** and paste the **Linux Execution Server** installation script's contents.
    
    For example:
    
    ```python
    curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s –S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]
    ```
    
5. Update the CloudShell Server and administrator credentials.
    
    For example (script for CloudShell 9.0):
    
    ```python
    curl https://s3.amazonaws.com/quali-prod-binaries/9.0.0-180/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s –S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells
    ```
    
    :::note Notes:
    - If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2).
    - Quali Server must be running when configuring the Execution Server.
    - Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: `"admin1234!"`
    :::
    
6. Launch the instance.

## Upgrading an existing Execution Server

There are two ways to upgrade an AWS Execution Server:

- Upgrade to a GA version (by spinning up a new instance and installing the Linux Execution Server installation script installation script that installs the updated Execution Server)
- Upgrade to a non-GA patch version (by replacing configuration DLLs)

**To upgrade to a GA version:**

1. SSH to the VM.
2. Stop the Execution Server service by running the following command:
    
    ```python
    sudo systemctl stop es
    ```
    
3. Run the following script (set the appropriate values):
    
    ```python
    curl [InstallScript] --output cloudshell_es_install_script.sh --retry 20 -s -S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh [CloudShellServerIP] [CloudShellServerAdmin] [CloudShellServerAdminPassword] [ExecutionServerName]
    ```
    
    For example:
    
    ```python
    curl https://s3.amazonaws.com/quali-prod-binaries/8.3-168734/ES/cloudshell_es_install_script.sh --output cloudshell_es_install_script.sh --retry 20 -s -S
    chmod +rwx ./cloudshell_es_install_script.sh
    sed -i -e 's/\r$//' ./cloudshell_es_install_script.sh
    ./cloudshell_es_install_script.sh 192.168.42.132 admin admin es-shells
    ```
    
    :::note Notes:
    - If the Execution Server VM does not have an internet connection, make sure the OfflinePackageRepository zip file is extracted to the local PyPi Server repository. For details, see [Add the out-of-the-box dependencies package to the local PyPi Server repository](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnfgr-Pyth-Env-Wrk-Offln.htm#Add2).
    - Quali Server must be running when configuring the Execution Server. 
    - Depending on your flavor of Linux, you may need to escape parameter values containing special characters with single or double quotes. For example: `"admin1234!"`
    :::    
    
4. Start the Execution Server service by running the following command:
    
    ```python
    sudo systemctl start es
    ```
    :::important Tip:
    The Execution Server service name was changed from **qa_execution_server** to **es** in version 8.3.
    :::

**To upgrade to a patch version:**

1. Open the CloudShell patch package.
2. Go to the `~\CloudShell <version>\Data\ExecutionServer\Qualisystems\TestShell\ExecutionServer` folder. For example:
    
    ![](/Images/Admin-Guide/CloudShellPackageForCloudProviders.png)
    
3. Select all contents in the folder and create a tar archive.
4. Copy the tar file to the `/temp` folder in the **Execution Server** instance.
5. SSH to the instance.
6. Stop the Execution Server service by running the following command:
    
    ```python
    sudo systemctl stop es
    ```
    
7. Extract the tar file to `/opt/ExecutionServer`, overriding any existing files.
8. Start the Execution Server service by running the following command:
    
    ```python
    sudo systemctl start es
    ```
