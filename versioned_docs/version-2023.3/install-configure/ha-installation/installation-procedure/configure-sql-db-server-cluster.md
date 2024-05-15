---
sidebar_position: 3
---

# Configuring the SQL Database Server Cluster (AlwaysOn)

The SQL server database clustering uses the **AlwaysOn Availability Group** solution.

The **AlwaysOn Availability Groups** feature is a high-availability and disaster-recovery solution that provides an enterprise-level alternative to database mirroring. AlwaysOn Availability Groups maximizes the availability of a set of user databases for an enterprise. An availability group supports a failover environment for a discrete set of user databases, known as availability databases that fail over together. An availability group supports a set of read-write primary databases and one to four sets of corresponding secondary databases. Optionally, secondary databases can be made available for read-only access and/or some backup operations.

An availability group fails over at the level of an availability replica. Failovers are not caused by database issues, such as, a database becoming suspect due to a loss of a data file, deletion of a database, or corruption of a transaction log. For more information about AlwaysOn Availability Groups, see [https://msdn.microsoft.com/en-us/library/hh510230(v=sql.110).aspx](https://msdn.microsoft.com/en-us/library/hh510230(v=sql.110).aspx).
:::note-one-line
**Note:** **AlwaysOn Availability Groups** is a Microsoft feature.
:::
The supported versions of MS SQL Server are:

- SQL Server 2012 Enterprise Edition
- SQL Server 2014 Enterprise Edition
- SQL Server 2016 Standard Edition

## Setting up and configuring an instance of SQL Server to Support AlwaysOn Availability Groups

For more information about AlwaysOn Availability Groups, see [https://msdn.microsoft.com/en-us/library/gg509118(v=sql.110).aspx](https://msdn.microsoft.com/en-us/library/gg509118(v=sql.110).aspx).

## Prerequisite

Set-up nodes with Windows Server Failover Clustering (WSFC)

## Configuring SQL Server AlwaysOn availability group

**To configure the SQL Server AlwaysOn availability group:**

1. Open SQL Server on one of the nodes.

2. Connect to all SQL servers that should be part of the SQL cluster.

3. Choose **View > Registered Servers**.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups.png)
    

4. Add the required servers to a new group.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_1.png)
    

5. Right-click on a server and click **SQL Server Configuration Manager**.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_363x301.jpg)
    

6. Select **SQL Server Services**.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_2_469x129.png)
    

7. Right-click the SQL Server instance and select **Properties**.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_3_465x277.png)
    

8. Open the **AlwaysOn High Availability** tab.

9. Check the **Enable AlwaysOn Availability Groups** check-box.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_4_432x213.png)
    :::note-one-line
    **Note:** If there is no cluster name, make sure to install Windows failover cluster and configure a cluster first.
    :::

10. Right-click the SQL Server instance and click **Restart**.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_5.png)
    

11. Enable **AlwaysOn** for each of the DB cluster nodes.

12. Repeat steps 5-10 for each SQL server presented in the MSSQL registered servers pane.
    
    ![](/Images/HA1/AlwaysOn-Availability-Groups_6.png)
    
    The cluster is now configured for **AlwaysOn**.