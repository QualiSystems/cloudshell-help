---
sidebar_position: 4
---

# Deleting Execution Servers

This article explains how to properly remove execution servers from CloudShell. This includes having a backup execution server that is configured to handle the to-be-deleted execution server's assignments.

**To delete an execution server:**

1. In CloudShell Portal, open the **Manage \> Execution Servers \> Servers** page.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ExecutionServerManagementPage_587x389.png)
    
2. Make sure you have at least one other working execution server (online and included).  
    
3. Click the name of the execution server to be deleted and check if it has a configured Execution Server Selector attribute. For example:
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ExecutionServerAssociations_474x303.png)
    
    If the execution server has associations, make sure to set the same associations on another execution server. For details, see [Setting Up Execution Servers to Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Tst-n-Cmd-Exc.htm).
    
4. Delete the execution server.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ExecutionServerDelete_753x327.png)
    
5. On the execution server machine, open Apps & Features and uninstall the execution server.
    
    ![](/Images/Admin-Guide/Setting-Up-CloudShell/ExecutionServerAppsAndFeatures_606x452.png)
