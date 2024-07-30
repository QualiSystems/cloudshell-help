---
sidebar_position: 4
---

# Configure the SQL Server Database Connection

## Configure access to an SQL database

CloudShell's SQL Server maintains three databases:

- **Quali**: Database for storing CloudShell inventory and blueprint data, including resources, Apps, services, blueprints, scripts, shells, etc. Note that starting with 2020.2, sandbox events data is stored in Quali Server’s MongoDB.
    
- **Insight**: Database for storing CloudShell data to be used by Insight. Specifically, it stores admin/user activity in real time, and receives daily resource utilization and attribute updates from the Quali Server. This information is then passed periodically to the Sisense ElastiCube database.
    
- **Results**: Database for storing the execution results of TestShell Studio tests that were executed in CloudShell Portal’s old Job Scheduling, TestShell Studio and TestShell Runner. Note that data related to the New Job Scheduling is stored in MongoDB.
    

**To configure access to an SQL database:**

1. Specify Sql as the database type:
    
    In the **I am using an… database** field, select **SqlServer** from the dropdown list.
    
    ![](/Images/IG2/Configuring-the-database-connection_1_1.png)
    

2. Specify whether to connect to an existing database or to create a new database.
    
    - If you are performing an update of the product and databases are already defined, select **Connect to an existing database**.
    - Otherwise, select **Create new database**.

3. In the **Server Name** dropdown list, specify the database name.
    
    - If you chose to use an existing SQL Server or SQL Express instance during the installation process, from the **Server Name** dropdown list, select the SQL server instance.
    - If you chose to install SQL Express 2016 SP1, in the **Server Name** dropdown list, verify that `localhost\QUALISYSTEMS2016` is displayed:
        
        ![](/Images/IG2/Configuring-the-database-connection_4_297x26.png)
        
    
    Otherwise, select the SQL server instance from the **Server Name** dropdown list.
    
4. Enter a name for the new database and click **OK**.
5. Configure the databases manually and click **OK** to return to the CloudShell Configuration Wizard.
6. Select the **Connect to existing database** option and click **Next** to continue.

When selecting the **Create new database** option, the installer creates databases with default names.

**To configure the database connections manually:**

1. Click the **Advanced** link to open the **Advanced Database Selection** window.
    
    ![](/Images/IG2/Configuring-the-database-connection_6.png)
    
2. Click **Change** next to the required database field to open the **Database Connection window**.
    
    ![](/Images/IG2/Configuring-the-database-connection_7.png)
    
3. In the **SQL Server** field, verify that the location of the SQL server is correct.
    
    ![](/Images/IG2/Configuring-the-database-connection_8_217x49.png)
    
    While using the built in SQL Express installation, the **SQL Server** field should display `localhost\<sql express instance name>`. If it does not, select the SQL instance path from the dropdown list.
    
4. Click **OK**.

## Move SQL Server default instance's folders

In certain cases, you might consider moving the database instance to another drive, for example, due to the restricted size of the current drive. If the SQL Server default instance's folders must be moved to a different path on the same server, follow the steps in the following procedure.

**To move the SQL Server default instances’ folders to a different path:**

1. Open SQL Server Management Studio.
    
    ![](/Images/IG2/Configuring-the-database-connection_9.png)
    

2. In Object Explorer, right-click the required server.
    
    ![](/Images/IG2/Configuring-the-database-connection_10.png)
    

3. In the context menu, click **Properties**.
    
    ![](/Images/IG2/Configuring-the-database-connection_11.png)
    

4. In the **Select a page** pane, click **Database Settings**.
    
    ![](/Images/IG2/Configuring-the-database-connection_12.png)
    

5. Enter the new default pathnames in the **Data** or **Log** fields, or click the **Browse** button to navigate to the path.

For information on how move a system database, click this [link](https://msdn.microsoft.com/en-us/library/ms345408.aspx).