---
sidebar_position: 1
---

# Database Trimming

This article provides best practices for trimming the CloudShell databases. It is important to periodically trim the databases to minimize load and optimize performance. CloudShell uses several SQL and MongoDB databases for data storage and retrieval.

The databases that may cause issues from time to time are:

- **Quali DB**: SQL database that stores sandbox deployment and lifecycle management data
- **Insight DB**: SQL database that stores Insight data
- **MongoDB**: MongoDB database that stores sandbox Activity Feed and Output events

:::tip Tips for handing the SQL Server databases:

- Keep a backup copy of the production database before defragmenting/trimming.
- As a best practice, we recommend doing the following:
    - To allow CloudShell to work uninterrupted while you trim/defragment the database, run the procedure on a separate SQL Server. To do so, back up the database, restore it on another SQL Server and run the script on the restored database. When the operation completes, restore the updated database in the production SQL Server.
    - If you continue working with CloudShell while the database is being trimmed/defragmented, you may lose the new data when restoring back the database. To avoid losing new data, set a [Maintenance Window](../../../../admin/cloudshell-manage-dashboard/maintenance-window.md) for the duration of the operation. To get an idea of the time it will take, please perform the defragmentation/trimming procedure on a copy of the database. The operation may take several hours, depending on the size of the database.
:::
## Defragment Quali / Insight DBs

We recommend defragmenting the Quali DB on a weekly/monthly schedule or when the fragmentation reaches a certain fragmentation threshold, such as 30%.

**To check the fragmentation level of a database:**

- In the script below, set the following parameters
    
    - **\[Quali\]**: Replace with the name of the database (leave the square brackets).
    - **DDIPS.avg\_fragmentation\_in\_percent**: Set the fragmentation threshold percentage (default is 0)
    
    ```javascript
    USE [Quali]
    
    	SELECT S.name as 'Schema',
    	T.name as 'Table',
    	I.name as 'Index',
    	DDIPS.avg_fragmentation_in_percent,
    	DDIPS.page_count
    	FROM sys.dm_db_index_physical_stats (DB_ID(), NULL, NULL, NULL, NULL) AS DDIPS
    	INNER JOIN sys.tables T on T.object_id = DDIPS.object_id
    	INNER JOIN sys.schemas S on T.schema_id = S.schema_id
    	INNER JOIN sys.indexes I ON I.object_id = DDIPS.object_id
    	AND DDIPS.index_id = I.index_id
    	WHERE DDIPS.database_id = DB_ID()
    	and I.name is not null
    	AND DDIPS.avg_fragmentation_in_percent > 0
    	ORDER BY DDIPS.avg_fragmentation_in_percent desc
    			
    ```
    

**To rebuild a database:**

- In the script below, replace **\[Quali\]** with the name of the database (leave the square brackets) and run the script.
    
    ```javascript
    USE [Quali]
    	GO
    
    	DECLARE @TableName VARCHAR(255)
    	DECLARE @sql NVARCHAR(500)
    	DECLARE @fillfactor INT
    	SET @fillfactor = 80
    	DECLARE TableCursor CURSOR FOR
            SELECT OBJECT_SCHEMA_NAME([object_id])+'.'+name AS TableName
    	FROM sys.tables
    	OPEN TableCursor
    	FETCH NEXT FROM TableCursor INTO @TableName
    	WHILE @@FETCH_STATUS = 0
            BEGIN
            SET @sql = 'ALTER INDEX ALL ON ' + @TableName + ' REBUILD WITH (FILLFACTOR = ' + CONVERT(VARCHAR(3),@fillfactor) + ')'
    	EXEC (@sql)
    	FETCH NEXT FROM TableCursor INTO @TableName
    	END
    	CLOSE TableCursor
    	DEALLOCATE TableCursor
    	GO
    				
    ```
    

## Trim Insight DB of old data

This database doesn't have a retention policy, which may cause unnecessary load in highly active CloudShell deployments over a long enough period. As such, we recommend trimming this database for unneeded data every 1-2 years.

For example, this particular [script](/attachments/delete_old_insight_data.zip) clears data that is older than 12 months from the specified Insight DB.
:::note
To avoid loss of data, make sure the trimming process is completed before the Insight DB's nightly sync with CloudShell. For details, see [Synchronization](../../../cs-insight-bi/install-insight/synchronization.md).
:::
**To trim the database using the above script:**

1. Open the script in an text editor and set the following parameters:
    
    - **DB\_NAME**: Enter the name of the relevant database. There are 3 places within the script.
    - **@months\_keep**: Set the data retention period, in months (older data will be purged). Default is 12.
2. Save and run the script.
3. To follow the progress of the script, you can run the following and see the row count go down on relevant tables:
    
    ```css
    SELECT o.NAME,
    	        i.rowcnt 
    	        FROM sysindexes AS i
    	        INNER JOIN sysobjects AS o ON i.id = o.id 
    	        WHERE i.indid < 2  AND OBJECTPROPERTY(o.id, 'IsMSShipped') = 0
    	        ORDER BY i.rowcnt desc
        --ORDER BY o.name
    ```
    
4. To follow the progress of the DB trimming operation (which runs at the end of the script), run the following:
    
    ```css
    SELECT 
    			percent_complete, 
    			start_time, 
    			status, 
    			command, 
    			estimated_completion_time, 
    			cpu_time, 
    			total_elapsed_time
    			FROM 
    			sys.dm_exec_requests
    			WHERE
    	command = 'DbccFilesCompact'
    ```
    

## Reduce retention period for Mongo DB data

By default, MongoDB keeps sandbox Activity Feed/Output event data for 49+ years. Depending on your CloudShell deployment, you may need to reduce the retention period. For details, see [Limiting the time to keep sandbox Activity Feed/Output data](../../../../admin/setting-up-cloudshell/cloudshell-configuration-options/advanced-cloudshell-customizations.md#limiting-the-time-to-keep-sandbox-activity-feedoutput-data).