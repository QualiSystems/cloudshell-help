---
sidebar_position: 4
---

# Import the Insight Dashboards

Download the CloudShell Insight BI package (see [Download the Installation Files](../download-install-files.md)) and follow the steps in the following procedure.

**To configure the CloudShell Insight BI dashboards:**

1. As Sisense administrator, run the Sisense web application.
    
    ![](/Images/BI/AdminLogin.png)
    
2. Click the **Analytics** tab.
3. In the left pane, click the **Options** button \[+\] and then from the context menu click **Import Dashboards**.
    
    ![](/Images/BI/import-dashboards-cloudshell.png)
    
4. Import each dashboard as follows:
    1. Browse to the location where the Quali Insight Package was downloaded.
        
    2. Double-click a dashboard. Click **OK** in the confirmation window.
        
        The dashboard is added to the **Dashboards** pane in Sisense.
        :::note
        If you don't see any data in the dashboard. It's probably because you modified the ElastiCube name during import. To correct this, select the ElastiCube for each dashboard:  
        ![](/Images/BI/ElastiCubeName.png)  
        :::
    3. Repeat the previous step to import the rest of the Insight dashboards.
5. Share the dashboards with all CloudShell users.
    1. Hover over a dashboard, click the options button and select **Share**.
    2. In the window that pops up, start typing "everyone" and select the **Everyone** group.
        
        ![](/Images/BI/ShareDashboardToEveryone.png)
        
    3. Click **Save**.
    4. If a confirmation message pops up, click **Share**.
    5. Repeat these steps to share the rest of the dashboards.
        
        At this point, the dashboards are in Sisense and shared, but do not display any data.
        
6. Enable CloudShell users to access the relevant dashboards.  
    1. Click the **Admin** tab.
    2. From the left pane, under **Data Management**, select **Data Sources**.
    3. Locate the ElastiCube entry (titled "CS\_BI\_Cube"), click the options button and select **Data Security**.
        
        ![](/Images/BI/SisenseDataSecurity.png)
        
    4. In the **Data Security** page, click the **Add Field** button.
        
    5. Search for the term "email".
        
    6. Select the "email" in the result.
        
    7. Return to the **Analytics** tab and note it is no longer possible for the admin to see dashboard data.