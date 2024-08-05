---
sidebar_position: 2
---

# Architecture (High Availability)

This architecture describes a Quali-certified automatic failover solution for all core components of the application, without a Single Point of Failure (SPOF). Alternative solutions are described in each respective article.

| Component| Solution |
| --- | --- |
| Quali App Server | Quali Server service - Windows Server Clustering (active/passive)<br/>QuickSearch - Windows Server Clustering (active/active) |
| License server | Windows Server Clustering (active/standby) |
| Database Servers (SQL Server, MongoDB) | Windows Server Clustering (active/standby) |
| Web Server | Basic, performance setup: Windows ARR load balancing (active/active)<br/>Advanced setup: Windows ARR load balancing (active/active)|
| Execution Server| Natively supported by CloudShell (active/active)|

The following diagram depicts the main components of the CloudShell application for an advanced set up, as deployed in an end-to-end HA Plugin within which Web server, license server, execution server and Application server may be co-hosted on each node of the application cluster. Each component may fail over independently without impacting the integrity and user experience of the end user.

![](/Images/HA-Deploy/Architecture.png)