---
sidebar_position: 1
sidebar_label: AWS EC2 Instance
hide_table_of_contents: true
---

# AWS EC2 Instance Deployment Path Attributes

The following attributes would be used to define the AWS EC2 Instance deployment:

<table>
    <thead>
        <th>Attribute</th>
        <th>AWS shell version</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Cloud Provider</td>
            <td>All</td>
            <td>Name of the AWS EC2 cloud provider resource to be used</td>
        </tr>
        <tr>
            <td>AWS AMI ID</td>
            <td>All</td>
            <td>
            AWS AMI ID to launch the instance from. For example, "ami-6869aa05".
:::note
The AMI must be accessible in the selected cloud provider's AWS region. 
:::
            </td>
        </tr>
        <tr>
            <td>Allow All Sandbox Traffic</td>
            <td>All</td>
            <td>
            Determines if the App allows inbound traffic from all other AWS EC2 Apps in the sandbox. If set to **False**, the instance will be isolated. Access from specific Apps or subnets can be defined using the **Inbound Ports** attribute or API.
:::note
By default, this attribute is **True**. This means that all access is allowed to all ports from all Apps in the sandbox and all ports are open for traffic within the sandbox.
:::
            </td>
        </tr>
        <tr>
            <td>Instance Type</td>
            <td>All</td>
            <td>
AWS EC2 instance type. The instance type determines the CPU, memory, storage and networking capacity of the instance. For example, "t2.large".

Leave empty to use the default instance type specified in the AWS EC2 cloud provider resource.

For built-in or Marketplace images, make sure the instance type is supported by the image you defined in the App.
            </td>
        </tr>
        <tr>
            <td>IAM Role Name</td>
            <td>All</td>
            <td>
            (Optional) Name of the IAM role to associate to the App's AWS EC2 instance. The instance will use this role to access AWS. 
:::note Notes
- The role must have the AWS permissions required for the actions the instance is expected to perform.
- If the role does not exist, or there are other issues with launching the instance with the role, App deployment will fail.
:::
            </td>
        </tr>
        <tr>
            <td>Inbound Ports</td>
            <td>All</td>
            <td>
Semi-colon separated list of ports and protocols to open for inbound traffic. Note that by default all ports are open for traffic between AWS EC2 App instances within the sandbox, but this can be changed using the **Allow All Sandbox Traffic** attribute.

In addition, all outbound traffic is allowed.

The syntax is:

`port[single/range]:protocol[tcp(default)/udp]`

For example: "80;443:tcp;200-220:udp".

:::note
If not specified, the protocol defaults to TCP.
:::

:::tip Tips
- To allow QualiX in-browser connections to the VM from the sandbox, include port "22".
- To set more specific security groups, it is recommended to use the TestShell API's [SetAppsSecurityGroup](pathname:///api-docs/2023.3/TestShell-API/TestShell%20XML%20RPC%20API.html) method instead. Unlike the Inbound Ports attribute, it enables you to define different port settings per subnet and allow inbound access to specific source CIDRs. For additional information, see [SetAppSecurityGroups Code Example](../../../../supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/setappsecuritygroups-code-example.md).
:::
            </td>
        </tr>
        <tr>
            <td>Public IP Options</td>
            <td>All</td>
            <td>
            Enables access to the instance from the internet. Options are:

- **No Public IP** - default option
- **Public IP (single subnet)** - (for Apps connected to a single subnet \[private or public\]) allocates a public IP
- **Elastic IPs** - (for Apps connected to multiple subnets) allocates an elastic IP for the App in each of the public subnets that it is connected to
    
:::note
In AWS EC2 Apps, this setting is mandatory if the App is connected to more than one network (private or public).
:::
            </td>
        </tr>
        <tr>
            <td>Storage Size</td>
            <td>2nd Gen only</td>
            <td>
            The root volume size. The value must be greater or equal to the size of the root snapshot used. If set to 0, the default defined in the image will be used. For example: 30.
            </td>
        </tr>
        <tr>
            <td>Storage IOPS</td>
            <td>2nd Gen only</td>
            <td>
            The default number of I/O operations per second that the root volume can support. This parameter is used only for storage of type *io1*, in which you can provision up to 30 IOPS per GiB. If set to 0, the default in the image is used. For example: 240.
            </td>
        </tr>
        <tr>
            <td>Storage Type</td>
            <td>2nd Gen only</td>
            <td>
            The type of storage volume. In AWS, there are several EBS Volume types that can be used, *gp2* and *io1* for SSD, *st1* and *sc1* for HDD or the standard type which is the old generation EBS volume type. If auto is selected, the storage type defined in the image is used.
            </td>
        </tr>
        <tr>
            <td>Root Volume Name</td>
            <td>2nd Gen only</td>
            <td>
            The device names available for the volume. Depending on the block device driver of the selected AMI's kernel, the device may be attached with a different name than what you specify. If left empty, the default defined in the AMI is used. For example: /dev/xvda
            </td>
        </tr>
        <tr>
            <td>Autoload</td>
            <td>2nd Gen only</td>
            <td>
            Enables the automatic execution of the Autoload command during reservation Setup.
            </td>
        </tr>
        <tr>
            <td>Wait for IP</td>
            <td>2nd Gen only</td>
            <td>
            If set to **False**, the deployment will not wait for the VM to get an IP.
            </td>
        </tr>
        <tr>
            <td>Wait for Status Check</td>
            <td>2nd Gen only</td>
            <td>
            If set to **True**, the App's deployment will end successfully only after instance status checks have passed. The status checks include network connectivity, physical host status, system status and more.
            </td>
        </tr>
        <tr>
            <td>Wait for Credentials</td>
            <td>2nd Gen only</td>
            <td>
            Enable in order to retrieve credentials from a Windows machine. Note that if this parameter is enabled and the credentials are not retrieved within 15 minutes, the deployment will fail.
            </td>
        </tr>
        <tr>
            <td>Custom Tags</td>
            <td>All</td>
            <td>
            Custom tags to be set on CloudShell-deployed AWS EC2 instances for billing, like the details of the project or team that deployed the instance.

For multiple tags, specify a comma-separated list of the key-value pairs. For example:

`tag_name1:ec2_instance,tag_name2:ec2_instance2`
            </td>
        </tr>
        <tr>
            <td>User Data URL</td>
            <td>All</td>
            <td>
            (Optional) URL to the raw version of the script to execute (PowerShell, bash, sh, etc.).
            </td>
        </tr>
        <tr>
            <td>User Data Parameters</td>
            <td>All</td>
            <td>
            (Optional) Parameters to pass to the user data script. For example, specifying `param1 param2` will result in the command running as follows:

`./file.sh param1 param2`
            </td>
        </tr>
        <tr>
            <td>Private IP</td>
            <td>All</td>
            <td>
            When the VPC is in static mode (defined on the AWS EC2 cloud provider resource's **VPC Mode** attribute), this attribute is used to set a static private IP for the deployed App.

To set a static private IPs in multi-subnet mode, specify a json string that maps the subnet request CIDR to the requested static private IP. For example: `{"10.0.0.0/28": "10.0.0.6"}`
            </td>
        </tr>
        <tr>
            <td>Enable Source Dest Check</td>
            <td>2nd Gen only</td>
            <td>
            Set to **True** to enable source/destination checks. Source/destination checks allow users to create custom routing inside the VPC. It is applied to all vNICs of a certain instance. If enabled, you can reconfigure routing to go through that instance. This value must be **False** for Virtual Appliance instances like virtual firewalls/routers.

:::note Important
This value must be False for Virtual Appliance instances like virtual firewalls/routers. The reason for this is that some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Setting **Enable Source Dest Check** to **False** ensures the instances are not stopped when they become impaired.
:::
            </td>
        </tr>
        <tr>
            <td>Status Check Timeout</td>
            <td>2nd Gen only</td>
            <td>
            Timeout, in seconds, for AWS status checks to pass. Some virtual appliances may take a while to fully deploy and AWS will show them as impaired from 20 minutes until they fully deploy. Therefore, to ensure virtual appliance instances are not stopped when they become impaired, use this attribute to provide a long enough timeout for the instance to complete its status check.

:::note
The default timeout is 600 seconds (10 minutes). However, instance deployment will fail once the instance status becomes "impaired". Specifying a status check timeout period will configure CloudShell to ignore the "impaired" status and instead wait for the instance deployment to complete or the timeout period to pass.
:::
            </td>
        </tr>
    </tbody>
</table>