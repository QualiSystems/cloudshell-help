---
sidebar_position: 7
---

# Configure the Qualix Server for Azure

- If the only QualiX server in your CloudShell deployment is the one in the CloudShell Management VNet in Azure, refer to the [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Qualix.htm) on how to configure it, and for the server address, use the **QualiXPublicIp** output from the Management Resource Group deployment process - see [Create a Management Resource Group and VNets](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-Crt-Mng-RSc-Grp.htm).
- If there are more QualiX servers in your CloudShell deployments, do the following for each relevant server:
    1. Install QualiX version 2.3 or above.
    2. Use an attribute to hold the QualiX Server address, and customize the `UniversalSettings.xml` file on the Quali Server machine to have Quali Server take the QualiX Server address from this attribute.
    3. Add this attribute to the **Generic App Model** and set its value in all Azure templates defined in the App catalog for this region. Each App must have in this attribute the address of the QualiX Server in the CloudShell Management VNet of its region.
        
- If you selected an internal deployment of the CloudShell Management VNet, the QualiX Server does not have a Public IP and is accessible only by the network that is connected via VPN to the CloudShell Management VNet, which is the network you defined in the **On Premise CIDR** input parameter when you created the CloudShell Management VNet. In this case, use the QualiX VM's private IP as the server address in the `ServerUniversalSettings.xml`.
    
- If CloudShell Portal is installed on Azure, in the `ServerUniversalSettings.xml`, specify the CloudShell Portal's private IP.

## Related Topics

- [Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Sndbx-Rmt-Cnct.htm)
