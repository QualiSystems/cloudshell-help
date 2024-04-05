---
sidebar_position: 1
---

# Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)

This section explains how to enable end-users to create "full access" connections to their devices and VMs from resources, services and Apps in CloudShell sandboxes. To achieve this, you need to associate the QualiX machine with the remote access terminals you want to make available in CloudShell Portal. Note that Apache Guacamole uses two services, which are activated by default when installing QualiX Server - **qualix-tomcat** and **qualix-guacd**.
:::note Notes:
- To set up connections to vCenter App VMs using vCenter Console protocol, see [Configure VM Web Console Access to vCenter App VMs (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm).
- In order to connect to a device or VM from CloudShell Portal, the resource of the element must include the User and Password attributes. To connect using a service, the service must include an Address. For details about adding such attributes, see [Prepare and Reserve Blueprint](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Wrk-Rsc-Mng.htm).
- This article explains how to set up remote access connections to vCenter App VMs using QualiX' vCenter Console Proxy service and requires the [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm?Highlight=Configure%20Remote%20Access%20to%20Sandbox%20Components%20Using%20SSH,%20RDP,%20Telnet,%20VNC%20(QualiX)#Prerequi) listed below. For other VMs or resources, see [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm?Highlight=Configure%20Remote%20Access%20to%20Sandbox%20Components%20Using%20SSH,%20RDP,%20Telnet,%20VNC%20(QualiX)#).
:::
**To enable remote connection from CloudShell Portal:**

1. In Quali server, open the following file in a text editor:
    
    `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml`
    
2. Under the `<ConfigurationSection name="LinkApplications">` tag, replace the lines of the relevant remote access terminals (Telnet, SSH, RDP, VNC) with the lines in this code sample:
    
    ```xml
    <key name="Telnet" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;telnet{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=telnet&amp;port=23&amp;username={User}&amp;password={Password}" icon-key="Telnet" />
    ```
    
    ```xml
    <key name="SSH" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />
    ```
    
    ```xml
    <key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />
    ```
    
    ```xml
    <key name="VNC" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;vnc{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=vnc&amp;port=5900&amp;username={User}&amp;password={Password}" icon-key="VNC" />
    ```
    :::note
    The `qtoken` & `qid` keys are automatically filled out by the server and are related to CloudShell security enhancements. You do not need to configure anything related to these keys.
    :::
3. Replace `<CloudShell Portal Host>` with the CloudShell Portal hostname or DNS name, and `<CloudShell Portal Port>` with the CloudShell Portal port.
    :::note
    For remote connections to devices from CloudShell, the Portal server value (for example, Portal's IP) specified here must be the same one used to log into CloudShell. Using a different value, like the hostname, will prompt the sandbox end user to log into CloudShell again to access the device.
    :::
4. Replace `<VM IP>` with the IP of the QualiX Server or Docker swarm host machine (if deploying QualiX over Docker).
    
    :::tip
    To find the IP of the VM, at the system prompt, run the `ifconfig` command. If you are using vSphere, VMware Tools also provides the machine's IP address (located in the vSphere Summary tab).
    :::
5. For SSH connections: To enable file transfer to and from SSH terminals, add the `enable-sftp=true` property to the SSH line. For example:
    
    ```xml
    <key name="SSH" pattern="http://localhost:80/Qx/connect?qualix=192.168.1.17&enable-sftp=true&qualixType=https&amp;ssh{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=ssh&amp;port=22&amp;username={User}&amp;password=secure" icon-key="SSH" />
    ```
    
6. Save the file.
7. Restart the **Quali Server** service to apply the changes.

## Related Topics

- [Enable HTTPS Connection Between QualiX and CloudShell Portal](./enable-https/index.md)
- [Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate](./config-jks-cert.md)
- [Customize Remote Access Terminals](../../../install-configure/qualix/post-installation-config/customize-remote-access.md)
- [Setting up Training Portal Using Docker (Over the Shoulder)](../../../install-configure/qualix/training-portal/setting-up-using-docker.md)