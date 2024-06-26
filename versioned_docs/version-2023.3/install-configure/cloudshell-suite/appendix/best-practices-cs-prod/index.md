# Best Practices for CloudShell Production Environment

This article discusses an assortment of best practices and recommendations for CloudShell production environments. In this article:

## CloudShell Deployments

- Start small and grow as you go: It is possible to install CloudShell suite components on a single machine and later redistribute different components to different servers as appropriate.
- Back up all custom configuration files to a central location whenever a change is made, including the customer.config, webconfig.xml and language override files.
- For high workloads, we may recommend certain CloudShell configurations. Contact your Technical Account Manager for guidance.

## CloudShell Portal

- [Best Practices for CloudShell Portal](../../configure-products/configure-portal/best-practices.md)

## CloudShell Server

- Do not use Windows client versions for CloudShell Server machines (Quali Server, Portal, Execution Servers, DB). For details, see [Minimum Requirements for CloudShell Servers and Clients](../../../cs-system-requirements/min-requirements-for-cs.md).
- L1 resource automation is managed by Quali Server, unlike shells and scripts which are handled by the Execution Servers. So, make sure Quali Server has access to your Layer 1 devices.
- If you're using CloudShell's RabbitMQ, change its default user's credentials, as explained in [Update the RabbitMQ Credentials on Quali Server](../upgrade-rabbitmq-creds.md).

## Easy logging integration

- Use Elasti Stack (Filebeat) for additional logging and log visualization capabilities. For details, see [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-getting-started.html).

## Execution Servers

- Execution Servers must have access to the respective non-L1 devices and cloud providers.
- Execution Server redundancy: it is recommended to provision different parts of your lab to specific Execution Servers both for security purposes and performance. For details, see [Setting Up Execution Servers to Run Commands](../../../../admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md).
- The CloudShell admin's credentials are specified in plain text on the execution server. To increase security, remove the following line from the Linux execution server's process file at /etc/systemd/system/es.service:
    
    ```sh
    ExecStartPre=/usr/bin/mono /opt/ExecutionServer/QsExecutionServerConsoleConfig.exe /s:<server ip> /u:<username> /p:<password> /esn:<es name> …
    ```
    
    :::note
    This line enables running the execution server's configuration every time the service is started. Moving forward, you will need to run the execution server's `QsExecutionServerConsoleConfig` manually whenever any credentials change (for example, the Quali Server hostname). For details, see [Configure the Linux Execution Server](../../../linux-virtual-appliance/post-installation/configure/index.md).
    :::
    

## IIS

- Use full IIS and not IIS Express.
- Do not turn off logging.
- Use HTTPS with a signed certificate.
- Set the value of the ASP Threads Per Processor Limit property: The default value is 25. The maximum recommended value is 100.
- Enable IIS HTTP compression, as explained in [Enable dynamic compression on your IIS settings](../../configure-products/configure-portal/best-practices.md#enable-dynamic-compression-on-your-iis-settings).

## MongoDB

Use password protection, as illustrated in [Configure the MongoDB Database Connection](../../configure-products/config-mongodb-connection.md).

For data trimming best practices, see [Database Trimming](./db-trimming.md).

## New Job Scheduling

- Set Kubernetes-based CloudShell services to use static IPs. For details, see [Set the Mongo, Rabbit and Sandbox Services to Use Static IPs](../../new-jss-install-config/high-level-install-flow/customize-deployment/set-static-ip.md).
- It is recommended to use Kubernetes secrets to store sensitive information like user details and passwords instead of plain text. For details, see [Customize the Deployment Configuration Parameters](../../new-jss-install-config/high-level-install-flow/customize-deployment/customize-deployment-config-params.md).
- If you're using the CloudShell-deployed RabbitMQ, change its default user's credentials, as explained in [Update the RabbitMQ Credentials in Kubernetes Environment](../../new-jss-install-config/admin-actions/update-k8s-env.md)

## Pypi Server

- Set a password on the PyPi Server repository (in the Quali Server configuration wizard) to avoid breaking shell and script executions. Python package versions in the Quali Server’s pypi server repository will constrict sandbox automation to use those packages, even if a newer version exists on public PyPi.

## QualiX

- [Configure SSL Certificate on QualiX 4.1 Docker Container](../../../qualix/post-installation-config/enable-https/configure-ssl-cert.md)

## SQL Server

- Use Full MSSQL in an AlwaysOn availability group configuration and not SQL Express.
- Perform a daily backup of your CloudShell databases. For details, see [Back Up and Restore CloudShell](../../../install-configure/cloudshell-suite/backup-restore).
    - Use backup compression
- Use RAID 10 configuration for user binaries, data, log files, and TempDB for best performance and availability.
- Allocate the right memory for MSSQL. 
    
    ![](/Images/IG2/MsSqlServerPropertiesMemory.png)
    
- Avoid using the SA account. Use Windows Authorization instead.
- Do not compress files/databases.
- Create an SQL Server Database Alert for all events with a severity of 19 \[fatal\] and higher. For details, see [https://docs.microsoft.com/en-us/sql/relational-databases/performance-monitor/create-a-sql-server-database-alert?view=sql-server-ver15](https://docs.microsoft.com/en-us/sql/relational-databases/performance-monitor/create-a-sql-server-database-alert?view=sql-server-ver15)
- For SQL Server Standard Edition hosted on a VM: SQL Server Standard Editions are limited to four sockets, or 24 physical cores, whichever is lower. So if you are using a VM, make sure that it is set to a maximum of 4 sockets, and '2 or more' cores per socket.
    
    Not following these suggestions may result in performance issues. For example, if the VM is set to use 8 sockets and 1 core per socket, since SQL Standard Edition only supports 4 sockets, only 50% of CPU is utilized.
    

## Sisense

- Schedule the daily ElastiCube build to start after it syncs with the CloudShell Insight DB. For details, see [Synchronization](../../../cs-insight-bi/install-insight/synchronization.md).

## Additional points to consider

- **Key management:** CloudShell admin configuration keys provide many customization options. Applying keys requires restarting certain CloudShell services. During this time, certain CloudShell functionality may be unavailable. We therefore recommend to set a [Maintenance Window](../../../../admin/cloudshell-manage-dashboard/maintenance-window.md) in which to set the keys. For details about configuration keys, see [Advanced CloudShell Customizations](../../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md).
- Before migrating to your Production environment, make sure to test the staging environment against actual resources/Apps and traffic.