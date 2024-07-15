---
sidebar_position: 3
---

# Upgrading to a New Version of CloudShell (with the latest HA Plugin)

:::note
Prior to performing this upgrade procedure, make sure you are familiar with CloudShells' installation procedure. For more information see the ["CloudShell Suite Installation and Configuration"](../../index.md).
:::

This section describes the required steps to upgrade the Quali server clustering environment to a new version of CloudShell with the latest official HA Plugin.

Repeat the following procedure for each cluster node in the clustered environment.

:::note
Do not perform this procedure in parallel. Upgrade each node separately.
:::

**To upgrade to a new CloudShell version:**

1. Stop Quali Server:
    1. Open Windows Failover Cluster Manager on the Quali Server cluster. 
    2. Right-click the Quali Server Role and select the option **Stop Role**
        
        ![](/Images/HA1/Upgrading-CloudShell-from_354x128.png)
        
    3. In **Task Manager**, close the java.exe process (do this in all of the nodes in the cluster).  
        If more than one Java process is running, the java.exe process that is running from the Quali server folder must be closed.
2. Stop CloudShell Portal:
    1. Open **Windows Failover Cluster Manager** on the **Portal** cluster.
    2. Stop the **Portal** role.
3. Stop the License Server:
    1. Open Windows Failover Cluster Manager on the** License Server** cluster.
    2. Stop the **License Server** role.

**Make sure to upgrade each node separately. The following steps should not be performed in parallel to the previous ones.**

4. Upgrade the License Server:
    1. Install the new version of CloudShell.
    2. Configure the license server by running the Configuration Wizard.
    3. Close all other configuration wizards (if other products installed on this machine).
    4. Validate License Server is running under Windows' Services.
5. Repeat step 4 for each of the **License Server** nodes.
6. Start the License Server Role in Windows Cluster.
7. Upgrade Quali Server:
    1. Install the new version of CloudShell. If the latest version is already installed on all nodes, skip this step.
    2. Configure the Quali server by running the Configuration Wizard.
    3. If other products are installed on this machine, close all other configuration wizards.
    4. Validate Quali Server is running under Windows' Services.
    5. Stop the **Quali Server** service and change it to **Manual**.
    6. Start the Quali Server service, ensuring that the service starts successfully.
    7. Stop the Quali Server service.
8. Repeat step 7 for each of the QualiServer nodes.
9. Start the **Quali Server Role** in Windows Cluster.
10. Move the role between all nodes. For further instructions, see [Moving a WSFC Role between Nodes](./move-wsfc-role-between-nodes.md).
11. Upgrade CloudShell Portal:
    1. Install the new version of CloudShell. If the latest version is already installed on all nodes, skip this step.
    2. Configure the CloudShell portal by running the Configuration Wizard.
    3. If other products are installed on this machine, close all other configuration wizards.
    4. Validate portal is accessible using "localhost” address.
12. Repeat step 11 for each of the CloudShell Portal nodes.
13. Start the **CloudShell Portal Role** in Windows Cluster.
14. Configure all other products in all clusters' nodes (Execution servers, Runtime, Sandbox API etc.)