---
sidebar_position: 1
---

# Auto Load Fails

## Error Messages

Autoloading a L1 resource:

:::danger-one-line
Application Warning

An error occurred trying to execute a command on a resource at this address: xx.x.xxx.xx.

The error was: There was an error talking to the server: System.Net.Sockets.SocketException (0x80004005): No connection could be made because the target machine actively refused it 127.0.0.1:4008

at System.NetSockets.TcpClient.connect(String hostname, Int32 port)

at QualiSystems.ResourceManagement.Service.APIService.TclDriverTcpClient.SendMessage(String message, String responseTerminationString, Func '1 isDriverAvailable,Int32 timeout, Int32 receivingDataTimeout)
:::

Autoloading a 1st or 2nd Gen resource:

:::danger-one-line
Synchronization conflicts

The operation completed with the following errors:

\* Resource 'cisco switch resource' synchronization failed due to a driver error:

'get\_inventory' command failed with 'SessionManagerException' error.

Description: ('SessionManagerImpl', 'Failed to create new session for type SSH, TELNET, CONSOLE\_SSH, CONSOLE\_TELNET, see logs for details').
:::

:::danger-one-line
Synchronization conflicts

The operation completed with the following errors:

\* Resource 'aaa router test' synchronization failed due to a driver error:

'get\_inventory' command failed with 'PySnmpError' error.

Description: Bad IPv4/UDP transport address xxx.xxx.xxx.x @161: \[Errno 11001\] getaddrinfo failed.
:::

## Description

In Resource Manager, when autoloading a resource fails, the above error messages may appear.

All the error messages described in this article stem from the same possible cause.

## Possible Causes

The resource's IP address includes blank spaces either before or after the address.

## Solution

**To resolve the issue described above, follow this step:**

1. In Resource Manager Client, update the resource's IP address so that there are no blank spaces either before, after, or within the address. See [Updating resource details](../../admin/setting-up-cloudshell/inventory-operations/adding-and-configuring-resources/adding-and-configuring-resources-in-resource-manager.md#updating-resource-details).

2. Rerun Autoload.

## Related Topics

- [L1 Switches](../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md)
