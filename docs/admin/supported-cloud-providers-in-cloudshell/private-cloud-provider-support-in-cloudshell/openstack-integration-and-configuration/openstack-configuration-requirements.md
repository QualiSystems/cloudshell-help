---
sidebar_position: 1
---

# OpenStack Configuration Requirements

To enable CloudShell to deploy and manage the lifecycle of OpenStack instances, the following configurations and settings are required:

<table>
    <thead>
        <th>Requirement</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>OpenStack user</td>
            <td>
            Permissions required from the user specified in the OpenStack cloud provider resource:

- User should be admin on the project to enable the use of provider networks
- Create instances
- Create a network
- Create a subnet
- Access to images used for deployment
</td>
        </tr>
        <tr>
            <td>Quotas</td>
            <td>
            The following quotas should be provided:

- Number of Cores and Number of Instances: Important to set the same value for these quotas.
    
- Neutron number of networks and ports: It is recommended to specify the maximum number of quotas.
    
    Typically, about 3-4 ports are required per instance and hence the port quota should be sufficient. Also, note that for each instance, a port on the CloudShell Management network utilizes ports from this quota.
    
- To use Server groups, you may need to increase the "server group members" quota. Note that a very high value for this quota along with an "anti-affinity" policy would mean so many different hosts should be available.
</td>
        </tr>
        <tr>
            <td>Project Management Network</td>
            <td>
            A network needs to be created to store instances deployed by CloudShell Apps:

- Assign a subnet to the network.
- Make sure the network is not **external**. Every instance will have a network port on the management network.
- Set the network's **shared** flag to **True**. The network will be shared by instances (that are deployed across different sandboxes and potentially different tenants/projects.
- Make sure QualiX Server has a floating IP and is part of this network so that it can be accessed from external networks.
</td>
        </tr>
        <tr>
            <td>Floating IP subnet network</td>
            <td>
            - The subnet network must be **external**.
- The network should be “flat” – no need for segmentation.
- The network must be connected to a router.
- The floating IP is saved on the deployed app in the Public IP attribute
</td>
        </tr>
        <tr>
            <td>Supported releases</td>
            <td>
            CloudShell supports the following OpenStack releases:

- Ocata
- Pike
- Queens
- Rocky
- Stein
- Train
- Ussuri
- Victoria
- Wallaby
</td>
        </tr>
        <tr>
            <td>Supported API versions</td>
            <td>
            - Nova API - Version 2 (tested and used features of base v2.0 - additional features supported by sub-releases 2.X are not used)
- Neutron API - Version 2
- Keystone API - Version 3
</td>
        </tr>
        <tr>
            <td>Provider networks</td>
            <td>OpenStack provider networks are shared across all projects in your OpenStack installation. Therefore, to avoid ID collisions, make sure the VLAN services that will be used for OpenStack VM connectivity do not have overlapping allocation ranges for the same pool name. For information about setting up VLAN services, see [VLAN Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN.htm).</td>
        </tr>
        <tr>
            <td>Project Security Group</td>
            <td>
            To enable remote connections to OpenStack instances from CloudShell Portal (via QualiX), the following ports should be open on the project's Default Security Group:

- ICMP Open - (Required unless a policy prevents ICMP)
- TCP Port 22 for SSH
- TCP port 80/443 if running a web-server (Required if running web services that require external access)
- TCP Port 3389 for RDP On Windows

In addition, the QualiX Server VM must be assigned to the Project Security Group.
:::important
It is recommended to explicitly set the `Remote` property of the rules created in the Project Security Group. If CIDR is set, use the CloudShell management network's CIDR, for example: 172.16.1.0/24. If a security group is set, use the CloudShell management security group.
:::
:::note
The Project Security Group will be used for all OpenStack instances created by CloudShell.
:::
            </td>
        </tr>
        <tr>
            <td>Default Security Group</td>
            <td>
            To enable OpenStack instances to receive a floating IP, a default security group must be defined in the OpenStack project to be used by the cloud provider resource.

The default security group will be associated to all OpenStack instances that are deployed by Apps that use this cloud provider and have the **Add Floating IP** attribute set to **True**.
            </td>
        </tr>
        <tr>
            <td>VLAN Trunking</td>
            <td>(Applies to OpenStack Cloud Provider Shell version 1.2.0 and up) To allow CloudShell to create a new interface on the deployed App's VM for every VLAN service, make sure VLAN Trunking is enabled. For details, see this official OpenStack documentation page: [https://docs.openstack.org/neutron/pike/admin/config-trunking.html](https://docs.openstack.org/neutron/pike/admin/config-trunking.html).</td>
        </tr>
    </tbody>
</table>