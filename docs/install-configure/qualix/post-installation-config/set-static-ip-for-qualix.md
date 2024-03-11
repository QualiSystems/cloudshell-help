---
sidebar_position: 6
---

# Set a Static IP for the QualiX VM

By default, QualiX VMs use a dynamic IP, which may change from time to time. To prevent this from happening, set a static IP.

**To set a static IP:**

1. Log in to the VM as the root user.
    
    The default credentials are:
    
    Username: **root**
    
    Password: **qs1234**  
    
2. In command-line, run the following command:
    
    ```javascript
    nmtui
    ```
    
3. In the **NetworkManager** screen, select **Edit a connection**.
    
    ![](/Images/QualiX/QualiXNetworkManager.png)
    
4. Select the **Wired connection 1** network.
    
    ![](/Images/QualiX/QualiXMachineNetworks.png)
    
5. In the **Edit Connection** screen, change **IPv4 CONFIGURATION** to **Manual**, and click **Show**.
    
    ![](/Images/QualiX/QualiXEditConnectionScreen.png)
    
6. In the **IPv4 CONFIGURATION** area, set the static IP address, gateway and DNS server, select the **Require IPv4 addressing for this connection** checkbox, and click **OK**.
    
    ![](/Images/QualiX/QualiXConfigureNetwork.png)
    
7. Return to the main screen and select **Activate a connection**.
    
    ![](/Images/QualiX/QualiXActivateConnection.png)
    
8. Select **Wired connection 1** and click **Activate**.
    
    ![](/Images/QualiX/QualiXActivateConnection2.png)
    
9. To verify, run `ifconfig` in command-line.
    
    The static IP addess is displayed in the command output.
    
    ![](/Images/QualiX/QualiXVerifyStaticVM.png)