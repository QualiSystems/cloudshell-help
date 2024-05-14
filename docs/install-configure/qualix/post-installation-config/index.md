# Post Installation Configuration

This section describes the configuration steps that are required after the first login to QualiX VM.

In the configuration process, you set up the remote access terminals that tell CloudShell how to create the connections to the sandbox components. The terminals are defined in the Quali Server machine's `ServerUniversalSettings.xml` file.

For example:

```xml
<key name="RDP" pattern="http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true" icon-key="RDP" />
```

QualiX provides two methods for remote access connectivity (each has its own remote access terminals):

- Apache Guacamole provides access via RDP, SSH, Telnet and VNC.
- QualiX’ **VCenter Console Proxy** service provides access to vCenter App VMs using vCenter's VM Web Console.

## In this chapter:

- [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](./configure-remote-access.md)
- [Configure VM Web Console Access to vCenter App VMs (QualiX)](./configure-vm-web-console.md)
- [Enable HTTPS Connection Between QualiX and CloudShell Portal](./enable-https/index.md)
- [Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate](./config-jks-cert.md)
- [Customize Remote Access Terminals](./customize-remote-access.md)
- [Set a Static IP for the QualiX VM](./set-static-ip-for-qualix.md)
- [Restrict QualiX Access to Specific CloudShell Portals](./restrict-qualix-access.md)
- [Modify Number of CPUs and Allocated Memory](./modify-cpu-and-ram.md)
- [QualiX Configuration for Version 5.0 and up](./qualix-config-for-5-and-up.md)