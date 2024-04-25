---
sidebar_position: 1
---

# ElastiCube Table Build Error: "key already exists in the collection"

## Error Message

:::danger-one-line
Connection Failed  
The key `__<keyName>__` already exists in the collection.
:::

## Description

While building ElastiCube, one or more tables fail with the above error.

For example:

.![](/Images/Troubleshoot/ElasticubeTableBuildError_256x110.png)

Clicking Continue results in a failed build of the Quali Insight database.

## Solution

To resolve the issue:

1. [Build the Insight ElastiCube](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/bld-elasticube.htm).
2. If rebuilding ElastiCube doesn't fix the issue, manually reload each failed table.
    
    1. Open the Sisense ElastiCube Manager application in the BI server.
    
    1. Open the QS\_ElastiCube (or your custom elastic cube, if you have one).
    2. Click ElastiCube and then click Change Connectivity Settings.
    3. Make sure the correct QualiInsight database is selected.
    4. Scroll down until you find the bad table, hover over it and click the Change source provider button on the right.
    5. In the Connect to Server dialog box, select the database and then select the bad table.
    6. In the Change Source Provider Wizard, select the Database type.
    7. In the Connect to SQL Server dialog box, click Select Database and choose the database and click OK.
    8. In the Change table with Tables/Views dialog box, select the bad table and click Change.
        
        If you see multiple instances of the table, select the one that has Scheme Name "dbo".
        
    9. Repeat steps a-j to reload all the bad tables.
    10. Rebuild ElastiCube as explained in [Build the Insight ElastiCube](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/bld-elasticube.htm).

## Related Topics

[Minimum Requirements for CloudShell Servers and Clients](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/srvrs.htm)
