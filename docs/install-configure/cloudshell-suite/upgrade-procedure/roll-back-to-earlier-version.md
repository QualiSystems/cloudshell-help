---
sidebar_position: 5
---

# Roll Back to Earlier Versions of CloudShell

Upgrading the CloudShell version makes irreversible changes in the database, therefore with any change to the installation it is recommended to back up your databases. In order to roll back to an earlier version of CloudShell, you need to restore the database to the compatible version.

**To roll back to an earlier version of CloudShell:**

1. Make sure that you have a backed-up version of the database that is compatible with the earlier version of CloudShell that you wish to install.
    
    :::note
    Without this earlier version of the database it will not be possible to roll back to an earlier version of CloudShell.
    :::
    
2. Back up your current files and databases.
    
    For more information about backing up CloudShell, see [Back Up and Restore CloudShell](https://help.quali.com/Online%20Help/2023.3/Portal/Content/IG/Backup%20and%20Restore/bkup-rstr-cs.htm).
    
3. Uninstall your current CloudShell version.
4. Install an earlier version of CloudShell.
    
    For instructions on how to install earlier versions of CloudShell, see the respective Installation Guides.
    
5. Restore the backed-up database that corresponds with the CloudShell version you wish to install.
6. Run **CloudShell Configuration** and connect CloudShell to the restored database.