---
sidebar_position: 1
---

# Requirements (High Availability Deployment)

This section describes the CloudShell clustering requirements.

The following table lists the requirements for the following infrastructure components: NICs, Switches and host.

Based on the [High Availability Deployment](../../ha-deployment/index.md) guide, the administrator should select the optimal set up for the environment (4/6 nodes on physical or virtual machines).

For additional requirements to configure Web Server Load Balancing, see [Requirements (High Availability Load Balancer)](../install-configure-cs-server/install-configure-cs-portal/config-web-server-load-balancing/requirements.md).

For hardware/OS requirements for CloudShell servers and clients, see [Minimum Requirements for CloudShell Servers and Clients](../../cs-system-requirements/min-requirements-for-cs.md).

## 4-machine High availability setup

<table>
<thead>
    <tr>
    <th>Component</th>
    <th>Requirements</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Quali Application Server, License server, CloudShell Portal</td>
        <td>
        - 2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition).
        - 2 network adapters (one for cluster use and one for client use)
        - Failover cluster role installed
        - Windows Failover Cluster Manager installed
        - 4 IP addresses free in the client subnet (for Cluster front, and components roles)
        </td>
    </tr>
    <tr>
        <td>SQL cluster / MongoDB cluster</td>
        <td>
        - As explained in [Database Prerequisites](../../cs-system-requirements/database-prereq.md)
        </td>
    </tr>
</tbody>
</table>


## 6-machine High availability setup

<table>
<thead>
    <tr>
    <th>Component</th>
    <th>Requirements</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>CloudShell HA (Quali Application Server plus License server)</td>
        <td>
        - 2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition).
        - 2 network adapters (one for cluster use and one for client use)
        - Failover cluster role installed
        - Windows Failover Cluster Manager installed
        - 3 Available IPs in the client subnet (for Cluster front and components roles)
        </td>
    </tr>
    <tr>
        <td>CloudShell Portal</td>
        <td>
        - 2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition).
        - 2 network adapters (one for cluster use and one for client use)
        - Failover cluster role installed
        - Cluster is configured using Windows Failover Cluster Manager
        - Available IP in the client subnet (for Cluster front)
        - IIS 8.0 installed
        - ASP.NET 4.5 enabled on IIS 8.0 web server (see [http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-using-aspnet-35-and-aspnet-45](http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-using-aspnet-35-and-aspnet-45))
        </td>
    </tr>
    <tr>
        <td>SQL cluster / MongoDB cluster</td>
        <td>
        - As explained in [Database Prerequisites](../../cs-system-requirements/database-prereq.md)
        </td>
    </tr>
</tbody>
</table>
