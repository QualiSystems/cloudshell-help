---
sidebar_position: 4
---

# Quali’s Shell Framework (Python 3)

In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 3. Note that this applies to 1st Gen and 2nd Gen shells.

## Introduction

Every CloudShell shell consists of a data model and a driver. The driver is written in Python and can have Python package dependencies. Quali’s officially released shells use a common set of Python packages developed by Quali, which contain most of the logic of Quali shells, while the driver itself (the ".py” file inside the shell) is the thin layer that defines the interface with CloudShell along with the driver’s Python requirements.

Quali’s official shells have a granularity level of Vendor and OS. This means that each official shell supports all devices of a specific vendor and OS. The exact functionality that is exposed by the shell is defined in the relevant [shell standard](https://github.com/QualiSystems/cloudshell-standards/tree/master/Documentation). The structure of the Python packages reflects this granularity – for example, any logic that is common to all shells resides in cloudshell\-shell\-flows, while any Cisco-specific logic resides in cloudshell\-networking-cisco, and any Cisco NXOS-specific logic resides in cloudshell\-networking-cisco-nxos. It is possible to use Quali’s shell framework when creating your own shells or customizing existing ones.

Note that using the framework is optional.

To work with one or more of Quali framework’s Python packages, you need to list them in your shell project’s requirements.txt file. Then, you can either write the code that uses the packages directly in the shell’s driver or create your own Python packages and add them to the shell’s requirements file. You can also load such custom Python packages into your local PyPi server repository on the Quali Server machine to make them available to your entire CloudShell deployment - for details on how to load custom packages, see [Configuring CloudShell to Execute Python Commands in Offline Mode](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).
:::note-one-line
**Important:** We don’t recommend modifying Quali Python packages as CloudShell will overwrite them if a newer package that has the same file name is published on the public PyPi repository. Alternatively, you’re welcome to create your own packages, using our Python packages as a reference.
:::
## Python package structure

The following diagram shows the Python classes used by the shell commands and their dependencies:

![Python Package Structure Diagram](/Images/Devguide-reference/Quali-s-Shell-Framework-Python_1_624x429.jpg)

## Architecture

The architecture of a Quali Python shell comprises three inter-dependent elements:

- [Flows](./quali-shell-framework-py3.md#flows)
- [Command Templates](./quali-shell-framework-py3.md#command-templates)
- [Command Actions](./quali-shell-framework-py3.md#command-actions)

Flows sequentially execute several Command Actions, while each Command Action runs a specific Command Template.

An additional element that is used by the flows is the communication handler, which allows you to communicate with the device. For details, see [Communication Handlers](./quali-shell-framework-py3.md#communication-handlers).  

## Key Entities

There are several objects that must be initialized in the Python driver, to allow you to work with Quali’s infrastructure:

- **Communication Handlers** – These entities handle the communication between the shell and the device. The most common handlers are cli (`cloudshell-cli`) and snmp (`cloudshell-snmp`). These handlers must be initialized whenever calling a shell command and passed to the flows.
    
- **cli** - A Python package that resides in the driver and is used to create the CLI configurator. This package provides an easy abstraction interface for CLI access and communication (Telnet, TCP, SSH etc.) for network devices. The CLI class instance is provided by `cloudshell.cli.cli`. It must be created when the driver is initializing, since it allows the shell to designate a single session pool for the shell’s commands. You are welcome to use the *\_get\_cli* helper from *driver\_helper* mentioned above. *\_get\_cli* allows you to define the session pool’s size and idle timeout.
    
- **api** is an instance of the *cloudshell\-automation-API*’s *CloudShellAPISession* class. It must be created on every command execution. This class has a helper named *\_get\_api*, which is also provided by the *driver\_helper* mentioned above.
    
- **logger** is a logger object residing in the *cloudshell\-logging* package. It is recommended to use it in your methods as follows:
    
    ```python
    from cloudshell.shell.core.session.logging_session import LoggingSessionContext
    
    
    def print_hello_world_to_logger(context)
        with LoggingSessionContext(context) as logger:
            logger.info("Hello World")
    ```
    
- **resource config** – Python implementation of the relevant Quali standard, which defines the shell’s attributes and default values. For example, a *NetworkingResourceConfig* class that contains all the attributes required by the networking standard. It can be easily created using the `NetworkingResourceConfig.from_context` method, which is provided with the [cloudshell\-shell\-networking-standard](https://pypi.org/project/cloudshell-shell-networking-standard/) Python package.
    
    For reference, see this [example](https://github.com/QualiSystems/Cisco-IOS-Switch-Shell-2G/blob/dev/src/driver.py).
    

## Communication Handlers

The most common ways to communicate with the device are via:

- CLI – cloudshell\-cli
    
- SNMP – cloudshell\-snmp
    

These handlers need to be initialized and passed to the flows.

### CLI Configurator

The CLI configurator resides in the cloudshell\-cli Python package and includes all the typical CloudShell CLI attributes you would need in order to communicate and work with a device modeled in CloudShell. For example, it knows how to retrieve the device’s username and password, create a session, determine what kind of session to initiate, etc. For reference, see [cisco\_cli\_handler.py](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_cli_handler.py) and [cisco\_command\_modes.py](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_command_modes.py).

There is a nice guide on how to use *cloudshell\-cli* [here](https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md). To simplify the usage of CloudShell CLI with shells, we added a *CliServiceConfigurator* base class that allows you to quickly set up communication with the device.

To work with CloudShell CLI from the shell driver, you need to create a *CommandMode* and initialize the *CliServiceConfigurator*.

**Example:**

```python
command_mode = CommandMode(".*")
with CliServiceConfigurator(resource_config=resource_config, logger=logger).get_cli_service(command_mode) as cli_service:
    cli_service.send_command("")
```

### SNMP Configurator

The SNMP configurator provides SNMP communication with the device and resides in the cloudshell\-snmp Python package. It includes two classes for working with SNMP:

- **SnmpConfigurator** is used for basic SNMP initialization
    
- **EnableDisableSnmpConfigurator** allows you to implement Enable and Disable SNMP flows, which manage SNMP sessions on the device
    

Like the CLI configurator, the main responsibilities of the SNMP configurator are:

- Initialize *Snmp*. It does this by extracting and preparing the *Snmp* parameters provided by the resource driver’s context
    
- Analyze Enable and Disable SNMP attributes from the command context
    
- Trigger the appropriate flow.  
    To initialize the `SNMPConfigurator` object, you need to pass the following objects: `resource_config` and `logger`. To use the SNMP configurator, you must implement the following properties in your child class:
    
    - \_create\_enable\_flow
        
    - \_create\_disable\_flow
        

For reference, see [cisco\_snmp\_handler](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/snmp/cisco_snmp_handler.py). For more information, see the [Flows](./quali-shell-framework-py3.md#flows) section.  

## Flows

A flow is an organized sequence of Command Actions. Each flow has interfaces, which contain commands that are triggered by the resource driver. All the base flows are located in the [cloudshell\-shell\-flows](https://github.com/QualiSystems/cloudshell-shell-flows/tree/dev/cloudshell/shell/flows) Python package, except for the connectivity flow which is detailed below. They are based on the BaseFlow interfaces, which are also located in the corresponding packages (*cloudshell\-shell\-flows* or *cloudshell-shell\-connectivity-flow*).

This is an abstract class that includes generic implementations for preparing and validating the required parameters. For example, when running the Save command in CloudShell Portal, the flow must validate the folder path provided by the sandbox end-user.

The necessary interfaces are already implemented in the base flows.

- [Connectivity Flow](https://github.com/QualiSystems/cloudshell-shell-connectivity-flow/blob/dev/cloudshell/shell/flows/connectivity/basic_flow.py) – Uses multithread logic to speed up the VLAN configuration on the device, especially when the resource needs to undergo a huge request that involves multiple, concurrently run actions. Note that unlike the rest of the flows, this flow resides in the *cloudshell\-shell\-connectivity-flow* package. To initialize this flow, you have to provide the *logger* and *cli\_handler* objects (described in [Key Entities](./quali-shell-framework-py3.md#key-entities)). Use the `apply_connectivity_changes` method to start. The following methods must be implemented:
    
    - \_add\_vlan\_flow
        
    - \_remove\_vlan\_flow
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_connectivity_flow.py).
        
- [Configuration Flow](https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/configuration/basic_flow.py) – Prepares and validates the provided path for the `save`, `restore`, `orchestration save` and `orchestration restore` commands. To initialize this flow, you have to pass the *logger*, *resource\_config*, *cli\_handler* and *api* objects (described in [Key Entities](./quali-shell-framework-py3.md#key-entities)). The following methods must be implemented:
    
    - *\_save\_flow*
        
    - *\_restore\_flow*
        
    - *\_file\_system* – a default filesystem value, see example below.
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_configuration_flow.py).
        
- [Firmware Flow](https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/firmware/basic_flow.py) – This flow serves as a configuration flow and also validates the firmware’s file path. To initialize this flow, you need to pass the *logger* object. The following method must be implemented:
    
    - \_load\_firmware\_flow
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_load_firmware_flow.py).
        
- [Run Command Flow](https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/command/basic_flow.py) – As you can see from the name, this flow handles the `Run Custom Command` and `Run Custom Config Command` driver methods and doesn’t require anything else to implement. However, if you want to customize the `run_command_flow` property, you are welcome to override it. To initialize this flow, just pass the *logger* and *cli_handler* objects.
    
    For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_run_command_flow.py) on how to create the run command flow.
    
- [State Flow](https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/state/basic_flow.py) – This flow is very similar to the Run Custom Command flow as it doesn’t require any additional implementations. It contains implementations for the `Health Check` and `Shutdown` commands. To initialize this flow, you need to pass the *logger*, *api*, *cli\_handler* and *resource\_config* objects mentioned in [Key Entities](./quali-shell-framework-py3.md#key-entities).
    
    For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_state_flow.py) on how to create the state flow.
    
- [Autoload Flow](https://github.com/QualiSystems/cloudshell-shell-flows/blob/dev/cloudshell/shell/flows/autoload/basic_flow.py) – Discovers the device’s hardware structure and general details, such as the firmware version and model. This flow requires the *autoload\_flow* method to be implemented. To initialize this flow, just pass the *logger* object. The following method must be implemented:
    
    - \_autoload\_flow
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/flows/cisco_autoload_flow.py) on how to create the autoload flow.
        

## Command Templates

A Command Template is a constant object of the *CommandTemplate* class, which is located in [cloudshell\-cli](https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template.py). It contains three elements:

- **command** – A command you want to send to the device. Supports formatting parameters. For example:
    
    ```javascript
    copy {src} {dst} [vrf {vrf}]
    ```
    
- **action map** – A dictionary of regex patterns (as keys) and lambda functions (as values). To illustrate this, when you get a "(yes/no)” prompt, you can send an appropriate command by specifying the required lambda function. For example:
    
    ```javascript
    r'\(y/n\)': lambda session, logger: session.send_line('y', logger)
    ```
    
- **error map** – Similar to action map but for errors. It is a dictionary of regexp pattern and error message test pairs. For example:
    
    ```javascript
    r"[Ii]nvalid\s*([Ii]nput|[Cc]ommand ":  "Override mode is not supported”
    ```
    

     For reference, see this command template [file](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/command_templates/configuration.py).

## Command Actions

Command Action is a method or function (depending on your implementation) that runs one or more Command Templates. The [CommandTemplateExecutor](https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template_executor.py) is provided for running command templates. For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/command_actions/add_remove_vlan_actions.py).

For example, if we want to execute the CONFIGURE\_VLAN command template:

```javascript
CONFIGURE_VLAN = CommandTemplate("vlan {vlan_id}", error_map=OrderedDict({"%.*\.": "Error creating vlan")}))
```

We need to (1) pass the session object, command template and action/error maps to the *CommandTemplateExecutor*, and (2) `vlan_id` to the `execute_command` method. As illustrated below:

```javascript
CommandTemplateExecutor(session, CONFIGURE_VLAN, action_map=action_map, error_map=error_map).execute_command(vlan_id=vlan_id)
```
