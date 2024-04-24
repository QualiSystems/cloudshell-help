# Configuring the Application Server

Quali server works with only one active node in Active-Passive mode. You can change any node in the cluster to be the active node. However, only one Quali server should be up at any time. Elasticsearch (a search engine that achieves fast search responses), is synchronized between nodes to ensure that the latest state is available in all nodes. After a node recovery, the node starts and elasticsearch launches automatically for synchronization with the online node.

Use the following procedures to configure Quali server to work in a cluster environment:

- [Locating the Cluster Name](./locating-the-cluster-name.md)
- [Modifying the Quali.vbs File](./modify-the-quali-vbs-file.md)