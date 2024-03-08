---
sidebar_position: 1
---

# Back Up and Restore ElastiCube and Dashboards

Before changing the ElastiCube or dashboards, create a backup copy. This backup copy can then be used to roll back your changes, if needed.

## Creating a backup copy of the ElastiCube

Before changing ElastiCube, create a backup so you can always roll back your changes.

**To create an ElastiCube backup:**

1. As Sisense administrator, run the Sisense web application.
    
    ![](/Images/BI/AdminLogin.png)
    
2. Click the **Data** tab.
3. Locate the **CS\_BI\_Cube** tile. Click its options button and select **Export Model** to save the `*.smodel` file locally.
4. Provide a name and click **Save**.

## Restoring ElastiCube from a backup

You can use a backup copy to restore ElastiCube.

**To restore ElastiCube from a backup:**

1. As Sisense administrator, run the Sisense web application.
    
2. Click the **Data** tab.
3. Import the ElastiCube backup and make sure to give it the same name as the one you want to replace. Since the ElastiCube has the same name as the one you want to replace, no further actions are needed.

## Creating a dashboard backup

Before changing an existing dashboard, create a backup of the dashboard so you can always roll back your changes.

**To create a backup of a dashboard:**

1. As Sisense administrator, run the Sisense web application.
    
2. Click the **Analytics** tab.
3. For each dashboard, hover over the dashboard, click the options button and select **Export**.
    

## Restoring a dashboard from a backup

**To restore a dashboard from a backup:**

1. As Sisense administrator, run the Sisense web application.
    
2. Click the **Analytics** tab.
3. Import a dashboard.
    
    ![](/Images/BI/import-dashboards-cloudshell.png)
    
4. Select to **Overwrite** the existing one.
    
    ![](/Images/BI/RestoreDashboard.png)