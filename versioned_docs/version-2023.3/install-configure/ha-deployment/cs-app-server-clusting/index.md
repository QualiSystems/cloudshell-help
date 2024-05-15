# CloudShell Application Server Clustering

QuickSearch is one of the main components in the CloudShell application server. This component is responsible for the high speed cache that enables the application server to perform high speed calculations for search and resource availability. This cache should be in sync at all times with the Quali DB.

In the High Availability environment, the deployment is with several application servers where at any time only one is actively working (Active-Passive approach). In cases where the application server service has stopped, the QuickSearch cache must be synced at all times with the active application server. This sync ensures that all cluster nodes are using the same data at all times and that the failover time is minimal.

![](/Images/HA-Deploy/CloudShell-application-server.jpg)