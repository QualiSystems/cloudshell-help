---
sidebar_position: 14
---

# Common Driver Recipes

In this section we’ll provide a few handy examples of common driver operations.

The intention is to grow this into a good source to copy paste common code from. Most of the examples are available in the [DevGuide Examples](https://github.com/QualiSystems/devguide_examples) repository under the `common_driver_recipes` folder. 

## Decrypting a password attribute

The password for logging into the device/app will be passed as an encrypted value to the driver as a part of the context object. In order to be able to use it to log in you’ll most likely need to decrypt it. To do that, you can use the CloudShellAPI function DecryptPassword.

:::note
**DecryptPassword** is for decrypting password-type attributes, and can only be executed by CloudShell admins.
:::

See the code below for an example:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

`adding_examples/common_driver_recipes/src/driver.py` [view](https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py)

```python
def decrypt_password(self, context):
    """
    A simple example function
    :param ResourceCommandContext context: the context the command runs on
    """
    session = CloudShellAPISession(host=context.connectivity.server_address,
                                   token_id=context.connectivity.admin_auth_token,
                                   domain=context.reservation.domain)

    password = session.DecryptPassword(context.resource.attributes['Password']).Value
```

Note that in Python 3 shells, you no longer need to decrypt passwords as this is done out of the box by the [cloudshell-shell-networking-standard](https://pypi.org/project/cloudshell-shell-networking-standard/) Python package.

## Updating the resource live status

The resource live status can be used to indicate the current state of the resource on the diagram. CloudShell comes with a pre-built collection of statuses you can use, and this collection of icons can also be extended if needed.

The following code will update the resource live status from offline to online:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

`adding_examples/common_driver_recipes/src/driver.py` [view](https://github.com/QualiSystems/devguide_examples/blob/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/driver_deep_dive/adding_examples/common_driver_recipes/src/driver.py)

```python
def update_resource_status(self, context):
    """
    A simple example function
    :param ResourceCommandContext context: the context the command runs on
    """
    session = CloudShellAPISession(host=context.connectivity.server_address,
                                   token_id=context.connectivity.admin_auth_token,
                                   domain=context.reservation.domain)

    session.SetResourceLiveStatus(context.resource.name, "Offline" )
    for i in range(0,10):
        session.SetResourceLiveStatus(context.resource.name, "Progress {status}".format(status=str(i*10)))

    session.SetResourceLiveStatus(context.resource.name, "Online" )
```

The full list of statuses can be found in the ServerUniversalSettings.xml file which you can find on the Quali Server machine under the `%programdata%\QualiSystems\Settings\Global` directory:

```xml
<ResourcesLiveStatus>
    <key name="Online">C:\ProgramData\QualiSystems\Portal\Content\Images\online.png</key>
    <key name="Stopped">C:\ProgramData\QualiSystems\Portal\Content\Images\online.png</key>
    <key name="Offline">C:\ProgramData\QualiSystems\Portal\Content\Images\offline.png</key>
    <key name="Error">C:\ProgramData\QualiSystems\Portal\Content\Images\error.png</key>
    <key name="Progress 0">C:\ProgramData\QualiSystems\Portal\Content\Images\progress0.png</key>
    <key name="Progress 10">C:\ProgramData\QualiSystems\Portal\Content\Images\progress10.png</key>
    <key name="Progress 20">C:\ProgramData\QualiSystems\Portal\Content\Images\progress20.png</key>
    <key name="Progress 30">C:\ProgramData\QualiSystems\Portal\Content\Images\progress30.png</key>
    <key name="Progress 40">C:\ProgramData\QualiSystems\Portal\Content\Images\progress40.png</key>
    <key name="Progress 50">C:\ProgramData\QualiSystems\Portal\Content\Images\progress50.png</key>
    <key name="Progress 60">C:\ProgramData\QualiSystems\Portal\Content\Images\progress60.png</key>
    <key name="Progress 70">C:\ProgramData\QualiSystems\Portal\Content\Images\progress70.png</key>
    <key name="Progress 80">C:\ProgramData\QualiSystems\Portal\Content\Images\progress80.png</key>
    <key name="Progress 90">C:\ProgramData\QualiSystems\Portal\Content\Images\progress90.png</key>
    <key name="Progress 100">C:\ProgramData\QualiSystems\Portal\Content\Images\progress100.png</key>
  </ResourcesLiveStatus>
```

## Sending a message to the sandbox console

Another way to update the sandbox regarding an operation progress is to use the WriteMessageToReservationOutput function to display a message in the Sandbox console pane. We can easily modify the previous code to do that instead:

[This Github Sample](https://github.com/QualiSystems/devguide_examples/blob/master/common_driver_recipes/src/driver.py) is by [QualiSystems](https://github.com/QualiSystems)

`common_driver_recipes/src/driver.py` [view](https://github.com/QualiSystems/devguide_examples/blob/master/common_driver_recipes/src/driver.py) [raw](https://raw.githubusercontent.com/QualiSystems/devguide_examples/master/common_driver_recipes/src/driver.py)

```python
def update_resource_status_to_console(self, context):
    """
    A simple example function
    :param ResourceCommandContext context: the context the command runs on
    """
    session = CloudShellAPISession(host=context.connectivity.server_address,
                                   token_id=context.connectivity.admin_auth_token,
                                   domain=context.reservation.domain)

    session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Starting operation")
    for i in range(0, 10):
        session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Progress at {status}%".format(status=str(i * 10)))

    session.WriteMessageToReservationOutput(context.reservation.reservation_id, "Done - service online")
```

## Sending commands to a networking device

When adding a new command that requires communication with a networking device, such as a switch or router, you need to open a session to the device. An easy way to do that is by leveraging Quali’s shell framework (cloudshell-cli package). The framework can provide a session from a session pool via Telnet, SSH or TCP, based on the configuration saved in the **CLI Connection Type** attribute on the root resource.

See the code below for an example:

[This Github Sample](https://github.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/blob/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py) is by [QualiSystemsLab](https://github.com/QualiSystemsLab)

`cisco_nxos_resource_driver.py` [view](https://github.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/blob/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py) [raw](https://raw.githubusercontent.com/QualiSystemsLab/Extended-Cisco-NXOS-Shell/master/Ext_Cisco_NXOS_Shell_Package/Resource%20Drivers%20-%20Python/Generic%20Cisco%20NXOS%20Driver%20Version3%20Extended/cisco_nxos_resource_driver.py)

```python
def some_command(self, context, command)
      logger = get_logger_with_thread_id(context)
      api = get_api(context)
      resource_config = create_networking_resource_from_context(shell_name=self.SHELL_NAME,
                                                                supported_os=self.SUPPORTED_OS,
                                                                context=context)
      cli_handler = CliHandler(self._cli, resource_config, logger, api)
      with cli_handler.get_cli_service(cli_handler.enable_mode) as session:
          session.send_command("some command")
          with session.enter_mode(cli_handler.config_mode) as config_session:
              config_session.send_command("some config command")
```

## Mapping connections using App sub-resources

Developers can map connections between sub-resources residing on deployed Apps. This applies to scenarios where you want to map the port connections between virtual devices residing in App VMs. For example, to map the connection between port 1 residing on a virtual switch and port 2 residing on another virtual switch. For details, see [Mapping Connections using App Sub-resources](../reference/map-connections-using-app-sub-resources.md).

## Defining a connected command (which runs on another resource)

In some scenarios, a command that runs on a specific resource logically requires the use of a different resource. These types of commands are called connected commands. They are executed on a resource in CloudShell Portal but in reality run on the connected resource (for example, a power switch) that performs the action.

There are two types of connected commands:

- **Power commands**: Let’s say you have a target resource that is controlled by a power switch (PDU). When you run a **Power On** command on the target resource, the user may think the command is running on that resource but it actually runs on the PDU that is connected to the resource.
    
- **Generic resource commands**: A remote command is similar to a power command but is not limited to power commands only. For example, you could have a command, which modifies a target resource’s settings, but is actually running on the server that performs the modifications.
    

To create a connected command, you need to use a shell based on a standard that supports connected commands, currently, only [PDU](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/pdu_standard.md) for power commands and the [Generic Resource with Connected Commands](https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/Generic%20Resource%20with%20Connected%20Commands.md). These commands need to be defined in two places, in the drivermetadata.xml and in the driver.py file.

In the driver’s drivermetadata.xml, you define which commands are connected, as follows:

- For power commands, the command must include the Tags="power" flag and the driver must include all three power commands (Power On, Power Off and Power Cycle):
    
    ```xml
    <Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.MyPduShellDriver" Name="MyPduShellDriver" Version="1.0.0">
        <Layout>
            <Category Name="Hidden Commands">
                <Command Description="" DisplayName="Orchestration Save" Name="orchestration_save" />
                <Command Description="" DisplayName="Orchestration Restore" Name="orchestration_restore" />
            </Category>
            <Command Name="PowerOn" DisplayName="Power On" Tags="power" Description="Power on device">
            </Command>
            <Command Name="PowerOff" DisplayName="Power Off" Tags="power" Description="Power off device">
            </Command>
            <Command Name="PowerCycle" DisplayName="Power Cycle" Tags="power" Description="Power off, then power on device">
                <Parameters>
                    <Parameter Name="delay" DisplayName="Delay" Type="String" Mandatory="False" DefaultValue="0"/>
                </Parameters>
            </Command>
        </Layout>
    </Driver>
    ```
    
- For generic connected commands, you must use a shell that is based on a supporting standard and include the Tags="remote\_connectivity" flag on the command:
    
    ```xml
    <Driver Description="Describe the purpose of your CloudShell shell" MainClass="driver.MyRemoteResourceDriver" Name="MyRemoteResourceDriver" Version="1.0.0">
        <Layout>
             <Category Name="Hidden Commands">
                <Command Description="" DisplayName="Orchestration Save" Name="orchestration_save" />
                <Command Description="" DisplayName="Orchestration Restore" Name="orchestration_restore" />
            </Category>
            <Command Name="MyConnectedCommand" Description="" DisplayName="My Connected Commmand" Tags="remote_connectivity">
            </Command>
            <Command Name="MyCommand" Description="" DisplayName="My Commmand">
            </Command>
        </Layout>
    </Driver>
    ```
    

And finally, in the `driver.py` file, define the connected commands. In this case, PowerOn, PowerOff and PowerCycle:

```python
def PowerOn(self, context, ports):
    """
    :type context: cloudshell.shell.core.driver_context.ResourceRemoteCommandContext
    """
    Pass
```

To enable intellisense, on the `driver.py`, include the ResourceRemoteCommandContext context in the command’s definition, as shown above.

:::note Notes
- Connected command definitions must include a ports parameter. You don’t need to actually use it in your command. Just make sure it’s included as it allows the connected command to run on multiple resources at the same time.
- Power commands only apply to unshared resources while generic resource commands can run on both shared and unshared resources.
- In CloudShell, the resource containing the connected command and the target resource must be directly connected to each other. If you have a switch resource in between, the connected command will not show on the target resource.
- You can use the CloudShell Automation API’s ExecuteResourceConnectedCommand and “power management” commands to add connected commands to other shells.
:::

### Example - power commands on a PDU shell:

**SetPortState** should be a driver helper function that implements the specific logic of how to change the state of the power port state in a specific PDU.

```python
import cloudshell.api.cloudshell_api as api


def PowerOn(self, context, ports):
    """
    :type context: drivercontext.ResourceRemoteCommandContext
    """
    api = self.__initApiSession__(context)
    output = ''
    for i in range(len(ports)):
        self.SetPortState(context, ports[i].split('/')[-1], "Online")  # Split the port number from its full address
        api.SetResourceLiveStatus(context.remote_endpoints[i].fullname, "Online", "The Resource is powered on")
        output += "Powered On {0}\n".format(context.remote_endpoints[i].fullname)
    return output

def PowerOff(self, context, ports):
    api = self.__initApiSession__(context)
    output = ''
    for i in range(len(ports)):
        self.SetPortState(context, ports[i].split('/')[-1], "Offline")  # Split the port number from its full address
        api.SetResourceLiveStatus(context.remote_endpoints[i].fullname, "Offline", "The Resource is powered off")
        output += "Powered Off {0}\n".format(context.remote_endpoints[i].fullname)
    return output

def PowerCycle(self, context, ports, delay):
    self.PowerOff(context, ports)
    sleep(int(delay))
    self.PowerOn(context, ports)
```

For reference, see the [PDU shell template](https://github.com/QualiSystems/shellfoundry-tosca-pdu-template) or [Generic resource with connected commands shell template](https://github.com/QualiSystems/shellfoundry-tosca-resource_with_connected_commands-template).
