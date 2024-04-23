# Create a Management VPC and Networks using CloudFormation

The **CloudFormation** service creates the Management VPC, subnet within the Management VPC, and then launches three AWS EC2 instances, two with an execution server and one with QualiX. The execution servers then need to be configured to access the on-prem Quali Server. To set up a deployment where Quali Server is also installed on AWS, see [Integrating AWS with Cloud-based CloudShell Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-CS-on-AWS.htm).
:::note Important:
We strongly recommend using the new and improved [AWS 2nd Gen shell](https://community.quali.com/repos/5448/amazon-aws-cloud-provider-shell-2g). If you're using the 1<sup>st</sup> Gen version of the shell that comes out of the box with CloudShell, see [this version](https://help.quali.com/Online%20Help/2021.1/Portal/Content/Admn/VPC-Crt-Mng-VPC-Ntwrks.htm?Highlight=management%20vpc) of the online help.
:::
**To create a Management VPC and the required networks:**

1. Make sure you have the information required for this process, as listed in [Required Permissions for AWS Deployment](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Cnfg-Rqrs.htm).
2. As an admin, open your AWS management account, search for "cloudformation" and click the **CloudFormation** service.
    
    ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationSection.png)
    
3. Click the **Create Stack** drop-down list and select **With new resources (standard)**.
4. In the **Create stack** page, specify the appropriate Quali template. There are two template URLs for AWS integration and they are provided in [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center) for each CloudShell release version:
    
    - **0_Main.yaml**: Deploys the cloud infrastructure that is needed for the deployment type of your choice - internal or external deployments. This includes the management VPC and a peering to your local network's gateway for external deployments where Quali Server is installed locally. In this mode, a sandbox VPC is created for each sandbox.
        
        - In an internal deployment, the QualiX instance has only a Private IP associated with it. The Private IP is accessible from the networks that are connected to the Management VPC (such as the network in which the Quali Server resides).
        - In an external deployment, the QualiX instance has a Public IP associated with it.
            
    - **3_Shared_VPC.yaml**: Is optionally deployed after the **0_Main.yaml** and enables you to define an existing VPC that will host the cloud infrastructure (instead of creating a new sandbox VPC for each sandbox). Defines the shared VPC's account, IP ranges and transit gateway. For details, see [Create a Shared VPC using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Shared-VPC.htm).
5. Click **Next**.
6. In the **Specify Details** page, enter a **Stack name** and fill in the installation parameters.
    
    <table>
        <thead>
            <th>Parameter</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Network</td>
                <td>
                Determines how the network infrastructure is deployed. Options are:

    - **NAT**: Used for internal deployment, where the QualiX instance has only a Private IP associated with it. This option doesn’t expose a public IP to the internet. This option deploys QualiX and the Execution Servers on AWS while CloudShell is installed on prem and communicates with the AWS stack via VPN. It is also possible to have CloudShell installed on AWS. For details, see [Integrating AWS with Cloud-based CloudShell Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-CS-on-AWS.htm).
    - **Local**: Used for deployments where internet access is provided via the on prem VPN.
    - **Public (Elastic IP)**: Used for external deployment, where the QualiX instance has a Public IP associated with it.
    </td>
            </tr>
            <tr>
                <td>VPN Attachment</td>
                <td>
                Determines if to create a VPN connection to the on-prem network and how it will be attached to the management VPC. Options are:

    - **Transit gateway**: Connects the VPC to the on-prem network via a central hub.
    - **VPC gateway**: Connects the management VPC directly to the on-prem network.
    - **No VPN**: Does not create a VPN connection. Use this option if you plan on having CloudShell installed on AWS and don’t need on-prem access. This option does the following:
        - Does not create a VPN connection.
        - Deploys an empty Windows Server 2019 Full Base instance on AWS on which you will need to manually install CloudShell Server in this instance, as explained in [Integrating AWS with Cloud-based CloudShell Installation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-CS-on-AWS.htm).
    </td>
            </tr>
            <tr>
                <td>Management VPC CIDR</td>
                <td>
                The IP range (in CIDR notation) to be used for the Management VPC. Select a class C CIDR (/24).
    :::note
    The Management VPC will be later connected via VPN with your on-premise network so select an IP range that does not conflict with your other networks.
    :::
                </td>
            </tr>
            <tr>
                <td>Key Pair</td>
                <td>The KeyPair to use for all instances that will be created in the Management VPC.</td>
            </tr>
            <tr>
                <td>Instance Type</td>
                <td>The instance type to be used for the execution server and QuailX instances. The minimum recommended instance type is c4.large.</td>
            </tr>
            <tr>
                <td>High Availability Mode</td>
                <td>
                Use this option if you wish to set up AWS integration in High Availability mode. In this mode, the integration will create two additional execution servers, **es-shells-b** and **es-commands-b** that will be used for failover scenarios.
    :::note
    Before enabling High Availability mode, please take into account that the failover instances will incur additional costs.
    :::
                </td>
            </tr>
            <tr>
                <td>VPN Address</td>
                <td>
                The public IP address of the router on the network in which Quali Server resides.

    Leave empty if you set **VPN Attachment** to **No VPN**.
                </td>
            </tr>
            <tr>
                <td>On-premise CIDR</td>
                <td>The IP range (in CIDR notation) of the private network in which the Quali Server resides (outside of the management VPC).</td>
            </tr>
            <tr>
                <td>Enhanced S3 Bucket Security</td>
                <td>Select True to enable this option to encrypt and block public access from the S3 bucket.</td>
            </tr>
            <tr>
                <td colspan="2">
                Configure the execution servers (created by the CloudFormation process) to work with the Quali Server:

    Leave the below parameters empty if you set **VPN Attachment** to **No VPN** and **Network** to **Public (Elastic IP)**.
                </td>
            </tr>
            <tr>
                <td>CloudShell Server IP</td>
                <td>The IP Address of the Quali Server</td>
            </tr>
            <tr>
                <td>CloudShell Username</td>
                <td>The CloudShell admin user</td>
            </tr>
            <tr>
                <td>CloudShell Password</td>
                <td>The CloudShell admin password</td>
            </tr>
        </tbody>
    </table>
    
    For example:
    
    ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationInstallParams.png)
    
7. Click **Next**.
8. In the **Options** page, click **Next**.
    
9. In the **Review** page, at the bottom, select the **I acknowledge that AWS CloudFormation might create IAM resources** check box.
10.  Click **Create**.
    
    The stack is created.
    
    If stack creation fails with the below subscription error, make sure to subscribe to the CentOS 7 [Marketplace image](https://aws.amazon.com/marketplace/pp/B00O7WM7QW) and try again.
    
    ![](/Images/Admin-Guide/AWS-deployment-type/AWSSubscriptionError.png)
    
11.  Note the **Outputs** tab at the bottom of the page. You will need this information when you [Add an AWS EC2 Cloud Provider Resource](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-AWS-Cld-Prvdr-Rsc.htm).
    
    ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationStack.png)
    
12.  In the **VPC Dashboard**, open **VPN Connections** to see the VPN connection settings:
    
    ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationVPNConnections.png)
    
13.  Next, do one of the following:
    - If you want to set up a shared VPC integration in which AWS EC2 Apps are deployed to an existing VPC on AWS: [Create a Shared VPC using CloudFormation](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Crt-Shared-VPC.htm).
    - If Quali Server is installed in your on-prem network: [Connect the Management VPC to Quali Server](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Cnct-to-Quali.htm).
    - If Quali Server is also on AWS: [Configure an Execution Server Selector for AWS EC2](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Exec-Srv.htm).