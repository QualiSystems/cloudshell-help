# AWS Integration

The AWS deployment type integrates CloudShell with the AWS public cloud. This integration enables the deployment of CloudShell Apps in AWS. CloudShell supports deploying AWS instances from AMI (Amazon Machine Image) images.

CloudShell supports three infrastructure deployment modes:

- **Dedicated VPC** mode: (Default) CloudShell deploys a new VPC and subnet(s) for each sandbox and deletes that VPC and related cloud resources when the sandbox ends. This mode is provided with CloudShell via the out-of-the box AWS shell. For details,
    
    The following diagram illustrates an AWS integration (with a local CloudShell installation) hosting two live sandboxes:
    
    ![](/Images/Admin-Guide/AWS-deployment-type/AWS-architecture.png)
    

- **Shared VPC** mode: CloudShell deploys the sandbox to an existing VPC. When the sandbox ends, the sandbox-deployed cloud resources such as subnets, instances and security groups are deleted from the cloud while the VPC remains. For details,
    
    :::note Notes about Shared VPC:
    - This mode is supported by the AWS EC2 2G shell, which needs to be downloaded separately from [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations).
        
        Applies to sandboxes based on AWS cloud provider resources that are configured to use Shared VPC mode.
        
    - New subnet(s) are created in the shared VPC for each sandbox and deleted when the sandbox ends.
        
    - CloudShell creates 2 dedicated security groups per sandbox, which are used to isolate AWS instances from instances of other sandboxes.
        
    - Shared VPCs can reside in different AWS accounts and different regions.
    :::
    The following diagram illustrates an AWS integration with two different accounts, where each account has a shared VPC with live sandboxes:
    
    ![](/Images/Admin-Guide/AWS-deployment-type/AWS-Architecture---Shared-mode.png)
    
- **Single** (Management VPC): CloudShell deploys the sandbox in the Management VPC, which was deployed as part of CloudShell's CloudFormation stack.

The deployment architecture in AWS requires a **Management VPC** to be created for each relevant AWS region. The Management VPC has 4 instances, which are always on:

- <strong style={{ color: 'blue' }}>QualiX</strong>: QualiX Server used to enable in-browser RDP, Telnet and SSH access to Apps in the sandbox.
- Execution Servers: Two Execution Servers named **es-shells** and **es-commands** are deployed in the region and for High Availability Mode, an additional two fallback execution servers are deployed named **es-shells-b** and **es-commands-b**.
    - **es-shells**: Execution server to be used for the deployment and management of the AWS instances. This execution server has access to AWS API and is associated with an AWS IAM role.
    - **es-commands**: Execution server to be used for running scripts and commands on the AWS instances. This execution server is associated with an empty AWS IAM role.
- **NAT**: (Created in integrations where Quali Server IS NOT installed on AWS) Network address translation instance that enables internally deployed AWS instances to initiate outbound traffic to the Internet or other AWS services, while preventing the AWS instances from receiving inbound traffic from the Internet. Do not touch this instance.
- **cloudshell-server**: Created when deploying a public Main CloudFormation template without VPN. It's the user's responsibility to install Quali Server on this instance. For details, see [Integrating AWS with Cloud-based CloudShell Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-CS-on-AWS.htm).
:::note
Keeping these instances running at all times entails a fixed monthly rate.
:::
Both the **es-shells** and **es-commands** execution servers in the Management VPC need to access the Quali Server, which is located outside of the Management VPC (on-premise, another AWS VPC or another public cloud). To allow this access, you need to configure a VPN between the Management VPC and the network in which the Quali Server resides.

When a new CloudShell sandbox with AWS EC2 Apps is starting, the out-of-the-box setup process creates a new VPC with a subnet in it (in shared mode, the sandbox subnet is created in an existing VPC defined in the AWS cloud provider resource). All AWS EC2 Apps within the same sandbox are deployed in this sandbox subnet (within the Sandbox VPC). This architecture allows both QualiX Server and the execution servers to access the Apps in the sandbox while keeping the Apps within one sandbox isolated from Apps in other sandboxes. Note that up to 255 AWS EC2 Apps may be deployed in a single sandbox.

In dedicated VPC mode, the sandbox VPC is connected to the Management VPC using a VPC Peering connection. In shared VPC mode, there is no peering between the management VPC and shared VPC, and communication is done via a static transit gateway, which acts like a router between the different VPCs.

:::note Notes:
- AWS EC2 Apps in the same sandbox are actually on the same subnet and VPC, and can interact with each other.
- CloudShell allows sandboxes to have multiple subnets. See [Subnet Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Subnets.htm).
- When the sandbox ends, the Sandbox VPC along with all its components (the subnets, the App instances and the VPC Peering) are automatically deleted by CloudShell. In Shared VPC mode, the sandbox subnets and instances are deleted but the VPC infrastructure remains.
- In dedicated mode, when the sandbox ends, the Sandbox VPC along with all its components (subnets, App instances and the VPC peering) are automatically deleted by CloudShell. In shared mode, the subnets and App instances are deleted but the shared VPC remains.
- Amazon API enables you to retrieve a sandbox's VPC name using the **ReservationId** tag with the sandbox's ID. This can be used, for example, in real-time automation processes.
:::
## AWS installation workflow

For each AWS region you want to integrate with CloudShell, perform the following steps:

1. [Create a Management VPC and Networks using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Mng-VPC-Ntwrks.htm#Create)
    
    In order to deploy a shared VPC integration where CloudShell sandboxes are deployed to an existing VPC, you need to also create a Shared VPC stack to define the AWS account and shared VPC to use, as explained in [Create a Shared VPC using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Shared-VPC.htm).
    
2. [Connect the Management VPC to Quali Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Cnct-to-Quali.htm#Connect)
3. [Configure an Execution Server Selector for AWS EC2](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Exec-Srv.htm#Configur)
4. [Add an AWS EC2 Cloud Provider Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-AWS-Cld-Prvdr-Rsc.htm#Create2)
    
    For shared VPC mode, make sure to also configure the shared VPC parameters on the cloud provider resource.
    
5. [Add an AWS EC2 App Template](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-AWS-App.htm)
6. [Configure the Qualix Server for AWS EC2](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Qualix-Srv.htm#Configur2)

## Related Topics

- [AWS Regions Supported by CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Regions.htm)
- [Required Permissions for AWS Deployment](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Cnfg-Rqrs.htm)
- [Managing Public Cloud Apps in Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Pblc-Cld-Apps-in-Dmns.htm)
- [Cost Management of AWS EC2 Instances](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/AWS-Cst-Mngmnt.htm)
- [Managing AWS EC2 Execution Servers](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Exec-Srv-Mng.htm)