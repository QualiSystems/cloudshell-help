# Configuring the Application Server

Quali server works with only one active node in Active-Passive mode. You can change any node in the cluster to be the active node. However, only one Quali server should be up at any time. Elasticsearch (a search engine that achieves fast search responses), is synchronized between nodes to ensure that the latest state is available in all nodes. After a node recovery, the node starts and elasticsearch launches automatically for synchronization with the online node.

Use the following procedures to configure Quali server to work in a cluster environment:

- [Locating the Cluster Name](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Fnd-clstr-nm.htm)
- [Modifying the Quali.vbs File](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/Mdf-Quali-vbs.htm)