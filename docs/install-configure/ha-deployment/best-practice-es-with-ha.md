---
sidebar_position: 4
---

# Best Practice: Execution Server with HA Setup

Tests and Commands, for example, resource commands and blueprint commands, run in the Execution Server and not in the App server.

These commands usually use TestShell API or Quali API to communicate with and use methods in Quali server (for example GetReservationDetails). To use the APIs, the Quali Server address or IP must be provided in advance, connect to the server and then run the code. Similarly, with python drivers, you should use the details coming from the context.connectivity object, as shown in [Using the CloudShell API](../../devguide/developing-shells/driver-deep-dive.md#using-the-cloudshell-api).

In an HA scenario, you cannot predict in advance which App server is the one that is online during the command execution phase in the Execution Server, so therefore the virtual front address of the App server must be provided.

By using the **connectivityInfo** matrix in CloudShell Resource Manager drivers, there is no need to change all drivers to use the virtual front specific IP. An example of the matrix is depicted below:

![](/Images/HA-Deploy/Execution-server-with-HA-setup.png)

The best practice is to use the values in the matrix to operate and connect to the App server API’s.

When setting up HA, App server virtual front connectivity details are specified, for example:

![](/Images/HA-Deploy/Execution-server-with-HA-setup_1.png)

This IP or address (DNS name) is also used in the ‘connectivityInfo’ matrix when running commands. For example, in the image below, a simple driver is running in a HA setup and is printing the matrix content:

![](/Images/HA-Deploy/Execution-server-with-HA-setup_2_524x127.png)

This IP address is the App server virtual front IP, as you can see in the Windows cluster manager:

![](/Images/HA-Deploy/Execution-server-with-HA-setup_3.png)