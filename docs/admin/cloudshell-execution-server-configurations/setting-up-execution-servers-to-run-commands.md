---
sidebar_position: 2
---

# Setting Up Execution Servers to Run Commands

This article explains how to configure execution servers to run commands in CloudShell. Note that associating execution servers to automation suites is done on the job level, as explained in [Add jobs to an automation suite](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/JOB-SCHDL/New-Autmt-Suite.htm#Add2).

## Managing execution servers

The **Execution Servers** management pages in the web portal allow you to both manage and troubleshoot your execution servers, providing critical, real time data about the status of your execution servers, command and job executions, and troubleshooting information and options. For additional information, see [Managing Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Exctn-Srv.htm).

## Distributed provisioning

To allow for more flexibility and control, CloudShell uses execution servers to manage the executions of jobs and commands. Each CloudShell execution server has a job and command capacity, which can be modified as needed. CloudShell execution servers do not require a license, allowing for multiple execution servers to be used in CloudShell. For example, you can install several execution servers to distribute execution tasks and use execution servers that are physically closest to geographically distributed sites to minimize latency/avoid firewall issues.

Execution servers can be installed in Windows and Linux environments.
:::important
Blueprint orchestration can be configured to run on one execution server, while the blueprint's orchestration can trigger resource commands that run on a completely different execution server. In this case, the orchestration will wait for the resource command(s) to finish. This kind of design decouples the resource level connectivity requirements from the orchestration.
:::
### Optimizing execution capacity

For detailed information, see [Optimizing Execution Provisioning](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc-Optmz.htm).

### Distributed command execution

Multiple execution servers can be deployed in order to scale out the provisioning and resource command tasks. By default, blueprint and resource commands are distributed between the execution servers according to their capacity. It is possible, however, to specify more explicit rules to control the execution server selection for commands, as explained in the "execution server selection" sections below. For additional information, see [Optimizing Execution Provisioning](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc-Optmz.htm).

### Resource commands

*In this section, the term resource denotes resource, service or App.*

When a resource command is executed, the system first checks whether a driver for that resource is already active on one of the execution servers. If it is, the command is automatically sent to that driver to be queued and handled. In case no driver is currently active, the resource driver is started on an available execution server.

## Controlling execution server selection for resource commands

Attributes can be used to match resource commands to the right execution server based on geographical location of the server and resource, execution server capabilities or other concerns. In a multi-site deployment, for example, there is an advantage in ensuring that overseas lab resources are only controlled by an on-premise execution server. This will help reduce the network latency and improve performance.

For additional information, see [Associating Resources to Specific Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Assct-Rsrc-to-ES.htm).

## Controlling execution server selection for App deployments

To learn how to do this, see the appropriate article:

- For private cloud Apps, see [Managing Private Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Prvt-Cld-Apps-in-Dmns.htm).
- For public cloud Apps, see [Managing Public Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Pblc-Cld-Apps-in-Dmns.htm).

## Controlling execution server selection for blueprint commands

Blueprint driver commands are also distributed between the execution servers based on availability and capacity. In order to restrict blueprint commands to a specific group of execution servers, a configuration key needs to be added specifying the relevant selector attribute value.

1. Create a selector attribute and assign it to an execution server, as explained in [Associating Resources to Specific Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/INVN/Assct-Rsrc-to-ES.htm).
    
2. Specify an attribute value for blueprint commands. Add the following configuration key to the Quali server `customer.config` file: `EnvironmentCommandsESRestrictions`

The value should be the attribute name and value given the syntax `Name=Value`. For example:

![](/Images/CloudShell-Portal/Manage/Management_2_3_565x28.png)

## Configuring the Execution Server to Run as a Process by Default

See [Configure the Execution Server to Run as a Process by Default](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Configure%20CloudShell%20Products/cfg-ts-exec-srver-prcs.htm).

## Working with local tests

If you are using a source control tool and wish to configure CloudShell to work with your local tests, see [Source Control: Using Local Tests in Automation Suites](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Src-Ctrl.htm) or contact Quali support or your Customer Success representative.

## Configuring Execution Servers to Deploy vCenter Apps

### Number of execution slots for VM deployments

Take the following considerations into account when setting the number of Execution Server command slots for the deployment of Apps.

| App deployment | Number of command slots required |
| --- | --- |
| **Apps deployed manually** | 3 slots per App |
| **Apps deployed automatically by CloudShell setup** | 2n + 1 (n = total number of Apps to be deployed at the same time)<br/>For example, deploying 5 Apps requires at least 11 execution slots. |

### Deployments from OVF image files

The following configurations should be performed on each execution server machine that will be used by the vCenter resource to deploy VMs from OVF image files during App deployments.

- Configure access to vCenter OVF image file path

- Install the OVF tool

## Configuring Execution Servers to support Python 3 shells and scripts

Python 3 automation requires Microsoft Visual C++ Redistributable 2015 x86 and x64 to be installed on the Execution Server(s). Without this installation, CloudShell will not create the Python virtual environment for the shell or script's execution on the Execution Server.

## Enabling custom execution servers

You can enable or disable the use of your own custom-built execution server. This feature is enabled by default.

To enable custom execution servers:

1. Go to `C:\Program Files (x86)\QualiSystems\CloudShell\Portal\customer.config` file, and add the following key:

    `<add key="EnableCustomServerTypes" value="True"/>`

3. Restart the **CloudShell Portal IIS** service.

## Setting the Virtual Environment validity period

CloudShell virtual environments (venv) are used to isolate Python driver and script executions on the Execution Server, and include all the dependencies required by the execution. Since dependencies may change, the Execution Server has the capability to reinstall/upgrade the venv dependencies on each subsequent execution of a script or driver that has a live venv. However, doing this is time-consuming, even if the requirements are already met.

It is therefore important to limit the number of times venvs are updated by the Execution Servers. This is done using the `VirtualEnvironmentLifetimeDurationInMinutes` configuration key, which sets the global validity period, in minutes, for venvs. During this timeframe, on subsequent executions of the venv's driver or script, the Execution Server will not attempt to update the venv as long as the validity period has not expired.

The default value is 480 minutes.

:::note Notes:
- If the Execution Server restarts and there are existing virtual environments in place, the Execution Server will update the venv and reset the validity period.
    
- This key applies to online and offline modes.
- Venvs are used for resource drivers, resource scripts and orchestration scripts.
- Since old venvs may still be in use, they are not deleted until the next CloudShell update or Execution Server restart.
:::
**To Setting the Virtual Environment validity period:**

1. Open the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config` file, and add the following key:
    
    `<add key="VirtualEnvironmentLifetimeDurationInMinutes" value="480"/>`
    
2. Set the desired value.
3. Save the file.
4. Restart the **Quali Server** service.

## Setting the logging level for Python drivers and scripts running on an Execution Server

It is possible to set the logging level for automation processes running on a specific Execution Server or Python driver (for drivers, see CloudShell Dev Guide's [Tips and Tricks for Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Tips-and-Tricks.htm) article). The logging levels are: DEBUG, INFO, WARN and ERROR.Only messages that are greater than the specified log level are saved to the logs.

Logs are organized in different files according to resource and sandbox. The folder location will be relative to the driver in the virtual environment location at: `%venv%\[drivername]\Lib\site-packages\cloudshell\Logs` (e.g. C:\\ProgramData\\QualiSystems\\venv\\Deployment\_Orchestrator\_5\_2\\Lib\\site-packages\\cloudshell\\Logs). Under windows, `[venv]` will be located at `%programdata%\qualisystems\venv`.

**To set the logging level for Python drivers and scripts:**

1. Go to `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\customer.config` file, and add the following key:

    `<add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=<log-level>"/>`

2. Replace `<log-level>` with the desired level.
    
    For example:
    
    `<add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=DEBUG"/>`
    
3. Restart the **TestShell Execution Server** service.

## Setting environment variables to be used by Python driver instances

Using the `DefaultPythonEnvrionmentVariables` key, you can define environment variables to be used by the driver. The environment variable is defined on the Execution Server and will be used by the appropriate driver instances that are running on that Execution Server.

**To set environment variables for Python driver instances:**

1. Go to `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer\customer.config` file, and add the following key:

    `<add key="DefaultPythonEnvrionmentVariables" value="<variable-pairs>"/>`

3. Replace each `<variable-pairs>` with a semicolon (;) separated list of the appropriate variable name-value pairs.
    
    For example:
    
    `<add key="DefaultPythonEnvrionmentVariables" value="name1=value1;name2=value2,"/>`
    
4. Restart the **TestShell Execution Server** service.

## Troubleshooting

- **What happens if the Execution Server is offline while I run the update process?**
    
    The execution server will still change to a state of Waiting for update and once it gets back online, it will start the update process first, and only then it will get jobs to run.
    
- **What happens if I (or someone else) start another update process before the previous one is done?**
    
    You cannot start another process until the update on the QualiServer is done.
    
    Once its done, and the system is updating or waiting to update the execution servers, you can start another update process and even provide different blueprint parameters.
    
    Idle stations that were already updated by the previous process and stations that are currently updating will start the update again. Each station that is in a Waiting for update state will remain in that state and will execute the batch file with the new parameters when it becomes idle
    
- **If the batch files fails, how can I check what happened?**
    
    On each machine, you define the batch file to launch and a folder in which we save the outputs from these batch files. If your batch files outputs any information about the process, then you'll be able to see it in these files and check what might have gone wrong. If the process stopped on TestShell Studio, you can check the logs of the portal for other relevant details. If it failed on the execution server, check the logs of it to see if there is more information.
