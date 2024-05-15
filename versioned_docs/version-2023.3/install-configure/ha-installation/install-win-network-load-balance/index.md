# Installing Windows Network Load Balancing

**To install Windows Network Load Balancing:**

1. Click **Start > Administrative Tools \> Server Manager**.

2. Click **Manage** and then select **Add Roles and Features**.
    
    ![](/Images/HA1/Installing-Windows-Network_367x167.png)
    

3. Click **Next**.

4. In the **Add Roles and Features Wizard**, select **Installation Type**.
    
    ![](/Images/HA1/Installing-Windows-Network_1_528x132.png)
    

5. Select **Role-based or feature-based installation** and click **Next**.
    
    ![](/Images/HA1/Installing-Windows-Network_2_461x327.png)
    

6. Select a server for the installation and click **Next**.
    
    ![](/Images/HA1/Installing-Windows-Network_3.png)
    

7. In the **Select features** menu, select **Features**.
    
    ![](/Images/HA1/Installing-Windows-Network_4_276x315.png)
    

8. In the **Features selection** pane, select the **Network Load Balancing** option.
    
    ![](/Images/HA1/Installing-Windows-Network_5_402x419.png)
    

9. In the **Add features that are required for Network Load Balancing** dialog box, click **Add Features**.

10. In the **Features selection** pane, click **Next**.
    
    ![](/Images/HA1/Installing-Windows-Network_6.png)
    

11. In the **Confirm installation selections** window, select the **Restart the destination server automatically if required** option.
    
    ![](/Images/HA1/Installing-Windows-Network_7_332x29.png)
    

12. Click **Install**.

13. Repeat steps 1-13 in each of the ARR servers (this can be done in parallel).