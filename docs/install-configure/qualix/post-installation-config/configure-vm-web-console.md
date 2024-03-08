---
sidebar_position: 2
---

# Configure VM Web Console Access to vCenter App VMs (QualiX)
:::note
This article explains how to set up remote access connections to vCenter App VMs using QualiX's vCenter Console Proxy service and requires the [Prerequisites](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm?Highlight=Configure%20VM%20Web%20Console%20Access%20to%20vCenter%20App%20VMs%20(QualiX)#Prerequi) listed below. For other VMs or resources, see [Configure Remote Access to Sandbox Components Using SSH, RDP, Telnet, VNC (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-Quali-Srv.htm).
:::
vCenter Apps include a **Get VM Console** command, which allows the end-user to open the vCenter App VM's web console directly from the sandbox. By default, when attempting to open the web console from the sandbox, the user is prompted to enter their vCenter credentials. However, it is possible to enable CloudShell to open the VM web console directly without having to enter the credentials. This is done by using the new **vCenter Console Proxy** service (provided with QualiX 4.0 and above) and attaching a **VM Console Link** reserved attribute to the deployed App shell that CloudShell will automatically populate with a link to the VM console.

## Prerequisites

- QualiX 4.0 and above
- vCenter Cloud Provider Shell 2G version 4.2.2 and above
- Supported vCenter version: 6.5, 6.7, 7.0
- Not supported for QualiX over Docker (only for QualiX over vSphere)

## Configuration

**To enable opening the VM Console directly:**

1. Create a **VM Console Link** attribute.
    1. In Resource Manager Client, open **Admin > Attributes**.
    2. Create a new “Password” attribute named **VM Console Link** with the **Setting** rule.
    3. Leave the attribute value empty.
        
        CloudShell automatically fills in the attribute’s value with a link to the VM console when (1) deploying the App in the sandbox, or (2) running the App’s **Get VM Console** command on a static VM.
        
    4. Save the attribute.
2. Do one of the following, depending on the shell:
    
    - If you're using the default **Generic App Model** resource model:
        1. In Resource Manager Client, open **Admin > Resource Families** explorer.
        2. Click **Generic App Family > Generic App Model**.
        3. Add the **VM Console Link** attribute to the **Generic App Model** resource model.
        4. Save.
        5. Restart Resource Manager Client.
    - If you're using a 2<sup>nd</sup> Gen deployed App shell, see [Adding custom attributes to a Shell](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Shells.htm#Adding2).
    - If you're creating a 2nd Gen deployed App shell, attach the attribute to the shell as a property in the shell's `shelldefinition.yaml` file. For details, see [Customizing Shells](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Shells/Customizing-Shells.htm).

## Setup

The vCenter Console Proxy service allows users to connect to VCenter VMs from CloudShell sandboxes using the VCenter console protocol.

**To set up the vCenter Console Proxy service:**

1. In Quali server, open the following file in a text editor:
    
    `C:\ProgramData\QualiSystems\Settings\Global\ServerUniversalSettings.xml`
    
2. Under the `<ConfigurationSection name="LinkApplications">` tag, add the following line:
    
    ```javascript
    <key name="VM Web Console" pattern="https://<QualiX Host>/ui/webconsole.html?query={VM Console Link}" icon-key="VM Web Console" />
    ```
    
3. Replace `<QualiX Host>` with the QualiX machine's hostname or DNS name.
4. vCenter Console Proxy service **is disabled** by default. To enable, SSH to QualiX Server and run the following (for QualiX 5.0 and above, see [Configure VM Web Console Access to vCenter App VMs (QualiX)](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Cnfg-vCenter-Console.htm?Highlight=Configure%20VM%20Web%20Console%20Access%20to%20vCenter%20App%20VMs%20(QualiX)#Run)):
    
    ```javascript
    systemctl enable qualix-wmks-proxy
    ```
    
    ```javascript
    systemctl start qualix-wmks-proxy
    ```
    

**Additional commands:**

- **To disable the service:**
    
    ```javascript
    systemctl disable qualix-wmks-proxy
    ```
    

- **To stop the service:**
    
    ```javascript
    systemctl stop qualix-wmks-proxy
    ```
    

- **To view logs:**
    
    ```javascript
    journalctl -u qualix-wmks-proxy
    ```
    

- **To check service status:**
    
    ```javascript
    systemctl status qualix-wmks-proxy
    ```