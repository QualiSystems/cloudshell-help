---
sidebar_position: 2
---

# Load the Insight ElastiCube

The Insight ElastiCube is a database containing all the data needed to successfully use our out-of-the-box dashboards.

Download the CloudShell Insight BI package (see [Download the Installation Files](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/dwnld-th-instln-fls.htm)) and follow the steps in the following procedure.

**To define the Insight Database Insight BI Dashboards:**

1. As Sisense administrator, run the Sisense web application.
    
    ![](/Images/BI/AdminLogin.png)
    
2. In the **Data** tab, do the following:
    1. Click **Import Model** and browse to the location where the Quali Insight Package was downloaded. Double-click the `*.smodel` file (Select **Overwrite** if necessary). Click **Import**.
    2. In the left pane, click the **Group by Data Source** button.
        
        ![](/Images/BI/GroupByDataSource.png)
        
    3. Expand **Data Sources**.
        
        ![](/Images/BI/DataSources.png)
        
    4. Hover over the **MS SQL** item, click the database's options button and select **Connection Settings\>Change Provider**. Define the Quali database provider in Sisense, as explained in [Connecting to SQL Server](https://documentation.sisense.com/latest/managing-data/connectors/sql-online.htm#gsc.tab=0).
    5. Hover over the **MS SQL** item, click the database's options button and select **Connection Settings\>Change Connection**.
        
        ![](/Images/BI/ChangeConnection.png)
        
    6. Specify the SQL Server details.
        
        ![](/Images/BI/ChangeConnection_2.png)
        
    7. Click **Next**.
    8. From the **Database** page, select the "QualiInsight" database (or corresponding name if it has been renamed).
    9. On the **Table Entry Page**, click the **Parse All** link, and select the **Table Query**'s checkbox (make sure all checkboxes are selected).
    10. Click **Done**.