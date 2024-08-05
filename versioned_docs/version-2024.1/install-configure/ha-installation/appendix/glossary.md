---
sidebar_position: 3
---

# Glossary

Terms used in this guide are described in the following table.

| Term | Description |
| --- | --- |
| Active-Active | All nodes in the cluster are active. A load balancing algorithm/policy determines the preferred node for a given session. This is a more scalable architecture. However, it is more complex to manage. |
| Active-Passive | A fully redundant instance of each node is present. The passive node is brought online when its associated primary node fails. |
| Active-Standby | One node in the cluster is active. The other node is inactive until failover is triggered (warm standby). |
| AlwaysOn Availability Groups | A high-availability and disaster-recovery solution that provides an enterprise-level alternative to MSSQL database mirroring. |
| ARR | Active Request Routing. This is an IIS server native load balancing solution. |
| ARR Server Farm | A logical group of application servers where HTTP requests are routed based on HTTP inspection rules and load balance algorithm. |
| Availability databases | A failover environment for a discrete set of user databases (an availability group) that fail over together. |
| Availability replica | An instantiation of an availability group that is hosted by a specific instance of SQL Server and that maintains a local copy of each availability database that belongs to the availability group.<br/>Two types of availability replicas exist: a single primary replica and one to four secondary replicas. The server instances that host the availability replicas for a given availability group must reside on different nodes of a single Windows Server Failover Clustering (WSFC) cluster. |
| NLB | Network Load Balancing. Use the NLB Manager to create and manage NLB clusters from a single computer. |
| SAN | Storage area network, dedicated network used to enhance storage devices. It is a high-speed network, providing a direct connection between servers and storage, including shared storage, clusters, and disaster-recovery devices. |
| SPOF | Single Point of Failure. |
| Warm Upgrade | An administrator is able to upgrade one node of the cluster to a new version of CloudShell (Quali Server) while the other node is active, then fall back to the new node and upgrade the standby without any downtime for the end user. |
| Windows load balancing manager | Windows load balancing manager enables you to create and manage Network Load Balancing (NLB) clusters from a single computer. By centralizing NLB administration tasks, many common configuration errors are eliminated. |
| WSFC | Windows Server Failover Clustering |