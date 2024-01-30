---
sidebar_position: 4
---

# Connecting Remotely to Devices from the Inventory Dashboard

Admins can connect remotely to a device using the device's address and user credentials via RDP, SSH, VNC, or Telnet. RDP, SSH and Telnet are available by default, while VNC must be configured by the administrator. You can also connect to devices from the sandbox workspace.

:::note
This applies to resources that support remote connections. It is possible to enable or disable remote connection via QualiX on the resource level. For details, see [Editing Resources from the Inventory Dashboard](./editing-resources-from-inventory-dashboard).
:::

**To connect to a device via remote protocol:**

1. In the **Inventory** dashboard, click the **Resources** tab.
   The **Resources** page is displayed.
    
2. Click the **More Actions** button ![](/Images/CloudShell-Portal/Manage/ExecutionServersServersMenuButton.png) and select the remote connection option:
   1. Telnet
   2. SSH
   3. RDP
   4. VNC
3. If prompted, perform additional steps, such as selecting the Windows application to use or entering the username and password to the device.
4. The device is displayed in a Windows application, or in your web browser (if the QualiX Solution Pack is installed).

## Related Topics

- [Inventory Dashboard](../inventory-dashboard)
- [Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)](../../sandboxes/sandbox-workspace/resources/connect-remotely-with-qualix) (from the sandbox workspace)
- [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Qualix.htm)
