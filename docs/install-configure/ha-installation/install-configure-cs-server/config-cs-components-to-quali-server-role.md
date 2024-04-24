---
sidebar_position: 6
---

# Configuring CloudShell Components to the Quali Server Role Address

Use the procedures described in this section to configure all other CloudShell components after completing the High Availability configuration for the Quali Application server.

All CloudShell components must be configured to the Quali Server Role address.

**To configure CloudShell components to the Quali Server Role address:**

1. Open** Windows Failover Cluster Manager**.
    
    ![](/Images/HA1/License-Server-installation_147x107.jpg)
    

2. Select the required Quali Server role.
    
    The role IP Address are displayed in the bottom half of the screen.
    
    ![](/Images/HA1/Configuring-CloudShell-components_1_171x123.jpg)
    

## In cases where a database is not present

**To activate AlwaysOn where a database is not present:**

1. Install Quali server.

2. Run the configuration of the Quali server from one of the nodes and configure the database connection to one of the database cluster nodes (in that way the Quali database is generated in one of the database cluster nodes).
    
    ![](/Images/HA1/Configuring-CloudShell-components_1_219x154.png)
    

3. Stop the **Quali server** service.
4. Next, cluster the database, as explained in [Configuring the SQL Database Server Cluster (AlwaysOn)](../installation-procedure/configure-sql-db-server-cluster.md).