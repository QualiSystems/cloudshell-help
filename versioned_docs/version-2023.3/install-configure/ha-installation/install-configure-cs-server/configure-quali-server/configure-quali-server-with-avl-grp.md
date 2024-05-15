---
sidebar_position: 4
---

# Configure Quali Server to Work with the Availability Group Listener

Associating Quali Server to an availability group listener allows Quali Server to access a database in a primary or secondary replica of an AlwaysOn availability group, so that when the primary Quali Server fails, the secondary switches online.

**To configure Quali Server to work with the availability group listener:**

1. Run the **Quali Server Configuration** again on the first node.

2. In the **Database Selection** page, click **Advanced** and for each database, select the **Availability Group Listener** as the database hostname.
    
    ![](/Images/HA1/Configuring-Quali-server-to_450x280.png)
    
    :::note
    In SQL Server 2016 Standard Edition, for each database, specify that database's listener and port in the format "`<hostname>,<port>`". For example:  
    ![](/Images/HA1/AlwaysOn-Availability-Groups_7.png)
    :::
    

3. Stop the **Quali Server** service.

**To see the AlwaysOn listener properties:**

- Right click the listener and open the properties:
    
    ![](/Images/HA1/Configuring-Quali-server-to_1.png)
    
    ![](/Images/HA1/Configuring-Quali-server-to_2.png)