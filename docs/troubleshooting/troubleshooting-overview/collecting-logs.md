---
sidebar_position: 2
---

# Collecting Logs

This topic will guide you on how to troubleshoot CloudShell execution errors. CloudShell saves details of execution activity in different logs, according to automation piece and execution server type (Windows or Linux).

If you are a user or an Admin, you can use these logs to troubleshoot your issue. In some cases, if you have approached Quali Customer Support for assistance, they may ask for these logs to analyze the circumstances that led up to the error.

We also recommend that you use the system messages displayed in CloudShell Portal, for example, the **Activity Details Window**, which presents detailed information pertaining to a specific error or message in the activity feed, including the event's logging information and (for command execution errors) the execution server on which the command is supposed to run. For more information on all CloudShell system messages, see the CloudShell help topic [Viewing System Messages](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-View-Sys-Msgs.htm).

## CloudShell system logs

**CloudShell Monitor** is a tool that collects CloudShell logs and data from the machine it is running on. It delivers a snapshot of the situation immediately prior to when the logs were extracted.

We suggest that you watch this short video demonstrating how to collect and save system log files using **CloudShell Monitor**:

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/zZRbfOgrOb4" title="Collecting CloudShell logs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**To collect the system logs, perform the following steps:**

You will need the logs from the Quali Server machine and the relevant client machine (Studio, Execution Server, CloudShell Portal, etc.).

1. On the appropriate machine, open **CloudShell Monitor**.
2. Click **Save Logs** and from the drop-down list, select **Save Logs and Windows Events**.
    
    A zip file containing the log files is downloaded to your computer.
    
3. Save the zip file.
    
4. Open a support ticket at [https://support.quali.com/](https://support.quali.com/) and attach the zip file to your ticket.
    
    :::note
    If the zip file is too large to attach to your support ticket (greater than 20 MB), you will receive a **Payload is Too Large** message in the top right corner of your screen. If this is the case, do the following:
    
    1. Log on to the [QualiSystems FTP](https://ftp.quali.com/) site.  
        If you do not have the required credentials, contact customer support.
    
    2. Save the zip file on QualiSystems FTP.  
        The file is saved in your account's FTP folder.
    3. In the ticket, state that you uploaded the log files to QualiSystems FTP.  
        A Quali support representative will review the logs and contact you.
    :::
    
    The zip file contains the following files, depending on the CloudShell component:
    
    | Log name | Type |
    | --- | --- |
    | EventLogs | File folder |
    | RemoteTeamServer | File folder |
    | SetupLogs | File folder |
    | Monitor | File folder |
    | CloudShell Authoring | File folder |
    | CloudShell Configuration | File folder |
    | CloudShell License Server | File folder |
    | CloudShell Remote Runner | File folder |
    | CloudShell Resource Management Client | File folder |
    | CloudShell Runtime | File folder |
    | CloudShell Sandbox API | File folder |
    | CloudShell Sandbox API Gateway | File folder |
    | CloudShell Server Proxy | File folder |
    | Quali Server | File folder |
    | TestShell Execution Server | File folder |
    | TestShell QSMQ Server | File folder |
    | TestShell Studio | File folder |
    | RunningProcesses.txt | Text Document |
    | SytemInfo.exe.txt | Text Document |
    | SystemInformation.txt | Text Document |
    | QualisystemsRegistry.txt | Text Document |
    | InstallInfo.txt | Text Document |
    | cs\_usage\_data.zip | ZIP package |
    

## QualiX logs

### Collecting QualiX logs

1. Open [Quali's QualiX Download Page](https://support.quali.com/hc/en-us/articles/360037650694), search the page for "utilities", and click the **Utilities** link of the appropriate QualiX version.
2. Extract the files to your local directory.
3. Edit the `GetQualiXInfo.ps1` file and set the Username and Password to the QualiX machine.
4. Save the file and run the `GetQualiXInfo.ps1` file with Windows PowerShell.
    
    The script connects to QualiX using SSH and extracts the logs from the QualiX machine.
    
5. When prompted, enter the IP address of the QualiX machine.
    
    The command returns the QualiX logs.
    
6. Transfer the files from the Linux machine to your local machine.
7. Open a support ticket and attach the files to your ticket.

### Connection request logs

**To get the connection request logs for all services (QualiX over vSphere/Docker):**

- SSH to the QualiX Server/Docker host and access the log here:
    
    ```
    /var/log/nginx/access.log
    ```
    

### Guacamole service logs

For details about the Guacamole services, see [QualiX High-level Setup Process](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/QualiX-high-level-process.htm).

To get the following logs, SSH to QualiX Server and run the appropriate command.

**To get the Qualix-tomcat service application logs:**

```javascript
journalctl -u qualix-tomcat
```

**To get the Qualix-guacd service application logs:**

```javascript
journalctl -u qualix-guacd
```

### Docker logs (QualiX 4.1 and below)

**To set the log level for the Docker logs:**

- SSH to the Docker host and run:
    
    ```javascript
    sudo GUACD_LOG_LEVEL=debug
    ```
    

**To get the docker logs for a specific container:**

- SSH to the Docker host and run:
    
    ```javascript
    sudo docker logs -f <container_id>
    ```
    
    To get the container ids, run `sudo docker ps -a`.
    

**To get the logs for the guacamole/guacd services running in Docker:**

1. SSH to the Docker host.
2. If containers are running, destroy them:
    
    ```javascript
    sudo docker stop guacamole guacd && docker rm guacamole guacd
    ```
    
3. Edit /opt/qualix/docker-compose.yml and set:
    
    ```javascript
    sudo GUACD_LOG_LEVEL=debug
    ```
    
4. Start the containers:
    
    ```javascript
    cd /opt/qualix && ./start.sh
    ```
    
5. View the logs:
    
    ```javascript
    sudo docker logs guacamole
    ```
    
    ```javascript
    sudo docker logs guacd
    ```
    

### Docker logs (QualiX 5.0 and above)

- Get logs of quacamole:
    
    ```javascript
    docker logs -f qualix-guacamole
    ```
    
- Get logs for guacd:
    
    ```javascript
    docker logs -f qualix-guacd
    ```
    
- Get logs for wmks-proxy:
    
    ```javascript
    docker logs -f qualix-wmks-proxy
    ```
    
- Get logs for nginx:
    
    ```javascript
    docker logs -f qualix-nginx
    ```
    

## Linux execution server logs

:::note
If you are using a Windows machine to extract logs from the Linux execution server, we recommend using an SCP client to connect via SSH to the Linux execution server to browse though the logs. You can also transfer the files to a Windows machine in order to send them, if needed.
:::

**To extract logs if you are using Linux execution server on a Virtual Appliance (VA):**

- General execution server logs: ~/ExecutionServer/Logs
- Shell execution logs: /var/log/qualiSystems/
- Orchestration script execution logs: ./usr/share/QualiSystems/logs

**To extract logs if you are using Linux ES on CloudFormation (AWS) or CloudShell Template (Azure):**

- `./opt/ExecutionServer/Logs`
- `/var/log/qualiSystems/`

## Windows execution server logs

When a Windows-based execution server runs a Python command, either shell-based or an orchestration script, the execution server's logs will be saved here: `C:\ProgramData\QualiSystems\logs`.

- Shell execution logs (resource discovery and inventory commands): `C:\ProgramData\QualiSystems\logs\inventory`
    
    Note that older logging packages are sometimes logged to `C:\ProgramData\QualiSystems\logs\Autoload`
    
- Latest shell/cloud provider execution logs: `C:\ProgramData\QualiSystems\logs\<reservation-id>\<driver name>`
- Latest orchestration script logs: `C:\ProgramData\QualiSystems\logs\<reservationid>`

## Shell/script execution logs

### Shell execution logs

Shell execution logs reside on the Execution Server running the shell at `%ProgramData%\Qualisystems\logs\<<reservation\_id>>\<<shell name>>\*.logs` folder in a dedicated sub-folder with the reservation ID as the name.

For example:

![](/Images/Devguide-shells/Shells-Tips-and-Tricks.png)

**To customize the shell’s logging policy, enable debug logging:**

- See [Logging in shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Tips-and-Tricks.htm#Logging).

**To change the log level:**

1. Navigate to `C:\ProgramData\QualiSystems\venv\<shell-name>\Lib\site-packages\cloudshell\core\logger\qs_config.ini`.
2. Change `LOG_LEVEL='INFO'` as appropriate. For example, `LOG_LEVEL='DEBUG'`.

### Orchestration script execution logs

- **Orchestration script logs** reside on the Execution Server running the script at `%programdata%\QualiSystems\logs<reservationid>` folder in a dedicated sub-folder with the reservation ID as the name.
    
    For example:
    
    ![](/Images/Devguide-orchestration-scripts/Scripts-Deep-Dive.png)
    
    Setting up and retrieving script logs is detailed in [Logging in orchestration scripts](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Orch-Scripts/Scripts-Deep-Dive.htm#Logging).
    

### Virtual environment logs

The virtual environment creation process is as follows:

![](/Images/Troubleshoot/venv-creation-flow_722x188.png)

- **Shell/script package installations** logged at InstallRequirements.txt file: `~\QualiSystems\TestShell\ExecutionServer\Logs\QsPythonDriverHost\`
- `\QualiSystems\TestShell\ExecutionServer\Logs\QsPythonDriverHost\`
- **If the virtual environment fails to build**, CloudShell will create a log record in the `ExecutionServer\Logs` file (`~\QualiSystems\TestShell\ExecutionServer\Logs\QsRuntimeService.txt`). But in some cases you might want to enable DEBUG logs to get more details.

## L1 shell execution logs

Look here for the L1 shell execution logs on the Quali Server machine:

`~QualiSystems\CloudShell\Server\Logs\<L1 shell name>`.

## New Job Scheduling Logs

CloudShells logs events related to the New Job Scheduling's Kubernetes services. For details, see [New Job Scheduling Service Logs](https://help.quali.com/Online%20Help/0.0/Portal/Content/JSS/jss-logs.htm).

## QAC logs

QAC does the following:

- Scheduler of jobs in the original Job Scheduling: Determines whether a job can be executed within a given time range and when a blueprint can be resolved (for jobs that have an attached blueprint)
- Determines the next available time slot (available time slots are proposed in the **Resolve Conflicts** window that is displayed when reserving a blueprint with resource conflicts)

:::note
QAC logs are disabled by default. Once enabled, future QAC logs will be included in the [CloudShell system logs](https://help.quali.com/Online%20Help/0.0/Portal/Content/Troubleshooting/Collecting-logs.htm?tocpath=Troubleshooting%7CTroubleshooting%20Overview%7C_____2#CloudShe2) ZIP file.
:::

**To enable QAC logs:**

1. Edit the file `C:\Program Files (x86)\QualiSystems\CloudShell\Server\log4net.config`.
2. Remove `<--` and `-->` at the beginning and end of the qacLogs section:
    
    ![](/Images/Troubleshoot/QACSection.png)
    
    So it look as follows:
    
    ![](/Images/Troubleshoot/QACUncommented.png)
    
3. Restart the **Quali Server** service.
