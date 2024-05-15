---
sidebar_position: 1
---

# Deployment Considerations (High Availability)

You may use a mix of virtual and physical hosts for each application component, based on performance expectations and hardware availability. It is recommended that the machines inside the cluster be of the same type.

For example, you might have an Application server hosted on physical hosts and a database server hosted on Virtual Machines. For best performance, it is recommended to host the application server and web server on separate machines.

There are different OS platform requirements if application components are hosted on physical as compared to virtual hosts, as described in the following table:

| Host Type| Description |
| --- | --- |
| Physical host| Windows 2012 Standard Edition on each node of the cluster|
| Virtual host| Windows 2012 Datacenter Edition (1 license for all nodes) or Windows 2012 Standard Edition for every pair of node|