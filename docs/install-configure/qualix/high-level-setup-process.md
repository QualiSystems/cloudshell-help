---
sidebar_position: 2
---

# QualiX High-level Setup Process

QualiX provides remote access connections to resource and App devices from your sandbox. This is the basic setup process:

1. Download the QualiX installation files.
2. Install QualiX Server on a vSphere VM or Docker container.
3. Log into the QualiX Server VM (for QualiX over vSphere).
4. Configure remote connection terminals in the Quali Server machine's `ServerUniversalSettings.xml` file.
    
    For example:
    
    ```javascript
    <key name="RDP" pattern=http://<CloudShell Portal Host>:<CloudShell Portal Port>/Qx/connect?qualix=<VM IP>&amp;qualixType=https&amp;rdp{qid}&amp;qtoken={qtoken}&amp;hostname={Address}&amp;protocol=rdp&amp;port=3389&amp;username={User}&amp;password={Password}&amp;security=any&amp;ignore-cert=true icon-key="RDP" />
    ```
    
    These terminals define the connection protocol to be used (RDP in the above example), admin access credentials and other relevant details.
    

QualiX provides two methods for remote access connectivity:

- Apache Guacamole provides access via RDP, SSH, Telnet and VNC. Apache Guacamole uses two services, which are activated by default when installing QualiX Server - **qualix\-tomcat** and **qualix\-guacd**.
- QualiX’ **VCenter Console Proxy** service provides access to vCenter App VMs using the vCenter Console. The vCenter Console Proxy service is disabled by default and needs to be manually activated.

## Related Articles

- [Downloading the QualiX Installation Files](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Dwnld-QualiX-instl.htm)
- [Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Instl-Cnfg.htm)
- [Post Installation Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Post-Instl-Cnfg.htm)