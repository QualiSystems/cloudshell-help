---
sidebar_position: 9
---

# Configure the Qualix Server for AWS EC2

Follow these guidelines when setting up QualiX in-browser connections in your AWS integration.
:::note
To connect to App instances without QualiX, you will need to access the keypair location defined in the AWS EC2 cloud provider resource and download the key-pair `.pem` file from the bucket bearing the reservation ID.
:::
- If the only QualiX server in your CloudShell deployment is the one in the Management VPC in AWS, refer to the [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Qualix.htm) on how to configure it, and for the server address, use the **QualixInstanceEIP** output from the **CloudFormation** process - see [Create a Management VPC and Networks using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Mng-VPC-Ntwrks.htm).
- If there are more QualiX servers in your CloudShell deployments, do the following for each relevant server:
    1. Install QualiX version 2.3 or above.
    2. Use an attribute to hold the QualiX Server address, and customize the `ServerUniversalSettings.xml` file on the Quali Server machine to have Quali Server take the QualiX Server address from this attribute.
    3. Add this attribute to the **Generic App Model** and set its value in all AWS templates defined in the App catalog for this region. Each App must have in this attribute the address of the QualiX Server in the Management VPC of its region.
        
- If you selected an internal deployment of the Management VPC, the QualiX Server does not have a Public IP and is accessible only by the network that is connected via VPN to the Management VPC, which is the network you defined in the **On Premise CIDR** input parameter when you created the Management VPC. If you need more networks to access the QualiX Server, which enables end users to access the AWS EC2 Apps in the sandboxes, configure the **Management VPC Routing Table** via the AWS Console and add those networks.
    

## Related Topics

- [Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Prfrm-Actns/Sndbx-Rmt-Cnct.htm)
