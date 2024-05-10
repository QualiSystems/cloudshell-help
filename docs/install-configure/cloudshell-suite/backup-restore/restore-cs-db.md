---
sidebar_position: 2
---

# Restoring CloudShell Databases

This procedure explains how to restore CloudShell from existing database files.

**To restore CloudShell databases:**

1. Copy the backup files that you created to the appropriate machine.
2. Shut down CloudShell services on this machines, as described in the [Restoring CloudShell Databases](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Backup%20and%20Restore/rstr-cs-db.htm?Highlight=Restoring%20CloudShell%20Databases#Backing) procedure above.
3. Restore the backup files into the existing databases.
    1. In SQL Server Management Studio, connect to the CloudShell database server.
    2. In the **Databases** tree, right-click each Quali database, and select **Tasks >Restore\>Database**.
    3. In the **Restore Database** dialog box, fill in the details, pointing to the previously created backup. For more information, see [https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/restore-a-database-backup-using-ssms](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/restore-a-database-backup-using-ssms).
4. Restart CloudShell services:
    - Quali Server:
        1. Run the **Quali Server Configuration Wizard**.
        2. In the **Administrative Tasks** page, ensure that the Search Service is up to date.
    - IIS Service: Restart the service as described in [Restoring CloudShell Databases](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Backup%20and%20Restore/rstr-cs-db.htm?Highlight=Restoring%20CloudShell%20Databases#Backing) above.

You can now proceed to [Upgrade the Validation Environment](../upgrade-procedure/upgrade-staging.md).