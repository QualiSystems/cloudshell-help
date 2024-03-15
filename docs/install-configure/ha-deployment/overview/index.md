# High Availability Deployment Overview

CloudShell High Availability is available for Premium accounts only.

This document presents the recommended architecture for implementing CloudShell in a High Availability (HA) environment and should be read in conjunction with the [High Availability Installation and Configuration](https://help.quali.com/Online%20Help/0.0/Portal/Content/HA-Install/HA-Installation.htm).

A failover cluster is a group of independent servers (nodes) that work together to increase the availability and scalability of clustered nodes. The clustered nodes are connected by physical cables and by software. If a disaster occurs and the active cluster node goes down, the clustering solution changes the active node automatically to the standby server and Quali server starts on the new active node.

## Use Cases

This document covers the following use cases:

- Planned downtime: scheduled by administrator. Used for maintenance purpose. The primary system is manually switched to the standby mode.
- Unplanned downtime: failure of one of the component in the system, automated failover.