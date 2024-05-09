---
sidebar_position: 15
---

# Tips and Tricks for Shells

## Managing the CloudShell session

Creating an instance of CloudShellAPISession can be expensive. Each time such an object is created a new login request is made, which can impact the performance of the driver/script. In theory it would be better to create the session once per command and then pass it in a convenient way to any internal function called in the execution flow.

For Shell drivers, the *cloudshell-shell-core* contains a convenient object to manage this scope. We pass this helper the **context** parameter of the driver command:

```python
from cloudshell.shell.core.session.cloudshell_session import CloudShellSessionContext
with CloudShellSessionContext(context) as session:
         perform_validations(session)
         do_some_logic(session)
         do_some_more_logic(session)
```

## Logging in shells

Any logging package can be used with CloudShell. Quali has a customized logging solution, which is thread and process safe. This package also organizes logs in different files according to resource and sandboxes. The Quali logging module is defined in the *cloudshell\_logging* package.

### Where can I see the execution logs?

All logs are saved on the Execution Server where the script or driver is running (except for L1 shell logs, which reside on the Quali Server). For exact locations, see [Collecting Logs](../../troubleshooting/troubleshooting-overview/collecting-logs.md).

![Log Structure](/Images/Devguide-shells/Shells-Tips-and-Tricks_553x66.png)

### How do I customize my shell or script’s logging policy?

The simplest way to get a hold of a logger object is to use the **get\_qs\_logger** module:

```python
from cloudshell.logging.qs_logger import get_qs_logger
logger = get_qs_logger(log_file_prefix=file_prefix,log_category=reservation_id,log_group=resource_name)
logger.info("log something")
```

For example:

```python
def some_command(self, context):
    """

    :param ResourceCommandContext context:
    :return:
    """
    logger = get_qs_logger(log_file_prefix='CloudShell Sandbox Orchestration',
                           log_category=context.reservation.reservation_id,
                           log_group=context.resource.name)
    logger.info("this is a log in the command")
    return "done"
```

For the default logger, the **log\_category** parameter defines the folder under which logs will be grouped whereas the **log\_group** defines the file. The CloudShell convention is to create a folder for each reservation id and a file for each resource name. For orchestration scripts, the file name is the environment name.

![Log Structure](/Images/Devguide-shells/Shells-Tips-and-Tricks_1.png)

You can then use the regular logging level syntax to write messages as a part of the driver package or script flow:

```python
logger.debug("debug message")
logger.info("info message")
logger.warn("warning message"
logger.error("error message")
```

Only messages that are greater than the log level currently set for the driver will be saved to file. For example, if the log level is “info”, only log levels “warning” and “error” apply.

Typically, changing the log level to a more verbose value would be done only in order to debug an issue, as writing too much to the logs can be expensive. You can change the logging level on the ES or driver level.

**To change the log level on the driver level:**

1. Edit the `qs_config.ini` file, which is located at:
    
    Windows locations:
    
    - `[venv]\[shell-name]\Lib\site-packages\cloudshell\core\logger\qs_config.ini`
        
        or
        
    
    - `[venv]\[shell-name]\Lib\site-packages\cloudshell\logging\qs_config.ini`
    
    Linux location:
    
    - `/usr/share/QualiSystems/venv/<shell-name>/lib/python3.7/site-packages/cloudshell/logging/qs_config.ini`
2. Change the log level value.
    
    For example, changing the log level to “WARNING”:
    
    ```javascript
    [Logging]
    ;Possible Log Log Levels: DEBUGs, INFO, WARNING, ERROR, CRITICAL
    LOG_LEVEL='WARNING'
    ;Possible Log Priorities: ENV, CONFIG
    ;ENV - get log level from environment variable specified in the Execution Server's customer.config
    ;CONFIG - get log level from current configuration file
    LOG_PRIORITY='ENV'
    LOG_FORMAT= '%(asctime)s [%(levelname)s]: %(name)s %(module)s - %(funcName)-20s %(message)s'
    TIME_FORMAT= '%d-%b-%Y--%H-%M-%S'
    WINDOWS_LOG_PATH='{ALLUSERSPROFILE}\QualiSystems\logs'
    UNIX_LOG_PATH='/var/log/qualisystems'
    DEFAULT_LOG_PATH='../../Logs'
    ```
    
    :::note Notes:
    - This change only applies to that virtual environment, so if you upgrade the shell or the script, CloudShell will create a new virtual environment that uses the default values.
    - In newer releases of the logging library, we added the `LOG_PRIORITY` variable, as illustrated in the above example. The default log level "priority" is defined in the Execution Server environment variable (`ENV` value), but you can change the value to `CONFIG` to take the log level from the current configuration file.
    :::
3. Restart the Execution Server and rerun the shell command.

**To enable debug logging and collecting logs:**

1. In the `qs_config.ini` mentioned above, change **LOG\_LEVEL** from INFO to DEBUG.
2. Restart the Execution Server and rerun the shell command.

**To change the log level for the entire ES, without editing any files:**

1. Add the following key to the Execution Server's `customer.config` (change ‘DEBUG’ to the log level you wish to set):
    
    ```javascript
    <add key="DefaultPythonEnvrionmentVariables" value="LOG_LEVEL=DEBUG"/>
    ```
    
2. Restart the Execution Server and rerun the shell command.

Similar to the CloudShell API session, it’s recommended to create a logger once per command and then pass it to any internal classes that require it. As with the CloudShell API we’ve added some helpers in the *cloudshell-shell-core* package which can reduce some of the repetition around creating a logger and create a more explicit scope for it:

```python
with LoggingSessionContext(command_context) as logger:
    do_something(logger)
    do something_else(logger)
```

Another repetitive task is to remember to log any exception raised during the driver execution. Here too, *cloudshell-shell-core* provides a handy scope:

```python
with ErrorHandlingContext(logger):
    will_get_automatically_logged_on_exception()
```

Using this scope any exception raised within the **ErrorHandlingContext** will be logged, even if no code remembered to explicitly call the logger.

In addition, you can use this attribute to pass environment variables to shell drivers/scripts running on a specific Execution Server. For additional information about orchestration script logging, see [Script Deep Dive](../develop-orch-scripts/script-deep-dive.md).

## Nested scopes

Finally, nesting the three helpers mentioned in this article makes a lot of sense as they’re not mutually exclusive. This syntax will also work well:

```python
def driver_command(self, command_context, request):
    with LoggingSessionContext(command_context) as logger:
        with ErrorHandlingContext(logger):
            with CloudShellSessionContext(command_context) as session:
                do_the_logic(session, logger)
```

If the heavily nested code seems problematic its always possible to create a module that accepts the function to run as an input and applies these scopes behind the scenes.

```python
def do_with_session_and_logging(self, command_context, function):
    with LoggingSessionContext(command_context) as logger:
        with ErrorHandlingContext(logger):
            with CloudShellSessionContext(command_context) as session:
                function(session, logger)

def driver_command(self, command_context, request):
    do_with_session_and_logging(command_context,
                                lambda session, logger: do_the_logic(session, logger))
```