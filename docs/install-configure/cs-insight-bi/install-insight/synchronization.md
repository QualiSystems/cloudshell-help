---
sidebar_position: 8
---

# Synchronization

In order for SiSense ElastiCube data to be refreshed, you must define a synchronization schedule. During the synchronization, CloudShell copies data from the Quali DB to the Insight DB and locks several tables in the Insight DB in the process.

**To define a synchronization schedule:**

1. As Sisense administrator, run the Sisense web app.
    
    ![](/Images/BI/AdminLogin.png)
    

2. Click the **Data** tab.
3. Hover over the **QS\_ElastiCube** tile, click the options button and select **Schedule Build**.
    
    ![](/Images/BI/ScheduleBuild.png)
    
4. Set the build schedule.
    :::tip
    We recommend running a daily build at 2 AM since at 1 AM CloudShell updates the utilization reports.
    :::
    ![](/Images/BI/BuildSchedule.png)
    

4. Click **Save**.