---
sidebar_position: 2
---

# Microsoft Application Request Routing

Microsoft Application Request Routing (ARR) for IIS 7.0 and above is a proxy-based routing module that forwards HTTP requests to content servers based on HTTP headers, server variables, and load balance algorithms. A typical ARR deployment is depicted in the diagram below:

[![](/Images/HA1/Microsoft-Application-Request.jpg)](http://i2.iis.net/media/7178029/achieving-high-availability-and-scalability---arr-and-nlb-511-ARR%20Overview.jpg?cdn_id=2015-04-07-001)

ARR does not provide fault tolerant deployment features for itself and must rely on other complementary technologies and solutions to achieve high availability for the ARR tier.

![](/Images/HA1/Microsoft-Application-Request_1_333x217.jpg)

For more information about Application Request Routing, see [http://www.iis.net/learn/extensions/configuring-application-request-routing-(arr)/achieving-high-availability-and-scalability-arr-and-nlb](http://www.iis.net/learn/extensions/configuring-application-request-routing-(arr)/achieving-high-availability-and-scalability-arr-and-nlb).

Installing and configuring Network Load Balancing

This section describes how to install and configure the Network Load Balancing (NLB) Manager and to use it to create and manage NLB clusters from a single computer as well as replicate the cluster configuration to other hosts.