---
sidebar_position: 3
---

# Configuring the Server Farm

**To configure the server farm:**

1. Open the IIS manager on the ARR server.
    
    ![](/Images/HA1/Configuring-the-Server-Farm.jpg)
    

2. Under your local server, right-click **Server Farm**.
    
    ![](/Images/HA1/Configuring-the-Server-Farm_1_287x143.jpg)
    

3. Click **Create Server Farm**.
    
    ![](/Images/HA1/Configuring-the-Server-Farm_343x111.png)
    

4. In the **Server farm name** text field, enter the Server Farm name, and click **Next**.
5. Add the Portal machines details and click **Finish**.
    
    ![](/Images/HA1/Configuring-the-Server-Farm_1_406x275.png)
    

6. In the **Rewrite Rules** window, click **Yes**.
   
   ![](/Images/HA1/Configuring-the-Server-Farm_2.png)

7. To open the **Server Farm** main menu, click on the server farm name.
    
    ![](/Images/HA1/Configuring-the-Server-Farm_2_412x128.jpg)
    

8. Open the **Server Affinity** section.
9. Select the **Client affinity** option.
10. In the **Cookie name** field, change the name to "QualiARRAffinity" and click **Apply**.
    
    ![](/Images/HA1/Configuring-the-Server-Farm_3_344x133.png)
    

10. Return to the **Server Farm** main menu and click the **Load Balance** section.