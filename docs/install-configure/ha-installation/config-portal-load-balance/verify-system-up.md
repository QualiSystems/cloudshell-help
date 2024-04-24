---
sidebar_position: 4
---

# Verifying That the System Is Up and Working

**To verify that the system is up and working:**

1. Open IIS manager and click **Default Web Site** in the ARR server.

2. Under the management Website section in the Action pane click **Restart**.
3. Under the **Browse Website** menu item, click **Browse \*:80 (http)**.
    
    ![](/Images/HA1/Verifying-that-the-system_148x55.png)
    
    A browser opens with the CloudShell login screen (there might be a short delay the first time that this is performed).
    
    ![](/Images/HA1/Verifying-that-the-system.jpg)
    

4. In the **Server Farm** Main menu, go to **Monitoring and Management**.
    
    ![](/Images/HA1/Verifying-that-the-system_1.jpg)
    
5. Ensure that all servers have the **Available and Healthy** status.