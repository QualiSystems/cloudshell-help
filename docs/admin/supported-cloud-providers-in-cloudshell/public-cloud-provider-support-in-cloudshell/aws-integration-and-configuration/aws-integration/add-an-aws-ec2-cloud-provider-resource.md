---
sidebar_position: 7
---

# Add an AWS EC2 Cloud Provider Resource

The **AWS EC2** cloud provider enables the deployment of AWS instances from an Amazon Machine Image (AMI).
:::tip
We strongly recommend using the 2<sup>nd</sup> Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: [Replacing the 1st Gen shell with a 2nd Gen version](../../../../../devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell.md#replacing-the-1st-gen-shell-with-a-2nd-gen-version), [Cloud Provider Shells - Features and Capabilities Per Release](../../../cloud-provider-2g-shells-features-and-capabilities.md).
:::
**To add an AWS EC2 cloud provider resource:**

1. Log in to CloudShell as administrator and access the required domain. This will enable the Apps based on this cloud provider resource to be usable in this domain. For additional information, see [Managing Public Cloud Apps in Domains](../../managing-public-cloud-apps-in-domains.md).
    
2. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
3. Click **\+ Add New**.
4. In the **Create New Resource** dialog box, select the **AWS EC2** cloud provider template. To use the AWS 2<sup>nd</sup> Gen shell, select **Amazon AWS Cloud Provider Shell 2G**.
5. Enter a **Name** for the AWS EC2 resource.
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
    Access to the AWS account is provided using the IAM role configured in the **Management VPC**.
    
6. Click **Create**.
    
    The **Resource** dialog box is displayed.
    
    ![](/Images/Admin-Guide/Inventory-Operations/AWSResourceDiscoveryInformation.png)
    
7. Enter the required information.
    :::note
    All AWS elements must belong to the specified region.
    :::

    <table>
        <thead>
            <th>Attribute</th>
            <th>Supporting shell version</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Execution Server Selector</td>
                <td>All</td>
                <td>
                (Optional) This attribute points to a pre-defined group of execution servers (grouped by a common **Execution Server Selector** value). To make the association, enter the same value you specified on the execution server.
    :::note
    To use the out-of-the-box **Execution Server Selector** attribute, make sure it has the "Execution Server Selector" rule. For details on how to add the rule to the attribute, see [Defining attribute rules](../../../../setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/attributes.md#defining-attribute-rules).
    :::
    For additional information on managing App deployments per domains, see [Managing Public Cloud Apps in Domains](../../managing-public-cloud-apps-in-domains.md).
                </td>
            </tr>
            <tr>
                <td>Region</td>
                <td>All</td>
                <td>
                The code of the AWS region to be used by this cloud provider resource. For example, "us-east-1".
    :::note
    The AWS region must have **Management VPC** configured. For the list of supported regions, see [AWS Regions Supported by CloudShell](./aws-regions-supported-by-cloudshell.md).
    :::
                </td>
            </tr>
            <tr>
                <td>VPC CIDR</td>
                <td>AWS 1<sup>st</sup> Gen shell only</td>
                <td>CIDR to be used for sandbox VPC if **VPC Mode** is set to **Static**.</td>
            </tr>
            <tr>
                <td>AWS Mgmt SG ID</td>
                <td>All</td>
                <td>
                The Management VPC's security group (use the **SG1id** output when configuring the Management VPC for the region). For example, "sg-71240198".

    This value is used by the **Setup** process to configure the communication between the Management VPC's instances and the Sandbox instances.
                </td>
            </tr>
            <tr>
                <td>AWS Mgmt VPC ID</td>
                <td>All</td>
                <td>
                ID of the Management VPC. Used by the **Setup** process to set up the VPC and subnet for the sandbox (use the **ManagementVPCID** output when configuring the Management VPC for the region). For example "vpc-633fb904".

    This value is created when configuring the Management VPC for the region.
                </td>
            </tr>
            <tr>
                <td>Keypairs Location</td>
                <td>All</td>
                <td>
                S3 bucket containing sandbox PEM files (use the **S3Name** output when configuring the Management VPC for the region).

    Each active Sandbox creates a PEM file under a designated folder. For example, "sandbox-management".
                </td>
            </tr>
            <tr>
                <td>Max Storage Size</td>
                <td>All</td>
                <td>
                (Optional) The maximum number of GiB in the root volume. The value of this parameter will be the storage size limit for all apps deployed on this Cloud Provider. For example, "8".

    The value must be greater than or equal to the size of the root snapshot used. If set to "0", the default size of the snapshot will be used.
                </td>
            </tr>
            <tr>
                <td>Max Storage IOPS</td>
                <td>All</td>
                <td>
                (Optional) The maximum number of I/O operations per second to be supported by the volume. The value of this parameter is the storage IOPS limit for all Apps deployed on this Cloud Provider. For example, "240".

    This parameter is used only for storage of type **io1**, in which you can provision up to 30 IOPS per GiB. If set to zero, the default in the image is used.
                </td>
            </tr>
            <tr>
                <td>Networks In Use</td>
                <td>All</td>
                <td>
                Reserved networks that will be excluded when allocating sandbox networks, and therefore must include the Management VPC CIDR (which was provided as an input to the CloudFormation deployment process) as well as any other private networks that have access to the Management VPC.

    The syntax is comma separated CIDR. For example, "10.0.0.0/32,172.31.0.0/24".
                </td>
            </tr>
            <tr>
                <td>Instance Type</td>
                <td>All</td>
                <td>
                (Optional) The default AWS EC2 instance type for the deployed instance. The instance type determines the CPU, memory and networking capacity of the instance to be deployed. For example “t2.large”.
    :::note
    The instance type can be changed when creating the App in the **Manage** dashboard.
    :::
                </td>
            </tr>
            <tr>
                <td>VPC Mode</td>
                <td>All</td>
                <td>
                Every sandbox with AWS Apps deploys a VPC to AWS, while in Shared VPC mode, CloudShell deploys the sandbox to an existing VPC. This setting determines how the sandbox VPC selects a CIDR block.

    Options are:

    - **Dynamic**: The CIDR block is selected by Cloudshell Server. In other words, CloudShell deploys a new VPC with a dedicated CIDR for every sandbox.
    - **Static**: The CIDR block for all sandboxes allocated is taken from the **VPC CIDR** attribute. To configure CloudShell to support this mode, see the [Typical Workflows](https://github.com/QualiSystems/Amazon-AWS-Cloud-Provider-Shell-2G#typical-workflows) of the AWS EC2 2G shell's README file.
    - **Shared**: Indicates that the cloud provider resource will deploy to the shared VPC defined in **Shared VPC ID** and use the CIDR block defined in the **VPC CIDR** attribute.
    - **Single**: The sandbox infrastructure will be deployed within the Management VPC and use the VPC CIDR block.
    </td>
            </tr>
            <tr>
                <td>Static VPC CIDR</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>CIDR to be used for sandbox VPC if **VPC Mode** is set to **Static**.</td>
            </tr>
            <tr>
                <td>Shared VPC ID</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>(Mandatory for Shared VPC mode) Shared VPC's ID (can be found in the output of the shared VPC CloudFormation stack, in the **SharedVPCId** key). For example: `vpc-0bf24b1ebrd855e30`.</td>
            </tr>
            <tr>
                <td>Shared VPC Role ARN</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>(Mandatory for Shared VPC mode) Role created by the CloudFormation process with read/write permissions in the AWS account (can be found in the output of the shared VPC CloudFormation stack, in the **SharedRoleARN** key). This role is used by CloudShell to operate in the shared VPC.</td>
            </tr>
            <tr>
                <td>Transit Gateway ID</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>(Mandatory for Shared VPC mode) ID of the transit gateway (can be found in the output of the main CloudFormation stack, in the **TGWid** key).</td>
            </tr>
            <tr>
                <td>Additional Management Networks</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>
                Networks to be allowed to interact with all sandboxes. This is used for allowing connectivity to AWS resources outside the Management VPC.

    The syntax is comma separated CIDRs. For example, "10.0.0.0/24,10.1.0.0/16,172.31.0.0/24".
                </td>
            </tr>
            <tr>
                <td>VPN Gateway ID</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>(Applies to Shared VPC mode only) ID of the gateway to use. Required to connect the shared VPC's sandbox subnets to the VPN gateway. CloudShell does this by creating a route between the specified VPN gateway and the connected subnet within the VPC CIDR. Can be found in the output of the shared VPC CloudFormation stack, in the **VPNGWid** key.</td>
            </tr>
            <tr>
                <td>VPN CIDRs</td>
                <td>AWS 2<sup>nd</sup> Gen shell only</td>
                <td>(Mandatory for Shared VPC mode if VPN Gateway ID is defined) Comma-separated list of CIDRs in the local network to be used to VPN to the shared VPC. Example, 10.1.0.0/24,10.3.0.0/16</td>
            </tr>
        </tbody>
    </table>

8. Click Start **Discovery**.
    
    When the discovery process completes, a confirmation message is displayed. The cloud provider resource is displayed in the **Inventory** dashboard in CloudShell Portal and in Resource Manager Client.
    
    To customize the App deployment types and publish App orchestration parameters, see [Customizing App Deployment Types](../../../customizing-app-deployment-types.md)
    

9. Next, [Add an AWS EC2 App Template](./add-an-aws-ec2-app-template.md).