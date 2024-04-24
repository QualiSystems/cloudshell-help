---
sidebar_position: 1
---

# Upgrading the CloudShell HA Plugin

This section describes the required steps to upgrade the Quali server clustering environment to a new version of CloudShell.

Repeat the following procedure for each **Quali Server** node in the Quali server clustering environment.

:::note
Do not perform this procedure in parallel. Upgrade each node separately.
:::

**To upgrade CloudShell:**

1. In Windows Failover Cluster Manager, right-click the **Quali Server** role and select **Stop Role**.
    
    ![](/Images/HA1/Upgrading-CloudShell-from_354x128.png)
    
    When the role stops, a Java process starts.
    
2. In **Task Manager**, close all **java.exe** processes (do this in all of the nodes in the cluster).
    
    If several Java processes are running, close the **java.exe** process that is running from the Quali server folder.
    

3. On each node, remove the `FtsReplicasShards` key from the Server installation directory (usually at `C:\Program Files (x86)\QualiSystems\CloudShell\Server\customer.config`).
4. Override the Quali HA folder with the new package:
    
    1. Download the latest official **CloudShell High Availability Solution Pack** zip package from [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center).
    2. Extract the package and replace the current CloudShell High Availability folder with the extracted folder.
5. Perform the following steps for each node (do not perform this procedure in parallel, upgrade each node separately):
    1. Install the new version of CloudShell.
    2. Run the server **Quali Server Configuration** wizard.
    3. Stop the **Quali Server** service and change it to **Manual**.
    4. Start the **Quali Server** service, ensuring that the service starts successfully.
6. In Windows Failover Cluster Manager, right-click the **Quali Server** node and in the context menu click **Start Role** to start the Cluster Quali Server Role.
7. Move the role between all nodes – see [Moving a WSFC Role between Nodes](./move-wsfc-role-between-nodes.md).