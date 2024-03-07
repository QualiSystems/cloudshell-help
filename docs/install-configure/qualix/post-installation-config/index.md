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

- [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm)
- [Configure VM Web Console Access to vCenter App VMs (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm)
- [Enable HTTPS Connection Between QualiX and CloudShell Portal](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-SSL-Suprt.htm)
- [Enable QualiX Docker Deployment to Work With Trusted Java KeyStore Certificate](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-jks-cert.htm)
- [Customize Remote Access Terminals](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cstmz-rmt-access-trmnl.htm)
- [Set a Static IP for the QualiX VM](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Set-Static-IP.htm)
- [Restrict QualiX Access to Specific CloudShell Portals](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Restrict-qualix-access-to-portals.htm)
- [Modify Number of CPUs and Allocated Memory](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Mdfy-no-CPUs-allctd-mem.htm)
- [QualiX Configuration for Version 5.0 and up](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Qualix-5.0.htm)