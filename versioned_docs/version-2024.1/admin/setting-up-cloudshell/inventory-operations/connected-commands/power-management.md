---
sidebar_position: 1
---

# Power Management

CloudShell provides its users the ability to control the power to devices in the lab through different power control devices such as PDUs (Power Distribution Units) which can be controlled remotely. This way, users of a particular resource in CloudShell Portal can use the power switch's commands from that target resource even though the commands reside in the power switch's driver. Such commands are called connected commands. For additional information, see Creating Connected Commands.

By defining the required parameters in the system and associating drivers to the devices, users and administrators can turn devices on and off either manually through the UI or through automated procedures.
:::note
It is possible to run power management commands via [CloudShell Automation API](../../../../api-guide/shell-dev-blueprint-design-api/cs-automation-api.md) and [TestShell API](../../../../api-guide/shell-dev-blueprint-design-api/testshell-api.md) either by executing the `ExecuteResourceConnected` command method on the connected resource in the sandbox or by running the following dedicated API methods: `PowerCycleResource`, `PowerOffResource` and `PowerOnResource`.
:::
## How CloudShell power management works

CloudShell allows users to control the power management of resources, using power switches.

To enable control on a resource's power management, the resource has to be connected to a power controller through its power port(s).

Once the resource is connected to a power controller, which is based on the PDU Shell, the resource can be switched on or off using the power management connected commands provided by the power switch. The resource must be exclusively reserved to activate power management commands.

The PDU Shells are used by CloudShell to interact with the power switches. The interaction method can vary according to the device capabilities. Some examples include; SNMP, Telnet and SSH. For the Shell to operate correctly through built-in CloudShell UI the Shell needs to be based on the PDU Shell template.

## Setting up Power Switches for power management operations

Like with other Shells, first try finding a suitable Shell in [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations). If you find one, import it into CloudShell, create a resource from it, and define the physical connections in CloudShell (just make sure to make a direct connection between the resources - if you have a switch or router resource in between, the connection will fail). Once defined, connected resources will have the power commands available in active sandboxes.

If we don’t have what you’re looking for, create a new shell using the PDU Shell template and implement the required capabilities. For additional information, see the CloudShell Dev Guide's [Defining a connected command (which runs on another resource)](../../../../devguide/developing-shells/common-driver-recipes.md#defining-a-connected-command-which-runs-on-another-resource).

## Related Topics

- [Define the Resource Connections of the Switch or Patch Panel](../connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel.md)
