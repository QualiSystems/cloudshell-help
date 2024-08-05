---
sidebar_position: 1
---

# Adding Servers to the Main IIS Manager

**To add all Portal servers to the IIS Manager in the ARR machines:**

1. Click **Start > Administrative Tools > IIS Manager.**

2. On the left side of the IIS Manager window, click the **Connect** icon.
    
    ![](/Images/HA1/Adding-Servers-to-the-main.jpg)
    

3. Select **Connect to a Server**.
    
    ![](/Images/HA1/Adding-Servers-to-the-main.png)
    

4. In the **Server name** field, specify the remote web server name.
    
    ![](/Images/HA1/Adding-Servers-to-the-main_1_292x151.png)
    

5. If a server certificate alert is displayed, click **Connect**.
    
    ![](/Images/HA1/Adding-Servers-to-the-main_2_250x172.png)
    

6. Specify a name for the server. This name is displayed in the **Start page** tree in the left pane of the IIS Manager.
    
    ![](/Images/HA1/Adding-Servers-to-the-main_3.png)
    
    The server name is now displayed in the **Connection** pane.
    

7. Repeat steps 1-6 for each of the Portal machines.