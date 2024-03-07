---
sidebar_position: 1
---

# Configure log4net Appenders for Central Logging

This article explains how to set up the log4net appenders for Quali Server and each Execution Server (New Job Scheduling logs are managed via FileBeat and configured separately). The log4net appenders define where to send the json logs collected by FileBeat as well as the log retention policy.

There are two log4net configuration files, one for Quali Server and another for each execution server. Starting with 2021.2, example log4net files with the new json appenders are included alongside the existing `log4net.config` files in the Quali Server and Execution Server installation directories. You may use these example files as is. However, if you are using customized `log4net.config` files, you may wish to copy the relevant sections from the example files into the log4net files, as explained in [Configuring the json appenders on the existing log4net files](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/CentralLog/cnfg-log4net.htm?Highlight=Configure%20log4net%20Appenders%20for%20Central%20Logging#Configur) below.

The example files are:

- `log4net.config.json.example` applies to Quali Server. Resides in the Quali Server installation directory (By default: `C:\Program Files (x86)\QualiSystems\CloudShell\Server\`)
- `QsExecutionServer.exe.config.jsonlogs.example` applies to Execution Servers. Resides in the Execution server installation directory on each execution server (By default: `C:\Program Files (x86)\QualiSystems\TestShell\ExecutionServer`)

## Using the example log4net files

The example log4net files are already configured properly and do not require any modifications. Feel free to use them if your `log4net.config` files have little to no customizations.

**To use the example log4net files:**

1. On the Quali Server machine, do the following
    1. Open the `\CloudShell\Server` installation directory.
    2. Backup the existing `log4net.config` file by renaming it to "log4net.config-org".
    3. On the Quali Server machine, rename `log4net.config.json.example` to "log4net.config".
    4. Update the new `log4net.config` file with any required customizations from the `log4net.config-org` file.
    5. Restart **Quali Server** service.
        
2. On each Execution Server machine, do the following:
    1. Open the `\TestShell\ExecutionServer` installation directory.
    2. Backup the existing `QsExecutionServer.exe.config` file by renaming it to "QsExecutionServer.exe.config-org".
    3. Rename `QsExecutionServer.exe.config.jsonlogs.example` to "QsExecutionServer.exe.config".
    4. Update the new `QsExecutionServer.exe.config` file with any required customizations from the `QsExecutionServer.exe.config-org` file.
    5. Restart **TestShell Execution Server** service.
        

## Configuring the json appenders on the existing log4net files

If your `log4net.config` files are heavily customized, it may be easier to update them with the json appenders and loggers from the example files. Perform the below procedure for Quali Server and each Execution Server in CloudShell.

**To configure log4net appenders:**

1. Edit the `log4net.config.json.example` file.
    
    The file includes several appender sections, one for each json log.
    
    For example, appender section for the `TeamServer.Service` log.
    
    ```markup
    <appender name="RollingJsonFileAppender" type="log4net.Appender.RollingFileAppender">
        <file value="JsonLogs\TeamServer.Service.txt" />
        <appendToFile value="true" />
        <rollingStyle value="Size" />
        <maxSizeRollBackups value="10" />
        <maximumFileSize value="1000KB" />
        <staticLogFileName value="true" />
        <layout type="QualiSystems.Infrastructure.Common.Logging.Log4Net.JsonQsLogLayout, QualiSystems.Infrastructure.Common">
          <appname>QS</appname>
        </layout>
      </appender>
    ```
    
2. Copy the relevant appender sections into the existing `log4net.config` file in the relevant CloudShell installation directory (`CloudShell\Server or TestShell\ExecutionServer`).
    :::tip
    For each appender, you can define the retention policy for the log data using the appender's **maxSizeRollBackups** and **maximumFileSize** parameters. **maxSizeRollBackups** defines the maximum number of json files to keep for this log (By default: 10) and **maximumFileSize** defines the maximum size for each json file (1000 KB). Once all logs are fully populated, log4net replaces the oldest log file with a new one containing new data and then the second oldest and so on.
    :::
3. Next, declare the JSON appenders in the loggers.
    
    For example, declaring **RollingJsonFileAppenders** ref in the root element:
    
    ```markup
    <appender-ref ref="RollingJsonFileAppender" />
    ```
    
    For example:
    
    ```markup
    <root>
        <level value="WARN" />
        <appender-ref ref="RollingFileAppender" />
        <appender-ref ref="RollingJsonFileAppender" />
      </root>
    ```
    
4. Save the file.
5. Restart the appropriate service - **Quali Server** or **TestShell Execution Server**.
6. Repeat these steps for the `QsExecutionServer.exe.jsonlogs.example` file.
7. Next, [Configure Elastic Stack for Central Logging](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/CentralLog/cnfg-elk.htm).