---
sidebar_position: 3
---

# Creating a Configuration Role in Windows Failover Cluster

**To create a configuration role:**

1. Open **Windows Failover Cluster Manager**.

2. Right-click **Roles** and select **Configure Role**.
    
    ![](/Images/HA1/License-Server-installation_161x116.jpg)
    

3. Click **Next**, select the **Generic Script** option, then click **Next**.

4. Enter the path to the `CloudShell Portal.vbs` file (for example: `c:\Quali\Portal.vbs`).

5. Enter a name for the role and click **Next**.

6. Click **Next** to complete the wizard.
    
    This creates a new role that starts to run.
    
    ![](/Images/HA1/Creating-a-Configuration-Role_1_548x55.png)
    

**To configure the CloudShell Portal virtual front with Quali Server:**

1. In **Cluster Manager**, open the **Roles** window.
2. Click the CloudShell Portal role.
3. At the bottom of the page, locate the **IP address** of your CloudShell Portal virtual front.
    
    For example, when using Windows cluster to cluster CloudShell Portal, the information in the following image is displayed:
    
    ![](/Images/HA1/Creating-a-Configuration-Role_1_1.png)
    
    In this example, CloudShell Portal's virtual IP is: 192.168.65.69.
    
4. Define the virtual front address on all Quali Server nodes:
    1. Navigate to one of the Quali Server nodes.
    2. Go to the `C:\Program Files (x86)\QualiSystems\CloudShell\Server` folder and open the customer.config file
    3. Add the following key to the file. This key sets the virtual front address to be used in emails sent from CloudShell to users.
        
        `<add key="PortalAddressLinkForEmails" value="protocol://PublicServerName:PortalPort"/>`
        
    4. Modify the key's values:
        
        | Parameter | Parameter details |
        | --- | --- |
        | `protocol` | http or https if CloudShell Portal is set to use SSL |
        | `PublicServerName` | The DNS name or IP address of the CloudShell Portal virtual front |
        | `PortalPort` | The port which CloudShell Portal is using (If the port is 80 or 443, remove this parameter and the colon from the key) |
        
    5. Repeat steps a-d for each Quali Server node in the cluster.
5. Move the role between all nodes – see [Moving a WSFC Role between Nodes](../../maintenance-of-ha-plugin/move-wsfc-role-between-nodes.md).