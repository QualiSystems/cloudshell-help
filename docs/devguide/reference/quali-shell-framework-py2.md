---
sidebar_position: 3
---

# Quali’s Shell Framework (Python 2)

In this article, we will familiarize ourselves with the CloudShell shell framework and learn how to leverage it to develop and customize commands in shells based on Python 2. Note that this applies to 1st Gen and 2nd Gen shells.

## Introduction

Every CloudShell shell consists of a data model and a driver. The driver is written in python and can have Python package dependencies. Quali’s officially released shells use a common set of Python packages developed by Quali, which contain most of the logic of Quali shells, while the driver itself (the “.py” file inside the shell) is the thin layer that defines the interface with CloudShell along with the driver’s Python requirements.

Quali’s official shells have a granularity level of Vendor and OS. This means that each official shell supports all devices of a specific vendor and OS. The exact functionality that is exposed by the shell is defined in the relevant [shell standard](https://github.com/QualiSystems/cloudshell-standards/tree/master/Documentation). The structure of the Python packages reflects this granularity – for example, any logic that is common to all networking devices resides in *cloudshell\-networking*, while any Cisco-specific logic resides in *cloudshell\-networking-cisco*, and any Cisco IOS-specific logic resides in *cloudshell\-networking-cisco-ios*. It is possible to use Quali’s shell framework when creating your own shells or customizing existing ones.

Note that using the framework is optional. To work with one or more of Quali framework’s Python packages, you need to list them in your shell project’s `requirements.txt` file. Then, you can either write the code, which uses the packages, directly in the shell’s driver or create your own Python packages and add them to the shell’s requirements file. You can also load such custom Python packages into your local `PyPi server repository` on the Quali Server machine to make them available to your entire CloudShell deployment - for details on how to load custom packages, see [Configuring CloudShell to Execute Python Commands in Offline Mode](../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/configuring-cloudshell-to-execute-python-commands-in-offline-mode.md).
:::note-one-line
**Important:** We don’t recommend to modify Quali Python packages as CloudShell may overwrite them if a newer package that has the same file name is published on the public PyPi repository. Alternatively, you’re welcome to create your own packages, using our Python packages as a reference.
:::
## Python package structure

The following diagram shows the Python classes used by the shell commands and their dependencies:

![Python Package Structure Diagram](/Images/Devguide-reference/Quali-s-Shell-Framework-Python_624x435.png)

## Architecture

The architecture of a Quali Python shell comprises four inter-dependent elements:

- [Runners](./quali-shell-framework-py2.md#runners)
- [Flows](./quali-shell-framework-py2.md#flows)
- [Command Templates](./quali-shell-framework-py2.md#command-templates)
- [Command Actions](./quali-shell-framework-py2.md#command-actions)

Runners execute Flows and process user inputs, and also define CLI and/or SNMP handlers, which are used in the Flows. Flows sequentially execute a number of Command Actions, while each Command Action runs a specific Command Template.

An additional element that is used by the runners is the communication handler, which allows you to communicate with the device. For details, see [Communication Handlers](./quali-shell-framework-py2.md#communication-handlers).  

## Key Entities

There are several objects that must be initialized in the Python driver, to allow you to work with Quali’s infrastructure:

- **Communication Handlers** – These entities handle the communication between the shell and the device. The most common handlers are cli (`cloudshell-cli`) and snmp (`cloudshell-snmp`). These handlers must be initialized whenever calling a shell command, and passed to the runners.
    
- **cli** - A Python package that resides in the driver and is used to create the cli handler. This package provides an easy abstraction interface for CLI access and communication (Telnet, TCP, SSH etc.) for network devices. The CLI class instance is provided by `cloudshell.cli.cli`. It must be created when the driver is initializing, since it allows the shell to designate a single session pool for all of the shell’s commands. You are welcome to use the *\_get\_cli helper* from *driver\_helper* mentioned above. *\_get\_cli* allows you to define the session pool’s size and idle timeout.
    
- **api** is an instance of the *cloudshell\-automation-API*’s *CloudShellAPISession* class. It must be created on every command execution. This class has a helper named *\_get\_api*, which is also provided by the *driver\_helper* mentioned above.
    
- **logger** is a logger object from *cloudshell\-core*. It is recommended to use the *driver\_helper*’s *get\_logger\_with\_thread\_id* function.
    
- **resource config** – Python implementation of the relevant Quali standard, which defines the shell’s attributes and default values. For example, a *GenericNetworkingResource* class that contains all attributes required by the networking standard. It can be easily created using the `create_networking_resource_from_context` method from [cloudshell.devices.standards.networking.configuration\_attributes\_structure](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/standards/networking/configuration_attributes_structure.py).
    

Note that there is a helper method for each of these objects. For detailed information about each helper method, see [cloudshell.devices.driver\_helper](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/driver_helper.py).

For reference, see this [example](https://github.com/QualiSystems/Cisco-NXOS-Switch-Shell-2G/blob/dev/src/driver.py).

## Communication Handlers

The most common ways to communicate with the device are via:

- CLI – cloudshell\-cli
    
- SNMP – cloudshell\-snmp
    

These handlers need to be initialized and passed to the runners.

### CLI Handler

The CLI handler includes all the typical CloudShell CLI attributes you would need in order to communicate and work with a device modeled in CloudShell. For example, it knows how to retrieve the device’s username and password, create a session, determine what kind of session to initiate, etc. For reference, see [cisco\_cli\_handler.py](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_cli_handler.py) and [cisco\_command\_modes.py](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/dev/cloudshell/networking/cisco/cli/cisco_command_modes.py).

There is a nice guide on how to use *cloudshell\-cli* [here](https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md). However, to simplify the usage of the CloudShell CLI, we implemented a *CliHandlerImpl* base class located [here](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/cli_handler_impl.py).

In the child class, you only need to implement these methods and properties:

- **enable\_mode** – is a property that returns the *CommandMode* class, which enables you to use the **Enable** mode, a mode that grants you root admin access to a Linux device. [Example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_command_modes.py#L46). For details and implementation examples of *CommandMode*, click [here](https://github.com/QualiSystems/cloudshell-cli/blob/dev/README.md).
    
- **config\_mode** – is a property that returns the *CommandMode* class, which enables you to use the **Configuration** mode, which allows you to configure the device’s settings. [Example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_command_modes.py#L83).
    
- **on\_session\_start** – is a method that contains the commands you want to automatically execute at the start of each session. [Example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/cli/cisco_cli_handler.py#L80).
    

Example: Cli handler that requires the parameters `cli`, `resource_config`, `logger` and `api`:

![CLI Handler Code Example](/Images/Devguide-reference/Quali-s-Shell-Framework-Python_1_538x83.png)

Note that the first parameter, `cli`, needs a CLI instance from *cloudshell.cli.cli* to be initiated. For details about these parameters, see the [Key Entities](./quali-shell-framework-py2.md#key-entities) section.

### SNMP Handler

The SNMP handler provides SNMP communication with the device. Like the CLI handler, the main responsibilities of the SNMP handler are:

- Initialize *QualiSnmp*. It does this by extracting and preparing the *QualiSnmp* parameters provided by the resource driver’s context
    
- Analyze Enable and Disable SNMP attributes from the command context
    
- Trigger the appropriate flow. To initialize the `SNMPHandler` object, you need to pass the following objects: `resource_config`, `logger`, `api`. To use the handler, you must implement the following properties in your child class:
    
    - \_create\_enable\_flow
        
    - \_create\_disable\_flow
        

For reference, see [cisco\_snmp\_handler](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/snmp/cisco_snmp_handler.py). For more information, see the [Flows](./quali-shell-framework-py2.md#flows) section.  

## Runners

This is an abstract class that includes generic implementations for preparing and validating the required parameters. For example, when running the Save command in CloudShell Portal, the runner must validate the folder path provided by the sandbox end-user. Typically, the shell extracts the data for the required parameters from the resource command’s context and user inputs.

The necessary interfaces are already implemented in the base Runners. However, you can implement your own base runner, e.g. *ConnectivityRunner* implements the *ConnectivityOperationsInterface* interface. The runner’s interfaces contain commands that are triggered by the resource driver.

Overall, we have six Runners, all base classes and their interfaces are located in [cloudshell\-networking-devices](https://github.com/QualiSystems/cloudshell-networking-devices/tree/dev/cloudshell/devices/runners):
:::note
All runners except for Autoload Runner require the cli-handler parameter to be passed to the runner while it is being initialized. For example, see [this](https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L86-L87).
:::
- [Connectivity Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/connectivity_runner.py) – Uses multithread logic to speed up the VLAN configuration on the device, especially when the resource needs to undergo a huge request that involves multiple, concurrently run actions. To initialize this runner, you have to provide the logger and cli\_handler objects (described in [Key Entities](./quali-shell-framework-py2.md#key-entities)). Use the `apply_connectivity_changes` method to start. The following properties have to be implemented:
    
    - add\_vlan\_flow
        
    - remove\_vlan\_flow
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_connectivity_runner.py).
        
- [Configuration Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/configuration_runner.py) – Prepares and validates the provided path for the `save`, `restore`, `orchestration save` and `orchestration restore` commands. To initialize this runner, you have to pass the *logger*, *resource\_config*, *cli\_handler* and *api* objects (described in Key Entities). The following properties have to be implemented:
    
    - save\_flow
        
    - restore\_flow
        
    - file\_system – a default filesystem value, see example below.
        
        For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_configuration_runner.py).
        
- [Firmware Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/firmware_runner.py) – This runner serves as a Configuration Runner, and also validates the firmware’s file path. To initialize this runner, you need to pass the *logger* and *cli\_handler* objects. The following property has to be implemented:
    
    - `load_firmware_flow`
        
        For reference see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/runners/cisco_firmware_runner.py).
        
- [Run Command Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/run_command_runner.py) – As you can see from the name, this Runner handles the `Run Custom Command` and `Run Custom Config Command` driver methods, and doesn’t require anything else to implement. However, if you want to customize the `run_command_flow` property, you are welcome to override it. To initialize this runner, just pass the *logger* and *cli\_handler* objects.
    
    For reference, see this [example](https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L79-L87) on how to create the run command runner.
    
- [State Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/state_runner.py) – This runner is very similar to the Run Custom Command Runner as it doesn’t require any additional implementations. It contains implementations for the `Health Check` and `Shutdown` commands. To initialize this runner, you need to pass the *logger*, *api*, *cli\_handler* and *resource\_config* objects mentioned in [Key Entities](./quali-shell-framework-py2.md#key-entities).
    
    For reference, see this [example](https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L371-L379) on how to create the state runner.
    
- [Autoload Runner](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/runners/autoload_runner.py) – Discovers the device’s hardware structure and general details, such as the firmware version and model. This runner requires the *autoload\_flow* property to be implemented.
    
    To initialize this runner, just pass the `resource_config` and `snmp_handler` objects. For reference, see this [example](https://github.com/QualiSystems/Cisco-IOS-Shell/blob/5.0.2/src/cisco_ios_resource_driver.py#L60-L65) on how to create the autoload runner.

## Flows

Flow is an organized sequence of Command Actions. All the base Flows are located in the [cloudshell\-networking-devices](https://github.com/QualiSystems/cloudshell-networking-devices/blob/dev/cloudshell/devices/flows/action_flows.py) Python package. They are based on the *BaseFlow* interface located in the same place.

Most shells include the following flows:

- Save Configuration Flow
    
- Restore Configuration Flow
    
- Add Vlan Flow
    
- Remove Vlan Flow
    
- Load Firmware Flow
    
- Run Command Flow
    
- Shutdown Flow
    
- Enable Snmp Flow
    
- Disable Snmp Flow
    

Note that *Run Command Flow* doesn’t require you to implement the `execute_flow` method as it’s already implemented there. The only difference between the Run Command Flow and the rest is a set of parameters. *Run Command Flow* has a generic approach to all devices, and doesn’t require any specific implementation.

For reference, see these [files](https://github.com/QualiSystems/cloudshell-networking-cisco/tree/5.2.16/cloudshell/networking/cisco/flows).

## Command Templates

A Command Template is a constant object of the *CommandTemplate* class, which is located in [cloudshell\-cli](https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template.py). It contains three elements:

- **command** – A command you want to send to the device. Supports formatting parameters. For example:
    
    ```javascript
    copy {src} {dst} [vrf {vrf}]
    ```
    
- **action map** – A dictionary of regex patterns (as keys) and lambda functions (as values). To illustrate this, when you get a “(yes/no)” prompt, you can send an appropriate command by specifying the required lambda function. For example:
    
    ```javascript
    r'\(y/n\)': lambda session, logger: session.send_line('y', logger)
    ```
    
- **error map** – Similar to action map but for errors. It is a dictionary of regexp pattern and error message test pairs. For example:
    
    ```javascript
    r"[Ii]nvalid\s*([Ii]nput|[Cc]ommand ":  “Override mode is not supported”
    ```
    

     For reference, see this command template [file](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/command_templates/configuration.py).

## Command Actions

Command Action is a method or function (depending on your implementation) that runs one or more Command Templates. The [CommandTemplateExecutor](https://github.com/QualiSystems/cloudshell-cli/blob/dev/cloudshell/cli/command_template/command_template_executor.py) is provided for running command templates. For reference, see this [example](https://github.com/QualiSystems/cloudshell-networking-cisco/blob/5.2.16/cloudshell/networking/cisco/command_actions/add_remove_vlan_actions.py).

For example, if we want to execute the CONFIGURE\_VLAN command template:

```javascript
CONFIGURE_VLAN = CommandTemplate("vlan {vlan_id}", error_map=OrderedDict({"%.*\.": "Error creating vlan")}))
```

We need to (1) pass the `session` object, command template and action/error maps to the *CommandTemplateExecutor*, and (2) `vlan_id` to the `execute_command` method. As illustrated below:

```javascript
CommandTemplateExecutor(session, CONFIGURE_VLAN, action_map=action_map, error_map=error_map).execute_command(vlan_id=vlan_id)
```
