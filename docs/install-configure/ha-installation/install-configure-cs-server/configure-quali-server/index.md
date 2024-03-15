# Configuring Quali Server

After installing Quali Server, you need to configure the server to communicate with the clustered databases. This is done by setting up AlwaysOn availability groups, which associate the different Quali Server nodes to the CloudShell databases. Associating Quali Server to the availability group listener allows Quali Server to access a database in a primary or secondary replica of an AlwaysOn availability group.

The Quali Server node configuration process is as follows:

- [Configure Quali Server on the First Cluster Node](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Cnfg-Quali-srv-frst-clstr-node.htm)
- [Set the Same Certificate on all Quali Server Nodes](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Sttng-sm-crtfct-on-all-Quali-srv-nds.htm)
- [Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Stp-AlwaysOn-avlb-grp.htm)
- [Configure Quali Server to Work with the Availability Group Listener](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Cnfg-Quali-srv-for-Avlb-grp-lstn.htm)
- [Displaying Cluster Health Information](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Dspl-clstr-hlth-info.htm)
- [Configure the Remaining Cluster Nodes](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Cnfg-remain-clstr-nds.htm)