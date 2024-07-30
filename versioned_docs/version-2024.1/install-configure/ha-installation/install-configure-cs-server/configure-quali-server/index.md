# Configuring Quali Server

After installing Quali Server, you need to configure the server to communicate with the clustered databases. This is done by setting up AlwaysOn availability groups, which associate the different Quali Server nodes to the CloudShell databases. Associating Quali Server to the availability group listener allows Quali Server to access a database in a primary or secondary replica of an AlwaysOn availability group.

The Quali Server node configuration process is as follows:

- [Configure Quali Server on the First Cluster Node](./config-quali-server-on-first-node.md)
- [Set the Same Certificate on all Quali Server Nodes](./set-the-same-certificate.md)
- [Set up AlwaysOn Availability Groups (Only for AlwaysOn Users)](./set-up-alwayson-groups.md)
- [Configure Quali Server to Work with the Availability Group Listener](./configure-quali-server-with-avl-grp.md)
- [Displaying Cluster Health Information](./display-cluster-health-info.md)
- [Configure the Remaining Cluster Nodes](./configure-remaining-cluster-nodes.md)