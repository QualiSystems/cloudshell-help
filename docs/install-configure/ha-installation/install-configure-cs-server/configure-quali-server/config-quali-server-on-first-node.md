---
sidebar_position: 1
---

# Configure Quali Server on the First Cluster Node

Configure Quali Server to communicate with the computer where the database is installed. You can either create a new database or use an existing QualiSystems database.

**To configure Quali Server on the first cluster node:**

1. Configure Quali Server (note that during configuration, when you specify the License server IP or name, ensure that you use the License server role IP that you configured earlier, see [License Server Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Lcns-srv-instl.htm)).
2. Run the following command at the command prompt: `services.mcs`
3. Right-click the **Quali Server** service and select **Stop**.
4. When the service has stopped, right-click the **QualiServer** service and select **Properties**.
5. In the **Quali Server** service's **Properties** window, in the **Startup type** menu, select **Manual**.
6. Next, set the same certificate on all Quali Server nodes. For additional information, see [Set the Same Certificate on all Quali Server Nodes](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Sttng-sm-crtfct-on-all-Quali-srv-nds.htm).