---
sidebar_position: 3
---

# Working with the ARR Cluster Virtual Front

After configuring the ARR load balancing cluster, you can use the cluster IP or name (for example, 192.162.63.110 or CloudShellPortal-LB) to browse the portal.

**To configure the portal virtual front with Quali Server:**

1. Connect to the Quali database using Microsoft SQL Server Management Studio. (if you are using SQL AlwaysOn – connect to the AlwaysOn Listener).

2. Copy the SQL statements below and paste them after changing these parameters:
    
    | SQL statement | Parameter details |
    | --- | --- |
    | `<<Quali Database>>` | Select the Quali Database your system uses |
    | `<<CloudShell Portal  Ip or Name>>` | Select the CloudShell Portal Virtual front IP or DNS name |
    | `<<CloudShell Portal Port>>` | Select the CloudShell Portal Virtual front port |
    
1. Run the following SQL statement. This SQL statement ensures that Quali server is aware of the portal cluster and does not use the portal cluster nodes for communication (for example, links that are in emails sent from Quali server should redirect you to the CloudShell Portal cluster and not to one of the individual nodes).
    
    ```sql
    USE <<Quali Database>>
    GO
    
    IF (select count(*) from PortalInfo) > 0
    BEGIN
    
    /*Choose your CloudShell Portal Virtual front Ip or name*/
    DECLARE @ip NVARCHAR(15) = <<CloudShell Portal  Ip or Name>>
    
    /*Choose your CloudShell Portal Virtual front portal port*/
    DECLARE @port INT = <<CloudShell Portal Port>>
    
    UPDATE [dbo].[PortalInfo]
       SET [MachineName] = @ip
          ,[Port] = @port
    /*If http is in use, change the http to https*/
          ,[PortalUri] = 'http://' + @ip + ':' + CONVERT(varchar(10),@port) + '/'
          ,[ModificationDate] = GETDATE()
    WHERE Id = (select max(Id) from [dbo].[PortalInfo])
    END
    ELSE
     PRINT 'No registered CloudShell Portal in the system, please register the Portal and run this statement again...'
    GO
    ```
    
    :::note
    You do not need to restart the server.
    :::