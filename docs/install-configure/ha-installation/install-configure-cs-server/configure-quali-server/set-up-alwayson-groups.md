---
sidebar_position: 3
---

# Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)

:::note
Make sure to perform the steps in the [Configure Quali Server on the First Cluster Node](./config-quali-server-on-first-node.md) topic in order to work with the Availability group listener step after configuring the **AlwaysOn availability group**.
:::

**To cluster the database:**

1. Ensure that you create a full back up for all clustered CloudShell databases. For more information, see ([https://msdn.microsoft.com/en-us/library/ms187510.aspx](https://msdn.microsoft.com/en-us/library/ms187510.aspx)).

2. Make sure to open port 5022 on all cluster machines firewalls
3. Open the SQL server in which you created the CloudShell DBs, expand **AlwaysOn High Availability** and right-click **Availability Groups**.
4. Click **New Availability Group Wizard**.
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_396x123.png)
    

5. Specify a group name.
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_1_234x98.png)
    
6. Associate the availability groups to the CloudShell databases (Quali Database, Results Database, Insight Database).
    
    - For **SQL Server Enterprise Edition**, associate all three databases to the availability group.
    - For **SQL Server 2016 Standard Edition**, create two additional **AlwaysOn** availability groups by repeating steps 4-5 (3 groups in total), and associate each database to a different group.

7. Make sure that status in the **Status** column of every database is **Meets prerequisites**. If not, click the database status, follow the error message and resolve the issue.
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_2_383x138.png)
    
8. Click **Next**.
9. Under the **Replicas** tab, click **Add Replicas** and connect to all of the environment SQL nodes using SQL or windows authentication.
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_3_543x271.png)
    
10. Select the **Automatic Failover** checkbox for each of the servers and for each of the servers, select **Read-intent only** from the **Readable Secondary** dropdown list.
    
    :::note
    SQL Server 2016 Standard Edition does not support this feature.
    :::
    
11. Click the **Listener** tab, insert the values for **Listener DNS Name, Port** (1433 for MSSQL default) and select **Network Mode**. If you selected **DHCP**, then select **subnet**. If you selected **Static IP**, then specify an available IP in the subnet.
    
    :::note
    In **SQL Server 2016 Standard Edition**, set a different port number for each availability group's listener (3 in total).
    :::
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_4.png)

12. Click **Next**.

13. Select **Full**. Specify the database backup file location on the server and click **Next**.
14. Wait for the validation step to finish.
15. If an error occurs during this process, click on the error, resolve the problem and run the validation step again.

16. When all steps are free of errors, click **Next**.
17. Click **Finished**. The wizard is finalized and the clustering Role dependencies are created.
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_5.png)
    
    Now, the availability group is set up, and you can see all relevant data for it under the availability group name you specified in early step:
    
    ![](/Images/HA1/Setting-up-an-AlwaysOn-availability_6_285x227.png)