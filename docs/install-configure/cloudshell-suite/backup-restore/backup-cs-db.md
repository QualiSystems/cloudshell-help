---
sidebar_position: 1
---

# Backing Up CloudShell Databases

This article explains how to back up your CloudShell databases.

:::warning
When you back up an active database you could have changes happening while you are taking the back up. This could lead to corruption in the backup or give you a backup that doesn’t exactly match what you were expecting. We therefore recommend that you perform the backup while CloudShell is shut down.
:::
**To back up CloudShell's MongoDB databases:**

- Visit this official MongoDB docs article: [https://docs.mongodb.com/manual/tutorial/backup\-and-restore-tools/](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)

**To backup CloudShell's SQL Server databases:**

1. Make sure all CloudShell users are logged off and are notified of the planned downtime.
2. Shut down CloudShell services on the appropriate relevant machines. Although not a hard requirement, it is recommended to shut down the Quali Server to get SQL in a non-running state.
    - Quali Server:
        
        1. On the Quali Server machine, open the Windows Services console.
        2. Right-click **Quali Server** and select **Stop**.
    - IIS Service:
    
      If running IIS Express:
    
        1. On the Quali Server machine, open the Windows Services console.
        2. Right-click **CloudShell Portal IIS Express Monitor** and select **Stop**.
    
      If running a full version of IIS:
    
        1. Open the IIS Manager console.
        2. Right-click the CloudShell Portal website and select **Stop**.
    
3. Perform a backup of the three CloudShell databases:
    1. In SQL Server Management Studio, connect to the relevant database server.
    2. In the **Databases** tree, right-click each Quali database, select **Tasks > Backup**.
        :::note
        By default, Quali databases include the Quali, QualiInsight, and QualiResults databases.
        :::
    3. In the **Back Up Database** dialog box, fill in the details. For additional information, see [https://docs.microsoft.com/en-us/sql/relational-databases/backup\-restore/create-a-full-database-backup\-sql-server](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/create-a-full-database-backup-sql-server).
    4. Click **OK** to create the selected backup.
        :::note
        If you are not sure which databases CloudShell currently uses, you can find the relevant information in the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\connections.config` file. The `Initial Catalog` parameters contain each database's name.
        :::
4. Restart CloudShell services on the appropriate relevant machines.
    - Quali Server:
        1. On the Quali Server machine, open the Windows Services console.
        2. Right-click **Quali Server** and select **Start**.
    - IIS Service:
    
      If running IIS Express:
    
        1. On the Quali Server machine, open the Windows Services console.
        2. Right-click **CloudShell Portal IIS Express Monitor** and select **Start**.
    
      If running a full version of IIS:
    
        1. Open the IIS Manager console.
        2. Right-click the CloudShell Portal website and select **Start**.