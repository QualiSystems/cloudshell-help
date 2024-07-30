---
sidebar_position: 2
---

# Set the Same Certificate on all Quali Server Nodes

In High Availability environments, all Quali Servers must use the same certificate to communicate with the same execution servers. Therefore, you must copy the certificate file from the first Quali Server cluster node (active Quali server node) and paste it in the same path on the other Quali Server cluster node(s) (the backup nodes).

:::note
If you have already performed these steps, skip to the next topic.
:::

**To set the same certificate on all nodes:**

1. Schedule a maintenance window for your CloudShell (HA) services.
    
    :::note
    The steps that follow can be performed while Quali server is active. There is no need to shutdown the cluster during this maintenance window. Note that a failover will be required during this process, and service may be interrupted.
    :::
    
2. On the active Quali Server node, copy the certificate from: `C:\ProgramData\QualiSystems\Settings\Global\certificate`.
3. Paste the copied certificate on all Quali Server cluster nodes in the following location: `C:\ProgramData\QualiSystems\Settings\Global`.
4. Verify the change by simulating a failover in the cluster:
    1. Open CloudShell Portal’s **Manage** dashboard, in the **Servers** page, ensure that each execution server’s **Connection** status is **Online**.
        
    2. Initiate a failover, by moving the Quali Server role from the active node to another, see [Moving a WSFC Role between Nodes](../../maintenance-of-ha-plugin/move-wsfc-role-between-nodes.md)
    3. In CloudShell Portal’s **Manage** dashboard, in the Servers page, ensure that each execution server’s **Status** remains **Included** and **Connection** remains **Online**. For additional information, see [Execution Servers - Executions Page](../../../../admin/cloudshell-manage-dashboard/managing-execution-servers/execution-servers-executions-page.md).
        
5. Repeat step 4 for each Quali Server node in the cluster.
6. Start the **Quali Server** service on the node you are currently interacting with.
7. Stop the **Quali Server** service.