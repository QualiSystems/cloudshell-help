---
sidebar_position: 4
---

# Create a Shared VPC using CloudFormation

The Shared VPC option is supported in the AWS 2G shell and enables you to deploy sandboxes to an existing VPC.

**Prerequisites:**

- Successfully deployed **0_Main.yaml** stack

**To create a Shared VPC:**

1. Add a principal for the **TGW Share** resource share.
    
    1. As an admin, open your AWS management account.
    2. Open the **Resource Access Manager** dashboard.
    3. Click the **TGW Share** resource share.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/ResourceAccessManager1.png)
        
    4. Click **Modify**.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/ResourceAccessManager2.png)
        
    5. Click **Next**.
    6. Add the AWS account ID of the shared account and click **Next**.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/ResourceAccessManager3.png)
        
    7. Update the resource share.
2. Create the CloudFormation stack.
    1. Click **Management Tools>CloudFormation**.
        
        ![](/Images/Admin-Guide/AWS-deployment-type/CloudFormationSection.png)
        
    2. As an admin, open the AWS account that will contain the shared VPC.
    3. Click the **Create Stack** button.
    4. In the **Select Template** page, select the **Specify an Amazon S3 template URL** option and enter the **3_Shared_VPC.yaml** template's URL. The template URLs are provided in [CloudShell Download Center](https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center) for each CloudShell release version.
    5. Click **Next**.
    6. In the **Specify Details** page, enter a **Stack name** and fill in the installation parameters.
        
        <table>
            <thead>
                <th>Parameter</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>Shared VPC CIDR</td>
                    <td>
                    VPC CIDR for the shared VPC. Default is 10.1.0.0/16.
        :::note Important:
        We strongly recommend to use a "/16" CIDR range. A smaller range will force you to specify subnet ranges for every new sandbox and may dramatically decrease the number of sandboxes you can have running at the same time.
        :::
                    </td>
                </tr>
                <tr>
                    <td>Default Subnet CIDR</td>
                    <td>
                    Default CIDR to be used by CloudShell. This CIDR range must be included in the defined VPC CIDR. Default is 10.1.254.0/24.
        :::note
        CloudShell cannot differentiate between this CIDR and the VPC CIDR, which can cause overlap. To avoid this from happening, we recommend specifying a limited default subnet CIDR. For example, "10.1.254.0/24” or "10.1.253.0/24”.
        :::
                    </td>
                </tr>
                <tr>
                    <td>VPN Address</td>
                    <td>The public IP address of the router on the network in which Quali Server resides.</td>
                </tr>
                <tr>
                    <td>Transit Gateway ID</td>
                    <td>Created by the deployment of the management VPC. To find the transit gateway ID, open the main CloudFormation stack , click the **Outputs** tab and copy the **TGWid** value.</td>
                </tr>
                <tr>
                    <td>Execution Server Role ARN</td>
                    <td>Created by the deployment of the management VPC. To find the role ARN, open the main CloudFormation stack , click the **Outputs** tab and copy the **ESRoleArn** value.</td>
                </tr>
            </tbody>
        </table>
        
        For example:
        
        ![](/Images/Admin-Guide/AWS-deployment-type/SharedVPCInstallationParams.png)
        
    1. Click **Next**.
    2. In the **Options** page, click **Next**.
    3. In the **Review** page, at the bottom, select the **I acknowledge that AWS CloudFormation might create IAM resources** check box.
    4.  Click **Create**.
        
        The stack is created.
        
1. Modify the Execution Server role ARN.
    1. As an admin, open your AWS management account.
    2. In the **CloudFormation** dashboard, click the main stack (bearing the stack name followed by "-VPCNAT. For example, my-stack-VPCNAT-2JDLSJ32D4LC).
    3. Click the **Resources** tab and click the **ESRole**'s physical ID.
    4. Click **CloudShell_EC2Access**.
    5. Click **Edit Policy**.
    6. Switch to the JSON tab and add the following statement for each shared VPC you deployed:
        
        ```javascript
        {
                    "Effect": "Allow",
                    "Action": "sts:AssumeRole",
                    "Resource": "<shared role arn>"
                },
        ```
        
        For example: JSON defining two shared VPCs:
        
        ![](/Images/Admin-Guide/AWS-deployment-type/SharedVPCJson.png)
        
    7. Replace "\<shared role arn\>" with the shared role ARN. To find the shared VPC role ARN, open your AWS account in a new browser tab, open the shared VPC CloudFormation stack , click the **Outputs** tab and copy the **SharedVpcRoleArn** value.
    8. Click **Review policy** and then **Save changes**.
2. Next, do one of the following:
    - If Quali Server is installed in your on-prem network: [Connect the Management VPC to Quali Server](./connect-the-management-vpc-to-quali-server.md).
    - If Quali Server is also on AWS: [Configure an Execution Server Selector for AWS EC2](./configure-an-execution-server-selector-for-aws-ec2.md).
