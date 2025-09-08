---
sidebar_position: 5
sidebar_label: OpenStack Deploy Glance Image 2G
hide_table_of_contents: true
---

# OpenStack Deploy Glance Image 2G Deployment Path Attributes

The following attributes would be used to define the OpenStack Deploy Glance Image 2nd Gen:

<table>
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cloud Provider</td>
            <td>Name of the OpenStack cloud provider resource to be used</td>
        </tr>
        <tr>
            <td>Image ID</td>
            <td>UUID of the image to be used to create the App's Openstack instance. Can be found on Portal in **Compute>Images**>select the image>**ID** value.</td>
        </tr>
        <tr>
            <td>Instance Flavor</td>
            <td>
            (Optional) OpenStack instance Flavor. The instance flavor determines the CPU, memory and networking capacity of the instance. For example: "m1.tiny" or "m1.xlarge".

Can be found on Portal in **Compute**>**Flavors**>select the flavor>**Flavor Name**.
            </td>
        </tr>
        <tr>
            <td>Add Floating IP</td>
            <td>
            Set to **True** to use a static (public) IP address to communicate with the instance from outside the virtual network. Default value is **False**.

In most cases the floating IP address is associated with the instance until the instance is stopped or terminated, after which the floating IP is no longer available. You can reserve a floating IP in OpenStack to ensure that the IP is available to your subscription at any time.
            </td>
        </tr>
        <tr>
            <td>Affinity Group ID</td>
            <td>
            (Optional) UUID of the affinity group ("nova server-group") to which the instance will be associated. Affinity groups determine on which compute nodes to place instances.
:::note
To support the deployment of 'all' OpenStack instances using the same hypervisor, affinity groups with the 'affinity' policy are used.
:::
            </td>
        </tr>
        <tr>
            <td>Availability Zone</td>
            <td>(Optional) Name of the availability zone to which the instance will be associated. Availability zones are used to group network nodes to enhance the availability of network resources.</td>
        </tr>
        <tr>
            <td>Floating IP Subnet ID</td>
            <td>UUID of the subnet to use for Floating IPs.</td>
        </tr>
        <tr>
            <td>Auto UDEV</td>
            <td>Enable Linux udev rules to allow new interfaces to be recognized by the OS automatically. When using Windows machines, this attribute should be set to **False**.</td>
        </tr>
        <tr>
            <td>User Data</td>
            <td>Custom user data to pass to the deployed App instance. For example, some metadata or post-installation script. For details, see this official OpenStack documentation page: [https://docs.openstack.org/nova/rocky/user/user-data.html](https://docs.openstack.org/nova/rocky/user/user-data.html).</td>
        </tr>
        <tr>
            <td>Inbound Ports</td>
            <td>
            Semi-colon separated list of CIDRs, ports and protocols on which to open inbound traffic from outside of the sandbox.  
The syntax is `[cidr:][protocol:]port-or-port-range`. For example: `0.0.0.0/0:tcp:80;443;udp:200-220`.  
Default CIDR is "0.0.0.0/0". Default protocol is "tcp".
            </td>
        </tr>
        <tr>
            <td>Private IP</td>
            <td>The IP will be set for the management interface. The IP should be inside the management network ranges. OpenStack doesn't allow to use the same IP address for different instances.</td>
        </tr>
    </tbody>
</table>
