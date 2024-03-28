---
sidebar_position: 5
---

# CloudShell RabbitMq Service Fails to Start during Quali Server Installation

## Error Message

:::danger Any of the following:

- A critical internal process failed to restart twice in 10 minutes. CloudShell has terminate.

- Cannot start Quali Server service on local computer.  
Error 1067: Process was killed in the middle.

- FATAL SandboxServiceServerPlugin - Embedded Sandbox Services has failed to startup successfully, please check logs for more details.
:::

## Description

Quali Server installation/configuration ends unexpectedly. RabbitMQ installation error.

## Possible Causes

There are two known causes:

- Insufficient memory allocated to MS SQL Server. MS SQL Server consumes as much memory as Windows allows it to consume. This is a by-design behavior of an MS SQL Server instance and is not a CloudShell issue.
- Erlang version supplied with CloudShell is incompatible with the Quali Server's Windows operating system.

## Solution

**To resolve the issue described above, follow these steps:**

1. Check the Erlang version in `C:\Program Files`:
    
    ![](/Images/Troubleshoot/rabbitMQFail.png)
    
2. Install Erlang version 23.3 (or above) for Windows. For example:
    
    [https://github.com/erlang/otp/releases/download/OTP-23.3/otp\_win64\_23.3.exe](https://github.com/erlang/otp/releases/download/OTP-23.3/otp_win64_23.3.exe)
    
3. Configure the System Environment variables:
    
    1. In the **Start** menu, type "system variables" and select **Edit the system environment variables**.
        
        ![](/Images/Troubleshoot/RabbitMQFail2.png)
        
    2. In the **System Properties** dialog box, select **Advanced** and click **Environment Variables**.
        
        ![](/Images/Troubleshoot/RabbitMQFail3.png)
        
    3. Edit the variable **ERLANG\_HOME** path and set the new Erlang folder location. For example:
        
        ![](/Images/Troubleshoot/RabbitMQFail4.png)
        
    4. Add new system variable **ERLANG\_SERVICE\_MANAGER\_PATH** and set the Erlang `\bin` folder as the value. For example:
        
        ![](/Images/Troubleshoot/RabbitMQFail5.png)
        
4. Configure the Sandbox Service.
    1. Navigate to `C:\Program Files (x86)\QualiSystems\CloudShell\Server\SandboxService\temp`.
    2. Edit the `service_configuration.yml` file using your preferred text editor and locate the json block.
        
        ![](/Images/Troubleshoot/RabbitMQFail6.png)
        
    3. Replace the **json** block with the block below:
        
        ```javascript
        json:  
            class: jsonformatter.JsonFormatter
            mix_extra: true
            mix_extra_position: 'tail'
            format: {
                "timestamp": "%(asctime)s.%(msecs)d",
                "app": "SBS",
                "traceId": "traceId",
                "thread": "thread",
                "level": "levelname",
                "machinename": "machineName",
                "name": "name",
                "message": "message",
                "module": "module",
                "lineno": "lineno",
            }
            datefmt: '%Y-%m-%dT%H:%M:%S'
            default_msec_format: '%s.%03d'
        ```
        
    4. Save the file.
    5. Copy the file and replace the one in the folder above (`C:\Program Files (x86)\QualiSystems\CloudShell\Server\SandboxService`).
        
        Run the Quali Server configuration wizard.
        
        Restart the machine.
