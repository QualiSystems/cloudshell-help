---
sidebar_position: 2
---

# Configuring ARR to Support SSL

**To configure the ARR to support SSL:**

1. Open the IIS Manager on the ARR machine.

2. Go to the Default Web Site configuration and open the **Bindings**.

3. In the **Add Site Binding** window, add a new binding of type **http**, specify the **Host name** and select the relevant **SSL certificate**.
    
    ![](/Images/HA1/Configuring-ARR-to-support_502x304.png)
    

4. Click **OK** and close the bindings menu.

5. Open the **Default Web Site** configuration and select **SSL Settings**.

6. Select the **Require SSL** checkbox and then select the required **Client certificates** setting.
    
    ![](/Images/HA1/Configuring-ARR-to-support_1_462x237.png)
    

7. Repeat steps 1-6 on all ARR machines.