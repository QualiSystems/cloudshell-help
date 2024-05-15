# Configuring Portal Load Balancing

To be able to communicate in a load balancing environment, start by configuring all web servers. This section describes how to enable communication between IIS on the load balancing server and it should be configured on load balancing servers using Windows Server Manager.

**To configure all web servers to communicate in a load balancing environment:**

1. Click **Start > Administrative Tools > Server Manager**.

2. Click **Manage** and then select **Add Roles and Features**.
    
    ![](/Images/HA1/Installing-Windows-Network_367x167.png)
    

3. In the **Before You Begin** tab, click **Next**.
4. In the **Installation type** tab, select **Role-based or feature-based installation**.
5. In the **Server selection** tab, select the server.
6. In the **Server Roles** tab, select the** Web Server (IIS)** option.
7. In the **Add Roles and Features Wizard**, click **Add Features**.
    
    ![](/Images/HA1/Configuring-Portal-load-balancing_1_351x347.png)
    

8. In the **Feature** tab click **Next**.
9. In the **Web Server Role** tab click **Next**.
10. In **Role Services**, expand the **Application Development** section and select the **Management Tools** section.
    
    ![](/Images/HA1/Configuring-Portal-load-balancing_2.png)
    

11. In the window, click **Add Feature**, then click **Next**.
12. Click **Install**.
13. Open IIS and under the IIS server configurations, select **Management Service**.
    
    ![](/Images/HA1/Configuring-Portal-load-balancing_403x161.jpg)
    

14. Stop the **Management Service**.
15. Select the **Enable remote connection** option and click **Apply**.
16. Start the **Management Service**.

1. Repeat steps 1-16 for each Portal server.