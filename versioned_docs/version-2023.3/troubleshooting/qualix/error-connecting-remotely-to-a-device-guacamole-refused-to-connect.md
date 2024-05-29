---
sidebar_position: 8
---

# Error Connecting Remotely to a Device: "guacamole refused to connect"

## Error Message

:::danger &nbsp;
This site can't be reached

![](/Images/Troubleshoot/Refused-Error.png)
:::
## Description

QualiX is unable to establish a remote connection to a device from CloudShell Portal.

## Solution

**To resolve the connection issue described above, follow these steps:**

1. From the CloudShell Portal machine, ping the QualiX machine to verify the connection between the CloudShell Portal machine and the Qualix machine.
2. Log in to a different device on the same network, and do the following:
    1. Ping the target device to verify that the target device is running and resides on the same network.
        
        If this fails, contact your IT department to power on the target device, and connect it to the network.
        
    2. Establish a remote connection to the target device to verify that the target device allows that type of connection.
        
        If this fails, contact your IT department to enable the desired connection to the target device.
        
3. Log in to the QualiX machine with your credentials, and do the following:
    1. Ping the target device to verify that there is a network route available to the target device.
        
        If this fails, contact your IT department to configure the network route.
        
    2. Establish a remote. connection to the target device to verify that the QualiX machine can connect to the target device.
        
        If this fails, contact your IT department for assistance.
        

**To resolve the Remote Desktop Connection failure issue, follow this step:**

An RDP connection may use different security policies.

- If you cannot connect to QualiX with the RDP connection, verify that the key added to the `ServerUniversalSettings.xml` file includes the following highlighted parameters:

```xml
<key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=http&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />
```

For additional information, see [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](../../install-configure/qualix/post-installation-config/configure-remote-access.md).
